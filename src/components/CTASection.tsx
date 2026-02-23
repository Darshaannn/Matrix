import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
    return (
        <section className="w-full py-32 px-4 relative overflow-hidden bg-[#020617] border-t border-white/5">
            {/* Background Decoration (Subtle) */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-20" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.8,
                            ease: "easeOut",
                            staggerChildren: 0.2
                        }
                    }
                }}
                className="max-w-4xl mx-auto text-center flex flex-col items-center z-10 relative"
            >
                {/* Heading */}
                <motion.h2
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-white mb-6 leading-[1.1]"
                >
                    Let's Structure Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Media Allocation.</span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="text-xl md:text-xl text-slate-400 mb-12 max-w-2xl font-medium leading-relaxed"
                >
                    Stop burning corporate cash. Start leveraging your inventory to command national visibility across top-tier networks.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.95 },
                        visible: { opacity: 1, scale: 1 }
                    }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    {/* Primary Button */}
                    <button className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#FFDC58] text-black font-semibold text-lg flex items-center justify-center gap-3 hover:bg-[#ffefa0] hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(255,220,88,0.15)]">
                        Evaluate My Inventory <ArrowRight size={20} strokeWidth={2.5} />
                    </button>

                    {/* Secondary Button */}
                    <button className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 text-white font-semibold text-lg border border-white/10 flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
                        See Category Cases
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CTASection;
