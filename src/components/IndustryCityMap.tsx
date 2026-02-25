import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Zap, Target, TrendingUp } from 'lucide-react';

const CustomPin = ({ color = "#E02424" }: { color?: string }) => (
    <svg width="28" height="40" viewBox="0 0 24 36" fill="none">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 7.5 12 24 12 24s12-16.5 12-24c0-6.627-5.373-12-12-12Z" fill={color} />
        <circle cx="12" cy="11" r="5" fill="white" />
    </svg>
);

const industriesData = [
    {
        id: "fmcg",
        name: "FMCG",
        route: "/industry/fmcg",
        position: { top: "20%", left: "24%" },
        hitbox: { w: "6%", h: "10%" },
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
        position: { top: "10%", left: "45%" },
        hitbox: { w: "6%", h: "10%" },
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
        hitbox: { w: "6%", h: "10%" },
        pinColor: "#E02424",
        description: "Launch and scale durable goods without heavy cash media spend.",
        barter: ["Kitchen appliances", "Electronics", "Home appliances"],
        media: ["TV", "Print", "Digital"],
        benefit: "Build household brand presence efficiently."
    },
    {
        id: "lifestyle",
        name: "Lifestyle & Clothing",
        route: "/industry/lifestyle",
        position: { top: "16%", left: "64%" },
        hitbox: { w: "6%", h: "10%" },
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
        position: { top: "80%", left: "70%" },
        hitbox: { w: "6%", h: "10%" },
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
        position: { top: "60%", left: "60%" },
        hitbox: { w: "6%", h: "10%" },
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

                {/* Map Container - Static Map without animations */}
                <div className="relative w-full rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                    <div className="relative w-full">
                        <img
                            src="/NewCityMap2.png"
                            alt="City Map"
                            className="w-full h-auto block"
                        />

                        <div className="absolute inset-0 pointer-events-none z-10">
                            {/* Render Pins / Buildings connected EXACTLY to image coordinates */}
                            {industriesData.map((ind) => {
                                const isActive = activeIndustry === ind.id;

                                return (
                                    <div
                                        key={ind.id}
                                        className="absolute z-20 pointer-events-auto flex flex-col items-center justify-start group/pin cursor-pointer"
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
                                        {/* Glow removed - map already has green borders */}

                                        {/* (Removed old glowing footpring) */}

                                        {/* Floating UI Elements directly at Roof Base */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                                            {/* Static Map Pin */}
                                            <div className="relative z-10">
                                                <CustomPin color={ind.pinColor} />
                                            </div>

                                            {/* Small Label below pin */}
                                            <div className={`mt-2 px-3 py-1.5 rounded-full border bg-[#0F1620]/80 backdrop-blur-md whitespace-nowrap shadow-xl ${isActive ? 'border-[#2DFF9B] text-white' : 'border-white/10 text-slate-300'}`}>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryCityMap;
