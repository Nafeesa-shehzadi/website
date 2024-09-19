import {
  Box,
  Typography,
  Button,
  CardMedia,
  IconButton,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const StyledContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  overflow: "hidden" /* Prevent horizontal scrolling */,
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  marginTop: "5rem",
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  fontWeight: "bold",
  fontSize: "50px",
  lineHeight: 2,
}));

const StyledButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "none",
  alignItems: "center",
}));

const StyledButton = styled(Button)(({ theme, active }) => ({
  fontSize: "1.5rem",
  margin: theme.spacing(0, 1.5),
  textTransform: "none",
  marginBottom: theme.spacing(2),
  position: "relative",
  color: active ? theme.palette.primary.main : theme.palette.text.primary,

  "&:after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: -5,
    width: "100%",
    height: "2px",
    backgroundColor: active ? theme.palette.primary.main : "transparent",
    transition: "background-color 0.3s ease",
  },
}));

const StyledImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
  width: "100%",
  height: "400px",
  margin: "auto",
}));

const StyledImage = styled(Box)(({ theme, idx, imageIndex }) => ({
  position: "absolute",
  transition: "all 0.5s ease",
  transform: `translateX(${(idx - imageIndex) * 100}%)`,
  opacity: idx === imageIndex ? 1 : 0.5,
  filter: idx === imageIndex ? "none" : "blur(2px)",
  width: idx === imageIndex ? "70%" : "45%",
  height: idx === imageIndex ? "100%" : "80%",
  zIndex: idx === imageIndex ? 2 : 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledImageCard = styled(CardMedia)(({ theme }) => ({
  objectFit: "contain",
  width: "100%",
  height: "100%",
}));

const StyledDescriptionContainer = styled(Box)(({ theme, imageIndex }) => ({
  position: "relative",
  marginTop: theme.spacing(4),
  width: "100%",
  left: `${imageIndex * 100}%`, // Align with the active image
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  paddingLeft: theme.spacing(2),
}));

const StyledTitleDescription = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "60px",
  maxWidth: "45%",
  margin: "0 auto",
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "black",
  color: "white",
  "&:hover": {
    backgroundColor: "gray",
  },
  margin: theme.spacing(0, 2),
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  maxWidth: "45%",
  margin: "0 auto",
  fontWeight: "normal",
  fontSize: "1.5rem",
  lineHeight: 1.5,
  paddingBottom: "5rem",
}));

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
    <StyledContainer>
      <StyledTitle variant="h3">Our Work</StyledTitle>
      <StyledSubtitle variant="h2">Portfolio</StyledSubtitle>
      <StyledButtonContainer>
        {["Mobile App", "Web App"].map((text, index) => (
          <StyledButton
            key={text}
            active={active === index}
            onClick={() => handleClick(index)}
          >
            {text}
          </StyledButton>
        ))}
      </StyledButtonContainer>
      <StyledImageContainer>
        {Apps[active].map((item, idx) => (
          <StyledImage
            key={idx}
            idx={idx}
            imageIndex={imageIndex}
            active={idx === imageIndex}
          >
            <StyledImageCard component="img" image={item.src} alt={item.name} />
          </StyledImage>
        ))}
      </StyledImageContainer>
      <StyledDescriptionContainer>
        <StyledTitleDescription>
          {Apps[active][imageIndex].name}
          {imageIndex > 0 && (
            <StyledIconButton onClick={handlePrevImage}>
              <ArrowBackIcon />
            </StyledIconButton>
          )}
          {imageIndex < Apps[active].length - 1 && (
            <StyledIconButton onClick={handleNextImage}>
              <ArrowForwardIcon />
            </StyledIconButton>
          )}
        </StyledTitleDescription>
        <StyledDescription variant="body1">
          {Apps[active][imageIndex].desc}
        </StyledDescription>
      </StyledDescriptionContainer>
    </StyledContainer>
  );
}

export default WorkPortfolio;
