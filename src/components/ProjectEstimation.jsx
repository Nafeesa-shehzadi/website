import React from "react";
import {
  Box,
  TextField,
  Typography,
  Grid2,
  MenuItem,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object().shape({
  Name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  ProjectType: yup.string().required("this field is required"),
  companyName: yup.string().required("this field is required"),
  Status: yup.string().required("this field is required"),
  Priority: yup.string().required("this field is required"),
  Region: yup.string().required("this field is required"),
  Description: yup.string().required("this field is required"),
});

const ContactFormContainer = styled(Box)({
  maxWidth: "lg", // Set a maxWidth for the container
  padding: "100px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#f5f5f5",
  minHeight: "100vh",
  color: "black",
});
const TypographyBox = styled(Typography)({
  margin: 0,
  fontSize: "48px",
  fontWeight: 600,
  fontStyle: "normal",
  fontStretch: "normal",
  lineHeight: "1.25",
  letterSpacing: "-0.2px",
  fontFamily: "serif",
  color: "#16B1E1",
});

const ContactForm = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "800px",
});

const SubmitButton = styled(Button)({
  marginTop: "20px",
});

const ProjectEstimation = () => {
  const [openConfirmDialog, setOpenConfirmDialog] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const onSubmit = (data) => {
    console.log(data);
    setOpenConfirmDialog(true);
  };
  const handleConfirmSubmit = () => {
    // Submit the form data here...
    console.log("Form submitted!");
    alert("Form submitted successfully!");
    setOpenConfirmDialog(false);
  };

  const handleCancelSubmit = () => {
    setOpenConfirmDialog(false);
  };

  return (
    <>
      <Navbar forceBlackBackground={true} />
      <ContactFormContainer>
        <TypographyBox variant="h2" gutterBottom>
          Estimation Your Project
        </TypographyBox>
        <Typography variant="h5" gutterBottom>
          Fill in the Below Form to Receive a Detailed Estimation
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          You're just one step away to get a quick and detail estimate from our
          team
        </Typography>
        <ContactForm
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid2 container spacing={2}>
            <Grid2 size={6}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
                placeholder="Enter your name"
                error={!!errors.Name}
                helperText={errors.Name?.message}
                {...register("Name")}
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                required
                type="email"
                placeholder="Enter your email"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register("email")}
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                type="tel"
                placeholder="Enter your phone number"
                margin="dense"
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                label="Company Name"
                variant="outlined"
                fullWidth
                required
                placeholder="Enter your company name"
                margin="dense"
                error={!!errors.companyName}
                helperText={errors.companyName?.message}
                {...register("companyName")}
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                label="Project Type"
                variant="outlined"
                fullWidth
                required
                select
                placeholder="Enter project type"
                margin="dense"
                error={!!errors.ProjectType}
                helperText={errors.ProjectType?.message}
                {...register("ProjectType")} // Ensure correct case for field name
              >
                <MenuItem value="High">Frontend</MenuItem>
                <MenuItem value="Medium">Backend</MenuItem>
                <MenuItem value="Low">Devops</MenuItem>
              </TextField>
            </Grid2>
            <Grid2 size={6}>
              <TextField
                label="Priority"
                variant="outlined"
                fullWidth
                required
                select
                placeholder="Select priority"
                margin="dense"
                error={!!errors.Priority}
                helperText={errors.Priority?.message}
                {...register("Priority")}
              >
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </TextField>
            </Grid2>
            <Grid2 size={6}>
              <TextField
                label="Project Status"
                variant="outlined"
                fullWidth
                required
                select
                placeholder="Select status"
                margin="dense"
                error={!!errors.Status}
                helperText={errors.Status?.message}
                {...register("Status")}
              >
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="On Hold">On Hold</MenuItem>
              </TextField>
            </Grid2>
            <Grid2 size={6}>
              <TextField
                label="Region"
                variant="outlined"
                fullWidth
                required
                select
                placeholder="Select your region"
                margin="dense"
                error={!!errors.Region}
                helperText={errors.Region?.message}
                {...register("Region")}
              >
                <MenuItem value="North America">North America</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
                <MenuItem value="Asia">Asia</MenuItem>
                <MenuItem value="South America">South America</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
              </TextField>
            </Grid2>
            <Grid2 size={12}>
              <TextField
                variant="outlined"
                fullWidth
                type="file"
                placeholder="choose file"
                margin="dense"
              />
            </Grid2>
            <Grid2 size={12}>
              <TextField
                label="Project Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
                placeholder="Enter project description"
                margin="dense"
                {...register("Description")}
                error={!!errors.Description}
                helperText={errors.Description?.message}
              />
            </Grid2>
          </Grid2>
          <SubmitButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isValid} // Disable button if form is invalid
          >
            Get Estimate
          </SubmitButton>
        </ContactForm>
        <Dialog open={openConfirmDialog} onClose={handleCancelSubmit}>
          <DialogTitle>Confirm Submission</DialogTitle>
          <DialogContent>Are you sure you want to submit?</DialogContent>
          <DialogActions>
            <Button onClick={handleCancelSubmit}>No</Button>
            <Button onClick={handleConfirmSubmit}>Yes</Button>
          </DialogActions>
        </Dialog>
      </ContactFormContainer>
      <Footer />
    </>
  );
};
export default ProjectEstimation;
