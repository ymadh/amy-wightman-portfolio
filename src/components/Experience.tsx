'use client';

export const Experience = () => {
  const experiences = [
    {
      company: "Current Role",
      position: "Director of Engineering",
      period: "Mar 2026 – Present",
      highlights: [
        "Led a 25+ person engineering division across mobile, customer acquisition, and revenue platforms",
        "Integrated AI-assisted workflows reducing manual effort and accelerating delivery cycles",
        "Modernized front-end architecture with micro-frontend system enabling independent deployments",
        "Built shared component library driving standardization across product teams",
        "Reduced infrastructure cost through legacy system migration to internally owned solution"
      ],
      technologies: ["React", "Micro-frontends", "AI Workflows", "Mobile", "Platform Architecture"]
    },
    {
      company: "Previous Role", 
      position: "Senior Engineering Manager",
      period: "May 2023 – Mar 2026",
      highlights: [
        "Managed engineering teams focused on onboarding, purchase flows, and customer communications",
        "Led engineering managers and cross-functional product teams through rapid scaling",
        "Partnered with Product, Design, and Analytics to improve conversion and experimentation velocity",
        "Drove architectural modernization initiatives across Growth organization",
        "Managed multiple engineering teams across web and mobile platforms"
      ],
      technologies: ["Team Management", "Growth Engineering", "Conversion Optimization", "Cross-functional Leadership"]
    },
    {
      company: "Quest Software",
      position: "Principal Engineer",
      period: "April 2011 - May 2021",
      highlights: [
        "Architected high-traffic community platform serving 1M+ users using Symfony, PHP, and Azure",
        "Modernized legacy K1000 API with Symfony 5 improving latency and maintainability",
        "Founded Kace Cloud Mobile Device Manager team as full stack engineer",
        "Implemented Angular frontend with .NET backend for successful product launch"
      ],
      technologies: ["Symfony", "PHP", "Azure", "Angular", ".NET", "API Platform"]
    },
    {
      company: "Fox Sports",
      position: "Senior Developer", 
      period: "October 2009 - April 2011",
      highlights: [
        "Developed revenue-generating features for SpeedTV.com supporting 5M+ monthly users",
        "Optimized advertising platform integration resulting in 15% increase in ad revenue",
        "Built high-performance web applications using Zend Framework and jQuery"
      ],
      technologies: ["Zend Framework", "jQuery", "High-Traffic Web", "Ad Platform Integration"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            15+ years of progressive leadership experience, from individual contributor to director of engineering, 
            consistently delivering business impact through technical excellence.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                  <div className="text-lg text-blue-600 font-semibold mb-2">{exp.company}</div>
                  <div className="text-gray-600 font-medium">{exp.period}</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies & Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};