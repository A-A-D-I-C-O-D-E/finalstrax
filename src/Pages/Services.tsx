import React from "react";
import { motion } from "framer-motion";
import dashboardImg from "../assets/hero-illustration.7100a376.jpg";

import bgImage from "../assets/blackbg.png"; // Background image for the section
import ServicePage from "../components/ServicePage";

import ServicesPieInteractive from "../components/Servicescards";

export default function Services() {
  return (
    <>
    <section
      className="min-h-screen text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    > 
      {/* Left Content */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Powering Your <span className="text-orange-500">IT</span> &{" "}
          <span className="text-red-500">AI</span> Future
        </h1>
        <p className="text-gray-300 mb-6">
          We deliver cutting-edge IT solutions and AI consultancy to accelerate
          your business growth.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-orange-500 rounded-lg hover:bg-orange-600 transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-transparent border border-orange-500 rounded-lg hover:bg-orange-500 hover:text-black transition">
            Learn More
          </button>
        </div>
      </motion.div>


        <motion.div
                    className="absolute inset-0 rounded-xl blur-xl opacity-60 bg-gradient-to-r from-blue-500 to-orange-500 -z-10"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.div>

      {/* Right - Mac Window */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >


               <div className="animated-border rounded-2xl shadow-lg">
          <div className="bg-[#1e1e22] rounded-2xl overflow-hidden relative">
            {/* Mac Dots */}
            
            <div className="flex gap-2 p-3">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            
            
            {/* Dashboard Image */}
            <img src={dashboardImg} alt="Dashboard" className="w-full" />
          </div>
        </div>
      </motion.div>
    </section>

<ServicesPieInteractive/>
<ServicePage/>
{/* <Contact/> */}
</>
  );
}
