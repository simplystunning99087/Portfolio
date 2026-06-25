import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  category: string;
  links?: {
    github?: string;
    demo?: string;
  };
}

function ProjectCard({ title, date, description, technologies, category, links }: ProjectProps) {
  return (
    <div className="group bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary">
      {/* Cover Image */}
      <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-b border-border group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
        <div className="text-center">
          <div className="text-4xl mb-2">{category === "AI/LLM" ? "🤖" : "⚙️"}</div>
          <p className="text-sm text-secondary">{category}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-secondary">{date}</p>
        </div>

        <p className="text-secondary text-sm leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2 py-1 bg-border text-secondary text-xs rounded font-medium">
              +{technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Links */}
        {links && (
          <div className="flex gap-3 pt-4 border-t border-border">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-accent transition-colors"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
            )}
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <ExternalLink size={16} />
                <span>Demo</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      title: "RAG Triage Agent",
      date: "May 2026 • 7-hour Sprint",
      category: "AI/LLM",
      description:
        "Enterprise-grade RAG system that intelligently routes support tickets using vector search and LLM reasoning with multi-domain fencing.",
      technologies: ["Python", "Chroma DB", "Groq API", "RAG", "LLaMA 70B", "JSON"],
      links: {
        github: "https://github.com/simplystunning99087",
      },
    },
    {
      title: "Helmet & Seatbelt Compliance Classifier",
      date: "Academic Project",
      category: "Edge AI",
      description:
        "Real-time traffic safety violation detection pipeline with ESP32 integration, achieving ~90% accuracy on embedded hardware.",
      technologies: ["Python", "OpenCV", "Scikit-learn", "ESP32-CAM", "ESP32", "Embedded ML"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-secondary">
            Showcasing my best work in AI/ML, edge computing, and full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-secondary mb-6">Explore more of my work</p>
          <a
            href="https://github.com/simplystunning99087"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-all duration-200"
          >
            <Github size={20} />
            <span>View My GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
