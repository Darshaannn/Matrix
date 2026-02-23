import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Globe2, ShieldCheck } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[90vh] bg-[#020617] flex flex-col items-center justify-center pt-32 pb-20 px-4 md:px-8 overflow-hidden">

            {/* ── Background Infrastructure Elements (Restrained) ── */}
            {/* Grain texture - much lower opacity as requested */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
                style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\"/%3E%3C/svg%3E')" }}
            />
            {/* Subtle top spotlight - calmer and more confident */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.08) 0%, transparent 70%)' }}
            />
            {/* Faint grid line overlay for that infrastructure feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none" />


            {/* ── Main Content ── */}
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">

                {/* Kicker Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    <span className="text-[10px] sm:text-xs font-mono font-medium tracking-[0.2em] text-blue-400 uppercase">
                        Strategic Media Infrastructure
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.05] mb-6 font-sans"
                >
                    Convert Inventory into <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
                        National Media Power.
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-medium leading-relaxed"
                >
                    India's leading media barter infrastructure helping brands conserve cash flow and scale visibility across all major networks.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
                >
                    {/* Primary outcome-focused CTA (Yellow/Gold for confidence & action) */}
                    <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFDC58] text-black font-semibold text-base flex items-center justify-center gap-3 hover:bg-[#ffefa0] hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(255,220,88,0.15)]">
                        Structure a Barter Deal
                        <ArrowRight size={18} strokeWidth={2.5} />
                    </button>

                    {/* Secondary exploration CTA (Dark/Subtle) */}
                    <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-semibold text-base border border-white/10 flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
                        Explore Case Studies
                    </button>
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
                    <div className="flex items-center gap-3 opacity-60">
                        <BarChart3 size={18} className="text-white" />
                        <span className="text-sm font-medium text-white tracking-wide">₹1000+ Cr Media Structured</span>
                    </div>
                    <div className="hidden md:block w-px h-4 bg-white/20" />
                    <div className="flex items-center gap-3 opacity-60">
                        <Globe2 size={18} className="text-white" />
                        <span className="text-sm font-medium text-white tracking-wide">Pan-India Media Access</span>
                    </div>
                    <div className="hidden md:block w-px h-4 bg-white/20" />
                    <div className="flex items-center gap-3 opacity-60">
                        <ShieldCheck size={18} className="text-white" />
                        <span className="text-sm font-medium text-white tracking-wide">250+ Brands Served</span>
                    </div>
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;
