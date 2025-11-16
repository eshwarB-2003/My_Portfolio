 import {useState} from "react";
import reactLogo from "./assets/img.jpg"; //  import image
import "./navbar.css";

function Navbar() {
    // state to track dark node
    const[darkMode, setDarkMode] = useState(true);

    // toggle Function where if user clicks the toggle button it changes to white bg mode 
    const toggleDarkMode = () => {
  setDarkMode(!darkMode);
  if (!darkMode) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
};

  return (
   <header className={`header ${darkMode ? "dark" : "light"}`}>
      <nav className="navbar">
        <div className="logo-container">
          <img src={reactLogo} alt="React-logo" className="logo react-logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/*  Dark/Light- Toggle Button  */}
        <button onClick={toggleDarkMode} className ="toggle-btn"> {/* Switches from dark mode to Light mode using ternary logic*/}
            {darkMode ?    "Light Mode" : " Dark Mode"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;

