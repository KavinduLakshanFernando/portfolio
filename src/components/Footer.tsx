import { Github, Linkedin, Mail, Phone, MapPin, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12 text-center sm:text-left">
          
          {/* About Column */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 justify-center sm:justify-start">
              <Code className="w-6 h-6 text-blue-400" />
              <span className="text-white">
                Kavindu <span className="text-blue-400">Lakshan</span>
              </span>
            </h3>

            <div className="flex gap-4 justify-center sm:justify-start">
              <a
                href="https://github.com/KavinduLakshanFernando"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center border border-blue-500 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kavindu-lakshan-fernando-114829318"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center border border-blue-500 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:kavindu009lakshan@gmail.com"
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
              {[
                { name: "About Me", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 justify-center sm:justify-start"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-bold mb-4 text-white">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 justify-center sm:justify-start text-gray-300">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a
                    href="mailto:kavindu009lakshan@gmail.com"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    kavindu009lakshan@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 justify-center sm:justify-start text-gray-300">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a
                    href="tel:+94716507009"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    +94 71 650 7009
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 justify-center sm:justify-start text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p>Kalutara, Sri Lanka</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Designed & Developed by{" "}
            <span className="text-blue-400 font-semibold">
              Kavindu Lakshan
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
