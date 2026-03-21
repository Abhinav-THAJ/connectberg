"use client";

import { motion } from "framer-motion";
import { Shield, Users, Database, Globe } from "lucide-react";

export default function About() {
    return (
        <div className="flex flex-col gap-16 md:gap-32 pb-16 md:pb-32 px-4 sm:px-6 max-w-7xl mx-auto relative mt-20 overflow-hidden">

            <div className="orb w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-teal/20 -top-40 -left-32 md:-left-60" style={{ animation: "float 15s infinite" }} />

            {/* Header - Heavy Blur Reveal via Framer */}
            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(20px)", scale: 0.9 }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="max-w-5xl relative z-10 text-center mx-auto flex flex-col items-center"
            >
                <span className="text-teal font-black uppercase tracking-[0.5em] text-[10px] bg-teal/10 px-5 py-2 rounded-full border border-teal/20 mb-6">The ConnectBerg Ethos</span>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-5 hero-text leading-[0.85]">
                    Digital <br /><span className="gradient-text italic teal-glow">Sovereignty</span>
                </h1>
                <p className="text-base sm:text-xl md:text-3xl text-gray-400 font-bold max-w-3xl leading-snug">
                    Connect Berg Technologies Pvt. Ltd. represents the absolute peak of institutional automation.
                    We architect the high-bandwidth bridges between archives and intelligence.
                </p>
            </motion.div>

            {/* Mission/Vision - Slide Dual Direction */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 relative z-10">
                <div className="premium-glass p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border border-white/5 reveal-left hover-pulse-border cursor-crosshair">
                    <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase italic tracking-tighter text-teal">Our Mission</h2>
                    <p className="text-base md:text-lg text-gray-300 font-black tracking-wide leading-relaxed">
                        To engineer zero-latency, highly-secure automated environments that provide
                        absolute data integrity for academic and business hubs worldwide.
                    </p>
                </div>

                <div className="premium-glass p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border border-white/5 reveal-right hover-pulse-border cursor-crosshair">
                    <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase italic tracking-tighter text-lime">Our Vision</h2>
                    <p className="text-base md:text-lg text-gray-300 font-black tracking-wide leading-relaxed">
                        To unilaterally define the global standard in library robotics and enterprise orchestration,
                        delivering elite coding benchmarks that survive generations.
                    </p>
                </div>
            </div>

            {/* Core Values - Rotate on Scroll */}
            <section className="relative z-10 reveal-rotate bg-black/60 p-8 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[4rem] md:rounded-[5rem] border border-white/5 shadow-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-8 md:mb-16 tracking-tighter text-center">Operational <span className="gradient-text italic">DNA</span></h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {[
                        { title: "Sovereignty", desc: "Total institutional ownership of data. No lock-ins. Pure autonomy." },
                        { title: "Velocity", desc: "Optimized logical throughput for millions of daily queries." },
                        { title: "Fortress", desc: "Security built into every layer of the technical stack." },
                        { title: "Evolution", desc: "Built with modular cores that rapidly adapt as needs shift." }
                    ].map((item, i) => (
                        <div key={item.title} className="bg-white/5 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-l-[4px] border-teal hover:scale-105 hover:-translate-y-2 hover:bg-teal/10 transition-all duration-300 cursor-cell" style={{ transitionDelay: `${i * 50}ms` }}>
                            <h4 className="text-base md:text-xl font-black mb-2 md:mb-4 uppercase italic text-white tracking-tighter">{item.title}</h4>
                            <p className="text-[10px] md:text-[12px] text-gray-400 font-black uppercase tracking-widest leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Impact - Scale on Scroll */}
            <section className="p-8 sm:p-12 md:p-16 bg-gradient-to-br from-[#05161a] to-black rounded-[2.5rem] sm:rounded-[4rem] md:rounded-[5rem] overflow-hidden relative z-10 reveal-scale border border-teal/30 hover-pulse-border">
                <div className="flex flex-col lg:flex-row gap-10 md:gap-20 items-center">
                    <div className="lg:w-1/2 flex flex-col gap-6 md:gap-10">
                        <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-[0.85]">Global <br /><span className="text-teal underline decoration-white/10 underline-offset-8">Impact</span></h2>
                        <p className="text-base md:text-xl text-gray-400 font-black tracking-wider leading-relaxed">
                            Connect Berg has systematically digitized the collective memory of prestigious institutions globally.
                        </p>
                        <div className="grid grid-cols-2 gap-6 md:gap-10">
                            <div>
                                <div className="text-4xl sm:text-6xl font-black text-teal mb-2 italic">50+</div>
                                <div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">Halls of Learning</div>
                            </div>
                            <div>
                                <div className="text-4xl sm:text-6xl font-black text-lime mb-2 italic">15+</div>
                                <div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">Nations Impacted</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4 md:gap-8 w-full p-5 md:p-8 bg-black/40 rounded-[2rem] md:rounded-[4rem] border border-white/5">
                        <div className="h-32 sm:h-48 premium-glass rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center justify-center p-4 md:p-8 text-center gap-3 hover:scale-105 transition-transform">
                            <Globe size={32} className="text-teal" />
                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white">Global Reach</span>
                        </div>
                        <div className="h-32 sm:h-48 bg-teal rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center justify-center p-4 md:p-8 text-center gap-3 text-black shadow-[0_0_30px_rgba(0,154,157,0.5)] hover:scale-105 transition-transform">
                            <Shield size={32} />
                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-black">Hardened Core</span>
                        </div>
                        <div className="h-32 sm:h-48 bg-lime rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center justify-center p-4 md:p-8 text-center gap-3 text-black shadow-[0_0_30px_rgba(206,224,0,0.5)] hover:scale-105 transition-transform">
                            <Users size={32} />
                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-black">Expert Logic</span>
                        </div>
                        <div className="h-32 sm:h-48 premium-glass rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center justify-center p-4 md:p-8 text-center gap-3 border border-teal/30 hover:scale-105 transition-transform">
                            <Database size={32} className="text-teal" />
                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white">24/7 Intel</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
