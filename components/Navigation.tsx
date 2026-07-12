'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Create intersection observers for each section
    const sections = ['home', 'about', 'projects', 'skills', 'leadership', 'education', 'contact'];
    const observers = sections.map(id => {
      const element = document.getElementById(id);
      if (!element) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const links = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#leadership', label: 'Leadership', id: 'leadership' },
    { href: '#education', label: 'Education', id: 'education' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isLinkActive = (id: string) => activeSection === id;

  return (
    <nav className="sticky top-0 z-50 border-b border-cyan-400/30 dark:bg-background/60 bg-white/60 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-bold dark:text-background text-background group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300">
              M
            </div>
            <span className="font-bold dark:text-foreground text-gray-900 hidden sm:inline">Manivel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 text-sm font-medium relative group transition-colors duration-300 ${
                  isLinkActive(link.id)
                    ? 'text-cyan-400 dark:text-cyan-300'
                    : 'dark:text-secondary text-gray-600 dark:hover:text-cyan-300 hover:text-cyan-600'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                    isLinkActive(link.id) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex gap-3 items-center">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg dark:text-secondary text-gray-600 dark:hover:text-cyan-300 hover:text-cyan-600 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            {/* CTA Button (Hidden on Mobile) */}
            <button
              onClick={() => scrollToSection('#contact')}
              className="hidden md:block px-4 py-2 rounded-lg bg-cyan-400/20 dark:text-cyan-300 text-cyan-600 hover:bg-cyan-400/30 border border-cyan-400/50 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30 backdrop-blur-sm"
            >
              Let&apos;s Talk
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 dark:text-secondary text-gray-600 dark:hover:text-cyan-300 hover:text-cyan-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-cyan-400/30 py-4 space-y-2 dark:bg-gradient-to-br dark:from-cyan-400/10 dark:to-purple-500/5 bg-gradient-to-br from-cyan-400/5 to-purple-500/2 backdrop-blur-sm">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  scrollToSection(link.href);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                  isLinkActive(link.id)
                    ? 'dark:text-cyan-300 text-cyan-600 dark:bg-cyan-400/20 bg-cyan-400/10'
                    : 'dark:text-secondary text-gray-600 dark:hover:text-cyan-300 dark:hover:bg-cyan-400/10 hover:text-cyan-600 hover:bg-cyan-400/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                scrollToSection('#contact');
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 mx-0 dark:text-cyan-300 text-cyan-600 dark:hover:bg-cyan-400/20 hover:bg-cyan-400/10 rounded-lg border border-cyan-400/50 transition-all duration-300 text-sm font-medium"
            >
              Let&apos;s Talk
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
