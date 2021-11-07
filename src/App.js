import "./App.scss";
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import AboutMe from "./components/aboutme/AboutMe";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
