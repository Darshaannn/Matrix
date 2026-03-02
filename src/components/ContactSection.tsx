import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact-section" className="relative py-24 overflow-hidden bg-slate-950">
            {/* Ambient background glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(245,158,11,0.05)_0%,transparent_70%)] blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(245,158,11,0.03)_0%,transparent_70%)] blur-[80px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                            Connect With Us
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
                            LET'S SCALE YOUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">INFLUENCE TOGETHER.</span>
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 max-w-lg leading-relaxed">
                            Turn your inventory into impact. Reach out for a custom barter strategy tailored to your brand's growth objectives.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all duration-300 shadow-xl">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Email Us</p>
                                    <p className="text-xl font-bold text-white hover:text-amber-500 transition-colors cursor-pointer">solutions@vanguardmatrix.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all duration-300 shadow-xl">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Call Us</p>
                                    <p className="text-xl font-bold text-white hover:text-amber-500 transition-colors cursor-pointer">+91 9922151120</p>
                                    <p className="text-[10px] text-slate-500 uppercase mt-1 font-bold">Contact: Anil Dassari</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all duration-300 shadow-xl">
                                    <MapPin size={24} />
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Office Address</p>
                                        <p className="text-sm font-bold text-white leading-relaxed">Office No. O- 501, 502, 503 Boulevard Towers, <br />Opp To Vijay Sales, Sadhu vaswani Chowk, <br />Pune-411001</p>
                                        <p className="text-[10px] text-amber-500/50 mt-1 font-mono uppercase">GST: 27AASCM1770E1Z9</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Delivery Address</p>
                                        <p className="text-sm font-bold text-white/70 leading-relaxed italic">GAT NO-825, saswad road, Wadki, <br />Pune, Maharashtra, 412308</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group shadow-2xl"
                    >
                        {/* Interactive border glow on hover */}
                        <div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors placeholder:text-slate-600"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Work Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors placeholder:text-slate-600"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Industry / Category</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors appearance-none cursor-pointer">
                                    <option className="bg-slate-900">Select Industry</option>
                                    <option className="bg-slate-900">FMCG</option>
                                    <option className="bg-slate-900">Automobile</option>
                                    <option className="bg-slate-900">Lifestyle & Clothing</option>
                                    <option className="bg-slate-900">Hospitality</option>
                                    <option className="bg-slate-900">Consumer Durables</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Brief Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your inventory or media needs..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors placeholder:text-slate-600 resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full relative group/btn py-5 rounded-xl bg-amber-500 text-slate-950 font-black text-lg uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(245,158,11,0.2)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.4)] transition-all overflow-hidden">
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                <span className="relative z-10 flex items-center gap-2">
                                    Send Inquiry <Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </span>
                            </button>

                            <p className="text-center text-[10px] text-slate-500 font-medium uppercase tracking-[0.2em]">
                                Privacy Guaranteed • Response within 24 Hours
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Matrix Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 overflow-hidden opacity-5">
                <span className="absolute top-10 right-20 text-9xl font-black text-white whitespace-nowrap uppercase">MATRIX SOLUTIONS</span>
                <span className="absolute bottom-10 left-20 text-9xl font-black text-white whitespace-nowrap uppercase">MATRIX SOLUTIONS</span>
            </div>
        </section>
    );
};

export default ContactSection;
