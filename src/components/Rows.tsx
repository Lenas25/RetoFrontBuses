import { IconEyeShare } from "@tabler/icons-react"
import type { Data } from "../interfaces/interfaces"
import s from "./Table.module.css"

const Rows = ({ data, baseUrl }: { data: Data; baseUrl: string }) => {

  const handleInfo = async (id: number) => {
    
    const token = localStorage.getItem("token");
    try {
      const result = await fetch(`${baseUrl}/${id}`, { method: "GET",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        }, });
      const response = await result.json();
      const message = response.is_active ? `Numero de Bus: ${response.numeroBus}\nPlaca: ${response.placa}\nCaracteristica: ${response.caracteristicas}\nMarca: ${response.marcaData.nombre}` : "No esta activo";
      alert(message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
    <td>{data.id}</td>
    <td>{data.numeroBus}</td>
    <td>{data.placa}</td>
    <td>{data.marcaData.nombre}</td>
    <td>{data.caracteristicas}</td>
    <td className={data.is_active ? s.active : s.inactive}>
        {data.is_active ? "Si" : "No"}
      </td>
    <td>{data.created_at}</td>
    <td><button className={s.info} type="button" onClick={()=>handleInfo(data.id)}><IconEyeShare/></button></td>
    </>
  )
}

export default Rows