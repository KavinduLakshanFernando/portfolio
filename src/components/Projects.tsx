import React, { useState } from "react";
import { Github, Code, Folder } from "lucide-react";

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(Number);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with payment integration, inventory management, and real-time order tracking.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: "🛒",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      github: "https://github.com/yourusername/ecommerce",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration features, and progress tracking.",
      tech: ["React", "Firebase", "Tailwind", "Redux"],
      icon: "✅",
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&h=600&fit=crop",
      github: "https://github.com/yourusername/taskmanager",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with data visualization, scheduling, and engagement metrics.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
      icon: "📊",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      github: "https://github.com/yourusername/dashboard",
    },
    {
      id: 4,
      title: "Real Estate Portal",
      description:
        "Property listing platform with advanced search filters, virtual tours, and appointment booking system.",
      tech: ["React", "Express", "MySQL", "Google Maps API"],
      icon: "🏠",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      github: "https://github.com/yourusername/realestate",
    },
    {
      id: 5,
      title: "Learning Management System",
      description:
        "Online education platform with video streaming, quizzes, progress tracking, and certification system.",
      tech: ["React", "Node.js", "AWS", "Socket.io"],
      icon: "📚",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      github: "https://github.com/yourusername/lms",
    },
    {
      id: 6,
      title: "Healthcare Appointment System",
      description:
        "Patient-doctor appointment booking system with telemedicine features and medical records management.",
      tech: ["React", "Django", "PostgreSQL", "WebRTC"],
      icon: "🏥",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      github: "https://github.com/yourusername/healthcare",
    },
  ];

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-15 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-4">
            {/* <Folder className="w-16 h-16 text-blue-400 animate-bounce" /> */}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 animate-expandWidth"></div>
         
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(Number)}
              className="bg-gray-800 border-2 border-blue-500 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/50 hover:-translate-y-3 transition-all duration-500 cursor-pointer"
              style={{ animation: `slideUp 0.6s ease-out ${index * 0.1}s both` }}
            >
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredId === project.id ? "scale-125 rotate-2" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/50 to-transparent transition-opacity duration-500 ${
                    hoveredId === project.id ? "opacity-80" : "opacity-60"
                  }`}
                ></div>
                <div
                  className={`absolute top-4 right-4 text-4xl bg-gray-800 bg-opacity-90 rounded-full w-16 h-16 flex items-center justify-center border-2 border-blue-500 transition-all duration-500 ${
                    hoveredId === project.id ? "scale-110 rotate-12" : "scale-100"
                  }`}
                >
                  {project.icon}
                </div>
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    hoveredId === project.id ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                >
                  <Code className="w-16 h-16 text-blue-400" />
                </div>
              </div>

              <div className="p-6">
                <h3
                  className={`text-2xl font-bold mb-3 transition-all duration-300 ${
                    hoveredId === project.id
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                      : "text-white"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-5 leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`bg-gray-900 text-blue-400 px-3 py-1 rounded-full text-xs font-medium border border-blue-500 transition-all duration-300 ${
                        hoveredId === project.id ? "border-blue-400 bg-blue-500/10 scale-105" : ""
                      }`}
                      style={{
                        transitionDelay: hoveredId === project.id ? `${techIndex * 50}ms` : "0ms",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-blue-500/50 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
                >
                  <Github className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                  <span>View on GitHub</span>
                  <span className={`transform transition-transform duration-300 ${hoveredId === project.id ? "translate-x-1" : ""}`}>
                    →
                  </span>
                </a>
              </div>

              <div
                className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 origin-left transition-transform duration-500"
                style={{ transform: hoveredId === project.id ? "scaleX(1)" : "scaleX(0)" }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      {/* Global CSS Animations */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 5rem; }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
        .animate-expandWidth { animation: expandWidth 1s ease-out 0.5s both; }
      `}</style>
    </div>
  );
}
