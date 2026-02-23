import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const logos = [
    { name: "Shopify", color: "text-[#95BF47]" },
    { name: "Salesforce", color: "text-[#00A1E0]" },
    { name: "Oracle", color: "text-[#C74634]" },
    { name: "SAP", color: "text-[#008FD3]" },
    { name: "Microsoft", color: "text-[#F25022]" },
    { name: "NetSuite", color: "text-[#0070AD]" },
    { name: "WooCommerce", color: "text-[#96588A]" },
    { name: "Magento", color: "text-[#F46F25]" },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 0.5, ease: "easeOut" }
    }
};

const PartnerLogos: React.FC = () => {
    return (
        <section className="w-full bg-white py-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-sans font-medium text-[#1d1d1f] mb-4 tracking-tight">
                        Works with the tools you already use
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Seamlessly connect with your existing systems and retail partners.
                    </p>
                </motion.div>

                {/* Logo Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-6xl"
                >
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex items-center justify-center p-8 bg-gray-50 rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 hover:shadow-lg hover:bg-white border border-transparent hover:border-gray-100 group cursor-default"
                        >
                            {/* Logo Placeholder (Text + Icon visual) */}
                            <div className={`text-2xl font-bold flex items-center gap-2 ${logo.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}>
                                {/* Using a simple generic shape as logo icon */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                                </svg>
                                <span>{logo.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default PartnerLogos;
