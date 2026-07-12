'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 w-fit mb-6">
            <span className="text-xs font-medium text-blue-300">ABOUT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h2>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6">
            <div className="space-y-4 text-secondary leading-relaxed">
              <p className="text-lg">
                I&apos;m a second-year <strong className="text-foreground">B.Tech student in Cyber Physical Systems</strong> at VIT Chennai (CGPA: 8.93/10). My passion lies in building intelligent systems that bridge the gap between software and hardware, with a strong focus on machine learning, computer vision, and autonomous AI agents.
              </p>

              <p className="text-lg">
                My journey spans across AI/ML pipelines, full-stack web development, embedded systems, and DevOps. I&apos;m particularly excited about building solutions that solve real-world problems.
              </p>
            </div>

            {/* Focus areas */}
            <div className="space-y-3 pt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Areas of Focus</h3>
              <div className="grid gap-3">
                <div className="group flex gap-3 p-4 rounded-lg bg-muted/40 border border-secondary/20 hover:border-cyan-400/50 hover:bg-muted/60 transition-all duration-300">
                  <span className="text-blue-400 flex-shrink-0 mt-0.5">▪</span>
                  <div>
                    <p className="font-semibold text-foreground">End-to-end AI Systems</p>
                    <p className="text-secondary text-sm">Data collection to model deployment on edge devices</p>
                  </div>
                </div>
                <div className="group flex gap-3 p-4 rounded-lg bg-muted/40 border border-secondary/20 hover:border-cyan-400/50 hover:bg-muted/60 transition-all duration-300">
                  <span className="text-cyan-400 flex-shrink-0 mt-0.5">▪</span>
                  <div>
                    <p className="font-semibold text-foreground">Computer Vision</p>
                    <p className="text-secondary text-sm">Real-time detection, classification & embedded ML</p>
                  </div>
                </div>
                <div className="group flex gap-3 p-4 rounded-lg bg-muted/40 border border-secondary/20 hover:border-cyan-400/50 hover:bg-muted/60 transition-all duration-300">
                  <span className="text-blue-400 flex-shrink-0 mt-0.5">▪</span>
                  <div>
                    <p className="font-semibold text-foreground">LLM & RAG Systems</p>
                    <p className="text-secondary text-sm">Intelligent information retrieval and agents</p>
                  </div>
                </div>
                <div className="group flex gap-3 p-4 rounded-lg bg-muted/40 border border-secondary/20 hover:border-cyan-400/50 hover:bg-muted/60 transition-all duration-300">
                  <span className="text-cyan-400 flex-shrink-0 mt-0.5">▪</span>
                  <div>
                    <p className="font-semibold text-foreground">Full-Stack Development</p>
                    <p className="text-secondary text-sm">Responsive, production-ready applications</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-secondary pt-4">
              I believe in rapid prototyping and shipping products quickly. I&apos;ve delivered enterprise-grade AI systems in sprint timeframes and participated in multiple hackathons. Currently seeking internship opportunities to apply these skills in real-world environments.
            </p>
          </motion.div>

          {/* Sidebar - Stats/Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6">
            {/* Info Card */}
            <div className="bg-gradient-to-br from-muted/80 to-muted/40 border border-secondary/20 rounded-xl p-6 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Education</p>
                <p className="text-foreground font-semibold">VIT Chennai</p>
                <p className="text-secondary text-sm">B.Tech Cyber Physical Systems</p>
                <p className="text-secondary text-sm font-medium">CGPA: 8.93/10</p>
              </div>
              
              <div className="border-t border-secondary/20 pt-6 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">Recognition</p>
                <p className="text-foreground font-semibold">2nd Place</p>
                <p className="text-secondary text-sm">PYTHONIX 24-hour Hackathon</p>
              </div>

              <div className="border-t border-secondary/20 pt-6 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Location</p>
                <p className="text-foreground">Hosur, Tamil Nadu</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-3">Key Stats</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-secondary">Projects Completed</span>
                  <span className="text-foreground font-semibold">10+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Hackathons</span>
                  <span className="text-foreground font-semibold">5+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Tech Stack</span>
                  <span className="text-foreground font-semibold">20+</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
