import React, { useRef, useEffect } from 'react';
import githubVideo from '../assets/interface-github(2)_a5ea456e.mp4';
import bgv from '../assets/Everything App for your teams (4).mp4';

import iconSync from '../assets/two.svg';
import iconPrivate from '../assets/private.svg';
import iconRepos from '../assets/multiple.svg';
import iconMilestone from '../assets/milestone.svg';
import iconTrack from '../assets/track.svg';
import iconFilter from '../assets/advance.svg';

const features = [
  {
    icon: iconSync,
    title: 'Two-way synchronization',
    desc: 'Sync tasks and issues seamlessly in both directions.',
  },
  {
    icon: iconPrivate,
    title: 'Private tasks',
    desc: 'Keep sensitive tasks private from GitHub visibility.',
  },
  {
    icon: iconRepos,
    title: 'Multiple repositories',
    desc: 'Link and manage across multiple GitHub repositories.',
  },
  {
    icon: iconMilestone,
    title: 'Milestone migration',
    desc: 'Carry over milestones and due dates easily.',
  },
  {
    icon: iconTrack,
    title: 'Track progress',
    desc: 'Visualize issue and task completion across teams.',
  },
  {
    icon: iconFilter,
    title: 'Advanced filtering',
    desc: 'Sort by label, assignee, milestone and more.',
  },
];

const GitHubSync: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    videoRef.current?.play().catch(console.warn);
  }, []);

  return (
    <section className="relative w-full overflow-hidden text-white px-4 py-12 mx-auto bg-[#111]">
      {/* 🔥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full object-cover z-0 py-20 px-3"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgv} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for dark effect */}
      {/* <div className="absolute inset-0 bg-black/80 z-0" /> */}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
          Sync with GitHub.<br />Both ways.
        </h2>

        {/* Subheading */}
        <p className="text-[#b0b0b0] font-medium text-lg sm:text-xl mb-16 max-w-3xl">
          Manage products effortlessly with two-way GitHub synchronization. Automatically sync issues, pull requests, and milestones with Vmake-based GitHub Projects.
        </p>

        {/* GitHub Video with glow effect */}
        <div className="relative mb-20 max-w-6xl mx-auto">
          
          <video
            ref={videoRef}
            className="relative rounded-2xl z-10 py-10 px-5 w-full"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={githubVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center px-4">
               <img
                src={feature.icon}
                alt={feature.title}
                className="w-9 h-9 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#b0b0b0] font-medium text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubSync;
