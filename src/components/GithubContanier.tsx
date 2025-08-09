import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import githubVideo from '../assets/interface-github(2)_a5ea456e.mp4';
import bgv from '../assets/Everything App for your teams (4).mp4';

import iconSync from '../assets/two.svg';
import iconPrivate from '../assets/private.svg';
import iconRepos from '../assets/multiple.svg';
import iconMilestone from '../assets/milestone.svg';
import iconTrack from '../assets/track.svg';
import iconFilter from '../assets/advance.svg';

const features = [
  { icon: iconSync, title: 'Two-way synchronization', desc: 'Sync tasks and issues seamlessly in both directions.' },
  { icon: iconPrivate, title: 'Private tasks', desc: 'Keep sensitive tasks private from GitHub visibility.' },
  { icon: iconRepos, title: 'Multiple repositories', desc: 'Link and manage across multiple GitHub repositories.' },
  { icon: iconMilestone, title: 'Milestone migration', desc: 'Carry over milestones and due dates easily.' },
  { icon: iconTrack, title: 'Track progress', desc: 'Visualize issue and task completion across teams.' },
  { icon: iconFilter, title: 'Advanced filtering', desc: 'Sort by label, assignee, milestone and more.' },
];

const GitHubSync: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    videoRef.current?.play().catch(console.warn);
  }, []);

  return (
    <section className="relative w-full overflow-hidden text-white px-4 py-12 sm:py-16 bg-[#111]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgv} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-center sm:text-left"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Sync with GitHub.<br />Both ways.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-[#b0b0b0] font-medium text-base sm:text-lg mb-12 sm:mb-16 max-w-3xl text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Manage products effortlessly with two-way GitHub synchronization. Automatically sync issues, pull requests, and milestones with Vmake-based GitHub Projects.
        </motion.p>

        {/* GitHub Video */}
        <motion.div
          className="relative mb-16 sm:mb-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <video
            ref={videoRef}
            className="relative rounded-2xl z-10 w-full shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={githubVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="text-center sm:text-left bg-white/5 p-6 rounded-xl hover:bg-white/10 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-10 h-10 mx-auto sm:mx-0 mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#b0b0b0] text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubSync;
