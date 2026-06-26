interface SkillCategoryProps {
  category: string;
  skills: string[];
}

function SkillCategory({ category, skills }: SkillCategoryProps) {
  return (
    <div className="p-6 rounded-xl border border-primary/20 hover:border-primary/50 bg-gradient-to-br from-background-secondary/40 to-background/40 hover:from-background-secondary/60 hover:to-background/50 transition-all duration-300 backdrop-blur-sm group">
      <h3 className="text-lg font-semibold text-primary-light mb-4 group-hover:text-accent-light transition-colors">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-primary/5 hover:bg-primary/15 text-foreground-secondary hover:text-primary-light rounded-lg border border-primary/20 hover:border-primary/50 text-sm transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
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
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-foreground-secondary text-lg">Technologies and domains I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {skillCategories.map((category, idx) => (
            <SkillCategory key={idx} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
