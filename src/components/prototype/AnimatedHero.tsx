import { motion } from 'framer-motion';

const AnimatedHero = () => {
    return (
        <div className="relative w-full max-w-2xl mx-auto h-[400px] flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full" />

            <svg viewBox="0 0 800 600" className="w-full h-full overflow-visible z-10">
                <defs>
                    <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
                        <stop offset="100%" stopColor="#d97706" stopOpacity="0.2" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Connections / Edges */}
                <motion.path
                    d="M 400 300 L 200 150 M 400 300 L 600 150 M 400 300 L 250 450 M 400 300 L 550 450 M 200 150 L 250 450 M 600 150 L 550 450 M 200 150 L 400 100 M 600 150 L 400 100"
                    stroke="url(#glowLine)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                />

                {/* Nodes / Vertices */}
                {[
                    { cx: 400, cy: 300, r: 12, delay: 0 },   // Center
                    { cx: 200, cy: 150, r: 8, delay: 0.2 },  // Top Left
                    { cx: 600, cy: 150, r: 8, delay: 0.4 },  // Top Right
                    { cx: 250, cy: 450, r: 6, delay: 0.6 },  // Bottom Left
                    { cx: 550, cy: 450, r: 6, delay: 0.8 },  // Bottom Right
                    { cx: 400, cy: 100, r: 5, delay: 1.0 },  // Top Center
                ].map((node, i) => (
                    <motion.circle
                        key={i}
                        cx={node.cx}
                        cy={node.cy}
                        r={node.r}
                        fill="#f59e0b"
                        filter="url(#glow)"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            delay: node.delay
                        }}
                    />
                ))}

                {/* Floating Data Packets */}
                <motion.circle
                    r="4"
                    fill="#fff"
                    filter="url(#glow)"
                    initial={{ offsetDistance: "0%" }}
                    animate={{ offsetDistance: "100%" }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{
                        offsetPath: "path('M 400 300 L 200 150 L 400 100 L 600 150 Z')"
                    }}
                />
                <motion.circle
                    r="3"
                    fill="#fbbf24"
                    filter="url(#glow)"
                    initial={{ offsetDistance: "0%" }}
                    animate={{ offsetDistance: "100%" }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 1 }}
                    style={{
                        offsetPath: "path('M 400 300 L 250 450 L 550 450 Z')"
                    }}
                />
            </svg>
        </div>
    );
};

export default AnimatedHero;
