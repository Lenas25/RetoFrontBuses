import  { useCallback, useEffect,  useState } from "react";
import type { Data, TableProps } from "../interfaces/interfaces";
import Rows from "./Rows";
import s from "./Table.module.css"
const Table: React.FC<TableProps> = ({ headers, baseUrl }) => {
  const [data, setData] = useState<Data[]>([]);
  const [message, setMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (page: number) => {
    setLoading(true);
    try {
      const params = { page: page.toString() };
      const url = new URLSearchParams(params).toString();
      const token = localStorage.getItem("token");
  
      const response = await fetch(`${baseUrl}?${url}`, {
        method: "GET",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const result = await response.json();
      setData(result.content || []);
      setTotalPages(result.totalPages || 1);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessage("Error al cargar data");
    } finally {
      setLoading(false);
    }
  }, [baseUrl]);

  useEffect(() => {
    fetchData(currentPage-1);
  }, [currentPage, fetchData]);

  const goToPage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={s.table_container}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {message!=="" && <p>{message}</p>}
          <table className={s.table}>
            <thead>
              <tr>
                {headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <Rows data={row} baseUrl={baseUrl} />
                </tr>
              ))}
            </tbody>
          </table>

          <div className={s.pagination}>
            <button type="button" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => {
              const pageNumber = i + 1;
              return (
                <button type="button"
                  key={`page-${pageNumber}`}
                  className={currentPage === pageNumber ? "active" : ""}
                  onClick={() => goToPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            })}
            <button type="button" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Table;