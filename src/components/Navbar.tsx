import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

import { Link } from 'react-router-dom';

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
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none md:pointer-events-auto w-full md:w-auto flex justify-center"
        >
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 text-slate-900 px-2 py-2 pl-8 pr-2 rounded-full flex items-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] h-14 pointer-events-auto transition-all">
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-8 pr-8 border-r border-slate-200/50">
                    <span className="font-black text-xl tracking-[0.2em] uppercase text-slate-900">MATRIX</span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.15em] font-bold text-slate-500 px-8">
                    <Link to="/#home" className="hover:text-slate-900 transition-colors relative group">
                        Home
                        <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to="/#why-barter" className="hover:text-slate-900 transition-colors relative group">
                        Why Barter
                        <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to="/#capabilities" className="hover:text-slate-900 transition-colors relative group">
                        Capabilities
                        <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to="/#campaigns" className="hover:text-slate-900 transition-colors relative group">
                        Campaigns
                        <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to="/#clients" className="hover:text-slate-900 transition-colors relative group">
                        Clients
                        <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to="/#contact" className="hover:text-slate-900 transition-colors relative group">
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>

                {/* CTA Button */}
                <Link to="/#contact" className="bg-slate-900 text-white px-8 py-3 rounded-full text-[10px] md:text-xs uppercase tracking-[0.1em] font-black hover:bg-slate-800 transition-all active:scale-95 ml-2 whitespace-nowrap shadow-lg">
                    Discuss a Barter Opportunity
                </Link>
            </div>
        </motion.nav>
    );
};

export default Navbar;
