

export default function Portfolio() {
  
  return (
    <div className="min-h-screen">

      {/* About Section */}
      <section id="about" className="min-h-screenfrom-purple-50 via-white to-blue-50 flex items-center py-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Description */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Software Engineer with a Passion for Innovation
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm a full-stack software engineer with over 5 years of experience building scalable web applications. 
                I specialize in React, Node.js, and modern web technologies that bring ideas to life.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                My journey in software development started with a curiosity about how things work, and it has evolved 
                into a career dedicated to creating impactful digital solutions that solve real-world problems.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200 transform hover:scale-105 transition-all duration-300">
                  <p className="text-4xl font-bold text-blue-600 mb-1">50+</p>
                  <p className="text-gray-700 font-semibold">Projects Completed</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200 transform hover:scale-105 transition-all duration-300">
                  <p className="text-4xl font-bold text-purple-600 mb-1">30+</p>
                  <p className="text-gray-700 font-semibold">Happy Clients</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
                  <p className="text-4xl font-bold text-green-600 mb-1">5+</p>
                  <p className="text-gray-700 font-semibold">Years Experience</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-200 transform hover:scale-105 transition-all duration-300">
                  <p className="text-4xl font-bold text-orange-600 mb-1">100%</p>
                  <p className="text-gray-700 font-semibold">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right: What I Do */}
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 md:p-10 rounded-2xl shadow-xl">
              <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-3xl">💼</span> What I Do
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg mb-1">Full Stack Development</p>
                    <p className="text-sm text-gray-600">
                      Building complete web applications from front-end to back-end with modern frameworks and best practices
                    </p>
                  </div>
                </div>
                
              
                
                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg mb-1">API Development</p>
                    <p className="text-sm text-gray-600">
                      Designing and implementing robust RESTful APIs for scalable applications
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-3 h-3 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg mb-1">Database Management</p>
                    <p className="text-sm text-gray-600">
                      Efficient database design and optimization for high-performance applications
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-3 h-3 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg mb-1">Code Review & Mentoring</p>
                    <p className="text-sm text-gray-600">
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