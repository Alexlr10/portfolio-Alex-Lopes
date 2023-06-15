import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiMysql,
  DiReact,
  DiPython,
  DiDotnet,
  DiMsqlServer,
  DiAngularSimple,
  DiPostgresql,
} from "react-icons/di";
import { SiDocker, SiRabbitmq, SiSpring, SiTypescript } from "react-icons/si";

import "../../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "python", name: "Python", icon: <DiPython /> },
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "ts", name: "TypeScript", icon: <SiTypescript /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "sqlServer", name: "SqlServer", icon: <DiMsqlServer /> },
  { id: "postgre", name: "PostGreSQL", icon: <DiPostgresql /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "angular", name: "Angular", icon: <DiAngularSimple /> },
  { id: "dotnet", name: ".Net Core", icon: <DiDotnet /> },
  { id: "spring", name: "Spring Boot", icon: <SiSpring /> },
  { id: "docker", name: "Docker", icon: <SiDocker /> },
  { id: "rabbit", name: "RabbitMQ", icon: <SiRabbitmq /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Experiência</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnologiesContainer
