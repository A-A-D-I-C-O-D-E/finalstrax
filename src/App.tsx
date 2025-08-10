import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/Footer";
import { Routes } from "react-router";
import { Route } from "react-router";
import Home from "./Pages/Home";
import Services from "./Pages/Services";


const App: React.FC = () => {
 

  return (
    <>
    <Header/>
    <Routes>
<Route path="/" element={<Home/>} />
<Route path="/services" element={<Services />} />
      </Routes>

      <HeroSection/>

    </>
  );
};

export default App;