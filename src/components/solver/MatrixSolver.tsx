import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Trash2, Shuffle, Info, Calculator, Eye, EyeOff } from 'lucide-react';
import MatrixInput from './MatrixInput';
import ResultDisplay from './ResultDisplay';
import DigitalRain from './DigitalRain';

const MatrixSolver: React.FC = () => {
    // Matrix A State
    const [rowsA, setRowsA] = useState(3);
    const [colsA, setColsA] = useState(3);
    const [matrixA, setMatrixA] = useState<string[][]>(Array(3).fill(null).map(() => Array(3).fill('')));

    // Matrix B State
    const [rowsB, setRowsB] = useState(3);
    const [colsB, setColsB] = useState(3);
    const [matrixB, setMatrixB] = useState<string[][]>(Array(3).fill(null).map(() => Array(3).fill('')));

    // UI/Result State
    const [result, setResult] = useState<(number | string)[][] | null>(null);
    const [steps, setSteps] = useState<string[][] | null>(null);
    const [showSteps, setShowSteps] = useState(false);
    const [calculationError, setCalculationError] = useState<string | null>(null);

    // Highlight state for steps
    const [highlightA, setHighlightA] = useState<number | null>(null);
    const [highlightB, setHighlightB] = useState<number | null>(null);

    // Helpers
    const parseVal = (str: string): number => {
        if (!str) return 0;
        if (str.includes('/')) {
            const [num, den] = str.split('/').map(s => parseFloat(s.trim()));
            if (!isNaN(num) && !isNaN(den) && den !== 0) return num / den;
        }
        const val = parseFloat(str);
        return isNaN(val) ? 0 : val;
    };

    const formatVal = (val: number): string | number => {
        if (isNaN(val)) return 'Error';
        if (Number.isInteger(val)) return val;
        return Number(val.toFixed(2));
    };

    // Resizing Logic
    const resizeMatrix = (
        setRows: React.Dispatch<React.SetStateAction<number>>,
        setCols: React.Dispatch<React.SetStateAction<number>>,
        setMatrix: React.Dispatch<React.SetStateAction<string[][]>>,
        dr: number,
        dc: number,
        currentRows: number,
        currentCols: number
    ) => {
        const newRows = Math.max(1, Math.min(6, currentRows + dr));
        const newCols = Math.max(1, Math.min(6, currentCols + dc));

        setRows(newRows);
        setCols(newCols);

        setMatrix(prev => {
            const newMatrix = Array(newRows).fill(null).map((_, r) => {
                const row = Array(newCols).fill('');
                for (let c = 0; c < newCols; c++) {
                    if (prev[r] && prev[r][c] !== undefined) {
                        row[c] = prev[r][c];
                    }
                }
                return row;
            });
            return newMatrix;
        });
    };

    // Operations
    const handleClear = () => {
        setMatrixA(Array(rowsA).fill(null).map(() => Array(colsA).fill('')));
        setMatrixB(Array(rowsB).fill(null).map(() => Array(colsB).fill('')));
        setResult(null);
        setSteps(null);
        setHighlightA(null);
        setHighlightB(null);
    };

    const handleRandomize = () => {
        const getRandom = () => (Math.floor(Math.random() * 21) - 10).toString();
        setMatrixA(Array(rowsA).fill(null).map(() => Array(colsA).fill('').map(() => getRandom())));
        setMatrixB(Array(rowsB).fill(null).map(() => Array(colsB).fill('').map(() => getRandom())));
    };

    const calculate = useCallback(() => {
        if (colsA !== rowsB) {
            setCalculationError(`Matrix A columns (${colsA}) must equal Matrix B rows (${rowsB}) for multiplication.`);
            setResult(null);
            setSteps(null);
            return;
        }

        setCalculationError(null);
        const res: (number | string)[][] = [];
        const stp: string[][] = [];

        for (let r = 0; r < rowsA; r++) {
            res[r] = [];
            stp[r] = [];
            for (let c = 0; c < colsB; c++) {
                let sum = 0;
                const pathParts: string[] = [];
                for (let k = 0; k < colsA; k++) {
                    const a = parseVal(matrixA[r][k]);
                    const b = parseVal(matrixB[k][c]);
                    sum += a * b;
                    pathParts.push(`(${matrixA[r][k] || '0'}×${matrixB[k][c] || '0'})`);
                }
                res[r][c] = formatVal(sum);
                stp[r][c] = pathParts.join(' + ');
            }
        }
        setResult(res);
        setSteps(stp);
    }, [matrixA, matrixB, rowsA, colsA, rowsB, colsB]);

    // Auto-calculate
    useEffect(() => {
        calculate();
    }, [calculate]);

    const handleStepHighlight = (r: number, c: number) => {
        setHighlightA(r);
        setHighlightB(c);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-emerald-500/30 overflow-x-hidden pt-20 pb-20 relative">
            <DigitalRain />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Container */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-2"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em]">Operational Unit</span>
                            <div className="h-px w-12 bg-emerald-500/30" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                            Matrix <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Solver</span>
                        </h1>
                        <p className="text-slate-400 font-medium max-w-sm mt-4 leading-relaxed">
                            Advanced linear algebra tool with dynamic flow visualization and dot-product arithmetic tracing.
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap items-center gap-4">
                        <button
                            onClick={handleClear}
                            className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-white/10 rounded-2xl hover:bg-slate-800 hover:border-red-500/50 hover:text-red-400 transition-all font-bold text-xs uppercase tracking-widest"
                        >
                            <Trash2 size={16} /> Clear All
                        </button>
                        <button
                            onClick={handleRandomize}
                            className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-white/10 rounded-2xl hover:bg-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-all font-bold text-xs uppercase tracking-widest"
                        >
                            <Shuffle size={16} /> Randomize
                        </button>
                        <button
                            onClick={() => setShowSteps(!showSteps)}
                            className={`flex items-center gap-2 px-6 py-3 border rounded-2xl transition-all font-bold text-xs uppercase tracking-widest ${showSteps ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'bg-slate-900 border-white/10 hover:bg-slate-800 text-white'}`}
                        >
                            {showSteps ? <EyeOff size={16} /> : <Eye size={16} />}
                            {showSteps ? 'Hide Steps' : 'Show Steps'}
                        </button>
                    </div>
                </div>

                {/* Interaction Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

                    {/* Matrix A Column */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-mono uppercase text-slate-500">Rows</span>
                                    <div className="flex items-center gap-2 bg-slate-900 rounded-lg p-1 border border-white/5">
                                        <button onClick={() => resizeMatrix(setRowsA, setColsA, setMatrixA, -1, 0, rowsA, colsA)} className="p-1 hover:bg-white/5 rounded text-slate-400"><Minus size={14} /></button>
                                        <span className="w-6 text-center text-sm font-bold">{rowsA}</span>
                                        <button onClick={() => resizeMatrix(setRowsA, setColsA, setMatrixA, 1, 0, rowsA, colsA)} className="p-1 hover:bg-white/5 rounded text-emerald-500"><Plus size={14} /></button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-mono uppercase text-slate-500">Cols</span>
                                    <div className="flex items-center gap-2 bg-slate-900 rounded-lg p-1 border border-white/5">
                                        <button onClick={() => resizeMatrix(setRowsA, setColsA, setMatrixA, 0, -1, rowsA, colsA)} className="p-1 hover:bg-white/5 rounded text-slate-400"><Minus size={14} /></button>
                                        <span className="w-6 text-center text-sm font-bold">{colsA}</span>
                                        <button onClick={() => resizeMatrix(setRowsA, setColsA, setMatrixA, 0, 1, rowsA, colsA)} className="p-1 hover:bg-white/5 rounded text-emerald-500"><Plus size={14} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MatrixInput
                            name="A"
                            label="Matrix A"
                            matrix={matrixA}
                            rows={rowsA}
                            cols={colsA}
                            updateCell={(r, c, v) => setMatrixA(m => {
                                const next = [...m.map(row => [...row])];
                                next[r][c] = v;
                                return next;
                            })}
                            highlightedRow={highlightA}
                        />
                    </div>

                    {/* Matrix B Column */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-mono uppercase text-slate-500">Rows</span>
                                    <div className="flex items-center gap-2 bg-slate-900 rounded-lg p-1 border border-white/5 transition-all">
                                        <button onClick={() => resizeMatrix(setRowsB, setColsB, setMatrixB, -1, 0, rowsB, colsB)} className="p-1 hover:bg-white/5 rounded text-slate-400"><Minus size={14} /></button>
                                        <span className="w-6 text-center text-sm font-bold">{rowsB}</span>
                                        <button onClick={() => resizeMatrix(setRowsB, setColsB, setMatrixB, 1, 0, rowsB, colsB)}
                                            className={`p-1 hover:bg-white/5 rounded ${rowsB !== colsA ? 'text-red-500 animate-pulse' : 'text-emerald-500'}`}
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-mono uppercase text-slate-500">Cols</span>
                                    <div className="flex items-center gap-2 bg-slate-900 rounded-lg p-1 border border-white/5">
                                        <button onClick={() => resizeMatrix(setRowsB, setColsB, setMatrixB, 0, -1, rowsB, colsB)} className="p-1 hover:bg-white/5 rounded text-slate-400"><Minus size={14} /></button>
                                        <span className="w-6 text-center text-sm font-bold">{colsB}</span>
                                        <button onClick={() => resizeMatrix(setRowsB, setColsB, setMatrixB, 0, 1, rowsB, colsB)} className="p-1 hover:bg-white/5 rounded text-emerald-500"><Plus size={14} /></button>
                                    </div>
                                </div>
                            </div>

                            {colsA !== rowsB && (
                                <motion.div
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex items-center gap-2 text-red-500 text-[10px] font-bold uppercase p-2 px-3 bg-red-500/10 border border-red-500/20 rounded-lg"
                                >
                                    <Info size={12} /> Dimension Mismatch
                                </motion.div>
                            )}
                        </div>
                        <MatrixInput
                            name="B"
                            label="Matrix B"
                            matrix={matrixB}
                            rows={rowsB}
                            cols={colsB}
                            updateCell={(r, c, v) => setMatrixB(m => {
                                const next = [...m.map(row => [...row])];
                                next[r][c] = v;
                                return next;
                            })}
                            highlightedCol={highlightB}
                        />
                    </div>
                </div>

                {/* Result Section */}
                <div className="mt-20">
                    <ResultDisplay
                        result={result}
                        steps={steps}
                        showSteps={showSteps}
                        calculationError={calculationError}
                        onHighlight={handleStepHighlight}
                    />
                </div>

                {/* Background Symbolism */}
                <div className="fixed bottom-10 right-10 flex flex-col items-center gap-4 opacity-10 select-none pointer-events-none -z-10">
                    <Calculator size={300} strokeWidth={0.5} />
                    <span className="text-8xl font-black">SOLVE</span>
                </div>
            </div>
        </div>
    );
};

export default MatrixSolver;
