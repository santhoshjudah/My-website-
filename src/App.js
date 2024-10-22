import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar";
import Projects from "./components/Projects/projects";
import Resume from "./components/Resume/resume";
import Skill from "./components/Skills/skills";

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Intro/>
      <About/>
      <Skill/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
