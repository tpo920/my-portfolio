import { useEffect, useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { useInView } from "react-intersection-observer";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from "@mui/lab";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import EditNoteIcon from '@mui/icons-material/EditNote';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}>
        <Typography variant="h4" sx={{ fontFamily: "Poppins", mb: "5rem" }}>
          Work Experience
        </Typography>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Now
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "primary.dark" }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <EditNoteIcon sx={{ color: "primary.dark", mr: "0.4rem" }} />
                      <Typography variant="h6" sx={{ color: "primary.dark", fontFamily: "Poppins", fontSize: "1.1rem" }}>
                        P2 ECSE Mentor
                      </Typography>
                    </Box>
                    <Typography variant="h7" color="text.primary">
                      The Department of Electrical, Computer, & Software Engineering @ UoA
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      03/2025 - Present
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Supporting and tutoring Part 2 ECSE students in a friendly and casual learning environment.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "primary.light" }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Accordion sx={{ maxWidth: "60rem" }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <DeveloperBoardIcon sx={{ color: "primary.dark", mr: "0.4rem" }} />
                      <Typography variant="h6" sx={{ color: "primary.dark", fontFamily: "Poppins", fontSize: "1.1rem" }}>
                        Engineering Intern
                      </Typography>
                    </Box>
                    <Typography variant="h7" color="text.primary">
                      LogTag International Ltd
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" >
                      11/2023 - 02/2024
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Implemented methods of data communication via Bluetooth Low Energy between
                    a UTRED30-Wifi and third-party probes through developing an extensible state
                    handler and parser with C/C++.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "primary.light" }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Accordion sx={{ maxWidth: "60rem" }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <WysiwygIcon sx={{ color: "primary.dark", mr: "0.4rem" }} />
                      <Typography variant="h6" sx={{ color: "primary.dark", fontFamily: "Poppins", fontSize: "1.1rem" }}>
                        Software Engineering Intern
                      </Typography>
                    </Box>
                    <Typography variant="h7" color="text.primary">
                      Kmax Technology
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      01/2023 - 04/2023
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Developed a web-scraping code with PHP and HTML to automate compilation of .csv records and parse data
                    into a presentable format.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent />
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
  );
}

export default Experience;
