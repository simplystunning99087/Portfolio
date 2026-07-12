'use client';

import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export default function FooterComponent() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-cyan-400/30 py-12 px-4 md:px-8 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="font-bold text-foreground text-lg">Manivel Mughilan</h3>
            <p className="text-secondary text-sm">AI/ML Engineer & Full-Stack Developer</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground text-sm uppercase">Quick Links</h4>
            <nav className="flex flex-col gap-1">
              <a href="#projects" className="text-secondary hover:text-cyan-300 text-sm transition-colors">Projects</a>
              <a href="#skills" className="text-secondary hover:text-cyan-300 text-sm transition-colors">Skills</a>
              <a href="#contact" className="text-secondary hover:text-cyan-300 text-sm transition-colors">Contact</a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground text-sm uppercase">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/simplystunning99087"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-cyan-400/20 text-cyan-300 hover:text-cyan-200 hover:bg-cyan-400/30 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/manivel-mughilan-6bb65036a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-blue-400/20 text-blue-300 hover:text-blue-200 hover:bg-blue-400/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-cyan-400/20 text-cyan-300 hover:text-cyan-200 hover:bg-cyan-400/30 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-400/20 pt-8 flex justify-between items-center">
          <p className="text-secondary text-xs md:text-sm">
            © {currentYear} Manivel Mughilan. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-cyan-400/20 text-cyan-300 hover:bg-cyan-400/30 border border-cyan-400/50 transition-all text-sm"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
