import "./styles/components/app.sass";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
  
  return (
    <div id="portfolio">
      <h1>Alex Lopes da Rocha</h1>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default App
