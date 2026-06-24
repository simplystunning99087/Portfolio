import { Brain, Code2, Zap } from "lucide-react";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  capabilities: string[];
}

function ServiceCard({ icon, title, description, capabilities }: ServiceProps) {
  return (
    <div className="group border border-border rounded-lg p-8 hover:border-accent hover:bg-accent/5 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
      <div className="mb-4 p-3 w-fit bg-primary/10 rounded-lg group-hover:bg-accent/10 transition-colors">
        <div className="text-accent group-hover:text-accent">{icon}</div>
      </div>
      
      <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-secondary mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-2">
        {capabilities.map((capability, idx) => (
          <li key={idx} className="flex gap-2 text-secondary text-sm">
            <span className="text-accent font-bold">•</span>
            <span>{capability}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WhatIDo() {
  const services: ServiceProps[] = [
    {
      icon: <Brain size={32} />,
      title: "AI & Machine Learning",
      description: "Building end-to-end ML pipelines from data collection to model deployment with production-grade reliability.",
      capabilities: [
        "RAG systems and LLM pipelines",
        "Computer vision and image classification",
        "Data preprocessing and feature engineering",
        "Model training and evaluation",
        "Enterprise-grade AI solutions",
      ],
    },
    {
      icon: <Code2 size={32} />,
      title: "Full-Stack Development",
      description: "Creating responsive, scalable web applications with modern frameworks and best practices.",
      capabilities: [
        "React and Next.js applications",
        "Responsive UI/UX design",
        "Backend APIs and databases",
        "Real-time applications",
        "Production deployment",
      ],
    },
    {
      icon: <Zap size={32} />,
      title: "Edge & Embedded AI",
      description: "Deploying intelligent models on edge devices for real-time, on-device inference and autonomous systems.",
      capabilities: [
        "ESP32 and microcontroller programming",
        "Model optimization for edge devices",
        "Real-time inference pipelines",
        "Hardware integration and IoT",
        "Embedded system automation",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What I Do
          </h2>
          <p className="text-lg text-secondary max-w-2xl">
            I specialize in building intelligent systems that bridge software and hardware. Here&apos;s what I bring to the table:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>

        <div className="mt-16 p-8 border border-border rounded-lg bg-primary/5">
          <p className="text-foreground text-center">
            <span className="font-semibold text-accent">My Approach:</span> Rapid prototyping, sprint-based delivery, and shipping production-ready solutions. I excel at transforming ideas into working systems in compressed timeframes.
          </p>
        </div>
      </div>
    </section>
  );
}
