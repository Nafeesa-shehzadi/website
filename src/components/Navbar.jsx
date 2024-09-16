import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Popper,
  Grow,
  Paper,
  Menu,
  MenuItem,
  Typography,
  ClickAwayListener,
  Grid2,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess"; // Import Collapse icon for hover state

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [hovered, setHovered] = useState(false); // State to track hover

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
    setHovered(true); // Set hover state
  };

  const handleMouseLeave = () => {
    setOpen(false);
    setHovered(false); // Reset hover state
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolling ? "black" : "transparent",
        transition: "background-color 0.3s ease",
        boxShadow: scrolling ? 3 : "none",
      }}
    >
      <Toolbar>
        <img src="/logo.webp" alt="My Website Logo" style={{ height: 40 }} />
        <div style={{ flexGrow: 1 }}></div> {/* Spacer */}
        {[
          ...[
            "Company",
            <Button
              key="services-button"
              id="services-button"
              aria-controls={open ? "services-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              color="inherit"
              onMouseEnter={handleMouseEnter} // Open on hover
              onMouseLeave={handleMouseLeave} // Close on leave
              sx={{
                fontSize: "1.5rem",
                mx: 1,
                textTransform: "none",
                position: "relative",
              }}
              endIcon={hovered ? <ExpandLessIcon /> : <ExpandMoreIcon />} // Change icon based on hover
            >
              Services
            </Button>,
            "Portfolio",
            "Blog",
            "Careers",
            "Contact Us",
            "Life at Gsoft",
          ],
        ].map((text) => (
          <Button
            key={text}
            color="inherit"
            sx={{
              fontSize: "1.5rem",
              mx: 1.5,
              textTransform: "none",
            }}
          >
            {text}
          </Button>
        ))}
        <Button
          variant="outlined"
          sx={{
            fontSize: "1.5rem",
            mx: 1.5,
            textTransform: "none",
            color: "white",
            "&:hover": {
              borderColor: "white",
            },
            fontWeight: "bold",
          }}
        >
          Estimate Your Project
        </Button>
      </Toolbar>

      {/* Services Dropdown */}
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="top-start"
        transition
        disablePortal
        onMouseEnter={handleMouseEnter} // Keep dropdown open when hovering over it
        onMouseLeave={handleMouseLeave} // Close dropdown when leaving it
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "left top",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleMouseLeave}>
                <Menu
                  id="services-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleMouseLeave}
                  slotProps={{
                    paper: {
                      elevation: 1,
                      sx: {
                        mt: 5,
                        ml: 30,
                      },
                    },
                  }}
                >
                  <Grid2 container spacing={3} sx={{ padding: "2rem" }}>
                    {/* Development Column */}
                    <Grid2 item xs={4}>
                      <Typography variant="h5">Development</Typography>
                      {[
                        "Back-End Development",
                        "Mobile App Development",
                        "AI/ML Development Services",
                        "Web App Development",
                      ].map((text) => (
                        <MenuItem
                          key={text}
                          onClick={handleMouseLeave}
                          sx={{
                            fontSize: "1.2rem",
                            "&:hover": {
                              color: "primary.main",
                            },
                          }}
                        >
                          {text}
                        </MenuItem>
                      ))}
                    </Grid2>

                    {/* Design Column */}
                    <Grid2 item xs={4}>
                      <Typography variant="h5">Design</Typography>
                      {[
                        "UI/UX Design",
                        "Graphic Design",
                        "Product Design",
                        "Web Design",
                      ].map((text) => (
                        <MenuItem
                          key={text}
                          onClick={handleMouseLeave}
                          sx={{
                            fontSize: "1.2rem",
                            "&:hover": {
                              color: "primary.main",
                            },
                          }}
                        >
                          {text}
                        </MenuItem>
                      ))}
                    </Grid2>

                    {/* Other Services Column */}
                    <Grid2 item xs={4}>
                      <Typography variant="h5">Other Services</Typography>
                      {[
                        "SEO Optimization",
                        "Digital Marketing",
                        "Content Creation",
                        "Consulting Services",
                      ].map((text) => (
                        <MenuItem
                          key={text}
                          onClick={handleMouseLeave}
                          sx={{
                            fontSize: "1.2rem",
                            "&:hover": {
                              color: "primary.main",
                            },
                          }}
                        >
                          {text}
                        </MenuItem>
                      ))}
                    </Grid2>
                    <Grid2 item xs={4}>
                      <Typography variant="h5">How we Work</Typography>
                      {[
                        "Discover",
                        "Planning & Designing",
                        "Development & Testing",
                        "Deploy & Support",
                      ].map((text) => (
                        <MenuItem
                          key={text}
                          onClick={handleMouseLeave}
                          sx={{
                            fontSize: "1.2rem",
                            "&:hover": {
                              color: "primary.main",
                            },
                          }}
                        >
                          {text}
                        </MenuItem>
                      ))}
                    </Grid2>
                  </Grid2>
                </Menu>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </AppBar>
  );
};

export default Navbar;
