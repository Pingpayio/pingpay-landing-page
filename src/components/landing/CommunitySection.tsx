
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, MessageSquare, Send, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const CommunitySection: React.FC = () => {
  return <section className="w-full flex flex-col items-center py-16 md:py-24 px-4 md:px-10 relative z-10" style={{
    background: "#100713",
    borderTop: "1px solid rgba(171, 159, 242, 0.1)"
  }}>
      <div className="max-w-[900px] flex flex-col items-center text-center">
        <h2 className="text-[#AB9FF2] text-3xl md:text-4xl font-bold mb-4">Join the community</h2>
        <p className="text-[#AB9FF2] text-base md:text-lg font-normal mb-12 max-w-[700px]">Tap into the future of commerce, one Ping at a time.</p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="bg-opacity-10 bg-[#AB9FF2] rounded-full p-3 hover:bg-opacity-20 transition-all">
            <Twitter size={24} className="text-[#AB9FF2]" />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noreferrer" className="bg-opacity-10 bg-[#AB9FF2] rounded-full p-3 hover:bg-opacity-20 transition-all">
            <Send size={24} className="text-[#AB9FF2]" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-opacity-10 bg-[#AB9FF2] rounded-full p-3 hover:bg-opacity-20 transition-all">
            <Github size={24} className="text-[#AB9FF2]" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noreferrer" className="bg-opacity-10 bg-[#AB9FF2] rounded-full p-3 hover:bg-opacity-20 transition-all">
            <MessageSquare size={24} className="text-[#AB9FF2]" />
          </a>
        </div>
        
        {/* Footer Links */}
        <div className="w-full border-t border-[#AB9FF2] border-opacity-10 pt-12">
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
              <img
                src="/lovable-uploads/1e51f881-cf85-4f9c-929a-501fd222233c.png" 
                alt="Ping Logo"
                className="h-6 mb-2" 
              />
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3">
              <Link to="/privacy" className="text-[#AB9FF2] text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-[#AB9FF2] text-sm hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/brand" className="text-[#AB9FF2] text-sm hover:text-white transition-colors">
                Brand Kit
              </Link>
              <Link to="/docs" className="text-[#AB9FF2] text-sm hover:text-white transition-colors">
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default CommunitySection;
