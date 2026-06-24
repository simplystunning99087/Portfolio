import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

interface ProjectProps {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  highlights: string[];
  category: string;
  links?: {
    github?: string;
    demo?: string;
  };
}

function ProjectCard({ title, date, description, technologies, highlights, category, links }: ProjectProps) {
  return (
    <div className="group border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-primary/20 text-accent text-xs font-semibold rounded-full">
                {category}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="text-secondary text-sm">{date}</p>
          </div>
          <div className="text-accent opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300">
            <ArrowUpRight size={24} />
          </div>
        </div>

        <p className="text-secondary mb-6 leading-relaxed">{description}</p>

        {/* Highlights */}
        <div className="mb-6 space-y-2">
          {highlights.map((highlight, idx) => (
            <div key={idx} className="flex gap-3 text-secondary text-sm">
              <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-accent text-xs rounded-full border border-accent/30 hover:border-accent hover:bg-accent/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {links && (
          <div className="flex gap-4 pt-6 border-t border-border">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-accent rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Github size={18} />
                <span>Code</span>
              </a>
            )}
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent hover:text-background transition-all duration-200"
              >
                <ExternalLink size={18} />
                <span>View</span>
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
        "Enterprise-grade RAG triage agent that intelligently routes support tickets by ingesting policies and using vector search with advanced LLM reasoning.",
      technologies: ["Python", "Chroma DB", "Groq API", "RAG", "LLaMA 70B", "JSON"],
      highlights: [
        "Ingests policies for Visa, HackerRank, and Claude with semantic vector search",
        "Routes support tickets using Chroma DB vector embeddings and Groq's LLaMA 70B model",
        "Implemented strict multi-domain fencing to prevent hallucinations and out-of-scope answers",
        "Deterministic JSON parsing with robust API rate-limit failsafe mechanisms",
        "Fully automated end-to-end AI pipeline handling complex multi-step ticket routing logic",
      ],
      links: {
        github: "https://github.com/simplystunning99087",
      },
    },
    {
      title: "Helmet & Seatbelt Compliance Classifier",
      date: "Academic Project",
      category: "Edge AI",
      description:
        "Production-ready edge AI pipeline for real-time traffic safety violation detection with embedded hardware integration and automated alerts.",
      technologies: ["Python", "OpenCV", "Scikit-learn", "ESP32-CAM", "ESP32", "Embedded ML"],
      highlights: [
        "Trained binary classification model achieving ~90% accuracy on 500+ test frames with precision-recall optimization",
        "Integrated ESP32 microcontroller to trigger audio-visual alerts on violation detection",
        "Real-time video processing at ~30 FPS directly on edge device with complete end-to-end pipeline",
        "Automated screenshot capture of violations as evidence for compliance tracking",
        "Complete data capture → model inference → hardware response pipeline on embedded system",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-secondary">
            Showcasing my best work in AI/ML, edge computing, and full-stack development.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        <div className="mt-16 p-8 border border-border rounded-lg bg-primary/5 text-center">
          <p className="text-secondary mb-6">Interested in more projects and contributions?</p>
          <a
            href="https://github.com/simplystunning99087"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-all duration-200 hover:shadow-lg hover:shadow-primary/50"
          >
            <Github size={20} />
            <span>View My GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
