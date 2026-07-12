import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import FooterComponent from "@/components/FooterComponent";

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
        <AboutSection />
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
      <FooterComponent />
    </main>
  );
}
