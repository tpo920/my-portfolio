import { useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
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

function Experience({ onScrollChange }) {
  const { ref: myRef, inView: experienceView } = useInView({ threshold: 0.2 });

  // Set NavBar to experience tab
  useEffect(() => {
    if (experienceView) {
      onScrollChange("two");
    }
  }, [experienceView]);

  return (
    <Box ref={myRef} component="section" id="experience"
      sx={{
        width: "100%", minHeight: "140vh", display: 'flex', flexDirection: 'column',
        alignItems: "center", justifyContent: "center"
      }}>
      <Typography variant="h5" color="primary.dark">
        WORK EXPERIENCE
      </Typography>
      <Container sx={{ justifyContent: "center", display: "flex", mt: "2rem" }}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "primary.light" }}>
                <DeveloperBoardIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "14px" }}>
              <Typography variant="h5" sx={{ ml: "-1px" }}>
                P2 ECSE Mentor
              </Typography>
              <Typography variant="h7" color="text.primary">
                The Department of Electrical, Computer, & Software Engineering @ UoA
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                03/2025 - Present
              </Typography>
              <Typography>
                Supporting and tutoring Part 2 ECSE students in a friendly and casual learning environment.
              </Typography>
            </TimelineContent>
          </TimelineItem>
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
                Implemented methods of data communication via Bluetooth Low Energy between a UTRED30-Wifi and
                third-party probes through developing an extensible state handler and parser with C/C++.
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
                Developed a web-scraping code with PHP and HTML to automate compilation of .csv records and parse data
                into a presentable format.
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
