import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface IndustryCardProps {
    id: string;
    title: string;
    description: string;
    barterIncludes: string[];
    mediaUtilized: string[];
    isVisible: boolean;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
    id,
    title,
    description,
    barterIncludes,
    mediaUtilized,
    isVisible
}) => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.95,
                y: isVisible ? 0 : 10,
                pointerEvents: isVisible ? 'auto' : 'none'
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute z-[100] w-[280px] sm:w-[320px] p-6 rounded-2xl bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200"
            style={{
                top: '-20px',
                left: '50%',
                transform: 'translate(-50%, -100%)'
            }}
        >
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">{title}</h3>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {description}
                </p>

                <div className="space-y-3">
                    <div>
                        <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1">Barter Includes</h4>
                        <div className="flex flex-wrap gap-1.5">
                            {barterIncludes.map((item, idx) => (
                                <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1">Media Utilized</h4>
                        <div className="flex flex-wrap gap-1.5">
                            {mediaUtilized.map((item, idx) => (
                                <span key={idx} className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 text-[10px] font-bold">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => navigate(`/industry/${id}`)}
                    className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-[0.1em] hover:bg-slate-800 transition-colors group"
                >
                    Learn More
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
            </div>

            {/* Pointer arrow down */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[50%] w-4 h-4 bg-white/95 rotate-45 border-r border-b border-slate-200" />
        </motion.div>
    );
};

export default IndustryCard;
