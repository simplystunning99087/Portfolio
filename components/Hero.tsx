import Link from "next/link";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 bg-gradient-to-br from-background via-light to-background">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            {/* Name & Title */}
            <div className="space-y-3">
              <p className="text-accent font-light text-lg">
                Hello, I&apos;m
              </p>
              <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
                Manivel Mughilan
              </h1>
              <p className="text-2xl md:text-3xl text-secondary font-light">
                AI/ML Engineer & Full-Stack Developer
              </p>
            </div>

            {/* Bio */}
            <p className="text-base md:text-lg text-secondary leading-relaxed">
              A passionate individual who thrives to work on end-to-end products which develop sustainable and scalable AI/ML systems and technical solutions to create real-world impact.
            </p>

            {/* Location & Status */}
            <div className="flex flex-col gap-3 text-secondary text-sm">
              <div className="flex items-center gap-2">
                <span className="text-accent">📍</span>
                <span>Hosur, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>Available for virtual & on-site internships</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-accent transition-all duration-300 text-center shadow-lg hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-primary text-foreground font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-center"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-8 border-t border-muted">
              <a
                href="https://github.com/simplystunning99087"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted text-secondary hover:text-accent hover:bg-accent hover:bg-opacity-20 transition-all flex items-center justify-center"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/manivel-mughilan-6bb65036a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted text-secondary hover:text-accent hover:bg-accent hover:bg-opacity-20 transition-all flex items-center justify-center"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:manimeets09@gmail.com"
                className="w-10 h-10 rounded-full bg-muted text-secondary hover:text-accent hover:bg-accent hover:bg-opacity-20 transition-all flex items-center justify-center"
                title="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://leetcode.com/u/ManCreateCodeDevelop/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted text-secondary hover:text-accent hover:bg-accent hover:bg-opacity-20 transition-all flex items-center justify-center"
                title="LeetCode"
              >
                <FileText size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Illustration Placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-secondary font-light">Building AI-powered Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
