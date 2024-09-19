import React, { useState, useEffect, useRef } from "react";
import { Typography, Box } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const AboutSection = styled(Box)(({ theme, isVisible }) => ({
  textAlign: "center",
  padding: theme.spacing(4), // Use theme spacing
  overflow: "hidden",
  marginTop: theme.spacing(10), // Use theme spacing for margin
  transform: isVisible ? "translateX(0)" : "translateX(-200px)", // Move text from left initially
  transition: "transform 1.5s ease-out", // Adjusted transition duration
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: "normal",
  marginBottom: theme.spacing(2), // Use theme spacing for margin
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(2), // Use theme spacing for margin
}));

const Description = styled(Typography)(({ theme }) => ({
  fontWeight: "normal",
  marginBottom: theme.spacing(7), // Use theme spacing for margin
  fontSize: "1.5rem",
  lineHeight: 1.5,
  display: "inline-block",
  marginLeft: theme.spacing(7), // Use theme spacing for margin
  marginRight: theme.spacing(7), // Use theme spacing for margin
}));

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
    <ThemeProvider theme={theme}>
      <AboutSection ref={sectionRef} isVisible={isVisible}>
        <Heading variant="h4">Who We Are</Heading>
        <SubHeading variant="h3">CONSULTANCY. DESIGN. DEVELOPMENT.</SubHeading>
        <Description variant="h4">
          Welcome to GSoft! A leading software development company that provides
          modern software solutions and specialized services in Front-End,
          Back-End, and Mobile-App Development, along with Open AI and many
          more. We bring revolution and digital transformation to the journey of
          your success by excelling in various industries and businesses. By
          staying consistent with cutting-edge technologies and methodologies
          with a team of 100+ skilled experts, we strive to innovate your
          growing business model to boost its success and assure 24/7
          availability for timely and 100% satisfying customer support. So, be
          our Partner for highly accountable and reliable results...
        </Description>
      </AboutSection>
    </ThemeProvider>
  );
}

export default About;
