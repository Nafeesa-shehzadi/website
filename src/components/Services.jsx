import React, { useState, useRef, useEffect } from "react";
import { Grid2, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ServiceCard from "./ServiceCard"; // Adjust path as needed

const StyledBox = styled(Box)(() => ({
  background: "#03dbfc",
}));

const StyledContainer = styled(Box)(({ theme, isVisible }) => ({
  transform: isVisible ? "translateX(0)" : "translateX(-200px)",
  transition: "transform 1.5s ease-in-out, opacity 1.5s ease-out",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
  p: 2,
  padding: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  mt: 5,
  fontSize: 50,
  fontWeight: "bold",
  mb: 5,
  alignItems: "center",
}));

const StyledGrid = styled(Grid2)(({ theme }) => ({
  justifyContent: "center",
}));

const services = [
  {
    title: "Back-End Development",
    description:
      "We offer full-cycle back-end development services with our team of dedicated developers to ensure the security and resilience of your website",
    image: "website.webp",
  },
  {
    title: "Web App Development",
    description:
      "Transform your web development ideas into ground-breaking, smart and futuristic apps that boost business profitability.",
    image: "/webapp.webp",
  },
  {
    title: "UI/UX Design Services",
    description:
      "Give your brand and business a perfect face with our User-Experience research and design experts",
    image: "/UI.webp",
  },
  {
    title: "DevOps Services Company",
    description:
      "We fast-track your pace of digital renovation journey with our systems development life cycle and DevOps solutions.",
    image: "/Devops.webp",
  },
  {
    title: "Logo Design Company",
    description:
      "Your brand is a reflection of company culture and performance, therefore, we can help you develop a plan for brand identity, content strategy, and user experience as you grow your business.",
    image: "/logoD.webp",
  },
  {
    title: " Team Augmentation Services",
    description:
      "Power the aptitude of our dedicated development teams in app development to meet your crucial business goals.",
    image: "/team.webp",
  },
  {
    title: "AI/ML Development Services",
    description:
      "Our AI Development Service offers cutting-edge solutions for businesses and organizations looking to incorporate artificial intelligence into their operations.",
    image: "/Ai.webp",
  },
  {
    title: "Mobile App Development",
    description:
      "Scalable and state-of-the-art Mobile App development Service with full-fledged support from creativity to deployment phase for stellar user-experience.",
    image: "/mobile.webp",
  },
  {
    title: " Mobile Application Design",
    description:
      "Accelerate your business growth with the power of our talented devs of our Software Development Company.",

    image: "/app.webp",
  },
  {
    title: " Cloud Services Company",
    description:
      "We are passionate about helping businesses win in the digital age with Bespoke seamless integration between client applications and the cloud.",
    image: "/cloud.webp",
  },
];

const Services = () => {
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
    <>
      <StyledBox>
        <StyledContainer ref={sectionRef} isVisible={isVisible}>
          <StyledTypography>Our 360° Services</StyledTypography>
          <StyledGrid container spacing={2}>
            {services.map((service, index) => (
              <Grid2 item xs={12} sm={6} md={4} key={index}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              </Grid2>
            ))}
          </StyledGrid>
        </StyledContainer>
      </StyledBox>
    </>
  );
};

export default Services;
