import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="heading"><i className="fas fa-briefcase"></i> Experience</h2>

      <div className="timeline">

        <div className="container left">
          <div className="content">
            <div className="tag">
              <h2>PTC</h2>
            </div>
            <div className="desc">
              <h3>Software Engineer</h3>
              <p>Jul 2023 - Present</p>
              <br /><br />
              <p>
                • Spearheaded the creation of dynamic web components from inception to implementation using Lit Element and
                Vanilla JavaScript, showcasing proficiency in front-end technologies.<br /><br />
                • Actively collaborated with UX professionals and Testers within an Agile framework, ensuring seamless integration
                of components and alignment with project requirements.<br /><br />
                • Systematically diagnosed and resolved a myriad of bugs within web components, demonstrating a keen ability to
                troubleshoot and optimize code for enhanced performance and user experience.<br /><br />
                • Developed a streamlined automation script using Handlebars.js, empowering developers to effortlessly update web
                component's README. This innovative solution eliminated the need for manual updates, significantly enhancing
                efficiency and maintaining consistency across documentation.<br /><br />
                • Led the migration initiative of web components from Stencil to Lit, seamlessly integrating them into our Lit-based
                library. This strategic transition not only ensured compatibility but also expanded the diversity of components
                within our library, contributing to a more robust and cohesive front-end architecture.<br /><br />
                • Spearheaded the seamless upgrade of Storybook from version 6.5 to 7.1, implementing a meticulous process to
                ensure compatibility and stability. This proactive approach not only kept our development environment up-to-date
                but also leveraged the latest features and improvements, enhancing the overall efficiency of the project.
              </p>
            </div>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <div className="tag">
              <h2>PTC</h2>
            </div>
            <div className="desc">
              <h3>Software Engineer Intern</h3>
              <p>Jul 2022 - Jun 2023</p>
              <br /><br />
              <p>
                • Implemented a cutting-edge regeneration hash checker within the retrieval tests, revolutionizing production
                processes for over 2 million documents.<br /><br />
                • Pioneered the introduction of a new failure category, streamlining manual checking and investigation tasks,
                resulting in significant time savings for individuals.<br /><br />
                • Spearheaded the development of an internal, user-friendly dashboard tool that displays failed Onshape Documents
                and their corresponding flaky categories. This innovative solution is set to transform the overall investigation
                procedure.<br /><br />
                • Gained extensive hands-on experience with a wide range of technologies, including Java, C++, VueJs, and
                MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="morebtn">
        <a className="btn"><span>START</span>
        </a>
      </div>

    </section>
  );
};

export default Experience;
