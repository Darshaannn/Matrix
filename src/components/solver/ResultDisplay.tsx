import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResultDisplayProps {
    result: (number | string)[][] | null;
    steps: string[][] | null;
    showSteps: boolean;
    onHighlight: (row: number, col: number) => void;
    calculationError: string | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
    result, steps, showSteps, onHighlight, calculationError
}) => {

    if (calculationError) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-red-950/20 border-2 border-dashed border-red-500/30 rounded-3xl text-center"
            >
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                    <span className="text-red-500 text-3xl font-bold">!</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 uppercase">Calculation Forbidden</h3>
                <p className="text-red-400 font-medium max-w-sm mx-auto">{calculationError}</p>
                <div className="mt-4 text-[10px] font-mono text-red-400 opacity-50 uppercase tracking-widest whitespace-nowrap">
                    n × m &bull; m × p rule violated
                </div>
            </motion.div>
        );
    }

    if (!result) return (
        <div className="p-16 border-2 border-dashed border-emerald-500/10 rounded-3xl flex flex-col items-center justify-center text-slate-700 bg-emerald-500/5">
            <span className="text-4xl opacity-20 mb-4">∑</span>
            <p className="font-mono text-sm tracking-widest uppercase">Result Matrix Awaiting Data</p>
        </div>
    );

    const rows = result.length;
    const cols = result[0].length;

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-end">
                <h3 className="text-2xl font-black text-white/90 uppercase tracking-widest flex items-center gap-3">
                    <span className="w-3 h-8 bg-emerald-500 rounded-sm" />
                    Product Matrix C
                </h3>
                <div className="text-[10px] font-mono text-emerald-500/40 uppercase tracking-widest">
                    Dimension: {rows} × {cols}
                </div>
            </div>

            <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Cinematic ease
                className="overflow-x-auto overflow-y-hidden pb-4 custom-scrollbar"
            >
                <div
                    className="inline-grid gap-3 p-6 bg-slate-900/60 border border-emerald-500/40 rounded-3xl backdrop-blur-md shadow-[0_0_50px_rgba(16,185,129,0.1)]"
                    style={{
                        gridTemplateColumns: `repeat(${cols}, minmax(80px, 1fr))`,
                    }}
                >
                    {result.map((row, r) => (
                        row.map((val, c) => (
                            <div key={`res-${r}-${c}`} className="relative group/cell">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => showSteps && onHighlight(r, c)}
                                    className={`w-full h-14 flex items-center justify-center rounded-xl bg-slate-800 border border-emerald-500/30 text-emerald-400 font-mono text-lg font-bold shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all cursor-pointer ${showSteps ? 'hover:border-emerald-500 hover:ring-2 hover:ring-emerald-500/50' : ''}`}
                                >
                                    {val}
                                </motion.button>

                                {showSteps && steps && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-4 px-3 py-2 bg-emerald-500 text-slate-950 font-bold text-xs rounded-lg opacity-0 group-hover/cell:opacity-100 transition-all pointer-events-none z-50 whitespace-nowrap shadow-xl">
                                        <div className="relative">
                                            {steps[r][c]}
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-500 rotate-45" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    ))}
                </div>
            </motion.div>

            <AnimatePresence>
                {showSteps && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl"
                    >
                        <p className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <span className="animate-pulse w-2 h-2 rounded-full bg-emerald-500" />
                            Arithmetic Flow (Show Steps Active)
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Click individual result cells above to isolate the <span className="text-white italic">dot product</span> calculation. Matrix A rows and Matrix B columns will intelligently highlight their relationship.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ResultDisplay;
