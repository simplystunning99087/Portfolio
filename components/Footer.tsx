import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/10 bg-background-secondary/30 backdrop-blur-sm py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
              Manivel Mughilan
            </h3>
            <p className="text-foreground-secondary text-sm leading-relaxed">
              AI/ML Engineer building intelligent systems that bridge software and hardware.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-foreground-secondary hover:text-primary-light transition-colors text-sm flex items-center gap-1 group"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-foreground-secondary hover:text-primary-light transition-colors text-sm flex items-center gap-1 group"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-foreground-secondary hover:text-primary-light transition-colors text-sm flex items-center gap-1 group"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wide">External</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/simplystunning99087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-secondary hover:text-primary-light transition-colors text-sm flex items-center gap-2 group"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/manivel-mughilan-6bb65036a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-secondary hover:text-primary-light transition-colors text-sm flex items-center gap-2 group"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/u/ManCreateCodeDevelop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-secondary hover:text-primary-light transition-colors text-sm flex items-center gap-2 group"
                >
                  <ExternalLink size={16} />
                  LeetCode
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wide">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/simplystunning99087"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-foreground-secondary hover:text-primary-light transition-all duration-300"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/manivel-mughilan-6bb65036a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-foreground-secondary hover:text-primary-light transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:manimeets09@gmail.com"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-foreground-secondary hover:text-primary-light transition-all duration-300"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-foreground-secondary text-sm">
            <p>© {currentYear} Manivel Mughilan. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Crafted with <Heart size={16} className="text-accent-light" fill="currentColor" /> for intelligent systems.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
