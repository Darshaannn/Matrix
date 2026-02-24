import { motion } from 'framer-motion';
import { BarChart3, Globe2, ShieldCheck } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[90vh] bg-[#FFFBEB] flex flex-col items-center justify-center pt-32 pb-20 px-4 md:px-8 overflow-hidden">

            {/* ── Background Infrastructure Elements (Restrained) ── */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBEB] via-[#FFFBEB] to-[#FDE68A] opacity-40 pointer-events-none" />

            {/* Subtle Light Beam (Luxury variant) */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1px] h-[120%] bg-gradient-to-b from-transparent via-amber-200/40 to-transparent rotate-[25deg] blur-[80px] scale-x-[600]" />
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1px] h-[120%] bg-gradient-to-b from-transparent via-amber-200/20 to-transparent rotate-[-15deg] blur-[60px] scale-x-[400]" />

            {/* Soft Amber Spotlight */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none opacity-[0.2]"
                style={{ background: 'radial-gradient(circle, #FDE68A 0%, transparent 70%)', filter: 'blur(80px)' }}
            />

            {/* Grain texture - much lower opacity as requested */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
                style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\"/%3E%3C/svg%3E')" }}
            />


            {/* ── Main Content ── */}
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">

                {/* Kicker Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-300/50 bg-amber-100/30 mb-8"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                    <span className="text-[10px] sm:text-xs font-mono font-medium tracking-[0.2em] text-amber-700 uppercase">
                        Strategic Media Infrastructure
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-6 font-sans relative z-10"
                >
                    Convert Product Inventory into <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-900">
                        Media Visibility Without Cash Burn.
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-slate-700 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-medium leading-relaxed relative z-10"
                >
                    Structured barter media solutions for brands across Print, TV, Digital, Radio & Cinema.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
                >
                    {/* Primary barter deal CTA */}
                    <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-slate-900 text-white font-bold text-base shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all duration-300 relative z-10">
                        Structure a Barter Deal
                    </button>

                    {/* Secondary exploration CTA */}
                    <a href="#campaigns" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-semibold text-base border border-slate-200 flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors shadow-sm relative z-10">
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
