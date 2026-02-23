import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Repeat, MonitorPlay, Radio, Megaphone, Smartphone, Box } from 'lucide-react';

const services = [
    {
        title: "Barter Advertising",
        desc: "Convert unsold inventory into high-impact media space.",
        icon: Repeat,
        color: "#3B82F6"
    },
    {
        title: "Media Exchange",
        desc: "Strategic trading of assets for premium advertising value.",
        icon: Megaphone,
        color: "#00C2FF"
    },
    {
        title: "OTT & Digital Campaigns",
        desc: "Targeted visibility across Hotstar, Zee5, and premium digital.",
        icon: MonitorPlay,
        color: "#10B981"
    },
    {
        title: "Programmatic Media",
        desc: "Data-driven audience targeting for maximum ROI.",
        icon: Smartphone,
        color: "#6366F1"
    },
    {
        title: "Outdoor & Print Media",
        desc: "Pan-India presence through top dailies and prime OOH.",
        icon: Radio, // using a generic media icon, could use Newspaper/MapPin
        color: "#F59E0B"
    },
    {
        title: "Product-to-Media Planning",
        desc: "End-to-end structuring of your barter-funded marketing.",
        icon: Box,
        color: "#EC4899"
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 0.6, ease: "easeOut" }
    }
};

const ServicesSection: React.FC = () => {
    return (
        <section className="relative py-32 px-4 md:px-8 bg-[#040812] overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] animate-pulse"></span>
                        <span className="text-[#3B82F6] font-mono text-[10px] uppercase tracking-widest font-semibold">Our Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
                        Comprehensive Media <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#00C2FF]">Solutions</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We transform your physical assets into powerful, multi-channel advertising campaigns across India's largest media networks.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative bg-[#0B1220] rounded-3xl p-8 md:p-10 border border-white/5 hover:border-[#3B82F6]/30 transition-colors duration-500 overflow-hidden cursor-default"
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}15 0%, transparent 70%)` }} />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500"
                                        style={{ background: `linear-gradient(135deg, ${service.color}20, transparent)` }}>
                                        <Icon className="w-7 h-7" style={{ color: service.color }} strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#00C2FF] transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                        {service.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
