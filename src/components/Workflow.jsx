import { Box, Typography, Grid2 } from "@mui/material";
import { styled } from "@mui/material/styles";

import React, { useState } from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  background: "#1e2420",
  color: "#ffffff",
  overflow: "hidden" /* Prevent horizontal scrolling */,
}));

const StyledHeader = styled(Box)(({ theme }) => ({
  fontFamily: "Poppins",
  paddingTop: "60px",
  lineHeight: "1.5",
  letterSpacing: "-0.02em",
  paddingLeft: "5rem",
  paddingBottom: "2rem",
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: "400",
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "60px",
  fontWeight: "600",
}));

const StyledCardContainer = styled(Box)(({ theme }) => ({
  p: 20,
  textAlign: "center",
}));

const StyledStepContainer = styled(Box)(({ theme, isActive }) => ({
  height: 300,
  background: "#1e2420",
  color: "#ffffff",
  maxWidth: 300,
  transition: "all 0.3s ease",
  cursor: "pointer",
  boxShadow: isActive
    ? "0 4px 8px rgba(255, 255, 255, 0.1) ,0 -4px 8px rgba(255, 255, 255, 0.1)"
    : "none", // Shadow above and below
  "&:hover": {
    transform: isActive ? "translateY(-100px)" : "none", // Move text up on hover
  },
}));

const StyledStepNumber = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#03dbfc",
}));

const StyledStepTitle = styled(Typography)(({ theme }) => ({
  mt: 2,
  mb: 1,
}));

const StyledStepDescription = styled(Typography)(({ theme }) => ({
  fontFamily: "__Montserrat_45c9c5', '__Montserrat_Fallback_45c9c5",
}));

function Workflow() {
  const steps = [
    {
      NO: "01",
      title: "Discover & Planning",
      desc: "Get your project requirements planned out so you can hit the ground running.",
    },
    {
      NO: "02",
      title: "Estimate",
      desc: "Our team of business analysts, software architects, and developers will get together to define your product or project and estimate the effort required.",
    },
    {
      NO: "03",
      title: "Development & Testing",
      desc: "Bring your design ideas to life with our build team - we'll make sure it works flawlessly.",
    },
    {
      NO: "04",
      title: "Deployment",
      desc: "Get your product ready for takeoff. Your product has been through rigorous testing and is now ready for deployment!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState("null");

  return (
    <StyledBox>
      <StyledHeader>
        <StyledTitle>Work Flow</StyledTitle>
        <StyledSubtitle>Our Working Process</StyledSubtitle>
      </StyledHeader>
      <StyledCardContainer>
        <Grid2 container spacing={4} justifyContent="center">
          {steps.map((step, index) => (
            <Grid2 item xs={12} sm={6} md={3} key={index}>
              <StyledStepContainer
                isActive={index === activeIndex}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <StyledStepNumber variant="h6">{step.NO}</StyledStepNumber>
                <StyledStepTitle variant="h6">{step.title}</StyledStepTitle>
                <StyledStepDescription variant="body2">
                  {step.desc}
                </StyledStepDescription>
              </StyledStepContainer>
            </Grid2>
          ))}
        </Grid2>
      </StyledCardContainer>
    </StyledBox>
  );
}

export default Workflow;
