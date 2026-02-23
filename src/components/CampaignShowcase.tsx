import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// ─── Campaign Data ────────────────────────────────────────────────────────────

const campaigns = [
    {
        brand: 'ITC Limited – FMCG',
        dealValue: '₹45 Cr',
        channels: ['Print', 'OTT', 'Outdoor', 'Radio'],
        objective: 'Nationwide reach & brand visibility across regional markets.',
        impact: 'Sunfeast achieved massive recall lift in Tier 2 cities without cash outflow, proving structured barter delivers measurable brand equity.',
        accentColor: '#3B82F6',
        stats: [{ label: 'Markets Reached', value: '18 States' }, { label: 'Impressions', value: '420M+' }, { label: 'Cash Saved', value: '₹45 Cr' }],
    },
    {
        brand: 'Godrej – Consumer Goods',
        dealValue: '₹80 Cr',
        channels: ['TV', 'Print', 'Outdoor', 'Digital'],
        objective: 'Nationwide reach & brand visibility for new product lines.',
        impact: 'Secured high-frequency ad spots leading to a 22% increase in brand search volume during the festive quarter.',
        accentColor: '#00C2FF',
        stats: [{ label: 'Media Channels', value: '4 Platforms' }, { label: 'Reach', value: '800M+' }, { label: 'Deal Value', value: '₹80 Cr' }],
    },
    {
        brand: 'Titan – Lifestyle',
        dealValue: '₹350 Cr',
        channels: ['TV', 'Print', 'Outdoor', 'Digital'],
        objective: 'Nationwide reach & prestige brand visibility for Tanishq.',
        impact: "Pan-India brand presence secured across premium touchpoints, amplifying Titan's festive season dominance without liquidity pressure.",
        accentColor: '#6366F1',
        stats: [{ label: 'Markets', value: 'Pan-India' }, { label: 'Reach', value: '600M+' }, { label: 'Media Value', value: '₹350 Cr' }],
    },
    {
        brand: 'Bajaj – Automobiles',
        dealValue: '₹75 Cr',
        channels: ['TV', 'Radio', 'Cinema', 'Outdoor'],
        objective: 'Nationwide reach & launch visibility for new 2-wheelers.',
        impact: 'Multi-platform deployment across 12 metros saw first-week sales exceed projections by 38% in structured launch markets.',
        accentColor: '#10B981',
        stats: [{ label: 'Markets', value: '12 Metros' }, { label: 'Sales Lift', value: '+38%' }, { label: 'Deal Value', value: '₹75 Cr' }],
    },
    {
        brand: 'VIP Industries – Luggage',
        dealValue: '₹40 Cr',
        channels: ['Print', 'Outdoor', 'Digital', 'OTT'],
        objective: 'Nationwide reach & brand visibility during travel season.',
        impact: 'Dominated airport and transit media nationwide, translating excess stock into powerful brand presence at critical traveler touchpoints.',
        accentColor: '#F59E0B',
        stats: [{ label: 'Transit Hubs', value: '45+' }, { label: 'Impressions', value: '150M+' }, { label: 'Cash Saved', value: '₹40 Cr' }],
    },
    {
        brand: 'Himalaya – Wellness',
        dealValue: '₹120 Cr',
        channels: ['TV', 'Print', 'Radio', 'Digital'],
        objective: 'Nationwide reach & brand visibility for personal care products.',
        impact: 'Unprecedented rural and urban penetration using a mix of regional TV and local print, cementing category leadership.',
        accentColor: '#EC4899',
        stats: [{ label: 'Media Channels', value: '4 Platforms' }, { label: 'Reach', value: '900M+' }, { label: 'Media Value', value: '₹120 Cr' }],
    },
];

// ─── Brand Visual ─────────────────────────────────────────────────────────────

