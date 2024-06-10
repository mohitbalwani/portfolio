import React from 'react';
import './hero.css';
import ParticleComponent from '../particle/ParticleComponent'

const Hero = () => {
  return (
    <section className="home" id="home">
      <div id="particles-js"></div>
      <ParticleComponent />
      <div className="content">
        <h3>Hi There,<br /> I'm Mohit <span>Balwani</span></h3>
        <p>i am into <span className="typing-text"></span></p>
        <a href="<lintree.links>" className="btn">
          <span>Visit all Links</span>
          <i className="fas fa-arrow-circle-up"></i>
        </a>
        <div className="socials">
          <ul className="social-icons">
            <li><a className="linkedin" href="https://www.linkedin.com/in/mohitbalwani" target="_blank"><i className="fab fa-linkedin"></i></a></li>
            <li><a className="github" href="https://github.com/mohitbalwani" target="_blank"><i className="fab fa-github"></i></a></li>
            {/* <li><a className="YouTube" href="https://www.youtube.com/c/<yetToBeMade>" target="_blank"><i className="fab fa-youtube"></i></a></li> */}
            <li><a className="twitter" href="https://twitter.com/_MohitBalwani" target="_blank"><i className="fab fa-twitter"></i></a></li>
            <li><a className="instagram" href="https://www.instagram.com/mohitbalwani/"><i className="fab fa-instagram" target="_blank"></i></a></li>
            <li><a className="gmail" href="mailto:mohitbalwani5@gmail.com" target="_blank"><i className="fas fa-envelope"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="image">
        <img draggable="false" className="tilt" src="./assests/images/potrait.jpeg" alt="" />
      </div>
    </section>
  );
}

export default Hero;
