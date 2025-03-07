import { Box, Tabs, Tab, AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { HashLink } from "react-router-hash-link";

export default function NavBar({ tabs, value, handleChange }) {
  return (
    <AppBar position="fixed" sx={{ background: "#fefefe", boxShadow: "none" }}>
      <Box sx={{ flexGrow: 1, ml: "15rem", mr: "15rem" }}>
        <Toolbar>
          <Typography
            component={HashLink}
            to="#"
            smooth="true"
            sx={{
              flexGrow: 1,
              color: "primary.dark",
              textDecoration: "inherit",
              fontFamily: "Poppins"
            }}
          >
            Trevor Po
          </Typography>
          <NavBarTabs tabs={tabs} value={value} handleChange={handleChange} />
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
