import { useDarkMode } from "./hooks/useDarkMode";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Connect from "./components/Connect";

function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Connect />
    </div>
  );
}

export default App;
