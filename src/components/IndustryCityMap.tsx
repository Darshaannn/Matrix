import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Zap, Target, TrendingUp } from 'lucide-react';

const CustomPin = ({ color = "#E02424" }: { color?: string }) => (
    <svg width="28" height="40" viewBox="0 0 24 36" fill="none" className="drop-shadow-[0_8px_12px_rgba(0,0,0,0.5)]">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 7.5 12 24 12 24s12-16.5 12-24c0-6.627-5.373-12-12-12Z" fill={color} />
        <circle cx="12" cy="12" r="5" fill="white" />
    </svg>
);

const industriesData = [
    {
        id: "fmcg",
        name: "FMCG",
        route: "/industry/fmcg",
        position: { top: "28%", left: "15%" },
        hitbox: { w: "7%", h: "13%" },
        pinColor: "#E02424",
        description: "Unlock fast-moving consumer goods advertising via trade deals.",
        barter: ["Beverages", "Personal care", "Packaged foods"],
        media: ["Print", "Radio", "OTT", "Outdoor"],
        benefit: "Convert inventory into high-impact media reach."
    },
    {
        id: "automobile",
        name: "Automobile",
        route: "/industry/automobile",
        position: { top: "16%", left: "42%" },
        hitbox: { w: "7%", h: "12%" },
        pinColor: "#E02424",
        description: "Drive visibility for bike, cycle, battery, and auto brands.",
        barter: ["Bikes", "Cycles", "Batteries", "Accessories"],
        media: ["Print", "Digital", "TV", "Outdoor"],
        benefit: "Increase brand recall and dealership traffic."
    },
    {
        id: "consumer-durables",
        name: "Consumer Durables",
        route: "/industry/consumer-durables",
        position: { top: "42%", left: "37%" },
        hitbox: { w: "6%", h: "13%" },
        pinColor: "#00FF33",
        description: "Launch and scale durable goods without heavy cash media spend.",
        barter: ["Kitchen appliances", "Electronics", "Home appliances"],
        media: ["TV", "Print", "Digital"],
        benefit: "Build household brand presence efficiently."
    },
    {
        id: "lifestyle",
        name: "Lifestyle & Clothing",
        route: "/industry/lifestyle",
        position: { top: "24%", left: "67%" },
        hitbox: { w: "7%", h: "16%" },
        pinColor: "#E02424",
        description: "Showcase fashion & lifestyle brands across diverse media channels.",
        barter: ["Apparel", "Footwear", "Accessories"],
        media: ["Print", "Digital", "Outdoor"],
        benefit: "Build brand presence without heavy cash spend."
    },
    {
        id: "hospitality",
        name: "Hospitality & Gaming",
        route: "/industry/hospitality",
        position: { top: "72%", left: "77%" },
        hitbox: { w: "12%", h: "15%" },
        pinColor: "#E02424",
        description: "Monetize unused capacity through strategic brand partnerships.",
        barter: ["Hotel stays", "Restaurant vouchers", "Gaming credits"],
        media: ["Digital", "OTT", "Outdoor"],
        benefit: "Fill unused capacity with high-impact promotional reach."
    },
    {
        id: "media",
        name: "Media Networks",
        route: "/industry/media",
        position: { top: "59%", left: "68%" },
        hitbox: { w: "7%", h: "12%" },
        pinColor: "#E02424",
        description: "Trade advertising inventory for high-value corporate products.",
        barter: ["Advertising inventory", "Sponsorship space", "Subscriptions"],
        media: ["Newspapers", "TV channels", "OTT", "Digital networks"],
        benefit: "Convert media space into valuable products for promotions."
    }
];

