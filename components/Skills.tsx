interface SkillCategoryProps {
  category: string;
  skills: string[];
  icon?: React.ReactNode;
}

function SkillCategory({ category, skills, icon }: SkillCategoryProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        {icon && <div className="text-accent">{icon}</div>}
        <h3 className="text-lg font-semibold text-foreground">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-primary/10 text-foreground rounded-lg border border-primary/30 text-sm hover:border-accent hover:bg-accent/10 hover:text-accent transition-all duration-200 cursor-default"
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
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-lg text-secondary">
            A diverse toolkit spanning AI/ML, software engineering, embedded systems, and hardware integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <SkillCategory key={idx} {...category} />
          ))}
        </div>

        <div className="mt-16 p-8 border border-border rounded-lg bg-primary/5">
          <p className="text-foreground text-center">
            <span className="font-semibold text-accent">Always Learning:</span> I stay updated with latest developments in AI/ML, emerging technologies, and best practices through continuous learning and hands-on experimentation.
          </p>
        </div>
      </div>
    </section>
  );
}
