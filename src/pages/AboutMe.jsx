import React, { useState, useEffect } from "react";
import { Box, Avatar, Typography, Divider, IconButton, Link, Snackbar, Grid } from "@mui/material";
import "../assets/background.css";

function AboutMe() {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative"
            }}
        >
            Hello world
            <div className="custom-shape-divider-bottom-1742093394">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
                </svg>
            </div>
        </Box>
    );
}

export default AboutMe;
