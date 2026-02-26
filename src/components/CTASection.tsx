import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const CTASection: React.FC = () => {
    return (
        <section id="contact" className="w-full py-24 md:py-32 px-4 relative overflow-hidden bg-[#FFFBEB] border-t border-slate-200/80">
            {/* Redundant grain removed (handled by App.tsx) */}

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                {/* Left side: Content & Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 mb-6 self-start"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-amber-500 uppercase">Get in Touch</span>
                    </motion.div>

                    <p className="text-slate-600 text-lg mb-12 max-w-lg font-medium leading-relaxed">
                        Ready to leverage your inventory for national media dominance? Fill out the form and our strategic team will structure a custom proposal.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-slate-600">
                            <div className="w-12 h-12 rounded-xl bg-slate-900/5 flex items-center justify-center border border-slate-200">
                                <MapPin size={20} className="text-amber-500" />
                            </div>
                            <span className="font-semibold">Mumbai | Delhi | Bangalore</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-600">
                            <div className="w-12 h-12 rounded-xl bg-slate-900/5 flex items-center justify-center border border-slate-200">
                                <Mail size={20} className="text-amber-500" />
                            </div>
                            <span className="font-semibold">partnerships@matrixbarter.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-600">
                            <div className="w-12 h-12 rounded-xl bg-slate-900/5 flex items-center justify-center border border-slate-200">
                                <Phone size={20} className="text-amber-500" />
                            </div>
                            <span className="font-semibold">+91 0000 000 000</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right side: Lead Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-10 rounded-[2.5rem] bg-slate-900/5 border border-slate-200 backdrop-blur-sm shadow-2xl relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-600 ml-1">Full Name</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-slate-900/50 border border-slate-200 p-4 rounded-xl text-slate-900 placeholder:text-slate-700 focus:outline-none focus:border-amber-500/50 transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-600 ml-1">Work Email</label>
                            <input type="email" placeholder="john@company.com" className="w-full bg-slate-900/50 border border-slate-200 p-4 rounded-xl text-slate-900 placeholder:text-slate-700 focus:outline-none focus:border-amber-500/50 transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-600 ml-1">Phone Number</label>
                            <input type="tel" placeholder="+91 0000 000 000" className="w-full bg-slate-900/50 border border-slate-200 p-4 rounded-xl text-slate-900 placeholder:text-slate-700 focus:outline-none focus:border-amber-500/50 transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-600 ml-1">Company Name</label>
                            <input type="text" placeholder="Enterprise Ltd." className="w-full bg-slate-900/50 border border-slate-200 p-4 rounded-xl text-slate-900 placeholder:text-slate-700 focus:outline-none focus:border-amber-500/50 transition-colors" />
                        </div>
                        <div className="space-y-2 md:col-span-1">
                            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-600 ml-1">Product Category</label>
                            <input type="text" placeholder="e.g. FMCG" className="w-full bg-slate-900/50 border border-slate-200 p-4 rounded-xl text-slate-900 placeholder:text-slate-700 focus:outline-none focus:border-amber-500/50 transition-colors" />
                        </div>
                        <div className="space-y-2 md:col-span-1">
                            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-600 ml-1">Est. Inventory Value</label>
                            <input type="text" placeholder="e.g. ₹5 Cr" className="w-full bg-slate-900/50 border border-slate-200 p-4 rounded-xl text-slate-900 placeholder:text-slate-700 focus:outline-none focus:border-amber-500/50 transition-colors" />
                        </div>
                        <div className="md:col-span-2 pt-4">
                            <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                                SUBMIT PROPOSAL REQUEST <Send size={20} strokeWidth={3} />
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
