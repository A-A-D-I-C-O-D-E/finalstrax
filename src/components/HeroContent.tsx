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
        className="absolute  w-full h-full object-cover "
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Overlay for better text contrast */}
   
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-16 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Work together. <br /> Like in the office.
        </h1>
        <p className="mt-4 text-black/6 max-w-2xl mx-auto text-lg mb-10">
          Create customized virtual office spaces for any department or event
          with high quality audio and video conferencing.
        </p>

        {/* Center video box */}
        <div className=" flex justify-center -mb-4">
          <div className=" rounded-lg overflow-hidden max-w-4xl w-full">
            <video
              // className="w-full h-auto"
              src={centerVideo}
              autoPlay
              muted
              loop
              playsInline
            style={{ width: '80%', marginLeft:'17%', height:'100%', marginTop:'5px', borderRadius: '10px' }}
            
            ></video>
          </div>
        </div>

        {/* Sub description */}
        <p className="mt-6 font-semibold text-lg max-w-3xl mx-auto">
          Collaborating with remote teams is easy in your virtual office
          environment. Enjoy real-time communication within your workspace
          without additional software hassle.
        </p>

        {/* Features */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-200">
          <div>
            <div className="flex justify-center mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-md">

                 <img src={iconCustomize} alt="Invite guests" className="w-10 h-10 mx-auto mb-3" />
              </div>
               
            </div>
            
            <h3 className="font-bold text-black">Customize workspace</h3>
            <p className="mt-2 text-gray-600">
              Create your own offices and meeting rooms to suit your team’s
              needs.
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              <div className="w-10 h-10 bg-blue-400 rounded-md">
                     <img src={iconAudioVideo} alt="Invite guests" className="w-10 h-10 mx-auto mb-3" />
              </div>
           
            </div>
            <h3 className="font-bold text-black">Audio and video calls</h3>
            <p className="mt-2 text-gray-600">
              Collaborate efficiently and seamlessly with high quality virtual
              conferencing.
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              <div className="w-10 h-10 bg-blue-300 rounded-full">
                 <img src={iconInvite} alt="Invite guests" className="w-10 h-10 mx-auto mb-3" />

              </div>
               
            </div>
            <h3 className="font-bold text-black">Invite guests</h3>
            <p className="mt-2 text-gray-600">
              Meet with guests without ever needing to leave your workspace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
