import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 md:px-8 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto">
        {/* CTA Section */}
        <div className="mb-16 p-8 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Let&apos;s Build Something Great Together
          </h3>
          <p className="text-secondary mb-6">
            I&apos;m always interested in hearing about new opportunities and collaborations.
          </p>
          <a
            href="mailto:manimeets09@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-all duration-200"
          >
            <Mail size={18} />
            <span>Get in Touch</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Manivel Mughilan
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              AI/ML Engineer & Full-Stack Developer passionate about building intelligent systems that create real-world impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span>→</span> Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-secondary hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span>→</span> Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-secondary hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span>→</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="https://github.com/simplystunning99087"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors flex items-center gap-2"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/manivel-mughilan-6bb65036a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors flex items-center gap-2"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://leetcode.com/u/ManCreateCodeDevelop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors flex items-center gap-2"
              >
                <FileText size={18} />
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-secondary text-sm gap-4">
            <p>© {currentYear} Manivel Mughilan. All rights reserved.</p>
            <p>
              Designed with attention to detail • Built with modern technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
