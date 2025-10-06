import { Github, Linkedin, Mail, Phone, MapPin, Heart, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Code className="w-6 h-6 text-blue-400" />
              <span className="text-white">Kavindu <span className="text-blue-400">Lakshan</span></span>
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Software Engineer passionate about building scalable and efficient software systems that solve real-world problems.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center border border-blue-500 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center border border-blue-500 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:your.email@example.com"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center border border-blue-500 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition-colors duration-300">
                    your.email@example.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a href="tel:+94123456789" className="hover:text-blue-400 transition-colors duration-300">
                    +94 12 345 6789
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p>Colombo, Sri Lanka</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm flex items-center gap-1">
              © 2024 Kavindu Lakshan. Made with 
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> 
              in Sri Lanka
            </p>
            <p className="text-gray-300 text-sm">
              Designed & Developed by <span className="text-blue-400 font-semibold">Kavindu Lakshan</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}