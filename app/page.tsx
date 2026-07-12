import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <section id="stats">
        <StatsCounter />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="leadership">
        <Experience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
