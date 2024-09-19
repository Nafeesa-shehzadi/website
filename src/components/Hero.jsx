import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Button, Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";
const theme = createTheme();

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: "url(hero.jpg)", // Replace with your image URL
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "120vh",
  display: "flex",
  color: "white",
  justifyContent: "flex-start", // Align the inner Box to the left
  alignItems: "center", // Center vertically
}));

const ContentBox = styled(Box)(({ theme, isVisible }) => ({
  maxWidth: "700px",
  marginTop: theme.spacing(0.5), // Use the spacing function from the theme
  marginLeft: theme.spacing(5), // Use the spacing function from the theme
  transition: "transform 1.5s ease-in-out, opacity 1.5s ease-out",
  transform: isVisible ? "translateX(0)" : "translateX(-200px)", // Move text from left initially
}));

const HeroText = styled(Typography)(({ theme }) => ({
  fontSize: "55px",
  fontWeight: "bold",
}));

const HighlightedText = styled("span")({
  color: "#03dbfc",
});

const Description = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2), // Use the spacing function from the theme
}));

const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.5rem", // Increase text size
  textTransform: "none",
  color: "white", // Text color
  borderColor: "blue", // Outline color
  marginTop: theme.spacing(4), // Use the spacing function from the theme
  justifyContent: "center",
  padding: "10px 20px",
  "&:hover": {
    backgroundColor: "#03dbfc", // Change background color on hover
  },
}));

const StyledFab = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(3.25), // Use theme.spacing for distance from the bottom
  right: theme.spacing(3.25), // Use theme.spacing for distance from the right
  backgroundColor: "#25D366", // WhatsApp green color
  color: "white", // White icon color
  "&:hover": {
    backgroundColor: "#128C7E", // Darker green on hover
  },
  zIndex: 1000, // Make sure it stays on top
}));

const Icon = styled(WhatsAppIcon)({
  fontSize: 40, // Increase icon size
});

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const email = "n@gmail.com"; // Replace with your email address
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentSectionRef = sectionRef.current; // Copy the ref value
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank"); // Replace with your WhatsApp number
  };
  const handleEstimate = () => {
    const sanitizedEmail = email.replace(/[^a-zA-Z0-9]/g, "");
    const storedData = localStorage.getItem(`user-${sanitizedEmail}`);

    if (storedData) {
      navigate("/estimate-your-project");
    } else {
      navigate("/login");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <HeroSection>
        <ContentBox ref={sectionRef} isVisible={isVisible}>
          <HeroText variant="h1">
            Software{" "}
            <HighlightedText>
              Development <br />
              Company{" "}
            </HighlightedText>{" "}
            For Your Market
            <br /> Leadership In Business
          </HeroText>
          <Description variant="body1">
            Since 2012, we have been a trusted software development company that
            has helped businesses in all kinds of industries. We provide
            services in Web and Mobile development, UI/UX, DevOps, Cloud
            services, SEO, and many more.
          </Description>
          <StyledButton
            variant="outlined"
            size="large"
            onClick={handleEstimate}
          >
            Let's discuss your project
          </StyledButton>
        </ContentBox>
      </HeroSection>
      <StyledFab
        color="success"
        aria-label="whatsapp"
        onClick={handleWhatsAppClick}
      >
        <Icon />
      </StyledFab>
      <Navbar handleNavigate={handleEstimate} />
    </ThemeProvider>
  );
};

export default Hero;
