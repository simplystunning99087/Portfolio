import { ExternalLink, Github, Star } from "lucide-react";

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
    <div className="group relative border border-primary/20 hover:border-primary/50 rounded-2xl p-8 bg-gradient-to-br from-background-secondary/50 to-background/50 hover:from-background-secondary/80 hover:to-background/80 transition-all duration-300 backdrop-blur-sm overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-1">{title}</h3>
          <p className="text-primary-light text-sm">{date}</p>
        </div>
        <Star size={24} className="text-accent-light opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" />
      </div>

      <p className="text-foreground-secondary mb-6 leading-relaxed">{description}</p>

      {/* Highlights */}
      <div className="mb-6 space-y-3">
        {highlights.slice(0, 3).map((highlight, idx) => (
          <div key={idx} className="flex gap-3 text-foreground-secondary text-sm">
            <span className="text-accent-light text-lg leading-none">→</span>
            <span>{highlight}</span>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-primary/10 hover:bg-primary/20 text-primary-light text-xs rounded-lg border border-primary/30 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {links && (
        <div className="flex gap-4 pt-4 border-t border-primary/10">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-light hover:text-accent-light transition-colors group/link"
            >
              <Github size={18} />
              <span className="relative">GitHub
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-light group-hover/link:w-full transition-all duration-300"></span>
              </span>
            </a>
          )}
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-light hover:text-accent-light transition-colors group/link"
            >
              <ExternalLink size={18} />
              <span className="relative">View Project
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-light group-hover/link:w-full transition-all duration-300"></span>
              </span>
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
    <section id="projects" className="py-20 px-4 md:px-8 bg-background relative">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-foreground-secondary text-lg">Building intelligent systems that make an impact</p>
        </div>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground-secondary mb-4">Explore more on my GitHub</p>
          <a
            href="https://github.com/simplystunning99087"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary/30 hover:border-primary-light text-foreground-secondary hover:text-accent-light rounded-xl transition-all duration-300 group hover:bg-primary/5"
          >
            <Github size={20} />
            <span>View All Projects</span>
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
