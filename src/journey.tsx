import React from "react";
import "./journey.css";
import ReactTypingEffect from "react-typing-effect";

// Journey component displays timeline of academic and career milestones
const Journey: React.FC = () => {
  return (
    <section id="journey" className="journey-section">
      {/* Background Shape */}
      <div className="journey-bg-shape"></div>

      <div className="journey-content">
        <div className="text-container">
          {/* Heading with typing effect animation */}
          <h1 className="typing-text">
            <ReactTypingEffect
              text={[
                "My Journey So Far...",
                "Building systems, learning through doing"
              ]}
              speed={100}
              eraseSpeed={80}
              typingDelay={500}
              eraseDelay={1500}
              cursorRenderer={(cursor: string) => (
                <span style={{ color: "orange" }}>{cursor}</span>
              )}
              displayTextRenderer={(text: string) => (
                <span className="typing-gradient glow">{text}</span>
              )}
            />
          </h1>

          {/* Timeline items representing different years */}
          <div className="journey-timeline">

            <div className="timeline-item">
              <h2>2021</h2>
              <p className="journey-items">
                Started my Computer Science journey at Sathyabama University, built a strong foundation in programming and problem solving.
              </p>
            </div>

            <div className="timeline-item">
              <h2>2022</h2>
              <p className="journey-items">
                Discovered my interest in backend systems and began exploring how real-world applications are designed and built.
              </p>
            </div>

            <div className="timeline-item">
              <h2>2023</h2>
              <p className="journey-items">
                Built projects focused on concurrency and system design, improving how I approach performance and scalability.
              </p>
            </div>

            <div className="timeline-item">
              <h2>2024</h2>
              <p className="journey-items">
                Presented my dissertation work at a conference, focusing on applying technical concepts to real-world problems.
              </p>
            </div>

            <div className="timeline-item">
              <h2>2025</h2>
              <p className="journey-items">
                Started my Master’s at University of Limerick, focusing on building scalable systems and advancing my engineering skills.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;