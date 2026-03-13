import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logoImg from '../../assets/a4ea5abb170cd15f7c3514a0c18d58fa6805a446.png';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Platform', href: '#platform' },
  { name: 'Industries', href: '#industries' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'About', href: '#about' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8`}
    >
      <div 
        className={`max-w-7xl mx-auto rounded-[16px] transition-all duration-500 border overflow-hidden ${
          isScrolled 
            ? 'bg-white/40 backdrop-blur-md border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="flex h-[72px] px-4 md:px-8 items-center justify-between w-full relative">
          {/* Logo Container */}
          <div className="flex flex-1 justify-start items-center h-full">
            <div className="h-[56px] relative shrink-0 w-[120px] flex items-center">
              <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative">
                <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center">
                  <img 
                    alt="Transformative AI Logo" 
                    className="absolute left-[-64.24%] max-w-none size-[228%] top-[-64.36%]" 
                    src={logoImg} 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-[32px]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] font-medium font-['Inter'] leading-[20px] text-[#45556c] hover:text-[#2563EB] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex flex-1 justify-end items-center h-[40px]">
            <a 
              href="#contact"
              className="bg-gradient-to-b from-[#2563eb] to-[#8b5cf6] text-white px-[24px] py-[10px] rounded-[12px] text-[14px] font-semibold font-['Inter'] leading-[20px] transition-all shadow-[0px_0px_15px_0px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center justify-center h-full"
            >
              Request a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex flex-1 justify-end items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-[#2563EB] bg-white/50 p-2 rounded-xl backdrop-blur-sm border border-white/50"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="md:hidden absolute top-[calc(100%+12px)] left-4 right-4 bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-2xl overflow-hidden"
        >
          <div className="px-6 py-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-[#2563EB] hover:bg-white/50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-[#2563EB] to-[#8b5cf6] text-white px-5 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/20"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
