import React, { useState, useEffect } from "react";
import {
  Box,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  Typography,
  SwipeableDrawer,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  Divider
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { HashLink } from "react-router-hash-link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useWindowSize } from "../hooks/useWindowSize";

export default function NavBar({ tabs, value, handleChange }) {
  const [drawer, setDrawer] = useState(false);
  const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const scrollToSection = async (ref) => {
    document.getElementById(ref.toLowerCase()).scrollIntoView({ behavior: "smooth" });
    setDrawer(false);
  };

  useEffect(() => {
    setDrawer(false);
  }, [useWindowSize()]);

  return (
    <AppBar position="fixed" sx={{ background: "#fefefe", boxShadow: "none" }}>
      <Box sx={{ mx: { xs: "0rem", md: "10rem" } }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            <Typography
              component={HashLink}
              to="#"
              smooth="true"
              sx={{
                color: "primary.dark",
                textDecoration: "inherit",
                fontFamily: "Poppins"
              }}
            >
              Trevor Po
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <NavBarTabs tabs={tabs} value={value} handleChange={handleChange} />
          </Box>
          {/* Menu-icon for mobile/small screens*/}
          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" }, justifyContent: "flex-end" }}
          >
            <IconButton size="small" onClick={() => setDrawer(true)}>
              <MenuIcon sx={{ width: "2rem", height: "2rem" }} />
            </IconButton>
          </Box>
          {/* Top Drawer Menu */}
          <SwipeableDrawer
            anchor={"top"}
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            open={drawer}
            onClose={() => setDrawer(false)}
            SlideProps={{ easing: "ease-in-out" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                p: "1rem"
              }}
            >
              <Avatar
                alt="Profile Picture"
                src="/images/profilepic.jpg"
                sx={{ width: "3rem", height: "3rem" }}
              />
              <Typography
                variant="body1"
                sx={{
                  ml: "1rem",
                  flexGrow: 1
                }}
              >
                Trevor Po
              </Typography>
              <IconButton sx={{ width: "2rem", height: "2rem" }} onClick={() => setDrawer(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider />
            <List>
              {tabs.map(({ title, to }) => (
                <ListItem key={to} disablePadding>
                  <ListItemButton
                    sx={{
                      py: "0.7rem",
                      textAlign: "center",
                      justifyContent: "center",
                      "&:hover": {
                        color: "#5980c1",
                        opacity: 1
                      }
                    }}
                    disableRipple
                    onClick={() => scrollToSection(title)}
                  >
                    <Typography sx={{ fontSize: "0.9rem" }}>{title.toUpperCase()}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </SwipeableDrawer>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

const StyledTabs = styled((props) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 30,
    width: "100%",
    backgroundColor: "#5980c1"
  }
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  marginRight: theme.spacing(1),
  color: "rgba(255, 255, 255, 0.7)",
  "&.Mui-selected": {
    color: "#5980c1"
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#5980c1"
  },
  "&:hover": {
    color: "#5980c1",
    opacity: 1
  }
}));

export function NavBarTabs({ tabs, value, handleChange }) {
  return (
    <StyledTabs value={value} onChange={handleChange}>
      {tabs.map(({ title, to, tabValue }) => (
        <StyledTab
          value={tabValue}
          key={to}
          label={title}
          component={HashLink}
          smooth="true"
          to={to}
          sx={{ color: "text.primary" }}
        />
      ))}
    </StyledTabs>
  );
}
