export default function About() {
  
  return (
    <div className="min-h-screen bg-gray-900">

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center py-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                About <span className="text-blue-400">Me</span>
              </h2> 
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Description */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Software Engineer with a Passion for Innovation
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                👋 Hi, I'm Kavindu Lakshan Fernando, an undergraduate in Software Engineering at the Institute of Software Engineering (IJSE).
                I'm passionate about building scalable and efficient software systems that solve real-world problems.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm familiar with Java and mainly work with the MERN stack and Spring Boot for backend development.
                My technical stack includes React, React Native, Node.js, Express, and Spring Boot, which I use to develop full-stack web and mobile applications.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My focus areas are Full Stack, Backend, and Mobile App Development. I strongly believe in teamwork and problem-solving as the foundation of great software development.
                I continuously challenge myself to learn new technologies, write clean code, and build impactful digital experiences. 🚀
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-800 p-6 rounded-xl border-2 border-blue-500 transform hover:scale-105 transition-all duration-300">
                  <p className="text-4xl font-bold text-blue-400 mb-1">10+</p>
                  <p className="text-gray-300 font-semibold">Projects Completed</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl border-2 border-blue-500 transform hover:scale-105 transition-all duration-300">
                  <p className="text-4xl font-bold text-blue-400 mb-1">30+</p>
                  <p className="text-gray-300 font-semibold">Happy Clients</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl border-2 border-blue-500 transform hover:scale-105 transition-all duration-300">
                  <p className="text-4xl font-bold text-blue-400 mb-1">15+</p>
                  <p className="text-gray-300 font-semibold">Technologies</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl border-2 border-blue-500 transform hover:scale-105 transition-all duration-300">
                  <p className="text-4xl font-bold text-blue-400 mb-1">100%</p>
                  <p className="text-gray-300 font-semibold">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right: What I Do */}
            <div className="bg-gray-800 p-8 md:p-10 rounded-2xl shadow-xl border border-blue-500">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-3xl">💼</span> What I Do
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-gray-900 p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-bold text-white text-lg mb-1">Full Stack Development</p>
                    <p className="text-sm text-gray-300">
                      Building complete web applications from front-end to back-end with modern frameworks and best practices
                    </p>
                  </div>
                </div>
                
              
                
                <div className="flex items-start gap-4 bg-gray-900 p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-bold text-white text-lg mb-1">API Development</p>
                    <p className="text-sm text-gray-300">
                      Designing and implementing robust RESTful APIs for scalable applications
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-gray-900 p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-bold text-white text-lg mb-1">Database Management</p>
                    <p className="text-sm text-gray-300">
                      Efficient database design and optimization for high-performance applications
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-900 p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-bold text-white text-lg mb-1">Code Review & Mentoring</p>
                    <p className="text-sm text-gray-300">
                      Helping teams write better code and grow their technical skills
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}