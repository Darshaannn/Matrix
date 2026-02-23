import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, RefreshCcw, Landmark, LineChart, ShieldCheck } from 'lucide-react';

const reasons = [
    {
        title: "Preserve Working Capital",
        description: "Fund your media campaigns using existing inventory instead of depleting liquid cash reserves.",
        icon: Wallet,
    },
    {
        title: "Improve Inventory Turnover",
        description: "Transform slow-moving or excess stock into highly visible, high-impact national media assets.",
        icon: RefreshCcw,
    },
    {
        title: "Unlock Premium Media",
        description: "Access top-tier television, print, and digital networks that would otherwise strain your marketing budget.",
        icon: Landmark,
    },
    {
        title: "Structured Valuation Model",
        description: "We guarantee transparent, market-aligned valuation for both your inventory and the media procured.",
        icon: LineChart,
    },
    {
        title: "Tax-Efficient Allocation",
        description: "Leverage structured barter transactions to optimize your corporate tax liabilities organically.",
        icon: ShieldCheck,
    }
];

const WhyBarterSection: React.FC = () => {
    return (
        <section className="bg-white py-24 md:py-32 px-4 border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24">

                {/* Left: Sticky Header Area */}
                <div className="md:w-1/3 flex flex-col items-start bg-transparent">
                    <div className="sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-blue-600 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 font-semibold">
                                The Strategic Advantage
                            </p>
                            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[#0B1220] leading-[1.1] mb-6 font-sans">
                                Why Media Barter <br className="hidden lg:block" /> Makes Sense
                            </h2>
                            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-sm">
                                Most brands view media strictly as an expense.
                                By utilizing structured barter, we convert your operational output directly into marketing leverage—turning inventory into an active growth vehicle.
                            </p>

                            <div className="mt-10 h-px w-full bg-gradient-to-r from-gray-200 to-transparent"></div>
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
                                    {/* Icon Container - Clean, minimal, subtle blue */}
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50/50 flex items-center justify-center border border-blue-100/50 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors duration-300">
                                        <Icon size={22} className="text-blue-600" strokeWidth={1.5} />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-[#0B1220] mb-2 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                                            {reason.title}
                                        </h3>
                                        <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
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
