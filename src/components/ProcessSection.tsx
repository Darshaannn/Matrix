import React from 'react';
import { motion } from 'framer-motion';
import { Package, Repeat, Rocket } from 'lucide-react';

const steps = [
    {
        icon: Package,
        title: "You provide your products or inventory",
        desc: "Share your available stock, slow-moving inventory, or service capacity with us."
    },
    {
        icon: Repeat,
        title: "We match them with suitable media inventory",
        desc: "We leverage our pan-India network to trade your products for premium advertising space."
    },
    {
        icon: Rocket,
        title: "Your brand gets high-impact advertising",
        desc: "Boost visibility across Print, TV, OTT, and more without any direct cash outflow."
    }
];

const WhatIsBarter: React.FC = () => {
    return (
        <section id="what-is-barter" className="bg-[#0B1120] py-32 px-4 relative overflow-hidden">

            {/* Background elements - Cleaned for performance */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 relative z-10">

                {/* Left side: Sticky Intro */}
                <div className="lg:w-1/3">
                    <div className="sticky top-40">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                                <span className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                                    Simplified Trading
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-sans">
                                What is Barter <br /> Advertising?
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Barter advertising allows brands to exchange products or services instead of cash to obtain premium advertising space across leading media platforms.
                            </p>

                            <div className="flex flex-col gap-4">
                                <p className="text-amber-500 font-bold text-xl italic font-sans flex items-center gap-2">
                                    Simple. Transparent. High ROI.
                                </p>
                            </div>

                            <div className="mt-10 w-full h-px bg-white/10" />
                        </motion.div>
                    </div>
                </div>

                {/* Right side: The 3 Steps */}
                <div className="lg:w-2/3 relative">
                    {/* Vertical connecting line */}
                    <div className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-white/10" />

                    <div className="flex flex-col gap-12 md:gap-20">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: index * 0.2 }}
                                    className="relative pl-20 md:pl-32 group"
                                >
                                    {/* The node/icon on the line */}
                                    <div className="absolute left-6 md:left-10 top-0 -translate-x-1/2 w-12 h-12 rounded-2xl bg-slate-900 border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500 transition-all duration-300 shadow-xl group-hover:shadow-amber-500/20 z-10">
                                        <Icon size={24} className="text-amber-500 group-hover:text-neutral-950 transition-colors" />
                                    </div>

                                    <div className="flex flex-col gap-2 pt-2">
                                        <span className="text-amber-500/50 font-mono text-xl md:text-2xl font-bold tracking-tighter mb-1">
                                            Step 0{index + 1}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-amber-500 transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-400 text-base md:text-lg leading-relaxed mt-2 max-w-xl">
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhatIsBarter;
