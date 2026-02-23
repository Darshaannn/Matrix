import React from 'react';
import { motion } from 'framer-motion';

const ProductShowcase: React.FC = () => {
    return (
        <section className="w-full bg-[#f9fafb] py-32 px-4 flex flex-col items-center justify-center overflow-hidden">

            {/* Header Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for cinematic ease
                className="text-center mb-16 max-w-2xl"
            >
                <h2 className="text-sm font-semibold text-[#3b82f6] uppercase tracking-wider mb-3">
                    See it in action
                </h2>
                <p className="text-3xl md:text-5xl font-sans font-medium text-[#1d1d1f] leading-tight">
                    A single platform to manage your entire supply chain.
                </p>
            </motion.div>

            {/* Dashboard Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            >
                {/* Fallback gradient/box if image is missing */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white z-0" />

                <img
                    src="/dashboard_mockup.png"
                    alt="Dashboard Interface"
                    className="relative z-10 w-full h-auto object-cover"
                    onError={(e) => {
                        // Fallback visuals if image fails
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add('min-h-[600px]', 'flex', 'items-center', 'justify-center');

                        // Add a text node or similar to indicate mockup
                        const text = document.createElement('div');
                        text.className = "text-gray-300 font-bold text-4xl";
                        text.innerText = "Dashboard Mockup";
                        e.currentTarget.parentElement?.appendChild(text);
                    }}
                />
            </motion.div>

        </section>
    );
};

export default ProductShowcase;
