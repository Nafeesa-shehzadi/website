import { Box, Typography, Card, CardContent, Grid2 } from "@mui/material";
import React from "react";

function Workflow() {
  const steps = [
    {
      NO: "Step 01",
      title: "Discover & Planning",
      desc: "Get your project requirements planned out so you can hit the ground running.",
    },
    {
      NO: "Step 02",
      title: "Estimate",
      desc: "Our team of business analysts, software architects, and developers will get together to define your product or project and estimate the effort required.",
    },
    {
      NO: "Step 03",
      title: "Development & Testing",
      desc: "Bring your design ideas to life with our build team - we'll make sure it works flawlessly.",
    },
    {
      NO: "Step 04",
      title: "Deployment",
      desc: "Get your product ready for takeoff. Your product has been through rigorous testing and is now ready for deployment!",
    },
  ];

  return (
    <Box
      sx={{
        background: "#1e2420",
        color: "#ffffff",
      }}
    >
      <Box
        sx={{
          fontFamily: "Poppins",
          paddingTop: "60px",
          lineHeight: "1.5",
          letterSpacing: "-0.02em",
          paddingLeft: "5rem",
          paddingBottom: "2rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "400",
          }}
        >
          Work Flow
        </Typography>
        <Typography
          sx={{
            fontSize: "60px",
            fontWeight: "600",
          }}
        >
          Our Working Process
        </Typography>
      </Box>
      <Box sx={{ p: 4 }}>
        <Grid2 container spacing={4} justifyContent="center">
          {steps.map((step, index) => (
            <Grid2 item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: 300,
                  background: "#1e2420",
                  color: "#ffffff",
                  maxWidth: 300,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 -4px 8px rgba(0, 0, 0, 0.2)", // Shadow above and below
                  border: "none",
                  "&:hover": {
                    // No card movement on hover
                  },
                }}
              >
                <CardContent
                  sx={{
                    textAlign: "center",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)", // Move text up on hover
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#03dbfc" }}
                  >
                    {step.NO}
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2">{step.desc}</Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
}

export default Workflow;
