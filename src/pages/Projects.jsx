import { Box, Grid, Typography, Divider, Container } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../utils/ProjectData";

function Projects() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "120vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }}
    >
      <Container>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          mt: "4rem",
          mb: "4rem",
        }}>
          <Typography variant="h4">Featured Projects</Typography>
          <Divider sx={{ width: "15%", bgcolor: "primary.light", borderBottomWidth: 3, mt: "0.1rem" }} />
          <Typography variant="subtitle1">An overview of recent projects I have been involved in. </Typography>
        </Box>
        <Grid container spacing={2} p={0} >
          {projectsData.map((project) => (
            <Grid item key={project.title} md={6} >
              <ProjectCard key={project.key} project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
