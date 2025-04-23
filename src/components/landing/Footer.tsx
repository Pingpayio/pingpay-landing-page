import React from "react";
import { X, Book, Rss, Package, Shield, ShieldCheck } from "lucide-react";
const footerLinks = [{
  heading: "Blog",
  icon: Rss,
  href: "#blog"
}, {
  heading: "Brand Kit",
  icon: Package,
  href: "#brand-kit"
}, {
  heading: "Privacy Policy",
  icon: Shield,
  href: "#privacy-policy"
}, {
  heading: "Terms and Conditions",
  icon: ShieldCheck,
  href: "#terms-and-conditions"
}];
const SOCIALS = [{
  icon: X,
  label: "X (formerly Twitter)",
  href: "https://x.com/ping_payments"
}, {
  icon: Book,
  label: "Documentation",
  href: "https://ping.gitbook.io"
}];
const Footer: React.FC = () => {
  return <footer className="mt-12 md:mt-20 w-full bg-[#100713] border-t border-white/10 px-4 py-8 md:py-12 flex flex-col items-center text-white">
      <div className="w-full max-w-[1080px] flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-0">
        {/* Left: Logo and Socials */}
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-3">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/1e51f881-cf85-4f9c-929a-501fd222233c.png" 
              alt="Ping Logo" 
              className="h-6 w-6 rounded-[6px] shadow-lg" 
            />
            
          </div>
          <div className="flex gap-4 mt-2">
            {SOCIALS.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="hover:scale-110 transition-transform duration-150 text-white opacity-80 hover:opacity-100">
                <social.icon size={22} />
              </a>)}
          </div>
        </div>
        {/* Right: Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {footerLinks.map(link => <a key={link.heading} href={link.href} className="flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors text-base">
              <link.icon size={18} className="opacity-80" />
              <span>{link.heading}</span>
            </a>)}
        </div>
      </div>
      {/* Copyright on bottom on mobile only */}
      <div className="mt-8 text-xs text-white/40 text-center w-full md:hidden">
        &copy; {new Date().getFullYear()} Ping. All rights reserved.
      </div>
    </footer>;
};
export default Footer;