const IndustryCityMap: React.FC = () => {
    const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (typeof window !== 'undefined' && window.innerWidth >= 768) {
            const x = (e.clientX - window.innerWidth / 2) * 0.05;
            const y = (e.clientY - window.innerHeight / 2) * 0.05;
            setMousePos({ x, y });
        }
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative w-full min-h-[90vh] bg-[#0A111E] overflow-hidden py-24 border-y border-white/5 flex flex-col items-center"
        >
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-sky-900/20 blur-[150px] mix-blend-screen rounded-full" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-emerald-900/20 blur-[150px] mix-blend-screen rounded-full" />
                {/* Floating clouds / fog effect */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: "radial-gradient(ellipse at center, transparent, #0A111E 80%)"
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 mx-auto flex flex-col items-center">

                {/* Header Text */}
                <div className="text-center mb-16 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                        Explore Our Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B3FF] to-[#2DFF9B]">Barter City</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Hover or tap on a location to discover how barter works in each industry.
                    </p>
                </div>

                {/* Map Container - Resizes to match aspect ratio of image strictly */}
                <div className="relative w-full rounded-3xl border border-white/10 shadow-2xl overflow-hidden group">
                    <motion.div
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative w-full transition-transform duration-[20s] ease-in-out group-hover:scale-105"
                    >
                        <img
                            src="/City-map-img.png"
                            alt="City Map"
                            className="w-full h-auto block"
                        />

                        {/* Ambient City Animations over the map */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen opacity-60 z-0">
                            {/* Drifting light overlay */}
                            <motion.div
                                animate={{ x: ['-20%', '20%', '-20%'], y: ['-10%', '10%', '-10%'] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/4 left-1/4 w-[50%] h-[50%] bg-[#00B3FF]/10 blur-[100px] rounded-full"
                            />
                            {/* Moving Traffic lights effect */}
                            <motion.div
                                animate={{ x: ['10%', '150%'], y: ['20%', '100%'] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute top-[40%] left-[20%] w-2 h-1 bg-yellow-400/80 blur-[1px] rounded-full shadow-[0_0_10px_yellow]"
                            />
                            <motion.div
                                animate={{ x: ['150%', '-20%'], y: ['80%', '20%'] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute top-[40%] left-[60%] w-2 h-1 bg-red-500/80 blur-[1px] rounded-full shadow-[0_0_10px_red]"
                            />
                        </div>
                        {/* Slow cloud shadow pass */}
                        <motion.div
                            animate={{ x: ['-50%', '150%'] }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 pointer-events-none z-0 w-[200%] h-full opacity-[0.1] bg-gradient-to-r from-transparent via-black to-transparent mix-blend-multiply"
                        />

                        <div className="absolute inset-0 pointer-events-none z-10">
                            {/* Render Pins / Buildings connected EXACTLY to image coordinates */}
                            {industriesData.map((ind) => {
                                const isActive = activeIndustry === ind.id;

                                return (
                                    <div
                                        key={ind.id}
                                        className={`absolute z-20 pointer-events-auto flex flex-col items-center justify-start group/pin cursor-pointer transition-all duration-500 ${activeIndustry && activeIndustry !== ind.id ? 'opacity-40 grayscale saturate-0' : 'opacity-100'}`}
                                        style={{
                                            top: ind.position.top,
                                            left: ind.position.left,
                                            width: ind.hitbox.w,
                                            height: ind.hitbox.h,
                                            transform: "translateX(-50%)"
                                        }}
                                        onClick={(e) => {
                                            // Handle mobile tap to open modal
                                            if (window.innerWidth < 768) {
                                                if (activeIndustry !== ind.id) {
                                                    e.preventDefault();
                                                    setActiveIndustry(ind.id);
                                                }
                                            }
                                        }}
                                        onMouseEnter={() => {
                                            if (window.innerWidth >= 768) setActiveIndustry(ind.id)
                                        }}
                                        onMouseLeave={() => {
                                            if (window.innerWidth >= 768) setActiveIndustry(null)
                                        }}
                                    >
                                        {/* Reference-Perfect Isometric Polygon Glow */}
                                        <svg
                                            className="absolute inset-x-[-15%] inset-y-[-10%] w-[130%] h-[120%] overflow-visible pointer-events-none transition-all duration-300 z-10"
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="none"
                                        >
                                            {/* Fill & Outline */}
                                            <motion.polygon
                                                points="50,0 100,18 100,82 50,100 0,82 0,18"
                                                fill={isActive ? 'rgba(0, 255, 51, 0.15)' : 'rgba(0, 255, 51, 0.05)'}
                                                stroke={isActive ? '#00FF33' : 'rgba(0,255,51,0.5)'}
                                                strokeWidth={isActive ? "4" : "2"}
                                                strokeLinejoin="round"
                                                style={{
                                                    filter: isActive ? 'drop-shadow(0px 0px 15px rgba(0,255,51,1)) drop-shadow(0px 0px 30px rgba(0,255,51,0.6))' : 'drop-shadow(0px 0px 5px rgba(0,255,51,0.8))'
                                                }}
                                            />
                                            {/* Vertical Corner Edge */}
                                            <motion.line x1="50" y1="0" x2="50" y2="100" stroke="#00FF33" strokeWidth={isActive ? "2" : "1"} style={{ opacity: isActive ? 0.3 : 0.1 }} />
                                            {/* Top Roof Edges */}
                                            <motion.line x1="0" y1="18" x2="50" y2="0" stroke="#00FF33" strokeWidth={isActive ? "2" : "1"} style={{ opacity: isActive ? 0.3 : 0 }} />
                                            <motion.line x1="100" y1="18" x2="50" y2="0" stroke="#00FF33" strokeWidth={isActive ? "2" : "1"} style={{ opacity: isActive ? 0.3 : 0 }} />
                                        </svg>

                                        {/* (Removed old glowing footpring) */}

                                        {/* Floating UI Elements directly at Roof Base */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[85%] flex flex-col items-center pointer-events-none">

                                            {/* Fat Custom Map Pin matching reference exactly */}
                                            <motion.div
                                                className="relative z-10"
                                                animate={{
                                                    y: isActive ? -12 : -5,
                                                    scale: isActive && typeof window !== 'undefined' && window.innerWidth < 768 ? 1.2 : 1
                                                }}
                                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                            >
                                                <CustomPin color={ind.pinColor} />
                                            </motion.div>

                                            {/* Pinging Ring tracking roof peak */}
                                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#2DFF9B] shadow-[0_0_15px_#2DFF9B] ${isActive ? 'animate-none' : 'animate-ping opacity-60'}`} />

                                            {/* Small Label below pin */}
                                            <div className={`mt-2 px-3 py-1.5 rounded-full border bg-[#0F1620]/80 backdrop-blur-md whitespace-nowrap transition-all duration-300 shadow-xl ${isActive ? 'border-[#2DFF9B] text-white' : 'border-white/10 text-slate-300 group-hover/pin:border-[#2DFF9B]/50'}`}>
                                                <span className="text-[10px] md:text-xs font-bold tracking-widest font-mono uppercase">{ind.name}</span>
                                            </div>
                                        </div>

                                        {/* Hover Desktop / Modal Mobile Details Card */}
                                        <AnimatePresence>
                                            {isActive && (
                                                <div className="fixed inset-0 z-[100] md:absolute md:inset-auto md:bottom-full md:left-1/2 md:-translate-x-1/2 flex items-center justify-center md:block pointer-events-none">

                                                    {/* Mobile backdrop */}
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        className="absolute inset-0 bg-[#0A111E]/80 backdrop-blur-sm pointer-events-auto md:hidden"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setActiveIndustry(null);
                                                        }}
                                                    />

                                                    {/* Card Body */}
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                                        animate={{
                                                            opacity: 1,
                                                            scale: 1,
                                                            x: typeof window !== 'undefined' && window.innerWidth >= 768 ? mousePos.x : 0,
                                                            y: typeof window !== 'undefined' && window.innerWidth >= 768 ? mousePos.y : 0
                                                        }}
                                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                                        className="relative w-[85vw] md:w-96 p-6 md:mb-6 rounded-2xl bg-[#0F1620]/95 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(45,255,155,0.1)] pointer-events-auto cursor-default z-10"
                                                    >
                                                        {/* Card Header */}
                                                        <div className="border-b border-white/10 pb-4 mb-4 flex justify-between items-start">
                                                            <div>
                                                                <h3 className="text-xl font-bold text-white tracking-tight leading-tight">{ind.name}</h3>
                                                                <p className="text-[#00B3FF] text-[10px] font-bold uppercase tracking-widest mt-1">Barter Solutions</p>
                                                            </div>
                                                            <button
                                                                className="md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setActiveIndustry(null);
                                                                }}
                                                            >
                                                                ✕
                                                            </button>
                                                        </div>

                                                        <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                                                            {ind.description}
                                                        </p>

                                                        {/* Content Grids */}
                                                        <div className="space-y-4 mb-6">
                                                            {/* We Barter Section */}
                                                            <div className="bg-black/30 rounded-xl p-3 border border-white/5">
                                                                <div className="flex items-center gap-2 mb-2 text-slate-300">
                                                                    <Zap className="w-4 h-4 text-emerald-400" />
                                                                    <span className="text-xs font-semibold uppercase tracking-wider">We Barter</span>
                                                                </div>
                                                                <div className="flex flex-wrap gap-1.5">
                                                                    {ind.barter.map((item, idx) => (
                                                                        <span key={idx} className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                                                                            {item}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {/* Media Channels */}
                                                            <div className="bg-black/30 rounded-xl p-3 border border-white/5">
                                                                <div className="flex items-center gap-2 mb-2 text-slate-300">
                                                                    <Target className="w-4 h-4 text-sky-400" />
                                                                    <span className="text-xs font-semibold uppercase tracking-wider">Media Reach</span>
                                                                </div>
                                                                <div className="flex flex-wrap gap-1.5">
                                                                    {ind.media.map((item, idx) => (
                                                                        <span key={idx} className="text-[11px] px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-200 border border-sky-500/20">
                                                                            {item}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {/* Benefit */}
                                                            <div>
                                                                <p className="text-sm text-slate-400 leading-relaxed flex items-start gap-2">
                                                                    <TrendingUp className="w-4 h-4 mt-0.5 text-slate-500 shrink-0" />
                                                                    <span>{ind.benefit}</span>
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <a
                                                            href={ind.route}
                                                            onClick={(e) => {
                                                                if (!window.location.pathname.includes('/industry')) {
                                                                    e.preventDefault();
                                                                    alert(`Navigating to ${ind.name} dedicated page...`);
                                                                }
                                                            }}
                                                            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00B3FF] to-[#0082CC] text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(0,179,255,0.3)] hover:shadow-[0_0_25px_rgba(0,179,255,0.5)] group/btn"
                                                        >
                                                            Explore Industry Page
                                                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                                        </a>
                                                    </motion.div>
                                                </div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IndustryCityMap;
