import Avatar from "../../img/foto.png";
import "../../styles/components/sidebar.sass";
import InformationContainer from "../InformationContainer/InformationContainer";
import SocialNetWorks from "../SocialNetworks/SocialNetWorks";
import curriculoPDF from "../../pdfs/curriculoAlexLopesPDF.pdf";

const SideBar = ({ onShowProjectsChange }) => {

  const handleShowProjects = () => {
    onShowProjectsChange(true);
  };

  return (
    <aside id="sidebar">
      <div className="avatar-container">
        <img src={Avatar} alt="Alex Lopes" className="avatar" />
      </div>
      <p className='title'>Desenvolvedor FullStack</p>
      <SocialNetWorks />
      <InformationContainer />
      <div className="divButtons">
        <a href={curriculoPDF} className='btn' download>Download currículo</a>
        <a href="#" className="btn" onClick={handleShowProjects}>
          Ver Projetos
        </a>
      </div>
    </aside>
  )
}

export default SideBar
