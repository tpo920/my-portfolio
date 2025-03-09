import React, { useState } from "react";
import { Box, Tabs, Tab, AppBar, Toolbar, Typography, Drawer, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { HashLink } from "react-router-hash-link";
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar({ tabs, value, handleChange }) {
  const [drawerStatus, setDrawer] = useState(false);

  return (
    <AppBar position="fixed" sx={{ background: "#fefefe", boxShadow: "none" }}>
      <Box sx={{ mx: { xs: "0rem", md: "10rem" } }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              component={HashLink}
              to="#"
              smooth="true"
              sx={{
                color: "primary.dark",
                textDecoration: "inherit",
                fontFamily: "Poppins",
              }}
            >
              Trevor Po
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavBarTabs tabs={tabs} value={value} handleChange={handleChange} />
          </Box>
          {/* Menu-icon for mobile/small screens*/}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="small">
              <MenuIcon sx={{ width: "2rem", height: "2rem" }} />
            </IconButton>
          </Box>
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
