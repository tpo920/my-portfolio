import { useState, useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import { InView, useInView } from "react-intersection-observer";
import HomePage from "./pages/Home";
import AboutMePage from "./pages/AboutMe";
import ExperiencePage from "./pages/Experience";
import ProjectsPage from "./pages/Projects";
import NavBar from "./components/NavBar";
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
  const { ref: homeRef, inView: homeView } = useInView({ threshold: 0.1 });
  const { ref: experienceRef, inView: experienceView } = useInView({ threshold: 0.1 });
  const { ref: projectsRef, inView: projectsView } = useInView({ threshold: 0.1 });
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
      <Box component="section" id="home" ref={homeRef}><HomePage /></Box>
      <Box component="section" id="aboutme"><AboutMePage /></Box>
      <Box component="section" id="experience" ref={experienceRef}><ExperiencePage /></Box>
      <Box component="section" id="projects" ref={projectsRef}><ProjectsPage /></Box>
    </BrowserRouter>
  );
}

export default App;
