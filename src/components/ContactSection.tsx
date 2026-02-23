import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="relative py-32 px-4 md:px-8 bg-[#040812] border-t border-white/5 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#3B82F6]/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#00C2FF]">Scale?</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Request a structured barter proposal. Transform your inventory into nationwide media visibility today.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    {/* Left Column - Contact Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-5 flex flex-col gap-10"
                    >
                        {/* Contact Details Cards */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#3B82F6]/20 transition-colors duration-300">
                                    <Phone className="w-5 h-5 text-[#00C2FF]" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Call Us</h4>
                                    <p className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#3B82F6]/20 transition-colors duration-300">
                                    <Mail className="w-5 h-5 text-[#00C2FF]" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Email Us</h4>
                                    <p className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">hello@matrixexchange.in</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#3B82F6]/20 transition-colors duration-300">
                                    <MapPin className="w-5 h-5 text-[#00C2FF]" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Headquarters</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                                        Level 4, Matrix Tower,<br />
                                        Bandra Kurla Complex (BKC),<br />
                                        Mumbai, Maharashtra 400051
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] py-4 px-6 rounded-2xl font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.2)]">
                            <MessageCircle className="w-6 h-6" />
                            Chat on WhatsApp
                        </a>

                        {/* Map Embed Placeholder (Styled like a terminal/radar) */}
                        <div className="w-full h-48 rounded-2xl bg-[#0B1220] border border-white/5 relative overflow-hidden group">
                            {/* Radar Scan Effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border rounded-full border-[#00C2FF]/10 scale-[1.5] group-hover:animate-ping opacity-50" />
                            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=19.0664,72.8647&zoom=14&size=600x300&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x8ec3b9&style=feature:all|element:labels.text.stroke|color:0x1a3646&style=feature:all|element:labels.icon|visibility:off&style=feature:administrative.country|element:geometry.stroke|color:0x4b6878&style=feature:administrative.land_parcel|element:labels.text.fill|color:0x64779e&style=feature:administrative.province|element:geometry.stroke|color:0x4b6878&style=feature:landscape.man_made|element:geometry.stroke|color:0x334e87&style=feature:landscape.natural|element:geometry|color:0x021019&style=feature:poi|element:geometry|color:0x283d6a&style=feature:poi|element:labels.text.fill|color:0x6f9ba5&style=feature:poi|element:labels.text.stroke|color:0x1d2c4d&style=feature:poi.park|element:geometry.fill|color:0x021019&style=feature:poi.park|element:labels.text.fill|color:0x3C7680&style=feature:road|element:geometry|color:0x304a7d&style=feature:road|element:labels.text.fill|color:0x98a5be&style=feature:road|element:labels.text.stroke|color:0x1d2c4d&style=feature:road.highway|element:geometry|color:0x2c6675&style=feature:road.highway|element:geometry.stroke|color:0x255763&style=feature:road.highway|element:labels.text.fill|color:0xb0d5ce&style=feature:road.highway|element:labels.text.stroke|color:0x023e58&style=feature:transit|element:labels.text.fill|color:0x98a5be&style=feature:transit|element:labels.text.stroke|color:0x1d2c4d&style=feature:transit.line|element:geometry.fill|color:0x283d6a&style=feature:transit.station|element:geometry|color:0x3a4762&style=feature:water|element:geometry|color:0x0e1626&style=feature:water|element:labels.text.fill|color:0x4e6d70')] bg-cover bg-center opacity-40 mix-blend-luminosity filter contrast-125" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#00C2FF] rounded-full shadow-[0_0_20px_#00C2FF]" />
                        </div>
                    </motion.div>

                    {/* Right Column - Premium Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
                            {/* Inner ambient glow */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#3B82F6] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Request Barter Proposal</h3>
                            <p className="text-gray-400 mb-8">Tell us about your inventory, and we'll engineer a media plan.</p>

                            <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">Company Name</label>
                                        <input type="text" placeholder="e.g. Titan Company Ltd"
                                            className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#3B82F6]/50 focus:ring-1 focus:ring-[#3B82F6]/50 transition-all" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">Contact Person</label>
                                        <input type="text" placeholder="Full Name"
                                            className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#3B82F6]/50 focus:ring-1 focus:ring-[#3B82F6]/50 transition-all" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">Email Address</label>
                                        <input type="email" placeholder="work@company.com"
                                            className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#3B82F6]/50 focus:ring-1 focus:ring-[#3B82F6]/50 transition-all" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">Phone Number</label>
                                        <input type="tel" placeholder="+91"
                                            className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#3B82F6]/50 focus:ring-1 focus:ring-[#3B82F6]/50 transition-all" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">Product Category</label>
                                        <select className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-[#3B82F6]/50 focus:ring-1 focus:ring-[#3B82F6]/50 transition-all">
                                            <option value="" disabled selected className="text-gray-600">Select Industry</option>
                                            <option value="fmcg">FMCG & Retail</option>
                                            <option value="auto">Automobiles</option>
                                            <option value="durables">Consumer Durables</option>
                                            <option value="lifestyle">Lifestyle & Fashion</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">Est. Barter Value</label>
                                        <select className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-[#3B82F6]/50 focus:ring-1 focus:ring-[#3B82F6]/50 transition-all">
                                            <option value="" disabled selected className="text-gray-600">Select Range</option>
                                            <option value="1-5">₹1 Cr - ₹5 Cr</option>
                                            <option value="5-20">₹5 Cr - ₹20 Cr</option>
                                            <option value="20-50">₹20 Cr - ₹50 Cr</option>
                                            <option value="50+">₹50 Cr+</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">Additional Details</label>
                                    <textarea rows={3} placeholder="Tell us about the inventory type and target media channels..."
                                        className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#3B82F6]/50 focus:ring-1 focus:ring-[#3B82F6]/50 transition-all resize-none" />
                                </div>

                                <button type="submit" className="mt-2 w-full bg-white hover:bg-gray-100 text-black px-8 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300">
                                    Submit Proposal Request
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
