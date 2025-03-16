import { useEffect, useState } from "react";
import { Box, Typography, Divider, Container } from "@mui/material";
import { useInView } from "react-intersection-observer";
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

function Experience({ onScrollChange }) {
  const { ref: myRef, inView: experienceView } = useInView({ threshold: 0.2 });
  const [expanded, setExpanded] = useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // Set NavBar to experience tab
  useEffect(() => {
    if (experienceView) {
      onScrollChange("two");
    }
  }, [experienceView]);

  return (
    <Box
      ref={myRef}
      component="section"
      id="experience"
      sx={{
        width: "100%",
        minHeight: "130vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(180deg, hsla(217, 46%, 50%, 1) 40%,  #7279d8 100%)",
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
      <div className="custom-shape-divider-bottom-1742104634">
        <svg data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>
    </Box>
  );
}

export default Experience;
