export default function Education() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
          Education & Achievements
        </h2>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Education</h3>
          <div className="space-y-4">
            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-all duration-200">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                B.Tech - Computer Science & Engineering
              </h4>
              <p className="text-primary font-medium text-sm mb-2">Cyber Physical Systems Specialization</p>
              <p className="text-secondary text-sm mb-1">Vellore Institute of Technology, Chennai</p>
              <p className="text-secondary text-sm">Jul 2025 – 2029 (Expected) • CGPA: 8.93/10</p>
            </div>

            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-all duration-200">
              <h4 className="text-lg font-semibold text-foreground mb-2">12th Standard</h4>
              <p className="text-secondary text-sm mb-1">Sishya School, Hosur</p>
              <p className="text-secondary text-sm">Apr 2023 – Apr 2025 • Grade: A+</p>
            </div>
          </div>
        </div>

        {/* Achievements & Events */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">Achievements & Events</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-all duration-200">
              <p className="text-lg font-semibold text-foreground mb-1">
                🏅 2nd Place - PYTHONIX: Clash of Coders
              </p>
              <p className="text-secondary text-sm">24-Hour Hackathon • Mar 2026</p>
            </div>

            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-all duration-200">
              <p className="text-lg font-semibold text-foreground mb-1">
                Reverse Coding X - Shaastra, IIT Madras
              </p>
              <p className="text-secondary text-sm">Algorithmic competition • Jan 2026</p>
            </div>

            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-all duration-200">
              <p className="text-lg font-semibold text-foreground mb-1">
                CraftMySite - TechnoVIT &apos;25
              </p>
              <p className="text-secondary text-sm">International Tech Fest • Oct 2025</p>
            </div>

            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-all duration-200">
              <p className="text-lg font-semibold text-foreground mb-1">
                SCOPE Club Hackathon
              </p>
              <p className="text-secondary text-sm">BIS-SCOPE Hackathon • Mar 2026</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-accent mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "HackerRank Orchestrate (May 2026)",
              "Machine Learning for Absolute Beginners - Udemy (Jun 2026)",
              "Intro to Machine Learning - Kaggle (Sep 2025)",
              "Pandas - Kaggle (Oct 2025)",
              "AI for Beginners - HP LIFE (Dec 2025)",
              "Data Labelling Job Simulation - Forage (Dec 2025)",
              "Generative AI Architectures - Udemy (Jun 2026)",
              "House of OpenSource - VIT (Sep 2025)",
            ].map((cert, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <span className="text-accent mt-1">✓</span>
                <span className="text-foreground text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