const BrandVisual = ({ color, brand, index }: { color: string; brand: string; index: number }) => (
    <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center"
        style={{
            background: `radial-gradient(ellipse at 55% 40%, ${color}20 0%, #0B1220 70%)`,
            boxShadow: `0 30px 80px rgba(0,0,0,0.7), inset 0 0 80px ${color}08`,
            border: `1px solid ${color}25`,
        }}>
        <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 280 200" preserveAspectRatio="xMidYMid slice">
            {[[60, 90, 20, 30], [40, 60, 100, 10], [80, 50, 160, 60], [50, 80, 60, 110], [90, 40, 130, 130], [35, 35, 220, 20]].map(([w, h, x, y], i) => (
                <rect key={i} x={x} y={y} width={w} height={h} rx="3" fill="none" stroke={color} strokeWidth="0.8" opacity={0.35 + i * 0.05} />
            ))}
            <circle cx={140} cy={100} r={55} fill="none" stroke={color} strokeWidth="0.4" opacity={0.18} />
        </svg>
        <span className="absolute bottom-5 right-7 font-mono font-black select-none pointer-events-none opacity-[0.07]"
            style={{ fontSize: 96, color, lineHeight: 1 }}>
            0{index + 1}
        </span>
        {[['top-4 left-4 border-t border-l'], ['top-4 right-4 border-t border-r'], ['bottom-4 left-4 border-b border-l'], ['bottom-4 right-4 border-b border-r']].map(([cls], i) => (
            <div key={i} className={`absolute w-5 h-5 ${cls}`} style={{ borderColor: `${color}50` }} />
        ))}
        <div className="relative z-10 text-center px-6">
            <p className="text-3xl md:text-4xl font-black text-white/90 tracking-tight leading-tight mb-3"
                style={{ textShadow: `0 0 50px ${color}70` }}>
                {brand.split(' – ')[0]}
            </p>
            <div className="mx-auto h-[2px] w-12"
                style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }} />
        </div>
    </div>
);

// ─── Campaign Card ─────────────────────────────────────────────────────────────

