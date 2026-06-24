"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-muted bg-background/80 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-lg md:text-xl font-bold text-foreground hover:text-primary transition-colors">
            <code className="text-primary">&lt;</code>
            <span>MM</span>
            <code className="text-primary">/&gt;</code>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12 items-center">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-secondary hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-muted py-4 space-y-4 bg-light">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-secondary hover:text-primary transition-colors text-sm font-medium px-4 py-2 rounded hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
