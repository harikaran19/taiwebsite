import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Building2, User, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    toast.success('Message sent successfully!', {
      description: "Our team will be in touch shortly."
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 leading-tight">
              Let’s Talk
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              See how Transformative AI can bring execution clarity to your enterprise. Fill out the form, and our team will be in touch shortly.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Email Us</h4>
                  <a href="mailto:contact@transformativeai.co" className="text-slate-600 hover:text-[#2563EB] transition-colors">
                    contact@transformativeai.co
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Call Us</h4>
                  <a href="tel:+18001234567" className="text-slate-600 hover:text-[#2563EB] transition-colors">
                    +1 (800) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Visit Us</h4>
                  <p className="text-slate-600">
                    Dubai & India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 relative">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-transparent rounded-3xl -z-10 pointer-events-none" />
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User className="h-5 w-5" />
                    </div>
                    <input 
                      id="firstName"
                      required
                      type="text" 
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all outline-none"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User className="h-5 w-5" />
                    </div>
                    <input 
                      id="lastName"
                      required
                      type="text" 
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700">Work Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input 
                    id="email"
                    required
                    type="email" 
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all outline-none"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-semibold text-slate-700">Company Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <input 
                    id="company"
                    required
                    type="text" 
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all outline-none"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">How can we help?</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell us about your execution challenges..."
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2563EB] hover:bg-[#1E3A8A] disabled:bg-slate-400 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Request a Demo'
                )}
              </button>
            </form>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}