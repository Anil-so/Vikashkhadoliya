import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Instagram, MapPin, Download, Building2, MessageCircle, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[radial-gradient(circle_at_top,hsl(200_80%_15%),transparent_55%)]">
      <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
      <div className="absolute inset-0 parallax-wrapper pointer-events-none">
        <div className="parallax-layer">
          <div className="absolute top-12 left-20 w-72 h-72 bg-primary/30 rounded-full floating-orb"></div>
          <div className="absolute bottom-16 right-24 w-[28rem] h-[28rem] bg-secondary/20 rounded-full floating-orb"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-1 space-y-4 md:space-y-6 animate-fade-in">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <MapPin className="w-3 h-3 mr-1" />
                  Nawalgarh, Jhunjhunu, Rajasthan
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <Building2 className="w-3 h-3 mr-1" />
                  W3 Software Solutions
                </Badge>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
                Hi, I'm{" "}
                <span className="bg-gradient-professional bg-clip-text text-transparent">
                  Vikash Khadoliya
                </span>
              </h1>

              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl text-primary font-semibold">
                  Full Stack Developer
                </h2>
                <p className="text-lg text-muted-foreground font-medium">
                  Founder & CEO at W3 Software Solutions
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Passionate full stack developer and entrepreneur building innovative digital solutions.
                BCA graduate (2024) with expertise in modern web technologies and business development.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-secondary text-foreground shadow-glow hover:-translate-y-0.5 transition-transform duration-300">
                <a href="mailto:khadoliyavikash@gmail.com">
                  <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="group border-primary/40 text-primary hover:bg-primary/20 hover:text-foreground backdrop-blur-lg">
                <a href="https://drive.google.com/file/d/1axS6HKv8YEEHPgbyxLEQcfBclg4IbNfh/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social icons moved to footer; removed here for cleaner hero and better mobile spacing */}
          </div>

          {/* Profile Section */}
          <div className="order-2 flex justify-center animate-scale-in">
            <div className="relative group card-3d">
              <div className="absolute inset-0 bg-gradient-professional rounded-2xl blur-2xl opacity-40 scale-110 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
                {/* Enlarged, centered square profile frame (responsive) */}
                <div className="relative w-64 sm:w-80 md:w-96 lg:w-[36rem] max-w-[86vw] aspect-square rounded-3xl border border-white/10 overflow-hidden backdrop-blur-md shadow-[0_30px_80px_-40px_rgba(0,0,0,0.85)] glow-border founder-frame mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-white/4 opacity-40 animate-pulse"></div>
                  <div className="absolute inset-0 border border-white/8 rounded-3xl"></div>
                  <div className="absolute inset-1 rounded-2xl border border-white/8 animate-spin-slow opacity-25"></div>
                  <img
                    src="assets/IMG_6548.JPG"
                    alt="Vikash Khadoliya - Founder & CEO at W3 Software Solutions"
                    className="w-full h-full object-cover object-center scale-100 hover:scale-102 transition-transform duration-500"
                  />
                </div>
                {/* Caption and CTA below the image */}
                <div className="text-center lg:text-left space-y-3">
                  <div className="text-sm text-muted-foreground font-medium">Founder & CEO at W3 Software Solutions</div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <Button asChild size="sm" className="cta-visit bg-gradient-to-r from-primary to-secondary text-black font-semibold shadow-lg px-4 py-2 rounded-lg border border-white/20">
                      <a href="https://w3softwaresolutions.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Visit Website
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/7597881864"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-black shadow-xl shadow-[#25D366]/50 rounded-full p-4 flex items-center justify-center hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;