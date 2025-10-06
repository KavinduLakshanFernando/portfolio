import React, { useState } from 'react';
import { Menu, X, Code, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function PortfolioNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="max-w-8xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                className="flex items-center space-x-2 text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
              >
                <Code className="w-6 h-6" />
                <span>Kavindu Lakshan</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-bold transition-colors duration-300 relative group scroll-smooth"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Demo Content Sections */}
      <div>
        {/* Home Section */}
        <section
      id="home"
      className=" h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center"
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-center px-4 sm:px-18 lg:px-16">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left ml-20" >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
            👋 Welcome To My Profile
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">Kavindu Lakshan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Software Engineer & Full Stack Developer
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            I design and develop scalable web and mobile applications using MERN stack, Spring Boot, React, and React Native. My focus is on Full Stack, Backend, and Mobile App Development, delivering clean, efficient, and user-friendly solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              My Resume
            </a>
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/KavinduLakshanFernando"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-md transform hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kavindu-lakshan-fernando-114829318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-md transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:kavindu009lakshan@gmail.com"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-md transform hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
            
            <a
              href="https://wa.me/94716507009"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300 shadow-md transform hover:scale-110"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
            
          </div>
        </div>

        {/* Right: Photo */}
        <div className="flex-1 flex justify-center mt-12 lg:mt-0">
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>

            {/* Photo Container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
              <div className="absolute inset-2 bg-white rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="../src/assets/IMG-20240125-WA0011.jpg"
                  alt="Kavindu Lakshan"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-full shadow-xl border-4 border-blue-500">
                <p className="text-sm font-bold text-gray-800">Tranee</p>
                <p className="text-xs text-gray-600">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 w-full flex justify-center animate-bounce">
        <a href="#about">
          <ChevronDown className="w-8 h-8 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" />
        </a>
      </div>
    </section>

    

        
      </div>
    </div>
  );
}
