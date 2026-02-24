import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring, useMotionValue, MotionValue } from 'framer-motion';

const nodesArr = [
    {
        title: "Inventory Assessment",
        content: "The brand shares available product inventory. Matrix evaluates category strength, volume, and barter potential across media platforms.",
        buildingProps: { w: 40, h: 120, layers: 1 }
    },
    {
        title: "Media Value Structuring",
        content: "Matrix converts product inventory into structured media value across Print, TV, OTT, Radio, Outdoor and Cinema using strategic partnerships.",
        buildingProps: { w: 50, h: 160, layers: 2 }
    },
    {
        title: "Multi-Platform Deployment",
        content: "Campaigns are executed across national and regional media networks ensuring maximum reach and visibility without direct cash outflow.",
        buildingProps: { w: 80, h: 150, layers: 3, horizontalStrips: true }
    },
    {
        title: "Growth Without Cash Burn",
        content: "Brands increase market visibility, conserve working capital, and improve sales velocity while preserving liquidity.",
        buildingProps: { w: 60, h: 220, layers: 1, maxGlow: true }
    }
];

const AbstractBuilding = ({
    props,
    heightProgress,
    opacityProgress
}: {
    props: { w: number, h: number, layers: number, horizontalStrips?: boolean, maxGlow?: boolean },
    heightProgress: MotionValue<number>,
    opacityProgress: MotionValue<number>
}) => {
    return (
        <motion.div
            className="absolute bottom-0 flex flex-col items-center justify-end"
            style={{
                width: props.w,
                height: props.h,
                opacity: opacityProgress,
            }}
        >
            {/* Base Structure (Grows from bottom) */}
            <motion.div
                className="relative w-full overflow-hidden flex flex-col justify-end"
                style={{
                    height: useTransform(heightProgress, v => `${v * 100}%`),
                    background: "rgba(0,0,0,0.01)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    borderBottom: "none",
                    boxShadow: props.maxGlow
                        ? "inset 0 0 20px rgba(245,158,11,0.2), 0 0 40px rgba(245,158,11,0.1)"
                        : "inset 0 0 10px rgba(245,158,11,0.05), 0 0 20px rgba(245,158,11,0.05)"
                }}
            >
                {/* Internal Glow Fill */}
                <motion.div
                    className="absolute bottom-0 w-full"
                    style={{
                        height: "100%",
                        background: props.maxGlow
                            ? "linear-gradient(0deg, rgba(245,158,11,0.4) 0%, transparent 100%)"
                            : "linear-gradient(0deg, rgba(245,158,11,0.2) 0%, transparent 100%)",
                        opacity: useTransform(heightProgress, [0.5, 1], [0, 1])
                    }}
                />

                {/* Vertical Segment Lines */}
                {props.layers > 1 && (
                    <div className="absolute inset-0 flex justify-evenly pointer-events-none">
                        {Array.from({ length: props.layers - 1 }).map((_, i) => (
                            <div key={i} className="w-[1px] h-full bg-white/10" />
                        ))}
                    </div>
                )}

                {/* Horizontal Light Strips */}
                {props.horizontalStrips && (
                    <div className="absolute inset-0 flex flex-col justify-evenly pointer-events-none">
                        <div className="w-full h-[1px] bg-amber-400/30 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                        <div className="w-full h-[1px] bg-amber-400/30 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                    </div>
                )}

                {/* Top Highlight cap */}
                <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </motion.div>
        </motion.div>
    );
};

