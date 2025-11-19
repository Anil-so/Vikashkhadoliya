import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Web3Solutions from "@/components/Web3Solutions";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_20%,rgba(39,98,255,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(131,56,236,0.25),transparent_45%),linear-gradient(180deg,#030712,#0f172a)] text-foreground relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-cyber-grid"></div>
      <Navigation />
      <Hero />
      <About />
      <Web3Solutions />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
