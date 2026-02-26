import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ALL_INDUSTRIES = [
    'All',
    'Automobile',
    'FMCG',
    'Lifestyle & Clothing',
    'Consumer Durables',
    'Media Networks',
    'Hospitality & Gaming',
];

const campaignData = [
    // --- CAMPAIGNS ---
    {
        id: 1,
        title: 'Maximum Roadblock Impact',
        brand: 'Hero MotoCorp',
        industry: 'Automobile',
        description: 'Negotiated an ₹88 Cr media alignment resulting in a pan-India outdoor roadblock, locking down key transit junctions country-wide.',
        image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1200&h=800',
    },
    {
        id: 2,
        title: 'Pan-India Reach & Brand Dominance',
        brand: 'Hindustan Unilever',
        industry: 'FMCG',
        description: 'Structured an overarching ₹60 Cr media allocation across multiple national TV, print, and digital channels maximizing share of voice.',
        image: 'https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?auto=format&fit=crop&q=80&w=1200&h=800',
    },
    {
        id: 3,
        title: 'Festive Season Dominance',
        brand: 'Titan Watches',
        industry: 'Lifestyle & Clothing',
        description: 'Structured ₹350 Cr media allocation across major print, outdoor, and radio networks in exchange for seasonal inventory.',
        image: 'https://images.unsplash.com/photo-1542491509-1f0149121f1a?auto=format&fit=crop&q=80&w=1200&h=800',
    },
    {
        id: 4,
        title: 'High-Impact Launch Together',
        brand: 'Bajaj Electricals',
        industry: 'Consumer Durables',
        description: 'Engineered a targeted media barter deal focusing on Television and Print networks to launch multiple product categories.',
        image: 'https://images.unsplash.com/photo-1558002038-16e63273e936?auto=format&fit=crop&q=80&w=1200&h=800',
    },
    {
        id: 5,
        title: 'Premium Content Integration',
        brand: 'Zee Network',
        industry: 'Media Networks',
        description: 'Strategic exchange of inventory for broad visibility across regional print and radio segments, increasing viewership penetration.',
        image: 'https://images.unsplash.com/photo-1557992260-ec58e38d363c?auto=format&fit=crop&q=80&w=1200&h=800',
    },
    {
        id: 6,
        title: 'National Expansion Drive',
        brand: 'OYO Rooms',
        industry: 'Hospitality & Gaming',
        description: 'Secured high-visibility airport and transit placements to drive app acquisitions without exhausting marketing capital.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200&h=800',
    },
    {
        id: 7,
        title: 'Rural Market Penetration',
        brand: 'ITC – Foods',
        industry: 'FMCG',
        description: 'Decentralized media strategy exchanging product volume for localized print, OTT, and radio media inventory reaching tier-2 markets.',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200&h=800',
    },
    {
        id: 8,
        title: 'Digital-First Market Growth',
        brand: 'Godrej Consumer',
        industry: 'FMCG',
        description: 'Deployed a coordinated media agreement utilizing inventory to fund a digital-first campaign, increasing market penetration.',
        image: 'https://images.unsplash.com/photo-1584824486509-11459466a13e?auto=format&fit=crop&q=80&w=1200&h=800',
    },
    {
        id: 9,
        title: 'Premium Audience Targeting',
        brand: 'Raymond',
        industry: 'Lifestyle & Clothing',
        description: 'Optimized media exchanges yielding ₹55 Cr worth of inventory across premium high-impact TV and luxury print placements.',
        image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=1200&h=800',
    },
    {
        id: 10,
        title: 'Multi-City Launch Strategy',
        brand: 'Havells',
        industry: 'Consumer Durables',
        description: 'Secured premium OTT and Outdoor slots offsetting upfront marketing capital for their new premium appliance line.',
        image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=1200&h=800',
    },
    {
        id: 11,
        title: 'Sponsorship Barter',
        brand: 'Star Sports',
        industry: 'Media Networks',
        description: 'Trade association for grand sporting event coverage, utilizing existing equipment bandwidth.',
        image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1200&h=800',
    },
    {
        id: 12,
        title: 'Luxury Stay Reach',
        brand: 'Taj Hotels',
        industry: 'Hospitality & Gaming',
        description: 'Print and in-flight magazine coverage for high-end traveler demographics leveraging surplus room inventory.',
        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=1200&h=800',
    },
    {
        id: 13,
        title: 'Bold Auto Advertising',
        brand: 'Mahindra',
        industry: 'Automobile',
        description: 'Strategic placement of SUV campaigns across high-impact transit hubs and regional TV networks.',
        image: 'https://images.unsplash.com/photo-1533473359331-7565db364277?auto=format&fit=crop&q=80&w=1200&h=800',
    },
    {
        id: 14,
        title: 'Global Fast Food Reach',
        brand: 'McDonalds',
        industry: 'FMCG',
        description: 'Exchanging supply chain value for nationwide outdoor presence and digital ad inventory.',
        image: 'https://images.unsplash.com/photo-1552566626-78bdf1c548a4?auto=format&fit=crop&q=80&w=1200&h=800',
    },
    {
        id: 15,
        title: 'Modern Living Campaign',
        brand: 'IKEA',
        industry: 'Consumer Durables',
        description: 'Using surplus furniture inventory to secure prime placement in lifestyle magazines and interior design OTT shows.',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200&h=800',
    },
    {
        id: 16,
        title: 'Streaming Dominance',
        brand: 'Netflix',
        industry: 'Media Networks',
        description: 'Partnering with terrestrial networks for cross-promotion of original content through inventory swaps.',
        image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1200&h=800',
    },
    {
        id: 17,
        title: 'High-End Fashion Display',
        brand: 'Prada',
        industry: 'Lifestyle & Clothing',
        description: 'Luxury OOH placements in tier-1 metro airports achieved through strategic corporate barter.',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1200&h=800',
    },
    {
        id: 18,
        title: 'Leisure World Expansion',
        brand: 'Marriott',
        industry: 'Hospitality & Gaming',
        description: 'National print campaign targeting business travelers in exchange for untapped room inventory.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200&h=800',
    }
];

