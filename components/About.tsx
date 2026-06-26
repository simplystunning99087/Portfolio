export default function About() {
  const interests = [
    {
      title: "End-to-end AI Systems",
      description: "From data collection and preprocessing to model deployment on edge devices"
    },
    {
      title: "Computer Vision",
      description: "Real-time object detection, classification, and embedded ML on microcontrollers"
    },
    {
      title: "LLM & RAG Systems",
      description: "Building intelligent information retrieval and agent systems"
    },
    {
      title: "Scalable Web Apps",
      description: "Creating responsive, production-ready solutions"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-background-secondary/30 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h2>
          <p className="text-foreground-secondary text-lg">Building bridges between software and hardware</p>
        </div>

        <div className="space-y-12">
          {/* Main Bio */}
          <div className="space-y-6 text-foreground-secondary leading-relaxed">
            <p className="text-lg">
              I&apos;m a second-year B.Tech student studying Cyber Physical Systems at VIT Chennai (CGPA: 8.93/10). My passion lies in building intelligent systems that bridge the gap between software and hardware, with a strong focus on machine learning, computer vision, and autonomous AI agents.
            </p>

            <p className="text-lg">
              My journey spans across AI/ML pipelines, full-stack web development, embedded systems, and DevOps. I&apos;m particularly excited about:
            </p>
          </div>

          {/* Interest Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {interests.map((interest, idx) => (
              <div key={idx} className="group p-6 rounded-xl border border-primary/20 hover:border-primary/50 bg-gradient-to-br from-background-secondary/40 to-background/40 hover:from-background-secondary/80 hover:to-background/60 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <span className="text-accent-light text-2xl mt-1">✦</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent-light transition-colors">
                      {interest.title}
                    </h3>
                    <p className="text-foreground-secondary text-sm leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Sections */}
          <div className="space-y-6 text-foreground-secondary leading-relaxed">
            <p className="text-lg">
              I believe in rapid prototyping and shipping products quickly. I&apos;ve delivered enterprise-grade AI systems in sprint timeframes, participated in multiple hackathons, and contributed to open-source initiatives. Currently, I&apos;m seeking internship opportunities to apply these skills in a real-world product environment.
            </p>

            <div className="p-6 rounded-xl border border-accent/20 bg-accent/5 backdrop-blur-sm">
              <p className="text-lg">
                <span className="text-accent-light font-semibold">🏆 Academic Recognition:</span> 2nd Place in PYTHONIX (24-hour Hackathon), participation in Shaastra IIT Madras, and multiple technical certifications in AI, ML, and Data Science.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
