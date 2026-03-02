import React from 'react';
import { motion } from 'framer-motion';

interface MatrixInputProps {
    name: string;
    matrix: string[][];
    updateCell: (row: number, col: number, val: string) => void;
    label: string;
    rows: number;
    cols: number;
    highlightedRow?: number | null;
    highlightedCol?: number | null;
}

const MatrixInput: React.FC<MatrixInputProps> = ({
    name, matrix, updateCell, label, rows, cols, highlightedRow, highlightedCol
}) => {

    const handleKeyDown = (e: React.KeyboardEvent, row: number, col: number) => {
        const { key } = e;
        let nextRow = row;
        let nextCol = col;

        if (key === 'ArrowUp') nextRow--;
        if (key === 'ArrowDown') nextRow++;
        if (key === 'ArrowLeft') nextCol--;
        if (key === 'ArrowRight') nextCol++;

        const nextInput = document.querySelector(
            `input[data-matrix="${name}"][data-row="${nextRow}"][data-col="${nextCol}"]`
        ) as HTMLInputElement;

        if (nextInput) {
            e.preventDefault();
            nextInput.focus();
            nextInput.select();
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-xl font-black text-white/90 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-6 bg-emerald-500 rounded-sm" />
                {label} ({rows}x{cols})
            </h3>

            <div
                className="inline-grid gap-2 p-4 bg-slate-900/50 border border-emerald-500/20 rounded-xl backdrop-blur-sm relative overflow-hidden"
                style={{
                    gridTemplateColumns: `repeat(${cols}, minmax(60px, 1fr))`,
                    gridTemplateRows: `repeat(${rows}, minmax(40px, 1fr))`
                }}
            >
                {/* Glow effect for highlighted row/col */}
                {highlightedRow !== undefined && highlightedRow !== null && (
                    <motion.div
                        layoutId={`${name}-row-highlight`}
                        className="absolute left-0 right-0 bg-emerald-500/10 border-y border-emerald-500/30 pointer-events-none z-0"
                        style={{
                            top: `${highlightedRow * (Math.max(40, 40) + 8) + 16}px`,
                            height: `40px` // simplified estimate, but better to use layout
                        }}
                    />
                )}

                {matrix.map((rowArr, r) => (
                    rowArr.map((cellVal, c) => {
                        const isHighlighted = (r === highlightedRow) || (c === highlightedCol);
                        return (
                            <input
                                key={`${name}-${r}-${c}`}
                                type="text"
                                value={cellVal}
                                onChange={(e) => updateCell(r, c, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, r, c)}
                                data-matrix={name}
                                data-row={r}
                                data-col={c}
                                className={`w-full h-10 bg-slate-800 border ${isHighlighted ? 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'border-white/10 hover:border-emerald-500/50'} text-white text-center rounded-md font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all z-10`}
                                placeholder="0"
                            />
                        );
                    })
                ))}
            </div>
        </div>
    );
};

export default MatrixInput;
