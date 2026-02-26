import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CustomPin from './CustomPin';
import IndustryCard from './IndustryCard';

const industriesData = [
    {
        id: "automobile",
        name: "Automobile",
        title: "Automobile",
        description: "Automobile brands leverage barter to maximize visibility and expand market reach without heavy cash expenditure. Through strategic media exchange, brands promote vehicles and accessories across high-impact platforms.",
        barterIncludes: ["Two-wheelers and bicycles", "Batteries and accessories", "Auto components"],
        mediaUtilized: ["Print", "Outdoor", "Television", "Digital"],
        position: { top: "22%", left: "34%" }
    },
    {
        id: "fmcg",
        name: "FMCG",
        title: "FMCG",
        description: "Fast-moving consumer goods companies use barter to rapidly scale brand awareness and penetrate new markets by exchanging products for targeted advertising solutions.",
        barterIncludes: ["Food and beverages", "Personal care products", "Household essentials"],
        mediaUtilized: ["Print", "Radio", "Digital", "Outdoor"],
        position: { top: "28%", left: "18%" }
    },
    {
        id: "lifestyle",
        name: "Lifestyle & Clothing",
        title: "Lifestyle & Clothing",
        description: "Fashion and lifestyle brands benefit from barter by showcasing their collections through premium media placements, increasing brand recall while optimizing marketing spend.",
        barterIncludes: ["Apparel", "Footwear", "Accessories"],
        mediaUtilized: ["Print", "Digital", "Outdoor"],
        position: { top: "42%", left: "63%" }
    },
    {
        id: "consumer-durables",
        name: "Consumer Durables",
        title: "Consumer Durables",
        description: "Consumer durable brands exchange high-value products for advertising inventory, ensuring sustained brand visibility across mass media platforms.",
        barterIncludes: ["Electronics", "Home appliances", "Gadgets"],
        mediaUtilized: ["Print", "Television", "Digital", "Outdoor"],
        position: { top: "70%", left: "26%" }
    },
    {
        id: "media",
        name: "Media Networks",
        title: "Media Networks",
        description: "Media houses collaborate through barter by exchanging advertising inventory with brands, optimizing unsold space and increasing cross-promotional opportunities.",
        barterIncludes: ["Ad slots", "Print inventory", "Outdoor media"],
        mediaUtilized: ["Television", "Print", "Digital"],
        position: { top: "80%", left: "67%" }
    },
    {
        id: "hospitality",
        name: "Hospitality & Gaming",
        title: "Hospitality & Gaming",
        description: "Hospitality and gaming brands use barter partnerships to enhance brand presence by trading services and experiences for extensive promotional exposure.",
        barterIncludes: ["Hotel stays", "Food & beverages", "Gaming services"],
        mediaUtilized: ["Print", "Digital", "Outdoor"],
        position: { top: "15%", left: "75%" }
    }
];

const IndustryCityMap: React.FC = () => {
    const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

    return (
        <section className="relative w-full min-h-[90vh] bg-[#FFFBEB] overflow-hidden py-24 border-y border-slate-200/50 flex flex-col items-center">
            <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 mx-auto flex flex-col items-center">

                {/* Header Text */}
                <div className="text-center mb-16 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00B3FF]/20 bg-[#00B3FF]/5 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00B3FF]" />
                        <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#00B3FF] uppercase">Interactive Ecosystem</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                        Explore Our Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B3FF] to-[#ff0000]">Barter City</span>
                    </h2>
                    <p className="text-slate-600 text-lg font-medium leading-relaxed">
                        Hover or tap on a location to discover how barter works in each industry.
                    </p>
                </div>

                {/* Map Container - Relative for absolute children */}
                <div className="relative w-full rounded-[40px] border border-slate-200 shadow-2xl overflow-hidden bg-white/50 p-2 sm:p-4">
                    <div className="relative w-full rounded-[32px] overflow-hidden group">
                        <img
                            src="/NewCityMap2.png"
                            alt="City Map"
                            className="w-full h-auto block transition-transform duration-[2s] group-hover:scale-[1.02]"
                        />

                        {/* Interactive Icons Layer */}
                        <div className="absolute inset-0 z-20">
                            {industriesData.map((ind) => (
                                <div
                                    key={ind.id}
                                    className="absolute flex flex-col items-center justify-start translate-x-[-50%] translate-y-[-50%]"
                                    style={{
                                        top: ind.position.top,
                                        left: ind.position.left
                                    }}
                                    onMouseEnter={() => setActiveIndustry(ind.id)}
                                    onMouseLeave={() => setActiveIndustry(null)}
                                    onClick={() => setActiveIndustry(activeIndustry === ind.id ? null : ind.id)}
                                >
                                    <div className="relative flex flex-col items-center cursor-pointer pointer-events-auto">
                                        {/* Red Dot / Pin */}
                                        <div className={`transition-transform duration-300 ${activeIndustry === ind.id ? 'scale-125' : 'scale-100'}`}>
                                            <CustomPin color="#E02424" />
                                        </div>

                                        {/* Label */}
                                        <div className={`mt-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${activeIndustry === ind.id
                                            ? 'bg-slate-900 border-slate-900 shadow-xl'
                                            : 'bg-white/90 border-slate-200 shadow-sm'
                                            }`}>
                                            <span className={`text-[9px] md:text-[10px] font-black tracking-widest font-mono uppercase transition-colors duration-300 ${activeIndustry === ind.id ? 'text-white' : 'text-slate-600'
                                                }`}>
                                                {ind.name}
                                            </span>
                                        </div>

                                        {/* Information Card Popover */}
                                        <AnimatePresence>
                                            {activeIndustry === ind.id && (
                                                <IndustryCard
                                                    id={ind.id}
                                                    title={ind.title}
                                                    description={ind.description}
                                                    barterIncludes={ind.barterIncludes}
                                                    mediaUtilized={ind.mediaUtilized}
                                                    isVisible={true}
                                                />
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryCityMap;
