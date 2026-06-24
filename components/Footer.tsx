import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 md:px-8 border-t border-muted bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              Manivel Mughilan
            </h3>
            <p className="text-secondary text-sm">
              AI/ML Engineer & Full-Stack Developer
            </p>
            <p className="text-secondary text-sm mt-2">Building intelligent systems.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#projects"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/simplystunning99087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/simplystunning99087"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/manivel-mughilan-6bb65036a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:manimeets09@gmail.com"
                className="text-secondary hover:text-primary transition-colors"
                title="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://leetcode.com/u/ManCreateCodeDevelop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                title="LeetCode"
              >
                <FileText size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-muted pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-secondary text-sm">
            <p>© {currentYear} Manivel Mughilan. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
              Crafted with passion for building intelligent systems.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
