import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Button, Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } // Adjust this value to trigger earlier if needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank"); // Replace with your WhatsApp number
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(hero.jpg)", // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "120vh",
          display: "flex",
          color: "white",
          justifyContent: "flex-start", // Align the inner Box to the left
          alignItems: "center", // Center vertically
        }}
      >
        <Box
          ref={sectionRef}
          sx={{
            maxWidth: "700px",
            marginTop: "0.5rem",
            marginLeft: "5rem",
            transform: isVisible ? "translateX(0)" : "translateX(-200px)", // Move text from left initially
            transition: "transform 1.5s ease-in-out, opacity 1.5s ease-out",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "55px",
              fontWeight: "bold",
            }}
          >
            {" "}
            Software{" "}
            <span style={{ color: "#03dbfc" }}>
              Development <br />
              Company{" "}
            </span>{" "}
            For Your Market
            <br /> Leadership In Business
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Since 2012, we have been a trusted software development company that
            has helped businesses in all kinds of industries. We provide
            services in Web and Mobile development, UI/UX, DevOps, Cloud
            services, SEO and many more.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{
              fontWeight: "Bold",
              fontSize: "1.5rem", // Increase text size
              textTransform: "none",
              color: "white", // Text color
              borderColor: "blue", // Outline color
              mt: 4,
              justifyContent: "center",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#03dbfc", // Change background color on hover
              },
            }}
          >
            Let's discuss your project
          </Button>
        </Box>
      </Box>
      <Fab
        color="success"
        aria-label="whatsapp"
        onClick={handleWhatsAppClick}
        sx={{
          position: "fixed",
          bottom: 26, // Distance from the bottom of the screen
          right: 26, // Distance from the right side of the screen
          backgroundColor: "#25D366", // WhatsApp green color
          color: "white", // White icon color
          "&:hover": {
            backgroundColor: "#128C7E", // Darker green on hover
          },
          zIndex: 1000, // Make sure it stays on top
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 40 }} /> {/* Increase icon size */}
      </Fab>
    </>
  );
};

export default Hero;
