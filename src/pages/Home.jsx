import React, { useState, useEffect } from "react";
import {
  Box,
  Avatar,
  Typography,
  Divider,
  IconButton,
  Link,
  Snackbar,
  Grid
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
    <Box ref={myRef} component="section" id="home" sx={{
      width: "100%", minHeight: "100vh", display: 'flex',
      flexDirection: 'column', alignItems: "center", justifyContent: "center",
    }}>
      <Grid container spacing={3} >
        <Grid item xs={1} md={2} />
        <Grid item xs={10} md={8} >
          <Grid container spacing={3} >
            <Grid item md={1.5} sx={{ display: { sm: "none", md: "flex" } }} />
            <Grid item xs={12} sm={6} md={6} >
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
                Software Engineering Student @ The University of Auckland
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
            </Grid>
            <Grid item sm={6} md={4} sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "center" }}>
              <Avatar
                alt="Profile Picture"
                src="/images/profilepic.jpg"
                loading="lazy"
                sx={{ width: 250, height: 250 }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
