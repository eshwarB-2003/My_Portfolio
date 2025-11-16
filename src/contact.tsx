import React from "react";
import "./contact.css";
import { Mail, Linkedin, MapPin } from "lucide-react"; // modern icon library which can be used to produce as icon depending to various application

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-shape"></div>

      <div className="contact-content">
        <h1 className="typing-gradient glow"> Contact Me</h1>
        <p className="contact-intro">
          I Would love to connect with you! Whether it’s about collaboration, projects, or opportunities - feel free to reach out.
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <Mail className="icon" />
            <h2>Email</h2>
            <a href="mailto:e8082409@gmail.com" className="contact-link">
              e8082409@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <Linkedin className="icon" />
            <h2>LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/vaitheeshwar-badrinarayanan-592942251/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Vaitheeshwar Badrinarayanan
            </a>
          </div>

          <div className="contact-card">
            <MapPin className="icon" />
            <h2>Location</h2>
            <p className="contact-text">Limerick, Ireland</p>
          </div>
        </div>
    <a
  className="contact-btn"
  onClick={() => {
    if (window.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
    }
  }}
>
  Send a Message
</a>
 
      </div>
    </section>
  );
};

export default Contact;
