import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';

const BentoGrid: React.FC = () => {
    return (
        <section className="px-4 md:px-8 max-w-7xl mx-auto pb-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">

                {/* Services Card (Left) - Span 4 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="md:col-span-4 bg-white rounded-[2.5rem] p-10 shadow-sm flex flex-col justify-between relative overflow-hidden h-[22rem]"
                >
                    <h3 className="text-2xl font-bold text-black tracking-tight">Services</h3>
                    <div className="relative h-full w-full mt-4">
                        {/* Tag Cloud Layout - Manual Positioning based on screenshot */}

                        {/* Center/Top Black Tag */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black text-slate-900 px-5 py-2 rounded-full text-sm font-medium z-10 shadow-lg">Web Design</div>

                        {/* Middle Left White Tag */}
                        <div className="absolute top-16 -left-2 border border-black/10 text-black px-4 py-2 rounded-full text-sm font-medium bg-white transform -rotate-3 z-0 shadow-sm">Social Media</div>

                        {/* Middle Right Black Tag */}
                        <div className="absolute top-14 right-0 bg-black text-slate-900 px-5 py-2 rounded-full text-sm font-medium transform rotate-6 z-10 shadow-lg">Marketing</div>

                        {/* Bottom Left White Tag with Star */}
                        <div className="absolute bottom-16 left-2 border border-black/10 text-black px-4 py-2 rounded-full text-sm font-medium bg-white flex items-center gap-1.5 transform rotate-2 z-10 shadow-sm">
                            <Sparkles className="text-[#FFDC58] fill-[#FFDC58]" size={14} /> Paid Ads
                        </div>

                        {/* Bottom Right White Tag */}
                        <div className="absolute bottom-12 right-2 border border-black/10 text-black px-4 py-2 rounded-full text-sm font-medium bg-white transform -rotate-3 shadow-sm">Branding</div>

                        {/* Very Bottom Center Black Tag */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black text-slate-900 px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap z-20 shadow-lg transform rotate-1">Content Creation</div>
                    </div>
                </motion.div>

                {/* Center Column - Span 4 */}
                <div className="md:col-span-4 flex flex-col gap-6 h-[22rem]">
                    {/* Dark Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-black text-slate-900 rounded-[2.5rem] p-8 flex-1 flex flex-col justify-center shadow-lg relative overflow-hidden"
                    >
                        <h2 className="text-5xl font-bold mb-3 tracking-tight">1.2M+</h2>
                        <p className="text-gray-400 text-sm font-medium leading-snug">
                            users have interacted with websites<br />built by us.
                        </p>
                    </motion.div>

                    {/* Light Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[2.5rem] p-8 flex-1 flex flex-col justify-center shadow-sm"
                    >
                        <h2 className="text-5xl font-bold mb-3 tracking-tight">$3M</h2>
                        <p className="text-gray-500 text-sm font-medium leading-snug">
                            in funding raised by start-ups we've<br />worked with.
                        </p>
                    </motion.div>
                </div>

                {/* Testimonial Card (Right) - Span 4 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="md:col-span-4 bg-white rounded-[2.5rem] p-10 shadow-sm flex flex-col justify-between h-[22rem]"
                >
                    <div className="mt-2">
                        <Quote className="text-black fill-black mb-6 transform scale-x-[-1]" size={32} />
                        <p className="text-xl font-medium leading-snug tracking-tight text-gray-900">
                            The final product exceeded<br />my expectations.
                        </p>
                        <p className="mt-4 text-gray-900 font-medium text-lg">
                            Impressed with the results!
                        </p>
                    </div>
                    <div className="flex items-center gap-3 mt-auto">
                        <div className="flex -space-x-4">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" alt="User 1" className="w-12 h-12 rounded-full border-[3px] border-white object-cover" />
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces" alt="User 2" className="w-12 h-12 rounded-full border-[3px] border-white object-cover" />
                        </div>
                        <div className="w-12 h-12 rounded-full border-[3px] border-white bg-[#FFF8D6] text-[#A68A00] flex items-center justify-center text-xs font-bold -ml-4 z-10 shadow-sm">
                            AS.
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default BentoGrid;
