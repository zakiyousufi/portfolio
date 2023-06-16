import React from 'react';
import PropTypes from 'prop-types';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';
import projects from './data';

function Card({ project }) {
  const matchedProject = projects.find((p) => p.name === project?.name);

  if (!matchedProject) {
    return null;
  }

  return (
    <div className="popup d-flex flex-column flex-md-row">
      <Carousel className="carousel slide mt-5 w-100 pt-5 ml-5">
        {matchedProject.images.map((image) => (
          <Carousel.Item key={image}>
            <img src={image} alt={matchedProject.name} className="project-img mb-5" />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="d-flex flex-column justify-content-center align-items-center project-details w-75">
        <h3 className="name mb-5 title">{matchedProject.name}</h3>
        <p>{matchedProject.about}</p>
        <p>
          Techknologies used:&nbsp;
          {' '}
          <span className="name">
            {matchedProject.tecknologies.join(', ')}
          </span>
        </p>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <a href={matchedProject.liveDemo} target="_blank" rel="noopener noreferrer" className="card-btn livedemo">
            <FaExternalLinkAlt />
            {' '}
            Live Demo
          </a>
          <a href={matchedProject.sourceLink} target="_blank" rel="noopener noreferrer" className="card-btn sourcelink">
            <FaGithub />
            {' '}
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
  }),
};

Card.defaultProps = {
  project: {
    name: '',
  },
};

export default Card;
