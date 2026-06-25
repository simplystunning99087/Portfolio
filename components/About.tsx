export default function About() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
          About Me
        </h2>

        <div className="space-y-6 text-secondary leading-relaxed">
          <p className="text-lg">
            I&apos;m a second-year B.Tech student studying Cyber Physical Systems at VIT Chennai (CGPA: 8.93/10). Passionate about building intelligent systems that bridge software and hardware, with expertise in machine learning, computer vision, and autonomous AI agents.
          </p>

          <p className="text-lg font-medium text-foreground">
            My core competencies span:
          </p>

          <ul className="space-y-3 text-base">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span><strong>End-to-end AI Systems:</strong> Data pipelines to edge device deployment</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span><strong>Computer Vision:</strong> Real-time detection and embedded ML on microcontrollers</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span><strong>LLM & RAG Systems:</strong> Intelligent information retrieval and agent systems</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span><strong>Full-Stack Development:</strong> Responsive, production-ready web applications</span>
            </li>
          </ul>

          <p className="text-lg pt-4">
            I excel at rapid prototyping and delivering enterprise-grade AI systems in sprint timeframes. Multiple hackathon wins and open-source contributions demonstrate my commitment to innovation. Actively seeking internship opportunities to apply these skills in real-world product environments.
          </p>

          <div className="bg-white border border-border rounded-lg p-6 mt-6">
            <p className="text-foreground font-medium mb-2">Recognition & Achievements:</p>
            <p className="text-secondary text-sm">2nd Place in PYTHONIX 24-hour Hackathon • Shaastra IIT Madras Participant • AI/ML/Data Science Certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
}
