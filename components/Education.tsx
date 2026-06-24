export default function Education() {
  return (
    <section className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
          Education & Achievements
        </h2>
        <p className="text-secondary text-lg mb-16">
          Academic excellence and active participation in technical events.
        </p>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8">Education</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary bg-light pl-6 py-4 rounded-r-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    B.Tech - Computer Science & Engineering
                  </h4>
                  <p className="text-primary text-sm">Cyber Physical Systems Specialization</p>
                </div>
              </div>
              <p className="text-secondary text-sm mb-2">Vellore Institute of Technology, Chennai</p>
              <p className="text-secondary text-xs">Jul 2025 – 2029 (Expected)</p>
              <p className="text-foreground text-sm mt-2">CGPA: <strong>8.93 / 10</strong></p>
            </div>

            <div className="border-l-4 border-primary bg-light pl-6 py-4 rounded-r-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">12th Standard</h4>
                </div>
              </div>
              <p className="text-secondary text-sm mb-2">Sishya School, Hosur</p>
              <p className="text-secondary text-xs">Apr 2023 – Apr 2025</p>
              <p className="text-foreground text-sm mt-2">Grade: <strong>A+</strong></p>
            </div>
          </div>
        </div>

        {/* Achievements & Events */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8">Achievements & Events</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-muted bg-background rounded-lg p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all">
              <h4 className="text-base font-semibold text-foreground mb-2">
                🏅 2nd Place - PYTHONIX: Clash of Coders
              </h4>
              <p className="text-secondary text-sm">24-Hour Hackathon</p>
              <p className="text-secondary text-xs">Organised by CADS & SENSE, VIT Chennai • Mar 7–8, 2026</p>
            </div>

            <div className="border border-muted bg-background rounded-lg p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all">
              <h4 className="text-base font-semibold text-foreground mb-2">
                Reverse Coding X - Shaastra, IIT Madras
              </h4>
              <p className="text-secondary text-sm">Algorithmic competition at IIT Madras flagship technical fest</p>
              <p className="text-secondary text-xs">Jan 2026</p>
            </div>

            <div className="border border-muted bg-background rounded-lg p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all">
              <h4 className="text-base font-semibold text-foreground mb-2">
                CraftMySite - TechnoVIT '25
              </h4>
              <p className="text-secondary text-sm">International Tech Fest, sponsored by HCLTech</p>
              <p className="text-secondary text-xs">VIT Chennai • Oct 2025</p>
            </div>

            <div className="border border-muted bg-background rounded-lg p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all">
              <h4 className="text-base font-semibold text-foreground mb-2">
                SCOPE Club Hackathon
              </h4>
              <p className="text-secondary text-xs">BIS-SCOPE Hackathon • Mar 2026</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-3">
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
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/15">
                <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                <span className="text-foreground text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
