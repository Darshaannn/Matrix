import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Matrix didn't just buy our media; they structurally solved our working capital constraints during a critical product launch. The transparency of their valuation framework is unmatched.",
        author: "Chief Financial Officer",
        company: "Top-Tier FMCG Conglomerate",
    },
    {
        quote: "Their barter infrastructure allowed us to shift 15% of our national media buying without touching liquid cash reserves. The regional print and OTT penetration was flawless.",
        author: "Chief Marketing Officer",
        company: "Leading Consumer Durables Brand",
    },
    {
        quote: "The ability to deploy across premium national multiplexes and elite outdoor networks without expanding our marketing budget gave us a massive competitive baseline advantage.",
        author: "VP Marketing & Strategy",
        company: "Multinational Automotive Manufacturer",
    }
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-24 md:py-32 px-4 relative bg-transparent border-t border-amber-200/50">
            <div className="max-w-7xl mx-auto z-10 relative">

                <div className="text-center mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-amber-700 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 font-semibold"
                    >
                        Market Validation
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 font-sans"
                    >
                        Trusted by Corporate Leadership.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-white border border-amber-100 rounded-2xl p-8 relative hover:border-amber-400 hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 flex flex-col justify-between"
                        >
                            {/* Quote Icon Background */}
                            <div className="absolute top-6 right-6 opacity-10">
                                <Quote size={64} className="text-amber-500" />
                            </div>

                            <div className="relative z-10">
                                <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-8 italic">
                                    "{testimonial.quote}"
                                </p>
                            </div>

                            <div className="relative z-10 border-t border-slate-100 pt-6 mt-auto">
                                <p className="text-slate-900 font-bold tracking-wide">{testimonial.author}</p>
                                <p className="text-amber-700 text-sm font-mono mt-1 tracking-wider uppercase">{testimonial.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
