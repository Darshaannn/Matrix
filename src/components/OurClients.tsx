import React, { useState } from 'react';
import { motion } from 'framer-motion';

// ─── Brand Data ──────────────────────────────────────────────────────────────

const rows: { category: string; brands: { name: string; deal?: string }[] }[] = [
    {
        category: 'FMCG',
        brands: [
            { name: 'ITC', deal: '₹45 Cr' },
            { name: 'Marico', deal: '₹22 Cr' },
            { name: 'Dabur', deal: '₹38 Cr' },
            { name: 'Hindustan Unilever', deal: '₹60 Cr' },
            { name: 'Godrej Consumer', deal: '₹29 Cr' },
            { name: 'Emami', deal: '₹18 Cr' },
            { name: 'Patanjali', deal: '₹31 Cr' },
            { name: 'Nestle India', deal: '₹42 Cr' },
        ],
    },
    {
        category: 'Consumer Durables',
        brands: [
            { name: 'Bajaj Electricals', deal: '₹35 Cr' },
            { name: 'Havells', deal: '₹52 Cr' },
            { name: 'Voltas', deal: '₹47 Cr' },
            { name: 'Blue Star', deal: '₹28 Cr' },
            { name: 'Orient Electric', deal: '₹24 Cr' },
            { name: 'Crompton', deal: '₹33 Cr' },
            { name: 'V-Guard', deal: '₹19 Cr' },
            { name: 'Whirlpool India', deal: '₹44 Cr' },
        ],
    },
    {
        category: 'Lifestyle',
        brands: [
            { name: 'Titan', deal: '₹350 Cr' },
            { name: 'Manyavar', deal: '₹40 Cr' },
            { name: 'Bata India', deal: '₹26 Cr' },
            { name: 'Woodland', deal: '₹21 Cr' },
            { name: 'Raymond', deal: '₹55 Cr' },
            { name: 'Peter England', deal: '₹17 Cr' },
            { name: 'Fabindia', deal: '₹15 Cr' },
            { name: 'W for Woman', deal: '₹12 Cr' },
        ],
    },
    {
        category: 'Automobile & Hospitality',
        brands: [
            { name: 'Bajaj Auto', deal: '₹75 Cr' },
            { name: 'TVS Motor', deal: '₹62 Cr' },
            { name: 'Hero MotoCorp', deal: '₹88 Cr' },
            { name: 'Mahindra', deal: '₹95 Cr' },
            { name: 'OYO Hotels', deal: '₹36 Cr' },
            { name: 'Lemon Tree Hotels', deal: '₹22 Cr' },
            { name: 'Treebo', deal: '₹14 Cr' },
            { name: 'Airbnb India', deal: '₹18 Cr' },
        ],
    },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const Tooltip = ({ name, deal, visible }: { name: string; deal?: string; visible: boolean }) => (
    <motion.div
        className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none z-50 whitespace-nowrap"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 4 }}
        transition={{ duration: 0.15 }}
    >
        <div className="bg-[#0F172A] border border-[#3B82F6]/40 px-3 py-1.5 rounded-lg shadow-[0_4px_20px_rgba(59,130,246,0.15)]">
            <p className="text-white text-xs font-medium tracking-wide">{name}</p>
            {deal && <p className="text-[#3B82F6] text-[10px] font-mono mt-0.5">{deal} deal</p>}
        </div>
        {/* Arrow */}
        <div className="w-2 h-2 bg-[#0F172A] border-b border-r border-[#3B82F6]/40 rotate-45 mx-auto -mt-1" />
    </motion.div>
);

const LogoItem = ({ brand }: { brand: { name: string; deal?: string } }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative flex-shrink-0 mx-8 cursor-default group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Tooltip name={brand.name} deal={brand.deal} visible={hovered} />
            <motion.div
                className="text-white/60 font-semibold text-base md:text-lg tracking-widest uppercase font-mono select-none"
                animate={{
                    opacity: hovered ? 1 : 0.6,
                    scale: hovered ? 1.05 : 1,
                    textShadow: hovered ? '0 0 20px rgba(59,130,246,0.8)' : '0 0 0px transparent',
                }}
                transition={{ duration: 0.2 }}
            >
                {brand.name}
            </motion.div>
            {/* Bottom glow line on hover */}
            <motion.div
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#3B82F6] origin-left"
                animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
            />
        </div>
    );
};

