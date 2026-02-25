import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Cloud, Search, BarChart3, TrendingUp } from 'lucide-react';

const journeyNodes = [
    {
        title: "Inventory Assessment",
        content: "Deep-dive analysis of your stock levels and market demand to unearth hidden barter value.",
        icon: <Search className="w-6 h-6 text-[#00B3FF]" />,
        fraction: 0.15,
        align: "left",
        color: "#00B3FF"
    },
    {
        title: "Value Structuring",
        content: "Transforming physical assets into a high-yield digital media credit system.",
        icon: <BarChart3 className="w-6 h-6 text-[#2DFF9B]" />,
        fraction: 0.40,
        align: "right",
        color: "#2DFF9B"
    },
    {
        title: "Multi-Platform Deployment",
        content: "Omnichannel execution across TV, Print, OTT, and OOH with zero cash burn.",
        icon: <Cloud className="w-6 h-6 text-[#B62DFF]" />,
        fraction: 0.65,
        align: "left",
        color: "#B62DFF"
    },
    {
        title: "Market Dominance",
        content: "Scale your brand reach to millions of consumers while preserving total liquidity.",
        icon: <TrendingUp className="w-6 h-6 text-[#FF2D55]" />,
        fraction: 0.90,
        align: "right",
        color: "#FF2D55"
    }
];

// Curved S-Path hugging the nodes
const PATH_DATA = `
  M 600,0 
  C 600,400 1100,500 1100,1000 
  C 1100,1500 100,1800 100,2200 
  C 100,2600 1100,3000 1100,3500
  C 1100,3800 600,3900 600,4000
`;

