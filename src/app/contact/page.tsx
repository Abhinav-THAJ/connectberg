"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Mission request received. (Demo)");
    };

    return (
        <div className="flex flex-col gap-32 pb-32 px-6 max-w-7xl mx-auto mt-20 relative overflow-hidden">

            <div className="orb w-[500px] h-[500px] bg-teal/20 -top-20 -left-60" style={{ animation: "float 10s infinite" }} />
            <div className="orb w-[600px] h-[600px] bg-lime/10 bottom-0 -right-60" style={{ animation: "float 15s infinite reverse" }} />

            <motion.div
                initial={{ opacity: 0, y: -40, scale: 0.9, filter: "blur(20px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-center max-w-5xl mx-auto relative z-10 flex flex-col items-center"
            >
                <div className="bg-teal/10 px-6 py-2 rounded-full border border-teal/20 mb-6">
                    <span className="text-teal font-black uppercase tracking-[0.5em] text-[10px]">Direct Channel</span>
                </div>
                <h1 className="text-4xl md:text-7xl hero-text mb-6 italic tracking-tighter leading-[0.8]">
                    Initiate <br /><span className="gradient-text teal-glow">Contact</span>
                </h1>
                <p className="text-xl md:text-3xl text-gray-400 font-bold leading-snug max-w-3xl mx-auto">
                    Ready to operationalize your institutional data?
                    Our engineering unit is standing by.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 mt-10">
                <div className="flex flex-col gap-16 reveal-left">
                    <div className="flex flex-col gap-10">
                        <h2 className="text-2xl md:text-4xl font-black uppercase text-white italic tracking-tighter drop-shadow-lg">Operational Hubs</h2>
                        <div className="flex gap-8 items-start group hover:bg-white/5 p-4 rounded-[2rem] transition-colors cursor-crosshair">
                            <div className="p-5 premium-glass rounded-2xl group-hover:bg-teal group-hover:text-black text-teal transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                                <Mail size={28} />
                            </div>
                            <div>
                                <h4 className="font-black text-gray-500 text-[10px] uppercase tracking-[0.5em] mb-2">Secure Link</h4>
                                <p className="text-2xl font-black text-white italic tracking-tighter underline decoration-white/10 underline-offset-6 group-hover:text-teal transition-colors">connectberg@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-8 items-start group hover:bg-white/5 p-4 rounded-[2rem] transition-colors cursor-crosshair">
                            <div className="p-5 premium-glass rounded-2xl group-hover:bg-teal group-hover:text-black text-teal transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
                                <Phone size={28} />
                            </div>
                            <div>
                                <h4 className="font-black text-gray-500 text-[10px] uppercase tracking-[0.5em] mb-2">Direct Line</h4>
                                <p className="text-2xl font-black text-white italic tracking-tighter leading-tight group-hover:text-teal transition-colors">
                                    +91 8891511635<br />
                                    +91 8907223344
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-8 items-start group hover:bg-white/5 p-4 rounded-[2rem] transition-colors cursor-crosshair">
                            <div className="p-5 premium-glass rounded-2xl group-hover:bg-teal group-hover:text-black text-teal transition-all duration-300 group-hover:scale-110 group-hover:rotate-[20deg]">
                                <MapPin size={28} />
                            </div>
                            <div>
                                <h4 className="font-black text-gray-500 text-[10px] uppercase tracking-[0.5em] mb-2">Registry Office</h4>
                                <p className="text-[15px] text-gray-300 font-bold leading-relaxed tracking-wide group-hover:text-white transition-colors">
                                    Bldg. 29/184, Nedumangad P.O,<br />
                                    Thiruvananthapuram, Kerala,<br />
                                    India - 695541
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 bg-black/50 rounded-[4rem] border border-white/5 flex flex-col gap-6 shadow-2xl hover-pulse-border cursor-pointer group">
                        <h3 className="font-black italic text-teal text-xl uppercase tracking-tighter text-glow group-hover:scale-105 transition-transform origin-left">Elite 24/7 Intel</h3>
                        <p className="text-gray-400 font-bold text-base leading-relaxed tracking-wider group-hover:text-white transition-colors">Priority response protocol for all verified institutional deployments.</p>
                        <a href="https://wa.me/918891511635" target="_blank" className="flex items-center gap-3 text-lime font-black uppercase tracking-[0.3em] text-[10px] bg-lime/10 w-fit px-6 py-3 rounded-full border border-lime/20 hover:gap-6 hover:bg-lime hover:text-black transition-all duration-300 mt-4 shadow-[0_0_20px_rgba(206,224,0,0.3)]">
                            Live WhatsApp Protocol <MessageCircle size={22} />
                        </a>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="premium-glass p-14 rounded-[5rem] flex flex-col gap-10 border-teal/30 shadow-[0_0_60px_rgba(0,154,157,0.15)] reveal-right hover-pulse-border bg-gradient-to-br from-black/80 to-[#05161a]"
                >
                    <div className="flex flex-col gap-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.5em] text-teal ml-6">Identifier / Name</label>
                        <input
                            type="text"
                            placeholder="OPERATOR NAME"
                            className="bg-black/60 border border-white/10 rounded-[2rem] p-6 outline-none hover:border-teal/50 focus:border-teal focus:bg-white/5 focus:shadow-[0_0_30px_rgba(0,154,157,0.2)] transition-all text-white font-black uppercase tracking-widest placeholder:text-gray-700 text-sm shadow-inset-deep"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.5em] text-teal ml-6">Communication Portal</label>
                        <input
                            type="email"
                            placeholder="COMMUNICATIONS@PORTAL.COM"
                            className="bg-black/60 border border-white/10 rounded-[2rem] p-6 outline-none hover:border-teal/50 focus:border-teal focus:bg-white/5 focus:shadow-[0_0_30px_rgba(0,154,157,0.2)] transition-all text-white font-black uppercase tracking-widest placeholder:text-gray-700 text-sm shadow-inset-deep"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.5em] text-teal ml-6">Objective / Message</label>
                        <textarea
                            rows={5}
                            placeholder="DESCRIBE PROJECT MISSION..."
                            className="bg-black/60 border border-white/10 rounded-[2rem] p-6 outline-none hover:border-teal/50 focus:border-teal focus:bg-white/5 focus:shadow-[0_0_30px_rgba(0,154,157,0.2)] transition-all text-white font-black uppercase tracking-widest placeholder:text-gray-700 resize-none text-sm shadow-inset-deep"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-teal text-black font-black uppercase tracking-[0.4em] p-8 rounded-full flex items-center justify-center gap-5 hover:scale-[1.05] hover:bg-lime active:scale-95 transition-all text-lg shadow-[0_0_40px_rgba(0,154,157,0.4)] mt-4">
                        Submit Objective <Send size={24} />
                    </button>
                </form>
            </div>
        </div>
    );
}
