import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [hoveredContact, setHoveredContact] = useState(Number);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully! I'll get back to you soon. 🚀");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      id: 1,
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "kavindu009lakshan@gmail.com",
      link: "mailto:kavindu009lakshan@gmail.com",
      bgColor: "bg-blue-500",
      borderColor: "border-blue-400"
    },
    {
      id: 2,
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+94 71 650 7009",
      link: "tel:+94716507009",
      bgColor: "bg-green-500",
      borderColor: "border-green-400"
    },
    {
      id: 3,
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Colombo, Sri Lanka",
      link: "#",
      bgColor: "bg-purple-500",
      borderColor: "border-purple-400"
    }
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      link: "https://github.com/KavinduLakshanFernando"
    },
    {
      id: 2,
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/kavindu-lakshan-fernando-114829318"
    },
    {
      id: 3,
      icon: <FaWhatsapp className="w-6 h-6" />,
      name: "WhatsApp",
      link: "https://wa.me/94716507009"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with Animation */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-4">
            <MessageCircle className="w-16 h-16 text-blue-400 animate-bounce" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 animate-expandWidth"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8 animate-slideLeft">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.id}
                  href={contact.link}
                  onMouseEnter={() => setHoveredContact(contact.id)}
                  onMouseLeave={() => setHoveredContact(Number)}
                  className="block bg-gray-800 border-2 border-blue-500 rounded-xl p-6 hover:shadow-blue-500/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-500 group"
                  style={{
                    animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                      hoveredContact === contact.id 
                        ? `${contact.bgColor} ${contact.borderColor} scale-110 rotate-12` 
                        : 'bg-gray-900 border-blue-500'
                    }`}>
                      <div className={`transition-colors duration-300 ${
                        hoveredContact === contact.id ? 'text-white' : 'text-blue-400'
                      }`}>
                        {contact.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm mb-1">{contact.title}</h3>
                      <p className={`font-semibold transition-all duration-300 ${
                        hoveredContact === contact.id 
                          ? 'text-blue-400 translate-x-2' 
                          : 'text-white'
                      }`}>
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gray-800 border-2 border-blue-500 rounded-xl p-6 animate-slideUp">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">🌐</span>
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 border-2 border-blue-500 rounded-lg p-4 flex flex-col items-center gap-2 hover:bg-blue-500 hover:scale-105 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="text-blue-400 group-hover:text-white group-hover:rotate-12 transition-all duration-300">
                      {social.icon}
                    </div>
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 animate-slideUp">
              <h3 className="text-xl font-bold text-white mb-3">💡 Let's Build Something Amazing!</h3>
              <p className="text-white text-sm leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="animate-slideRight">
            <div className="bg-gray-800 border-2 border-blue-500 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              
              {/* Name Field */}
              <div className="mb-6">
                <label className="block text-gray-300 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border-2 border-blue-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label className="block text-gray-300 font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border-2 border-blue-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject Field */}
              <div className="mb-6">
                <label className="block text-gray-300 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border-2 border-blue-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label className="block text-gray-300 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-gray-900 border-2 border-blue-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-blue-500/50 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style type="text/css">{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 5rem;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-expandWidth {
          animation: expandWidth 1s ease-out 0.5s both;
        }

        .animate-slideLeft {
          animation: slideLeft 0.8s ease-out;
        }

        .animate-slideRight {
          animation: slideRight 0.8s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}