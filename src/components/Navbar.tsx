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
    <div className="bg-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-blue-500">
        <div className="max-w-8xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                className="flex items-center space-x-2 text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
              >
                <Code className="w-6 h-6" />
                <span>Kavindu Lakshan</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 ">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 text-xl font-stretch-ultra-expanded transition-colors duration-300 relative group scroll-smooth"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-blue-400 focus:outline-none focus:text-blue-400"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 border-t border-blue-500">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-900 rounded-md text-base font-medium transition-colors duration-300"
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
          className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center pt-16"
        >
          <div className="w-full flex flex-col lg:flex-row items-center justify-center px-4 sm:px-18 lg:px-16">
            {/* Left: Text Content */}
            <div className="flex-1 text-center lg:text-left lg:ml-20">
              <div className="inline-block px-4 py-2 bg-blue-900 text-white rounded-full text-sm font-semibold border border-blue-500">
                👋 Welcome To My Profile
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 mt-6">
                Hi, I'm <span className="text-blue-400">Kavindu Lakshan</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                Software Engineer & Full Stack Developer
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
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
                  className="bg-gray-800 text-blue-400 px-8 py-3 rounded-lg border-2 border-blue-500 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 shadow-md transform hover:scale-110 border border-blue-500"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kavindu-lakshan-fernando-114829318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 shadow-md transform hover:scale-110 border border-blue-500"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:kavindu009lakshan@gmail.com"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 shadow-md transform hover:scale-110 border border-blue-500"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/94716507009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-green-400 hover:bg-gray-700 transition-all duration-300 shadow-md transform hover:scale-110 border border-blue-500"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="flex-1 flex justify-center mt-12 lg:mt-0">
              <div className="relative">
                {/* Decorative Background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>

                {/* Photo Container */}
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full"></div>
                  <div className="absolute inset-2 bg-gray-800 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
                    <img
                      src="../src/assets/IMG-20240125-WA0011.jpg"
                      alt="Kavindu Lakshan"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-gray-800 px-6 py-3 rounded-full shadow-xl border-4 border-blue-500">
                    <p className="text-sm font-bold text-white">Trainee</p>
                    <p className="text-xs text-gray-300">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 w-full flex justify-center animate-bounce">
            <a href="#about">
              <ChevronDown className="w-8 h-8 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}