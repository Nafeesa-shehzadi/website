import React from "react";
import { Grid2, Box, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard"; // Adjust path as needed

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

const Services = () => (
  <Box
    sx={{
      flexGrow: 1,
      p: 2,
      background: "#03dbfc",
      display: "flex", // Enable Flexbox
      flexDirection: "column", // Stack items vertically
      alignItems: "center", // Center items horizontally
      justifyContent: "center", // Center items vertically (if needed)
    }}
  >
    <Typography
      sx={{
        mt: 5, // Corrected margin top
        fontSize: 40,
        fontWeight: "bold",
        mb: 5, // Corrected margin bottom
      }}
    >
      Our 360° Services
    </Typography>
    <Grid2
      container
      spacing={2}
      justifyContent="center" // Center grid items within the container
    >
      {services.map((service, index) => (
        <Grid2 item xs={12} sm={6} md={4} key={index}>
          <ServiceCard
            title={service.title}
            description={service.description}
            image={service.image}
          />
        </Grid2>
      ))}
    </Grid2>
  </Box>
);

export default Services;
