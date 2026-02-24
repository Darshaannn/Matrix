import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar: React.FC = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -100, opacity: 0 }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none md:pointer-events-auto w-full md:w-auto flex justify-center"
        >
            <div className="bg-white/80 backdrop-blur-md border border-amber-200/50 text-slate-900 px-2 py-2 pl-6 pr-2 rounded-full flex items-center shadow-[0_8px_32px_rgba(251,191,36,0.15)] h-14 gap-2 md:gap-0 pointer-events-auto transition-all">
                {/* Logo Section */}
                <div className="flex items-center gap-6 pr-6">
                    <span className="font-bold text-lg tracking-widest uppercase text-slate-900">MATRIX</span>
                    <div className="h-5 w-[1px] bg-slate-200 hidden md:block"></div>
                </div>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-mono text-slate-500 px-4">
                    <a href="#home" className="hover:text-amber-700 transition-colors">Home</a>
                    <a href="#why-barter" className="hover:text-amber-700 transition-colors">Why Barter</a>
                    <a href="#capabilities" className="hover:text-amber-700 transition-colors">Capabilities</a>
                    <a href="#campaigns" className="hover:text-amber-700 transition-colors">Campaigns</a>
                    <a href="#clients" className="hover:text-amber-700 transition-colors">Clients</a>
                    <a href="#contact" className="hover:text-amber-700 transition-colors">Contact</a>
                </div>

                {/* CTA Button */}
                <a href="#contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold hover:bg-slate-800 transition-colors ml-2 md:ml-4 whitespace-nowrap shadow-lg">
                    Discuss a Barter Opportunity
                </a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
