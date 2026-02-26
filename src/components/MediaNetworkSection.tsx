import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Tv, Smartphone, Radio, MapPin, Globe } from 'lucide-react';
import './MediaNetworkSection.css';

const mediaTypes = [
    { name: "Print Media", icon: Newspaper, desc: "Leading national and regional newspapers catering to diverse demographics." },
    { name: "Television", icon: Tv, desc: "Top-tier national and regional TV networks for maximum brand visibility." },
    { name: "OTT Platforms", icon: Smartphone, desc: "High-impact digital streaming services for targeted audience reach." },
    { name: "Radio", icon: Radio, desc: "Nationwide radio reach across major cities and regional markets." },
    { name: "Outdoor & Transit", icon: MapPin, desc: "Premium OOH and transit media locations in high-traffic urban hubs." },
    { name: "Digital & Programmatic", icon: Globe, desc: "Targeted digital advertising ecosystems with data-driven precision." }
];

const MediaNetworkSection: React.FC = () => {
    return (
        <section id="media-network" className="py-24 md:py-40 bg-[#f8f8f8] relative overflow-hidden">
            {/* Architectural Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/5 bg-black/5 mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                        <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-black uppercase">Ecosystem</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-black mb-8 uppercase tracking-tighter"
                    >
                        Our Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B3FF] to-[#ff0000]">Network</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium"
                    >
                        Strategically partnered with India's most influential media houses to turn your inventory into market dominance.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {mediaTypes.map((type, index) => {
                        const Icon = type.icon;
                        return (
                            <motion.div
                                key={type.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className="media-network-card group"
                            >
                                <div className="media-card-blob" />
                                <div className="media-card-inner">
                                    <div className="media-icon-wrapper">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="media-title">{type.name}</h3>
                                    <div className="w-12 h-[2px] bg-red-600/30 transition-all duration-500 group-hover:w-full group-hover:bg-red-600" />
                                    <p className="media-desc">{type.desc}</p>
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
