import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Car, Zap, Shirt, Hotel, Tv } from 'lucide-react';

const industries = [
    { name: "FMCG", icon: ShoppingCart },
    { name: "Automobiles", icon: Car },
    { name: "Consumer Durables", icon: Zap },
    { name: "Lifestyle & Apparel", icon: Shirt },
    { name: "Hospitality & Travel", icon: Hotel },
    { name: "Media Houses", icon: Tv }
];

const IndustriesSection: React.FC = () => {
    return (
        <section id="industries" className="py-24 md:py-32 bg-[#FFFBEB] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#F59E0B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-sans"
                    >
                        Industries We Serve
                    </motion.h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto" />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {industries.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-3xl bg-slate-900/5 border border-slate-200 hover:border-amber-500/50 transition-all duration-300 flex flex-col items-center text-center gap-6"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                                    <Icon size={32} className="text-amber-500 group-hover:text-black transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-500 transition-colors">
                                    {item.name}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
