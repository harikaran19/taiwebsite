import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function FinalCtaSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#60A5FA]" />
      <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1768528385807-a7751490fffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZyUyMGdsYXNzJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzczMjIyMjMwfDA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center mix-blend-overlay" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-sm">
            See Your Execution Clearly
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Experience how Transformative AI turns enterprise execution into business performance intelligence.
          </p>
          
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-[#1E3A8A] hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Request a Demo <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}