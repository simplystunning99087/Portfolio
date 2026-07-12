'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

const stats: StatItem[] = [
  { label: 'Projects Completed', value: 10, suffix: '+' },
  { label: 'Hackathons & Competitions', value: 5, suffix: '+' },
  { label: 'Technologies Mastered', value: 20, suffix: '+' },
];

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let currentValue = 0;
    const increment = value / 30;
    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(currentValue));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
      {displayValue}
      {suffix}
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-16 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4 p-6 rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 backdrop-blur-sm hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-secondary text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
