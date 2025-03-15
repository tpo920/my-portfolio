import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(",")
  },
  palette: {
    background: {
      default: "#fefefe"
    },
    primary: {
      main: "#4672ba",
      dark: "#315082",
      light: "#5980c1",
      contrastText: "#fff"
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
