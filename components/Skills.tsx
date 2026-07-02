interface SkillCategoryProps {
  category: string;
  skills: string[];
}

function SkillCategory({ category, skills }: SkillCategoryProps) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">{category}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-muted/50 text-foreground rounded-lg border border-secondary/20 text-xs font-medium hover:border-cyan-400/50 hover:bg-muted hover:text-cyan-300 transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "C", "C++", "SQL", "HTML", "JavaScript", "TypeScript"],
    },
    {
      category: "ML & AI",
      skills: ["Scikit-learn", "Pandas", "OpenCV", "NumPy", "Chroma DB", "LLaMA", "RAG Systems", "LLM Pipelines"],
    },
    {
      category: "Web Development",
      skills: ["React", "Next.js", "Tailwind CSS", "Node.js", "Streamlit"],
    },
    {
      category: "Tools & Hardware",
      skills: ["Git", "Linux", "ESP32", "ESP32-CAM", "MATLAB", "Jupyter"],
    },
    {
      category: "Domains",
      skills: ["Machine Learning", "Computer Vision", "Embedded ML", "Cybersecurity", "DevOps", "Edge AI"],
    },
    {
      category: "Soft Skills",
      skills: ["Problem-solving", "Rapid Prototyping", "Teamwork", "Communication", "Hackathon Experience"],
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 w-fit mb-6">
            <span className="text-xs font-medium text-cyan-300">SKILLS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-secondary text-lg max-w-2xl">
            A comprehensive toolkit spanning AI, full-stack development, embedded systems, and modern DevOps practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <SkillCategory key={idx} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
