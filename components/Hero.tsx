import Link from "next/link";
import { Github, Linkedin, Mail, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-cyan-500/10 pointer-events-none" />
      
      {/* Animated grid pattern background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,254,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,254,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      <div className="relative max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/50 backdrop-blur-sm w-fit hover:bg-cyan-500/30 hover:border-cyan-300/70 transition-all duration-300">
              <Sparkles size={16} className="text-cyan-300 neon-text" />
              <span className="text-sm font-medium text-cyan-200">Available for Internships</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
                Manivel <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 animate-pulse">Mughilan</span>
              </h1>
              <p className="text-xl md:text-2xl text-secondary font-light">
                AI/ML Engineer & Full-Stack Developer
              </p>
            </div>

            {/* Bio */}
            <p className="text-lg text-secondary leading-relaxed max-w-md">
              Building intelligent systems that bridge software and hardware. Specializing in end-to-end AI pipelines, computer vision, and production-ready solutions.
            </p>

            {/* Location & Status */}
            <div className="flex flex-col gap-3 text-secondary text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Hosur, Tamil Nadu
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                VIT Chennai &bull; B.Tech (CGPA: 8.93)
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="group px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group px-6 py-3 border border-cyan-400/50 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400/10 hover:border-cyan-300/80 hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 backdrop-blur-sm"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-8 border-t border-secondary/20">
              <a
                href="https://github.com/simplystunning99087"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/50 text-secondary hover:text-cyan-400 hover:bg-muted transition-all duration-300"
                title="GitHub"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/manivel-mughilan-6bb65036a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/50 text-secondary hover:text-blue-400 hover:bg-muted transition-all duration-300"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:manimeets09@gmail.com"
                className="p-2 rounded-lg bg-muted/50 text-secondary hover:text-cyan-400 hover:bg-muted transition-all duration-300"
                title="Email"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="relative float">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-cyan-400/10 to-purple-500/10 border border-cyan-400/30 rounded-2xl p-8 space-y-6 backdrop-blur-xl hover:border-cyan-300/50 transition-all duration-300">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">Expertise</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">▪</span>
                    <span className="text-foreground">Machine Learning & AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">▪</span>
                    <span className="text-foreground">Computer Vision</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">▪</span>
                    <span className="text-foreground">Full-Stack Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">▪</span>
                    <span className="text-foreground">Embedded Systems</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-cyan-400/20 pt-6 space-y-3">
                <div className="space-y-1">
                  <p className="text-xs text-cyan-300 uppercase">Featured Achievement</p>
                  <p className="text-sm text-foreground">2nd Place in PYTHONIX Hackathon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
