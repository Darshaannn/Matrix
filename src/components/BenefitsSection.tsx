import { motion } from 'framer-motion';
import { MessageCircle, BarChart3, ShoppingCart, Database } from 'lucide-react';

const benefits = [
    {
        id: "01",
        title: "Elevate Engagement",
        subtitle: "clients engagement",
        description: "The inclusion of an on-site chat feature ensures that your clients remain engaged and are more likely to take the desired action before leaving the website.",
        icon: MessageCircle,
    },
    {
        id: "02",
        title: "Elevate Your Website Performance",
        subtitle: "website performance",
        description: "The website is poised to experience an elevation in both repeat visitation rates and purchase frequency, fostering a heightened level of user engagement and loyalty.",
        icon: BarChart3,
    },
    {
        id: "03",
        title: "Reduce purchase refusals",
        subtitle: "reduced purchase refusals",
        description: "The occurrence of purchase and order refusals is anticipated to decrease, resulting in a more streamlined and efficient transaction process.",
        icon: ShoppingCart,
    },
    {
        id: "04",
        title: "Optimize Data Acquisition",
        subtitle: "data acquisition",
        description: "The business is poised to enhance its data acquisition efforts by collecting a more robust dataset.",
        icon: Database,
    },
];

const BenefitsSection: React.FC = () => {
    return (
        <section className="min-h-screen w-full bg-[#f5f5f7] py-20 px-4">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row justify-between items-center px-4">
                <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 font-medium">
                    <span className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center text-[10px]">03</span>
                    unlocking value
                </div>
                <h2 className="text-5xl font-sans font-medium tracking-tight text-[#1d1d1f] text-center md:text-left">Our Benefits</h2>
                <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 font-medium cursor-pointer hover:text-black transition-colors">
                    Explore All benefits <ArrowUpRightMini />
                </div>
            </div>

            {/* Cards List Container */}
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-8">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={benefit.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="w-full flex flex-col md:flex-row min-h-[320px]"
                    >
                        {/* Left Card: Icon + Text */}
                        <div className="flex-1 bg-white rounded-[2.5rem] p-12 shadow-sm flex items-start gap-8 border-r border-gray-50/50">
                            {/* Icon in Black Circle */}
                            <div className="flex-shrink-0 pt-2">
                                <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-md">
                                    <benefit.icon size={22} strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col items-start">
                                {/* Subtitle */}
                                <div className="text-xs font-medium text-gray-400 lowercase tracking-wide mb-2">
                                    {benefit.subtitle}
                                </div>
                                {/* Description */}
                                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>

                        {/* Right Card: Title */}
                        <div className="flex-1 bg-gradient-to-b from-[#f8f8f9] to-[#e6e6e9] rounded-[2.5rem] p-12 shadow-sm flex flex-col justify-center items-center text-center relative overflow-hidden">
                            <span className="text-sm font-medium text-gray-500 mb-4 z-10 tracking-tight">We are here to</span>
                            <h3 className="text-4xl md:text-[2.75rem] font-sans font-medium text-[#1d1d1f] tracking-tight leading-[1.1] z-10 max-w-lg">
                                {benefit.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const ArrowUpRightMini = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 9.5L9.5 2.5M9.5 2.5H3.5M9.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default BenefitsSection;
