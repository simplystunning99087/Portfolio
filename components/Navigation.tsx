"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-secondary/20 bg-background/80 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center font-bold text-background group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
              M
            </div>
            <span className="font-bold text-foreground hidden sm:inline">Manivel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-secondary hover:text-cyan-300 transition-colors text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-3">
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-500/30 text-sm font-medium transition-all duration-300"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-secondary hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-secondary/20 py-4 space-y-2 bg-gradient-to-br from-muted/50 to-muted/20">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-secondary hover:text-cyan-300 hover:bg-muted/50 rounded-lg transition-all duration-300 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 mx-0 text-blue-300 hover:bg-blue-500/20 rounded-lg border border-blue-500/30 transition-all duration-300 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
