import React from "react";
import './about.css';
import ReactTypingEffect from "react-typing-effect";
import profileImg from "./assets/img.jpg";
const About: React.FC = () => {
return (
    <section id="about" className="about-section">
        {/*Background Shape*/}
         <div className="about-bg-shape"></div>

         <div className="about-content">
            <div className="profile-container">
            <img src= {profileImg} alt="Vaitheeshwar" className="profile-pic"/>
         </div>
         <div className="text-container">
            <h1 className ="typing-text">
                <ReactTypingEffect
                text={["Hi, this is Vaitheeshwar Badrinarayanan!",
                "Welcome to my portfolio"
              ]}
              speed={100}
              eraseSpeed={80}
              typingDelay={500}
              eraseDelay={1500}
              cursorRenderer={(cursor:string)=> <span style={{color:"orange"}}>{cursor}</span>}
              displayTextRenderer={(text: string) => (<span className="typing-gradient glow">{text}</span>)}
            />
            </h1>
             <div className="about-intro">
              <ReactTypingEffect
                text={[" Pursuing my Masters in Software Engineering, Student @ University of Limerick, Ireland"
              ]}
              speed={100}
              eraseSpeed={80}
              typingDelay={500}
              eraseDelay={1500}
              cursorRenderer={(cursor:string)=> <span style={{color:"orange"}}>{cursor}</span>}
              displayTextRenderer={(text: string) => (<span className="typing-gradient glow">{text}</span>)}
            />
            
          </div>
          <p className="about-description">
            I am a passionate Software Engineer with a strong foundation in Computer Science 
            and hands-on experience in full-stack web development. Currently pursuing my 
            Master’s at the University of Limerick, I thrive on solving complex problems 
            through code and building solutions that enhance user experience and efficiency.
          </p>
          <a href= "https://drive.google.com/file/d/1xJex43uwHhq_Uk4t5Jw3muIp4RLu4s6H/view?usp=sharing" download className="resume-btn">Download Resume</a>
         </div>
         </div>
    </section>
);
}
export default About;