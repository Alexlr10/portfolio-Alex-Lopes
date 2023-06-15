import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../../styles/components/projectsContainer.sass";
import "../../styles/components/mainContent.sass";

const ProjectsContainer = () => {

  const [itemsApi, setItemsApi] = useState([])

  useEffect(() => {
    let abortController = new AbortController();

    const getGitHubAPI = () => {
      fetch('https://api.github.com/users/Alexlr10/repos')
        .then(async res => {
          if (!res.ok) {
            throw new Error(res.status)
          }
          const data = await res.json();
          const sortedItems = sortItemsByDate(data);
          setItemsApi(sortedItems);
        })
        .catch(e => console.log(e))
    }

    getGitHubAPI()

    return () => abortController.abort();
  }, [])

  const sortItemsByDate = (items) => {
    return items.sort((a, b) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);
      return dateB - dateA;
    });
  };

  return (
    <main id="main-content">
      <div className="btnBack">
        <Link to="/portfolio-Alex-Lopes" className="btn">
          Voltar
        </Link>
      </div>
      <section id="projects">
        {itemsApi.map(item => (
          <div className="info-card" key={item.id}>
            <li>
              <p>{item.name}</p>
              <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                URL: {item.html_url}
              </a>
              <p>Data Criação: {Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</p>
            </li>
          </div>
        ))}
      </section>
    </main >
  )
}

export default ProjectsContainer
