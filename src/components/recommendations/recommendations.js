import React from 'react';
import { Carousel } from 'react-bootstrap';
import RecommendationsSVG from '../../images/svgs/pages/Recomendations.svg';
import recommendations from './data';

function Recommendations() {
  return (
    <div className="home-container d-flex flex-column flex-md-row">
      <div className="d-flex flex-column justify-content-center w-75 content">
        <h2 className="name mb-5 title text-center">
          Recommendations
        </h2>
        <Carousel
          className="carousel slide mt-5 w-100 pt-5"
        >
          {recommendations.map((recommendation) => (
            <Carousel.Item key={recommendation.id}>
              <img src={recommendation.image} alt={recommendation.name} className="rec-img rounded-circle" />
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h4 className="name sub-title font-weight-bold text-center">
                  {recommendation.name}
                </h4>
                <p>{recommendation.title}</p>
                <p className="sub-info">{recommendation.Date}</p>
              </div>
              <p className="about">
                {recommendation.recommendation}
              </p>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="d-flex justify-content-center  flex-column w-50 align-items-center">
        <img src={RecommendationsSVG} alt="Home" className="home-svg img-fluid w-50" />
      </div>
    </div>
  );
}

export default Recommendations;
