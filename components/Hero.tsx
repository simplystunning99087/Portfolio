import Link from "next/link";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Name & Title */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
              Manivel Mughilan
            </h1>
            <p className="text-xl md:text-2xl text-accent font-light">
              AI/ML Engineer & Full-Stack Developer
            </p>
          </div>

          {/* Bio */}
          <p className="text-lg text-secondary max-w-2xl leading-relaxed">
            Second-year B.Tech student in Cyber Physical Systems at VIT Chennai. I build end-to-end AI systems, from data capture to hardware deployment. Passionate about shipping products that create real-world impact through machine learning and intelligent automation.
          </p>

          {/* Location & Status */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-secondary text-sm">
            <div>
              <span className="text-accent">📍</span> Hosur, Tamil Nadu
            </div>
            <div>
              <span className="text-accent">✓</span> Available for virtual & on-site internships
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-accent transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-secondary text-foreground font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-8 border-t border-secondary">
            <a
              href="https://github.com/simplystunning99087"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
              title="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/manivel-mughilan-6bb65036a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:manimeets09@gmail.com"
              className="text-secondary hover:text-accent transition-colors"
              title="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://leetcode.com/u/ManCreateCodeDevelop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
              title="LeetCode"
            >
              <FileText size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
