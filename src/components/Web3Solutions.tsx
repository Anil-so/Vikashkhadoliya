import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Layers, Sparkles, Shield, Globe } from "lucide-react";

const Web3Solutions = () => {
  const pillars = [
    {
      icon: Layers,
      title: "Modular Architecture",
      detail: "Composable products tailored to each business workflow."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      detail: "Best-in-class auth, compliance, and infrastructure hardening."
    },
    {
      icon: Sparkles,
      title: "Immersive Experiences",
      detail: "3D-first interactions that keep customers engaged longer."
    }
  ];

  return (
    <section id="web3-solutions" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground border-secondary/40">
            Web3 Software Solutions
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Crafting future-ready{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              digital ecosystems
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated to blending enterprise-grade engineering with immersive, interactive design—helping
            startups and established brands unlock modern customer journeys.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="p-8 rounded-3xl bg-gradient-card border border-border/40 shadow-professional card-3d">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-glow"
          >
            <a href="https://w3softwaresolutions.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Visit W3 Software Solutions
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Web3Solutions;

