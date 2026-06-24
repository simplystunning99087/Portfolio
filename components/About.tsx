export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
          About Me
        </h2>

        <div className="space-y-8 text-secondary leading-relaxed">
          <p className="text-lg">
            I&apos;m a second-year B.Tech student studying Cyber Physical Systems at VIT Chennai (CGPA: 8.93/10). My passion lies in building intelligent systems that bridge the gap between software and hardware, with a strong focus on machine learning, computer vision, and autonomous AI agents.
          </p>

          <p className="text-lg">
            My journey spans across AI/ML pipelines, full-stack web development, embedded systems, and DevOps. I&apos;m particularly excited about:
          </p>

          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-accent font-bold text-xl flex-shrink-0">→</span>
              <span className="text-base"><strong className="text-foreground">End-to-end AI Systems:</strong> From data collection and preprocessing to model deployment on edge devices</span>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-bold text-xl flex-shrink-0">→</span>
              <span className="text-base"><strong className="text-foreground">Computer Vision:</strong> Real-time object detection, classification, and embedded ML on microcontrollers</span>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-bold text-xl flex-shrink-0">→</span>
              <span className="text-base"><strong className="text-foreground">LLM & RAG Systems:</strong> Building intelligent information retrieval and agent systems</span>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-bold text-xl flex-shrink-0">→</span>
              <span className="text-base"><strong className="text-foreground">Scalable Web Applications:</strong> Creating responsive, production-ready solutions</span>
            </li>
          </ul>

          <p className="text-lg pt-4">
            I believe in rapid prototyping and shipping products quickly. I&apos;ve delivered enterprise-grade AI systems in sprint timeframes, participated in multiple hackathons, and contributed to open-source initiatives. Currently, I&apos;m seeking internship opportunities to apply these skills in a real-world product environment.
          </p>

          <p className="text-lg">
            <strong className="text-foreground">Academic Recognition:</strong> 2nd Place in PYTHONIX (24-hour Hackathon), participation in Shaastra IIT Madras, and multiple technical certifications in AI, ML, and Data Science.
          </p>
        </div>
      </div>
    </section>
  );
}
