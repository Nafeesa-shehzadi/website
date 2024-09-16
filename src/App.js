import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Workflow from "./components/Workflow";
import Testimonal from "./components/Testimonal";
import WorkPortfolio from "./components/WorkPortfolio";
import App from "./";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Workflow />
      <WorkPortfolio />
      <Testimonal />
    </>
  );
}
export default App;
