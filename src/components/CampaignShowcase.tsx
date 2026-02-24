import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// ─── Campaign Data ────────────────────────────────────────────────────────────

const campaigns = [
    {
        brand: 'Titan Watches',
        dealValue: '₹350 Cr Barter',
        channels: ['Print', 'Outdoor', 'Radio'],
        challenge: 'High seasonal inventory across regional retail networks leading to tied-up working capital.',
        solution: 'Structured ₹350 Cr media allocation across major networks in exchange for inventory.',
        impact: 'Result: Strong nationwide brand recall and festive season dominance.',
        accentColor: '#F59E0B',
        stats: [{ label: 'Barter Value', value: '₹350 Cr' }, { label: 'Reach', value: 'Pan-India' }, { label: 'Recall', value: 'High' }],
    },
    {
        brand: 'ITC – Foods',
        dealValue: '₹45 Cr Barter',
        channels: ['Print', 'OTT', 'Outdoor', 'Radio'],
        challenge: 'Required deep rural and tier-2 market penetration for new food product categories.',
        solution: 'Structured a decentralized media strategy exchanging product volume for localized media inventory.',
        impact: 'Result: Pan-India brand visibility and high-frequency reach.',
        accentColor: '#10B981',
        stats: [{ label: 'Barter Value', value: '₹45 Cr' }, { label: 'Impact', value: 'Pan-India' }, { label: 'Frequency', value: 'High' }],
    },
    {
        brand: 'Bajaj Electricals',
        dealValue: '₹35 Cr Barter',
        channels: ['TV', 'Print'],
        challenge: 'Launching multiple product categories simultaneously with optimized media spend.',
        solution: 'Engineered a targeted media barter deal focusing on high-impact Television and Print networks.',
        impact: 'Result: High-impact product launch campaigns without heavy cash spend.',
        accentColor: '#3B82F6',
        stats: [{ label: 'Barter Value', value: '₹35 Cr' }, { label: 'Launch', value: 'Success' }, { label: 'Media', value: 'TV/Print' }],
    },
    {
        brand: 'Godrej Consumer Products',
        dealValue: '₹25 Cr Barter',
        channels: ['Print', 'Digital'],
        challenge: 'Increasing market penetration in competitive home care categories.',
        solution: 'Deployed a coordinated media agreement utilizing inventory to fund a digital-first campaign.',
        impact: 'Result: Increased market penetration and efficient capital use.',
        accentColor: '#EF4444',
        stats: [{ label: 'Barter Value', value: '₹25 Cr' }, { label: 'Growth', value: 'Efficient' }, { label: 'Focus', value: 'Digital' }],
    },
];

// ─── Brand Visual ─────────────────────────────────────────────────────────────

