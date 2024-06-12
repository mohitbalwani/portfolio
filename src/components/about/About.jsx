import React from 'react';
import './about.css';
// import mohitPhoto from '../../assets/mohit-photo.jpeg'
import mohitsPhoto from '../../assets/mohitsPhoto.jpg'

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading"><i className="fas fa-user-alt"></i> About <span>Me</span></h2>

      <div className="row">
        <div className="image">
          <img draggable="false" className="tilt" src={mohitsPhoto} alt="" />
        </div>
        <div className="content">
          <h3>I'm Mohit</h3>
          <span className="tag">A Software Engineer </span>
          <p> I currently have 1 year of experience working with Javascript.
            <br />
            I spend my days (and often nights) crafting the digital realm with projects and lines of code, transforming zeroes and ones into immersive, interactive experiences.<br />
            <br />
            <br />When I'm not coding, I'm either planning my next big project or fighting against procrastination like it's the final boss in a video game.
            <br />I'm quietly confident, naturally curious, and perpetually working on improving my chops.
            <br />Thanks for stopping by! Don't worry, I promise I've only sprinkled a little bit of code dust on your browser. Hope you enjoy the magic!
          </p>

          <div className="box-container">
            <div className="box">
              <p><span> age: </span> 22</p>
              {/* <p><span> college : </span> Sinhgad College of Engineering</p> */}
            </div>
            <div className="box">
              <p><span> email : </span> mohitbalwani5@gmail.com</p>
              {/* <p><span> place : </span> Pune, Maharashtra, India </p> */}
            </div>
          </div>

          <div className="resumebtn">
            <a href="https://drive.google.com/file/d/1cx-VU9xvHJCZbYTnO-Rs1UvFDxB-TSRP/view" className="btn"><span>Resume</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
