import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Replace these with relevant AI/consultancy videos/images



import aiConsultVideo from '../assets/interface-github(2)_a5ea456e.mp4';
import bgv from '../assets/Everything App for your teams (4).mp4';

import iconStrategy from '../assets/two.svg';
import iconAutomation from '../assets/private.svg';
import iconCloud from '../assets/multiple.svg';
import iconAnalytics from '../assets/milestone.svg';
import iconSecurity from '../assets/track.svg';
import iconSupport from '../assets/advance.svg';
const features = [
  {
    icon: iconStrategy,
    title: 'AI Strategy & Roadmap',
    desc: 'Design a clear AI adoption plan tailored to your business goals for maximum ROI.'
  },
  {
    icon: iconAutomation,
    title: 'Business Process Automation',
    desc: 'Leverage AI to streamline workflows, reduce manual work, and improve efficiency.'
  },
  {
    icon: iconCloud,
    title: 'Cloud-based IT Solutions',
    desc: 'Implement scalable and secure cloud systems that grow with your business.'
  },
  {
    icon: iconAnalytics,
    title: 'Data Analytics & Insights',
    desc: 'Turn raw data into actionable insights for smarter decision-making.'
  },
  {
    icon: iconSecurity,
    title: 'AI-driven Cybersecurity',
    desc: 'Protect your digital assets with advanced AI-powered security systems.'
  },
  {
    icon: iconSupport,
    title: 'Continuous Growth Support',
    desc: 'Receive ongoing consultancy and optimization for long-term success.'
  },
];

const AIConsultancy: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    videoRef.current?.play().catch(console.warn);
  }, []);

  return (
    <section className="relative w-full overflow-hidden text-white px-4 py-12 sm:py-16 bg-[#111]">
      {/* Background Video */}
      <video
        className="absolute top-60  h-auto left-0 w-full object-fit z-0 bg-center bg-cover p:0 md:p-20"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgv} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
          AI Consultancy.<br /> Your Growth Partner.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-[#b0b0b0] font-medium text-base sm:text-lg mb-12 sm:mb-16 max-w-3xl text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Startxel’s AI consultancy team helps you harness the power of artificial intelligence, automation, and modern IT solutions to drive measurable business growth.
        </motion.p>

        {/* AI Consultancy Video */}
        <motion.div
          className="relative mb-5 sm:mb-20 md:max-w-5xl max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <video
            ref={videoRef}
            className="relative rounded-4xl z-10 -top-6 md:top-40 w-full p-10  md:p-20"
            
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={aiConsultVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 p-0 md:p-20">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="text-center sm:text-left bg-white/5 p-6 rounded-xl hover:bg-white/10 transition border border-slate-700/30 shadow-lg glow-border"
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

export default AIConsultancy;
