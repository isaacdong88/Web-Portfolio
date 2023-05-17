import { BrowserRouter } from "react-router-dom";
import Skills from "./components/Skills";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavBar />
          <Hero />
        </div>
        <Skills />
        <Projects />
      </div>
    </BrowserRouter>
  );
};

export default App;
