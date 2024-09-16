import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  Grid2,
  Divider,
  Link,
} from "@mui/material";

import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

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

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the second card active

  const handleSwipeLeft = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === clientOpinions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSwipeRight = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? clientOpinions.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });
  const handleCardClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Box
        {...handlers}
        sx={{
          padding: 4,
          backgroundColor: "black",
          color: "white",
          paddingBottom: "1rem",
        }}
      >
        <Typography variant="h2" sx={{ marginBottom: 4, textAlign: "center" }}>
          Testimonials
        </Typography>
        <Typography
          variant="h2"
          sx={{ marginBottom: 4, textAlign: "center", fontWeight: "bold" }}
        >
          What Our Clients Say
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "515px", // Adjust height as needed
            mx: "auto",
          }}
        >
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
              <Card
                sx={{
                  borderRadius: "1rem",
                  background: "#07423c",
                  color: "white",
                  padding: 5,
                  margin: "1rem",
                  cursor: "pointer",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                  maxHeight: "400px",
                  maxWidth: "500px",
                }}
              >
                <CardContent>
                  <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                    "{client.opinion}"
                  </Typography>
                </CardContent>
              </Card>
              {/* Two dots below the card */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mt: 1,
                }}
              >
                <Box
                  sx={{
                    width: index === activeIndex ? "12px" : "6px",
                    height: index === activeIndex ? "12px" : "6px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    marginBottom: "4px",
                  }}
                />
                <Box
                  sx={{
                    width: index === activeIndex ? "6px" : "12px",
                    height: index === activeIndex ? "6px" : "12px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                  }}
                />
              </Box>
              {/* Image and Name Below the Card */}
              <Avatar
                alt={client.name}
                src={client.image}
                sx={{
                  width: "60px",
                  height: "60px",
                  margin: "10px auto",
                  border: "2px solid white",
                }}
              />
              <Typography variant="h6" sx={{ color: "white" }}>
                {client.name}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ flexGrow: 1, fontWeight: "bold", padding: "3px" }}>
          <Grid2 container spacing={12} mt={10} mb={10}>
            {/* COMPANY Section */}
            <Grid2 item xs={12} md={3}>
              <Typography variant="h4" gutterBottom>
                COMPANY
              </Typography>
              <Typography variant="h6">About</Typography>
              <Typography variant="h6">Life at Gsoft</Typography>
              <Typography variant="h6">Contact us</Typography>
              <Typography variant="h6">Careers</Typography>
            </Grid2>

            {/* SERVICES Section */}
            <Grid2 item xs={12} md={3}>
              <Typography variant="h4" gutterBottom>
                SERVICES
              </Typography>
              <Typography variant="h6">Website Design Services</Typography>
              <Typography variant="h6">Mobile Application Design</Typography>
              <Typography variant="h6">AI/ML Development Services</Typography>
              <Typography variant="h6">Mobile App Development</Typography>
              <Typography variant="h6">Back-End Development</Typography>
            </Grid2>

            {/* SERVICES Section (Duplicate) */}
            <Grid2 item xs={12} md={3}>
              <Typography variant="h4" gutterBottom>
                SERVICES
              </Typography>
              <Typography variant="h6">Web App Development</Typography>
              <Typography variant="h6">UI/UX Design Services</Typography>
              <Typography variant="h6">DevOps Services Company</Typography>
              <Typography variant="h6">Logo Design Company</Typography>
              <Typography variant="h6">Team Augmentation Services</Typography>
            </Grid2>

            {/* TECHNOLOGIES Section */}
            <Grid2 item xs={12} md={3}>
              <Typography variant="h4" gutterBottom>
                Technologies
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap", // Ensures buttons wrap into multiple rows
                  gap: 1, // Adds spacing between buttons
                  justifyContent: "center", // Centers buttons horizontally
                  maxWidth: "30rem",
                }}
              >
                {[
                  "Redis",
                  "Node.js",
                  "Php",
                  "Digital Ocean",
                  "Gradle",
                  "Amazon",
                  "Azure",
                  "Linode",
                  "Rackspace",
                  "Jenkins",
                ].map((text) => (
                  <Button
                    key={text}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontSize: "1rem", // Increase text size
                      textTransform: "none",
                      flex: "1 1 30%", // Adjusts button width and allows wrapping
                      mb: 2, // Adds margin-bottom for spacing between rows
                      color: "white",
                      "&:hover": {
                        // Hover effect for buttons
                        backgroundColor: "primary.main",
                      },
                    }}
                  >
                    {text}
                  </Button>
                ))}
              </Box>
            </Grid2>
          </Grid2>
        </Box>
        <Divider
          orientation="horizontal"
          variant="medium"
          sx={{ borderColor: "primary.main" }}
        />

        <Box
          sx={{
            display: "flex",
            padding: "2rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid2 container spacing={4} sx={{ flexGrow: 1 }}>
            {/* Social Media Icons */}
            {[
              {
                src: "fb.webp",
                link: "https://www.facebook.com/Gsoft.consultng",
              },
              {
                src: "insta.webp",
                link: "https://www.instagram.com/gsoftconsulting/",
              },
              {
                src: "linkedIn.webp",
                link: "https://www.linkedin.com/company/global-software-consulting/",
              },
              {
                src: "twiter.webp",
                link: "https://x.com/i/flow/login?redirect_after_login=%2Fgsoftconsultng",
              },
              {
                src: "be.webp",
                link: "https://www.behance.net/gsoftconsulting",
              },
            ].map((item, index) => (
              <Grid2 item xs={4} sm={2} key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Box
                    component="img"
                    src={item.src}
                    alt={`Icon ${index + 1}`}
                    sx={{
                      width: "70px", // Increase icon size
                      height: "70px", // Increase icon size
                      display: "block",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  />
                </a>
              </Grid2>
            ))}

            {/* UP image placed at the end of the row, aligned to the right */}
            <Grid2
              item
              xs={4}
              sm={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                component="a"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                sx={{
                  display: "block",
                  cursor: "pointer",
                  ml: "60rem",
                }}
              >
                <Box
                  component="img"
                  src="up.webp"
                  alt="Scroll to top"
                  sx={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                  }}
                />
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#03dbfc",
          color: "black",
          padding: "2rem",
          marginBottom: "4px",
          display: "flex",
          flexWrap: "none",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Privacy policy
        </Typography>
        <Typography variant="h6" gutterBottom>
          Terms & conditions
        </Typography>
        <Typography variant="h6" gutterBottom>
          ©All rights reserved 2023 GSC{" "}
        </Typography>
        <Typography variant="h6">
          <Link href="mailto:info@gsoft.com" underline="none" color="inherit">
            info@gsoft.com
          </Link>{" "}
        </Typography>
      </Box>
    </>
  );
}

export default Testimonial;
