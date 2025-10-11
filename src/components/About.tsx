export default function About() {
  return (
    <div className="bg-gray-900">
      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              About <span className="text-blue-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-start">
            {/* Left Side - Description */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Software Engineer with a Passion for Innovation
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed text-base sm:text-lg">
                👋 Hi, I'm <span className="text-blue-400">Kavindu Lakshan Fernando</span>, an
                undergraduate in Software Engineering at the Institute of Software
                Engineering (IJSE). I’m passionate about building scalable and efficient
                software systems that solve real-world problems.
              </p>

              <p className="text-gray-300 mb-4 leading-relaxed text-base sm:text-lg">
                I mainly work with <span className="text-blue-400">MERN Stack</span> and{" "}
                <span className="text-blue-400">Spring Boot</span> for backend development.
                My technical stack includes React, React Native, Node.js, Express, and
                Spring Boot to build full-stack web and mobile apps.
              </p>

              <p className="text-gray-300 mb-8 leading-relaxed text-base sm:text-lg">
                My focus areas are Full Stack, Backend, and Mobile App Development. I
                believe teamwork, problem-solving, and continuous learning are the keys to
                impactful digital experiences. 🚀
              </p>

              {/* Stats Section */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                {[
                  { label: "Projects Completed", value: "10+" },
                  { label: "Happy Clients", value: "30+" },
                  { label: "Technologies", value: "15+" },
                  { label: "Client Satisfaction", value: "100%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-gray-800 p-4 sm:p-6 rounded-xl border-2 border-blue-500 transform hover:scale-105 transition-all duration-300 text-center"
                  >
                    <p className="text-3xl sm:text-4xl font-bold text-blue-400 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-gray-300 font-semibold text-xs sm:text-sm md:text-base">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - What I Do */}
            <div className="bg-gray-800 p-5 sm:p-7 md:p-10 rounded-2xl shadow-xl border border-blue-500">
              <h4 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-3xl">💼</span> What I Do
              </h4>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {[
                  {
                    title: "Full Stack Development",
                    desc: "Building complete web applications from front-end to back-end with modern frameworks and best practices.",
                  },
                  {
                    title: "API Development",
                    desc: "Designing and implementing robust RESTful APIs for scalable and secure systems.",
                  },
                  {
                    title: "Database Management",
                    desc: "Efficient database design and optimization for high-performance applications.",
                  },
                  {
                    title: "Code Review & Mentoring",
                    desc: "Helping teams write better code and grow their technical skills.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 sm:gap-4 bg-gray-900 p-4 sm:p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-bold text-white text-base sm:text-lg mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm sm:text-base text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