// CSS infinite marquee for each row. direction: 'left' | 'right'
const MarqueeRow = ({
    brands,
    direction,
    speed,
}: {
    brands: { name: string; deal?: string }[];
    direction: 'left' | 'right';
    speed: number;
}) => {
    // Duplicate brands for seamless loop
    const doubled = [...brands, ...brands];
    const animDir = direction === 'left' ? '-50%' : '0%';
    const animStart = direction === 'left' ? '0%' : '-50%';

    return (
        <div className="overflow-hidden w-full">
            <motion.div
                className="flex items-center w-max"
                animate={{ x: [animStart, animDir] }}
                transition={{ duration: speed, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
            >
                {doubled.map((brand, i) => (
                    <LogoItem key={`${brand.name}-${i}`} brand={brand} />
                ))}
            </motion.div>
        </div>
    );
};

// ─── Main Section ──────────────────────────────────────────────────────────────

const OurClients: React.FC = () => {
    const speeds = [35, 28, 32, 25]; // Slightly different speeds per row for depth

    return (
        <section className="relative w-full bg-[#0B1220] overflow-hidden py-28">
            {/* Background Grain */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage:
                        "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
                }}
            />

            {/* Radial Centre Glow */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_65%)]" />

            {/* Top + Bottom Fade Masks */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0B1220] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B1220] to-transparent pointer-events-none z-10" />

            {/* Side Fade Masks (so logos don't hard-clip at edges) */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B1220] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B1220] to-transparent pointer-events-none z-10" />

            {/* ── Heading ── */}
            <motion.div
                className="relative z-20 text-center mb-20 px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <p className="text-[#3B82F6] font-mono text-xs uppercase tracking-[0.25em] mb-5">
                    Our Clients
                </p>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                    Trusted by India's{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#00C2FF]">
                        Leading Brands
                    </span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                    500+ brands across FMCG, Consumer Durables, Lifestyle, Automotive & Hospitality trust Matrix to structure high-value media barter deals.
                </p>
            </motion.div>

            {/* ── Logo Rows ── */}
            <motion.div
                className="relative z-20 flex flex-col gap-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                {rows.map((row, rowIndex) => (
                    <div key={row.category} className="flex items-center gap-6">
                        {/* Category label — hidden on mobile */}
                        <div className="hidden lg:flex flex-shrink-0 w-44 justify-end pr-6">
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 text-right leading-tight">
                                {row.category}
                            </span>
                        </div>

                        {/* Thin separator line */}
                        <div className="hidden lg:block w-px h-6 bg-white/10 flex-shrink-0" />

                        {/* Marquee */}
                        <div className="flex-1 min-w-0">
                            <MarqueeRow
                                brands={row.brands}
                                direction={rowIndex % 2 === 0 ? 'left' : 'right'}
                                speed={speeds[rowIndex]}
                            />
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* ── Bottom Stats Bar ── */}
            <motion.div
                className="relative z-20 mt-20 max-w-5xl mx-auto px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.5 }}
            >
                <div className="border border-white/5 rounded-2xl bg-white/[0.02] backdrop-blur-sm grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                    {[
                        { value: '500+', label: 'Brands Served' },
                        { value: '₹1000 Cr+', label: 'Barter Value' },
                        { value: '100+', label: 'Cities Covered' },
                        { value: '15+', label: 'Years Experience' },
                    ].map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center justify-center py-8 px-6 text-center">
                            <span className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">
                                {stat.value}
                            </span>
                            <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default OurClients;