const BrandVisual = ({ color, brand, index }: { color: string; brand: string; index: number }) => (
    <div className="relative w-full h-full rounded-3xl overflow-hidden flex items-center justify-center"
        style={{
            background: `radial-gradient(ellipse at 50% 50%, ${color}15 0%, #FFFBEB 100%)`,
            boxShadow: `0 30px 80px rgba(0,0,0,0.5), inset 0 0 80px ${color}05`,
            border: `1px solid ${color}20`,
        }}>
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 280 200" preserveAspectRatio="xMidYMid slice">
            {[[60, 90, 20, 30], [40, 60, 100, 10], [80, 50, 160, 60], [50, 80, 60, 110], [90, 40, 130, 130], [35, 35, 220, 20]].map(([w, h, x, y], i) => (
                <rect key={i} x={x} y={y} width={w} height={h} rx="3" fill="none" stroke={color} strokeWidth="0.8" opacity={0.35 + i * 0.05} />
            ))}
            <circle cx={140} cy={100} r={55} fill="none" stroke={color} strokeWidth="0.4" opacity={0.18} />
        </svg>
        <span className="absolute bottom-5 right-7 font-mono font-black select-none pointer-events-none opacity-[0.05]"
            style={{ fontSize: 96, color, lineHeight: 1 }}>
            0{index + 1}
        </span>
        <div className="relative z-10 text-center px-6">
            <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3"
                style={{ textShadow: `0 0 40px ${color}50` }}>
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
        <div className="relative flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center px-6 md:px-24 py-8"
            style={{ width: vw, height: '100%' }}>

            {/* Brand Visual */}
            <div className="w-full h-[250px] md:h-[420px]">
                <BrandVisual color={c.accentColor} brand={c.brand} index={index} />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-5">
                <p className="text-slate-600 font-mono text-xs tracking-[0.3em] font-bold">
                    CASE STUDY: {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </p>
                <div className="self-start px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-500 font-bold text-xs tracking-wider">
                    {c.dealValue}
                </div>
                <h3 className="text-3xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">{c.brand}</h3>
                <div className="flex flex-wrap gap-2">
                    {c.channels.map(ch => (
                        <span key={ch} className="text-[10px] font-mono tracking-widest uppercase px-4 py-1.5 rounded-full border border-slate-200 bg-slate-900/5 text-slate-600">
                            {ch}
                        </span>
                    ))}
                </div>
                <div className="space-y-6 mt-2">
                    <div className="border-l-2 border-amber-500/30 pl-4 py-1">
                        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-500 mb-2 font-bold">The Challenge</p>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">{c.challenge}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-600 mb-2 font-bold">Strategy & Solution</p>
                        <p className="text-slate-900 text-sm md:text-base leading-relaxed font-semibold">{c.solution}</p>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl">
                        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-400 mb-1 font-bold">Impact & Results</p>
                        <p className="text-emerald-50/90 text-sm md:text-base font-bold italic">"{c.impact}"</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
                    {c.stats.map(s => (
                        <div key={s.label} className="flex flex-col gap-1">
                            <span className="text-xl md:text-3xl font-black text-slate-900 tracking-tight"
                                style={{ color: c.accentColor }}>
                                {s.value}
                            </span>
                            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-slate-600 font-bold">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ─── Nav Dots ─────────────────────────────────────────────────────────────────

const NavDots = ({ total, activeIndex }: { total: number; activeIndex: number }) => (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {Array.from({ length: total }).map((_, i) => (
            <div key={i} className="rounded-full transition-all duration-500"
                style={{
                    width: i === activeIndex ? 32 : 10,
                    height: 10,
                    background: i === activeIndex ? campaigns[i].accentColor : 'rgba(255,255,255,0.1)',
                    boxShadow: i === activeIndex ? `0 0 15px ${campaigns[i].accentColor}` : 'none'
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

    const xPx = useTransform(smooth, [0, 1], [0, -(campaigns.length - 1) * vw]);

    useEffect(() => {
        const unsub = smooth.on('change', v => {
            setActiveIndex(Math.min(campaigns.length - 1, Math.round(v * (campaigns.length - 1))));
        });
        return unsub;
    }, [smooth]);

    const spotlightColor = campaigns[activeIndex]?.accentColor ?? '#F59E0B';

    return (
        <React.Fragment>
            <section ref={sectionRef} className="relative w-full bg-[#FFFBEB]"
                style={{ height: `${campaigns.length * 100}vh` }}>

                {/* ── Sticky viewport ── */}
                <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col">

                    {/* Grain */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
                        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\"/%3E%3C/svg%3E')" }}
                    />

                    {/* Ambient spotlight colour-shifting with active card */}
                    <div className="absolute inset-0 pointer-events-none transition-all duration-1000"
                        style={{ background: `radial-gradient(ellipse at 50% 50%, ${spotlightColor}15 0%, transparent 70%)` }}
                    />

                    {/* Heading */}
                    <div className="relative z-20 text-center pt-16 pb-3 px-4 flex-shrink-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 mb-6"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-amber-500 uppercase">Case Studies</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                            Strategic Barter{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                                Global Impact
                            </span>
                        </h2>
                    </div>

                    {/* Horizontal card strip */}
                    <div className="relative flex-1 overflow-hidden">
                        {/* Side masks */}
                        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#FFFBEB] to-transparent z-20 pointer-events-none" />
                        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#FFFBEB] to-transparent z-20 pointer-events-none" />

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
        </React.Fragment>
    );
};

export default CampaignShowcase;
