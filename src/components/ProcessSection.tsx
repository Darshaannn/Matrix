import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        num: "01",
        title: "Inventory Assessment",
        desc: "We conduct a rigorous audit of your available inventory or distressed assets, evaluating market liquidity and strategic leverage potential."
    },
    {
        num: "02",
        title: "Media Valuation",
        desc: "Assets are pegged against current secondary market benchmarks to establish a transparent, fair-value media credit line."
    },
    {
        num: "03",
        title: "Allocation Strategy",
        desc: "We engineer a bespoke media mix across National TV, Print, Digital, and OOH, optimized strictly for your target demographics."
    },
    {
        num: "04",
        title: "Multi-Platform Deployment",
        desc: "Seamless execution of your campaign using our established relationships with tier-1 media networks to ensure guaranteed visibility."
    },
    {
        num: "05",
        title: "Reporting & Amplification",
        desc: "Comprehensive post-campaign analytics and proof-of-execution metrics, demonstrating exact ROI on your physical inventory."
    }
];

const ProcessSection: React.FC = () => {
    return (
        <section className="bg-transparent py-32 px-4 relative overflow-hidden">

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-100/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-20" />

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
                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                                <span className="text-amber-700 font-mono text-[10px] uppercase tracking-[0.2em] font-semibold">
                                    Execution Protocol
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 font-sans">
                                The Matrix Framework.
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                A highly structured, boardroom-ready process designed to mitigate risk and maximize media leverage from day one.
                            </p>

                            <div className="w-full h-px bg-slate-200" />
                        </motion.div>
                    </div>
                </div>

                {/* Right side: The 5 Steps */}
                <div className="lg:w-2/3 relative">
                    {/* Vertical connecting line */}
                    <div className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-slate-200" />

                    <div className="flex flex-col gap-16 md:gap-24">
                        {steps.map((step) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="relative pl-20 md:pl-32 group"
                            >
                                {/* The node on the line */}
                                <div className="absolute left-6 md:left-10 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-amber-400 group-hover:bg-amber-500 transition-colors duration-300 shadow-md" />

                                <div className="flex flex-col gap-2">
                                    <span className="text-amber-600 font-mono text-xl md:text-2xl font-light tracking-tighter mb-1">
                                        {step.num}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-500 text-base md:text-lg leading-relaxed mt-2 max-w-xl">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProcessSection;
