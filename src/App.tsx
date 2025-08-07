import React, { useEffect, useRef } from 'react';
import './App.css';
import q from './assets/q.mp4'; // Hero background video
import hov from './assets/hero-illustration.7100a376.jpg'; // Demo image
import hoverImage from './assets/download (2).png'; // Dummy image
import UnmatchedProductivity from './components/SpotlightVideo';
import WorkTogether from './components/HeroContent';
import Header from './components/Header';
import GitHubSync from './components/GithubContanier';
import StickyScrollSection from './components/ScrollingSection';
import HeroSection from './components/Footer';

const App: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const leftImageRef = useRef<HTMLImageElement | null>(null);
  const rightImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(circle 150px at ${x}px ${y}px, transparent 0%, rgba(0, 0, 0, 0.7) 100%)`;
      }

      if (leftImageRef.current && rightImageRef.current) {
        leftImageRef.current.classList.add('hover-visible');
        rightImageRef.current.classList.add('hover-visible');
      }
    };

    const handleMouseLeave = () => {
      leftImageRef.current?.classList.remove('hover-visible');
      rightImageRef.current?.classList.remove('hover-visible');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
    <Header/>
      {/* HERO SECTION */}
      <div className="spotlight-container">
        <div className="bg-image" />

        <div className="video-mask-container">
          <video className="bg-video" autoPlay muted loop>
            <source src={q} type="video/mp4" />
          </video>
          <div className="mask-layer" ref={spotlightRef}></div>
        </div>

        <div className="overlay">
          <div className="content" style={{marginTop:'-24%'}} >
            <h1 style={{color:'white'}}>Everything App<br />for your teams</h1>
            <p>Huly, an open-source platform, serves as an all-in-one replacement of Linear, Jira, Slack, and Notion.</p>
            <button>SEE IN ACTION →</button>
          </div>
        </div>

        {/* Hover Images */}
        {/* <img ref={leftImageRef} className="hover-image-left" src={hoverImage} alt="Left Hover" /> */}
        <img ref={rightImageRef} className="hover-image-right" src={hoverImage} alt="Right Hover" />
      </div>

      {/* DEMO SECTION */}
     {/* DEMO SECTION */}
<div style={{ 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  background: 'none', 
  // padding: '2rem 0', 
   marginTop:'-42%',
  marginLeft:'-12%'
  
}}>
  <img 
    src={hov} 
    alt="Demo" 
    style={{ 
      width: '53%', 
      zIndex: 5 ,
     

    }} 
  />
</div>

<UnmatchedProductivity/>
<WorkTogether/>
<GitHubSync/>
<StickyScrollSection/>
<HeroSection/>

    </>
  );
};

export default App;
