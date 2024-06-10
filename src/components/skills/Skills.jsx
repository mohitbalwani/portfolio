import React, { useEffect, useState } from 'react';
import './skills.css';
import { skillsData } from './skillsData';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData)
  }, []);

  return (
    <section className="skills" id="skills">
      <h2 className="heading"><i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span></h2>
      <div className="container">
        <div className="row" id="skillsContainer">
          {skills.map(skill => (
            <div className="bar" key={skill.name}>
              <div className="info">
                <img src={skill.icon} alt="skill" />
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
