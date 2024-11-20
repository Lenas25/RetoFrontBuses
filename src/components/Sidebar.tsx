import { IconBus, IconLogout2, IconUser } from "@tabler/icons-react";
import s from "./Sidebar.module.css";

const Sidebar = ({login, setLogin} : {login: boolean, setLogin: React.Dispatch<React.SetStateAction<boolean>>}) => {

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLogin(false);
  };

  const handleLogin = async () => {
    const result = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "admin",
        password: "admin123",
      }),
    });
    const response = await result.json();
    localStorage.setItem("token", response.token);
    setLogin(true);
  };

  return (
    <div className={s.sidebar}>
      <div>
        <h2>Reto API</h2>
        <ul>
          <li>
            <a href="/">
              <IconBus /> Datos Buses
            </a>
          </li>
        </ul>
      </div>
      {login ? (
        <button className={s.auth} type="button" onClick={handleLogout}>
          <IconLogout2 /> Salir
        </button>
      ) : (
        <button className={s.auth} type="button" onClick={handleLogin}>
          <IconUser /> Iniciar
        </button>
      )}
    </div>
  );
};

export default Sidebar;
