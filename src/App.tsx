import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/Footer";
import { Routes } from "react-router";
import { Route } from "react-router";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Business from "./Service/Business";
import Digital from "./Service/Digital";
import Ai_automation from "./Service/Ai-automation";
import Form from "./components/ContactUs/Form";


const App: React.FC = () => {
 

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/business" element={<Business />} />
       <Route path="/digital" element={<Digital />} />
       <Route path="/Ai" element={<Ai_automation />} />
       <Route path="/contact" element={<Form />} />
  
      </Routes>

      <HeroSection/>

    </>
  );
};

export default App;