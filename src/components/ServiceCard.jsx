import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const ServiceCard = ({ title, description, image }) => (
  <Card
    sx={{
      mb: 2,
      maxWidth: 320,
      height: 400,
      width: 400,
      background: "inherit", // Inherit background color from the section (e.g., white)
      boxShadow: "none", // Remove box shadow (border)
      transition: "background 0.3s ease", // Smooth transition effect
      "&:hover": {
        background: "#042f36", // Change to black on hover
        color: "white",
        "& img": {
          filter: "invert(1) brightness(2)", // Make image appear white on hover
        },
      },
      flexDirection: "column", // Stack items vertically
      justifyContent: "center", // Center content vertically
      alignItems: "center", // Center content horizontally
      borderRadius: "16px", // Rounded corners
    }}
  >
    <CardMedia
      component="img"
      height="140"
      image={image}
      alt={title}
      sx={{
        height: "auto", // Adjust height automatically to keep aspect ratio
        width: "80px", // Set your desired image width (like the logo size)
        margin: "0 auto", // Center the image horizontally
        transition: "filter 0.3s ease", // Smooth transition for the image color change
        marginTop: "1rem",
      }}
    />
    <CardContent
      sx={{
        py: 3, // Add some padding around the content
        textAlign: "center", // Center the content horizontally
        fontWeight: "bold", // Bold the text
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add a shadow effect to the text
      }}
    >
      <Typography variant="h4">{title}</Typography>
      <Typography
        variant="body1"
        sx={{
          marginTop: "1rem",
        }}
      >
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default ServiceCard;
