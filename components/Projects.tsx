'use client';

import { ExternalLink, Github, ArrowRight, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

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
  badge?: string;
}

function ProjectCard({ title, date, description, technologies, highlights, links, badge }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative bg-gradient-to-br from-cyan-400/10 to-purple-500/10 border border-cyan-400/30 rounded-xl p-6 md:p-8 hover:border-cyan-300/70 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-cyan-400/30 backdrop-blur-xl">
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
      
      <div className="relative space-y-4">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-cyan-300 transition-colors">{title}</h3>
              {badge && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-400/20 border border-amber-400/50 rounded-full text-amber-300 text-xs font-semibold">
                  <Trophy size={14} />
                  {badge}
                </span>
              )}
            </div>
            <p className="text-cyan-300/70 text-sm font-medium">{date}</p>
          </div>
        </div>

        <p className="text-secondary leading-relaxed">{description}</p>

        {/* Highlights */}
        <div className="space-y-2">
          {highlights.slice(0, 3).map((highlight, idx) => (
            <div key={idx} className="flex gap-3 text-secondary text-sm">
              <span className="text-cyan-400 flex-shrink-0 mt-0.5">→</span>
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
              className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-xs rounded-full border border-cyan-400/50 hover:bg-cyan-400/30 hover:border-cyan-300/70 transition-colors"
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
          <div className="flex gap-3 pt-4 border-t border-cyan-400/20">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 hover:drop-shadow-[0_0_8px_rgba(0,242,254,0.6)] transition-all text-sm font-medium"
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
                className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 hover:drop-shadow-[0_0_8px_rgba(0,242,254,0.6)] transition-all text-sm font-medium"
              >
                <ExternalLink size={16} />
                <span>View Project</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
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
      badge: "7-Hour Sprint Winner",
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
    <section id="projects" className="py-20 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-cyan-500/10 pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/20 border border-cyan-400/50 backdrop-blur-sm w-fit mb-6 hover:bg-cyan-400/30 transition-all">
            <span className="text-xs font-medium text-cyan-300">PORTFOLIO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-secondary text-lg max-w-2xl">
            Building end-to-end AI systems and intelligent applications that solve real-world problems.
          </p>
        </div>

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/simplystunning99087"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 group backdrop-blur-sm"
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
