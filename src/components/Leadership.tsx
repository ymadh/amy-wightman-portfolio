'use client';

export const Leadership = () => {
  const strengths = [
    {
      icon: "👥",
      title: "Engineering Org Design & Scaling",
      description: "Led 25+ person engineering division through rapid growth, implementing organizational structures that scale with business needs.",
      examples: [
        "Designed team topologies across mobile, web, and platform engineering",
        "Established clear ownership models for micro-frontend architecture",
        "Scaled division to absorb additional scope without increasing headcount"
      ]
    },
    {
      icon: "🏗️", 
      title: "Technical Strategy & Architecture",
      description: "Drive technical decisions that align with business objectives while modernizing legacy systems for future growth.",
      examples: [
        "Modernized monolithic React app into micro-frontend system",
        "Led migration from legacy third-party systems to internal solutions",
        "Implemented AI-assisted workflows reducing manual operational overhead"
      ]
    },
    {
      icon: "📈",
      title: "Revenue Impact & Conversion", 
      description: "Focus on engineering initiatives that directly impact business metrics, revenue, and customer experience.",
      examples: [
        "Improved customer acquisition and onboarding experiences",
        "Built revenue-generating personalization and upsell platforms", 
        "Optimized advertising platforms resulting in 15% revenue increase"
      ]
    },
    {
      icon: "⚡",
      title: "Operational Excellence",
      description: "Establish predictable delivery processes and operational practices that enable consistent execution.",
      examples: [
        "Implemented shared component libraries driving standardization",
        "Established career progression frameworks and mentorship programs",
        "Led systematic tech-debt reduction consolidating redundant services"
      ]
    },
    {
      icon: "🎯",
      title: "Cross-functional Partnership", 
      description: "Trusted partner to Product, Design, and Data leadership, translating business needs into technical solutions.",
      examples: [
        "Partner with executive leadership on roadmap and platform investments",
        "Collaborate with Product and Analytics to improve experimentation velocity",
        "Work with Design teams to implement scalable component systems"
      ]
    },
    {
      icon: "🌱",
      title: "Talent Development",
      description: "Build high-performing teams through mentorship, career development, and creating growth opportunities.",
      examples: [
        "Established engineering excellence programs and hackathons",
        "Created career progression frameworks for individual contributors",
        "Mentored engineering managers leading their own teams"
      ]
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Strengths</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Core competencies developed through years of building and scaling engineering organizations, 
            with a focus on business impact and technical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors duration-300">
              <div className="text-4xl mb-4">{strength.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900">
                {strength.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {strength.description}
              </p>
              <div className="space-y-2">
                {strength.examples.map((example, idx) => (
                  <div key={idx} className="flex items-start text-sm text-gray-700">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></span>
                    <span>{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Philosophy</h3>
            <p className="text-lg leading-relaxed opacity-90">
              "Great engineering leadership isn't just about technical decisions—it's about building systems and cultures 
              that enable teams to deliver exceptional value while growing in their careers. The best technical solutions 
              emerge when diverse perspectives collaborate within clear frameworks toward shared business outcomes."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};