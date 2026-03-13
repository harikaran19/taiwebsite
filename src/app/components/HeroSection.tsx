import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Activity, BarChart3, TrendingUp, Cpu } from 'lucide-react';
import { Particles } from './ui/particles';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col pt-32 lg:pt-40 overflow-hidden bg-[#FAFAFA]">
      
      {/* Abstract Arch Background & Particles */}
      <div className="absolute inset-0 z-0 flex justify-center pointer-events-none overflow-hidden">
        {/* Particles Effect */}
        <Particles
          className="absolute inset-0"
          quantity={150}
          ease={80}
          color="#5b21b6"
          refresh
        />
        {/* Faint outer arc lines */}
        <div className="absolute top-[5%] w-[1400px] h-[1400px] rounded-full border border-slate-200/50" />
        <div className="absolute top-[10%] w-[1100px] h-[1100px] rounded-full border border-slate-200/60" />
        
        {/* Soft glowing purple arches */}
        <div className="absolute top-[18%] w-[900px] h-[900px] rounded-full border-[80px] border-[#5b21b6]/15 blur-[50px]" />
        <div className="absolute top-[20%] w-[800px] h-[800px] rounded-full border-[40px] border-[#7c3aed]/20 blur-[30px]" />
        <div className="absolute top-[22%] w-[700px] h-[700px] rounded-full border-[20px] border-[#8b5cf6]/30 blur-[15px]" />
        
        {/* Bottom fade to create the arch cutout effect */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/95 to-transparent z-0" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col items-center text-center">
        
        {/* Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-slate-100 text-[#5b21b6] text-sm sm:text-base font-bold mb-8 shadow-sm"
        >
          <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>AI-Powered Execution Intelligence</span>
        </motion.div>
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[3.2rem] sm:text-[4rem] lg:text-[5rem] font-bold tracking-tight text-[#0f172a] leading-[1.05] mb-6"
        >
          See What’s Really Driving Your <br className="hidden sm:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#0066FF] to-[#8000FF]">Business Performance</span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto font-medium"
        >
          Transformative AI delivers execution intelligence for enterprise leaders — connecting operational performance to financial outcomes and highlighting where action matters most.
        </motion.p>
        
        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center w-full"
        >
          <div className="flex flex-col sm:flex-row items-start justify-center gap-3 sm:gap-4">
            {/* Primary CTA Block */}
            <div className="flex flex-col items-center sm:items-start gap-3">
              <a 
                href="#contact"
                className="bg-gradient-to-r from-[#0066FF] via-[#00D4FF] to-[#8000FF] text-white px-8 py-3.5 rounded-full text-[16px] font-bold hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all shadow-lg flex items-center justify-center w-full sm:w-auto"
              >
                Assess Your Execution Maturity
              </a>
              <span className="text-[14px] font-medium text-slate-500 sm:pl-3 text-center sm:text-left">
                Take a 2-minute diagnostic to understand your readiness.
              </span>
            </div>
            
            {/* Secondary CTA */}
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 group cursor-pointer text-[#0f172a] hover:text-blue-600 transition-all border border-slate-200 hover:border-blue-300 bg-white/50 backdrop-blur-sm px-8 py-3.5 rounded-full text-[16px] font-bold shadow-sm w-full sm:w-auto"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
        
      </div>

      {/* Horizontal Features Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 w-full max-w-5xl mx-auto mt-20 sm:mt-32 pb-12 px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-slate-200/60 pt-8">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#0066FF] to-[#8000FF]">3×</h4>
            <span className="text-[13px] text-slate-500 font-medium mt-1">Faster Decisions</span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#0066FF] to-[#8000FF]">↓60%</h4>
            <span className="text-[13px] text-slate-500 font-medium mt-1">Execution Risk Reduced</span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#0066FF] to-[#8000FF]">Real-time</h4>
            <span className="text-[13px] text-slate-500 font-medium mt-1">Margin Visibility</span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#0066FF] to-[#8000FF]">Zero Rip</h4>
            <span className="text-[13px] text-slate-500 font-medium mt-1">ERP-Native Integration</span>
          </div>

        </div>
      </motion.div>
      
    </section>
  );
}