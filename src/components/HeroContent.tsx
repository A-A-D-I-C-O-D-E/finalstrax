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
    <section className="relative bg-[#f8f8f8] overflow-hidden text-black font-['Inter'] w-full">
      {/* Background Video */}
      <video
        ref={backgroundVideoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-bold leading-tight mb-6">
          Work together.<br />Like in the office.
        </h1>

        {/* Subtext */}
        <p className="text-lg text-[#444] font-semibold max-w-[700px] mb-10">
          Create customized virtual office spaces for any department or event with high quality audio and video conferencing.
        </p>

        {/* Center Video (call) */}
        <div className="relative left-20 top-3 w-full max-w-5xl rounded-[20px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.25)] mb-20 mt-7">
          <video
            ref={centerVideoRef}
            className="w-full h-auto"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={centerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Description Below Video */}
        <p className="text-base top-5 text-2xl font-bold max-w-[800px] mb-20">
          Collaborating with remote teams is easy in your virtual office environment. Enjoy real-time communication within your workspace without additional software hassle.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-12 w-full max-w-5xl">
          {/* Feature 1 */}
          <div className="w-[260px] text-center">
            <img src={iconCustomize} alt="Customize workspace" className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2">Customize workspace</h3>
            <p className="text-[#444] font-medium">
              Create your own offices and meeting rooms to suit your team’s needs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="w-[260px] text-center">
            <img src={iconAudioVideo} alt="Audio and video calls" className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2">Audio and video calls</h3>
            <p className="text-[#444] font-medium">
              Collaborate efficiently and seamlessly with high quality virtual conferencing.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="w-[260px] text-center">
            <img src={iconInvite} alt="Invite guests" className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2">Invite guests</h3>
            <p className="text-[#444] font-medium">
              Meet with guests without ever needing to leave your workspace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
