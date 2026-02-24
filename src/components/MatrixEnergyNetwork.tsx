import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

const BASE_RADIUS = 280; // Increased from 240 to move chips further from core and avoid text overlap

type NodeType = 'horizontal' | 'wider' | 'double' | 'taller' | 'slim' | 'broader';

const nodesData: { id: string, label: string, subtext: string, angle: number, type: NodeType }[] = [
    { id: 'print', label: 'Print', subtext: 'National & Regional Dailies', angle: -90, type: 'horizontal' },
    { id: 'tv', label: 'TV', subtext: 'National & Regional Channels', angle: -30, type: 'wider' },
    { id: 'digital', label: 'Digital', subtext: 'OTT + Programmatic', angle: 30, type: 'double' },
    { id: 'cinema', label: 'Cinema', subtext: 'Multiplex Networks', angle: 90, type: 'broader' },
    { id: 'outdoor', label: 'Outdoor', subtext: 'OOH & Transit', angle: 150, type: 'taller' },
    { id: 'radio', label: 'Radio', subtext: 'Pan-India FM', angle: 210, type: 'slim' },
];

const degreesToRadians = (deg: number) => (deg * Math.PI) / 180;

// Helper to draw orthogonal PCB traces. It goes out half way horizontally/vertically, then turns to meet the target.
const generateOrthogonalPath = (startX: number, startY: number, endX: number, endY: number) => {
    // Determine major axis of movement
    const dx = endX - startX;
    const dy = endY - startY;

    // To look like a PCB, we want 1 bend (90deg) or 2 bends. 
    const midX = startX + (dx * 0.5);

    // If it's pure vertical (top/bottom), go straight
    if (Math.abs(dx) < 10) return `M ${startX} ${startY} L ${endX} ${endY}`;
    // If it's pure horizontal, go straight
    if (Math.abs(dy) < 10) return `M ${startX} ${startY} L ${endX} ${endY}`;

    // Standard PCB style: Outwards horizontally, then vertically to target, then horizontally to connect
    return `M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}`;
};

const ChipsetPinEdge = ({ count, position }: { count: number, position: 'left' | 'right' }) => (
    <div className={`absolute ${position === 'left' ? '-left-1.5' : '-right-1.5'} top-1/2 -translate-y-1/2 flex flex-col justify-between h-[80%] py-1`}>
        {Array.from({ length: count }).map((_, i) => (
            <div key={i} className={`w-[6px] h-[3px] bg-slate-300 shadow-[0_1px_2px_rgba(0,0,0,0.05)] ${position === 'left' ? 'rounded-l-sm' : 'rounded-r-sm'}`} />
        ))}
    </div>
);

