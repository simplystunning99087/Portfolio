'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  const { ref } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 bg-background relative">
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/20 border border-cyan-400/50 backdrop-blur-sm w-fit mb-6 hover:bg-cyan-400/30 transition-all">
            <span className="text-xs font-medium text-cyan-300">ABOUT</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Who I Am</h2>

          <div className="space-y-4 text-lg text-secondary leading-relaxed">
            <p>
              I'm a passionate AI/ML engineer and full-stack developer driven by the intersection of artificial intelligence and embedded systems. I believe in building intelligent solutions that seamlessly bridge the gap between software and hardware, creating real-world impact through practical engineering.
            </p>
            <p>
              My journey spans end-to-end AI pipelines, computer vision applications, and production-ready systems deployed on edge devices. I thrive on rapid prototyping and transforming complex problems into elegant, scalable solutions—whether it's training models at scale or optimizing inference on microcontrollers.
            </p>
            <p>
              Currently seeking internship opportunities where I can contribute my expertise in building intelligent systems, apply cutting-edge ML techniques, and collaborate with teams solving challenging technical problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
