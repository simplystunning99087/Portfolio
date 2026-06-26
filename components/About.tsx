export default function About() {
  const interests = [
    "End-to-end AI Systems",
    "Computer Vision",
    "LLM & RAG",
    "Embedded ML",
    "Full-Stack Dev",
    "DevOps"
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            About
          </h2>
          <p className="text-foreground-secondary text-base md:text-lg">
            Building intelligent systems that bridge software and hardware
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-6 text-foreground-secondary leading-relaxed">
            <p>
              Second-year B.Tech student at VIT Chennai studying Cyber Physical Systems (CGPA: 8.93/10). Passionate about building intelligent systems with a focus on machine learning, computer vision, and autonomous AI agents.
            </p>

            <p>
              Experienced in AI/ML pipelines, full-stack development, embedded systems, and DevOps. I believe in rapid prototyping and shipping products quickly. Delivered enterprise-grade AI systems in sprint timeframes and participated in multiple hackathons.
            </p>

            <p>
              Currently seeking internship opportunities to apply these skills in a real-world product environment.
            </p>
          </div>

          {/* Expertise */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 bg-secondary border border-secondary text-sm text-foreground-secondary rounded hover:border-primary hover:text-foreground transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-secondary">
              <h3 className="text-lg font-semibold text-foreground">Achievements</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span>2nd Place PYTHONIX Hackathon</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span>Shaastra IIT Madras</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span>AI/ML Certifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
