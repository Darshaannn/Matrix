import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import './AboutSection.css';

interface ValueProp {
    title: string;
    description: string;
    icon: LucideIcon;
}

const valueProps: ValueProp[] = [
    {
        title: "Strategic Valuation",
        description: "Scientific appraisal of your inventory against real-time media market rates.",
        icon: ShieldCheck,
    },
    {
        title: "Velocity of Execution",
        description: "Fast-tracked media acquisition to ensure your brand goes live when it matters most.",
        icon: Zap,
    },
    {
        title: "Extended Reach",
        description: "Access to the widest media network in India across all traditional and digital touchpoints.",
        icon: Globe,
    }
];

const ValueCard: React.FC<{ prop: ValueProp; index: number }> = ({ prop, index }) => {
    const Icon = prop.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="value-card-container noselect"
        >
            <div className="value-card-canvas">
                {[...Array(25)].map((_, i) => (
                    <div key={i} className={`tracker tr-${i + 1}`}></div>
                ))}
                <div id="value-card">
                    <div className="blob"></div>
                    <div className="card-inner-bg">
                        <div className="value-card-icon">
                            <Icon size={32} />
                        </div>
                        <h4 className="value-card-title">{prop.title}</h4>
                        <p className="value-card-description">{prop.description}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="bg-[#FFFBEB] py-24 md:py-32 px-4 relative overflow-hidden">
            {/* Ambient background effect - Simplified */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(245,158,11,0.02)_0%,transparent_50%)]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
                    {/* Left side: Story & Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <motion.div
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 mb-6"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-amber-500 uppercase">About Matrix</span>
                            </motion.div>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-8">
                                Our Story & <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Company Mission</span>
                            </h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                                <p>
                                    Matrix was founded with a singular vision: to revolutionize how brands perceive and utilize their business assets. What started as a niche media solution has evolved into India's premier media barter powerhouse, structuring deals for the nation's largest conglomerates.
                                </p>
                                <p>
                                    Our mission is to empower growth by unlocking the hidden value of product inventory. We bridge the gap between business operations and high-impact marketing, ensuring that every brand—from emerging startups to Fortune 500 companies—can achieve market dominance without capital limitations.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side: Visual/Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-amber-500/20 via-slate-800 to-amber-500/10 border border-slate-200 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1),transparent)] group-hover:scale-125 transition-transform duration-1000" />
                            <div className="relative z-10 text-center space-y-4">
                                <p className="text-7xl font-black text-slate-900/10 group-hover:text-amber-500/20 transition-colors">MATRIX</p>
                                <p className="text-amber-500 text-sm font-mono tracking-[0.5em] font-bold">EST. 2010</p>
                            </div>
                        </div>
                        {/* decorative dots */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 opacity-20 pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(#F59E0B 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    </motion.div>
                </div>

                {/* Why Matrix - 3 column grid */}
                <div className="pt-20 border-t border-slate-200/80">
                    <div className="text-center mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Why Choose Matrix?</h3>
                        <div className="w-16 h-1 bg-amber-500 mx-auto" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {valueProps.map((prop, index) => (
                            <ValueCard key={prop.title} prop={prop} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
