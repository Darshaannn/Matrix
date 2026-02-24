import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Tv, Smartphone, Radio, MapPin, Globe } from 'lucide-react';

const mediaTypes = [
    { name: "Print Media", icon: Newspaper, desc: "Leading national and regional newspapers." },
    { name: "Television", icon: Tv, desc: "Top-tier national and regional TV networks." },
    { name: "OTT Platforms", icon: Smartphone, desc: "High-impact digital streaming services." },
    { name: "Radio", icon: Radio, desc: "Nationwide radio reach across major cities." },
    { name: "Outdoor & Transit", icon: MapPin, desc: "Premium OOH and transit media locations." },
    { name: "Digital & Programmatic", icon: Globe, desc: "Targeted digital advertising ecosystems." }
];

const MediaNetworkSection: React.FC = () => {
    return (
        <section id="media-network" className="py-24 md:py-32 bg-[#FFFBEB] border-t border-slate-200/80 relative">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-sans"
                    >
                        Our Media Network
                    </motion.h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
                        We partner with top media houses and digital platforms to deliver unmatched reach.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mediaTypes.map((type, index) => {
                        const Icon = type.icon;
                        return (
                            <motion.div
                                key={type.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-6 p-6 rounded-2xl bg-slate-900/[0.03] border border-slate-200/80 hover:bg-slate-900/[0.05] transition-all"
                            >
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                                    <Icon size={24} className="text-amber-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{type.name}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{type.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MediaNetworkSection;
