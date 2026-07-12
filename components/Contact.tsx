'use client';

import { Github, Linkedin, Mail, FileText, ArrowRight, Phone, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("manimeets09@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const contacts = [
    {
      label: "Email",
      value: "manimeets09@gmail.com",
      href: "mailto:manimeets09@gmail.com",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "+91 90257 80639",
      href: "tel:+919025780639",
      icon: Phone,
    },
    {
      label: "GitHub",
      value: "github.com/simplystunning99087",
      href: "https://github.com/simplystunning99087",
      icon: Github,
    },
    {
      label: "LinkedIn",
      value: "manivel-mughilan-6bb65036a",
      href: "https://linkedin.com/in/manivel-mughilan-6bb65036a",
      icon: Linkedin,
    },
    {
      label: "LeetCode",
      value: "ManCreateCodeDevelop",
      href: "https://leetcode.com/u/ManCreateCodeDevelop/",
      icon: FileText,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-cyan-500/10 pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/20 border border-cyan-400/50 backdrop-blur-sm hover:bg-cyan-400/30 transition-all">
              <span className="text-xs font-medium text-cyan-300">GET IN TOUCH</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Let&apos;s Connect
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, internship opportunities, or having a chat about AI, engineering, and technology.
          </p>
          <motion.button
            onClick={copyEmail}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 text-sm font-medium ${
              copied
                ? 'bg-green-400/20 border-green-400/50 text-green-300'
                : 'bg-cyan-400/20 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/30'
            }`}
          >
            {copied ? (
              <>
                <Check size={16} />
                Email Copied!
              </>
            ) : (
              <>
                <Copy size={16} />
                Copy Email
              </>
            )}
          </motion.button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {contacts.map((contact, idx) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={idx}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative bg-gradient-to-br from-cyan-400/10 to-purple-500/10 border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-300/70 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-cyan-400/30 backdrop-blur-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center group-hover:bg-cyan-400/30 group-hover:drop-shadow-[0_0_8px_rgba(0,242,254,0.6)] transition-all">
                        {Icon && <Icon size={24} className="text-cyan-300" />}
                      </div>
                      <div>
                        <p className="text-secondary text-sm">{contact.label}</p>
                        <p className="text-foreground font-semibold break-all group-hover:text-cyan-300 transition-colors text-sm">{contact.value}</p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-400/5 to-purple-500/5 border border-cyan-400/20 rounded-xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-6 text-foreground">Send me a message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
