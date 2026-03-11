"use client";

import { motion } from "framer-motion";
import { Shield, Users, Database, Globe } from "lucide-react";

export default function About() {
    return (
        <div className="flex flex-col gap-32 pb-32 px-6 max-w-7xl mx-auto relative mt-20 overflow-hidden">

            <div className="orb w-[600px] h-[600px] bg-teal/20 -top-40 -left-60" style={{ animation: "float 15s infinite" }} />

            {/* Header - Heavy Blur Reveal via Framer */}
            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(20px)", scale: 0.9 }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="max-w-5xl relative z-10 text-center mx-auto flex flex-col items-center"
            >
                <span className="text-teal font-black uppercase tracking-[0.5em] text-[10px] bg-teal/10 px-5 py-2 rounded-full border border-teal/20 mb-6">The ConnectBerg Ethos</span>
                <h1 className="text-4xl md:text-7xl font-black mb-6 hero-text leading-[0.8]">
                    Digital <br /><span className="gradient-text italic teal-glow">Sovereignty</span>
                </h1>
                <p className="text-xl md:text-3xl text-gray-400 font-bold max-w-3xl leading-snug">
                    Connect Berg Technologies Pvt. Ltd. represents the absolute peak of institutional automation.
                    We architect the high-bandwidth bridges between archives and intelligence.
                </p>
            </motion.div>

            {/* Mission/Vision - Slide Dual Direction */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10 mt-10">
                <div className="premium-glass p-12 rounded-[4rem] border border-white/5 reveal-left hover-pulse-border cursor-crosshair">
                    <h2 className="text-3xl font-black mb-6 uppercase italic tracking-tighter text-teal">Our Mission</h2>
                    <p className="text-lg text-gray-300 font-black tracking-wide leading-relaxed">
                        To engineer zero-latency, highly-secure automated environments that provide
                        absolute data integrity for academic and business hubs worldwide.
                    </p>
                </div>

                <div className="premium-glass p-12 rounded-[4rem] border border-white/5 reveal-right hover-pulse-border cursor-crosshair">
                    <h2 className="text-3xl font-black mb-6 uppercase italic tracking-tighter text-lime">Our Vision</h2>
                    <p className="text-lg text-gray-300 font-black tracking-wide leading-relaxed">
                        To unilaterally define the global standard in library robotics and enterprise orchestration,
                        delivering elite coding benchmarks that survive generations.
                    </p>
                </div>
            </div>

            {/* Core Values - Rotate on Scroll */}
            <section className="relative z-10 reveal-rotate bg-black/60 p-16 rounded-[5rem] border border-white/5 shadow-2xl mt-10">
                <h2 className="text-3xl md:text-5xl font-black uppercase mb-16 tracking-tighter text-center">Operational <span className="gradient-text italic">DNA</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Sovereignty", desc: "Total institutional ownership of data. No lock-ins. Pure autonomy." },
                        { title: "Velocity", desc: "Optimized logical throughput for millions of daily queries." },
                        { title: "Fortress", desc: "Security built into every layer of the technical stack." },
                        { title: "Evolution", desc: "Built with modular cores that rapidly adapt as needs shift." }
                    ].map((item, i) => (
                        <div key={item.title} className="bg-white/5 p-8 rounded-[2rem] border-l-[4px] border-teal hover:scale-110 hover:-translate-y-4 hover:bg-teal/10 transition-all duration-300 cursor-cell" style={{ transitionDelay: `${i * 50}ms` }}>
                            <h4 className="text-xl font-black mb-4 uppercase italic text-white tracking-tighter">{item.title}</h4>
                            <p className="text-[12px] text-gray-400 font-black uppercase tracking-widest leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section >

            {/* Impact - Scale on Scroll */}
            < section className="p-16 bg-gradient-to-br from-[#05161a] to-black rounded-[5rem] overflow-hidden relative z-10 reveal-scale border border-teal/30 hover-pulse-border mt-10" >
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2 flex flex-col gap-10">
                        <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-[0.85]">Global <br /><span className="text-teal underline decoration-white/10 underline-offset-8">Impact</span></h2>
                        <p className="text-xl text-gray-400 font-black tracking-wider leading-relaxed">
                            Connect Berg has systematically digitized the collective memory of prestigious institutions globally.
                        </p>
                        <div className="grid grid-cols-2 gap-10">
                            <div>
                                <div className="text-6xl font-black text-teal mb-3 italic">50+</div>
                                <div className="text-[11px] text-gray-500 font-black uppercase tracking-[0.4em]">Halls of Learning</div>
                            </div>
                            <div>
                                <div className="text-6xl font-black text-lime mb-3 italic">15+</div>
                                <div className="text-[11px] text-gray-500 font-black uppercase tracking-[0.4em]">Nations Impacted</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-8 w-full p-8 bg-black/40 rounded-[4rem] border border-white/5">
                        <div className="h-48 premium-glass rounded-[2rem] flex flex-col items-center justify-center p-8 text-center gap-4 hover:scale-110 transition-transform">
                            <Globe size={40} className="text-teal" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Global Reach</span>
                        </div>
                        <div className="h-48 bg-teal rounded-[2rem] flex flex-col items-center justify-center p-8 text-center gap-4 text-black shadow-[0_0_30px_rgba(0,154,157,0.5)] hover:scale-110 transition-transform">
                            <Shield size={40} />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black">Hardened Core</span>
                        </div>
                        <div className="h-48 bg-lime rounded-[2rem] flex flex-col items-center justify-center p-8 text-center gap-4 text-black shadow-[0_0_30px_rgba(206,224,0,0.5)] hover:scale-110 transition-transform">
                            <Users size={40} />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black">Expert Logic</span>
                        </div>
                        <div className="h-48 premium-glass rounded-[2rem] flex flex-col items-center justify-center p-8 text-center gap-4 border border-teal/30 hover:scale-110 transition-transform">
                            <Database size={40} className="text-teal" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">24/7 Intel</span>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}
