interface SkillCategoryProps {
  category: string;
  skills: string[];
}

function SkillCategory({ category, skills }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-primary mb-4">{category}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-muted text-foreground rounded-lg border border-accent/20 text-sm hover:border-accent hover:bg-accent/10 hover:text-primary transition-all"
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
    <section className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
          Skills & Expertise
        </h2>
        <p className="text-secondary text-lg mb-16">
          A comprehensive set of technologies and domains where I bring practical experience.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <SkillCategory key={idx} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
