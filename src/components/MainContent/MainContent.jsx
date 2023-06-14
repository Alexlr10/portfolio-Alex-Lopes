import "../../styles/components/mainContent.sass"
import AboutContainer from "../AboutContainer/AboutContainer"
import ProjectsContainer from "../ProjectsContainer/ProjectsContainer"
import TecnologiesContainer from "../TecnologiesContainer/TechnologiesContainer"

const MainContent = ({ showProjects, setShowProjects }) => {

  const handleShowProjects = () => {
    setShowProjects(false);
  };

  return (
    <main id="main-content">
      {!showProjects ?
        <><AboutContainer /><TecnologiesContainer /></>
        :
        <>
          <div className="btnBack">
            <a href="" className="btn" onClick={handleShowProjects}>
              Voltar
            </a>
          </div>
          <ProjectsContainer />
        </>
      }
    </main >
  )
}

export default MainContent
