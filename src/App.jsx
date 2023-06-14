import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import "./styles/components/app.sass";
import { useState } from "react";

const App = () => {

  const [showProjects, setShowProjects] = useState(false);

  const handleShowProjectsChange = (value) => {
    setShowProjects(value);
  };

  return (
    <div id="portfolio">
      <h1>Alex Lopes da Rocha</h1>
      <SideBar onShowProjectsChange={handleShowProjectsChange} />
      <MainContent showProjects={showProjects} setShowProjects={setShowProjects} />
    </div>
  )
}

export default App