const MilestoneNode = ({
    index,
    pos,
    svgDims,
    smoothProgress
}: {
    index: number,
    pos: { x: number, y: number, fraction: number },
    svgDims: { w: number, h: number },
    smoothProgress: MotionValue<number>
}) => {
    const isLeftCard = index % 2 === 0;
    const isMobile = svgDims.w < 768;
    const dist = isMobile ? 30 : 60;

    const F = pos.fraction;

    // Core timings (Node arrives immediately before orb hits exact fraction)
    const scale = useTransform(smoothProgress, [F - 0.08, F], [1, 1.4]);
    const glowOpacity = useTransform(smoothProgress, [F - 0.08, F], [0, 1]);
    const cardOpacity = useTransform(smoothProgress, [F - 0.05, F], [0, 1]);

    // Building timings (Smooth ease effect growing)
    const buildingHeightProgress = useTransform(smoothProgress, [F - 0.04, F + 0.02], [0, 1]);
    const buildingScale = useTransform(smoothProgress, [F - 0.04, F + 0.02], [0.95, 1]);

    // Slide in (-40px / +40px)
    const slideDirection = isLeftCard ? -40 : 40;
    const cardXOffset = useTransform(smoothProgress, [F - 0.05, F], [slideDirection, 0]);

    // Micro Parallax (Local Y offsets mapping the overarching smooth progress around this node's timeline)
    const cardParallaxY = useTransform(smoothProgress, [F - 0.1, F + 0.1], [10, -10]);
    const buildingParallaxY = useTransform(smoothProgress, [F - 0.1, F + 0.1], [5, -5]);

    const backgroundColor = useTransform(glowOpacity, [0, 1], ["#FFFBEB", "#F59E0B"]);
    const boxShadow = useTransform(glowOpacity, (v) => `0 0 ${40 * v}px rgba(245,158,11,${0.6 * v})`);

    // Width logic
    const maxWidth = isLeftCard ? (pos.x - dist - 16) : (svgDims.w - pos.x - dist - 16);
    const finalCardWidth = isMobile ? Math.min(maxWidth, 280) : 420;

    return (
        <React.Fragment>
            {/* Card Connector line */}
            <motion.div
                className={`absolute h-[1px] bg-[rgba(245,158,11,0.3)] z-10 origin-${isLeftCard ? 'right' : 'left'}`}
                style={{
                    top: pos.y,
                    [isLeftCard ? 'right' : 'left']: isLeftCard ? (svgDims.w - pos.x) : pos.x,
                    width: dist,
                    opacity: cardOpacity,
                    scaleX: cardOpacity
                }}
            />

            {/* Building Connector line */}
            <motion.div
                className={`absolute h-[1px] bg-[rgba(245,158,11,0.2)] z-10 origin-${isLeftCard ? 'left' : 'right'} hidden md:block`}
                style={{
                    top: pos.y,
                    [isLeftCard ? 'left' : 'right']: isLeftCard ? pos.x : (svgDims.w - pos.x),
                    width: dist,
                    opacity: cardOpacity,
                    scaleX: cardOpacity
                }}
            />

            {/* Visual Node tightly locked on path */}
            <motion.div
                className="absolute w-[16px] h-[16px] rounded-full border-2 border-amber-500 z-20 origin-center"
                style={{
                    left: pos.x - 8,
                    top: pos.y - 8,
                    scale: scale,
                    backgroundColor: backgroundColor,
                    boxShadow: boxShadow
                }}
            >
                {/* Pulse ring for active nodes */}
                <motion.div
                    className="absolute inset-0 rounded-full border border-amber-500"
                    style={{ opacity: glowOpacity }}
                    animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>

            {/* Architectural Building Structure (Only show above mobile) */}
            <motion.div
                className="absolute z-20 hidden md:flex"
                style={{
                    top: pos.y,
                    [isLeftCard ? 'left' : 'right']: isLeftCard ? (pos.x + dist) : (svgDims.w - pos.x + dist),
                    width: nodesArr[index].buildingProps.w,
                    height: nodesArr[index].buildingProps.h,
                    y: useTransform(buildingParallaxY, v => `calc(-100% + ${v}px)`), // Bottom aligns to the line
                    scale: buildingScale,
                    originY: 1
                }}
            >
                <AbstractBuilding
                    props={nodesArr[index].buildingProps}
                    heightProgress={buildingHeightProgress}
                    opacityProgress={cardOpacity}
                />
            </motion.div>

            {/* Glassmorphism Card (Architectural Structure) */}
            <motion.div
                className={`absolute z-30 flex flex-col justify-center rounded-[20px] p-[24px] md:p-[32px] ${isLeftCard ? 'items-end text-right' : 'items-start text-left'}`}
                style={{
                    top: pos.y,
                    width: finalCardWidth,
                    [isLeftCard ? 'right' : 'left']: isLeftCard ? (svgDims.w - pos.x + dist) : (pos.x + dist),
                    y: useTransform(cardParallaxY, v => `calc(-50% + ${v}px)`), // Center aligns to the line
                    x: cardXOffset,
                    opacity: cardOpacity,
                    background: "rgba(255,255,255,0.95)",
                    border: "1px solid rgba(0,0,0,0.05)",
                    borderTop: "1px solid rgba(245,158,11,0.2)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
                    backdropFilter: "blur(12px)"
                }}
            >
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">{nodesArr[index].title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">{nodesArr[index].content}</p>
            </motion.div>
        </React.Fragment>
    );
};

