import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
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
        sx={{
          maxWidth: "700px",
          marginTop: "0.5rem",
          marginLeft: "5rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "50px",
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
          has helped businesses in all kinds of industries. We provide services
          in Web and Mobile development, UI/UX, DevOps, Cloud services, SEO and
          many more.
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
  );
};

export default Hero;
