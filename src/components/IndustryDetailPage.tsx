import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const industriesData = {
    "automobile": {
        title: "Automobile",
        description: "Automobile brands leverage barter to maximize visibility and expand market reach without heavy cash expenditure. Through strategic media exchange, brands promote vehicles and accessories across high-impact platforms.",
        barterIncludes: ["Two-wheelers and bicycles", "Batteries and accessories", "Auto components"],
        mediaUtilized: ["Print", "Outdoor", "Television", "Digital"],
        brands: ["Bajaj Auto", "TVS Motor", "Hero MotoCorp", "Mahindra"]
    },
    "fmcg": {
        title: "FMCG",
        description: "Fast-moving consumer goods companies use barter to rapidly scale brand awareness and penetrate new markets by exchanging products for targeted advertising solutions.",
        barterIncludes: ["Food and beverages", "Personal care products", "Household essentials"],
        mediaUtilized: ["Print", "Radio", "Digital", "Outdoor"],
        brands: ["ITC", "Marico", "Dabur", "Hindustan Unilever", "Godrej Consumer", "Emami", "Patanjali", "Nestle India"]
    },
    "lifestyle": {
        title: "Lifestyle & Clothing",
        description: "Fashion and lifestyle brands benefit from barter by showcasing their collections through premium media placements, increasing brand recall while optimizing marketing spend.",
        barterIncludes: ["Apparel", "Footwear", "Accessories"],
        mediaUtilized: ["Print", "Digital", "Outdoor"],
        brands: ["Titan", "Manyavar", "Bata India", "Woodland", "Raymond", "Peter England", "Fabindia", "W for Woman"]
    },
    "consumer-durables": {
        title: "Consumer Durables",
        description: "Consumer durable brands exchange high-value products for advertising inventory, ensuring sustained brand visibility across mass media platforms.",
        barterIncludes: ["Electronics", "Home appliances", "Gadgets"],
        mediaUtilized: ["Print", "Television", "Digital", "Outdoor"],
        brands: ["Bajaj Electricals", "Havells", "Voltas", "Blue Star", "Orient Electric", "Crompton", "V-Guard", "Whirlpool India"]
    },
    "media": {
        title: "Media Networks",
        description: "Media houses collaborate through barter by exchanging advertising inventory with brands, optimizing unsold space and increasing cross-promotional opportunities.",
        barterIncludes: ["Ad slots", "Print inventory", "Outdoor media"],
        mediaUtilized: ["Television", "Print", "Digital"],
        brands: ["Zee Media", "Network18", "Times Group", "Disney Star", "Sony Pictures", "Sun TV"]
    },
    "hospitality": {
        title: "Hospitality & Gaming",
        description: "Hospitality and gaming brands use barter partnerships to enhance brand presence by trading services and experiences for extensive promotional exposure.",
        barterIncludes: ["Hotel stays", "Food & beverages", "Gaming services"],
        mediaUtilized: ["Print", "Digital", "Outdoor"],
        brands: ["OYO Hotels", "Lemon Tree", "Treebo", "Airbnb India", "Taj Hotels", "Marriott", "Hyatt"]
    }
};

const IndustryDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const industry = industriesData[id as keyof typeof industriesData];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!industry) {
        return (
            <div className="min-h-screen bg-[#FFFBEB] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4 text-slate-900">Industry Not Found</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="text-amber-500 font-bold hover:underline"
                    >
                        Go back to home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#FFFBEB] min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/#industry-map')}
                    className="flex items-center gap-2 text-slate-500 hover:text-amber-500 transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-bold uppercase tracking-widest font-mono">Back to Map</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Info */}
                    <div className="space-y-12">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
                                {industry.title}
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                {industry.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                                <h3 className="text-[12px] font-mono font-bold uppercase tracking-[0.2em] text-amber-500 mb-6">Barter Includes</h3>
                                <ul className="space-y-4">
                                    {industry.barterIncludes.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-800 font-bold">
                                            <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                                <h3 className="text-[12px] font-mono font-bold uppercase tracking-[0.2em] text-[#00B3FF] mb-6">Media Utilized</h3>
                                <div className="flex flex-wrap gap-2">
                                    {industry.mediaUtilized.map((item, idx) => (
                                        <span key={idx} className="px-4 py-2 rounded-xl bg-slate-100 text-slate-800 text-sm font-bold">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Clients */}
                    <div
                        className="lg:sticky lg:top-32"
                    >
                        <div className="p-10 rounded-[40px] bg-slate-900 text-white shadow-2xl overflow-hidden relative">
                            {/* Decorative background glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] -mr-32 -mt-32 rounded-full" />

                            <h3 className="relative z-10 text-[12px] font-mono font-bold uppercase tracking-[0.3em] text-amber-500 mb-10">Trusted Clients</h3>

                            <div className="relative z-10 grid grid-cols-2 gap-8">
                                {industry.brands.map((brand, idx) => (
                                    <div
                                        key={idx}
                                        className="group cursor-default flex flex-col gap-2"
                                    >
                                        <div className="text-xl md:text-2xl font-black text-slate-500 group-hover:text-amber-500 transition-colors grayscale group-hover:grayscale-0">
                                            {brand.toUpperCase()}
                                        </div>
                                        <div className="h-0.5 w-0 group-hover:w-full bg-amber-500/30 transition-all duration-500" />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/5">
                                <p className="text-slate-500 text-xs font-medium leading-relaxed italic">
                                    Matrix has executed campaigns worth over ₹1000 Cr for these market leaders across India.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default IndustryDetailPage;
