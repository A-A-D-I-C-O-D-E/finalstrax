import React from 'react';
import dow from '../assets/download (1).png' ;
import dow2 from '../assets/download (2).png' ;
import dow3 from '../assets/download (3).png' ;
import viddd from '../assets/ghnti.mp4'
const UnmatchedProductivity: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#f2f4f8] to-white text-black font-['Inter'] mt-20">
      <div className="px-6 md:px-8 py-16 max-w-[1200px] mx-auto pb-20 py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6  mt-20">Unmatched productivity</h1>
        <p className="text-xl fond-bold text-[#444] max-w-[1000px] mb-12">
          Stractxel is a process, project, time, and knowledge management platform that provides
          amazing collaboration opportunities for developers and product teams alike.
        </p>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-8 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-[360px] bg-black">
            <img src={dow} alt="Keyboard shortcuts" className="w-full h-full object-cover" />
            {/* <video autoPlay muted loop src="video1.mp4" className="w-full h-full object-cover"></video> */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-sm bg-gradient-to-b from-transparent to-black/80">
              <strong className="block text-lg font-semibold mb-1">Keyboard shortcuts.</strong>
              Work efficiently with instant access to common actions.
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-[360px] bg-black">
            <img src={dow2} alt="Team Planner" className="w-full h-full object-cover" />
            {/* <video autoPlay muted loop src="video2.mp4" className="w-full h-full object-cover"></video> */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-sm bg-gradient-to-b from-transparent to-black/80">
              <strong className="block text-lg  font-semibold mb-1">Team Planner.</strong>
              Keep track of the bigger picture by viewing all individual tasks in one centralized team calendar.
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8">
          <div className="relative rounded-2xl overflow-hidden h-[360px] bg-black">
            <img src={dow3} alt="Time-blocking" className="w-full h-full object-cover" />
            {/* <video autoPlay muted loop src="video3.mp4" className="w-full h-full object-cover"></video> */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-sm bg-gradient-to-b from-transparent to-black/80">
              <strong className="block text-lg  font-semibold mb-1">Time-blocking.</strong>
              Transform daily tasks into structured time blocks for focused productivity.
            </div>
          </div>

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
  <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-sm ">
    <strong className="block text-lg  font-semibold mb-1">Notifications.</strong>
    Keep up to date with any changes by receiving instant notifications.
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default UnmatchedProductivity;
