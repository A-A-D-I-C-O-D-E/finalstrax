import React, { useState } from "react";
import { Star, Github, Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // react-router-dom use karein

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // 👈 Services dropdown state

  return (
    <header className="top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-white text-xl font-bold">
              <span className="bg-white text-black px-2 py-1 rounded mr-1">X</span>
              Stratxcel
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>

            <a
              href="https://www.stratxcel.ai/"
              className="text-white/80 hover:text-white transition-colors flex items-center"
            >
              AI Consultancy
            </a>

                    
          {/* Services Dropdown */}
          <div className="relative group z-50">
            <button
              className="text-white/80 hover:text-white transition-colors flex items-center relative z-50"
            >
              Services
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            <div className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-56 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link
                to="/business"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Business Consulting
              </Link>
              <Link
                to="/digital"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Digital Transformation
              </Link>
              <Link
                to="/Ai"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                AI Automation Suite
              </Link>
            </div>
          </div>


            <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Desktop Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
              <Github className="w-4 h-4" />
              <Star className="w-4 h-4" />
              <span>Star Us</span>
            </button>
            <button className="text-white/80 hover:text-white transition-colors px-3 py-1.5 border border-white/20 rounded hover:border-white/40">
              <a href="https://www.stratxcel.ai/signin">SIGN IN</a>
            </button>
            <button className="bg-white text-black px-3 py-1.5 rounded hover:bg-gray-200 transition-colors font-medium">
              <a href="https://www.stratxcel.ai/signin">SIGN UP</a>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 space-y-4">
          <Link to="/" className="block text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          <a
            href="https://www.stratxcel.ai/"
            className="block text-white/80 hover:text-white transition-colors"
          >
            AI Consultancy
          </a>

          {/* Services Dropdown (Mobile) */}
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left text-white/80 hover:text-white flex items-center justify-between"
            >
              Services
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="mt-2 ml-4 space-y-2">
                <Link
                  to="/services/business-consulting"
                  className="block text-white/80 hover:text-white"
                >
                  Business Consulting
                </Link>
                <Link
                  to="/services/digital-transformation"
                  className="block text-white/80 hover:text-white"
                >
                  Digital Transformation
                </Link>
                <Link
                  to="/services/ai-automation"
                  className="block text-white/80 hover:text-white"
                >
                  AI Automation Suite
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="block text-white/80 hover:text-white transition-colors">
            Contact Us
          </Link>
          <hr className="border-white/10" />
          <div className="space-y-3">
            <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors w-full">
              <Github className="w-4 h-4" />
              <Star className="w-4 h-4" />
              <span>Star Us</span>
            </button>
            <button className="w-full text-white/80 hover:text-white transition-colors px-3 py-1.5 border border-white/20 rounded hover:border-white/40">
              <a href="https://www.stratxcel.ai/signin">SIGN IN</a>
            </button>
            <button className="w-full bg-white text-black px-3 py-1.5 rounded hover:bg-gray-200 transition-colors font-medium">
              <a href="https://www.stratxcel.ai/signin">SIGN UP</a>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
