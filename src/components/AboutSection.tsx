import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, ShieldCheck, BarChart4, Quote } from 'lucide-react';

const whyChooseUs = [
    { text: "Pan-India media reach", icon: Globe },
    { text: "Strong brand relationships", icon: ShieldCheck },
    { text: "Structured barter model", icon: Target },
    { text: "Transparent valuation", icon: BarChart4 },
];

const AboutSection: React.FC = () => {
    return (
        <section className="relative py-32 px-4 md:px-8 bg-[#0B1220] overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3B82F6] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

                {/* Left Column - Story & Mission */}
                <div className="flex-1 space-y-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]"></span>
                            <span className="text-[#00C2FF] font-mono text-[10px] uppercase tracking-widest font-semibold">About Matrix</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                            Redefining the Economics of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#00C2FF]">Advertising</span>
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                At Matrix, we believe that capital shouldn't be the only currency for scale. We help India's largest brands unlock the hidden value within their physical inventory, leveraging it to fund high-impact, nationwide media campaigns.
                            </p>
                            <p>
                                Our mission is to engineer zero-cash-burn growth by strategically aligning brand inventory with premium media networks—creating a frictionless ecosystem where products seamlessly transform into visibility.
                            </p>
                        </div>
                    </motion.div>

                    {/* Why Choose Us Bullets */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {whyChooseUs.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className="flex items-center gap-3 bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                                    <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-5 h-5 text-[#3B82F6]" />
                                    </div>
                                    <span className="text-gray-300 font-medium text-sm md:text-base">{item.text}</span>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Right Column - Founder Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="flex-1 w-full max-w-md lg:max-w-none relative"
                >
                    {/* Founder Card */}
                    <div className="relative rounded-[2rem] bg-gradient-to-b from-white/5 to-white/[0.01] border border-white/10 p-1 overflow-hidden group">
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />

                        <div className="bg-[#040812] rounded-[1.8rem] p-8 md:p-10 relative overflow-hidden">
                            {/* Decorative Quote Icon */}
                            <Quote className="absolute top-6 right-6 w-24 h-24 text-white/[0.03] rotate-12 pointer-events-none" strokeWidth={1} />

                            <div className="relative z-10">
                                <p className="text-xl md:text-2xl font-medium text-white italic leading-snug mb-10 text-gray-300">
                                    "We don't just trade media; we structure liquidity. By transforming inventory into advertising power, we allow brands to scale aggressively without touching their working capital."
                                </p>

                                <div className="flex items-center gap-5">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#00C2FF] p-[2px]">
                                        <div className="w-full h-full rounded-full bg-[#0B1220] overflow-hidden">
                                            {/* Placeholder for Founder Image */}
                                            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                                                <span className="text-white/50 text-xl font-bold">RM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Rohit Macarius</h4>
                                        <p className="text-[#3B82F6] text-sm font-mono tracking-widest uppercase mt-1">Founder & CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#00C2FF] opacity-20 blur-[60px] rounded-full pointer-events-none" />
                </motion.div>

            </div>
        </section>
    );
};

export default AboutSection;
