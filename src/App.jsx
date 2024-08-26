import "./app.css";
import About from "./components/about/About";
import Skill from "./components/about/skill/Skill";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Project from "./components/Project/Project";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

       <section >
        <Parallax type="about" />
      </section>

      <section id="About">
        <About />
      </section>

      <section id="Skill">
        <Skill />
      </section>

      <section id="Education"><Education/></section>

      <section id="Project">
        <Parallax type="project" />
      </section>

      <Project />

      <section id="Contact">
        <Contact />
      </section> 
    </div>
  );
};

export default App;
