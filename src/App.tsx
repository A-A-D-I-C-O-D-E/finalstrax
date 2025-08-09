import React, { useRef, useEffect } from "react";
import "./App.css";
import q from "./assets/q.mp4"; // Background video
import demoImage from "./assets/hero-illustration.7100a376.jpg"; // Image inside black area
import rightImage from "./assets/hero5.svg"; // Hover image
import Header from "./components/Header";
import UnmatchedProductivity from "./components/SpotlightVideo";
import WorkTogether from "./components/HeroContent";
import GitHubSync from "./components/GithubContanier";
import StickyScrollSection from "./components/ScrollingSection";
import HeroSection from "./components/Footer";

const App: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const rightImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        spotlightRef.current.style.background = `radial-gradient(circle 150px at ${x}px ${y}px, transparent 0%, rgba(0,0,0,0.7) 100%)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const showRightImage = () => {
    if (rightImageRef.current) {
      rightImageRef.current.classList.add("hover-visible");
    }
  };

  const hideRightImage = () => {
    if (rightImageRef.current) {
      rightImageRef.current.classList.remove("hover-visible");
    }
  };

  return (
    <>
    <Header/>
    <section className="hero-section" onMouseEnter={showRightImage} onMouseLeave={hideRightImage}>
      {/* Background video */}
      <video className="bg-video" autoPlay muted loop>
        <source src={q} type="video/mp4" />
      </video>
      {/* <div className="mask-layer" ref={spotlightRef}></div> */}

      {/* Content */}
      <div className="hero-content">
        <div className="text-side">
          <h1>Everything App<br />for your teams</h1>
          <p>Huly, an open-source platform, serves as an all-in-one replacement of Linear, Jira, Slack, and Notion.</p>
          <button>SEE IN ACTION →</button>
        </div>
        <div className="image-side hidden md:block" >
          <img ref={rightImageRef} src={rightImage} alt="Right Hover" className="hover-image" />
        </div>
      </div>

      {/* Black area image */}
      <div className="black-box-image">
        <img src={demoImage} alt="Demo" />
      </div>
    </section>
    <UnmatchedProductivity/>
    <WorkTogether/>
    <GitHubSync/>
    <StickyScrollSection/>
      <HeroSection/>
    </>
  );
};

export default App;