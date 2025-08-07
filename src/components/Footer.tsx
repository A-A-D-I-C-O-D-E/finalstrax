// components/HeroSection.tsx

import React from 'react';
import foo from '../assets/footer.jpg'; // Replace with actual video or image asset

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-1 md:px-20 py-16"
      style={{
        backgroundImage: `url(${foo})`, // Use the imported image or video
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Left Video or Visual */}
      <div className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-10 md:-ml-5">
        <div className="w-80 h-80 rounded-full shadow-2xl">
          <video
            src='../../u-vmake.mp4' // Replace with actual video source
            autoPlay
            muted
            loop
             playsInline
            className="w-full h-full object-cover rounded-full  "
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Join the <br className="hidden md:inline" /> <span className="text-gray-300">Movement</span>
        </h1>
        <p className="text-gray-400 max-w-lg">
          Unlock the future of productivity. Remember, this journey is just getting started.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
          {/* Glowing Button */}
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-black font-semibold shadow-lg hover:scale-105 transition-all duration-200">
            SEE IN ACTION
          </button>

          {/* Slack-like Button */}
          <button className="px-6 py-3 rounded-full bg-black border border-gray-600 hover:border-white text-white flex items-center gap-2 hover:bg-gray-900 transition-all duration-200">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png"
              alt="Slack"
              className="w-5 h-5"
            />
            JOIN OUR SLACK
          </button>
        </div>
      </div>
    </section>
  );
}
