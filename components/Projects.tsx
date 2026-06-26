import { ArrowUpRight, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}

function ProjectCard({ title, description, technologies, highlights, links }: ProjectProps) {
  return (
    <div className="group bg-background-secondary border border-secondary rounded-lg p-6 md:p-8 hover:border-primary transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>

        <p className="text-sm text-foreground-secondary leading-relaxed">
          {description}
        </p>

        <div className="space-y-2 pt-2">
          {highlights.slice(0, 2).map((highlight, idx) => (
            <div key={idx} className="flex gap-2 text-sm text-foreground-secondary">
              <span className="text-primary flex-shrink-0">→</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-3">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs bg-secondary text-foreground-secondary rounded border border-secondary hover:border-primary/30 transition-colors"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2.5 py-1 text-xs text-foreground-secondary">
              +{technologies.length - 4}
            </span>
          )}
        </div>

        {links && (
          <div className="flex gap-4 pt-4">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-primary transition-colors inline-flex items-center gap-1 text-sm"
              >
                <Github size={16} />
                GitHub
              </a>
            )}
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-primary transition-colors inline-flex items-center gap-1 text-sm"
              >
                Demo
                <ArrowUpRight size={16} />
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
      description: "Enterprise-grade RAG triage agent that ingests policies and routes support tickets using advanced LLM capabilities.",
      technologies: ["Python", "Chroma DB", "Groq API", "RAG", "LLaMA 70B", "JSON", "API Integration"],
      highlights: [
        "Ingests policies with vector search and routes tickets using LLaMA 70B",
        "Implemented multi-domain fencing to prevent hallucinations",
      ],
      links: {
        github: "https://github.com/simplystunning99087",
      },
    },
    {
      title: "Helmet & Seatbelt Compliance Classifier",
      description: "End-to-end edge AI pipeline for real-time helmet and seatbelt violation detection on embedded hardware.",
      technologies: ["Python", "OpenCV", "Scikit-learn", "ESP32-CAM", "Embedded ML"],
      highlights: [
        "Achieved ~90% accuracy on 500+ test frames with real-time processing at 30 FPS",
        "Integrated ESP32 microcontroller to trigger audio-visual alerts",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Featured Work
          </h2>
          <p className="text-foreground-secondary text-base md:text-lg">
            Recent projects showcasing expertise in AI, machine learning, and full-stack development.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <a
            href="https://github.com/simplystunning99087"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-foreground-secondary text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors group"
          >
            View All Projects
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
