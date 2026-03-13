import React from 'react';
import { motion } from 'motion/react';
import { Crown, Target, Infinity, Layers } from 'lucide-react';

export function WhySection() {
  // Array of reasons why MEXI is the right choice
  const reasons = [
    {
      title: "Designed for CXOs",
      desc: "Not for analysts. We provide strategic clarity, not just another tool to build charts.",
      icon: Crown
    },
    {
      title: "Business-First Approach",
      desc: "We focus on the business outcome and financial impact first, mapping data to support it.",
      icon: Target
    },
    {
      title: "Continuous Intelligence",
      desc: "Always-on monitoring that identifies gaps in real-time, not just at month-end close.",
      icon: Infinity
    },
    {
      title: "Platform, Not Projects",
      desc: "A scalable, unified layer rather than endless disjointed data implementation projects.",
      icon: Layers
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#0066FF] to-[#8000FF] uppercase mb-4">
            Why MEXI
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
            Built for Leadership
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#BCC4D2] rounded-[2rem] p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 rounded-[0.8rem] bg-[#97B1DC]/40 flex items-center justify-center mb-6 shadow-sm">
                <r.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-[1.35rem] font-bold mb-3 text-slate-900 leading-[1.3]">{r.title}</h4>
              <p className="text-slate-700 text-[0.95rem] font-medium leading-[1.6]">{r.desc}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}