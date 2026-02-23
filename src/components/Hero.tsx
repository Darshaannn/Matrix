import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="pt-48 pb-20 px-4 md:px-8 max-w-7xl mx-auto text-center flex flex-col items-center">
            {/* Headline */}
            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-[5.5rem] font-bold tracking-tight text-black leading-[1.05] mb-8 relative font-sans"
            >
                We drive growth to <br />
                your business

                {/* Squiggly Arrow SVG Removed */}
            </motion.h1>

            {/* Subtext */}
            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-500 max-w-xl mx-auto mb-12 text-base md:text-lg font-medium leading-relaxed"
            >
                Unlock your brand's potential with our proven marketing expertise. <br className="hidden md:block" />
                From strategy to execution, we drive growth.
            </motion.p>

            {/* CTA Button */}
            <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FFDC58] text-black pl-8 pr-2 py-2 rounded-full font-bold text-lg flex items-center gap-6 hover:bg-[#ffefa0] transition-colors shadow-lg shadow-yellow-400/20 group"
            >
                Book a call
                <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
            </motion.button>
        </section>
    );
};

export default Hero;
