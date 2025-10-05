import './App.css';
import Navbar from "./Navbar";
import About from "./about";
import Education from './education';
import Projects from "./projects";
import Certificates from "./certificates";
import Contact from "./contact";
import Footer from "./footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <About />
        <Education/>
        <Projects/>
        <Certificates/>
        <Contact/>
      </main>
        <Footer/>
    </>
  );
}

export default App;

