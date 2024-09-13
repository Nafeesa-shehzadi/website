import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button } from "@mui/material";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 100); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolling ? "black" : "transparent", // Change color based on scroll
        transition: "background-color 0.3s ease", // Smooth transition effect
        boxShadow: scrolling ? 3 : "none", // Add shadow when scrolled
      }}
    >
      <Toolbar>
        <img
          src="/logo.webp" // Path to your logo image
          alt="My Website Logo"
          style={{ height: 40 }} // Adjust height as needed
        />
        <div style={{ flexGrow: 1 }}></div> {/* Spacer */}
        {[
          "Company",
          "Services",
          "Portfolio",
          "Blog",
          "Careers",
          "Contact Us",
          "Life at Gsoft",
        ].map((text) => (
          <Button
            key={text}
            color="inherit"
            sx={{
              fontSize: "1.5rem", // Increase text size
              mx: 1.5, // Equal horizontal spacing between items
              textTransform: "none",
            }}
          >
            {text}
          </Button>
        ))}
        <Button
          variant="outlined"
          sx={{
            fontSize: "1.5rem", // Increase text size
            mx: 1.5, // Equal horizontal spacing between items
            textTransform: "none",
            color: "white", // Text color
            "&:hover": {
              borderColor: "white", // Outline color
            },

            fontWeight: "bold",
          }}
        >
          Estimate Your Project
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
