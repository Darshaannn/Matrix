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
            <div className="bg-[#020617]/90 backdrop-blur-md border border-white/10 text-white px-2 py-2 pl-6 pr-2 rounded-full flex items-center shadow-[0_8px_32px_rgba(59,130,246,0.15)] h-14 gap-2 md:gap-0 pointer-events-auto transition-all">
                {/* Logo Section */}
                <div className="flex items-center gap-6 pr-6">
                    <span className="font-bold text-lg tracking-widest uppercase text-white">MATRIX</span>
                    <div className="h-5 w-[1px] bg-white/20 hidden md:block"></div>
                </div>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-mono text-gray-400 px-4">
                    <a href="#valuation" className="hover:text-white transition-colors">Valuation</a>
                    <a href="#process" className="hover:text-white transition-colors">Process</a>
                    <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
                </div>

                {/* CTA Button */}
                <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold hover:bg-blue-500 transition-colors ml-2 md:ml-4 whitespace-nowrap shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    Discuss a Barter Opportunity
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
