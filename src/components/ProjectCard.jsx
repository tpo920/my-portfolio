import { useState } from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";
import { motion } from "framer-motion";

/**
 * Displays Project Card containing info and an image of the project.
 */
export default function ProjectCard({ project }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -20 }}
      onHoverStart={event => { setHover(true) }}
      onHoverEnd={event => { setHover(false) }}
    >
      <CardActionArea component="a" href={project.link} target="_blank" rel="noopener noreferrer" >
        <Card sx={{ display: "flex", flexDirection: "row" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontSize: "1.1rem", fontWeight: "medium" }}>
              {project.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" align="left" sx={{ fontSize: "0.9rem" }}>
              {project.date}
            </Typography>
            <Typography variant="body2" paragraph>
              {project.description}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              {
                hover ?
                  <>
                    <LayersIcon sx={{ color: "primary.light" }} />
                    <Box sx={{ ml: "0.5rem", color: "primary.light" }}>
                      <Typography variant="h7" sx={{ fontWeight: "medium", fontSize: "0.8rem" }}>{project.tech}</Typography>
                    </Box>
                  </>
                  :
                  <>
                    <LayersIcon sx={{ color: "primary.dark" }} />
                    <Box sx={{ ml: "0.5rem", color: "primary.dark" }}>
                      <Typography variant="h7" sx={{ fontWeight: "medium", fontSize: "0.8rem" }}>{project.tech}</Typography>
                    </Box>
                  </>
              }
            </Box>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 240, height: 275, display: { xs: "none", sm: "block" } }}
            image={project.image}
            alt={project.imageLabel}
          />
        </Card>
      </CardActionArea>
    </motion.div>
  );
}
