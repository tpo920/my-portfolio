import { useEffect } from "react";
import { Box, Toolbar, Typography, Container, Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from "@mui/lab";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import EducationCard from "../components/EducationCard";
import educationData from "../utils/EducationData";

function Experience({ onScrollChange }) {
  const { ref: myRef, inView: experienceView } = useInView({ threshold: 0.2 });

  // Set NavBar to experience tab
  useEffect(() => {
    if (experienceView) {
      onScrollChange("two");
    }
  }, [experienceView]);

  return (
    <Box ref={myRef} component="section" id="experience" sx={{ flexGrow: 1 }}>
      <Toolbar />
      <Box sx={{ ml: "10rem", mt: "2rem" }}>
        <Typography variant="h5" color="primary.dark">
          EXPERIENCE
        </Typography>
      </Box>
      <Box sx={{ justifyContent: "center", display: "flex", mr: "10rem", ml: "10rem" }}>
        <Grid container spacing={2} p={3} item md={12}>
          {educationData.map((education) => (
            <Grid item key={education.title} sm={6}>
              <EducationCard key={education.title} education={education} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Container sx={{ justifyContent: "center", display: "flex", mt: "2rem" }}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "primary.dark" }}>
                <DeveloperBoardIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "14px" }}>
              <Typography variant="h5" sx={{ ml: "-1px" }}>
                Software Engineering Intern
              </Typography>
              <Typography variant="h7" color="text.primary">
                LogTag International Ltd
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                11/2023 - 02/2024
              </Typography>
              <Typography>
                Worked on a R&D project involving software development and Bluetooth Low Energy
                capabilities with the company's product.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "primary.main" }}>
                <WysiwygIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "14px" }}>
              <Typography variant="h5">Software Intern</Typography>
              <Typography variant="h7" color="text.primary">
                Kmax Technology
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                01/2023 - 04/2023
              </Typography>
              <Typography>
                Assisted with automating the process of collection of data and performed testing and
                research with a set of algorithms on a set of data.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "primary.light" }}>
                <FoodBankIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "14px" }}>
              <Typography variant="h5">Front of House Staff</Typography>
              <Typography variant="h7" color="text.primary">
                Daruma Group
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                04/2021 - Present
              </Typography>
              <Typography>
                Working at Daruma required stock management, multitasking, and adapting to a
                fast-paced environment.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "primary.main" }} />
            </TimelineSeparator>
            <TimelineContent />
          </TimelineItem>
        </Timeline>
      </Container>
    </Box>
  );
}

export default Experience;
