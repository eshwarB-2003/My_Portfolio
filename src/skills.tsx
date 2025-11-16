import React from "react";
import "./skills.css";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-bg-shape"></div>

      <div className="skills-content">
        <h1 className="typing-gradient glow">My Skills</h1>

        <div className="skills-grid">

          <div className="skill-card">
            <h2>Frontend</h2>
            <div className="skill-tags">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>TailwindCSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>TypeScript</span>
            </div>
          </div>

          <div className="skill-card">
            <h2>Backend</h2>
            <div className="skill-tags">
              <span>Node.js</span>
              <span>Java</span>
              <span>C/C++</span>
              <span>Express</span>
              <span>REST APIs</span>
            </div>
          </div>

           <div className="skill-card">
            <h2>Databases</h2>
            <div className="skill-tags">
              <span>PostgreSQL</span>
              <span>MongoDB</span>
            </div>
          </div>

          <div className="skill-card">
            <h2>AI / ML</h2>
            <div className="skill-tags">
              <span>Python</span>
              <span>TensorFlow</span>
              <span>OpenAI API</span>
              <span>Machine Learning</span>
              <span>Data Processing</span>
            </div>
          </div>

          <div className="skill-card">
            <h2>Tools & Platforms</h2>
            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Postman</span>
              <span>Docker</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
