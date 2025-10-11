import { Code } from "lucide-react";

export default function Skills() {
  return (
    <div className="bg-gray-900">
      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-16 px-4 sm:px-6 lg:px-10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & <span className="text-blue-400">Technologies</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                desc: "Building responsive and interactive user interfaces",
                color: "from-blue-500 to-blue-600",
                tagColor: "bg-blue-900 text-blue-300 border-blue-500",
                tags: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
              },
              {
                title: "Backend Development",
                desc: "Creating robust and scalable server-side solutions",
                color: "from-green-500 to-green-600",
                tagColor: "bg-gray-700 text-green-300 border-green-500",
                tags: ["Node.js", "Express", "Python", "Java", "REST API", "Spring Boot"],
              },
              {
                title: "Database",
                desc: "Managing and optimizing data storage solutions",
                color: "from-orange-500 to-orange-600",
                tagColor: "bg-gray-700 text-orange-300 border-orange-500",
                tags: ["MongoDB", "MySQL", "Firebase"],
              },
              {
                title: "DevOps & Tools",
                desc: "Streamlining development and deployment processes",
                color: "from-purple-500 to-purple-600",
                tagColor: "bg-gray-700 text-purple-300 border-purple-500",
                tags: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"],
              },
              {
                title: "Mobile Development",
                desc: "Creating cross-platform mobile applications",
                color: "from-pink-500 to-pink-600",
                tagColor: "bg-gray-700 text-pink-300 border-pink-500",
                tags: ["React Native", "iOS", "Android"],
              },
              {
                title: "Design & UI/UX",
                desc: "Crafting beautiful and user-friendly interfaces",
                color: "from-indigo-500 to-indigo-600",
                tagColor: "bg-gray-700 text-indigo-300 border-indigo-500",
                tags: ["Figma", "UI Design"],
              },
            ].map((skill) => (
              <div
                key={skill.title}
                className="bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-500"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{skill.title}</h3>
                <p className="text-gray-300 mb-5 text-sm sm:text-base">{skill.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold border ${skill.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
