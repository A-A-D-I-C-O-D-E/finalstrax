import React, { useEffect, useRef } from 'react';

import bgVideo from '../assets/waves-vmake.mp4';
import centerVideo from '../assets/call.mp4';
import iconCustomize from '../assets/customize.03200dd0.png';
import iconAudioVideo from '../assets/video.e4ea1f4b.png';
import iconInvite from '../assets/invite.043fb941.png';

const WorkTogether: React.FC = () => {
  const backgroundVideoRef = useRef<HTMLVideoElement | null>(null);
  const centerVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    backgroundVideoRef.current?.play().catch(console.warn);
    centerVideoRef.current?.play().catch(console.warn);
  }, []);

  return (
    <section className="relative w-full h-auto text-black bg-black/10 overflow-hidden item-center">
      {/* Background video */}
      <video
        className="absolute w-full h-full object-cover bg-cover bg-center "
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        ref={backgroundVideoRef}
      ></video>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-16 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          AI Consultancy. <br /> IT Solutions. Business Growth.
        </h1>
        <p className="mt-4 text-black/80 max-w-2xl mx-auto text-lg mb-10">
          Startxel helps you harness AI and digital solutions to solve complex
          business challenges, optimize operations, and accelerate growth.
        </p>

        {/* Center video box */}
        <div className="flex justify-center -mb-4">
          <div className="rounded-lg overflow-hidden max-w-4xl w-full ">
            <video
              src={centerVideo}
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '80%',
                marginLeft: '17%',
                height: '100%',
                marginTop: '20px',
                borderRadius: '10px'
              }}
              ref={centerVideoRef}
            ></video>
          </div>
        </div>

        {/* Sub description */}
        <p className="mt-6 font-semibold text-lg max-w-3xl mx-auto">
          Our experts work closely with you to design and implement tailored
          AI-driven solutions that improve efficiency, reduce costs, and open
          new opportunities for growth.
        </p>

        {/* Features */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-200">
          <div>
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-blue-500 rounded-md flex items-center justify-center">
                <img
                  src={iconCustomize}
                  alt="AI Strategy"
                  className="w-10 h-10"
                />
              </div>
            </div>
            <h3 className="font-bold text-black">AI Strategy & Roadmap</h3>
            <p className="mt-2 text-gray-600">
              We develop a clear AI adoption plan to align with your business
              goals, ensuring maximum ROI and sustainable impact.
            </p>
          </div>

          <div>
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-blue-400 rounded-md flex items-center justify-center">
                <img
                  src={iconAudioVideo}
                  alt="IT Solutions"
                  className="w-10 h-10"
                />
              </div>
            </div>
            <h3 className="font-bold text-black">Custom IT Solutions</h3>
            <p className="mt-2 text-gray-600">
              From automation to cloud systems, we design and implement
              technology that streamlines workflows and drives innovation.
            </p>
          </div>

          <div>
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center">
                <img
                  src={iconInvite}
                  alt="Business Growth"
                  className="w-10 h-10"
                />
              </div>
            </div>
            <h3 className="font-bold text-black">Business Growth Support</h3>
            <p className="mt-2 text-gray-600">
              We provide continuous guidance, performance tracking, and
              analytics to help your business scale faster and smarter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
