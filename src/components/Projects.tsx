import React from "react";
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with payment integration, inventory management, and real-time order tracking.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: "🛒",
      github: "https://github.com/yourusername/ecommerce",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration features, and progress tracking.",
      tech: ["React", "Firebase", "Tailwind", "Redux"],
      icon: "✅",
      github: "https://github.com/yourusername/taskmanager",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with data visualization, scheduling, and engagement metrics.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
      icon: "📊",
      github: "https://github.com/yourusername/dashboard",
    },
    {
      id: 4,
      title: "Real Estate Portal",
      description:
        "Property listing platform with advanced search filters, virtual tours, and appointment booking system.",
      tech: ["React", "Express", "MySQL", "Google Maps API"],
      icon: "🏠",
      github: "https://github.com/yourusername/realestate",
    },
    {
      id: 5,
      title: "Learning Management System",
      description:
        "Online education platform with video streaming, quizzes, progress tracking, and certification system.",
      tech: ["React", "Node.js", "AWS", "Socket.io"],
      icon: "📚",
      github: "https://github.com/yourusername/lms",
    },
    {
      id: 6,
      title: "Healthcare Appointment System",
      description:
        "Patient-doctor appointment booking system with telemedicine features and medical records management.",
      tech: ["React", "Django", "PostgreSQL", "WebRTC"],
      icon: "🏥",
      github: "https://github.com/yourusername/healthcare",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore my portfolio of web applications built with modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{project.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-black mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}