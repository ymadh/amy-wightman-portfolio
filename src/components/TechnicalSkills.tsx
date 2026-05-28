'use client';

export const TechnicalSkills = () => {
  const skillCategories = [
    {
      category: "Leadership & Strategy",
      skills: [
        { name: "Engineering Management", level: 95 },
        { name: "Technical Strategy", level: 92 },
        { name: "Organizational Design", level: 90 },
        { name: "Cross-functional Partnership", level: 93 },
        { name: "Product Engineering", level: 88 }
      ],
      color: "bg-purple-500"
    },
    {
      category: "Frontend & Architecture", 
      skills: [
        { name: "React/Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Micro-frontends", level: 88 },
        { name: "Component Systems", level: 90 },
        { name: "Mobile Development", level: 75 }
      ],
      color: "bg-blue-500"
    },
    {
      category: "Backend & Platform",
      skills: [
        { name: "PHP/Symfony", level: 90 },
        { name: ".NET Core", level: 85 },
        { name: "API Design", level: 92 },
        { name: "Platform Architecture", level: 88 },
        { name: "Cloud Services", level: 80 }
      ],
      color: "bg-green-500"
    },
    {
      category: "Entrepreneurship & Modern Engineering",
      skills: [
        { name: "Agentic AI Development", level: 92 },
        { name: "Product Development (0-1)", level: 90 },
        { name: "LLM Integration & Orchestration", level: 88 },
        { name: "SaaS Architecture", level: 90 },
        { name: "Business Model Design", level: 85 }
      ],
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive skill set spanning leadership, modern web technologies, and platform engineering, 
            refined through years of hands-on experience and team leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6 text-center">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-lg font-semibold mb-2">Years Experience</div>
            <div className="text-gray-400">From individual contributor to engineering director</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
            <div className="text-lg font-semibold mb-2">Team Members Led</div>
            <div className="text-gray-400">Across multiple engineering disciplines</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">1M+</div>
            <div className="text-lg font-semibold mb-2">Users Impacted</div>
            <div className="text-gray-400">Through platforms and applications built</div>
          </div>
        </div>
      </div>
    </section>
  );
};