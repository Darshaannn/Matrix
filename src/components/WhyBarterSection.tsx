import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp, Handshake, Layers } from 'lucide-react';

const reasons = [
    {
        title: "Preserve Working Capital",
        description: "Fund your campaigns using existing inventory instead of depleting liquid cash reserves.",
        icon: Wallet,
    },
    {
        title: "Maximize Media Reach",
        description: "Transform stock into highly visible, high-impact national media assets.",
        icon: TrendingUp,
    },
    {
        title: "Structured Deal Value Negotiation",
        description: "Guarantee transparent, market-aligned valuation for both inventory and media procured.",
        icon: Handshake,
    },
    {
        title: "Multi-Platform Media Execution",
        description: "Access and execute across top-tier TV, digital, print, and cinema networks seamlessly.",
        icon: Layers,
    }
];

const WhyBarterSection: React.FC = () => {
    return (
        <section className="bg-transparent py-24 md:py-32 px-4 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24 relative z-10">

                {/* Left: Sticky Header Area */}
                <div className="md:w-1/3 flex flex-col items-start bg-transparent">
                    <div className="sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-amber-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 font-semibold">
                                THE STRATEGIC ADVANTAGE
                            </p>
                            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-slate-800 leading-[1.1] mb-6 font-sans">
                                Why Media Barter <br className="hidden lg:block" /> Makes Sense
                            </h2>
                            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-sm font-medium">
                                Most brands view media strictly as an expense.
                                By utilizing structured barter, we convert your operational output directly into marketing leverage.
                            </p>

                            <div className="mt-10 h-px w-full bg-gradient-to-r from-slate-200 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>

                {/* Right: The Grid of Reasons */}
                <div className="md:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-y-16">
                        {reasons.map((reason, index) => {
                            const Icon = reason.icon;
                            return (
                                <motion.div
                                    key={reason.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col gap-4 group"
                                >
                                    {/* Icon Container - Clean, Light Luxury */}
                                    <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center border border-amber-100 group-hover:bg-amber-100 transition-colors duration-300">
                                        <Icon size={22} className="text-amber-700" strokeWidth={1.5} />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-2 tracking-tight group-hover:text-amber-700 transition-colors duration-300">
                                            {reason.title}
                                        </h3>
                                        <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                                            {reason.description}
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

export default WhyBarterSection;
