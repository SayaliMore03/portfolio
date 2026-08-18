import { useEffect } from "react";
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

  useEffect(() => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
    if (path) {
      const targetElement = document.getElementById(path);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Connect />
    </div>
  );
}

export default App;
