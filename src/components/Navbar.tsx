import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none md:pointer-events-auto w-full md:w-auto flex justify-center"
        >
            <div className="bg-black text-white px-2 py-2 pl-6 pr-2 rounded-full flex items-center shadow-2xl h-14 gap-2 md:gap-0 pointer-events-auto">
                {/* Logo Section */}
                <div className="flex items-center gap-6 pr-6">
                    <span className="font-bold text-lg tracking-tight text-white">FirstPlace</span>
                    <div className="h-5 w-[1px] bg-gray-700 opacity-50 hidden md:block"></div>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300 px-4">
                    <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
                    <a href="#about-us" className="hover:text-white transition-colors">About Us</a>
                    <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
                </div>

                {/* CTA Button */}
                <button className="bg-[#FFDC58] text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#ffefa0] transition-colors ml-2 md:ml-4 whitespace-nowrap">
                    Book a call
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
