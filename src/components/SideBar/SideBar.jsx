import Avatar from "../../img/foto.png";
import { Link } from 'react-router-dom';
import "../../styles/components/sidebar.sass";
import InformationContainer from "../InformationContainer/InformationContainer";
import SocialNetWorks from "../SocialNetworks/SocialNetWorks";
import curriculoPDF from "../../pdfs/curriculoAlexLopesPDF.pdf";

const SideBar = () => {

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
        <Link to="/portfolio-Alex-Lopes/projects" className="btn">Ver Projetos</Link>
      </div>
    </aside>
  )
}

export default SideBar
