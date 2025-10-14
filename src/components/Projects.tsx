import { useState } from "react";
import { Github, Code } from "lucide-react";
import img from "../assets/ProjectsImages/img.png"
import ecommerce from "../assets/ProjectsImages/ecommerce.png"
import curior from "../assets/ProjectsImages/curior.png"
import bookClub from "../assets/ProjectsImages/bookClub.png"
import portfolio from "../assets/ProjectsImages/portfolio.png"
import diary from "../assets/ProjectsImages/diary.jpg"

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: " Desktop Application - OnTime Cabs",
      description:
        "Desktop-based cab booking and management system, Customer registration, cab booking, driver assignment, and trip management..",
      tech: ["JavaFx", "MySql", "MVC", "OOp"],
      icon: "🚖",
      image: img,
      github: "https://github.com/KavinduLakshanFernando/MyProjectOntimeCabs.git",
    },
    {
      id: 2,
      title: "E-Commerce Web Application",
      description:
        "Web-based inventory & sales management system with product catalog, orders, and cart.",
      tech: ["JavaEE", "JSP", "Servlets", "MySQL","MVC"],
      icon: "🛒",
      image: ecommerce,
      github: "https://github.com/KavinduLakshanFernando/E-CommerceWebApplication.git",
    },
    {
      id: 3,
      title: "TurboTrack Delivery Management System – Web Application",
      description:
        "Spring Boot backend with REST APIs, MySQL DB, and role-based access control ,Dashboards for admins, drivers, and customers",
      tech: ["SpringBoot", "HTML", "CSS", "MySQL"],
      icon: "📦",
      image: curior,
      github: "https://github.com/KavinduLakshanFernando/DeliveryManagementSystemNew.git",
    },
    {
      id: 4,
      title: "Book Club Library",
      description:
        "Full-stack MERN app for managing books, readers, and lending,  CRUD operations, dashboards, overdue notifications with email reminders.",
      tech: ["React", "Express.js", "Node.js", "MongoDB","Nodemailer"],
      icon: "📖",
      image: bookClub,
      github: "https://github.com/KavinduLakshanFernando/Book-Club-Library-Management-Web-Application.git",
    },
    {
      id: 5,
      title: "My React Portfolio",
      description:
        "Personal portfolio website built with React, showcasing projects, skills, and contact info with smooth animations and responsive design.",
      tech: ["React", "Tailwind CSS"],
      icon: "💼",
      image: portfolio,
      github: "https://github.com/KavinduLakshanFernando/portfolio.git",
    },
    {
      id: 6,
      title: "Personal Day Book",
      description:
        "A web application to record daily activities, thoughts, and reflections with user authentication.",
      tech: ["ReactNative", "Firebase", "Tailwind CSS" ,"Expo"],
      icon: "📔",
      image: diary,
      github: "https://github.com/KavinduLakshanFernando/Day-Book.git",
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-16 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 animate-expandWidth"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="bg-gray-800 border-2 border-blue-500 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/50 hover:-translate-y-3 transition-all duration-500 cursor-pointer"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Image Section */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredId === project.id ? "scale-125 rotate-2" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/60 to-transparent transition-opacity duration-500 ${
                    hoveredId === project.id ? "opacity-80" : "opacity-60"
                  }`}
                ></div>

                {/* Icon */}
                <div
                  className={`absolute top-4 right-4 text-3xl sm:text-4xl bg-gray-800 bg-opacity-90 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border-2 border-blue-500 transition-all duration-500 ${
                    hoveredId === project.id ? "scale-110 rotate-12" : "scale-100"
                  }`}
                >
                  {project.icon}
                </div>

                {/* Code Icon Center Hover */}
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    hoveredId === project.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50"
                  }`}
                >
                  <Code className="w-10 h-10 sm:w-14 sm:h-14 text-blue-400" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-7">
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-3 transition-all duration-300 ${
                    hoveredId === project.id
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                      : "text-white"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-5 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`bg-gray-900 text-blue-400 px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-blue-500 transition-all duration-300 ${
                        hoveredId === project.id
                          ? "border-blue-400 bg-blue-500/10 scale-105"
                          : ""
                      }`}
                      style={{
                        transitionDelay:
                          hoveredId === project.id
                            ? `${techIndex * 50}ms`
                            : "0ms",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-blue-500/50 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-12" />
                  <span>View on GitHub</span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      hoveredId === project.id ? "translate-x-1" : ""
                    }`}
                  >
                    →
                  </span>
                </a>
              </div>

              {/* Gradient Bottom Border */}
              <div
                className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 origin-left transition-transform duration-500"
                style={{
                  transform:
                    hoveredId === project.id ? "scaleX(1)" : "scaleX(0)",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
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
