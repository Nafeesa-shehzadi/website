import { Box, Typography, Button, CardMedia, IconButton } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function WorkPortfolio() {
  const [active, setActive] = useState(0);
  const [imageIndex, setImageIndex] = useState(1);

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % Apps[active].length);
  };

  const handlePrevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? Apps[active].length - 1 : prevIndex - 1
    );
  };

  const handleClick = (index) => {
    setActive(index);
    setImageIndex(0); // Reset to first image of the new category
  };

  const Apps = [
    [
      {
        src: "dressapp.webp",
        name: "uDress Mobile App",
        desc: "uDress is a boutique at your fingertips. This unique platform allows users to post and sell any type of dress. Its easy to use search feature allows buyers to quickly find the type of dress, color and....",
      },
      {
        src: "tibbi.webp",
        name: "Tibbi",
        desc: "It's a true one-stop healthcare solution which makes healthcare more accessible and affordable for Pakistanis. You can avail discounts on pharmacy and lab services, experience unparalleled services by....",
      },
      {
        src: "omid.webp",
        name: "Omid",
        desc: "Omid life is an online global holistic platform that connects life seekers with high-level spiritual teachers seeking a fulfilling life. With OmidLife, you will be able to connect with Yoga, Tantra, M....",
      },
    ],
    [
      {
        src: "kitchen.webp",
        name: "Careers Kitchen",
        desc: "Careers Kitchen provides the advice, guidance...",
      },
      {
        src: "blend.webp",
        name: "Blend Menu",
        desc: "Blend Menu is Progressive Web App which allows...",
      },
      {
        src: "obenan.webp",
        name: "Obenan Web App",
        desc: "OBENAN is going to help Local businesses...",
      },
      {
        src: "omidweb.webp",
        name: "Omid Life",
        desc: "Omid life is an online global holistic platform...",
      },
      {
        src: "pedlar.webp",
        name: "Pedlar Web App",
        desc: "In the ever-evolving world of e-commerce...",
      },
    ],
  ];

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h3" sx={{ marginTop: "5rem" }}>
        Our Work
      </Typography>
      <Typography
        variant="h2"
        sx={{ mb: 5, fontWeight: "bold", fontSize: 50, lineHeight: 2 }}
      >
        Portfolio
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "none",
          alignItems: "center",
        }}
      >
        {["Mobile App", "Web App"].map((text, index) => (
          <Button
            key={text}
            color={active === index ? "primary" : "inherit"}
            sx={{
              fontSize: "1.5rem",
              mx: 1.5,
              textTransform: "none",
              mb: 2,
              position: "relative",
              "&:after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -5,
                width: "100%",
                height: "2px",
                backgroundColor:
                  active === index ? "primary.main" : "transparent",
                transition: "background-color 0.3s ease",
              },
            }}
            onClick={() => handleClick(index)}
          >
            {text}
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          width: "100%",
          height: "400px", // Adjust height as needed
          mx: "auto",
        }}
      >
        {Apps[active].map((item, idx) => (
          <Box
            key={idx}
            sx={{
              position: "absolute",
              transition: "all 0.5s ease",
              transform: `translateX(${idx - imageIndex}00%)`,
              opacity: idx === imageIndex ? 1 : 0.5,
              filter: idx === imageIndex ? "none" : "blur(2px)",
              width: idx === imageIndex ? "70%" : "45%",
              height: idx === imageIndex ? "100%" : "80%",
              zIndex: idx === imageIndex ? 2 : 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={item.src}
              alt={item.name}
              sx={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          mt: 4,
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "60px",
          }}
        >
          {Apps[active][imageIndex].name}
          {imageIndex > 0 && (
            <IconButton
              onClick={handlePrevImage}
              sx={{
                ml: 40,
                background: "black",
                color: "white",
                "&:hover": {
                  background: "gray",
                },
                mr: 1, // Space between the buttons
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          )}

          {imageIndex < Apps[active].length - 1 && (
            <IconButton
              onClick={handleNextImage}
              sx={{
                background: "black",
                ml: 2, // Add margin to the right of the forward icon
                color: "white",
                "&:hover": {
                  background: "gray",
                },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          )}
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              maxWidth: "45%", // Ensure description fits within container
              margin: "0 auto", // Center the description
              fontWeight: "normal",
              fontSize: "1.5rem",
              lineHeight: 1.5, // Adjust line height as needed
              paddingBottom: "5rem",
            }}
          >
            {Apps[active][imageIndex].desc}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

export default WorkPortfolio;
