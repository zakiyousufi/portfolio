import React from 'react';
import {
  FaGithub, FaLinkedin, FaAngellist,
} from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';
import ContactSVG from '../../images/svgs/pages/contact.svg';

function Contact() {
  return (
    <div className="home-container d-flex flex-column flex-md-row" id="contact">
      <div className="d-flex flex-column justify-content-center w-75 align-items-center content">
        <h1 className="name title">Contact</h1>
        <p className="about">
          I am currently looking for new opportunities, my inbox is always open.&nbsp;
          Whether you have a question or just want to say hi, I will try my best to get back to you!
        </p>
        <form
          action="https://formspree.io/f/xnqwwrzy"
          className="d-flex flex-column align-items-center w-full form"
          method="POST"
        >
          <input type="text" name="name" placeholder="Full Name" className="form-control w-full my-2" required />
          <input type="email" name="email" placeholder="Email" className="form-control w-full my-2" required />
          <textarea name="message" placeholder="Message" className="form-control w-full my-2" required />
          <button type="submit" className="card-btn livedemo w-50 my-2">
            Submit &nbsp;
            <BiSend />
          </button>
        </form>
      </div>
      <div className="d-flex justify-content-center  flex-column w-50 align-items-center img-div">
        <img src={ContactSVG} alt="Home" className="home-svg img-fluid w-50" />
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

export default Contact;
