import { motion } from 'framer-motion';
import { BarChart3, Globe2, ShieldCheck, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[95vh] bg-[#0B1120] flex flex-col items-center justify-center pt-32 pb-20 px-4 md:px-8 overflow-hidden">

            {/* Subtle Amber Glows - Reduced for performance */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle,rgba(245,158,11,0.05)_0%,transparent_70%)] blur-[80px] pointer-events-none" />


            {/* ── Main Content ── */}
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">

                {/* Kicker Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 mb-8"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-amber-500 uppercase">
                        Scale Your Brand with Barter
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1] mb-8 font-sans"
                >
                    Transform Your Products Into <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
                        Powerful Advertising
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-slate-400 max-w-3xl mx-auto mb-10 text-lg md:text-xl font-medium leading-relaxed"
                >
                    We are a leading Barter & Media Exchange Agency helping brands convert products and unsold inventory into nationwide advertising across Print, TV, OTT, Outdoor, Radio & Digital platforms.
                </motion.p>

                {/* Trust Points */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-wrap justify-center gap-6 mb-12"
                >
                    {[
                        "500+ Brand Partnerships",
                        "₹1000+ Cr Barter Value Executed",
                        "Pan-India Media Network"
                    ].map((point, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-300 font-medium text-sm md:text-base">
                            <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                                <span className="text-amber-500 text-xs">✔</span>
                            </div>
                            {point}
                        </div>
                    ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
                >
                    {/* Primary Button */}
                    <button className="group w-full sm:w-auto px-10 py-5 rounded-full bg-amber-500 text-neutral-950 font-bold text-lg shadow-[0_10px_30px_rgba(245,158,11,0.2)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                        Request Barter Proposal
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Secondary Button */}
                    <a href="#campaigns" className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 text-white font-semibold text-lg border border-white/10 flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                        View Case Studies
                    </a>
                </motion.div>
            </div>


            {/* ── Enterprise Trust Signals (Bottom of hero) ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-10 left-0 w-full px-6 flex justify-center"
            >
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center max-w-4xl border-t border-white/5 pt-8">
                    <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity">
                        <BarChart3 size={18} className="text-amber-500" />
                        <span className="text-sm font-bold text-white tracking-wide">₹1000+ Cr Executed</span>
                    </div>
                    <div className="hidden md:block w-px h-4 bg-white/10" />
                    <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity">
                        <Globe2 size={18} className="text-amber-500" />
                        <span className="text-sm font-bold text-white tracking-wide">Pan-India Network</span>
                    </div>
                    <div className="hidden md:block w-px h-4 bg-white/10" />
                    <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity">
                        <ShieldCheck size={18} className="text-amber-500" />
                        <span className="text-sm font-bold text-white tracking-wide">500+ Brands Served</span>
                    </div>
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;
