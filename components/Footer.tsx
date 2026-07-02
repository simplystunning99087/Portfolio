import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-secondary/20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 pointer-events-none" />
      
      <div className="relative py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center font-bold text-background text-sm">
                  M
                </div>
                <span className="font-bold text-foreground">Manivel</span>
              </div>
              <div className="space-y-2">
                <p className="text-secondary text-sm">
                  AI/ML Engineer & Full-Stack Developer
                </p>
                <p className="text-secondary text-sm">
                  Building intelligent systems.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="text-foreground font-semibold uppercase text-xs tracking-wider">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-cyan-300 transition-colors text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-secondary hover:text-cyan-300 transition-colors text-sm"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-secondary hover:text-cyan-300 transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div className="space-y-4">
              <h4 className="text-foreground font-semibold uppercase text-xs tracking-wider">Community</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/simplystunning99087"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-cyan-300 transition-colors text-sm"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/manivel-mughilan-6bb65036a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-cyan-300 transition-colors text-sm"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://leetcode.com/u/ManCreateCodeDevelop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-cyan-300 transition-colors text-sm"
                  >
                    LeetCode
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-foreground font-semibold uppercase text-xs tracking-wider">Connect</h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/simplystunning99087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/50 text-secondary hover:text-cyan-300 hover:bg-muted transition-all duration-300"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/manivel-mughilan-6bb65036a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/50 text-secondary hover:text-blue-400 hover:bg-muted transition-all duration-300"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:manimeets09@gmail.com"
                  className="p-2 rounded-lg bg-muted/50 text-secondary hover:text-cyan-300 hover:bg-muted transition-all duration-300"
                  title="Email"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://leetcode.com/u/ManCreateCodeDevelop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/50 text-secondary hover:text-cyan-300 hover:bg-muted transition-all duration-300"
                  title="LeetCode"
                  aria-label="LeetCode"
                >
                  <FileText size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary/20 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-secondary text-xs">
              <p>© {currentYear} Manivel Mughilan. All rights reserved.</p>
              <p>Crafted with passion for building intelligent systems.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
