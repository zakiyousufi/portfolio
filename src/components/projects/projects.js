import { createContext, useState, useMemo } from 'react';
import { Carousel } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import ProjectsSVG from '../../images/svgs/pages/projects.svg';
import projects from './data';
import Card from './card'; // Import file name changed to 'card.js'

const CardContext = createContext(null);

function Projects() {
  const [card, setCard] = useState({ isOpen: false, project: null });

  const toggleCard = (project) => {
    setCard((prevState) => ({
      isOpen: !prevState.isOpen,
      project: project || null,
    }));
  };

  const contextValue = useMemo(() => ({ card, toggleCard }), [card, toggleCard]);

  return (
    <CardContext.Provider value={contextValue}>
      <div className="home-container d-flex flex-column flex-md-row">
        <div className="d-flex justify-content-center  flex-column w-50 align-items-center">
          <img src={ProjectsSVG} alt="Home" className="home-svg img-fluid w-50" />
        </div>
        <div className="d-flex flex-column justify-content-center w-75 content">
          <h2 className="name sub-title font-weight-bold text-center w-100 title">
            Projects
          </h2>
          <Carousel className="carousel-project slide mt-5 w-100 pt-5">
            {projects.map((project) => (
              <Carousel.Item key={project.name} onClick={() => toggleCard(project)}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h4 className="name sub-title font-weight-bold text-center project-name">
                    {project.name}
                  </h4>
                </div>
                <img src={project.images[0]} alt={project.name} className="project-img mb-5" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div id="card" className={card.isOpen ? 'open' : 'close'}>
          <button className="closebtn" type="button" onClick={() => toggleCard(null)}>
            <FaTimes />
          </button>
          <Card project={card.project} />
        </div>
      </div>
    </CardContext.Provider>
  );
}

export default Projects;
