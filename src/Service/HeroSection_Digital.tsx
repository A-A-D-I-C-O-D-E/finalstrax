import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import img1 from '../assets/huly-logo.svg';
import { Link } from "react-router-dom";

const HeroSection_Digital = () => {
  return (
    <section className=" flex items-center justify-center  py-32 px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center ml-[200px]">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Digital Transformation
          </h1>
          <p className="text-lg text-gray-600 mb-8">
        Smart digital setups for modern businesses — from websites to social funnels.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
            >
              Pay Now<ArrowRight className="w-5 h-5" />
            </a>

            <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Back to Stratxcel.in
              </Link>
          </div>
        </div>

        {/* Right Logo / Shape */}
      <div className="flex justify-center">
        <div className="w-[800px] h-[800px] md:w-80 md:h-80  rounded-[32%]  relative flex items-center justify-center">
          <img 
            src={img1} 
            alt="Logo" 
            className="w-[800px] h-[800px] object-contain" 
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection_Digital;
