'use client';

export const TechnicalSkills = () => {
  const coreStrengths = [
    {
      title: "Cross-System Synthesizer",
      description: "Pulls from 5+ systems (Jira, GitHub, Slack, GCP, Confluence, code) and turns raw fragments into decisions in real time. Holds multiple threads without getting flustered.",
      examples: ["Multi-repo dependency management", "Real-time technical decision making", "Complex integration orchestration"],
      icon: "🔄"
    },
    {
      title: "Convention Questioner Who Commits",
      description: "Pushes back on technical decisions to verify reasoning, then commits cleanly once rationale is understood. Not contrarian for sport—validates that reasoning still holds.",
      examples: ["Architecture review and validation", "Technical standard evaluation", "Process optimization"],
      icon: "🤔"
    },
    {
      title: "Leverage Builder",
      description: "Doesn't just do the work—turns it into reusable assets. Instinctively scales own time through tooling, documentation, and process automation.",
      examples: ["Internal developer tools", "Automation frameworks", "Knowledge scaling systems"],
      icon: "⚡"
    },
    {
      title: "Pragmatist with Verification Reflex",
      description: "Bias to ship, but checks fresh data. Redirects to authoritative sources, questions approaches before adoption, asks 'is this actually used?' before accepting conventions.",
      examples: ["Data-driven technical decisions", "Source of truth validation", "Evidence-based architecture"],
      icon: "🎯"
    },
    {
      title: "Parallel Ambiguity Navigator", 
      description: "Handles multiple PRs across repos with deploy-order dependencies, keeps parallel workstreams moving without losing track of any.",
      examples: ["Complex deployment orchestration", "Multi-team technical coordination", "Concurrent project management"],
      icon: "🧭"
    },
    {
      title: "Teacher Through Questioning",
      description: "Pushes back on imprecision, demands evidence for claims. Coaches through questioning rather than just directing—builds understanding, not just compliance.",
      examples: ["Technical mentoring", "Architectural reasoning", "Knowledge transfer"],
      icon: "💡"
    }
  ];

  const technicalDomains = [
    { area: "Agentic AI Development", depth: "Built production AI agents with autonomous decision-making" },
    { area: "Full-Stack Engineering", depth: "React/Next.js, PHP/Symfony, .NET, mobile platforms" },
    { area: "Platform Architecture", depth: "Micro-frontends, API design, distributed systems" },
    { area: "DevOps & Integration", depth: "CI/CD, cloud platforms, multi-system orchestration" },
    { area: "Product Development (0-1)", depth: "SaaS architecture, business model design, go-to-market" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How I Work</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Core patterns and strengths developed through building complex systems and leading technical organizations at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {coreStrengths.map((strength, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{strength.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{strength.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Applied In:</h4>
                <div className="flex flex-wrap gap-2">
                  {strength.examples.map((example, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technical Domains</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalDomains.map((domain, index) => (
              <div key={index} className="text-center">
                <h4 className="font-semibold text-blue-400 mb-2">{domain.area}</h4>
                <p className="text-sm text-gray-300">{domain.depth}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
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