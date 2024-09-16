import React, { useState, useRef, useEffect } from "react";
import { Typography, Button, Box, Grid2, CardMedia } from "@mui/material";

const Technologies = () => {
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleClick = (index) => {
    setActive(index);
  };

  // Define images for each technology
  const images = [
    [
      { src: "Angular.webp", name: "Angular" },
      { src: "React.webp", name: "React" },
      { src: "html5.webp", name: "HTML5" },
      { src: "typescript.webp", name: "Typescript" },
    ],
    [
      { src: "flutter.webp", name: "Flutter" },
      { src: "ionic.webp", name: "Ionic" },
      { src: "kotlin.webp", name: "Kotlin" },
      { src: "swift.webp", name: "Swift" },
      { src: "android.webp", name: "Android" },
      { src: "ios.webp", name: "Ios" },
    ],
    [
      { src: "magento.webp", name: "Magento" },
      { src: "wordpress.webp", name: "Wordpress" },
      { src: "shopify.webp", name: "Shopify" },
    ],
    [
      { src: "php.webp", name: "PHP" },
      { src: "node.webp", name: "Node js" },
      { src: "java.webp", name: "Java" },
    ],
    [
      { src: "digital.webp", name: "Digital ocean" },
      { src: "gradle.webp", name: "Gradle" },
      { src: "amazon.webp", name: "Amazon" },
      { src: "azure.webp", name: "Azure" },
      { src: "linode.webp", name: "Linode" },
      {
        src: "rackspace.webp",
        name: "Rackspace",
      },
      { src: "jenkins.webp", name: "jenkins" },
      { src: "appium.webp", name: "Appium" },
      {
        src: "selenium.webp",
        name: "Selenium",
      },
    ],
    [
      {
        src: "dyna.webp",
        name: "Dynamodb",
      },
      {
        src: "redi.webp",
        name: "Redis",
      },
      {
        src: "mongo.webp",
        name: "MongoDB",
      },
      {
        src: "fire.webp",
        name: "Firebase",
      },
      {
        src: "mssql.webp",
        name: "Mssql",
      },
      {
        src: "mysql.webp",
        name: "MySql",
      },
    ],
  ];
  useEffect(() => {
    const currentRef = sectionRef.current; // Copy the ref value to a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  return (
    <Box
      ref={sectionRef}
      sx={{
        textAlign: "center",
        mt: 5,
        transform: isVisible ? "translateX(0)" : "translateX(-200px)", // Move text from left initially
        transition: "transform 1.5s ease-in-out, opacity 1.5s ease-out",
      }}
    >
      <Typography
        sx={{
          fontSize: 40,
          fontWeight: "bold",
          mb: 5,
        }}
      >
        Technologies We Work With
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {[
          "Frontend",
          "Mobile",
          "CMS",
          "Back End",
          "Infra & Devops",
          "Database",
        ].map((text, index) => (
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
      <Grid2
        container
        spacing={2}
        sx={{
          mt: 4,
          justifyContent: "center",
          paddingLeft: "10rem",
          paddingRight: "10rem",
        }}
      >
        {(images[active] || []).map((item, idx) => (
          <Grid2 item xs={12} sm={6} md={4} key={idx}>
            <Box sx={{ textAlign: "center", padding: "3rem" }}>
              <CardMedia
                component="img"
                image={item.src}
                alt={item.name}
                sx={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                  margin: "0 auto",
                }}
              />
              <Typography sx={{ mt: 1, fontWeight: "bold" }}>
                {item.name}
              </Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Technologies;
