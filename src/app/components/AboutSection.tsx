import React from 'react';
import { motion } from 'motion/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[40%] -right-4 md:-right-8 -translate-y-1/2 z-10 cursor-pointer w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center hover:bg-slate-50 hover:scale-105 transition-all"
      onClick={onClick}
    >
      <ChevronRight className="w-6 h-6 text-[#1E3A8A]" />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[40%] -left-4 md:-left-8 -translate-y-1/2 z-10 cursor-pointer w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center hover:bg-slate-50 hover:scale-105 transition-all"
      onClick={onClick}
    >
      <ChevronLeft className="w-6 h-6 text-[#1E3A8A]" />
    </div>
  );
};

export function AboutSection() {
  const leaders = [
    { name: "Alagan Sathianathan", role: "Founder & CEO", color: "from-blue-500 to-indigo-600" },
    { name: "Venky Srinivasan", role: "Co-Founder & CRO", color: "from-cyan-400 to-blue-500" },
    { name: "Sivarajan Thambi", role: "CTO", color: "from-indigo-500 to-purple-600" },
    { name: "Vijay Munusamy", role: "Solutions Delivery", color: "from-blue-600 to-cyan-500" },
    { name: "Rajendran", role: "Domain Advisory", color: "from-purple-500 to-indigo-500" },
    { name: "Saravanan", role: "AI Advisory", color: "from-cyan-500 to-indigo-600" }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    customPaging: (i: number) => (
      <div className="w-2.5 h-2.5 mx-1 rounded-full bg-slate-200 hover:bg-blue-400 transition-colors mt-8" />
    ),
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] mb-8 leading-tight">
            Who We Are
          </h2>
          <p className="text-xl text-slate-600 mb-6 leading-relaxed">
            Transformative AI is an enterprise product company focused on execution intelligence platforms for ERP-led organizations.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8">
            <h4 className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#0066FF] to-[#8000FF] uppercase mb-3">Our Vision</h4>
            <p className="text-lg md:text-xl font-medium text-[#1E3A8A]">
              "To help enterprises see execution clearly and turn operational performance into business advantage."
            </p>
          </div>
        </div>

        {/* Leadership Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-6xl mx-auto pb-12"
        >
          <style>{`
            .slick-dots { bottom: -20px; }
            .slick-dots li { margin: 0; width: auto; height: auto; }
            .slick-dots li.slick-active div { background-color: #2563EB; transform: scale(1.2); }
            .slick-track { display: flex; align-items: stretch; }
            .slick-slide { height: auto; display: flex; justify-content: center; }
            .slick-slide > div { width: 100%; }
          `}</style>
          
          <Slider {...sliderSettings}>
            {leaders.map((leader, i) => (
              <div key={i} className="px-4 py-2">
                <div className="group relative h-full flex flex-col">
                  <div className={`aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative bg-gradient-to-br ${leader.color} shadow-sm border border-slate-100/50 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500`}>
                    <div className="text-white/20 font-black text-6xl tracking-tighter">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {/* Glass UI overlay for subtle inner shadow/border */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />
                  </div>
                  
                  <div className="text-center mt-auto">
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{leader.name}</h4>
                    <p className="text-[#2563EB] font-medium">{leader.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
        
      </div>
    </section>
  );
}