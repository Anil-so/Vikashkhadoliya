import { Badge } from "@/components/ui/badge";
import { Linkedin, Heart, Facebook, MessageCircle, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const socials = [
    {
      href: "https://wa.me/7597881864",
      label: "WhatsApp",
      color: "#25D366",
      icon: MessageCircle,
    },
    {
      href: "https://www.facebook.com",
      label: "Facebook",
      color: "#1877F2",
      icon: Facebook,
    },
    {
      href: "https://www.instagram.com/the__.vikash?igsh=MTk1OWdvOG9vazJsMA%3D%3D&utm_source=qr",
      label: "Instagram",
      color: "#E1306C",
      icon: Instagram,
    },
    {
      href: "https://www.linkedin.com/in/vikash-khadoliya-584660292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      label: "LinkedIn",
      color: "#0A66C2",
      icon: Linkedin,
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-transparent via-[#040b19] to-black text-foreground pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.4),_transparent_55%)]"></div>
      <div className="absolute inset-0 opacity-30 bg-cyber-grid"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="space-y-5 bg-white/5 border border-white/10 rounded-3xl p-6 shadow-professional backdrop-blur-xl">
            <h3 className="text-2xl font-bold">Vikash Khadoliya</h3>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Full Stack Developer crafting immersive Web3-ready experiences with modern engineering and design.
            </p>
            <Badge variant="outline" className="bg-white/10 text-foreground border-white/20">
              Available for freelance work
            </Badge>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-3 text-sm">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="text-sm text-foreground/70 space-y-2">
              <p>Email: <a href="mailto:Khadoliyavikash@gmail.com" className="text-primary hover:underline">khadoliyavikash@gmail.com</a></p>
              <p>Phone: <a href="tel:+917597881864" className="text-primary hover:underline">+91 7597881864</a></p>
              <p>Location: Nawalgarh, Jhunjhunu, Rajasthan</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Connect</h4>
            <div className="grid grid-cols-2 gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-2xl border border-white/10 hover:border-white/40 bg-white/5 transition-all hover:-translate-y-1"
                  style={{ boxShadow: `0 10px 25px -20px ${social.color}` }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-4" style={{ color: social.color }} />
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-foreground/70 flex items-center justify-center gap-2 text-sm">
            © {currentYear} Vikash Khadoliya. Made with 
            <Heart className="w-4 h-4 text-red-400" />
            in Nawalgarh, Rajasthan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;