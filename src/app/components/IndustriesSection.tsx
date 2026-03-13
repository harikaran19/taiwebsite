import React from 'react';
import { motion } from 'motion/react';
import { Factory, HardHat, Package } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function IndustriesSection() {
  // Define target industries
  const industries = [
    {
      title: 'Manufacturing',
      focus: 'Primary Focus Area',
      desc: 'Serving automotive and auto ancillary enterprises.',
      icon: Factory,
      img: 'https://images.unsplash.com/photo-1643638936204-6b87c95fcf14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwaW5kdXN0cnklMjBmYWN0b3J5JTIwc2lsaG91ZXR0ZXxlbnwxfHx8fDE3NzMyOTg2MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      glowColor: 'from-blue-600/40 to-blue-900/40',
      badgeColor: 'bg-blue-500/20 text-blue-200 border-blue-500/30'
    },
    {
      title: 'Construction',
      focus: 'Expansion Area',
      desc: 'Project-driven businesses where cost, timelines, and coordination define success.',
      icon: HardHat,
      img: 'https://images.unsplash.com/photo-1575230167650-dce335edc7f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwY3JhbmUlMjBidWlsZGluZyUyMHNpbGhvdWV0dGV8ZW58MXx8fHwxNzczMjk4NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      glowColor: 'from-emerald-600/40 to-emerald-900/40',
      badgeColor: 'bg-emerald-500/20 text-emerald-200 border-emerald-500/30'
    },
    {
      title: 'Consumer Packaged Goods',
      focus: 'Future Focus',
      desc: 'Operations and supply chain intensive businesses where execution discipline protects margins.',
      icon: Package,
      img: 'https://images.unsplash.com/photo-1583564345823-8606fb448c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdXBwbHklMjBjaGFpbiUyMGxvZ2lzdGljcyUyMHNpbGhvdWV0dGV8ZW58MXx8fHwxNzczMjk4NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      glowColor: 'from-indigo-600/40 to-indigo-900/40',
      badgeColor: 'bg-indigo-500/20 text-indigo-200 border-indigo-500/30'
    }
  ];

  return (
    <section id="industries" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] mb-6 leading-tight">
            Industries We Serve
          </h2>
          <div className="h-1 w-20 mx-auto bg-[#2563EB] rounded-full mb-8" />
          <p className="text-xl text-slate-600">
            Tailored execution intelligence for complex enterprise operations.
          </p>
        </div>

        {/* 3 Large Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative w-full h-[480px] rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-end ${i === 0 ? 'ring-2 ring-blue-500/50 ring-offset-4 ring-offset-white' : ''}`}
            >
              {/* Base Dark Layer */}
              <div className="absolute inset-0 bg-[#0a0f1c]" />

              {/* Image - Dark by default, Reveals on Hover */}
              <ImageWithFallback 
                src={ind.img} 
                alt={ind.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale mix-blend-luminosity group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-125 transition-all duration-700 ease-out group-hover:scale-105"
              />

              {/* Accent Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-t ${ind.glowColor} mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              {/* Permanent Gradient for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/70 to-transparent pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 p-8 w-full flex flex-col transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex flex-col mb-4">
                  <div className="mb-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-sm ${ind.badgeColor}`}>
                      {ind.focus}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ind.icon className="w-8 h-8 text-white opacity-90 group-hover:opacity-100 transition-opacity shrink-0" />
                    <h3 className="text-3xl font-bold text-white tracking-tight leading-tight line-clamp-2">
                      {ind.title}
                    </h3>
                  </div>
                </div>
                
                <div className="min-h-[5rem]">
                  <p className="text-slate-300 text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                    {ind.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}