const ChipNode = ({
    node,
    index,
    totalProgress,
    isMobile,
    center
}: {
    node: typeof nodesData[0];
    index: number;
    totalProgress: MotionValue<number>;
    isMobile: boolean;
    center: { x: number, y: number };
}) => {
    // Math for desktop radial positioning
    const rad = degreesToRadians(node.angle);
    const targetX = center.x + Math.cos(rad) * BASE_RADIUS;
    const targetY = center.y + Math.sin(rad) * BASE_RADIUS;

    // Math for mobile vertical stacking: Push down and increase spacing to stop overlapping
    const mobileTargetX = center.x;
    const mobileTargetY = center.y + 320 + (index * 200);

    const cx = isMobile ? mobileTargetX : targetX;
    const cy = isMobile ? mobileTargetY : targetY;

    // Wait for core glow (0.2), then draw outward.
    const drawTimingStart = 0.2 + (index * 0.02); // Slight stagger on line drawing
    const drawTimingEnd = 0.5 + (index * 0.02);
    const lineDrawProgress = useTransform(totalProgress, [drawTimingStart, drawTimingEnd], [0, 1]);

    // Activation Timing (Staggered based on index)
    const staggerSlice = 0.3 / nodesData.length;
    const activationStart = 0.5 + (index * staggerSlice);
    const activationEnd = activationStart + staggerSlice;

    const nodeOpacity = useTransform(totalProgress, [activationStart - 0.05, activationStart + 0.02], [0.4, 1]);
    const glowOpacity = useTransform(totalProgress, [activationStart, activationEnd], [0, 1]);

    const borderEdgeClass = useTransform(glowOpacity, (v) =>
        v > 0.8 ? "1px solid rgba(245,158,11,0.8)" : "1px solid rgba(0,0,0,0.08)"
    );
    const boxShadow = useTransform(glowOpacity, (v) => `0 20px 40px rgba(0,0,0,0.05), 0 0 ${30 * v}px rgba(245,158,11,${0.3 * v}) inset, 0 0 ${20 * v}px rgba(245,158,11,${0.4 * v})`);

    // Hardware Flicker on Power Up
    const flickerScale = useTransform(totalProgress,
        [activationStart, activationStart + 0.02, activationStart + 0.04, activationStart + 0.08, activationEnd],
        [1, 1.05, 0.98, 1.02, 1]
    );

    // Orthogonal Path
    const pathD = isMobile
        ? `M ${center.x} ${center.y} L ${center.x} ${cy}`
        : generateOrthogonalPath(center.x, center.y, cx, cy);

    // Chip shape sizing maps
    const chipSizes = {
        'horizontal': 'w-[110px] h-[50px]',
        'wider': 'w-[130px] h-[60px]',
        'double': 'w-[120px] h-[70px]',
        'taller': 'w-[90px] h-[85px]',
        'slim': 'w-[110px] h-[40px]',
        'broader': 'w-[140px] h-[55px]'
    };

    return (
        <>
            {/* PCB Circuit Trace */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id={`trace-${node.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                    <filter id="neonBlur" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Core Solder Point */}
                <circle cx={center.x} cy={center.y} r="5" fill="#FDE68A" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />

                {/* Base Faint Trace */}
                <path
                    d={pathD}
                    stroke="rgba(0,0,0,0.05)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinejoin="miter"
                />

                {/* Animated Neon Trace */}
                <motion.path
                    d={pathD}
                    stroke={`url(#trace-${node.id})`}
                    strokeWidth="2"
                    fill="none"
                    strokeLinejoin="miter"
                    filter="url(#neonBlur)"
                    style={{ pathLength: lineDrawProgress }}
                />

                {/* Terminal Solder Point */}
                <motion.circle
                    cx={cx} cy={cy} r="4"
                    fill="#FFFBEB"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                    style={{ opacity: lineDrawProgress }}
                />
            </svg>

            {/* Microchip Module */}
            <motion.div
                className="absolute z-20 flex flex-col items-center justify-center group cursor-pointer"
                style={{
                    left: cx,
                    top: cy,
                    x: "-50%",
                    y: "-50%",
                    scale: flickerScale,
                    opacity: nodeOpacity,
                }}
            >
                <motion.div
                    className={`${chipSizes[node.type]} rounded-md flex flex-col items-center justify-center bg-white relative transition-all duration-300`}
                    style={{
                        boxShadow,
                        border: borderEdgeClass
                    }}
                >
                    {/* Fake Chip Surface Texture (Grid/Lines) */}
                    <div className="absolute inset-1 rounded bg-[linear-gradient(90deg,transparent_49%,rgba(0,0,0,0.01)_50%,transparent_51%)] bg-[length:4px_100%] pointer-events-none" />

                    {/* Hardware Pins */}
                    {!isMobile && (
                        <>
                            <ChipsetPinEdge count={node.type === 'taller' ? 8 : 5} position="left" />
                            <ChipsetPinEdge count={node.type === 'taller' ? 8 : 5} position="right" />
                        </>
                    )}

                    <span className="text-slate-900 font-mono text-[10px] md:text-xs tracking-widest uppercase z-10 font-bold">{node.label}</span>

                    {/* Glowing Accent dot indicating power */}
                    <motion.div
                        className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-amber-500"
                        style={{ opacity: glowOpacity, boxShadow: "0 0 8px #F59E0B" }}
                    />

                    {/* Hover Subtext Tooltip */}
                    <div className="absolute top-full mt-3 w-max px-3 py-1 bg-white border border-amber-200 font-mono text-[10px] text-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg rounded">
                        &gt; {node.subtext}
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

const MatrixEnergyNetwork: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [winDims, setWinDims] = useState({ w: 1000, h: 800 });
    const isMobile = winDims.w < 768;

    useEffect(() => {
        const updateDims = () => setWinDims({ w: window.innerWidth, h: window.innerHeight });
        window.addEventListener('resize', updateDims);
        updateDims();
        return () => window.removeEventListener('resize', updateDims);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 70, damping: 20, restDelta: 0.001
    });

    const sectionOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);
    const cpuGlowIntensity = useTransform(smoothProgress, [0.1, 0.2], [0, 1]);

    const centerX = winDims.w / 2;
    const centerY = isMobile ? 350 : 600; // Shifted down to provide more room for header text
    const canvasHeight = isMobile ? 1800 : 1200; // Increased for better pan clearance

    const maxPan = canvasHeight > winDims.h ? -(canvasHeight - winDims.h) : 0;
    const yPan = useTransform(smoothProgress, [0, 1], [0, maxPan]);

    const scrollHeight = isMobile ? "400vh" : "200vh"; // Reduced from 250vh to keep it tight in frame

    return (
        <section ref={sectionRef} className="relative w-full bg-transparent" style={{ height: scrollHeight }}>
            {/* Sticky Frame */}
            <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">

                {/* Section Header */}
                <motion.div
                    className="absolute z-40 text-center px-4 w-full"
                    style={{
                        opacity: useTransform(smoothProgress, [0, 0.05, 0.15, 0.35], [0, 1, 1, 0]),
                        y: useTransform(smoothProgress, [0, 0.2], [40, 0]),
                        top: '8%'
                    }}
                >
                    <p className="text-amber-700 font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] mb-4 font-semibold">Strategic Reach</p>
                    <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 mb-4">
                        The Matrix <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-900">Energy Network.</span>
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
                        A proprietary infrastructure connecting distressed inventory directly to tier-1 national media channels.
                    </p>
                </motion.div>

                {/* Interactive PCB Network Container */}
                <motion.div
                    className="absolute top-0 left-0 w-full pointer-events-auto"
                    style={{ opacity: sectionOpacity, height: canvasHeight, y: yPan }}
                >
                    {/* The Peripheral Chips and SVG PCB Traces */}
                    {nodesData.map((node, i) => (
                        <ChipNode
                            key={node.id}
                            node={node}
                            index={i}
                            totalProgress={smoothProgress}
                            isMobile={isMobile}
                            center={{ x: centerX, y: centerY }}
                        />
                    ))}

                    {/* Central CPU Core */}
                    <div
                        className="absolute z-30 flex items-center justify-center p-4 bg-transparent"
                        style={{
                            left: centerX,
                            top: centerY,
                            transform: "translate(-50%, -50%)"
                        }}
                    >
                        {/* CPU Physical Casing */}
                        <motion.div
                            className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-[32px] md:rounded-[40px] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden bg-white shadow-2xl"
                            style={{
                                border: "1px solid rgba(0,0,0,0.1)",
                                boxShadow: useTransform(cpuGlowIntensity, v => `0 20px 50px rgba(0,0,0,0.08), inset 0 0 40px rgba(245,158,11,${v * 0.1})`)
                            }}
                        >
                            {/* Chip Internals - Grid pattern */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.02)_2px,transparent_2px)] bg-[size:10px_10px] opacity-40" />

                            {/* Central CPU Square */}
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg">
                                    <span className="text-amber-400 font-black text-xl md:text-3xl tracking-tighter">MX</span>
                                </div>
                                <div className="mt-3 flex flex-col">
                                    <span className="text-slate-900 font-mono text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase">Engine Core</span>
                                    <span className="text-amber-700 font-bold text-[7px] md:text-[8px] font-mono animate-pulse">SYSTEM ONLINE</span>
                                </div>
                            </div>

                            {/* Corner Pins visually */}
                            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-slate-200 border border-slate-300" />
                            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-slate-200 border border-slate-300" />
                            <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-slate-200 border border-slate-300" />
                            <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-slate-200 border border-slate-300" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MatrixEnergyNetwork;
