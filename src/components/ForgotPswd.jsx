import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const FormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundImage:
    'url("bk.jpg"), linear-gradient(to bottom, #6a1b9a, #4a148c)',
  backgroundSize: "cover, cover",
  backgroundBlendMode: "overlay",
  backgroundPosition: "center",
});

const Form = styled("form")({
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
});

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [showResetFields, setShowResetFields] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (showResetFields) {
      // Handle password reset logic
      if (newPassword === confirmPassword) {
        const storageKey = `user-${email.replace(/[^a-zA-Z0-9]/g, "")}`;
        const storedData = localStorage.getItem(storageKey);

        if (storedData) {
          const userData = JSON.parse(storedData);
          userData.password = newPassword;
          localStorage.setItem(storageKey, JSON.stringify(userData));
          alert("Password successfully updated.");
          setShowResetFields(false);
          setEmail("");
          setNewPassword("");
          setConfirmPassword("");
        } else {
          alert("Email not found in our system.");
        }
      } else {
        alert("Passwords do not match.");
      }
    } else {
      const storageKey = `user-${email.replace(/[^a-zA-Z0-9]/g, "")}`;
      const storedData = localStorage.getItem(storageKey);

      if (storedData) {
        setShowResetFields(true);
      } else {
        alert("Email not found in our system.");
      }
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Typography variant="h4" component="h1" gutterBottom>
          Forgot Password
        </Typography>
        {!showResetFields ? (
          <>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <SubmitButton variant="contained" type="submit">
              Reset Password
            </SubmitButton>
          </>
        ) : (
          <>
            <TextField
              label="New Password"
              type="password"
              variant="outlined"
              fullWidth
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <SubmitButton variant="contained" type="submit">
              Update Password
            </SubmitButton>
          </>
        )}
      </Form>
    </FormContainer>
  );
};

export default ForgotPassword;
