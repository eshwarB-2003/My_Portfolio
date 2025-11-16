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
                "The path that shaped who I am today "
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
              <p className="journey-items">Started my Bachelors journey @ Sathyabama University .</p>
            </div>

            <div className="timeline-item">
              <h2>2022</h2>
              <p className="journey-items">Discovered my passion for full-stack development and UI engineering. </p>
            </div>

            <div className="timeline-item">
              <h2>2023</h2>
              <p className="journey-items"> Built advanced projects and strengthened problem-solving skills. </p>
            </div>

            <div className="timeline-item">
              <h2>2024</h2>
              <p className="journey-items"> Sucessfully completed my conference presentation for my dissertation project with A grade. </p>
            </div>

            <div className="timeline-item">
              <h2>2025</h2>
              <p className="journey-items"> Began my Master’s in Software Engineering at UL, taking a major step toward upskilling and advancing my career. </p>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Journey;

