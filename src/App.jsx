import { useState, useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import HomePage from "./pages/Home";
import AboutMePage from "./pages/AboutMe";
import ExperiencePage from "./pages/Experience";
import ProjectsPage from "./pages/Projects";
import NavBar from "./components/NavBar";
import Reveal from "./components/Reveal";
import '../src/assets/background.css';

/**
 * All possible top-level navigation paths
 */
const navbarTabs = [
  { title: "Home", to: "#", tabValue: "one" },
  { title: "Experience", to: "#experience", tabValue: "two" },
  { title: "Projects", to: "#projects", tabValue: "three" }
];

function App() {
  const [value, setValue] = useState("one");
  const { ref: homeRef, inView: homeView } = useInView({ threshold: 0.2 });
  const { ref: experienceRef, inView: experienceView } = useInView({ threshold: 0.2 });
  const { ref: projectsRef, inView: projectsView } = useInView({ threshold: 0.2 });
  const isTabClick = useRef(false); // Track if user clicked a tab

  // Parent function called by an onClick event in the NavBar
  const handleChange = (event, newValue) => {
    isTabClick.current = true; // Prevent scroll-based updates
    setValue(newValue);

    // Reset flag after scrolling settles
    setTimeout(() => {
      isTabClick.current = false;
    }, 500);
  };

  useEffect(() => {
    if (isTabClick.current) return; // Ignore updates if tab click triggered
    if (homeView) {
      setValue("one");
    } else if (experienceView) {
      setValue("two");
    } else if (projectsView) {
      setValue("three");
    }
  }, [homeView, experienceView, projectsView]);

  return (
    <BrowserRouter>
      <NavBar tabs={navbarTabs} value={value} handleChange={handleChange} />
      <Box component="section" id="home" ref={homeRef} position="relative">
        <Reveal currentView={homeView}>
          <HomePage />
        </Reveal>
        <div className="custom-shape-divider-bottom-1742093394">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
          </svg>
        </div>
      </Box>
      <Box component="section" id="experience" ref={experienceRef} position="relative"
        sx={{ background: "linear-gradient(180deg, hsla(217, 46%, 50%, 1) 40%,  #7279d8 100%)" }}>
        <Reveal currentView={experienceView}>
          <ExperiencePage />4
        </Reveal>
        <div className="custom-shape-divider-bottom-1742104634">
          <svg data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
      </Box>
      <Box component="section" id="projects" ref={projectsRef}>
        <Reveal currentView={projectsView}>
          <ProjectsPage />
        </Reveal>
      </Box>
    </BrowserRouter>
  );
}

export default App;
