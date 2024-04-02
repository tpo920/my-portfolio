import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ExperiencePage from "./pages/Experience";
import ProjectsPage from "./pages/Projects";
import NavBar from "./components/NavBar";

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
      <ExperiencePage onScrollChange={onScrollChange} />
      <ProjectsPage onScrollChange={onScrollChange} />
    </BrowserRouter>
  );
}

export default App;
