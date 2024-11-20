import Table from "./components/Table";

const HomePage = ({login} : {login:boolean}) => {
  const headers = ["ID", "Número de Bus", "Placa","Marca de Bus","Caracteristicas","Activo" ,"Fecha Creación"];
  const baseUrl  = `${import.meta.env.VITE_API_URL}/bus`;

  return (
    <>
      <h1>Buses Data</h1>
      {
        login ? <Table headers={headers} baseUrl={baseUrl} /> : <h3>Por favor inicie sesión</h3>
      }
    </>
  );
};

export default HomePage;
