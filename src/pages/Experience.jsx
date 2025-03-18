import { useState } from "react";
import { Box, Typography, Divider, Container } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import TimelineSection from "../components/TimelineSection";
import workExperienceData from "../utils/WorkExperienceData";
import "../assets/background.css";

function Experience() {
  const [expanded, setExpanded] = useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "130vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    > 
      <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: "7rem" }}>
        <Box sx={{
          mb: "4rem",
        }}>
          <Typography variant="h4" sx={{ color: "#fff", fontWeight: "medium" }}>
            Work Experience
          </Typography>
          <Divider sx={{ width: "55%", bgcolor: "#fff", borderBottomWidth: 3, mt: "0.2rem" }} />
        </Box>
        <Timeline position="alternate" sx={{ width: "90%" }}>
          {workExperienceData.map((experience) => (
            <TimelineSection key={experience.title} experience={experience} expanded={expanded} handleChange={handleChange} />
          ))}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent />
          </TimelineItem>
        </Timeline>
      </Container>
      <Box sx={{ width: "100%", height: "20vh" }} />
    </Box>
  );
}

export default Experience;
