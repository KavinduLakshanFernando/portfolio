import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_3k37oer",
        "template_qbq3me1",
        formData,
        "R9GEHLVTZ_UQ-2Zv3"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully! 💌");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message 😞");
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      id: 1,
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "kavindu009lakshan@gmail.com",
      link: "mailto:kavindu009lakshan@gmail.com",
      bgColor: "bg-blue-500",
      borderColor: "border-blue-400",
    },
    {
      id: 2,
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+94 71 650 7009",
      link: "tel:+94716507009",
      bgColor: "bg-green-500",
      borderColor: "border-green-400",
    },
    {
      id: 3,
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Colombo, Sri Lanka",
      link: "#",
      bgColor: "bg-purple-500",
      borderColor: "border-purple-400",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      link: "https://github.com/KavinduLakshanFernando",
    },
    {
      id: 2,
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/kavindu-lakshan-fernando-114829318",
    },
    {
      id: 3,
      icon: <FaWhatsapp className="w-6 h-6" />,
      name: "WhatsApp",
      link: "https://wa.me/94716507009",
    },
  ];

  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 animate-expandWidth"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Left Side */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.id}
                  href={contact.link}
                  onMouseEnter={() => setHoveredContact(contact.id)}
                  onMouseLeave={() => setHoveredContact(null)}
                  className="block bg-gray-800 border-2 border-blue-500 rounded-xl p-5 sm:p-6 hover:-translate-y-2 transition-all duration-500 hover:shadow-blue-500/40"
                  style={{
                    animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${hoveredContact === contact.id
                        ? `${contact.bgColor} ${contact.borderColor} scale-110 rotate-12`
                        : "bg-gray-900 border-blue-500"
                        }`}
                    >
                      <div
                        className={`${hoveredContact === contact.id
                          ? "text-white"
                          : "text-blue-400"
                          } transition-colors`}
                      >
                        {contact.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm mb-1">
                        {contact.title}
                      </h3>
                      <p
                        className={`font-semibold text-sm sm:text-base ${hoveredContact === contact.id
                          ? "text-blue-400 translate-x-2"
                          : "text-white"
                          } transition-all`}
                      >
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gray-800 border-2 border-blue-500 rounded-xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-5 flex items-center gap-2">
                🌐 Connect With Me
              </h3>
              <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-center sm:justify-start">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none bg-gray-900 border-2 border-blue-500 rounded-lg p-4 flex flex-col items-center hover:bg-blue-500 hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-blue-400 group-hover:text-white transition">
                      {social.icon}
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-white">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                💡 Let's Build Something Amazing!
              </h3>
              <p className="text-white text-sm leading-relaxed">
                I’m always open to new opportunities and collaborations. Whether
                you want to discuss a project or just say hi, I’d love to hear
                from you!
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <div className="bg-gray-800 border-2 border-blue-500 rounded-xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { label: "Name", name: "name", placeholder: "Enter your name" },
                  { label: "Email", name: "email", placeholder: "Enter your email" },
                  { label: "Subject", name: "subject", placeholder: "Enter subject" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-gray-300 font-semibold mb-2 capitalize">
                      {field.label}
                    </label>
                    <input
                      type={field.name === "email" ? "email" : "text"}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData] || ""}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border-2 border-blue-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/40 transition-all"
                      placeholder={field.placeholder}
                      required
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-gray-300 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-gray-900 border-2 border-blue-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/40 transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-blue-500/50 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes expandWidth {
          from { width: 0; } to { width: 5rem; }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
        .animate-expandWidth { animation: expandWidth 1s ease-out 0.5s both; }
      `}</style>
    </div>
  );
}
