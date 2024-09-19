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
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { styled } from "@mui/material/styles";

// Styled components
const StyledAppBar = styled(AppBar)(
  ({ theme, scrolling, forceBlackBackground }) => ({
    backgroundColor: forceBlackBackground
      ? "black"
      : scrolling
      ? "black"
      : "transparent",
    transition: "background-color 0.3s ease",
    boxShadow: scrolling ? theme.shadows[3] : "none",
    ...(scrolling ? { className: "scrolled" } : {}),
  })
);
const StyledImg = styled("img")(({ theme }) => ({
  height: 40,
}));

const StyledDiv = styled("div")(({ theme }) => ({
  flexGrow: 1,
}));

const StyledButton = styled(Button)(({ theme, hovered }) => ({
  fontSize: "1.5rem",
  margin: theme.spacing(1),
  textTransform: "none",
  position: "relative",
  "&:hover": {
    color: hovered ? theme.palette.primary.main : "inherit",
  },
}));

const StyledOutlinedButton = styled(StyledButton)(({ theme }) => ({
  color: "white",
  borderColor: "white",
  fontWeight: "bold",
  "&:hover": {
    borderColor: "white",
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: "1.2rem",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const StyledPopper = styled(Popper)(({ theme }) => ({
  zIndex: theme.zIndex.tooltip,
}));

const StyledGridContainer = styled(Grid2)(({ theme }) => ({
  padding: theme.spacing(3),
  spacing: theme.spacing(5),
}));

const Navbar = ({ handleNavigate, forceBlackBackground }) => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [hovered, setHovered] = useState(false);

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
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
    setHovered(false);
  };

  return (
    <StyledAppBar
      position="fixed"
      scrolling={scrolling}
      forceBlackBackground={forceBlackBackground}
    >
      <Toolbar>
        <StyledImg src="/logo.webp" alt="My Website Logo" />
        <StyledDiv />
        {[
          <StyledButton href="/" color="inherit">
            Company
          </StyledButton>,
          <StyledButton
            key="services-button"
            id="services-button"
            aria-controls={open ? "services-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            color="inherit"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            hovered={hovered}
            endIcon={hovered ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          >
            Services
          </StyledButton>,
          "Portfolio",
          "Blog",
          "Careers",
          "Contact Us",
          "Life at Gsoft",
        ].map((text) => (
          <StyledButton key={text} color="inherit">
            {text}
          </StyledButton>
        ))}
        <StyledOutlinedButton variant="outlined" onClick={handleNavigate}>
          Estimate Your Project
        </StyledOutlinedButton>
      </Toolbar>

      <StyledPopper
        open={open}
        anchorEl={anchorEl}
        placement="top-start"
        transition
        disablePortal
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: "left top" }}>
            <Paper>
              <ClickAwayListener onClickAway={handleMouseLeave}>
                <Menu
                  id="services-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleMouseLeave}
                >
                  <StyledGridContainer container spacing={10}>
                    {/* Development Column */}
                    <Grid2 item xs={4}>
                      <Typography variant="h5">Development</Typography>
                      {[
                        "Back-End Development",
                        "Mobile App Development",
                        "AI/ML Development Services",
                        "Web App Development",
                      ].map((text) => (
                        <StyledMenuItem key={text} onClick={handleMouseLeave}>
                          {text}
                        </StyledMenuItem>
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
                        <StyledMenuItem key={text} onClick={handleMouseLeave}>
                          {text}
                        </StyledMenuItem>
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
                        <StyledMenuItem key={text} onClick={handleMouseLeave}>
                          {text}
                        </StyledMenuItem>
                      ))}
                    </Grid2>

                    {/* How We Work Column */}
                    <Grid2 item xs={4}>
                      <Typography variant="h5">How we Work</Typography>
                      {[
                        "Discover",
                        "Planning & Designing",
                        "Development & Testing",
                        "Deploy & Support",
                      ].map((text) => (
                        <StyledMenuItem key={text} onClick={handleMouseLeave}>
                          {text}
                        </StyledMenuItem>
                      ))}
                    </Grid2>
                  </StyledGridContainer>
                </Menu>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </StyledPopper>
    </StyledAppBar>
  );
};

export default Navbar;
