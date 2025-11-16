import './App.css';
/*Importing all the components used in the portfolio.
 Each component represents a separate section on the website.*/
import Navbar from "./Navbar";
import About from "./about";
import Journey from './journey';
import Skills from './skills';
import Education from './education';
import Projects from "./projects";
import Certificates from "./certificates";
import Contact from "./contact";
import Footer from "./footer";

/*Main App Component
This component acts as the ROOT of the entire application.
All sections of the portfolio are displayed inside this component.*/


function App() {
  return (
    <>
    {/* Navbar component remains fixed at the top and helps navigation */}
      <Navbar />
     {/* Main content area containing every section of the portfolio */}
      <main className="container">
        {/* About section: Introduction, profile picture, typing animation */}
        <About />
         {/* Journey section: Timeline of personal and academic milestones */}
        <Journey/>
        {/* Skills section: Displays technical skills and tools proficiency */}
        <Skills/>
        <Education/>
        {/* Projects section: Shows major projects with descriptions and tech stack */}
        <Projects/>
        {/* Certificates section: Displays earned certificates and achievements */}
        <Certificates/>
        {/* Contact section: Email, LinkedIn, location & chatbot access */}
        <Contact/>
      </main>
        <Footer/>
    </>
  );
}
 /*  Exporting the App component so it can be rendered by React */
export default App;

