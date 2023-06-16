import React from 'react';
import { FaGithub, FaLinkedin, FaAngellist } from 'react-icons/fa';
import HomeSVG from '../../images/svgs/pages/home.svg';
import '../style.css';

function HomePage() {
  return (
    <div className="home-container d-flex flex-column flex-md-row" id="home">
      <div className="d-flex flex-column justify-content-center w-50 content">
        <h1 className="headline font-weight-bold w-100">
          Hello, there! I&apos;m
          <br />
          <span className=" font-weight-bold name">
            Ahmad Zaki Yousufi
          </span>
        </h1>
        <p className="about w-100">
          A full-stack software developer with a passion for creating high-quality,
          {' '}
          scalable web applications. With hands-on experience in developing and
          {' '}
          executing in an unstructured and resource-constrained environment,
          {' '}
          I have honed my ability to work collaboratively, remotely, and asynchronously
          {' '}
          with people from different time zones across the globe.
          {' '}
          I am deeply committed to writing clean, efficient, and maintainable code,
          {' '}
          and I am proficient in a wide range of technologies.
          {' '}
          My skills in time management and efficient problem-solving have been instrumental
          {' '}
          in my success as a programmer. I have experience mentoring junior developers and
          {' '}
          providing technical support through code reviews, and I am skilled in remote pair
          {' '}
          programming and working in fast-paced, agile environments. As a team player, I am
          {' '}
          dedicated to contributing to the success of the organization and helping to drive
          {' '}
          innovation in the field of web development
        </p>
      </div>
      <div className="d-flex justify-content-center  flex-column w-50 align-items-center">
        <img src={HomeSVG} alt="Home" className="home-svg img-fluid w-50" />
        <div className="d-flex flex-row justify-content-center social-icons">
          <a href="https://github.com/zakiyousufi" target="_blank" rel="noopener noreferrer" className="social-links">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/zakiyousufi" target="_blank" rel="noopener noreferrer" className="social-links">
            <FaLinkedin />
          </a>
          <a href="https://angel.co/u/ahmad-zaki-yousufi" target="_blank" rel="noopener noreferrer" className="social-links">
            <FaAngellist />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
