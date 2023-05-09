import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavBar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
      </div>
    </BrowserRouter>
  );
};

export default App;
