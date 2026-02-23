import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative pt-44 pb-32 px-4 md:px-8 w-full overflow-hidden flex flex-col items-center justify-center min-h-[90vh] bg-[#0B1220]">

            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Radial Gradient Spotlight */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] opacity-20"
                    style={{ background: 'radial-gradient(circle at center, #3B82F6 0%, transparent 70%)' }} />

                {/* Abstract Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                {/* Noise/Grain Texture */}
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\"/%3E%3C/svg%3E')" }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">

                {/* Premium Label */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-[#00C2FF] drop-shadow-[0_0_8px_#00C2FF] animate-pulse"></span>
                    <span className="text-[#00C2FF] font-mono text-xs uppercase tracking-[0.2em] font-medium">
                        India's Leading Barter & Media Exchange Agency
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.05] mb-8"
                >
                    Transform Your Products Into <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#00C2FF] drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                        Nationwide Advertising Power.
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed"
                >
                    We enable brands to exchange products and unsold inventory for premium media placements across India's top platforms.
                </motion.p>

                {/* Trust Bullets */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-14"
                >
                    {[
                        "500+ Brand Partnerships",
                        "₹1000+ Cr Barter Value Executed",
                        "Pan-India Media Network"
                    ].map((bullet, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-gray-300 font-medium">
                            <CheckCircle2 className="text-[#00C2FF] w-5 h-5" />
                            <span>{bullet}</span>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center gap-5"
                >
                    {/* Primary CTA */}
                    <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] hover:-translate-y-1 w-full sm:w-auto">
                        Request Barter Proposal
                        <ArrowUpRight className="w-5 h-5" />
                    </button>

                    {/* Secondary CTA */}
                    <button className="border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl backdrop-blur-sm w-full sm:w-auto">
                        <PlayCircle className="w-5 h-5 text-[#00C2FF]" />
                        View Case Studies
                    </button>
                </motion.div>

            </div>

            {/* Bottom Fade Gradient for smooth transition to next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0B1220] to-transparent pointer-events-none" />
        </section>
    );
};

export default Hero;
