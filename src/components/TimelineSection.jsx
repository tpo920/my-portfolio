
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Icon, List, ListItem } from "@mui/material";
import {
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from "@mui/lab";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/**
 * Displays a section of a timeline with the given props
 */
export default function TimelineSection({ experience, expanded, handleChange }) {
    return (
        <TimelineItem>
            {
                experience.title === "P2 ECSE Mentor"
                    ?
                    <TimelineOppositeContent color="#fff">
                        Now
                    </TimelineOppositeContent>
                    :
                    null
            }
            <TimelineSeparator>
                {experience.title === "P2 ECSE Mentor" ? <TimelineDot sx={{ backgroundColor: "#fff" }} />
                    : <TimelineDot sx={{ backgroundColor: "transparent", borderColor: "#fff" }} />}
                <TimelineConnector sx={{ bgcolor: "#fff" }} />
            </TimelineSeparator>
            <TimelineContent>
                <Accordion disableGutters expanded={expanded === experience.panel} onChange={handleChange(experience.panel)} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={experience.panel + "-content"}
                        id={experience.panel + "-header"}
                        sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
                    >
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <Box sx={{ display: "flex", alignItems: "center" }} >
                                <Icon sx={{ color: "primary.main", mr: "0.4rem", display: { xs: "none", sm: "flex" } }}>{experience.icon}</Icon>
                                <Typography variant="h6" sx={{ color: "primary.main", fontFamily: "Poppins", fontSize: "1.1rem", fontWeight: "medium" }}>
                                    {experience.title}
                                </Typography>
                            </Box>
                            <Typography variant="h7" color="text.primary" align="left">
                                {experience.company}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" align="left" sx={{ fontSize: "0.9rem" }}>
                                {experience.date}
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List disablePadding sx={{ listStyleType: 'disc', ml: "0.9rem" }}>
                            {(experience.content).map((line) => (
                                <ListItem key={line} disableGutters disablePadding sx={{ display: 'list-item' }}>
                                    <Typography variant="body2" align="left">
                                        {line}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            </TimelineContent>
        </TimelineItem>
    );
}