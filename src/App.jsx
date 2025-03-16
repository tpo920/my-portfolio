import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
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
  const [isChange, setIsChange] = useState(false);

  // Parent function called by page sections to update current active tab in NavBar
  const onScrollChange = (newValue) => {
    if (isChange) {
      setIsChange(false);
    } else {
      setValue(newValue);
    }
  };

  // Parent function called by an onClick event in the NavBar
  const handleChange = (event, newValue) => {
    setIsChange(true);
    setValue(newValue);
  };

  return (
    <BrowserRouter>
      <NavBar tabs={navbarTabs} value={value} handleChange={handleChange} />
      <HomePage onScrollChange={onScrollChange} />
      <div className="custom-shape-divider-bottom-1742093394">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
        </svg>
      </div>
      <ExperiencePage onScrollChange={onScrollChange} />
      <ProjectsPage onScrollChange={onScrollChange} />
    </BrowserRouter>
  );
}

export default App;
