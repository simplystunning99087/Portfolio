import { ExternalLink, Github, ArrowRight } from "lucide-react";

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
    <div className="group relative bg-gradient-to-br from-muted/60 to-muted/30 border border-secondary/20 rounded-xl p-6 md:p-8 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10">
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />
      
      <div className="relative space-y-4">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-2 flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-cyan-300 transition-colors">{title}</h3>
            <p className="text-cyan-400/70 text-sm font-medium">{date}</p>
          </div>
        </div>

        <p className="text-secondary leading-relaxed">{description}</p>

        {/* Highlights */}
        <div className="space-y-2">
          {highlights.slice(0, 3).map((highlight, idx) => (
            <div key={idx} className="flex gap-3 text-secondary text-sm">
              <span className="text-blue-400 flex-shrink-0 mt-0.5">→</span>
              <span>{highlight}</span>
            </div>
          ))}
          {highlights.length > 3 && (
            <p className="text-secondary text-sm italic">+ {highlights.length - 3} more highlights</p>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full border border-blue-400/30 hover:bg-blue-500/20 transition-colors"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 5 && (
            <span className="px-3 py-1 text-secondary text-xs">+{technologies.length - 5} more</span>
          )}
        </div>

        {/* Links */}
        {links && (
          <div className="flex gap-3 pt-4 border-t border-secondary/20">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            )}
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
              >
                <ExternalLink size={16} />
                <span>View Project</span>
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 w-fit mb-6">
            <span className="text-xs font-medium text-blue-300">PORTFOLIO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-secondary text-lg max-w-2xl">
            Building end-to-end AI systems and intelligent applications that solve real-world problems.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/simplystunning99087"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group"
          >
            <Github size={20} />
            <span>Explore All Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
