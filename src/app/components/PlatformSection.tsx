import React from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  CheckCircle,
  Database,
  LineChart,
  Cpu,
  Briefcase,
  Zap,
} from "lucide-react";

export function PlatformSection() {
  const steps = [
    { name: "Enterprise Operations", icon: Database },
    { name: "Performance Signals", icon: LineChart },
    { name: "Execution Intelligence", icon: Cpu },
    { name: "Business Impact", icon: Briefcase },
    { name: "Leadership Action", icon: Zap },
  ];

  const outcomes = [
    "Faster, better decisions",
    "Reduced execution risk",
    "Improved margin protection",
    "Stronger operational control",
    "Enterprise-wide performance clarity",
  ];

  return (
    <section id="platform" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left Explanation */}
          <div className="mb-16 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 shadow-sm border border-blue-100">
              <span>How It Works</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] mb-8 leading-tight">
              An enterprise execution intelligence platform
              built for ERP-led organizations.
            </h3>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              We bridge the gap between operational execution
              and financial performance. Our platform
              continuously analyzes data from across your
              enterprise systems, surfacing the execution gaps
              that truly matter and providing the intelligence
              required to protect margins and drive strategic
              outcomes.
            </p>

            {/* Outcomes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {outcomes.map((outcome, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                  <span className="text-slate-700 font-medium">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Flow Diagram */}
          <div className="relative">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="flex flex-col items-center">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center w-full"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className={`w-full max-w-sm flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 ${
                        i === 2
                          ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/20 scale-105 z-10"
                          : "bg-white border-slate-200 text-slate-800 shadow-sm hover:border-blue-300"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${i === 2 ? "bg-white/20" : "bg-slate-100 text-[#2563EB]"}`}
                      >
                        <step.icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-lg">
                        {step.name}
                      </span>
                    </motion.div>

                    {i < steps.length - 1 && (
                      <div className="h-10 flex items-center justify-center text-slate-300 my-1">
                        <ArrowDown className="w-6 h-6 animate-bounce" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md bg-blue-100/50 rounded-full blur-[100px] -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}