import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <div className="space-y-10">
          {/* Name & Title */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary-light bg-primary/10 px-4 py-2 rounded-full">
                Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-foreground leading-tight">
              Manivel<br />Mughilan
            </h1>
            <p className="text-2xl md:text-3xl bg-gradient-to-r from-primary-light via-accent-light to-primary-light bg-clip-text text-transparent font-semibold">
              AI/ML Engineer & Full-Stack Developer
            </p>
          </div>

          {/* Bio */}
          <p className="text-lg text-foreground-secondary max-w-2xl leading-relaxed">
            Second-year B.Tech student building end-to-end AI systems, from data capture to hardware deployment. Passionate about shipping products that create real-world impact through machine learning and intelligent automation.
          </p>

          {/* Location & Status */}
          <div className="flex flex-col md:flex-row gap-6 text-foreground-secondary text-sm">
            <div className="flex items-center gap-2">
              <span className="text-accent-light text-lg">📍</span>
              <span>Hosur, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-light rounded-full"></span>
              <span>Available for internships</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 pt-6">
            <a
              href="#projects"
              className="group px-8 py-4 bg-primary hover:bg-primary-light text-foreground font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-primary/30 hover:border-primary-light text-foreground font-semibold rounded-xl hover:bg-primary/5 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-8 border-t border-primary/10">
            <a
              href="https://github.com/simplystunning99087"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-foreground-secondary hover:text-accent-light hover:bg-primary/10 rounded-lg transition-all duration-300"
              title="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/manivel-mughilan-6bb65036a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-foreground-secondary hover:text-accent-light hover:bg-primary/10 rounded-lg transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:manimeets09@gmail.com"
              className="p-3 text-foreground-secondary hover:text-accent-light hover:bg-primary/10 rounded-lg transition-all duration-300"
              title="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://leetcode.com/u/ManCreateCodeDevelop/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-foreground-secondary hover:text-accent-light hover:bg-primary/10 rounded-lg transition-all duration-300"
              title="LeetCode"
            >
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
