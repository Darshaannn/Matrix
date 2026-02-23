import React from 'react';
import { motion } from 'framer-motion';
// Icons representing the industries
import { ShoppingBag, Car, Armchair, Gem, Coffee, Tv } from 'lucide-react';
import type { Variants } from 'framer-motion';

const industries = [
    {
        name: "FMCG",
        desc: "Fast Moving Consumer Goods & Retail",
        icon: ShoppingBag,
    },
    {
        name: "Automobiles",
        desc: "2-Wheelers, 4-Wheelers & Auto Ancillary",
        icon: Car,
    },
    {
        name: "Consumer Durables",
        desc: "Electronics, Appliances & Hardware",
        icon: Armchair,
    },
    {
        name: "Lifestyle",
        desc: "Fashion, Accessories & Personal Care",
        icon: Gem,
    },
    {
        name: "Hospitality",
        desc: "Hotels, Resorts & F&B Services",
        icon: Coffee,
    },
    {
        name: "Media Houses",
        desc: "Broadcasting, Print & Digital Publishers",
        icon: Tv,
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
        transition: { type: "tween", duration: 0.5, ease: "easeOut" }
    }
};

const IndustriesSection: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-[#0B1220] border-t border-white/5 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-[0.03] pointer-events-none"
                style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)' }} />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#71717A]">Empower</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            We execute highly structured media barter transactions for India's top brands across diverse sectors.
                        </p>
                    </div>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group flex items-center gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-[#3B82F6]/20 group-hover:border-[#3B82F6]/50 transition-all duration-300">
                                    <Icon className="w-6 h-6 text-gray-400 group-hover:text-[#00C2FF] transition-colors duration-300" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-1">{industry.name}</h3>
                                    <p className="text-gray-500 text-sm leading-tight group-hover:text-gray-400 transition-colors duration-300">{industry.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default IndustriesSection;
