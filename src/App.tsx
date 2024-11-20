import "./App.css";
import Sidebar from "./components/Sidebar";
import HomePage from "./HomePage";
import {useState } from 'react';

function App() {
	  const [login, setLogin] = useState(!!localStorage.getItem('token'));

  return (
    <div className='layout'>
      <Sidebar login={login} setLogin={setLogin} />
      <main>
				<HomePage login={login} />
			</main>
    </div>
  );
}

export default App;
