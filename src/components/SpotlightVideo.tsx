import React from 'react';
import dow from '../assets/download (1).png';
import dow2 from '../assets/download (2).png';
import dow3 from '../assets/download (3).png';
import viddd from '../assets/ghnti.mp4';

const UnmatchedProductivity: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#f2f4f8] to-white text-black font-['Inter'] -mt-80 md:-mt-0">
      <div className="px-6 md:px-8 py-16 max-w-[1200px] mx-auto pb-20 py-20">
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-20">
          Driving Business Growth with AI & IT Solutions
        </h1>
        
        {/* Subheading */}
        <p className="text-xl font-medium text-[#444] max-w-[1000px] mb-12">
          Stratxcel helps businesses transform with cutting-edge AI consultancy and IT services — 
          from automation to digital transformation, we create solutions that scale with your vision.
        </p>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-8 mb-8">
          
          {/* Card 1 */}
          <div className="relative rounded-2xl overflow-hidden h-[360px] bg-black">
            <img src={dow} alt="AI Process Optimization" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-sm bg-gradient-to-b from-transparent to-black/80">
              <strong className="block text-lg font-semibold mb-1">
                AI Process Optimization
              </strong>
              Streamline operations with machine learning models that deliver faster results and reduced costs.
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden h-[360px] bg-black">
            <img src={dow2} alt="IT Infrastructure Planning" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-sm bg-gradient-to-b from-transparent to-black/80">
              <strong className="block text-lg font-semibold mb-1">
                IT Infrastructure Planning
              </strong>
              Build a scalable, secure, and future-ready IT architecture that supports your growing needs.
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8">
          
          {/* Card 3 */}
          <div className="relative rounded-2xl overflow-hidden h-[360px] bg-black">
            <img src={dow3} alt="Data-Driven Strategies" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-sm bg-gradient-to-b from-transparent to-black/80">
              <strong className="block text-lg font-semibold mb-1">
                Data-Driven Strategies
              </strong>
              Unlock business insights using AI-powered analytics to make confident, informed decisions.
            </div>
          </div>

          {/* Card 4 (Video) */}
          <div className="relative rounded-2xl overflow-hidden h-[360px] bg-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={viddd} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-sm">
              <strong className="block text-lg font-semibold mb-1">
                Real-Time Alerts & Automation
              </strong>
              Stay ahead with instant notifications and automated workflows for mission-critical tasks.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UnmatchedProductivity;
