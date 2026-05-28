'use client';

export const Projects = () => {
  const projects = [
    {
      title: "ADU Home Resource",
      type: "Product Development Leadership",
      description: "Led the development of a comprehensive platform for accessory dwelling unit (ADU) planning and construction, featuring state-specific regulations, cost calculators, and contractor directories.",
      highlights: [
        "Next.js/React application with MDX content management",
        "SEO-optimized with comprehensive state-by-state guides",
        "AI-integrated content optimization and lead generation",
        "Multi-tool platform including ROI and cost calculators"
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Supabase", "AI Integration"],
      impact: "Enabling homeowners to navigate complex ADU regulations and connect with qualified contractors",
      github: "https://github.com/ymadh/aduhomeresource.com",
      live: "https://aduhomeresource.com"
    },
    {
      title: "Micro-Frontend Architecture Migration",
      type: "Technical Leadership",
      description: "Led the decomposition of a monolithic React application into a micro-frontend system, enabling independent deployments and clearer team ownership across a 25+ person engineering division.",
      highlights: [
        "Designed and implemented module federation architecture",
        "Enabled independent team deployments and reduced deployment conflicts",
        "Built shared component library for consistency across teams",
        "Improved development velocity and team autonomy"
      ],
      technologies: ["React", "Module Federation", "TypeScript", "Shared Libraries", "CI/CD"],
      impact: "Reduced deployment conflicts by 80% and improved development team velocity"
    },
    {
      title: "AI-Assisted Engineering Workflows",
      type: "Innovation Leadership", 
      description: "Integrated AI-assisted workflows into engineering and product practices to reduce manual effort across code maintenance, experimentation analysis, and operational diagnostics.",
      highlights: [
        "Automated code review and maintenance recommendations",
        "AI-powered experimentation analysis reducing manual effort", 
        "Operational diagnostics automation for faster incident resolution",
        "Division absorbed additional scope without increasing headcount"
      ],
      technologies: ["AI/ML APIs", "Automation Pipelines", "Data Analytics", "DevOps Integration"],
      impact: "Accelerated delivery cycles while maintaining quality standards"
    },
    {
      title: "High-Traffic Community Platform",
      type: "Principal Engineer",
      description: "Architected and engineered community platform serving 1M+ users using modern PHP architecture with a focus on support, gamification, and user engagement.",
      highlights: [
        "Symfony-based architecture handling 1M+ active users",
        "Azure cloud services integration for scalability",
        "Modernized legacy K1000 API improving latency and maintainability",
        "Implemented gamification features driving user engagement"
      ],
      technologies: ["Symfony", "PHP", "Azure", "API Platform", "Performance Optimization"],
      impact: "Platform supported 1M+ users with high performance and reliability"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects & Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key technical initiatives and products that demonstrate leadership in engineering excellence, 
            innovation, and business impact across different domains and scales.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <div className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                      {project.type}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  </div>
                  {(project.github || project.live) && (
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                          </svg>
                          GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Site
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Highlights</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Impact & Results</h4>
                    <p className="text-gray-700 text-sm">{project.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};