import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20 pb-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
                Manivel Mughilan
              </h1>
              <p className="text-2xl md:text-3xl text-primary font-semibold">
                AI/ML Engineer & Full-Stack Developer
              </p>
            </div>

            {/* Bio */}
            <p className="text-lg text-secondary leading-relaxed max-w-lg">
              Second-year B.Tech student in Cyber Physical Systems at VIT Chennai. Passionate about building end-to-end AI systems, from data capture to hardware deployment, creating intelligent solutions that make real-world impact.
            </p>

            {/* Location & Availability */}
            <div className="space-y-2 text-sm text-secondary">
              <p>📍 Hosur, Tamil Nadu, India</p>
              <p className="text-green-600 font-medium">● Available for Internships</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-all duration-200 text-center hover:shadow-lg"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-200 text-center"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/simplystunning99087"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors transform hover:scale-110 duration-200"
                title="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/manivel-mughilan-6bb65036a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors transform hover:scale-110 duration-200"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:manimeets09@gmail.com"
                className="text-secondary hover:text-primary transition-colors transform hover:scale-110 duration-200"
                title="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://leetcode.com/u/ManCreateCodeDevelop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors transform hover:scale-110 duration-200"
                title="LeetCode"
              >
                <FileText size={24} />
              </a>
            </div>
          </div>

          {/* Right Column - Illustration Placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border-2 border-border flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-secondary text-sm">AI/ML Portfolio Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