const MatrixBarterJourney: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const [winDims, setWinDims] = useState({ w: 1000, h: 800 });
    const [pathData, setPathData] = useState("");
    const [nodesPos, setNodesPos] = useState<{ x: number, y: number, fraction: number }[]>([]);
    const [carRotation, setCarRotation] = useState(0);

    const SVG_HEIGHT = 2259;
    const SVG_WIDTH = 1305;
    const PATH_DATA = "M646.725 2.07788C665.125 391.278 402.059 714.911 268.225 828.078C35.9314 1049.7 -90.7748 1642.58 268.225 1395.58C627.225 1148.58 882.226 1395.58 882.226 1395.58C994.893 1431.69 997.551 1585.64 1059.73 1733.33M1059.73 1733.33C1059.73 1733.33 1341.73 1862.58 1237.22 2071.08C1132.72 2279.58 762.725 2260.08 700.725 2013.08C638.725 1766.08 1059.73 1733.33 1059.73 1733.33Z";

    useEffect(() => {
        const updateDims = () => {
            setWinDims({ w: window.innerWidth, h: window.innerHeight });
        };
        window.addEventListener('resize', updateDims);
        updateDims();
        return () => window.removeEventListener('resize', updateDims);
    }, []);

    useEffect(() => {
        setPathData(PATH_DATA);
    }, []);

    useEffect(() => {
        if (pathRef.current && pathData) {
            const len = pathRef.current.getTotalLength();
            if (len > 0) {
                // Adjust fractions for the new path length
                const fractions = [0.15, 0.4, 0.65, 0.9];
                setNodesPos(fractions.map(f => {
                    const pt = pathRef.current!.getPointAtLength(f * len);
                    return { x: pt.x, y: pt.y, fraction: f };
                }));
            }
        }
    }, [pathData]);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 40, damping: 30, restDelta: 0.001
    });

    // Translate the giant SVG UP as the user scrolls DOWN, ensuring the section drawing acts as a controlled camera pan
    const yPan = useTransform(smoothProgress, [0, 1], [0, -(SVG_HEIGHT - winDims.h)]);

    // Title fade out so it gets out of the journey's way
    const titleOpacity = useTransform(smoothProgress, [0, 0.08], [1, 0.1]);
    const titleScale = useTransform(smoothProgress, [0, 0.08], [1, 0.96]);

    // Progression Darkness (subtle vignette overlay gets darker at the bottom)
    const vignetteOpacity = useTransform(smoothProgress, [0, 1], [0, 0.6]);
    // Radial blue glow isolating the curve gets more intense
    const glowIntensity = useTransform(smoothProgress, [0, 1], [0.15, 0.35]);

    const dotX = useMotionValue(646.725);
    const dotY = useMotionValue(2.07788);

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if (pathRef.current && pathData) {
            const len = pathRef.current.getTotalLength();
            if (len > 0) {
                const dist = latest * len;
                const pt = pathRef.current.getPointAtLength(dist);
                dotX.set(pt.x);
                dotY.set(pt.y);

                // Calculate Rotation
                const offset = 2;
                if (dist + offset <= len) {
                    const ptAhead = pathRef.current.getPointAtLength(dist + offset);
                    setCarRotation(Math.atan2(ptAhead.y - pt.y, ptAhead.x - pt.x) * (180 / Math.PI));
                } else if (dist - offset >= 0) {
                    const ptPrev = pathRef.current.getPointAtLength(dist - offset);
                    setCarRotation(Math.atan2(pt.y - ptPrev.y, pt.x - ptPrev.x) * (180 / Math.PI));
                }
            }
        }
    });

    const dotOpacity = useTransform(smoothProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} className="relative w-full h-[800vh] bg-neutral-50">
            {/* Sticky Wrapper - Stays in viewport for the entire 500vh scroll map */}
            <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center">

                {/* Background Texture & Spotlight */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>

                {/* Dynamically intensifying radial glow behind curve */}
                <motion.div
                    className="absolute inset-0 pointer-events-none filter blur-[200px]"
                    style={{
                        background: useTransform(glowIntensity, v => `radial-gradient(ellipse at center, rgba(245,158,11,${v * 0.4}) 0%, transparent 60%)`)
                    }}
                />

                {/* Progression Vignette Darkening */}
                <motion.div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        opacity: vignetteOpacity,
                        background: "radial-gradient(circle, transparent 30%, #000 120%)"
                    }}
                />

                {/* Section Heading */}
                <motion.div
                    className="absolute top-24 md:top-32 z-10 w-full max-w-4xl mx-auto text-center px-4"
                    style={{ opacity: titleOpacity, scale: titleScale, originY: 0 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight font-sans">
                        How Matrix Converts Inventory into <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-900">Media Power</span>
                    </h2>
                    <p className="text-3xl md:text-5xl font-sans font-bold text-slate-900 leading-tight tracking-tight">
                        A single platform to manage your entire supply chain.
                    </p>
                </motion.div>

                <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2"
                    style={{ height: SVG_HEIGHT, width: SVG_WIDTH, y: yPan }}
                >
                    <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1305 2259" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="ropeGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#ef4444" />
                                <stop offset="50%" stopColor="#f87171" />
                                <stop offset="100%" stopColor="#ef4444" />
                            </linearGradient>
                            <filter id="glowBlur" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Layer 1: Base Path (Red & Faint) */}
                        {pathData && (
                            <path
                                d={pathData}
                                stroke="rgba(239, 68, 68, 0.2)"
                                strokeWidth="12"
                                fill="none"
                            />
                        )}

                        {/* Layer 2: Animated Red Line */}
                        {pathData && (
                            <motion.path
                                ref={pathRef}
                                d={pathData}
                                stroke="#ef4444"
                                strokeWidth="8"
                                fill="none"
                                style={{ pathLength: smoothProgress }}
                            />
                        )}

                        {/* Starting Circle */}
                        <circle r="10" cy="2" cx="646" fill="#ef4444" />
                    </svg>

                    {/* Architectural Milestone Cards & Nodes */}
                    {nodesPos.length === 4 && nodesPos.map((pos, i) => (
                        <MilestoneNode
                            key={i}
                            index={i}
                            pos={pos}
                            svgDims={{ w: winDims.w, h: SVG_HEIGHT }}
                            smoothProgress={smoothProgress}
                        />
                    ))}

                    {/* Traveling Car Element */}
                    {pathData && (
                        <motion.div
                            className="absolute z-40 flex items-center justify-center p-4 bg-transparent"
                            style={{
                                left: dotX,
                                top: dotY,
                                x: "-50%",
                                y: "-50%",
                                rotate: carRotation,
                                opacity: dotOpacity
                            }}
                        >
                            <svg width="80" height="80" viewBox="0 0 20 20">
                                <path
                                    d="M 3.02008,-2.00446 A 0.384,0.384 0 0 0 2.99106,-1.85469 L 2.99789,-0.835296 2.98889,-0.837286 A 0.113,0.113 0 0 0 2.87613,-0.723255 L 2.88243,0.358786 A 0.113,0.113 0 0 0 2.99646,0.471542 L 3.00492,0.469969 3.01203,1.63073 A 0.384,0.384 0 0 0 3.39872,2.01296 L 8.65185,1.97994 C 8.80663,1.97929 8.93788,1.88712 8.99825,1.75528 9.02715,1.83055 9.09151,1.91021 9.23511,1.90987 L 12.491,1.88891 12.2534,2.32758 A 0.134,0.134 0 0 0 12.4886,2.45492 L 12.797,1.88816 14.2024,1.87929 C 14.7857,1.87543 15.2515,1.40414 15.2473,0.821764 L 15.2448,0.438872 A 0.113,0.113 0 0 0 15.4372,0.357561 L 15.4309,-0.72448 A 0.113,0.113 0 0 0 15.2373,-0.803744 L 15.2349,-1.18664 C 15.2319,-1.76949 14.7597,-2.23574 14.1774,-2.23146 L 12.5876,-2.22247 12.3653,-2.81052 A 0.133,0.133 0 0 0 12.1927,-2.88767 0.133,0.133 0 0 0 12.1143,-2.71463 L 12.3018,-2.22003 9.25118,-2.20155 C 9.08154,-2.20452 9.00514,-2.13533 8.9706,-2.05654 A 0.382,0.382 45 0 0 8.62474,-2.27078 L 3.37245,-2.23957 A 0.384,0.384 0 0 0 3.01965,-2.00355 Z"
                                    fill="#1a1a1a"
                                    transform="translate(0, 5)"
                                />
                            </svg>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section >
    );
};

export default MatrixBarterJourney;
