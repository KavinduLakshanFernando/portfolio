import { Code } from "lucide-react";

export default function Skills() {
    return (
        <div className="bg-gray-50">
            {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-15 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
                💼 My Expertise
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Skills & <span className="text-blue-600">Technologies</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A comprehensive toolkit of modern technologies I use to build amazing digital experiences
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Frontend Development */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Frontend Development</h3>
                <p className="text-gray-600 mb-6">Building responsive and interactive user interfaces</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold">React</span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold">Next.js</span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold">TypeScript</span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold">Tailwind CSS</span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold">HTML5</span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold">CSS3</span>
                </div>
              </div>

              {/* Backend Development */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Backend Development</h3>
                <p className="text-gray-600 mb-6">Creating robust and scalable server-side solutions</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-green-50 text-green-600 rounded-lg text-sm font-semibold">Node.js</span>
                  <span className="px-4 py-2 bg-green-50 text-green-600 rounded-lg text-sm font-semibold">Express</span>
                  <span className="px-4 py-2 bg-green-50 text-green-600 rounded-lg text-sm font-semibold">Python</span>
                  <span className="px-4 py-2 bg-green-50 text-green-600 rounded-lg text-sm font-semibold">Django</span>
                  <span className="px-4 py-2 bg-green-50 text-green-600 rounded-lg text-sm font-semibold">REST API</span>
                </div>
              </div>

              {/* Database */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Database</h3>
                <p className="text-gray-600 mb-6">Managing and optimizing data storage solutions</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-orange-50 text-orange-600 rounded-lg text-sm font-semibold">MongoDB</span>
                  <span className="px-4 py-2 bg-orange-50 text-orange-600 rounded-lg text-sm font-semibold">PostgreSQL</span>
                  <span className="px-4 py-2 bg-orange-50 text-orange-600 rounded-lg text-sm font-semibold">MySQL</span>
                  <span className="px-4 py-2 bg-orange-50 text-orange-600 rounded-lg text-sm font-semibold">Firebase</span>
                </div>
              </div>

              {/* DevOps & Tools */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">DevOps & Tools</h3>
                <p className="text-gray-600 mb-6">Streamlining development and deployment processes</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg text-sm font-semibold">Git</span>
                  <span className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg text-sm font-semibold">Docker</span>
                  <span className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg text-sm font-semibold">AWS</span>
                  <span className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg text-sm font-semibold">CI/CD</span>
                  <span className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg text-sm font-semibold">Linux</span>
                </div>
              </div>

              {/* Mobile Development */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Mobile Development</h3>
                <p className="text-gray-600 mb-6">Creating cross-platform mobile applications</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-pink-50 text-pink-600 rounded-lg text-sm font-semibold">React Native</span>
                  <span className="px-4 py-2 bg-pink-50 text-pink-600 rounded-lg text-sm font-semibold">Flutter</span>
                  <span className="px-4 py-2 bg-pink-50 text-pink-600 rounded-lg text-sm font-semibold">iOS</span>
                  <span className="px-4 py-2 bg-pink-50 text-pink-600 rounded-lg text-sm font-semibold">Android</span>
                </div>
              </div>

              {/* Design & UI/UX */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Design & UI/UX</h3>
                <p className="text-gray-600 mb-6">Crafting beautiful and user-friendly interfaces</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-semibold">Figma</span>
                  <span className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-semibold">Adobe XD</span>
                  <span className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-semibold">Photoshop</span>
                  <span className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-semibold">UI Design</span>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              
              <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
                <h4 className="text-4xl font-bold text-purple-600 mb-2">15+</h4>
                <p className="text-gray-600 font-medium">Technologies</p>
              </div>
            </div>
          </div>
        </section>
        
      </div>
  );
}