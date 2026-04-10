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
               <a 
      href="https://github.com/eshwarB-2003/Online-Python-Game" 
      target="_blank" 
      rel="noopener noreferrer"
      className="project-link"
    >
              Real-Time Multiplayer Game System with ELO Ranking
              </a>
            </h2>
            <p className= "project-content">
              Built a concurrent client-server system where players compete in real-time math games with automatic matchmaking. 
              Implemented secure server-side validation, ELO rating system, and leaderboard with PostgreSQL ensuring data consistency under concurrent updates.
            </p>
            <div className= "tech-stack">
              <span>Python</span>
              <span>Socket Programming</span>
              <span>PostgreSQL</span>
              <span>Threading</span>
              <span>Pygame</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h2>
             <a 
      href="https://github.com/eshwarB-2003/Green_Vest_Software_Design" 
      target="_blank" 
      rel="noopener noreferrer"
      className="project-link"
    >
      GreenVest - Carbon Credit Marketplace Simulation
    </a>
    </h2>
            <p className="project-content-2">
              Designed a backend system for managing carbon credit transactions with pricing, validation, and processing workflows. 
              Built a rule-based decision engine to validate transactions and detect anomalous activity patterns.
            </p>
            <div className = "tech-stack">
              <span>Java</span>
              <span>OOP</span>
              <span>Design Patterns</span>
              <span>System Design</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <h2>
               <a 
      href="https://github.com/eshwarB-2003/Concurrency_Parallelising-the-Simulation-of-Forest-Fire-Spread-and-Recovery" 
      target="_blank" 
      rel="noopener noreferrer"
      className="project-link">

              Parallel Forest Fire Simulation
               </a></h2>
              
            <p className="project-content-2">
              Developed a multithreaded simulation model to process large-scale grid computations efficiently. 
              Improved execution performance by 35% and reduced race conditions using synchronization techniques.
            </p>
            <div className = "tech-stack">
              <span>Java</span>
              <span>Multithreading</span>
              <span>Concurrency</span>
              <span>Performance Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
