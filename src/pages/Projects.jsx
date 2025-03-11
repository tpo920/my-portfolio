import { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../utils/ProjectData";

function Projects({ onScrollChange }) {
  const { ref: myRef, inView: projectsView } = useInView({ threshold: 0.2 });

  // Set NavBar to projects tab
  useEffect(() => {
    if (projectsView) {
      onScrollChange("three");
    }
  }, [projectsView]);

  return (
    <Box ref={myRef} component="section" id="projects" sx={{
      width: "100%", minHeight: "100vh", display: 'flex', flexDirection: 'column',
      alignItems: "center", justifyContent: "center", mt: "1rem"
    }}>
      <Typography variant="h5" color="primary.dark">
        PROJECTS
      </Typography>
      <Box sx={{ justifyContent: "center", display: "flex" }}>
        <Grid container spacing={2} p={3} >
          {projectsData.map((project) => (
            <Grid item key={project.title} md={6}>
              <ProjectCard key={project.title} project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Projects;
