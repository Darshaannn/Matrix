import React from 'react';
import { motion } from 'framer-motion';

// --- Client Logo Data (Organized into two rows) ---
const clientLogos = [
    // Row 1
    [
        { name: 'ITC', url: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/ITC_Limited_Logo.svg' },
        { name: 'Hindustan Unilever', url: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Hindustan_Unilever.svg' },
        { name: 'Marico', url: 'https://upload.wikimedia.org/wikipedia/en/d/df/Marico_logo.svg' },
        { name: 'Dabur', url: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Dabur_Logo.svg' },
        { name: 'Godrej', url: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Godrej_Logo.svg' },
        { name: 'Nestle', url: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Nestl%C3%A9_logo.svg' },
        { name: 'Patanjali', url: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Patanjali_Logo.png' },
        { name: 'Emami', url: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Emami_logo.svg' },
    ],
    // Row 2
    [
        { name: 'Hero MotoCorp', url: 'https://upload.wikimedia.org/wikipedia/en/3/30/Hero_MotoCorp_logo.svg' },
        { name: 'Bajaj Auto', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Bajaj_Auto_logo.svg' },
        { name: 'TVS Motor', url: 'https://upload.wikimedia.org/wikipedia/en/a/af/TVS_Motor_Company_logo.svg' },
        { name: 'Mahindra', url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Mahindra_Logo.svg' },
        { name: 'Titan', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Titan_Company_logo.svg' },
        { name: 'Raymond', url: 'https://upload.wikimedia.org/wikipedia/en/6/62/Raymond_Group_logo.svg' },
        { name: 'Manyavar', url: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manyavar_logo.svg' },
        { name: 'Bata', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Bata_logo.svg' },
    ]
];

const LogoMarquee = ({ logos, direction = 'left', speed = 40 }: { logos: { name: string; url: string }[], direction?: 'left' | 'right', speed?: number }) => {
    // Duplicate logos for seamless looping
    const doubledLogos = [...logos, ...logos, ...logos];

    return (
        <div className="flex overflow-hidden select-none group/marquee relative py-4">
            <motion.div
                className="flex items-center min-w-full shrink-0 gap-16 md:gap-24"
                animate={{
                    x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%']
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {doubledLogos.map((logo, index) => (
                    <div
                        key={`${logo.name}-${index}`}
                        className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 cursor-pointer h-12 md:h-16 w-32 md:w-48"
                    >
                        <img
                            src={logo.url}
                            alt={logo.name}
                            className="max-h-full max-w-full object-contain pointer-events-none"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const OurClients: React.FC = () => {
    return (
        <section className="bg-white py-24 md:py-32 relative overflow-hidden">
            {/* Subtle Divider Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-slate-100" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-slate-100" />

            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 items-center flex justify-center gap-4">
                    <span className="h-px w-8 bg-slate-200"></span>
                    Trusted by Corporate Leadership
                    <span className="h-px w-8 bg-slate-200"></span>
                </h2>
            </div>

            <div className="relative">
                {/* Horizontal Fade Gradients */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex flex-col gap-8 md:gap-12">
                    {/* Row 1: Left to Right */}
                    <LogoMarquee logos={clientLogos[0]} direction="right" speed={50} />

                    {/* Subtle Row Divider */}
                    <div className="h-px w-3/4 mx-auto bg-slate-50" />

                    {/* Row 2: Right to Left */}
                    <LogoMarquee logos={clientLogos[1]} direction="left" speed={45} />
                </div>
            </div>

        </section>
    );
};

export default OurClients;
