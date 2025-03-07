import React, { useState, useEffect } from "react";
import {
  Box,
  Avatar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Link,
  Snackbar
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";

function Home({ onScrollChange }) {
  const [open, setOpen] = useState(false);
  const { ref: myRef, inView: homeView } = useInView({ threshold: 0.2 });

  // Open Snackbar
  const handleClick = () => {
    setOpen(true);
  };

  // Close Snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // Set NavBar to home tab
  useEffect(() => {
    if (homeView) {
      onScrollChange("one");
    }
  }, [homeView]);

  return (
    <Box ref={myRef} component="section" id="home" sx={{ flexGrow: 1 }}>
      <Toolbar />
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          m: "12rem"
        }}
      >
        <Box sx={{ width: "27rem" }}>
          <Typography variant="h3" component="span" sx={{ fontFamily: "Poppins" }}>
            Hi, I'm{" "}
          </Typography>
          <Typography
            variant="h3"
            component="span"
            sx={{ fontFamily: "Poppins", color: "primary.main" }}
          >
            Trevor
          </Typography>
          <Typography variant="subtitle1">
            Software Engineering Student @ University of Auckland
          </Typography>
          <Divider sx={{ width: "40%", color: "primary.main" }} />
          <Typography variant="body1" sx={{ mt: "1rem", fontSize: "0.9rem" }}>
            I am an ambitious software engineering student eager to gain real-world experience and to 
            advance my technical and soft skills. This industry is an exciting career path for me as 
            it enables me to think outside the box and work within a multi-disciplinary environment. 
          </Typography>
          <Box sx={{ ml: "-0.5rem", mt: "1rem", display: "flex" }}>
            <Link
              href="https://www.linkedin.com/in/trevor-po-b26059212/"
              without="true"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconButton size="small">
                <LinkedInIcon sx={{ width: "2rem", height: "2rem", color: "primary.dark" }} />
              </IconButton>
            </Link>
            <Link
              href="https://github.com/tpo920"
              without="true"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconButton size="small">
                <GitHubIcon sx={{ width: "2rem", height: "2rem", color: "primary.dark" }} />
              </IconButton>
            </Link>
            <IconButton onClick={handleClick} size="small">
              <EmailIcon sx={{ width: "2.1rem", height: "2rem", color: "primary.dark" }} />
            </IconButton>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message="trevorpo802@gmail.com"
              action={
                <IconButton size="small" aria-label="close" color="primary" onClick={handleClose}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              }
            />
          </Box>
        </Box>
        <Box sx={{ mt: "-2rem", ml: "4.5rem", display: { xs: "none", sm: "block" } }}>
          <Avatar
            alt="Profile Picture"
            src="/images/profilepic.jpg"
            sx={{ width: 250, height: 250 }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
