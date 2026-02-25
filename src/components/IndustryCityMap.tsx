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
        position: { top: "22%", left: "24%" }, // Red/Brown building on the left
        hitbox: { w: "6%", h: "14%" },
        pinColor: "#E02424",
        barter: ["Food & beverages", "Personal care products", "Home care products"],
        media: ["Print", "OTT", "Outdoor", "Radio"],
        benefit: "Convert fast-moving inventory into mass visibility campaigns."
    },
    {
        id: "automobile",
        name: "Automobile",
        route: "/industry/automobile",
        position: { top: "16%", left: "52%" }, // Blue/grey building upper-center
        hitbox: { w: "6%", h: "14%" },
        pinColor: "#E02424",
        barter: ["Cycles", "Bikes", "E-bikes", "Batteries"],
        media: ["Print", "Digital", "Outdoor"],
        benefit: "Drive brand visibility and dealership footfall using product-led advertising."
    },
    {
        id: "consumer-durables",
        name: "Consumer Durables",
        route: "/industry/consumer-durables",
        position: { top: "50%", left: "32%" }, // Tiered yellow/green roof building left-middle
        hitbox: { w: "6%", h: "14%" },
        pinColor: "#00FF33", // Green exactly matching the user image
        barter: ["Kitchen appliances", "Electronics", "Home appliances"],
        media: ["TV", "Print", "Digital"],
        benefit: "Launch and scale products without heavy cash media spend."
    },
    {
        id: "lifestyle",
        name: "Lifestyle & Clothing",
        route: "/industry/lifestyle",
        position: { top: "28%", left: "75%" },
        hitbox: { w: "6%", h: "15%" },
        pinColor: "#E02424",
        barter: ["Footwear", "Apparel", "Watches", "Accessories"],
        media: ["Print", "Outdoor", "Digital"],
        benefit: "Build fashion visibility using barter-based campaigns."
    },
    {
        id: "hospitality",
        name: "Hospitality & Gaming",
        route: "/industry/hospitality",
        position: { top: "77%", left: "64%" }, // Green roof building next to orange building
        hitbox: { w: "6%", h: "10%" },
        pinColor: "#E02424",
        barter: ["Hotel stays", "Restaurant vouchers", "Gaming credits"],
        media: ["Digital", "OTT", "Outdoor"],
        benefit: "Fill unused capacity with high-impact promotional reach."
    },
    {
        id: "media",
        name: "Media Networks",
        route: "/industry/media",
        position: { top: "46%", left: "75%" }, // Glass blue/green grid building right
        hitbox: { w: "8%", h: "16%" },
        pinColor: "#E02424",
        barter: ["Advertising inventory", "Sponsorship space", "Subscription drives"],
        media: ["Newspapers", "TV channels", "OTT platforms", "Digital networks"],
        benefit: "Convert media space into valuable products for promotions."
    }
];

const IndustryCityMap: React.FC = () => {
    const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

    return (
        <section className="relative w-full min-h-[90vh] bg-[#0A111E] overflow-hidden py-24 border-y border-white/5 flex flex-col items-center">
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
                        Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B3FF] to-[#2DFF9B]">City Map</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Select an industry building to intuitively explore our specialized barter solutions.
                    </p>
                </div>

                {/* Map Container - Resizes to match aspect ratio of image strictly */}
                <div className="relative w-full rounded-3xl border border-white/10 shadow-2xl overflow-hidden group">
                    <div className="relative w-full transition-transform duration-[20s] ease-in-out group-hover:scale-105">
                        <img
                            src="/City-map-img.png"
                            alt="City Map"
                            className="w-full h-auto block"
                        />
                        <div className="absolute inset-0 pointer-events-none">
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
                                        onMouseEnter={() => setActiveIndustry(ind.id)}
                                        onMouseLeave={() => setActiveIndustry(null)}
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
                                                animate={{ y: isActive ? -12 : -5 }}
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

                                        {/* Hover Glassmorphic Details Card */}
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                                    className="absolute bottom-full mb-6 left-1/2 -translate-x-1/2 w-80 md:w-96 p-6 rounded-2xl bg-[#0F1620]/95 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(45,255,155,0.1)] z-50 pointer-events-auto cursor-default"
                                                >
                                                    {/* Card Header */}
                                                    <div className="border-b border-white/10 pb-4 mb-4">
                                                        <h3 className="text-xl font-bold text-white tracking-tight leading-tight">{ind.name}</h3>
                                                        <p className="text-[#00B3FF] text-xs font-bold uppercase tracking-widest mt-1">Barter Solutions</p>
                                                    </div>

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

                                                    {/* Action Button */}
                                                    <a
                                                        href={ind.route}
                                                        // Fallback onClick if they don't have routing, just for show
                                                        onClick={(e) => {
                                                            if (!window.location.pathname.includes('/industry')) {
                                                                e.preventDefault();
                                                                // Can hook to an alert or an internal smooth scroll
                                                                alert(`Navigating to ${ind.name} dedicated page...`);
                                                            }
                                                        }}
                                                        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00B3FF] to-[#0082CC] text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(0,179,255,0.3)] hover:shadow-[0_0_25px_rgba(0,179,255,0.5)] group/btn"
                                                    >
                                                        Explore Industry
                                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                                    </a>
                                                </motion.div>
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
