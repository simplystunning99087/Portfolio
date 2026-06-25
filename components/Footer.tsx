import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 md:px-8 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <div className="mb-16 p-8 rounded-lg bg-primary text-white">
          <h3 className="text-2xl font-bold mb-3">
            Let&apos;s Create Something Amazing
          </h3>
          <p className="mb-6 opacity-90">
            Ready to collaborate on your next project? Let&apos;s connect.
          </p>
          <a
            href="mailto:manimeets09@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-accent hover:text-white transition-all duration-200"
          >
            <Mail size={18} />
            <span>Get in Touch</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Manivel Mughilan
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              AI/ML Engineer and full-stack developer building intelligent systems with real-world impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  Home
                </a>
              </li>
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
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <a
                href="https://github.com/simplystunning99087"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors flex items-center gap-2 text-sm"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/manivel-mughilan-6bb65036a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors flex items-center gap-2 text-sm"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://leetcode.com/u/ManCreateCodeDevelop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors flex items-center gap-2 text-sm"
              >
                <FileText size={16} />
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-secondary text-sm gap-4">
            <p>© {currentYear} Manivel Mughilan. All rights reserved.</p>
            <p>Built with Next.js • Designed for impact</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
