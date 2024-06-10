import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <section className="work" id="work">
      <h2 className="heading"><i className="fas fa-laptop-code"></i> Projects <span>Made</span></h2>

      <div className="box-container">
        <div className="box tilt">
          <img draggable="false" src="./assets/images/projects/mlpr.jpg" alt="My portfolio" />
          <div className="content">
            <div className="tag">
              <h3>My portfolio</h3>
            </div>
            <div className="desc">
              <p>The place where you are seeing this</p>
              <div className="btns">
                <a href="<deployed link>" className="btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-eye"></i> View
                </a>
                <a href="<github repo link>" className="btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code"></i> Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="box tilt">
          <img draggable="false" src="./assets/images/projects/portfolio1.jpg" alt="Movies" />
          <div className="content">
            <div className="tag">
              <h3>Reel Rover</h3>
            </div>
            <div className="desc">
              <p>Movies application</p>
              <div className="btns">
                <a href="https://infallible-wozniak-067817.netlify.app/" className="btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-eye"></i> View
                </a>
                <a href="<github repo link>" className="btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code"></i> Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="box tilt">
          <img draggable="false" src="./assets/images/projects/Library.png" alt="healthy harvest website" />
          <div className="content">
            <div className="tag">
              <h3>Healthy Harvest</h3>
            </div>
            <div className="desc">
              <p>A frontend application which allows farmers to sell their crops and apply to various schemes.</p>
              <div className="btns">
                <a href="https://clever-panini-7c3447.netlify.app/" className="btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-eye"></i> View
                </a>
                <a href="<github repo link>" className="btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code"></i> Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="box tilt">
          <img draggable="false" src="./assets/images/projects/CodeIN.jpg" alt="Blogs app" />
          <div className="content">
            <div className="tag">
              <h3>Blogs App</h3>
            </div>
            <div className="desc">
              <p>Simple blog application which shows all the blogs.</p>
              <div className="btns">
                <a href="<NA code>" className="btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-eye"></i> View
                </a>
                <a href="<github link>" className="btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code"></i> Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="box tilt">
          <img draggable="false" src="./assets/images/projects/Netflix.PNG" alt="Netflix Clone | React-App" />
          <div className="content">
            <div className="tag">
              <h3>Mini Instagram</h3>
            </div>
            <div className="desc">
              <p>App similar to Instagram</p>
              <div className="btns">
                <a href="<link>" className="btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-eye"></i> View
                </a>
                <a href="<github>" className="btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code"></i> Code
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="viewall">
        <a href="<my github repos link>" className="btn"><span>View All</span>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};

export default Projects;