const CampaignCard = ({ campaign, index, total, vw }: {
    campaign: typeof campaigns[0]; index: number; total: number; vw: number;
}) => {
    const c = campaign;
    return (
        <div className="relative flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center px-6 md:px-20 py-8"
            style={{ width: vw, height: '100%' }}>

            {/* Brand Visual */}
            <div className="w-full h-[200px] md:h-[360px]">
                <BrandVisual color={c.accentColor} brand={c.brand} index={index} />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-4">
                <p className="text-white/20 font-mono text-xs tracking-[0.2em]">
                    {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </p>
                <span className="self-start text-xs font-mono px-4 py-1.5 rounded-full border font-semibold tracking-wider"
                    style={{ borderColor: `${c.accentColor}50`, color: c.accentColor, background: `${c.accentColor}15` }}>
                    {c.dealValue} Structured
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">{c.brand}</h3>
                <div className="flex flex-wrap gap-2">
                    {c.channels.map(ch => (
                        <span key={ch} className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border"
                            style={{ borderColor: `${c.accentColor}40`, color: c.accentColor, background: `${c.accentColor}10` }}>
                            {ch}
                        </span>
                    ))}
                </div>
                <div className="space-y-3">
                    <div>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-white/25 mb-1">Objective</p>
                        <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">{c.objective}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-white/25 mb-1">Impact</p>
                        <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">{c.impact}</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-3 border-t" style={{ borderColor: `${c.accentColor}20` }}>
                    {c.stats.map(s => (
                        <div key={s.label} className="flex flex-col gap-1">
                            <span className="text-xl md:text-2xl font-bold text-white tracking-tight"
                                style={{ textShadow: `0 0 16px ${c.accentColor}60` }}>
                                {s.value}
                            </span>
                            <span className="text-[9px] font-mono uppercase tracking-widest text-white/30">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ─── Nav Dots ─────────────────────────────────────────────────────────────────

const NavDots = ({ total, activeIndex }: { total: number; activeIndex: number }) => (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {Array.from({ length: total }).map((_, i) => (
            <div key={i} className="rounded-full transition-all duration-500"
                style={{
                    width: i === activeIndex ? 24 : 8,
                    height: 8,
                    background: i === activeIndex ? campaigns[i].accentColor : 'rgba(255,255,255,0.2)',
                }} />
        ))}
    </div>
);

// ─── Main Section ──────────────────────────────────────────────────────────────

const CampaignShowcase: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1366);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const onResize = () => setVw(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 22, restDelta: 0.001 });

    // Pixel-exact horizontal pan: 0 → -(N-1) * vw
    const xPx = useTransform(smooth, [0, 1], [0, -(campaigns.length - 1) * vw]);

    // Track active index for spotlight + dots
    useEffect(() => {
        const unsub = smooth.on('change', v => {
            setActiveIndex(Math.min(campaigns.length - 1, Math.round(v * (campaigns.length - 1))));
        });
        return unsub;
    }, [smooth]);

    const spotlightColor = campaigns[activeIndex]?.accentColor ?? '#3B82F6';

    return (
        <React.Fragment>
            <section ref={sectionRef} className="relative w-full bg-[#0B1220]"
                style={{ height: `${campaigns.length * 100}vh` }}>

                {/* ── Sticky viewport ── */}
                <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col">

                    {/* Grain */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\"/%3E%3C/svg%3E')" }}
                    />

                    {/* Ambient spotlight colour-shifting with active card */}
                    <div className="absolute inset-0 pointer-events-none transition-all duration-1000"
                        style={{ background: `radial-gradient(ellipse at 50% 60%, ${spotlightColor}09 0%, transparent 65%)` }}
                    />

                    {/* Heading */}
                    <div className="relative z-20 text-center pt-10 pb-3 px-4 flex-shrink-0">
                        <p className="text-[#3B82F6] font-mono text-[10px] uppercase tracking-[0.3em] mb-2">Campaign Showcase</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                            Campaigns That Reached{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#00C2FF]">
                                the Hearts
                            </span>
                        </h2>
                        <p className="mt-2 text-gray-400 text-sm max-w-lg mx-auto">
                            Strategic barter campaigns that created visibility and lasting brand recall across India.
                        </p>
                    </div>

                    {/* Horizontal card strip */}
                    <div className="relative flex-1 overflow-hidden">
                        {/* Left / right fade masks */}
                        <div className="absolute left-0 inset-y-0 w-12 bg-gradient-to-r from-[#0B1220] to-transparent z-20 pointer-events-none" />
                        <div className="absolute right-0 inset-y-0 w-12 bg-gradient-to-l from-[#0B1220] to-transparent z-20 pointer-events-none" />

                        <motion.div
                            className="flex h-full"
                            style={{
                                width: campaigns.length * vw,
                                x: xPx,
                            }}
                        >
                            {campaigns.map((c, i) => (
                                <CampaignCard key={c.brand} campaign={c} index={i} total={campaigns.length} vw={vw} />
                            ))}
                        </motion.div>
                    </div>

                    {/* Nav dots */}
                    <NavDots total={campaigns.length} activeIndex={activeIndex} />
                </div>
            </section>

            {/* ── Metrics bar — outside the sticky section so it only appears AFTER the full scroll ── */}
            <div className="relative z-10 bg-[#0B1220] border-t border-white/5 py-16 px-4">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { value: '₹500+ Cr', label: 'Media Structured' },
                        { value: '250+', label: 'Brands Activated' },
                        { value: 'Pan-India', label: 'Reach Delivered' },
                    ].map((m, i) => (
                        <motion.div key={m.label}
                            className="flex flex-col items-center justify-center text-center py-10 rounded-2xl border border-white/5 bg-white/[0.02]"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}>
                            <span className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                                {m.value}
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">{m.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default CampaignShowcase;
