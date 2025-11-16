import React from "react";
import "./certificates.css";

const Certificate: React.FC = () => {
  return (
    <section id="certificates" className="certifications-section">
      <div className="certifications-bg-shape"></div>

      <div className="certifications-content">
        <h1 className="typing-gradient glow"> Certifications</h1>

        <div className="certifications-grid">
          {/* Certificate 1 */}
          <div className="certificate-card">
            <h2>Web Development Training – Internshala Trainings</h2>
            <p>
              Successfully completed a comprehensive online training program in Web Development offered by Internshala Trainings.
              Covered technologies including HTML, CSS, Bootstrap, JavaScript, PHP, DBMS, and React.
              Final project integrated all learned skills, with an overall score of <strong>83%</strong> in assessment.
            </p>
            <a
              href="https://drive.google.com/file/d/10Y3HMcvfm6Xs4HYtdzSkGhljybQ02CQ1/view?usp=sharing"
              className="view-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>

          {/* Certificate 2 */}
          <div className="certificate-card">
            <h2>Value Added Course - Web Development</h2>
            <p>
              Completed a <strong>40-hour intensive training</strong> at Sathyabama Institute of Science and Technology.
              Achieved <strong>91%</strong> combining theory and project assessment.
              Gained hands-on experience with HTML, CSS, JavaScript, PHP, and database management.
            </p>
            <a
              href="https://drive.google.com/file/d/1VVBHRfs8V3wZeOCyRauqyOjpVewcWsle/view?usp=sharing"
              className="view-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>
          <div className="certificate-card">
            <h2>IEEE Conference Publication – ICOACT 2025</h2>
            <p>
               Published my research paper in the IEEE International Conference on Advances in 
               Computing Technologies (ICOACT 2025) - titled Enhancing Music Discovery: A Real-Time Recommendation System using Sentiment Analysis and Emotional Matching with Spotify Integration
            </p>
            <a
              href="https://drive.google.com/file/d/1ZU_upsVdISRirCzXaRvPfVYKRVXvma0K/view?usp=sharing"
              className="view-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
