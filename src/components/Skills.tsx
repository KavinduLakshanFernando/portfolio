import { Code } from "lucide-react";

export default function Skills() {
    return (
        <div className="bg-gray-900">
            {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-15 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Skills & <span className="text-blue-400">Technologies</span>
              </h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
              
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Frontend Development */}
              <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-500">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Frontend Development</h3>
                <p className="text-gray-300 mb-6">Building responsive and interactive user interfaces</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-blue-900 text-blue-300 rounded-lg text-sm font-semibold border border-blue-500">React</span>
                  <span className="px-4 py-2 bg-blue-900 text-blue-300 rounded-lg text-sm font-semibold border border-blue-500">TypeScript</span>
                  <span className="px-4 py-2 bg-blue-900 text-blue-300 rounded-lg text-sm font-semibold border border-blue-500">JavaScript</span>
                  <span className="px-4 py-2 bg-blue-900 text-blue-300 rounded-lg text-sm font-semibold border border-blue-500">Tailwind CSS</span>
                  <span className="px-4 py-2 bg-blue-900 text-blue-300 rounded-lg text-sm font-semibold border border-blue-500">HTML5</span>
                  <span className="px-4 py-2 bg-blue-900 text-blue-300 rounded-lg text-sm font-semibold border border-blue-500">CSS3</span>
                </div>
              </div>

              {/* Backend Development */}
              <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-500">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Backend Development</h3>
                <p className="text-gray-300 mb-6">Creating robust and scalable server-side solutions</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-gray-700 text-green-300 rounded-lg text-sm font-semibold border border-green-500">Node.js</span>
                  <span className="px-4 py-2 bg-gray-700 text-green-300 rounded-lg text-sm font-semibold border border-green-500">Express</span>
                  <span className="px-4 py-2 bg-gray-700 text-green-300 rounded-lg text-sm font-semibold border border-green-500">Python</span>
                  <span className="px-4 py-2 bg-gray-700 text-green-300 rounded-lg text-sm font-semibold border border-green-500">Java</span>
                  <span className="px-4 py-2 bg-gray-700 text-green-300 rounded-lg text-sm font-semibold border border-green-500">REST API</span>
                  <span className="px-4 py-2 bg-gray-700 text-green-300 rounded-lg text-sm font-semibold border border-green-500">Spring Boot</span>
                </div>
              </div>

              {/* Database */}
              <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-500">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Database</h3>
                <p className="text-gray-300 mb-6">Managing and optimizing data storage solutions</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-gray-700 text-orange-300 rounded-lg text-sm font-semibold border border-orange-500">MongoDB</span>
                  <span className="px-4 py-2 bg-gray-700 text-orange-300 rounded-lg text-sm font-semibold border border-orange-500">MySQL</span>
                  <span className="px-4 py-2 bg-gray-700 text-orange-300 rounded-lg text-sm font-semibold border border-orange-500">Firebase</span>
                </div>
              </div>

              {/* DevOps & Tools */}
              <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-500">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">DevOps & Tools</h3>
                <p className="text-gray-300 mb-6">Streamlining development and deployment processes</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-gray-700 text-purple-300 rounded-lg text-sm font-semibold border border-purple-500">Git</span>
                  <span className="px-4 py-2 bg-gray-700 text-purple-300 rounded-lg text-sm font-semibold border border-purple-500">Git Hub</span>
                  <span className="px-4 py-2 bg-gray-700 text-purple-300 rounded-lg text-sm font-semibold border border-purple-500">Vs Code</span>
                  <span className="px-4 py-2 bg-gray-700 text-purple-300 rounded-lg text-sm font-semibold border border-purple-500">Intellij Idea</span>
                  
                  
                </div>
              </div>

              {/* Mobile Development */}
              <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-500">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Mobile Development</h3>
                <p className="text-gray-300 mb-6">Creating cross-platform mobile applications</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-gray-700 text-pink-300 rounded-lg text-sm font-semibold border border-pink-500">React Native</span>
                  <span className="px-4 py-2 bg-gray-700 text-pink-300 rounded-lg text-sm font-semibold border border-pink-500">iOS</span>
                  <span className="px-4 py-2 bg-gray-700 text-pink-300 rounded-lg text-sm font-semibold border border-pink-500">Android</span>
                </div>
              </div>

              {/* Design & UI/UX */}
              <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-500">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Design & UI/UX</h3>
                <p className="text-gray-300 mb-6">Crafting beautiful and user-friendly interfaces</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-gray-700 text-indigo-300 rounded-lg text-sm font-semibold border border-indigo-500">Figma</span>
                  
                  <span className="px-4 py-2 bg-gray-700 text-indigo-300 rounded-lg text-sm font-semibold border border-indigo-500">UI Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
  );
}