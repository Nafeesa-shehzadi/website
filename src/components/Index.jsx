import Hero from "./Hero";
import Navbar from "./Navbar";
import Services from "./Services";
import About from "./About";
import Technologies from "./Technologies";
import WorkPortfolio from "./WorkPortfolio";
import Workflow from "./Workflow";
import Testimonal from "./Testimonal";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPswd";
import ProjectEstimation from "./ProjectEstimation";
import Footer from "./Footer";
function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/estimate-your-project" element={<ProjectEstimation />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Services />
              <Technologies />
              <Workflow />
              <WorkPortfolio />
              <Testimonal />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default Index;
