import React from 'react';
import { BrainCircuit, Mail, MapPin, Phone } from 'lucide-react';
import logoImg from '../../assets/a4ea5abb170cd15f7c3514a0c18d58fa6805a446.png';

export function Footer() {
  return (
    <footer className="relative bg-black text-white pt-16 pb-8 border-t border-white/10 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8039B1]/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#006FFF]/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 font-['Inter']">
          {/* Brand */}
          <div className="space-y-4 col-span-1 md:col-span-1">
            <div className="flex items-center">
              <div className="h-[56px] relative shrink-0 w-[84px] flex items-center">
                <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img 
                      alt="Transformative AI Logo" 
                      className="absolute left-[-64.24%] max-w-none size-[228%] top-[-64.36%]" 
                      src={logoImg} 
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[13px] font-medium text-white/90 leading-relaxed">
              Execution intelligence for enterprise leaders. See what's really driving your business performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-[13px] text-white tracking-wide mb-5">Platform</h3>
            <ul className="flex flex-col gap-5 text-[13px] text-white/50">
              <li><a href="#platform" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#mexi" className="hover:text-white transition-colors">MEXI Product</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[13px] text-white tracking-wide mb-5">Company</h3>
            <ul className="flex flex-col gap-5 text-[13px] text-white/50">
              <li><a href="#about" className="hover:text-white transition-colors">Who We Are</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium text-[13px] text-white tracking-wide mb-5">Contact</h3>
            <ul className="flex flex-col gap-5 text-[13px] text-white/50">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#0083c9] shrink-0" />
                <span>Dubai & India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#0083c9] shrink-0" />
                <a href="mailto:contact@transformativeai.co" className="hover:text-white transition-colors">
                  contact@transformativeai.co
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#0083c9] shrink-0" />
                <a href="tel:+18001234567" className="hover:text-white transition-colors">
                  +1 (800) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] md:text-sm font-['Inter']">
          <p className="font-medium text-white/90">
            &copy; {new Date().getFullYear()} <span className="text-[#0083c9]">Transformative AI</span>. All rights reserved.
          </p>
          <div className="flex gap-8 font-medium text-white/90">
            <a href="#" className="hover:text-[#0083c9] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#0083c9] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}