const CardProgressBar = ({ smoothProgress, F, color }: { smoothProgress: any, F: number, color: string }) => {
    const width = useTransform(smoothProgress, [F - 0.1, F], ["0%", "100%"]);
    return (
        <div className="absolute bottom-0 left-0 h-[2px] bg-white/10 w-full overflow-hidden">
            <motion.div className="h-full" style={{ width, backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
        </div>
    );
};

const MilestoneCard = ({
    node,
    pos,
    smoothProgress,
    cardWidth,
    isMobile
}: {
    node: typeof journeyNodes[0],
    pos: { x: number, y: number },
    smoothProgress: any,
    cardWidth: number,
    isMobile: boolean
}) => {
    const F = node.fraction;

    // Animate opacity, scale, and y
    const fadeStart = F - 0.15;
    const fadeFull = F - 0.02;
    const fadeHold = F + 0.02;
    const fadeEnd = F + 0.15;

    const opacity = useTransform(smoothProgress, [fadeStart, fadeFull, fadeHold, fadeEnd], [0, 1, 1, 0]);
    const scale = useTransform(smoothProgress, [fadeStart, fadeFull, fadeHold, fadeEnd], [0.8, 1, 1, 0.8]);
    const yShift = useTransform(smoothProgress, [fadeStart, fadeFull, fadeHold, fadeEnd], [80, 0, 0, -80]);

    let leftPos = pos.x;
    let topPos = pos.y;

    if (isMobile) {
        leftPos = pos.x - cardWidth / 2;
        topPos = pos.y + 60;
    } else {
        if (node.align === 'left') {
            leftPos = pos.x - cardWidth - 80;
        } else {
            leftPos = pos.x + 80;
        }
        topPos = pos.y - 100;
    }

    return (
        <motion.div
            className="absolute z-30"
            style={{
                left: leftPos,
                top: topPos,
                width: cardWidth,
                opacity,
                scale,
                y: yShift,
            }}
        >
            <div className={`p-8 rounded-3xl bg-[#0F1620]/90 border border-white/5 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors duration-500`}>
                {/* Neon Glow based on node color */}
                <div
                    className="absolute -top-24 -right-24 w-48 h-48 blur-[80px] rounded-full opacity-40 transition-opacity duration-700 group-hover:opacity-70"
                    style={{ backgroundColor: node.color }}
                />

                {/* Border gradient top */}
                <div
                    className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />

                <div className="flex flex-col gap-5 relative z-10">
                    <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-black/50 shadow-inner"
                        style={{ boxShadow: `0 0 20px ${node.color}20` }}
                    >
                        {node.icon}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{node.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed font-medium">
                            {node.content}
                        </p>
                    </div>
                </div>

                <CardProgressBar smoothProgress={smoothProgress} F={F} color={node.color} />
            </div>
        </motion.div>
    );
};

const MatrixBarterJourney: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const [nodesPos, setNodesPos] = useState<{ x: number, y: number }[]>([]);

    // Defaulting to a safe desktop width, exact responsive adjustments handled on resize
    const [isMobile, setIsMobile] = useState(false);
    const [cardWidth, setCardWidth] = useState(420);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setCardWidth(mobile ? window.innerWidth - 40 : 420);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        // Compute node positions exactly along path
        const updateNodes = () => {
            if (pathRef.current) {
                const len = pathRef.current.getTotalLength();
                if (len && len > 0) {
                    setNodesPos(journeyNodes.map(node => {
                        const pt = pathRef.current!.getPointAtLength(node.fraction * len);
                        return { x: pt.x, y: pt.y };
                    }));
                }
            }
        };
        updateNodes();
        const t = setTimeout(updateNodes, 100);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(t);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Spring applied to visual scroll tracking, granting it physical weight
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 45, damping: 25, restDelta: 0.001
    });

    const travelerX = useMotionValue(600);
    const travelerY = useMotionValue(0);

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if (pathRef.current) {
            const len = pathRef.current.getTotalLength();
            if (len > 0) {
                const pt = pathRef.current.getPointAtLength(latest * len);
                travelerX.set(pt.x);
                travelerY.set(pt.y);
            }
        }
    });

    // We build the cinematic camera panning.
    // By using top-1/2 left-1/2 on the container, we place its origin perfectly at the center point.
    // Then we translate strictly by -travelerX and -travelerY avoiding any VW scrollbar offset bugs.
    const xPan = useTransform(travelerX, x => -x);
    const yPan = useTransform(travelerY, y => -y);

    // Slow Parallax for the deep background layer (moves 20% of the normal speed)
    const slowX = useTransform(travelerX, x => x * 0.2);
    const slowY = useTransform(travelerY, y => y * 0.2);
    // Deep background can safely use vw/vh since exact pixel perfection isn't needed for blurry clouds
    const xPanSlow = useMotionTemplate`calc(50vw - ${slowX}px)`;
    const yPanSlow = useMotionTemplate`calc(50vh - ${slowY}px)`;

    return (
        <section ref={sectionRef} className="relative w-full h-[600vh] bg-[#0B0F14]">
            {/* The absolute camera container */}
            <div className="sticky top-0 w-full h-screen overflow-hidden">

                {/* Layer 1: Parallax Deep Background */}
                <motion.div
                    style={{ x: xPanSlow, y: yPanSlow }}
                    className="absolute top-0 left-0 w-[1200vw] h-[1200vh] pointer-events-none -translate-x-[50%] -translate-y-[50%]"
                >
                    {/* Giant ambient color blooms */}
                    <div className="absolute top-[50%] left-[50%] w-[1000px] h-[1000px] bg-sky-900/10 rounded-full blur-[120px] mix-blend-screen" />
                    <div className="absolute top-[60%] left-[45%] w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[100px] mix-blend-screen" />
                    <div className="absolute top-[40%] left-[55%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[100px] mix-blend-screen" />

                    {/* Deep Space Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
                </motion.div>

                {/* Layer 2: Moving World (Tracks the Path) */}
                <motion.div
                    style={{ x: xPan, y: yPan }}
                    className="absolute top-1/2 left-1/2 w-[1200px] h-[4000px] origin-top-left"
                >
                    {/* Heading sitting perfectly in the void above the starting node */}
                    <div className="absolute bottom-full mb-16 left-0 w-[1200px] flex flex-col items-center justify-end text-center px-4 pointer-events-none">
                        <h2 className="text-5xl md:text-7xl font-black text-slate-100 mb-6 tracking-tight">
                            Journey into <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B3FF] to-[#2DFF9B] drop-shadow-[0_0_15px_rgba(0,179,255,0.4)] px-2">
                                Media Power
                            </span>
                        </h2>
                        <p className="text-slate-400 text-base md:text-xl font-medium max-w-2xl mx-auto">
                            A seamless transition from idle inventory to nationwide brand supremacy. <br className="hidden md:block" />
                            Follow the luminary path.
                        </p>
                    </div>

                    <svg width="1200" height="4000" viewBox="0 0 1200 4000" className="absolute inset-0 drop-shadow-2xl">
                        <defs>
                            <linearGradient id="pathGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#00B3FF" />
                                <stop offset="30%" stopColor="#2DFF9B" />
                                <stop offset="70%" stopColor="#B62DFF" />
                                <stop offset="100%" stopColor="#FF2D55" />
                            </linearGradient>
                            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="15" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Faint base track */}
                        <path
                            d={PATH_DATA}
                            stroke="rgba(255,255,255,0.04)"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                        />

                        {/* High-voltage lit track mapped precisely to scroll progress */}
                        <motion.path
                            ref={pathRef}
                            d={PATH_DATA}
                            stroke="url(#pathGradient)"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                            style={{ pathLength: smoothProgress }}
                            filter="url(#neonGlow)"
                        />
                    </svg>

                    {/* Milestone Cards scattered perfectly along world space */}
                    {nodesPos.map((pos, i) => (
                        <MilestoneCard
                            key={i}
                            node={journeyNodes[i]}
                            pos={pos}
                            smoothProgress={smoothProgress}
                            cardWidth={cardWidth}
                            isMobile={isMobile}
                        />
                    ))}
                </motion.div>

                {/* Layer 3: HUD / Fixed Viewer Orb (Remains centered while world moves beneath) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none flex items-center justify-center">
                    {/* Outer locking ring */}
                    <motion.div
                        className="absolute w-12 h-12 rounded-full border border-white/20 border-t-[#00B3FF] border-r-[#2DFF9B]"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Inner searing bright core tracking the line */}
                    <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_20px_#FFF,0_0_40px_#00B3FF] animate-pulse relative z-10" />

                    {/* Data readout fixed to orb */}
                    <div className="absolute left-14 top-1/2 -translate-y-1/2 flex flex-col hidden md:flex items-start">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-none">Velocity</span>
                        <motion.span className="text-xs font-mono text-[#00B3FF] leading-none mt-1 font-bold">
                            {useTransform(smoothProgress, v => `${(v * 100).toFixed(0)}%`)}
                        </motion.span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MatrixBarterJourney;
