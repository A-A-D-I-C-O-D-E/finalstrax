import React from 'react';
import { Star, Github } from 'lucide-react';

const Header = () => {
  return (
    <header className="top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-white text-xl font-bold">
              <span className="bg-white text-black px-2 py-1 rounded mr-1">X</span>
              Stratxcel           </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Home
            </a>
            <div className="relative group">
              <a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                AI Consultancy
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Contact Us
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
              <Github className="w-4 h-4" />
              <Star className="w-4 h-4" />
              <span>Star Us</span>
            </button>
            <button className="text-white/80 hover:text-white transition-colors px-3 py-1.5 border border-white/20 rounded hover:border-white/40">
              SIGN IN
            </button>
            <button className="bg-white text-black px-3 py-1.5 rounded hover:bg-gray-200 transition-colors font-medium">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;