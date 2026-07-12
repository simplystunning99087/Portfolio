'use client';

import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 w-fit mb-6">
            <span className="text-xs font-medium text-blue-300">EDUCATION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Education & Achievements
          </h2>
        </div>

        {/* Education */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold uppercase tracking-wider text-cyan-400 mb-8">Education</h3>
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="relative bg-gradient-to-br from-muted/60 to-muted/30 border border-secondary/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
              <div className="relative">
                <div className="flex justify-between items-start mb-3 gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground">
                      B.Tech - Computer Science & Engineering
                    </h4>
                    <p className="text-cyan-400 text-sm font-medium">Cyber Physical Systems Specialization</p>
                  </div>
                  <span className="text-blue-400 text-sm font-medium whitespace-nowrap">Jul 2025 – 2029</span>
                </div>
                <p className="text-secondary mb-2">Vellore Institute of Technology, Chennai</p>
                <p className="text-foreground font-semibold">CGPA: 8.93 / 10</p>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="relative bg-gradient-to-br from-muted/60 to-muted/30 border border-secondary/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
              <div className="relative">
                <div className="flex justify-between items-start mb-3 gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground">12th Standard</h4>
                  </div>
                  <span className="text-cyan-400 text-sm font-medium whitespace-nowrap">Apr 2023 – Apr 2025</span>
                </div>
                <p className="text-secondary mb-2">Sishya School, Hosur</p>
                <p className="text-foreground font-semibold">Grade: A+</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Achievements & Events */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold uppercase tracking-wider text-blue-400 mb-8">Achievements & Events</h3>
          <motion.div
            className="grid md:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="group relative bg-gradient-to-br from-muted/60 to-muted/30 border border-secondary/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative space-y-2">
                <p className="text-lg font-semibold text-foreground">🏅 2nd Place</p>
                <p className="text-cyan-400 font-medium">PYTHONIX: Clash of Coders</p>
                <p className="text-secondary text-sm">24-Hour Hackathon • Mar 7–8, 2026</p>
                <p className="text-secondary text-sm">CADS & SENSE, VIT Chennai</p>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="group relative bg-gradient-to-br from-muted/60 to-muted/30 border border-secondary/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative space-y-2">
                <p className="text-lg font-semibold text-foreground">🎯 Reverse Coding X</p>
                <p className="text-cyan-400 font-medium">Shaastra, IIT Madras</p>
                <p className="text-secondary text-sm">Algorithmic Competition • Jan 2026</p>
                <p className="text-secondary text-sm">IIT Madras Flagship Festival</p>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="group relative bg-gradient-to-br from-muted/60 to-muted/30 border border-secondary/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative space-y-2">
                <p className="text-lg font-semibold text-foreground">💻 CraftMySite</p>
                <p className="text-cyan-400 font-medium">TechnoVIT '25</p>
                <p className="text-secondary text-sm">International Tech Fest • Oct 2025</p>
                <p className="text-secondary text-sm">Sponsored by HCLTech</p>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="group relative bg-gradient-to-br from-muted/60 to-muted/30 border border-secondary/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative space-y-2">
                <p className="text-lg font-semibold text-foreground">🔧 SCOPE Club</p>
                <p className="text-cyan-400 font-medium">Hackathon</p>
                <p className="text-secondary text-sm">BIS-SCOPE Hackathon • Mar 2026</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold uppercase tracking-wider text-cyan-400 mb-8">Certifications</h3>
          <motion.div
            className="grid md:grid-cols-2 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 },
              },
            }}
          >
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
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                }}
                className="flex items-center gap-3 p-4 rounded-lg bg-muted/40 border border-secondary/20 hover:border-blue-400/50 hover:bg-muted/60 transition-all duration-300 group"
              >
                <span className="text-blue-400 flex-shrink-0 font-bold">✓</span>
                <span className="text-foreground text-sm group-hover:text-cyan-300 transition-colors">{cert}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
