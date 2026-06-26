import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-56px)] flex items-center px-6 md:px-8 py-16 md:py-0">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-foreground leading-tight">
                Manivel Mughilan
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold">
                AI/ML Engineer
              </p>
            </div>

            <p className="text-base md:text-lg text-foreground-secondary leading-relaxed max-w-lg">
              I build end-to-end AI systems, from data capture to hardware deployment. Passionate about shipping intelligent products that create real-world impact through machine learning and automation.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm text-foreground-secondary">Available for internships & collaborations</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-accent transition-colors inline-flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-foreground-secondary text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors w-full sm:w-auto text-center"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-8">
              <a
                href="https://github.com/simplystunning99087"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-primary transition-colors"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/manivel-mughilan-6bb65036a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-primary transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:manimeets09@gmail.com"
                className="text-foreground-secondary hover:text-primary transition-colors"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden md:flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-sm">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent-secondary/20 rounded-3xl blur-2xl opacity-50"></div>
              
              {/* Main box */}
              <div className="relative bg-background-secondary border border-secondary rounded-2xl p-8 space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">Expertise</p>
                  <p className="text-foreground text-sm leading-relaxed">Building intelligent systems that bridge software and hardware</p>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-secondary">
                  <div className="space-y-1">
                    <p className="text-xs text-foreground-secondary font-semibold">Focus Areas</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-secondary rounded text-xs text-foreground-secondary">Machine Learning</span>
                      <span className="px-2 py-1 bg-secondary rounded text-xs text-foreground-secondary">Computer Vision</span>
                      <span className="px-2 py-1 bg-secondary rounded text-xs text-foreground-secondary">Embedded AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
