import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
// Styled components
const FormContainer = styled(Box)({
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
  width: "400px",
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  borderRadius: "16px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  alignItems: "center",
});

const SubmitButton = styled(Button)({
  backgroundColor: "#1976d2",
  color: "white",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: "#1565c0",
  },
  width: "100%",
});

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .matches(/^[A-Za-z\s]+$/, "Only letters and spaces are allowed"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters long")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      // Store values directly in localStorage
      const storageKey = `user-${values.email.replace(/[^a-zA-Z0-9]/g, "")}`;
      console.log("Storing values in localStorage:", storageKey);
      localStorage.setItem(storageKey, JSON.stringify(values));
      alert("Signup successful! Data stored in localStorage.");
      navigate("/login");
    },
  });

  return (
    <FormContainer>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <Typography variant="h4" component="h1" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          {...formik.getFieldProps("name")}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          {...formik.getFieldProps("email")}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          {...formik.getFieldProps("password")}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={handleShowPasswordClick}
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          label="Phone Number"
          type="tel"
          placeholder="phone number"
          margin="dense"
          fullWidthvariant="outlined"
          name="phone No"
          fullWidth
        />
        <SubmitButton variant="contained" type="submit">
          Sign Up
        </SubmitButton>
      </FormWrapper>
    </FormContainer>
  );
};

export default Signup;
