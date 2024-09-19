import { Box, Typography, Button, Grid2, Divider, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

function Footer() {
  const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: "black",
    color: "white",
    paddingBottom: "1rem",
  }));
  const Dividerbox = styled(Divider)(() => ({
    borderColor: "#03dbfc",
  }));

  const StyledFooterBox = styled(Box)(({ theme }) => ({
    background: "#03dbfc",
    color: "black",
    padding: "2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }));

  const StyledSocialBox = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: "2rem",
    justifyContent: "space-between",
    alignItems: "center",
  }));
  const StyledSocialIcon = styled(Box)(({ theme }) => ({
    width: "70px",
    height: "70px",
    display: "block",
    borderRadius: "50%",
    cursor: "pointer",
  }));
  const StyledTechBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(1),
    justifyContent: "center",
    maxWidth: "30rem",
  }));

  const StyledTechButton = styled(Button)(({ theme }) => ({
    fontSize: "1rem",
    textTransform: "none",
    flex: "1 1 30%",
    marginBottom: theme.spacing(2),
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  }));
  return (
    <>
      <StyledBox>
        <Box>
          <Grid2 container spacing={12} mt={10} mb={10}>
            <Grid2 item xs={12} md={3}>
              <Typography variant="h4" gutterBottom>
                COMPANY
              </Typography>
              <Typography variant="h6">About</Typography>
              <Typography variant="h6">Life at Gsoft</Typography>
              <Typography variant="h6">Contact us</Typography>
              <Typography variant="h6">Careers</Typography>
            </Grid2>
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
            <Grid2 item xs={12} md={3}>
              <Typography variant="h4" gutterBottom>
                Technologies
              </Typography>
              <StyledTechBox>
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
                  <StyledTechButton key={text} size="small" variant="outlined">
                    {text}
                  </StyledTechButton>
                ))}
              </StyledTechBox>
            </Grid2>
          </Grid2>
        </Box>
        <Dividerbox orientation="horizontal" variant="medium" />
        <StyledSocialBox>
          <Grid2
            container
            spacing={4}
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
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
                  <StyledSocialIcon
                    component="img"
                    src={item.src}
                    alt={`Icon ${index + 1}`}
                  />
                </a>
              </Grid2>
            ))}
            <Grid2 item xs={4} sm={2} sx={{ display: "flex", ml: "60rem" }}>
              <Box
                component="a"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <StyledSocialIcon
                  component="img"
                  src="up.webp"
                  alt="Scroll to top"
                />
              </Box>
            </Grid2>
          </Grid2>
        </StyledSocialBox>
      </StyledBox>
      <StyledFooterBox>
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
      </StyledFooterBox>
    </>
  );
}

export default Footer;
