import React from "react";
import "./Education.css";
// Functional React component to display educational qualifications
const Education: React.FC = () => {
  return (
    // Main Education section with an ID for navigation and a styled class
    <section id="education" className="education-section">
 { /* Background glowing shape for visual enhancement */}
      <div className="education-bg-shape"></div>
      { /* Container that holds all educational content */ }
      <div className="education-content">
        {/* Text wrapper for the heading and education cards */}
        <div className="edu-text">
          {/* Section title with gradient animated text */}
          <h1 className="typing-gradient glow"> Education</h1>
          <div className="edu-item">
            <h2>Master of Science in Software Engineering (M.Sc.)</h2>
            <h3>University of Limerick, Ireland (2025–2026)</h3>
            <p>
              Currently pursuing my Master’s degree with a focus on advanced software topics, Designing a 
              scalable, efficient software. Developing expertise in
              full-stack development, Exploring topics like Software Evolution , Advanced Software Design, Concurrency and Parallelism, Software Developement Paradigms etc. .
            </p>
          </div>

          <div className="edu-item">
            <h2>Bachelor of Engineering in Computer Science(B.E.)</h2>
            <h3>Sathyabama Institute of Science and Technology (2021–2025)</h3>
            <p>
              Graduated with distinction (1.1 Honors) / (8.02 / 10.0 CGPA) . Built strong foundations in algorithms, databases,
              and full-stack web development. Completed projects like a real-time music
              recommendation system and a full-stack idea management platform.
            </p>
          </div>
         {/* Transcript button that opens the document in a new tab */}
          <a href="https://drive.google.com/file/d/1r1liudFCfc2_MsOpN1hIKKj0L-nRVVAL/view?usp=sharing" className="resume-btn" target="_blank" rel="noopener noreferrer">
            View Transcript
          </a>
        </div>
      </div>
    </section>
  );
};

export default Education;
