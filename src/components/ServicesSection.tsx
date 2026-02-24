import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Target, Newspaper, Tv, Clapperboard, RadioTower } from 'lucide-react';

const services = [
    {
        title: "Barter Valuation Framework",
        description: "Scientific appraisal of your corporate inventory against real-time media market rates.",
        icon: Calculator,
    },
    {
        title: "Media Acquisition Strategy",
        description: "Tactical planning to secure premium network inventory without capital deployment.",
        icon: Target,
    },
    {
        title: "Print & Regional Media Integration",
        description: "Deep penetration into tier-2 & tier-3 markets using localized print networks.",
        icon: Newspaper,
    },
    {
        title: "TV & OTT Activation",
        description: "High-impact brand visibility across leading national television and streaming platforms.",
        icon: Tv,
    },
    {
        title: "Outdoor & Cinema Execution",
        description: "Commanding physical presence through out-of-home and premium multiplex placements.",
        icon: Clapperboard,
    },
    {
        title: "Digital / Programmatic Amplification",
        description: "Precision-targeted digital performance marketing fueled entirely by barter credits.",
        icon: RadioTower,
    }
];

const ServicesSection: React.FC = () => {
    return (
        <section id="capabilities" className="py-24 md:py-32 px-4 relative bg-[#111827] border-t border-white/5">
            <div className="max-w-7xl mx-auto z-10 relative">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                        <span className="text-[10px] sm:text-xs font-mono font-medium tracking-[0.2em] text-blue-400 uppercase">
                            What We Do
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-sans"
                    >
                        Strategic Media Capabilities
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto font-medium"
                    >
                        End-to-end infrastructure specifically designed to execute corporate inventory into national marketing dominance.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
                            >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                {/* Icon Container */}
                                <div className="w-14 h-14 rounded-full bg-black/40 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 mb-6 transition-colors duration-300">
                                    <Icon size={24} className="text-blue-400" strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 text-[15px] leading-relaxed font-medium">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
