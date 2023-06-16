import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import AboutSVG from '../../images/svgs/pages/about.svg';
import html from '../../images/svgs/skills/html.svg';
import css from '../../images/svgs/skills/css.svg';
import js from '../../images/svgs/skills/js.svg';
import react from '../../images/svgs/skills/react.svg';
import ruby from '../../images/svgs/skills/ruby.svg';
import rails from '../../images/svgs/skills/rails.svg';
import postgresql from '../../images/svgs/skills/postgresql.svg';
import netlify from '../../images/svgs/skills/netlify.svg';
import bootstrap from '../../images/svgs/skills/bootstrap.svg';
import sass from '../../images/svgs/skills/sass.svg';
import git from '../../images/svgs/skills/git.svg';
import github from '../../images/svgs/skills/github.svg';
import jest from '../../images/svgs/skills/jest.svg';
import figma from '../../images/svgs/skills/figma.svg';
// import './home.css';

function AboutPage() {
  return (
    <div className="home-container d-flex flex-column flex-md-row" id="about">
      <div className="svg d-flex justify-content-center  flex-column w-50 align-items-center">
        <img src={AboutSVG} alt="Home" className="home-svg img-fluid w-50" />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center w-50 m-w-10 content">
        <h2 className="name sub-title font-weight-bold text-center w-100 title">
          About
        </h2>
        <p className="about w-100">
          Email:
          {' '}
          <a className="sub-info" target="_blank" rel="noreferrer" href="mailto:ahmadzakiyousufi3@gmail.com">
            ahmadzakiyousufi3@gmail.com &nbsp;
            {' '}
            <FaExternalLinkAlt />
          </a>
        </p>
        <p className="about w-100">
          Resume:
          {' '}
          <a className="sub-info" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1LEhxwsbcSkbeRe7gKQTpTufVQdnUl33Qbc5NV1Q9Isc/edit?usp=sharing">
            Check Resume &nbsp;
            {' '}
            <FaExternalLinkAlt />
          </a>
        </p>
        <p className="about w-100">
          <span className="sub-info">Proficional Skills:</span>
          {' '}
          Remote Pair Programming, Code Review, Test-Driven Development,
          {' '}
          Responsive Web Design, Object-Oriented Programming, Problem Solving,
          {' '}
          Teamwork, Communication, Time Management, Leadership, Agile Methodologies,
          {' '}
          Mentoring, Technical Support.
        </p>
        <p className="about w-100 d-flex flex-row flex-wrap">
          Skills: &nbsp;
          <p>
            <span className="sub-info">HTML5</span>
            <img src={html} alt="html" className="skills-svg img-fluid w-10" />
          </p>
          &nbsp;
          <p>
            <span className="sub-info">CSS3</span>
            <img src={css} alt="css" className="skills-svg img-fluid w-10" />
          </p>
          &nbsp;
          <p>
            <span className="sub-info">JavaScript</span>
            <img src={js} alt="js" className="skills-svg img-fluid w-10" />
          </p>
          &nbsp;
          <p>
            <span className="sub-info">React</span>
            <img src={react} alt="react" className="skills-svg img-fluid w-10" />
          </p>
          &nbsp;
          <p>
            <span className="sub-info">Ruby</span>
            <img src={ruby} alt="ruby" className="skills-svg img-fluid w-10" />
          </p>
          &nbsp;
          <p>
            <span className="sub-info">Ruby on Rails</span>
            <img src={rails} alt="rails" className="skills-svg img-fluid w-10" />
          </p>
          &nbsp;
          <p>
            <span className="sub-info">PostgreSQL</span>
            <img src={postgresql} alt="postgresql" className="skills-svg img-fluid w-10" />
          </p>
          &nbsp;
          <p>
            <span className="sub-info">Netlify</span>
            <img src={netlify} alt="netlify" className="skills-svg img-fluid w-10" />
          </p>
          &nbsp;
          <p>
            <span className="sub-info">Bootstrap</span>
            <img src={bootstrap} alt="bootstrap" className="skills-svg img-fluid w-10" />
          </p>
          &nbsp;
          <p>
            <span className="sub-info">Sass</span>
            <img src={sass} alt="sass" className="skills-svg img-fluid w-10" />
          </p>
          &nbsp;
          <p>
            <span className="sub-info">Git</span>
            <img src={git} alt="git" className="skills-svg img-fluid w-10" />
          </p>
          &nbsp;
          <p>
            <span className="sub-info">GitHub</span>
            <img src={github} alt="github" className="skills-svg img-fluid w-10" />
          </p>
          &nbsp;
          <p>
            <span className="sub-info">Jest</span>
            <img src={jest} alt="jest" className="skills-svg img-fluid w-10" />
          </p>
          &nbsp;
          <p>
            <span className="sub-info">Figma</span>
            <img src={figma} alt="figma" className="skills-svg img-fluid w-10" />
          </p>
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
