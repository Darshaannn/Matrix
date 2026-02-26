import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
    BarChart3,
    Repeat,
    Target,
    Zap,
    TrendingUp,
    PieChart
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import './ServicesSection.css';

interface Service {
    title: string;
    description: string;
    icon: LucideIcon;
}

const services: Service[] = [
    {
        title: "Barter Media Planning",
        description: "Design tailored barter strategies to align products with effective media channels.",
        icon: BarChart3,
    },
    {
        title: "Brand-to-Media Exchange",
        description: "Facilitate barter deals where products become premium advertising placements.",
        icon: Repeat,
    },
    {
        title: "Industry-Specific Campaigns",
        description: "Custom barter campaigns for Auto, FMCG, Lifestyle, Electronics, Hospitality & Media.",
        icon: Target,
    },
    {
        title: "Campaign Execution & Management",
        description: "End-to-end campaign planning, execution and delivery with performance monitoring.",
        icon: Zap,
    },
    {
        title: "Media Inventory Optimization",
        description: "Monetize unsold media inventory through structured barter agreements.",
        icon: TrendingUp,
    },
    {
        title: "Performance Tracking & Reporting",
        description: "Transparent insights and analytics on campaign impact and barter value.",
        icon: PieChart,
    }
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
    const Icon = service.icon;
    const cardRef = useRef<HTMLDivElement>(null);

    const handleRipple = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const ripple = document.createElement('span');
        const rect = card.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');

        const existingRipple = card.querySelector('.ripple');
        if (existingRipple) {
            existingRipple.remove();
        }

        card.appendChild(ripple);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileTap={{ scale: 0.98 }}
            className="service-card-container"
            onClick={handleRipple}
        >
            <div ref={cardRef} className="service-card group">
                <div>
                    <div className="service-icon-wrapper">
                        <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                </div>

                {/* Palette Accent Stripe */}
                <div className="service-card-palette">
                    <div className="palette-color"></div>
                    <div className="palette-color"></div>
                    <div className="palette-color"></div>
                    <div className="palette-color"></div>
                    <div className="palette-color"></div>
                </div>
            </div>
        </motion.div>
    );
};

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="services-section">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="section-kicker mx-auto"
                    >
                        <span>Our Expertise</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        What We Do
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-subheading"
                    >
                        Strategic Barter Solutions for Brands & Media
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
