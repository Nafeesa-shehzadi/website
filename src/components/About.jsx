import React from "react";
import { Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the transition after component mounts
    setIsVisible(true);
  }, []);
  return (
    <Box
      sx={{
        textAlign: "center", // Center the content horizontally
        padding: 4, // Optional: Add padding for spacing
        overflow: "hidden", // Ensure no overflow
        marginTop: "7rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "normal", // Make sure the text is not bold
          mb: 2, // Add margin below the heading
        }}
      >
        Who We Are
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold", // Make the text bold
          mb: 2,
        }}
      >
        CONSULTANCY. DESIGN. DEVELOPMENT.
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontWeight: "normal", // Make sure the text is not bold
          mb: 2, // Add margin below the heading
          fontSize: "1.5rem",
          lineHeight: 1.5,
          display: "inline-block",
          transform: isVisible ? "translateX(0)" : "translateX(-20px)", // Move text from left initially
          transition: "transform 0.5s ease-in-out", // Smooth transition effect
          marginLeft: "7rem",
          marginRight: "7rem",
          marginBottom: "7rem",
        }}
      >
        Welcome to GSoft! A Leading software development company who is
        providing modern software solutions and specialized services of
        Front-End, Back-End and Mobile-App Development along with Open AI and
        many more. We bring revolution and digital transformation to the journey
        of your success by excelling various industries and businesses. By
        staying consistent with cutting-edge technologies and methodologies with
        a team of 100+ skilled experts, we strive to innovate your growing
        business model to boost its success and assure 24/7 availability for
        timely and 100% satisfying customer support. So, be our Partner for
        highly accountable and reliable Results...
      </Typography>
    </Box>
  );
}

export default About;
