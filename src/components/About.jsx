import React, { useState, useEffect, useRef } from "react";
import { Typography, Box } from "@mui/material";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current; // Copy the ref value to a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        textAlign: "center", // Center the content horizontally
        padding: 4, // Optional: Add padding for spacing
        overflow: "hidden", // Ensure no overflow
        marginTop: "5rem",
        transform: isVisible ? "translateX(0)" : "translateX(-200px)", // Move text from left initially
        transition: "transform 1.5s ease-out", // Adjusted transition duration
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
          marginLeft: "7rem",
          marginRight: "7rem",
          marginBottom: "7rem",
        }}
      >
        Welcome to GSoft! A leading software development company that provides
        modern software solutions and specialized services in Front-End,
        Back-End, and Mobile-App Development, along with Open AI and many more.
        We bring revolution and digital transformation to the journey of your
        success by excelling in various industries and businesses. By staying
        consistent with cutting-edge technologies and methodologies with a team
        of 100+ skilled experts, we strive to innovate your growing business
        model to boost its success and assure 24/7 availability for timely and
        100% satisfying customer support. So, be our Partner for highly
        accountable and reliable results...
      </Typography>
    </Box>
  );
}

export default About;
