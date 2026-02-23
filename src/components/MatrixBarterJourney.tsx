import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring, useMotionValue, MotionValue } from 'framer-motion';

const nodesArr = [
    {
        title: "Step 1: Brand Offers Products",
        content: "Brands unlock the value of their products and unsold inventory, using them as currency to fund large-scale advertising campaigns without direct cash outflow.",
        buildingProps: { w: 40, h: 120, layers: 1 }
    },
    {
        title: "Step 2: Media Matchmaking",
        content: "We evaluate the inventory and strategically match it with premium media placements across our extensive network of Print, TV, OTT, Outdoor, and Radio platforms.",
        buildingProps: { w: 50, h: 160, layers: 2 }
    },
    {
        title: "Step 3: Nationwide Advertising",
        content: "The brand receives high-impact, nationwide advertising campaigns that drive visibility, engagement, and growth—all funded through structured media barter.",
        buildingProps: { w: 80, h: 150, layers: 3, horizontalStrips: true, maxGlow: true }
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
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderBottom: "none",
                    boxShadow: props.maxGlow
                        ? "inset 0 0 20px rgba(59,130,246,0.2), 0 0 40px rgba(59,130,246,0.4)"
                        : "inset 0 0 10px rgba(59,130,246,0.1), 0 0 20px rgba(59,130,246,0.15)"
                }}
            >
                {/* Internal Glow Fill */}
                <motion.div
                    className="absolute bottom-0 w-full"
                    style={{
                        height: "100%",
                        background: props.maxGlow
                            ? "linear-gradient(0deg, rgba(59,130,246,0.6) 0%, transparent 100%)"
                            : "linear-gradient(0deg, rgba(59,130,246,0.3) 0%, transparent 100%)",
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
                        <div className="w-full h-[1px] bg-blue-400/30 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                        <div className="w-full h-[1px] bg-blue-400/30 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
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

    const backgroundColor = useTransform(glowOpacity, [0, 1], ["#1E293B", "#3B82F6"]);
    const boxShadow = useTransform(glowOpacity, (v) => `0 0 ${40 * v}px rgba(59,130,246,${0.8 * v})`);

    // Width logic
    const maxWidth = isLeftCard ? (pos.x - dist - 16) : (svgDims.w - pos.x - dist - 16);
    const finalCardWidth = isMobile ? Math.min(maxWidth, 280) : 420;

    return (
        <React.Fragment>
            {/* Card Connector line */}
            <motion.div
                className={`absolute h-[1px] bg-[rgba(59,130,246,0.4)] z-10 origin-${isLeftCard ? 'right' : 'left'}`}
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
                className={`absolute h-[1px] bg-[rgba(59,130,246,0.3)] z-10 origin-${isLeftCard ? 'left' : 'right'} hidden md:block`}
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
                className="absolute w-[16px] h-[16px] rounded-full border-2 border-[#3B82F6] z-20 origin-center"
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
                    className="absolute inset-0 rounded-full border border-[#3B82F6]"
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
                    background: "linear-gradient(180deg, rgba(20,33,61,0.6) 0%, rgba(10,18,30,0.8) 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderTop: "1px solid rgba(255,255,255,0.3)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                    backdropFilter: "blur(12px)"
                }}
            >
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-wide">{nodesArr[index].title}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{nodesArr[index].content}</p>
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

    const SVG_HEIGHT = 3500; // Allows ~700px spacing across 4 nodes

    useEffect(() => {
        const updateDims = () => {
            setWinDims({ w: window.innerWidth, h: window.innerHeight });
        };
        window.addEventListener('resize', updateDims);
        updateDims();
        return () => window.removeEventListener('resize', updateDims);
    }, []);

    useEffect(() => {
        const { w } = winDims;
        if (w === 0) return;

        const mx = w / 2;
        const startY = 400; // Leaving room at the top for the title
        const endY = SVG_HEIGHT - 600; // Ending well before the bottom of container
        const rangeY = endY - startY;
        const gap = rangeY / 3;
        const dx = Math.min(w * 0.28, 280); // Sweeping curve limits

        const d = `
            M ${mx} ${startY}
            C ${mx + dx} ${startY + gap * 0.25}, ${mx + dx} ${startY + gap * 0.75}, ${mx} ${startY + gap}
            C ${mx - dx} ${startY + gap * 1.25}, ${mx - dx} ${startY + gap * 1.75}, ${mx} ${startY + gap * 2}
            C ${mx + dx} ${startY + gap * 2.25}, ${mx + dx} ${startY + gap * 2.75}, ${mx} ${endY}
        `;
        setPathData(d);
    }, [winDims]);

    useEffect(() => {
        if (pathRef.current && pathData) {
            const len = pathRef.current.getTotalLength();
            if (len > 0) {
                // Strategic placements along the curve 
                const fractions = [0.15, 0.50, 0.85];
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
        stiffness: 80, damping: 25, restDelta: 0.001
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

    const dotX = useMotionValue(winDims.w / 2);
    const dotY = useMotionValue(400);

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if (pathRef.current && pathData) {
            const len = pathRef.current.getTotalLength();
            if (len > 0) {
                const pt = pathRef.current.getPointAtLength(latest * len);
                dotX.set(pt.x);
                dotY.set(pt.y);
            }
        }
    });

    const dotTransformX = useTransform(dotX, v => v - 4); // anchor 8px dot center
    const dotTransformY = useTransform(dotY, v => v - 4);
    const dotOpacity = useTransform(smoothProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} className="relative w-full h-[500vh] bg-[#0C111B]">
            {/* Sticky Wrapper - Stays in viewport for the entire 500vh scroll map */}
            <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center">

                {/* Background Texture & Spotlight */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>

                {/* Dynamically intensifying radial glow behind curve */}
                <motion.div
                    className="absolute inset-0 pointer-events-none filter blur-[200px]"
                    style={{
                        background: useTransform(glowIntensity, v => `radial-gradient(ellipse at center, rgba(59,130,246,${v}) 0%, transparent 60%)`)
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
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
                        How Matrix Converts Inventory into <span className="text-[#3B82F6]">Media Power</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400">
                        A structured barter framework built for scale.
                    </p>
                </motion.div>

                {/* Panning Container for the 3500px SVG and Nodes */}
                <motion.div
                    className="absolute top-0 left-0 w-full"
                    style={{ height: SVG_HEIGHT, y: yPan }}
                >
                    <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="ropeGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="50%" stopColor="#00C2FF" />
                                <stop offset="100%" stopColor="#3B82F6" />
                                {/* Animated shift giving traveling energy effect */}
                                <animateTransform
                                    attributeName="gradientTransform"
                                    type="translate"
                                    values="0 -1; 0 1"
                                    dur="4s"
                                    repeatCount="indefinite"
                                />
                            </linearGradient>
                            <filter id="glowBlur" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Layer 1: Base Rope (Blurry & Faint) */}
                        {pathData && (
                            <path
                                d={pathData}
                                stroke="rgba(59,130,246,0.25)"
                                strokeWidth="6"
                                fill="none"
                                filter="url(#glowBlur)"
                            />
                        )}

                        {/* Layer 2: Animated Energy Line (Sharp, Gradient, Draws on Scroll) */}
                        {pathData && (
                            <motion.path
                                ref={pathRef}
                                d={pathData}
                                stroke="url(#ropeGrad)"
                                strokeWidth="3"
                                fill="none"
                                style={{ pathLength: smoothProgress }}
                            />
                        )}
                    </svg>

                    {/* Architectural Milestone Cards & Nodes */}
                    {nodesPos.length === 3 && nodesPos.map((pos, i) => (
                        <MilestoneNode
                            key={i}
                            index={i}
                            pos={pos}
                            svgDims={{ w: winDims.w, h: SVG_HEIGHT }}
                            smoothProgress={smoothProgress}
                        />
                    ))}

                    {/* Traveling Energy Orb Tracking the Tip */}
                    {pathData && (
                        <motion.div
                            className="absolute w-[8px] h-[8px] bg-[#00C2FF] rounded-full z-40"
                            style={{
                                boxShadow: "0 0 30px 8px rgba(0,194,255,0.7)",
                                x: dotTransformX,
                                y: dotTransformY,
                                opacity: dotOpacity
                            }}
                        />
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default MatrixBarterJourney;
