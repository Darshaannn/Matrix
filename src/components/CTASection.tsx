import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
    return (
        <section className="w-full py-32 px-4 relative overflow-hidden bg-gradient-to-b from-white to-[#f0f1f3]">
            {/* Background Decoration (Subtle) */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

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
                    className="text-5xl md:text-7xl font-sans font-medium tracking-tight text-[#1d1d1f] mb-6 leading-tight"
                >
                    Ready to move <span className="text-[#3b82f6]">faster?</span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl font-light"
                >
                    Join hundreds of suppliers and retailers already using our platform.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.95 },
                        visible: { opacity: 1, scale: 1 }
                    }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    {/* Primary Button */}
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#1d1d1f] text-white px-8 py-4 rounded-full font-medium text-lg flex items-center gap-2 shadow-xl hover:bg-[#000000] transition-colors"
                    >
                        Get started <ArrowRight size={20} />
                    </motion.button>

                    {/* Secondary Button */}
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.8)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-full font-medium text-lg text-gray-600 hover:text-[#1d1d1f] transition-all bg-white border border-gray-200 shadow-sm hover:shadow-md"
                    >
                        Book a demo
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CTASection;
