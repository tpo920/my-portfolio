import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";

/**
 * Displays Project Card containing info and an image of the project.
 */
export default function ProjectCard({ project }) {
  return (
    <CardActionArea component="a" href={project.link} target="_blank" rel="noopener noreferrer">
      <Card sx={{ display: "flex", flexDirection: "row" }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {project.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {project.date}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {project.description}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <LayersIcon sx={{ color: "primary.dark" }} />
            <Box sx={{ ml: "0.5rem", color: "primary.dark" }}>
              <Typography variant="h7">{project.tech}</Typography>
            </Box>
          </Box>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 240, height: 250, display: { xs: "none", sm: "block" } }}
          image={project.image}
          alt={project.imageLabel}
        />
      </Card>
    </CardActionArea>
  );
}
