import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MatrixDigitalRain: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none select-none">
            <div className="flex justify-around w-full h-full text-emerald-500 font-mono text-xs md:text-sm">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: -500 }}
                        animate={{ y: 1500 }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                        className="writing-mode-vertical"
                    >
                        {Array.from({ length: 40 }).map((_, j) => (
                            <span key={j} className="block mb-2">
                                {Math.random() > 0.5 ? '0' : '1'}
                            </span>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative px-6 overflow-hidden">
            <MatrixDigitalRain />

            {/* Ambient amber glow in background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(245,158,11,0.05)_0%,transparent_70%)] blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-8xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 leading-none mb-6">
                        404
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter">
                        You've taken the wrong pill...
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl font-medium max-w-lg mx-auto leading-relaxed">
                        The URL you're looking for doesn't exist in this version of the Matrix. Wake up and choose your path.
                    </p>
                </motion.div>

                <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
                    {/* Red Pill - Reality / Home */}
                    <div className="flex flex-col items-center gap-4">
                        <Link to="/" className="group relative">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-16 h-40 rounded-full bg-red-600 shadow-[0_0_40px_rgba(220,38,38,0.5)] border-2 border-red-400/50 flex flex-col items-center justify-center cursor-pointer transition-shadow hover:shadow-[0_0_60px_rgba(220,38,38,0.8)]"
                            >
                                <div className="w-[1px] h-full bg-white/20 absolute left-1/2" />
                            </motion.div>
                        </Link>
                        <span className="text-red-500 font-mono text-xs font-black tracking-widest uppercase">Return Home</span>
                    </div>

                    <div className="hidden sm:block text-slate-700 font-black text-2xl">OR</div>

                    {/* Blue Pill - Simulation / Stay (Just a link back or a refresh) */}
                    <div className="flex flex-col items-center gap-4">
                        <button
                            onClick={() => window.location.reload()}
                            className="group relative"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: -10 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-16 h-40 rounded-full bg-blue-600 shadow-[0_0_40px_rgba(37,99,235,0.5)] border-2 border-blue-400/50 flex flex-col items-center justify-center cursor-pointer transition-shadow hover:shadow-[0_0_60px_rgba(37,99,235,0.8)]"
                            >
                                <div className="w-[1px] h-full bg-white/20 absolute left-1/2" />
                            </motion.div>
                        </button>
                        <span className="text-blue-500 font-mono text-xs font-black tracking-widest uppercase">Retry Path</span>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-20"
                >
                    <Link to="/" className="text-amber-500 hover:text-amber-400 transition-colors font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2">
                        ← Exit the void
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
