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
            <div className="bg-black border border-white/10 text-white px-8 py-2 rounded-full flex items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-16 pointer-events-auto transition-all hover:border-amber-500/30 group/nav">
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-4 pr-10 border-r border-white/10">
                    <span className="font-black text-2xl tracking-[0.25em] uppercase text-white group-hover/nav:text-amber-500 transition-colors">MATRIX</span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-100 px-10 whitespace-nowrap">
                    <Link to="/#home" className="hover:text-white transition-colors relative group/link">
                        Home
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover/link:w-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
                    </Link>
                    <Link to="/#why-barter" className="hover:text-white transition-colors relative group/link">
                        Why Barter
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover/link:w-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
                    </Link>
                    <Link to="/#capabilities" className="hover:text-white transition-colors relative group/link">
                        Capabilities
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover/link:w-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
                    </Link>
                    <Link to="/#campaigns" className="hover:text-white transition-colors relative group/link">
                        Campaigns
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover/link:w-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
                    </Link>
                    <Link to="/#clients" className="hover:text-white transition-colors relative group/link">
                        Clients
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover/link:w-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
                    </Link>
                    <Link to="/#contact" className="hover:text-white transition-colors relative group/link">
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover/link:w-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
