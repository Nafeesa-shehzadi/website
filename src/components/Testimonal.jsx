import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
const clientOpinions = [
  {
    name: "John Doe",
    opinion:
      "I Don't Think You Could Find A Better Company To Manage And Build Your Project. I Get So Many Compliments On My Application, And It Has A Lot Of Unique And Complex Development.",
    image: "/maroon.webp",
  },
  {
    name: "Jane Smith",
    opinion:
      "Global Software Consulting Provides Great Talent To Us And Quickly Understands Our Needs. They Show A Clear Aptitude For Quickly Grasping Requirements, Learning New Skills, And Engaging In Close Collaboration. Their Willingness To Go Above And Beyond Makes For A Successful Partnership.",
    image: "/vita.webp",
  },
  {
    name: "Alice Johnson",
    opinion:
      "The User-Friendly Software Hasn’t Encountered Any Issues Or Bugs. It’s High Quality Has Helped Grow My Business. Consistent In Communication, Met Every Deadline And Ensured A Hassle-Free Development Process.",
    image: "/houze.webp",
  },
];

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: "black",
  color: "white",
  paddingBottom: "1rem",
  overflow: "hidden" /* Prevent horizontal scrolling */,
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: "center",
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: "center",
  fontWeight: "bold",
}));

const StyledCarouselContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "515px",
  margin: "auto",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "1rem",
  background: "#07423c",
  color: "white",
  padding: theme.spacing(5),
  margin: "1rem",
  cursor: "pointer",
  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
  maxHeight: "400px",
  maxWidth: "500px",
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  textAlign: "center",
}));

const StyledDot = styled(Box)(({ theme, active }) => ({
  width: active ? "12px" : "6px",
  height: active ? "12px" : "6px",
  borderRadius: "50%",
  backgroundColor: "white",
  marginBottom: "4px",
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: "60px",
  height: "60px",
  margin: "10px auto",
  border: "2px solid white",
}));

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the second card active

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <StyledBox>
        <StyledTitle variant="h2">Testimonials</StyledTitle>
        <StyledSubtitle variant="h2">What Our Clients Say</StyledSubtitle>
        <StyledCarouselContainer>
          {clientOpinions.map((client, index) => (
            <Box
              key={index}
              sx={{
                position: "absolute",
                transition: "transform 0.5s ease",
                transform: `translateX(${(index - activeIndex) * 100}%)`,
                opacity: index === activeIndex ? 1 : 0.5,
                zIndex: index === activeIndex ? 2 : 1,
                width: "500px",
                textAlign: "center",
              }}
              onClick={() => handleCardClick(index)}
            >
              <StyledCard>
                <StyledCardContent>
                  <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                    "{client.opinion}"
                  </Typography>
                </StyledCardContent>
              </StyledCard>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mt: 1,
                }}
              >
                <StyledDot active={index === activeIndex} />
                <StyledDot active={index !== activeIndex} />
              </Box>
              <StyledAvatar alt={client.name} src={client.image} />
              <Typography variant="h6" sx={{ color: "white" }}>
                {client.name}
              </Typography>
            </Box>
          ))}
        </StyledCarouselContainer>
      </StyledBox>
    </>
  );
}

export default Testimonial;
