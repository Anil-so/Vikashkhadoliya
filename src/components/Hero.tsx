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
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
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
            
            <div className="flex flex-wrap gap-4">
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

              <Button asChild size="lg" className="group bg-[#25D366] text-black font-semibold shadow-lg shadow-[#25D366]/40 hover:scale-105 transition-transform">
                <a href="https://wa.me/7597881864" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  WhatsApp Me
                </a>
              </Button>

              <Button asChild size="lg" className="group bg-primary/10 text-primary border border-primary/30 backdrop-blur-lg hover:bg-primary/20 hover:text-foreground">
                <a href="https://w3softwaresolutions.com" target="_blank" rel="noopener noreferrer">
                  <span className="group-hover:underline">Visit W3 Software Solutions</span>
                </a>
              </Button>
            </div>
            
            <div className="flex gap-6 pt-4">
                <a href="https://www.linkedin.com/in/vikash-khadoliya-584660292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 social-animate pulse-on-load">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/the__.vikash?igsh=MTk1OWdvOG9vazJsMA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 social-animate">
                  <Instagram className="w-6 h-6" />
                </a>
            </div>
          </div>
          
          {/* Profile Section */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative group card-3d">
              <div className="absolute inset-0 bg-gradient-professional rounded-2xl blur-2xl opacity-40 scale-110 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative flex items-center justify-center">
                {/* Smaller, sleeker profile frame to integrate with 3D aesthetic */}
                <div className="relative w-36 h-56 lg:w-44 lg:h-64 rounded-2xl border border-white/12 overflow-hidden backdrop-blur-md shadow-[0_18px_45px_-30px_rgba(0,0,0,0.8)] glow-border">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-white/4 opacity-40 animate-pulse"></div>
                  <div className="absolute inset-0 border border-white/8 rounded-2xl"></div>
                  <div className="absolute inset-1 rounded-xl border border-white/8 animate-spin-slow opacity-25"></div>
                  <img
                    src="assets/IMG_6548.JPG"
                    alt="Vikash Khadoliya - Founder & CEO at W3 Software Solutions"
                    className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Compact CTA block anchored to profile - updated style */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-secondary rounded-2xl p-4 shadow-professional text-white space-y-1 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-xs font-semibold">Available for Projects</div>
                  <div className="text-[11px] opacity-90">W3 Software Solutions</div>
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      asChild
                      size="sm"
                      className="cta-visit bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow-lg px-3 py-1 rounded-lg border border-white/20"
                    >
                      <a
                        href="https://w3softwaresolutions.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-semibold"
                      >
                        <Globe className="w-3 h-3" />
                        Visit W3
                      </a>
                    </Button>

                    {/* New small portfolio link near image */}
                    <a href="/" className="ml-1 text-xs bg-white/6 hover:bg-white/12 border border-white/8 rounded-md px-2 py-1 flex items-center gap-1 transition-all text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 2 L12 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M5 12 L12 19 L19 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      Portfolio
                    </a>
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