'use client';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Amy Wightman
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-6 font-light">
              Director of Engineering
            </p>
            <div className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              <p className="mb-4">
                Results-driven engineering leader with <span className="text-blue-300 font-semibold">15+ years</span> of experience building and scaling high-performing product organizations.
              </p>
              <p>
                Proven division leader with a strong track record of aligning engineering strategy to business outcomes, improving customer conversion, and delivering scalable platforms.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                25+ Person Division Leader
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                AI Integration Expert
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                Revenue Impact Focus
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Get In Touch
              </a>
              <a
                href="#experience"
                className="border border-white/30 hover:border-white text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-white/10"
              >
                View Experience
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                {/* Profile image placeholder - you can add actual image later */}
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                  AW
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};