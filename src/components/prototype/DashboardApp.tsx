import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    BarChart3,
    Users,
    Settings,
    Bell,
    Search,
    ArrowUpRight,
    Database,
    Activity,
    LogOut
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardApp = () => {
    return (
        <div className="flex h-screen bg-[#020617] text-slate-300 font-sans overflow-hidden selection:bg-amber-500/30">

            {/* Sidebar Navigation */}
            <aside className="w-64 border-r border-slate-800 bg-slate-950 flex flex-col hidden md:flex shrink-0">
                <div className="h-20 flex items-center px-6 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                            <span className="font-bold text-slate-900 text-lg">M</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Matrix <span className="text-amber-500">Dash</span></span>
                    </div>
                </div>

                <div className="flex-1 py-6 px-4 flex flex-col gap-2">
                    <div className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Overview</div>

                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-amber-500/10 text-amber-500 font-medium">
                        <LayoutDashboard className="w-5 h-5" /> Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-900 transition-colors">
                        <BarChart3 className="w-5 h-5" /> Analytics
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-900 transition-colors">
                        <Activity className="w-5 h-5" /> Network Status
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-900 transition-colors">
                        <Users className="w-5 h-5" /> Nodes
                    </a>

                    <div className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mt-6 mb-2">System</div>

                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-900 transition-colors">
                        <Settings className="w-5 h-5" /> Settings
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-900 transition-colors">
                        <Database className="w-5 h-5" /> Data Sources
                    </a>
                </div>

                <div className="p-4 border-t border-slate-800">
                    <Link to="/prototype" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-900 text-slate-400 transition-colors">
                        <LogOut className="w-5 h-5" /> Return to Site
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 bg-[#0f172a] relative">
                {/* Subtle glowing background effect */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

                {/* Top Header */}
                <header className="h-20 border-b border-slate-800/60 bg-[#0f172a]/80 backdrop-blur-md flex items-center justify-between px-8 z-10 shrink-0">
                    <div className="flex items-center gap-4 bg-slate-900/50 border border-slate-800 rounded-full px-4 py-2 w-72">
                        <Search className="w-4 h-4 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search nodes, metrics..."
                            className="bg-transparent border-none outline-none text-sm text-slate-300 w-full placeholder:text-slate-600"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative text-slate-400 hover:text-white transition-colors">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500 border-2 border-[#0f172a]"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-6 border-l border-slate-800">
                            <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                                <span className="text-sm font-medium text-white">AD</span>
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-sm font-medium text-white">Admin User</div>
                                <div className="text-xs text-slate-500">System Operator</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Mutable Content */}
                <div className="flex-1 overflow-y-auto p-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="flex items-end justify-between mb-8">
                            <div>
                                <h1 className="text-2xl font-bold text-white mb-1">Command Center</h1>
                                <p className="text-slate-400 text-sm">Real-time overview of your matrix network.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span className="text-sm font-medium text-emerald-500">System Online</span>
                            </div>
                        </div>

                        {/* Metric Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {[
                                { label: "Total Volume", value: "$2.4M", trend: "+12.5%", isPositive: true },
                                { label: "Active Nodes", value: "1,432", trend: "+4.2%", isPositive: true },
                                { label: "Efficiency Rate", value: "94.8%", trend: "-0.8%", isPositive: false },
                                { label: "Processed Data", value: "8.4 TB", trend: "+24.1%", isPositive: true },
                            ].map((metric, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                    className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm"
                                >
                                    <div className="text-slate-400 text-sm font-medium mb-4">{metric.label}</div>
                                    <div className="flex items-end justify-between">
                                        <div className="text-3xl font-bold text-white">{metric.value}</div>
                                        <div className={`flex items-center gap-1 text-sm font-medium ${metric.isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                                            {metric.trend} {metric.isPositive && <ArrowUpRight className="w-4 h-4" />}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Layout Grid for Charts */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm min-h-[350px] flex flex-col"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-lg font-bold text-white">Network Operations</h2>
                                    <select className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-sm text-slate-300 outline-none">
                                        <option>Last 7 Days</option>
                                        <option>Last 30 Days</option>
                                    </select>
                                </div>

                                {/* Fake Chart CSS Visualization */}
                                <div className="flex-1 flex items-end gap-2 pb-4 pt-4 border-b border-slate-800 relative">
                                    {/* Grid Lines */}
                                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                        {[1, 2, 3, 4, 5].map((_, i) => (
                                            <div key={i} className="w-full h-px bg-slate-800/50"></div>
                                        ))}
                                    </div>

                                    {/* Bars */}
                                    {[40, 65, 45, 80, 55, 90, 75, 85, 60, 95, 80, 110].map((height, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex-1 bg-gradient-to-t from-amber-600/20 to-amber-500 rounded-t-sm relative group z-10"
                                            initial={{ height: 0 }}
                                            animate={{ height: `${height}%` }}
                                            transition={{ duration: 1, delay: 0.5 + (i * 0.05), ease: "easeOut" }}
                                        >
                                            <div className="absolute top-0 right-0 left-0 bottom-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-sm" />
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-4 text-xs text-slate-500">
                                    <span>Jan</span>
                                    <span>Feb</span>
                                    <span>Mar</span>
                                    <span>Apr</span>
                                    <span>May</span>
                                    <span>Jun</span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 backdrop-blur-sm min-h-[350px]"
                            >
                                <h2 className="text-lg font-bold text-white mb-6">Recent Anomaly Events</h2>
                                <div className="flex flex-col gap-4">
                                    {[
                                        { node: "Node-7A", time: "2m ago", status: "Critical", color: "text-red-400" },
                                        { node: "Db-Sync", time: "15m ago", status: "Warning", color: "text-amber-400" },
                                        { node: "Api-Gateway", time: "1h ago", status: "Resolved", color: "text-emerald-400" },
                                        { node: "Auth-Service", time: "3h ago", status: "Resolved", color: "text-emerald-400" },
                                    ].map((event, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-900/40 border border-slate-800/50">
                                            <div>
                                                <div className="text-sm font-medium text-white">{event.node}</div>
                                                <div className="text-xs text-slate-500">{event.time}</div>
                                            </div>
                                            <div className={`text-xs font-semibold ${event.color}`}>
                                                {event.status}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default DashboardApp;
