import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  highlights: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}

function ProjectCard({ title, date, description, technologies, highlights, links }: ProjectProps) {
  return (
    <div className="border border-secondary rounded-lg p-8 hover:border-accent transition-colors duration-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-1">{title}</h3>
          <p className="text-accent text-sm">{date}</p>
        </div>
      </div>

      <p className="text-secondary mb-6 leading-relaxed">{description}</p>

      {/* Highlights */}
      <div className="mb-6 space-y-2">
        {highlights.map((highlight, idx) => (
          <div key={idx} className="flex gap-2 text-secondary">
            <span className="text-accent">•</span>
            <span>{highlight}</span>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-primary/10 text-accent text-xs rounded-full border border-accent/30"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {links && (
        <div className="flex gap-4 pt-4 border-t border-secondary">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-foreground transition-colors"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          )}
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-foreground transition-colors"
            >
              <ExternalLink size={18} />
              <span>View Project</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      title: "RAG Triage Agent",
      date: "May 2026 • 7-hour Sprint",
      description:
        "Enterprise-grade RAG triage agent that ingests policies and routes support tickets using advanced LLM capabilities.",
      technologies: ["Python", "Chroma DB", "Groq API", "RAG", "LLaMA 70B", "JSON", "API Integration"],
      highlights: [
        "Ingests policies for Visa, HackerRank, and Claude with vector search",
        "Routes support tickets using Chroma DB vector search and Groq's LLaMA 70B model",
        "Implemented strict multi-domain fencing to prevent hallucinations",
        "Deterministic JSON parsing and robust API rate-limit failsafe",
        "Fully automated AI pipeline handling complex ticket routing logic",
      ],
      links: {
        github: "https://github.com/simplystunning99087",
      },
    },
    {
      title: "Helmet & Seatbelt Compliance Classifier",
      date: "Academic Project",
      description:
        "End-to-end edge AI pipeline for real-time helmet and seatbelt violation detection on embedded hardware.",
      technologies: ["Python", "OpenCV", "Scikit-learn", "ESP32-CAM", "ESP32", "Embedded ML"],
      highlights: [
        "Trained binary classification model detecting helmet/seatbelt violations from ESP32-CAM live video",
        "Achieved ~90% accuracy on 500+ test frames with precision-recall evaluation on imbalanced data",
        "Integrated ESP32 microcontroller to trigger audio-visual alerts on violations",
        "Auto-capture of violation screenshots as evidence",
        "Processing at ~30 FPS on edge device with complete data → inference → response pipeline",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
          Featured Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-secondary mb-4">More projects on my GitHub</p>
          <a
            href="https://github.com/simplystunning99087"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-background transition-colors"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
}
