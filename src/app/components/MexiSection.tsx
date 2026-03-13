import React from 'react';
import { motion } from 'motion/react';
import { BrainCircuit } from 'lucide-react';

// ── Card 1 mockup ─────────────────────────────────────────────────────────────
const PlantPerformanceMockup = () => (
  <div className="mt-6 bg-white rounded-xl shadow-[0_4px_28px_rgba(139,92,246,0.10)] border border-slate-100 overflow-hidden">

    {/* KPI grid */}
    <div className="grid grid-cols-2 gap-px bg-slate-100">
      {[
        { label: 'OEE',          value: '87%',     sub: '↑ 2.4%',     subColor: 'text-emerald-500', valueColor: 'text-purple-600' },
        { label: 'Output',       value: '12.4k',   sub: 'units today', subColor: 'text-slate-400',   valueColor: 'text-blue-600'   },
        { label: 'Downtime',     value: '2.1h',    sub: '↑ 0.3h',     subColor: 'text-red-400',     valueColor: 'text-amber-500'  },
        { label: 'Quality Rate', value: '99.2%',   sub: '↑ 0.1%',     subColor: 'text-emerald-500', valueColor: 'text-emerald-600'},
      ].map((kpi) => (
        <div key={kpi.label} className="bg-white px-3 pt-3 pb-2.5">
          <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{kpi.label}</div>
          <div className={`text-[18px] font-bold leading-tight ${kpi.valueColor}`}>{kpi.value}</div>
          <div className={`text-[9px] font-semibold mt-0.5 ${kpi.subColor}`}>{kpi.sub}</div>
        </div>
      ))}
    </div>

    {/* Sparkline chart */}
    <div className="px-3 pt-3 pb-2 border-t border-slate-50">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Production Trend — Last 8h</span>
        <span className="text-[9px] text-emerald-500 font-semibold">+4.7%</span>
      </div>
      <svg width="100%" height="44" viewBox="0 0 220 44" preserveAspectRatio="none">
        <defs>
          <linearGradient id="mexiChartGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
          </linearGradient>
        </defs>
        {/* Area fill */}
        <path
          d="M0,34 L28,30 L55,32 L80,22 L108,20 L135,14 L165,9 L193,5 L220,2 L220,44 L0,44 Z"
          fill="url(#mexiChartGrad1)"
        />
        {/* Line */}
        <path
          d="M0,34 L28,30 L55,32 L80,22 L108,20 L135,14 L165,9 L193,5 L220,2"
          fill="none" stroke="#8b5cf6" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round"
        />
        {/* Dots at key inflection points */}
        {[[80,22],[135,14],[220,2]].map(([cx,cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.5" fill="#8b5cf6" />
        ))}
      </svg>
    </div>

    {/* Status pill */}
    <div className="px-3 py-2.5 border-t border-slate-50 bg-emerald-50/60 flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] font-semibold text-emerald-700">All systems operational</span>
      </div>
      <span className="text-[9px] text-slate-400 font-medium">Updated just now</span>
    </div>
  </div>
);

// ── Card 2 mockup ─────────────────────────────────────────────────────────────
const ExecutionMonitoringMockup = () => {
  const lines = [
    { name: 'Line 1', status: 'Running',     pct: 85, dotColor: 'bg-emerald-400', barColor: 'bg-emerald-400', labelColor: 'text-emerald-600' },
    { name: 'Line 2', status: 'Warning',     pct: 58, dotColor: 'bg-amber-400',   barColor: 'bg-amber-400',   labelColor: 'text-amber-600'   },
    { name: 'Line 4', status: 'Running',     pct: 91, dotColor: 'bg-emerald-400', barColor: 'bg-emerald-400', labelColor: 'text-emerald-600' },
    { name: 'Line 3', status: 'Maintenance', pct: 22, dotColor: 'bg-slate-300',   barColor: 'bg-slate-300',   labelColor: 'text-slate-400'   },
  ];

  return (
    <div className="mt-6 bg-white rounded-xl shadow-[0_4px_28px_rgba(59,130,246,0.10)] border border-slate-100 overflow-hidden">

      {/* Header */}
      <div className="px-3 py-2.5 border-b border-slate-100 flex items-center justify-between bg-white">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
          <span className="text-[10px] font-bold text-slate-700 tracking-tight">Production Lines</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-[9px] font-semibold text-slate-400">Live</span>
        </div>
      </div>

      {/* Lines */}
      <div className="divide-y divide-slate-50/80">
        {lines.map((line) => (
          <div key={line.name} className="px-3 py-2.5 flex items-center gap-2.5">
            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${line.dotColor}`} />
            <span className="text-[10px] font-semibold text-slate-600 w-11 flex-shrink-0">{line.name}</span>
            <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${line.barColor}`}
                style={{ width: `${line.pct}%` }}
              />
            </div>
            <span className="text-[9px] font-semibold text-slate-400 w-7 text-right">{line.pct}%</span>
            <span className={`text-[9px] font-bold w-[62px] text-right flex-shrink-0 ${line.labelColor}`}>
              {line.status}
            </span>
          </div>
        ))}
      </div>

      {/* AI Insight banner */}
      <div className="mx-3 mb-3 mt-2 rounded-lg overflow-hidden border border-blue-100/80 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
        <div className="flex items-start gap-2.5 p-2.5">
          <div className="flex-shrink-0 mt-px w-[22px] h-[22px] rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-sm">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1L6.2 3.8L9 4.2L7 6.1L7.5 9L5 7.6L2.5 9L3 6.1L1 4.2L3.8 3.8L5 1Z" fill="white"/>
            </svg>
          </div>
          <div>
            <span className="text-[10px] font-bold text-indigo-700">AI Insight: </span>
            <span className="text-[10px] text-indigo-600 font-medium">Production delay risk detected on Line 3</span>
            <div className="mt-1 flex items-center gap-1.5">
              <span className="inline-block px-1.5 py-px rounded-full bg-amber-100 text-amber-600 text-[8px] font-bold">High Risk</span>
              <span className="text-[8px] text-slate-400">Recommended: schedule preventive check</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Card 3 mockup ─────────────────────────────────────────────────────────────
const RiskSignalsMockup = () => (
  <div className="mt-6 bg-white/60 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_rgba(79,70,229,0.08)] border border-slate-100/80 overflow-hidden relative">
    {/* Background glow */}
    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl"></div>
    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 rounded-full bg-purple-500/10 blur-2xl"></div>

    <div className="px-4 py-3 border-b border-slate-100/50 bg-white/40 flex items-center justify-between relative z-10">
      <div className="flex items-center gap-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-indigo-500">
          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Active Signals</span>
      </div>
      <div className="flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
      </div>
    </div>

    <div className="p-3 space-y-2.5 relative z-10">
      {/* Alert 1 */}
      <div className="bg-white rounded-lg p-3 shadow-sm border border-red-100/50 relative overflow-hidden group hover:shadow-md transition-shadow">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-400 rounded-l-lg"></div>
        <div className="flex items-start justify-between mb-1.5 pl-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold text-slate-800">Supply Bottleneck</span>
            <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-red-50 text-red-600">High Risk</span>
          </div>
          <span className="text-[9px] font-semibold text-slate-400">98% Match</span>
        </div>
        <p className="text-[10px] text-slate-500 leading-snug pl-1 mb-2">
          Component shortage detected for <span className="font-semibold text-slate-700">SKU-892</span>. Estimated delay: 4 days.
        </p>
        <div className="pl-1 flex gap-2">
          <button className="text-[9px] font-semibold bg-red-50 hover:bg-red-100 text-red-600 px-2.5 py-1 rounded transition-colors">
            View Alternatives
          </button>
        </div>
      </div>

      {/* Alert 2 */}
      <div className="bg-white rounded-lg p-3 shadow-sm border border-amber-100/50 relative overflow-hidden group hover:shadow-md transition-shadow">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400 rounded-l-lg"></div>
        <div className="flex items-start justify-between mb-1.5 pl-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold text-slate-800">Quality Variance</span>
            <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-amber-50 text-amber-600">Medium</span>
          </div>
          <span className="text-[9px] font-semibold text-slate-400">82% Match</span>
        </div>
        <p className="text-[10px] text-slate-500 leading-snug pl-1">
          Micro-vibrations on <span className="font-semibold text-slate-700">Line 4</span> suggest upcoming calibration failure.
        </p>
      </div>
    </div>
  </div>
);

// ── Card 4 mockup ─────────────────────────────────────────────────────────────
const FinancialImpactMockup = () => (
  <div className="mt-6 bg-white rounded-xl shadow-[0_8px_30px_rgba(236,72,153,0.08)] border border-slate-100 overflow-hidden relative">
    <div className="p-4 bg-gradient-to-br from-pink-50/50 to-rose-50/20 border-b border-slate-100/60 flex justify-between items-end">
      <div>
        <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Projected Margin Impact</div>
        <div className="text-2xl font-bold text-slate-800 tracking-tight">-$42.5k</div>
        <div className="text-[10px] font-medium text-slate-500 mt-0.5">This week's variance</div>
      </div>
      <div className="flex flex-col items-end">
        <div className="px-2 py-1 bg-rose-100 text-rose-700 rounded text-[9px] font-bold mb-1.5">-2.4% vs Target</div>
        <svg width="40" height="20" viewBox="0 0 40 20" className="opacity-80">
          <path d="M0 5 L10 5 L15 15 L25 10 L30 18 L40 18" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>

    <div className="p-3 bg-white">
      <div className="text-[10px] font-bold text-slate-700 mb-2.5 px-1">Top Drivers</div>
      <div className="space-y-2">
        {[
          { label: 'Downtime (Line 3)', value: '-$28.2k', pct: '66%', color: 'bg-rose-500' },
          { label: 'Yield Loss', value: '-$9.1k', pct: '21%', color: 'bg-rose-400' },
          { label: 'Premium Freight', value: '-$5.2k', pct: '13%', color: 'bg-rose-300' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-1">
            <div className="w-24 text-[10px] font-medium text-slate-600 truncate">{item.label}</div>
            <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${item.color}`} style={{ width: item.pct }}></div>
            </div>
            <div className="w-12 text-right text-[10px] font-bold text-slate-700">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 mx-1 p-2 rounded-lg bg-emerald-50 border border-emerald-100/50 flex items-start gap-2">
         <div className="mt-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-sm">
           <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
             <polyline points="20 6 9 17 4 12"></polyline>
           </svg>
         </div>
         <div>
           <div className="text-[9px] font-bold text-emerald-800 mb-0.5">Recommended Action</div>
           <div className="text-[9px] text-emerald-700 leading-tight">Re-route Job #492 to Line 2 to recover $18k in margin.</div>
         </div>
      </div>
    </div>
  </div>
);

// ── Main component ─────────────────────────────────────────────────────────────
export function MexiSection() {
  const cards = [
    {
      step: "1",
      title: 'Plant Performance Visibility',
      description: 'Gain unified visibility across all plants. Identify performance gaps instantly with our enterprise-wide dashboard.',
      bgGradient: 'bg-gradient-to-br from-purple-100/50 via-pink-50/50 to-white',
      badgeGradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
      colSpan: 'md:col-span-1',
      mockup: <PlantPerformanceMockup />,
    },
    {
      step: "2",
      title: 'Execution Monitoring',
      description: 'Continuous monitoring of production line metrics against ERP schedules to highlight variance before it impacts delivery.',
      bgGradient: 'bg-gradient-to-br from-slate-100/50 via-blue-50/30 to-white',
      badgeGradient: 'bg-gradient-to-r from-blue-400 to-indigo-500',
      colSpan: 'md:col-span-1',
      mockup: <ExecutionMonitoringMockup />,
    },
    {
      step: "3",
      title: 'Risk & Intent Signals',
      description: 'Proactively detect supply chain bottlenecks, quality risks, and maintenance needs by analyzing cross-system patterns.',
      bgGradient: 'bg-gradient-to-br from-slate-100/50 via-blue-50/30 to-white',
      badgeGradient: 'bg-gradient-to-r from-indigo-500 to-purple-500',
      colSpan: 'md:col-span-1',
      mockup: <RiskSignalsMockup />,
    },
    {
      step: "4",
      title: 'Financial Impact Linkage',
      description: 'Automatically map operational variances to financial outcomes, providing clear margin impact and recommended actions.',
      bgGradient: 'bg-gradient-to-br from-purple-100/50 via-pink-50/50 to-white',
      badgeGradient: 'bg-gradient-to-r from-pink-500 to-rose-400',
      colSpan: 'md:col-span-1',
      mockup: <FinancialImpactMockup />,
    },
  ];

  return (
    <section id="mexi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 shadow-sm border border-blue-100">
            <span>Built for Execution</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] mb-6 leading-tight">
            MEXI — Manufacturing Execution Intelligence
          </h3>
          <p className="text-lg text-slate-600 mb-8">
            Purpose-built for complex manufacturing environments to monitor execution risks, identify plant-level performance gaps, and connect operational activities to margin outcomes.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-[32px] p-8 md:p-10 shadow-sm border border-slate-100/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col ${card.bgGradient}`}
            >
              <div className="flex items-start gap-4 mb-4 z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md ${card.badgeGradient}`}>
                  {card.step}
                </div>
                <h4 className="text-2xl font-bold text-[#0f172a] tracking-tight leading-tight pt-0.5">
                  {card.title}
                </h4>
              </div>
              
              <p className="text-slate-600 mb-4 pl-12 z-10 leading-relaxed font-medium">
                {card.description}
              </p>
              
              <div className="mt-auto w-full">
                {card.mockup}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}