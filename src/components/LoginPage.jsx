import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid2,
  InputLabel,
  OutlinedInput,
  Typography,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";

// Styled components
const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundImage:
    'url("https://example.com/starry-sky.jpg"), linear-gradient(to bottom, #6a1b9a, #4a148c)',
  backgroundSize: "cover, cover",
  backgroundBlendMode: "overlay",
  backgroundPosition: "center",
});

const FormWrapper = styled("form")({
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: "16px",
  padding: "32px",
  width: "400px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
});

const CustomFormControl = styled(FormControl)({
  marginBottom: "20px",
});

const CustomOutlinedInput = styled(OutlinedInput)({
  width: "100%",
  borderRadius: "20px",
});

const CustomFormHelperText = styled(FormHelperText)({
  textAlign: "right",
  marginTop: "12px",
});

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    const sanitizedEmail = email.replace(/[^a-zA-Z0-9]/g, "");
    const storedData = localStorage.getItem(`user-${sanitizedEmail}`);
    if (storedData) {
      const { password: storedPassword } = JSON.parse(storedData);
      if (password === storedPassword) {
        alert("Succesfully Login");
        navigate("/"); // Navigate to dashboard if credentials match
      } else {
        alert("Invalid password");
      }
    } else {
      alert("Invalid email");
      console.log(storedData);
    }
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <Typography variant="h5" align="center" gutterBottom>
          Hello
          <span className="text-primaryColor"> Welcome </span> Back 👋
        </Typography>
        <Grid2 item xs={12}>
          <CustomFormControl fullWidth variant="outlined">
            <InputLabel htmlFor="username">Username</InputLabel>
            <CustomOutlinedInput
              id="username"
              type="text"
              value={email}
              onChange={handleUsernameChange}
              endAdornment={<PersonIcon />}
            />
          </CustomFormControl>
        </Grid2>
        <Grid2 item xs={12}>
          <CustomFormControl fullWidth variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <CustomOutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              endAdornment={
                <IconButton
                  edge="end"
                  onClick={handleShowPasswordClick}
                  aria-label="toggle password visibility"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
            />
            <CustomFormHelperText>
              <a href="/forgot-password">Forgot Password?</a>
            </CustomFormHelperText>
          </CustomFormControl>
        </Grid2>
        <Grid2 item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
            }
            label="Remember Me"
          />
        </Grid2>
        <Grid2 item xs={12}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Grid2>
        <Grid2 item xs={12}>
          <Typography variant="body2" align="center">
            Don't have an account? <a href="/signup">Register</a>
          </Typography>
        </Grid2>
      </FormWrapper>
    </Container>
  );
};

export default LoginPage;
