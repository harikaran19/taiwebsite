import React from 'react';
import { motion } from 'motion/react';
import { 
  Database, LayoutDashboard, FileText, AlertTriangle, FileSpreadsheet, 
  BarChart, Activity, PieChart, Layers, BrainCircuit, TrendingUp, Zap, Hexagon
} from 'lucide-react';

export function ComparisonSection() {
  const scatteredTools = [
    { icon: Database, color: 'text-blue-500', bg: 'bg-white', top: '15%', left: '10%', rotate: -12 },
    { icon: LayoutDashboard, color: 'text-indigo-500', bg: 'bg-white', top: '25%', left: '35%', rotate: 8 },
    { icon: FileText, color: 'text-emerald-500', bg: 'bg-white', top: '45%', left: '20%', rotate: -5 },
    { icon: AlertTriangle, color: 'text-amber-500', bg: 'bg-white', top: '65%', left: '10%', rotate: 15 },
    { icon: FileSpreadsheet, color: 'text-rose-500', bg: 'bg-white', top: '75%', left: '40%', rotate: -20 },
    { icon: BarChart, color: 'text-cyan-500', bg: 'bg-white', top: '10%', left: '60%', rotate: 10 },
    { icon: Activity, color: 'text-purple-500', bg: 'bg-white', top: '35%', left: '75%', rotate: -15 },
    { icon: PieChart, color: 'text-pink-500', bg: 'bg-white', top: '60%', left: '65%', rotate: 5 },
    { icon: Layers, color: 'text-orange-500', bg: 'bg-white', top: '80%', left: '75%', rotate: -10 },
    { icon: Database, color: 'text-slate-500', bg: 'bg-white', top: '50%', left: '50%', rotate: 0 },
  ];

  const popups = [
    { text: 'Manual analysis', top: '22%', left: '55%' },
    { text: 'Delayed decisions', top: '50%', left: '50%' },
    { text: 'No execution visibility', top: '78%', left: '30%' },
    { text: 'Hidden bottle necks', top: '75%', left: '75%' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white pointer-events-none" />
      
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Header Area */}
        <div className="text-center mb-16 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 shadow-sm border border-blue-100">
            <span>Enterprise Intelligence, Unified</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 tracking-tight leading-tight">
            One Platform That <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] via-[#0066FF] to-[#8000FF]">Reveals</span> <br className="hidden md:block"/>
            What’s Really Happening <br className="hidden md:block"/>
            Inside Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] via-[#0066FF] to-[#8000FF]">Business</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            MEXI connects execution signals across your enterprise — transforming fragmented data into clear, predictive insights leaders can act on.
          </p>
        </div>

        {/* Large Comparison Container */}
        <div className="w-full bg-gradient-to-br from-slate-100 to-white rounded-[40px] p-2 md:p-4 shadow-[0_0_40px_rgba(0,0,0,0.03)] border border-slate-200/60">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            
            {/* "Before" Side */}
            <div className="bg-slate-50/80 backdrop-blur-sm rounded-[32px] p-6 md:p-10 relative overflow-hidden flex flex-col h-[500px] border border-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-slate-400 text-center mb-12 z-20 relative">
                Before Transformative AI
              </h3>
              
              <div className="relative flex-1 w-full flex items-center justify-center -mt-6">
                {/* SVG Chaos Lines Background */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 15 15 L 35 25 L 50 50 L 20 45 Z" stroke="#94a3b8" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
                  <path d="M 35 25 L 60 10 L 75 35 L 50 50 Z" stroke="#94a3b8" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
                  <path d="M 50 50 L 65 60 L 80 80 L 40 75 Z" stroke="#94a3b8" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
                  <path d="M 20 45 L 10 65 L 40 75 Z" stroke="#94a3b8" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
                </svg>

                {/* Scattered Tools */}
                {scatteredTools.map((tool, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5, y: -20, rotate: tool.rotate - 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0, rotate: tool.rotate }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                    className={`absolute w-12 h-12 md:w-14 md:h-14 rounded-2xl ${tool.bg} shadow-md border border-slate-200 flex items-center justify-center z-10`}
                    style={{ 
                      top: tool.top, 
                      left: tool.left, 
                    }}
                  >
                    <tool.icon className={`w-5 h-5 md:w-6 md:h-6 ${tool.color}`} />
                  </motion.div>
                ))}
                
                {/* Red Pop-ups */}
                {popups.map((popup, i) => (
                  <motion.div
                    key={`popup-${i}`}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.15), type: "spring", stiffness: 120 }}
                    className="absolute z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2"
                    style={{ top: popup.top, left: popup.left }}
                  >
                    <div className="bg-rose-50/90 backdrop-blur-sm text-[#f43f5e] text-sm font-bold px-4 py-2.5 rounded-full border border-rose-100 shadow-[0_8px_20px_rgba(244,63,94,0.12)] flex items-center gap-2 whitespace-nowrap">
                      <AlertTriangle className="w-4 h-4 text-[#f43f5e]" />
                      {popup.text}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* "After" Side */}
            <div className="bg-white rounded-[32px] p-6 md:p-10 relative overflow-hidden flex flex-col h-[500px] border border-white shadow-xl shadow-blue-900/5 group">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue-400/10 to-purple-400/10 blur-[60px] rounded-full pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#0066FF] to-[#8000FF] text-center mb-8 z-10 relative">
                After MEXI
              </h3>
              
              <div className="relative flex-1 w-full bg-[#f8fafc] border border-slate-200/80 rounded-2xl overflow-hidden flex flex-col shadow-inner z-10">
                {/* Dashboard Top Bar */}
                <div className="h-10 bg-white border-b border-slate-200 flex items-center px-4 justify-between sticky top-0 z-20 shrink-0">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-3 h-6 bg-slate-100/80 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 tracking-wide">
                      MEXI intelligence
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100/80 flex items-center justify-center ml-1 relative">
                      <Hexagon className="w-6 h-6 text-slate-300 fill-slate-200" />
                      <span className="absolute text-[11px] font-black text-slate-600 pt-[1px]">M</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="flex-1 p-4 md:p-5 flex flex-col gap-5 overflow-y-auto">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Recovery Progress */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-2 text-slate-500 font-medium text-[11px] tracking-wider uppercase">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                        Recovery Progress
                      </div>
                      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 h-full flex flex-col justify-center">
                        <div className="flex justify-between items-start mb-3">
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Revenue Recovery</div>
                          <TrendingUp className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-3xl font-light text-emerald-600 tracking-tight">₹1.8 Cr</span>
                          <span className="text-sm text-slate-400 font-medium">/ ₹4.1 Cr</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2 mb-2 overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2 rounded-full" style={{ width: '44%' }}></div>
                        </div>
                        <div className="text-xs font-semibold text-emerald-600">44% achieved</div>
                      </div>
                    </motion.div>

                    {/* Critical Alerts */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-2 text-slate-500 font-medium text-[11px] tracking-wider uppercase">
                        <Zap className="w-3.5 h-3.5 text-rose-500" />
                        Critical Alerts
                      </div>
                      <div className="bg-white rounded-xl border border-rose-200 shadow-[0_4px_12px_rgba(225,29,72,0.05)] p-4 relative overflow-hidden h-full flex flex-col justify-center">
                        <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2 text-slate-500 text-xs font-bold tracking-widest">
                            <AlertTriangle className="w-4 h-4 text-rose-500" />
                            ALERT-2847
                          </div>
                          <div className="bg-rose-50 text-rose-700 text-[9px] border border-rose-100 font-black uppercase px-2 py-1 rounded-sm tracking-wider">
                            Critical
                          </div>
                        </div>
                        <div className="mb-1">
                          <h4 className="text-slate-800 font-bold text-sm">Production downtime spike</h4>
                          <p className="text-slate-500 text-xs">Plant 2 - Chennai</p>
                        </div>
                        
                        <div className="h-px w-full bg-slate-100 my-2"></div>
                        
                        <div className="flex justify-between items-end">
                          <div>
                            <div className="text-[10px] text-cyan-600 font-bold uppercase tracking-wider mb-0.5">Impact</div>
                            <div className="text-slate-700 font-semibold text-xs">High production loss</div>
                          </div>
                          <div className="text-[9px] text-slate-400 font-mono">
                            12 Mar 2026 14:23:18 UTC
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* OEE Trend */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col gap-2 flex-1"
                  >
                    <div className="flex items-center gap-2 text-slate-500 font-medium text-[11px] tracking-wider uppercase">
                      <Activity className="w-3.5 h-3.5 text-cyan-500" />
                      Overall Equipment Effectiveness (24-Hour Trend)
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex-1 flex flex-col relative min-h-[140px]">
                      
                      {/* Grid Lines */}
                      <div className="absolute inset-0 z-0 flex flex-col justify-between px-8 py-6 opacity-30 pointer-events-none">
                        <div className="border-t border-slate-300 w-full"></div>
                        <div className="border-t border-slate-300 w-full"></div>
                        <div className="border-t border-slate-300 w-full"></div>
                        <div className="border-t border-slate-300 w-full"></div>
                        <div className="border-t border-slate-300 w-full"></div>
                      </div>

                      {/* SVG Chart area */}
                      <div className="absolute inset-0 z-10 pt-6 pb-8 pl-8 pr-4">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="oee-gradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M0,15 C20,16 40,18 60,10 C80,2 90,8 100,10 L100,100 L0,100 Z" fill="url(#oee-gradient)" />
                          <path d="M0,15 C20,16 40,18 60,10 C80,2 90,8 100,10" fill="none" stroke="#0ea5e9" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                        </svg>
                      </div>

                      {/* Legend / Y-axis / X-axis Container */}
                      <div className="z-20 flex-1 flex flex-col justify-between h-full pointer-events-none">
                        
                        {/* Y-Axis */}
                        <div className="absolute top-6 bottom-8 left-2 flex flex-col justify-between text-[9px] text-slate-400 font-medium">
                          <span>100</span>
                          <span>75</span>
                          <span>50</span>
                          <span>25</span>
                          <span>0</span>
                        </div>

                        {/* X-Axis */}
                        <div className="absolute bottom-4 left-8 right-4 flex justify-between text-[9px] text-slate-400 font-medium border-t border-slate-200 pt-1">
                          <span>00:00</span>
                          <span>04:00</span>
                          <span>08:00</span>
                        </div>
                      </div>

                      {/* Legend (Plants) */}
                      <div className="absolute bottom-1 right-4 flex gap-3 text-[8px] font-medium text-slate-500 z-20">
                        <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-[#00D4FF]" /> Plant 1 - Pune</div>
                        <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-rose-400" /> Plant 2 - Chennai</div>
                        <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-purple-400" /> Plant 3 - Ahmedabad</div>
                        <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-emerald-400" /> Plant 4 - Bangalore</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}