const CampaignCard = ({ campaign }: { campaign: typeof campaignData[0] }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-2xl bg-[#111] aspect-[4/3] lg:aspect-square xl:aspect-[4/3]"
        >
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={campaign.image}
                    alt={campaign.brand}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                />
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-10" />
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20 
                            opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out translate-y-4 group-hover:translate-y-0">
                <div className="mb-4 text-xs font-semibold tracking-widest uppercase text-white/70">
                    {campaign.brand} &nbsp;&bull;&nbsp; {campaign.industry}
                </div>
                <h3 className="font-bold text-white mb-3 leading-tight text-xl md:text-2xl">
                    {campaign.title}
                </h3>
                <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                    {campaign.description}
                </p>
            </div>
        </motion.div>
    );
};

interface CollageItem {
    image: string;
    brand: string;
    height: string;
    yOffset: string;
}

interface CollageSectionProps {
    title: string;
    description: string;
    buttonText: string;
    items: CollageItem[];
    reverse?: boolean;
    titleColor?: string;
    useGradient?: boolean;
}

const CollageSection = ({ title, description, buttonText, items, reverse = false, titleColor = 'white', useGradient = false }: CollageSectionProps) => {
    return (
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center mb-24 md:mb-40`}>
            {/* Text Side */}
            <div className={`lg:w-[48%] flex flex-col items-start gap-6 ${reverse ? 'lg:pl-12' : ''}`}>
                <h2 className={`text-4xl lg:text-[4.2rem] font-black uppercase tracking-tight leading-[1.05] ${useGradient ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#00B3FF] to-[#ff0000]' : ''}`} style={!useGradient ? { color: titleColor } : {}}>
                    {title.split(' ').map((word: string, i: number) => (
                        <React.Fragment key={i}>{word} {i === 0 ? <br /> : ''}</React.Fragment>
                    ))}
                </h2>
                <p className="text-white/70 text-lg md:text-xl font-medium max-w-lg mb-4">
                    {description}
                </p>
                <div className="flex gap-4 w-full sm:w-auto">
                    <button className="bg-white text-black px-8 py-3.5 rounded-full font-bold text-sm hover:scale-105 transition-transform w-full sm:w-auto">
                        {buttonText}
                    </button>
                    {!reverse && (
                        <button className="border border-white/20 bg-transparent text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white/5 transition-colors w-full sm:w-auto">
                            Learn more
                        </button>
                    )}
                </div>
            </div>

            {/* Collage Side */}
            <div className="lg:w-[52%] w-full h-[500px] md:h-[600px] bg-[#111] rounded-[2rem] overflow-hidden p-3 md:p-4 border border-[#222]">
                <div className="grid grid-cols-3 gap-3 md:gap-4 h-full pointer-events-none select-none">
                    {/* Col 1 */}
                    <div className={`flex flex-col gap-3 md:gap-4 ${items[0].yOffset}`}>
                        <div className={`w-full ${items[0].height} rounded-xl overflow-hidden relative`}>
                            <img src={items[0].image} className="w-full h-full object-cover" />
                            <div className="absolute bottom-2 left-2 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded shadow">{items[0].brand}</div>
                        </div>
                        <div className={`w-full ${items[1].height} rounded-xl overflow-hidden relative`}>
                            <img src={items[1].image} className="w-full h-full object-cover" />
                            <div className="absolute bottom-2 left-2 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded shadow">{items[1].brand}</div>
                        </div>
                    </div>
                    {/* Col 2 */}
                    <div className={`flex flex-col gap-3 md:gap-4 ${items[2].yOffset}`}>
                        <div className={`w-full ${items[2].height} rounded-xl overflow-hidden relative`}>
                            <img src={items[2].image} className="w-full h-full object-cover" />
                            <div className="absolute bottom-2 left-2 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded shadow">{items[2].brand}</div>
                        </div>
                        <div className={`w-full ${items[3].height} rounded-xl overflow-hidden relative`}>
                            <img src={items[3].image} className="w-full h-full object-cover" />
                            <div className="absolute bottom-2 left-2 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded shadow">{items[3].brand}</div>
                        </div>
                    </div>
                    {/* Col 3 */}
                    <div className={`flex flex-col gap-3 md:gap-4 ${items[4].yOffset}`}>
                        <div className={`w-full ${items[4].height} rounded-xl overflow-hidden relative`}>
                            <img src={items[4].image} className="w-full h-full object-cover" />
                            <div className="absolute bottom-2 left-2 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded shadow">{items[4].brand}</div>
                        </div>
                        <div className={`w-full ${items[5].height} rounded-xl overflow-hidden relative`}>
                            <img src={items[5].image} className="w-full h-full object-cover" />
                            <div className="absolute bottom-2 left-2 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded shadow">{items[5].brand}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CampaignsEditorial: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredCampaigns = campaignData.filter(
        (c) => activeFilter === 'All' || c.industry === activeFilter
    );

    return (
        <section className="py-24 md:py-32 bg-[#000000] text-white min-h-screen font-sans">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* --- HEADER --- */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-2xl md:text-3xl font-black tracking-[0.3em] uppercase mb-16 text-[#0066FF]"
                >
                    OUR CAMPAIGNS
                </motion.h2>

                {/* --- SECTION 1 --- */}
                <CollageSection
                    title="CAMPAIGNS WITHOUT LIMITS"
                    description="Generate high-impact media visibility from strategic barter exchanges, tailored to your brand's growth and built to scale across networks, markets, and audiences."
                    buttonText="Start now"
                    items={[
                        { image: campaignData[0].image, brand: campaignData[0].brand, height: 'h-[280px]', yOffset: '-translate-y-6' },
                        { image: campaignData[1].image, brand: campaignData[1].brand, height: 'h-[320px]', yOffset: '' },
                        { image: campaignData[2].image, brand: campaignData[2].brand, height: 'h-[320px]', yOffset: 'translate-y-4' },
                        { image: campaignData[3].image, brand: campaignData[3].brand, height: 'h-[260px]', yOffset: '' },
                        { image: campaignData[4].image, brand: campaignData[4].brand, height: 'h-[240px]', yOffset: '-translate-y-10' },
                        { image: campaignData[5].image, brand: campaignData[5].brand, height: 'h-[360px]', yOffset: '' },
                    ]}
                />

                {/* --- SECTION 2 --- */}
                <CollageSection
                    title="ELEVATE YOUR REACH"
                    description="Deploy coordinated media alignments tapping into massive rural, national, and premium demographics instantly—without upfront cash constraints."
                    buttonText="Explore strategies"
                    reverse={true}
                    useGradient={true}
                    items={[
                        { image: campaignData[6].image, brand: campaignData[6].brand, height: 'h-[220px]', yOffset: 'translate-y-2' },
                        { image: campaignData[7].image, brand: campaignData[7].brand, height: 'h-[380px]', yOffset: '' },
                        { image: campaignData[8].image, brand: campaignData[8].brand, height: 'h-[360px]', yOffset: '-translate-y-8' },
                        { image: campaignData[9].image, brand: campaignData[9].brand, height: 'h-[240px]', yOffset: '' },
                        { image: campaignData[10].image, brand: campaignData[10].brand, height: 'h-[260px]', yOffset: 'translate-y-6' },
                        { image: campaignData[11].image, brand: campaignData[11].brand, height: 'h-[340px]', yOffset: '' },
                    ]}
                />

                {/* --- SECTION 3 --- */}
                <CollageSection
                    title="UNPRECEDENTED SCALE"
                    description="Dominate transit hubs, sporting events, and premium OTT viewership. From next-gen product launches to luxury footprint expansion."
                    buttonText="View case studies"
                    titleColor="white"
                    items={[
                        { image: campaignData[12].image, brand: campaignData[12].brand, height: 'h-[340px]', yOffset: 'translate-y-5' },
                        { image: campaignData[13].image, brand: campaignData[13].brand, height: 'h-[260px]', yOffset: '' },
                        { image: campaignData[14].image, brand: campaignData[14].brand, height: 'h-[240px]', yOffset: '-translate-y-4' },
                        { image: campaignData[15].image, brand: campaignData[15].brand, height: 'h-[360px]', yOffset: '' },
                        { image: campaignData[16].image, brand: campaignData[16].brand, height: 'h-[380px]', yOffset: '-translate-y-12' },
                        { image: campaignData[17].image, brand: campaignData[17].brand, height: 'h-[220px]', yOffset: '' },
                    ]}
                />

                {/* --- SECTION 4 --- */}
                <CollageSection
                    title="GLOBAL MEDIA IMPACT"
                    description="Our barter network connects you to global media ecosystems, enabling footprint expansion into international markets with seamless logistics and local expertise."
                    buttonText="Get started"
                    reverse={true}
                    useGradient={true}
                    items={[
                        { image: campaignData[1].image, brand: campaignData[1].brand, height: 'h-[300px]', yOffset: '-translate-y-4' },
                        { image: campaignData[2].image, brand: campaignData[2].brand, height: 'h-[300px]', yOffset: '' },
                        { image: campaignData[5].image, brand: campaignData[5].brand, height: 'h-[280px]', yOffset: 'translate-y-8' },
                        { image: campaignData[8].image, brand: campaignData[8].brand, height: 'h-[320px]', yOffset: '' },
                        { image: campaignData[10].image, brand: campaignData[10].brand, height: 'h-[340px]', yOffset: '-translate-y-2' },
                        { image: campaignData[13].image, brand: campaignData[13].brand, height: 'h-[260px]', yOffset: '' },
                    ]}
                />

                {/* Filter section container */}
                <div className="border-y border-white/10 py-4 mb-6 mt-12">
                    <div className="flex flex-wrap justify-between md:justify-center items-center gap-2 md:gap-6">
                        {ALL_INDUSTRIES.map((industry) => (
                            <button
                                key={industry}
                                onClick={() => setActiveFilter(industry)}
                                className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${activeFilter === industry
                                    ? 'bg-[#7B61FF] text-white'
                                    : 'text-white/60 hover:text-white'
                                    }`}
                            >
                                {industry}
                            </button>
                        ))}
                    </div>
                </div>

                <p className="text-center text-sm md:text-base text-white/50 max-w-2xl mx-auto mb-12">
                    Bring imagination to life with bold styles, detailed strategies, and concept execution ready for refinement. Explore our media campaigns mapped across your industry.
                </p>

                {/* Filtered Campaigns Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredCampaigns.map((campaign) => (
                            <CampaignCard key={campaign.id} campaign={campaign} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State / Fallback */}
                {filteredCampaigns.length === 0 && (
                    <div className="py-32 text-center text-white/40 font-light text-lg">
                        No campaigns found for this industry.
                    </div>
                )}
            </div>
        </section>
    );
};

export default CampaignsEditorial;
