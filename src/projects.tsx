import React from "react";
import "./Projects.css";

const Projects: React.FC = () => { // React.FC typescript funcionl type helps to detect type check error
  return (
    <section id="projects" className="projects-section">
      <div className="projects-bg-shape"></div>

      <div className="projects-content">
        <h1 className="typing-gradient glow"> Projects</h1>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className= "project-card">
            <h2>
              Enhancing Music Discovery: A Real-Time Recommendation System using Sentiment
              Analysis and Emotional Matching with Spotify Integration
            </h2>
            <p className= "project-content">
              A real-time music recommendation system that suggests songs based on users’
              emotions, detected through sentiment analysis and emotion recognition.
              Integrated with Spotify API for personalized recommendations.
            </p>
            <div className= "tech-stack">
              <span>Python</span>
              <span>NLP</span>
              <span>Sentimental Analysis</span>
              <span>MATLAB</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h2>Idea Store – A Full-Stack Idea Management Platform</h2>
            <p className="project-content-2">
              Developed during internship at Sundaram Infotech Solutions using the PERN
              stack (PostgreSQL, Express, React, Node). The platform supports secure login,
              idea submissions, and team collaboration.
            </p>
            <div className = "tech-stack">
              <span>PostgreSQL</span>
              <span>Express.js</span>
              <span>React</span>
              <span>Node.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
