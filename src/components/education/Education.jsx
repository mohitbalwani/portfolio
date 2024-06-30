import React from 'react';
import './education.css';
import scoe from '../../assets/scoe.jpeg';
import vmv from '../../assets/vmv.png'

const Education = () => {
  return (
    <section className="education" id="education">
      <h1 className="heading"><i className="fas fa-graduation-cap"></i> My <span>Education</span></h1>
      <p className="quote">Education is not the learning of facts, but the training of the mind to think.</p>

      <div className="box-container">

        <div className="box">
          <div className="image">
            <a href="https://cms.sinhgad.edu/sinhgad_engineering_institutes/vadgaon_scoe/about.aspx">
              <img draggable="false" src={scoe} alt="Sinhgad College of Engineering" />
            </a>
          </div>
          <div className="content">
            <h3>Bachelor of Engineering in Computer Engineering</h3>
            <p>Sinhgad College of Engineering (SCOE)</p>
            <h4>2019-2023 | Completed</h4>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <a href="http://www.vmvnagpur.org/">
              <img draggable="false" src={vmv} alt="VMV College, Nagpur" />
            </a>
          </div>
          <div className="content">
            <h3>High School | Science</h3>
            <p>VMV College, Nagpur | Maharashtra Board</p>
            <h4>2017-2019 | Completed</h4>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
