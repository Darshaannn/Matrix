import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Network, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedHero from './AnimatedHero';

const PrototypeLanding = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 font-light overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                            <span className="font-bold text-slate-900 text-lg">M</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Matrix <span className="text-amber-500">Analytics</span></span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                        <a href="#features" className="hover:text-amber-400 transition-colors">Features</a>
                        <a href="#solutions" className="hover:text-amber-400 transition-colors">Solutions</a>
                        <a href="#pricing" className="hover:text-amber-400 transition-colors">Pricing</a>
                    </div>
                    <div>
                        <Link
                            to="/dashboard"
                            className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium transition-all backdrop-blur-sm"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(245,158,11,0.05)_0%,transparent_60%)]" />
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            v2.0 Beta is Live
                        </div>

                        {/* Conversion Copy Headline */}
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-white">
                            Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">Matrix</span>.<br />
                            Visualize, Analyze, Dominate.
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                            The ultimate command center for modern enterprises. Turn scattered data nodes into actionable intelligence in real-time. Stop guessing, start predicting.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <Link
                                to="/dashboard"
                                className="group relative px-8 py-4 rounded-full bg-amber-500 text-slate-900 font-bold text-lg overflow-hidden w-full sm:w-auto text-center"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                                <span className="relative flex items-center justify-center gap-2">
                                    Enter Dashboard <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                            <button className="px-8 py-4 rounded-full border border-white/10 text-white font-medium text-lg hover:bg-white/5 transition-colors w-full sm:w-auto">
                                Watch Demo
                            </button>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-slate-500 pt-4">
                            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-amber-500" /> Bank-grade Security</span>
                            <span>•</span>
                            <span>No credit card required</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Hero Graphic */}
                        <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-4 shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
                            <AnimatedHero />

                            {/* Decorative Glass Overlays */}
                            <div className="absolute bottom-4 left-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                                    <BarChart3 className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400">Processing Speed</div>
                                    <div className="text-sm font-bold text-white">0.02ms latency</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 px-6 relative border-t border-white/5 bg-slate-900/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Command Your Data Ecosystem</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Everything you need to orchestrate complex operations in one seamless, high-performance interface.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Zap className="w-6 h-6 text-amber-400" />,
                                title: "Real-time Metrics",
                                desc: "Monitor your entire network instantly. Zero refresh required. Our sub-millisecond pipeline keeps you steps ahead."
                            },
                            {
                                icon: <Network className="w-6 h-6 text-amber-400" />,
                                title: "Interactive Node Graphs",
                                desc: "Visualize complex relationships dynamically. Drag, drop, and reorganize your infrastructure with intuitive controls."
                            },
                            {
                                icon: <BarChart3 className="w-6 h-6 text-amber-400" />,
                                title: "Predictive Growth",
                                desc: "Leverage machine learning models to forecast bottlenecks before they happen and optimize resource allocation."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrototypeLanding;
