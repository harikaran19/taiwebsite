import React from 'react';

export function PlatformSnapshot() {
  return (
    <section className="py-32 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(96,165,250,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            One Platform. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#0066FF] to-[#8000FF]">Enterprise-Wide Visibility.</span>
          </h2>
          <p className="text-xl text-slate-300">
            Transformative AI connects operations, finance, and leadership decisions into a unified execution intelligence layer.
          </p>
        </div>

        {/* Placeholder Card */}
        <div className="relative max-w-5xl mx-auto bg-slate-50 rounded-[2.5rem] w-full aspect-[4/3] md:aspect-video flex items-center justify-center overflow-hidden shadow-2xl">
          {/* Optional checkerboard pattern for placeholder look */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          <div className="text-center px-6 relative z-10">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-snug">
              Product screenshot/ video clip <br />
              will come here
            </h3>
          </div>
        </div>
        
      </div>
    </section>
  );
}