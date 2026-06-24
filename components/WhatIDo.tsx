export default function WhatIDo() {
  const categories = [
    {
      title: "Languages & Frontend",
      skills: [
        "Building responsive and scalable web applications using modern React and Next.js frameworks",
        "Proficient in JavaScript/TypeScript for frontend development with focus on user experience",
        "Creating interactive UIs with HTML5, CSS, and Tailwind CSS for pixel-perfect designs",
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        "Building scalable backend systems with Python and modern web frameworks",
        "Database design and optimization with SQL (PostgreSQL, MySQL) and NoSQL solutions",
        "API development and cloud-based database solutions like Supabase",
      ],
    },
    {
      title: "AI & Data Science",
      skills: [
        "Building ML pipelines and integrating AI systems into real-world applications",
        "Experience with RAG systems, vector databases, and LLM integration",
        "Data analysis and visualization with Python scientific stack",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "Deploying applications on modern cloud platforms like Vercel, Netlify, and Railway",
        "Containerization with Docker for consistent deployment environments",
        "CI/CD automation and infrastructure management",
      ],
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
          What I Do?
        </h2>
        <p className="text-lg text-secondary mb-20 max-w-2xl">
          Specializing in end-to-end solutions that bridge AI, full-stack development, and product delivery.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex gap-3">
                    <span className="text-accent font-bold flex-shrink-0">⚡</span>
                    <p className="text-secondary leading-relaxed">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
