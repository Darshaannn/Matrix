import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Globe2, ShieldCheck, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const HERO_IMAGES = [
    '/assets/hero/hero1.jpg',
    '/assets/hero/hero2.jpg',
    '/assets/hero/hero3.jpg',
    '/assets/hero/hero4.jpg',
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 6000); // Change image every 6 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden bg-slate-900">

            {/* ── Background Slider ── */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <AnimatePresence>
                    <motion.div
                        key={currentIndex}
                        initial={{ x: '100%', scale: 1.1, opacity: 0 }}
                        animate={{ x: 0, scale: 1, opacity: 1 }}
                        exit={{ x: '-30%', scale: 0.95, opacity: 0 }}
                        transition={{
                            duration: 1.6,
                            ease: [0.65, 0, 0.35, 1]
                        }}
                        className="absolute inset-0 w-full h-full"
                        style={{ zIndex: 1 }}
                    >
                        <img
                            src={HERO_IMAGES[currentIndex]}
                            alt={`Matrix Hero ${currentIndex + 1}`}
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay to ensure text readability */}
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80 z-[2]" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Subtle Amber Glows - Repositioned on top of slider */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle,rgba(245,158,11,0.15)_0%,transparent_70%)] blur-[80px] pointer-events-none z-[1]" />

            {/* ── Main Content ── */}
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">

                {/* Kicker Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 mb-6 backdrop-blur-sm"
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
                    className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1] mb-6 font-sans"
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
                    className="text-slate-200 max-w-3xl mx-auto mb-8 text-lg md:text-xl font-medium leading-relaxed"
                >
                    We are a leading Barter &amp; Media Exchange Agency helping brands convert products and unsold inventory into nationwide advertising across Print, TV, OTT, Outdoor, Radio &amp; Digital platforms.
                </motion.p>

                {/* Trust Points */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-wrap justify-center gap-6 mb-8"
                >
                    {[
                        "500+ Brand Partnerships",
                        "₹1000+ Cr Barter Value Executed",
                        "Pan-India Media Network"
                    ].map((point, i) => (
                        <div key={i} className="flex items-center gap-2 text-white/90 font-medium text-sm md:text-base bg-white/5 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-sm">
                            <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center">
                                <span className="text-slate-900 text-[10px] font-bold">✔</span>
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
                    {/* Primary Button — Magnetic */}
                    <MagneticButton className="group w-full sm:w-auto px-10 py-4 rounded-full bg-amber-500 text-slate-900 font-bold text-lg shadow-[0_10px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2 transition-all">
                        Request Barter Proposal
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </MagneticButton>

                    {/* Secondary Button — Magnetic */}
                    <MagneticButton
                        className="w-full sm:w-auto px-10 py-4 rounded-full bg-white/10 text-white font-semibold text-lg border border-white/20 flex items-center justify-center gap-3 hover:bg-white/20 backdrop-blur-md shadow-sm transition-all"
                        onClick={() => document.getElementById('campaigns')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        View Case Studies
                    </MagneticButton>
                </motion.div>
            </div>


            {/* ── Enterprise Trust Signals (Bottom of hero) ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-10 left-0 w-full px-6 flex justify-center z-10"
            >

            </motion.div>

        </section>
    );
};

export default Hero;
