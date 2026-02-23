import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link2, RefreshCw, Truck, CreditCard } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const data = [
    {
        title: "Connect with retailers",
        desc: "Seamlessly integrate with retail partners without changing your workflow.",
        icon: Link2,
        color: "bg-blue-100 text-blue-600"
    },
    {
        title: "Sync inventory",
        desc: "Keep stock updated across all channels in real time.",
        icon: RefreshCw,
        color: "bg-green-100 text-green-600"
    },
    {
        title: "Ship faster",
        desc: "Automate fulfillment and reduce delivery delays.",
        icon: Truck,
        color: "bg-orange-100 text-orange-600"
    },
    {
        title: "Get paid easily",
        desc: "Track payments and invoices effortlessly.",
        icon: CreditCard,
        color: "bg-purple-100 text-purple-600"
    }
];

export default function FeaturesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Kill any existing ScrollTriggers to prevent duplicates on hot reload
        ScrollTrigger.getAll().forEach(t => t.kill());

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "+=400%", // 400vh scroll
            pin: true,
            scrub: true,
            onUpdate: (self) => {
                // Calculate index based on progress (0 to 1)
                const newIndex = Math.min(
                    data.length - 1,
                    Math.floor(self.progress * data.length)
                );
                setIndex(newIndex);
            }
        });

        // Cleanup on unmount
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []); // Run once on mount

    useEffect(() => {
        // Animate content when index changes
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
            );
        }
    }, [index]);

    const currentFeature = data[index];
    const Icon = currentFeature.icon;

    return (
        <section
            ref={sectionRef}
            className="h-screen flex flex-col md:flex-row px-6 md:px-[8vw] bg-[#f9fafb] overflow-hidden"
        >
            {/* Left Column */}
            <div className="flex-1 flex items-center justify-start">
                <h2 className="text-5xl md:text-7xl font-sans font-medium text-[#1d1d1f] max-w-[500px] leading-[1.1]">
                    Everything you need to move <span className="text-[#3b82f6]">faster.</span>
                </h2>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex items-center justify-center">
                {/* Static Card Container */}
                <div
                    className="w-full max-w-[400px] p-10 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 flex flex-col gap-6 min-h-[350px] justify-center"
                >
                    {/* Animated Content Wrapper */}
                    <div ref={contentRef} className="flex flex-col gap-6">
                        <div className={`w-16 h-16 rounded-2xl ${currentFeature.color} flex items-center justify-center`}>
                            <Icon size={32} strokeWidth={2} />
                        </div>
                        <div>
                            <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-3">
                                {currentFeature.title}
                            </h3>
                            <p className="text-lg text-gray-500 leading-relaxed font-medium">
                                {currentFeature.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
