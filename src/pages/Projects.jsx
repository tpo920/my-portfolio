import { useEffect } from "react";
import { Box, Grid, Typography, Divider, Container } from "@mui/material";
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
    <Box
      ref={myRef}
      component="section"
      id="projects"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={1} md={2} />
        <Grid item xs={10} md={7}>
          <Container>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
            }}>
              <Typography variant="h4">Featured Projects</Typography>
              <Divider sx={{ width: "15%", bgcolor: "primary.light", borderBottomWidth: 3, mt: "0.1rem" }} />
              <Typography variant="subtitle1">An overview of recent projects I have been involved in. </Typography>
            </Box>
            <Grid container spacing={2} >
              {projectsData.map((project) => (
                <>
                  <Grid item md={2} />
                  <Grid item key={project.title} md={10}>
                    <ProjectCard key={project.title} project={project} />
                  </Grid>
                </>
              ))}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Projects;
