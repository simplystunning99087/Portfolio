import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <WhatIDo />
      <Projects />
      <Skills />
      <About />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
