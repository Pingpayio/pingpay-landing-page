
import React from "react";
import { Github, Linkedin, Twitter, Discord } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-[#100713] text-[#AB9FF2] py-12 px-4 md:px-10">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Social Links */}
          <div className="flex flex-col space-y-6">
            <img
              src="/lovable-uploads/1e51f881-cf85-4f9c-929a-501fd222233c.png" 
              alt="Ping Logo"
              className="h-6" 
            />
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Discord size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium">Menu</h3>
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
            <a href="#" className="hover:text-white transition-colors">Community</a>
          </div>

          {/* Policy Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium">Policy</h3>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Risk Disclosure & Disclaimers</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Brand Kit</a>
          </div>
        </div>

        <Separator className="my-8 bg-[#AB9FF2]/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70">© {currentYear}, Ping</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-white transition-colors">
              Launch App
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
