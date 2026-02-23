import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

const BASE_RADIUS = 300; // General distance for the nodes

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
    // For a radial layout, going horizontally first then vertically works well for side nodes.
    // Let's use a simple L-shape or mirrored L-shape based on quadrant.
    const midX = startX + (dx * 0.5);
    const midY = startY + (dy * 0.5);

    // If it's pure vertical (top/bottom), go straight
    if (Math.abs(dx) < 10) return `M ${startX} ${startY} L ${endX} ${endY}`;
    // If it's pure horizontal, go straight
    if (Math.abs(dy) < 10) return `M ${startX} ${startY} L ${endX} ${endY}`;

    // Standard PCB style: Outwards horizontally, then vertically to target, then horizontally to connect
    // Let's do: Out horizontally, then vertically, then horizontally into the chip.
    return `M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}`;
};

const ChipsetPinEdge = ({ count, position }: { count: number, position: 'left' | 'right' }) => (
    <div className={`absolute ${position === 'left' ? '-left-1.5' : '-right-1.5'} top-1/2 -translate-y-1/2 flex flex-col justify-between h-[80%] py-1`}>
        {Array.from({ length: count }).map((_, i) => (
            <div key={i} className={`w-[6px] h-[3px] bg-[#475569] shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${position === 'left' ? 'rounded-l-sm' : 'rounded-r-sm'}`} />
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
    const mobileTargetY = center.y + 320 + (index * 160);

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
        v > 0.8 ? "1px solid rgba(59,130,246,0.8)" : "1px solid rgba(255,255,255,0.08)"
    );
    const boxShadow = useTransform(glowOpacity, (v) => `0 20px 40px rgba(0,0,0,0.6), 0 0 ${30 * v}px rgba(59,130,246,${0.5 * v}) inset, 0 0 ${20 * v}px rgba(59,130,246,${0.6 * v})`);

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
        'horizontal': 'w-[140px] h-[60px]',
        'wider': 'w-[160px] h-[70px]',
        'double': 'w-[150px] h-[80px]', // Needs inner div
        'taller': 'w-[110px] h-[100px]',
        'slim': 'w-[140px] h-[45px]',
        'broader': 'w-[170px] h-[65px]'
    };

    return (
        <React.Fragment>
            {/* PCB Circuit Trace */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id={`trace-${node.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#00C2FF" />
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
                <circle cx={center.x} cy={center.y} r="5" fill="#1E293B" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

                {/* Base Faint Trace */}
                <path
                    d={pathD}
                    stroke="rgba(255,255,255,0.05)"
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
                    fill="#0B1220"
                    stroke="#3B82F6"
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
                    className={`${chipSizes[node.type]} rounded-md flex flex-col items-center justify-center bg-gradient-to-br from-[#1E293B] to-[#0B1220] relative`}
                    style={{
                        boxShadow,
                        border: borderEdgeClass
                    }}
                >
                    {/* Fake Chip Surface Texture (Grid/Lines) */}
                    <div className="absolute inset-1 rounded bg-[linear-gradient(90deg,transparent_49%,rgba(255,255,255,0.02)_50%,transparent_51%)] bg-[length:4px_100%] pointer-events-none" />

                    {/* Double Layer visual for 'double' type */}
                    {node.type === 'double' && (
                        <div className="absolute inset-2 border border-blue-500/20 bg-black/20 rounded-sm pointer-events-none" />
                    )}

                    {/* Hardware Pins */}
                    {!isMobile && (
                        <>
                            <ChipsetPinEdge count={node.type === 'taller' ? 8 : 5} position="left" />
                            <ChipsetPinEdge count={node.type === 'taller' ? 8 : 5} position="right" />
                        </>
                    )}

                    <span className="text-white font-mono text-xs md:text-sm tracking-wider uppercase z-10 bg-black/40 px-2 py-0.5 rounded shadow-inner">{node.label}</span>

                    {/* Glowing Accent dot indicating power */}
                    <motion.div
                        className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#00C2FF]"
                        style={{ opacity: glowOpacity, boxShadow: "0 0 8px #00C2FF" }}
                    />

                    {/* Hover Subtext Tooltip - Styled like a system readout */}
                    <div className="absolute top-full mt-3 w-max px-3 py-1 bg-[#020617] border border-[#3B82F6]/30 font-mono text-[10px] text-[#00C2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_4px_12px_rgba(0,194,255,0.1)]">
                        &gt; {node.subtext}
                    </div>
                </motion.div>
            </motion.div>
        </React.Fragment>
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

    // --- Animation Timings ---
    // 0.0 - 0.1: Fade in Section & CPU
    const sectionOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);

    // 0.1 - 0.2: CPU Power Up Sequence
    const cpuGlowIntensity = useTransform(smoothProgress, [0.1, 0.2], [0, 1]);

    // Background Global Progression Ambient Blue
    const bgGlowIntensity = useTransform(smoothProgress, [0, 0.8], [0.02, 0.1]);

    const centerX = winDims.w / 2;
    // On mobile, pin center Y higher to leave room below. On desktop, center it in the massive 900px canvas.
    const centerY = isMobile ? 250 : 450;

    // Create a massive panning canvas height to fit all spread-out nodes and avoid clipping
    const canvasHeight = isMobile ? 1800 : 900;

    // Pan the layout upwards on smaller screens so the large radial map or mobile stack is fully browsable
    const maxPan = canvasHeight > winDims.h ? -(canvasHeight - winDims.h) : 0;
    const yPan = useTransform(smoothProgress, [0, 1], [0, maxPan]);

    // Force massive scroll container heights
    const scrollHeight = isMobile ? "400vh" : "250vh";

    return (
        <section ref={sectionRef} className="relative w-full bg-[#0B1220]" style={{ height: scrollHeight }}>
            {/* Sticky Frame */}
            <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">

                {/* Motherboard Layout: Base Grain + Grid Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>
                <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px]" />

                <motion.div
                    className="absolute inset-0 pointer-events-none filter blur-[200px]"
                    style={{
                        background: useTransform(bgGlowIntensity, v => `radial-gradient(ellipse at center, rgba(59,130,246,${v}) 0%, transparent 70%)`)
                    }}
                />

                {/* Main Heading Content */}
                <motion.div
                    className={`absolute z-30 w-full text-center px-4 ${isMobile ? 'top-16' : 'top-20 md:top-24'}`}
                    style={{ opacity: sectionOpacity, y: yPan }}
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg font-mono">
                        The Matrix <span className="text-[#3B82F6]">Barter Engine</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-sm md:text-xl text-slate-400 font-mono">
                        &gt; centralized_infrastructure_processing
                    </p>
                </motion.div>

                {/* Interactive PCB Network Container */}
                <motion.div
                    className="absolute top-0 left-0 w-full pointer-events-auto"
                    style={{ opacity: sectionOpacity, height: canvasHeight, y: yPan }}
                >
                    {/* The Peripheral Chips and SVG PCB Traces */}
                    {centerY > 0 && nodesData.map((node, i) => (
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
                        className="absolute z-30 flex items-center justify-center"
                        style={{
                            left: centerX,
                            top: centerY,
                            transform: "translate(-50%, -50%)"
                        }}
                    >
                        {/* Shadow Layer for Depth */}
                        <div className="absolute inset-0 bg-black/50 blur-[30px] rounded-[32px] -z-10" />

                        {/* CPU Physical Casing */}
                        <motion.div
                            className="w-[200px] h-[200px] md:w-[320px] md:h-[320px] rounded-[32px] md:rounded-[40px] flex flex-col items-center justify-center text-center p-8 relative overflow-hidden bg-gradient-to-br from-[#111827] to-[#0B1220]"
                            style={{
                                border: "1px solid rgba(255,255,255,0.08)",
                                boxShadow: useTransform(cpuGlowIntensity, v => `inset 0 0 60px rgba(59,130,246,${v * 0.15}), 0 0 50px rgba(59,130,246,${v * 0.3})`)
                            }}
                        >
                            {/* Inner Circuit Pattern (Fake Motherboard traces printed on CPU) */}
                            <div className="absolute inset-4 border border-white/5 rounded-[20px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_100%)] pointer-events-none">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[length:10px_10px]" />
                            </div>

                            {/* Corner Screws */}
                            <div className="absolute top-4 left-4 w-2 h-2 rounded-full border border-gray-600 bg-gray-800" />
                            <div className="absolute top-4 right-4 w-2 h-2 rounded-full border border-gray-600 bg-gray-800" />
                            <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full border border-gray-600 bg-gray-800" />
                            <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full border border-gray-600 bg-gray-800" />

                            {/* Corner Notches (Clip Paths via divs to simulate chamfering if needed, but styling internal borders is cleaner) */}
                            <div className="absolute inset-2 border-[0.5px] border-blue-500/20 rounded-[28px] pointer-events-none" />

                            {/* Light surface sweep animation */}
                            <motion.div
                                className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-30deg]"
                                animate={{ left: ["-100%", "200%"] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Internal Processor Data Core */}
                            <motion.div
                                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] bg-black/60 rounded-xl flex flex-col items-center justify-center border border-white/10 relative z-10"
                                style={{
                                    border: useTransform(cpuGlowIntensity, v => `1px solid rgba(59,130,246,${v * 0.5})`)
                                }}
                            >
                                <h3 className="text-xl md:text-3xl font-bold text-white leading-tight font-mono tracking-wide">
                                    MATRIX
                                    <br />
                                    <span className="text-sm md:text-lg text-gray-400 font-sans tracking-normal font-medium">BARTER ENGINE</span>
                                    <div className="mt-2 w-full h-[2px] bg-[#3B82F6] shadow-[0_0_10px_#3B82F6]" />
                                </h3>
                            </motion.div>

                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MatrixEnergyNetwork;
