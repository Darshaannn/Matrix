import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-[#0F172A] text-slate-600 py-20 px-4 md:px-12 border-t border-slate-200/80 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 font-sans">

                {/* Brand & Summary */}
                <div className="md:col-span-1">
                    <span className="font-bold text-xl tracking-widest uppercase text-slate-900 mb-6 block">MATRIX</span>
                    <p className="text-sm leading-relaxed font-medium mb-6">
                        India’s leading media barter infrastructure holding company. We convert corporate inventory into national media power.
                    </p>
                    <div className="text-sm">
                        <a href="mailto:corporate@matrix.com" className="hover:text-slate-900 transition-colors block mb-1">corporate@matrix.com</a>
                        <a href="tel:+9122345678" className="hover:text-slate-900 transition-colors">+91 22 3456 7890</a>
                    </div>
                </div>

                {/* Solutions */}
                <div>
                    <h4 className="text-slate-900 font-semibold tracking-wide uppercase text-xs mb-6">Execution Pillars</h4>
                    <ul className="space-y-3 text-sm font-medium">
                        <li><a href="#" className="hover:text-slate-900 transition-colors hover:translate-x-1 inline-block">Inventory Valuation</a></li>
                        <li><a href="#" className="hover:text-slate-900 transition-colors hover:translate-x-1 inline-block">Media Structuring</a></li>
                        <li><a href="#" className="hover:text-slate-900 transition-colors hover:translate-x-1 inline-block">Asset Liquidation</a></li>
                        <li><a href="#" className="hover:text-slate-900 transition-colors hover:translate-x-1 inline-block">Multi-Platform Deployment</a></li>
                        <li><a href="#" className="hover:text-slate-900 transition-colors hover:translate-x-1 inline-block">Post-Campaign Audit</a></li>
                    </ul>
                </div>

                {/* Industries */}
                <div>
                    <h4 className="text-slate-900 font-semibold tracking-wide uppercase text-xs mb-6">Sectors Focus</h4>
                    <ul className="space-y-3 text-sm font-medium">
                        <li><a href="#" className="hover:text-slate-900 transition-colors hover:translate-x-1 inline-block">FMCG & CPG</a></li>
                        <li><a href="#" className="hover:text-slate-900 transition-colors hover:translate-x-1 inline-block">Consumer Durables</a></li>
                        <li><a href="#" className="hover:text-slate-900 transition-colors hover:translate-x-1 inline-block">Auto & Machinery</a></li>
                        <li><a href="#" className="hover:text-slate-900 transition-colors hover:translate-x-1 inline-block">Real Estate</a></li>
                        <li><a href="#" className="hover:text-slate-900 transition-colors hover:translate-x-1 inline-block">Hospitality & Tourism</a></li>
                    </ul>
                </div>

                {/* Offices */}
                <div>
                    <h4 className="text-slate-900 font-semibold tracking-wide uppercase text-xs mb-6">Corporate Offices</h4>
                    <div className="space-y-6 text-sm font-medium">
                        <div>
                            <p className="text-slate-900 mb-1">Mumbai (HQ)</p>
                            <p className="text-slate-600">Matrix House, <br />Lower Parel, Mumbai 400013</p>
                        </div>
                        <div>
                            <p className="text-slate-900 mb-1">Pune</p>
                            <p className="text-slate-600">Business Park, <br />Kalyani Nagar, Pune 411014</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Copyright & Social */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200/80 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono tracking-wider">
                <p>&copy; {new Date().getFullYear()} Matrix Media Consortium. All rights reserved.</p>
                <div className="flex items-center gap-8">
                    <div className="flex gap-4">
                        <a href="#" className="w-8 h-8 rounded-full bg-slate-900/5 flex items-center justify-center border border-slate-200 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all">
                            <span className="text-[10px]">LN</span>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-slate-900/5 flex items-center justify-center border border-slate-200 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all">
                            <span className="text-[10px]">TW</span>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-slate-900/5 flex items-center justify-center border border-slate-200 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all">
                            <span className="text-[10px]">IG</span>
                        </a>
                    </div>
                    <div className="flex gap-6 border-l border-slate-200 pl-8">
                        <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
