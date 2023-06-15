import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/main.sass';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContent from './components/MainContent';
import ProjectsContainer from './components/ProjectsContainer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/portfolio-Alex-Lopes",
        element: <MainContent />
      },
      {
        path: "/portfolio-Alex-Lopes/projects",
        element: <ProjectsContainer />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
