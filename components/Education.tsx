import { BookOpen, Trophy, Award } from "lucide-react";

export default function Education() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Education & Achievements
          </h2>
          <p className="text-foreground-secondary text-lg">Academic journey and recognition</p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-accent-light mb-6 flex items-center gap-2">
            <BookOpen size={24} /> Education
          </h3>
          <div className="space-y-6">
            <div className="relative p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-background-secondary/40 to-background/40 hover:from-background-secondary/60 hover:to-background/50 transition-all duration-300 backdrop-blur-sm group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-light to-accent-light rounded-l-xl"></div>
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-foreground group-hover:text-primary-light transition-colors">
                    B.Tech - Computer Science & Engineering
                  </h4>
                  <p className="text-primary-light font-medium text-sm mt-1">Cyber Physical Systems Specialization</p>
                  <p className="text-foreground-secondary text-sm mt-2 mb-2">Vellore Institute of Technology, Chennai</p>
                  <p className="text-foreground-secondary text-xs mb-3">Jul 2025 – 2029 (Expected)</p>
                  <p className="text-foreground font-semibold">CGPA: <span className="text-accent-light">8.93 / 10</span></p>
                </div>
              </div>
            </div>

            <div className="relative p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-background-secondary/40 to-background/40 hover:from-background-secondary/60 hover:to-background/50 transition-all duration-300 backdrop-blur-sm group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-light to-accent-light rounded-l-xl"></div>
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-foreground group-hover:text-primary-light transition-colors">12th Standard</h4>
                  <p className="text-foreground-secondary text-sm mt-2 mb-2">Sishya School, Hosur</p>
                  <p className="text-foreground-secondary text-xs mb-3">Apr 2023 – Apr 2025</p>
                  <p className="text-foreground font-semibold">Grade: <span className="text-accent-light">A+</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements & Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-accent-light mb-6 flex items-center gap-2">
            <Trophy size={24} /> Achievements & Events
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🥈", title: "2nd Place - PYTHONIX: Clash of Coders", desc: "24-Hour Hackathon • Organised by CADS & SENSE, VIT Chennai • Mar 7–8, 2026" },
              { icon: "🎯", title: "Reverse Coding X - Shaastra, IIT Madras", desc: "Algorithmic competition at IIT Madras flagship technical fest • Jan 2026" },
              { icon: "🌐", title: "CraftMySite - TechnoVIT '25", desc: "International Tech Fest, sponsored by HCLTech • VIT Chennai • Oct 2025" },
              { icon: "💻", title: "SCOPE Club Hackathon", desc: "BIS-SCOPE Hackathon • Mar 2026" },
            ].map((achievement, idx) => (
              <div key={idx} className="group p-6 rounded-xl border border-primary/20 hover:border-primary/50 bg-gradient-to-br from-background-secondary/40 to-background/40 hover:from-background-secondary/60 hover:to-background/50 transition-all duration-300 backdrop-blur-sm">
                <p className="text-2xl mb-2">{achievement.icon}</p>
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary-light transition-colors mb-2">
                  {achievement.title}
                </h4>
                <p className="text-foreground-secondary text-sm">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-accent-light mb-6 flex items-center gap-2">
            <Award size={24} /> Certifications
          </h3>
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
              <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-colors group">
                <span className="text-accent-light text-lg">✓</span>
                <span className="text-foreground-secondary text-sm group-hover:text-foreground transition-colors">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
