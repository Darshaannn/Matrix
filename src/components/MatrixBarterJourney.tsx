import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, useMotionValue } from 'framer-motion';
import { Cloud, Search, BarChart3, TrendingUp } from 'lucide-react';

const journeyNodes = [
    {
        title: "Inventory Assessment",
        content: "We analyze your stock levels and market demand to identify high-value barter opportunities.",
        icon: <Search className="w-5 h-5 text-emerald-400" />
    },
    {
        title: "Media Value Structuring",
        content: "Our team converts your physical assets into a structured digital media credit system.",
        icon: <BarChart3 className="w-5 h-5 text-sky-400" />
    },
    {
        title: "Multi-Platform Deployment",
        content: "Execute nationwide campaigns across TV, Print, OTT, and OOH without cash burn.",
        icon: <Cloud className="w-5 h-5 text-blue-400" />
    },
    {
        title: "Growth Without Cash Burn",
        content: "Preserve your liquidity while scaling your brand reach to millions of consumers.",
        icon: <TrendingUp className="w-5 h-5 text-emerald-300" />
    }
];

const MilestoneCard = ({
    node,
    index,
    pos,
    smoothProgress,
    isMobile
}: {
    node: typeof journeyNodes[0],
    index: number,
    pos: { x: number, y: number, fraction: number },
    smoothProgress: any,
    isMobile: boolean
}) => {
    const F = pos.fraction;
    const scrollRevealStart = F - 0.08;
    const scrollRevealEnd = F;

    const opacity = useTransform(smoothProgress, [scrollRevealStart, scrollRevealEnd], [0, 1]);
    const yOffset = useTransform(smoothProgress, [scrollRevealStart, scrollRevealEnd], [30, 0]);
    const scale = useTransform(smoothProgress, [scrollRevealStart, scrollRevealEnd], [0.95, 1]);

    const isLeft = index % 2 === 0;
    const cardWidth = isMobile ? 280 : 380;
    const xDist = isMobile ? 30 : 80;

    return (
        <motion.div
            className="absolute z-30"
            style={{
                left: isLeft ? 'auto' : pos.x + xDist,
                right: isLeft ? (window.innerWidth - pos.x) + xDist : 'auto',
                top: pos.y,
                y: "-50%",
                width: cardWidth,
                opacity,
                scale,
            }}
        >
            <motion.div
                className="bg-[#1C2430]/80 backdrop-blur-xl border border-white/5 p-6 rounded-2xl shadow-2xl relative overflow-hidden group"
                style={{ y: yOffset }}
            >
                {/* Subtle internal glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/10 blur-3xl rounded-full group-hover:bg-sky-500/20 transition-colors" />

                <div className="flex items-center gap-4 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-white/10">
                        {node.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-100">{node.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                    {node.content}
                </p>

                {/* Accent dot */}
                <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-[#2DFF9B] shadow-[0_0_8px_#2DFF9B]" />
            </motion.div>
        </motion.div>
    );
};

const MatrixBarterJourney: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const [pathData, setPathData] = useState("");
    const [nodesPos, setNodesPos] = useState<{ x: number, y: number, fraction: number }[]>([]);
    const [isMobile, setIsMobile] = useState(false);

    const SVG_HEIGHT = 2200;
    const SVG_WIDTH = 1200;
    // Curved forward-moving path
    const PATH_DATA = "M600 0 C600 400 200 600 200 1000 C200 1400 1000 1600 1000 2000 L1000 2200";

    useEffect(() => {
        setPathData(PATH_DATA);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (pathRef.current && pathData) {
            const len = pathRef.current.getTotalLength();
            const fractions = [0.15, 0.45, 0.75, 0.92];
            setNodesPos(fractions.map(f => {
                const pt = pathRef.current!.getPointAtLength(f * len);
                return { x: pt.x, y: pt.y, fraction: f };
            }));
        }
    }, [pathData]);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 45, damping: 25, restDelta: 0.001
    });

    const yPan = useTransform(smoothProgress, [0, 1], [0, -(SVG_HEIGHT - 600)]);
    const pathRevealOpacity = useTransform(smoothProgress, [0, 0.05], [0, 1]);

    const travelerX = useMotionValue(600);
    const travelerY = useMotionValue(0);

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if (pathRef.current) {
            const len = pathRef.current.getTotalLength();
            const pt = pathRef.current.getPointAtLength(latest * len);
            travelerX.set(pt.x);
            travelerY.set(pt.y);
        }
    });

    return (
        <section ref={sectionRef} className="relative w-full h-[600vh] bg-[#0B0F14] overflow-hidden">
            <div className="sticky top-0 w-full h-screen overflow-hidden">

                {/* ── Background Effects ── */}
                {/* Fog Layer */}
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                    <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-sky-900/20 to-transparent blur-3xl animate-pulse" />
                </div>

                {/* Street Lamp Ray Simulation */}
                <div className="absolute top-[-10%] left-[20%] w-[400px] h-screen bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05)_0%,transparent_70%)] -rotate-12 blur-3xl" />
                <div className="absolute top-[-5%] right-[10%] w-[300px] h-screen bg-[radial-gradient(circle_at_top,rgba(0,179,255,0.03)_0%,transparent_70%)] rotate-6 blur-3xl" />

                {/* Heading */}
                <motion.div
                    className="absolute top-32 left-0 w-full text-center z-50 px-6"
                    style={{ opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]) }}
                >
                    <h2 className="text-4xl md:text-6xl font-black text-slate-100 mb-4 tracking-tight">
                        Journey into <span className="text-[#00B3FF] drop-shadow-[0_0_15px_rgba(0,179,255,0.5)]">Media Power</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-medium">
                        Scroll to traverse the path from inventory to market dominance.
                    </p>
                </motion.div>

                {/* ── Journey Path & Elements ── */}
                <motion.div
                    className="absolute top-0 left-1/2"
                    style={{
                        width: SVG_WIDTH,
                        height: SVG_HEIGHT,
                        y: yPan,
                        x: "-50%"
                    }}
                >
                    <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}>
                        <defs>
                            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="8" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        {/* Base path trace */}
                        <path
                            d={PATH_DATA}
                            stroke="rgba(0, 179, 255, 0.05)"
                            strokeWidth="12"
                            fill="none"
                        />

                        {/* Animated Path */}
                        <motion.path
                            ref={pathRef}
                            d={PATH_DATA}
                            stroke="#00B3FF"
                            strokeWidth="4"
                            fill="none"
                            filter="url(#neonGlow)"
                            style={{
                                pathLength: smoothProgress,
                                opacity: pathRevealOpacity
                            }}
                        />

                        {/* Path accent points */}
                        {nodesPos.map((pos, i) => (
                            <motion.circle
                                key={i}
                                cx={pos.x}
                                cy={pos.y}
                                r="4"
                                fill="#2DFF9B"
                                style={{
                                    opacity: useTransform(smoothProgress, [pos.fraction - 0.05, pos.fraction], [0, 1]),
                                    filter: 'drop-shadow(0 0 8px #2DFF9B)'
                                }}
                            />
                        ))}
                    </svg>

                    {/* Traveling Light/Orbin */}
                    <motion.div
                        className="absolute w-6 h-6 rounded-full bg-white z-40 shadow-[0_0_20px_#00B3FF,0_0_40px_rgba(0,179,255,0.5)]"
                        style={{
                            left: travelerX,
                            top: travelerY,
                            x: "-50%",
                            y: "-50%",
                            opacity: pathRevealOpacity
                        }}
                    >
                        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20" />
                    </motion.div>

                    {/* Milestone Cards */}
                    {nodesPos.map((pos, i) => (
                        <MilestoneCard
                            key={i}
                            index={i}
                            node={journeyNodes[i]}
                            pos={pos}
                            smoothProgress={smoothProgress}
                            isMobile={isMobile}
                        />
                    ))}
                </motion.div>

                {/* Progress Indicator (Bottom Right) */}
                <div className="absolute bottom-10 right-10 z-50 flex items-center gap-4">
                    <div className="text-right">
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Progress</p>
                        <motion.p className="text-2xl font-black text-slate-200">
                            {useTransform(smoothProgress, v => `${Math.round(v * 100)}%`)}
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MatrixBarterJourney;
