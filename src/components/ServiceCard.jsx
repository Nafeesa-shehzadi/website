import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(() => ({
  mb: 2,
  maxWidth: 320,
  height: 400,
  width: 400,
  background: "inherit",
  boxShadow: "none",
  transition: "background 0.3s ease",
  "&:hover": {
    background: "#042f36",
    color: "white",
    "& img": {
      filter: "invert(1) brightness(2)",
    },
  },
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "16px",
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: "auto",
  width: "80px",
  margin: "0 auto",
  transition: "filter 0.3s ease",
  marginTop: "1rem",
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  py: 3,
  textAlign: "center",
  fontWeight: "bold",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: "1rem",
}));

const ServiceCard = ({ title, description, image }) => (
  <StyledCard>
    <StyledCardMedia component="img" height="140" image={image} alt={title} />
    <StyledCardContent>
      <Typography variant="h4">{title}</Typography>
      <StyledBox>
        <Typography variant="body1">{description}</Typography>
      </StyledBox>
    </StyledCardContent>
  </StyledCard>
);

export default ServiceCard;
