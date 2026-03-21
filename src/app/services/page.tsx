"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Book, Database, Layers, Settings, ShieldCheck, Zap, Cog, Server, Code, Lock, Workflow, ScanFace, FileDigit, ChevronDown, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Services() {
    const [showAllCrud, setShowAllCrud] = useState(false);

    const crudServices = [
        "Employee Management", "User Management", "CRM System", "Inventory Logic",
        "Product Management", "Order & Logistics", "Student Mgmt.", "Course Portals",
        "Attendance DB", "Payroll Engine", "Leave Automation", "Project Tracking",
        "Task & Ticketing", "Asset Allocation", "Vendor/Supplier", "RBAC Permissioning",
        "CMS Architecture", "Document Control", "Booking & Reservation", "Appointment Sync",
        "Billing & Invoicing", "Expense Tracking", "Subscription Logic", "Complaint & Feedback",
        "Helpdesk Core", "E-Commerce", "Portfolio Mgmt."
    ];
    return (
        <div className="flex flex-col gap-16 md:gap-32 pb-16 md:pb-32 overflow-hidden bg-background">

            {/* Hero Section */}
            <section className="relative min-h-[55vh] md:min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-20">
                <div className="orb w-[500px] h-[500px] bg-teal/20 -top-48 -right-48" style={{ animation: "float 10s ease-in-out infinite" }} />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(40px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="max-w-5xl w-full flex flex-col items-center text-center gap-10 relative z-10"
                >
                    <span className="text-[12px] font-black uppercase tracking-[0.5em] text-black bg-teal px-8 py-3 rounded-full shadow-[0_0_30px_rgba(0,154,157,0.8)]">Our Arsenal</span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl hero-text leading-[0.85] tracking-tighter">
                        Premium <br /><span className="gradient-text italic teal-glow">Systems</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-2xl text-gray-400 font-bold leading-snug max-w-4xl tracking-tight px-2">
                        ConnectBerg delivers highly-specialized digital automation tools,
                        architected from the ground up for extreme reliability.
                    </p>
                </motion.div>
            </section>

            {/* Service 1: Library Systems */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 reveal-left" id="library-systems">
                <div className="flex flex-col lg:flex-row gap-24 items-center">
                    <div className="lg:w-1/2 flex flex-col gap-12">
                        <div className="flex items-center gap-6">
                            <div className="p-8 bg-black/40 border border-white/10 rounded-[2.5rem] shadow-2xl animate-pulse">
                                <Book size={48} className="text-teal" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Library <span className="text-teal underline decoration-white/10 underline-offset-8">Logic</span></h2>
                        </div>
                        <p className="text-xl text-gray-400 font-bold leading-relaxed tracking-wider">
                            We deploy state-of-the-art Integrated Library Systems (ILS) designed to manage massive
                            bibliographic databases and heavy patron traffic without a millisecond of lag.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { title: "Koha ILS Setup", desc: "End-to-end deployment." },
                                { title: "DSpace Archives", desc: "Institutional repository architecture." },
                                { title: "RFID Integration", desc: "Automated check-in/out." },
                                { title: "Moodle LMS", desc: "Integrated academic hosting." }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-5 group items-start p-4 hover:bg-white/5 rounded-3xl transition-colors cursor-crosshair">
                                    <ShieldCheck size={28} className="text-teal shrink-0 group-hover:scale-[1.5] transition-transform" />
                                    <div>
                                        <h4 className="text-base font-black uppercase tracking-widest text-white">{feature.title}</h4>
                                        <p className="text-[10px] text-gray-500 font-black tracking-widest uppercase mt-2">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full p-8 sm:p-12 md:p-16 premium-glass rounded-[3rem] md:rounded-[5rem] border-white/10 relative overflow-hidden group hover-pulse-border">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal/20 via-transparent to-transparent opacity-60 group-hover:scale-125 transition-transform duration-1000" />
                        <div className="relative z-10 grid grid-cols-2 gap-8">
                            <div className="h-56 bg-black/60 rounded-[3rem] flex flex-col items-center justify-center gap-4 border border-white/10 group-hover:bg-teal/10 transition-colors shadow-inset-deep">
                                <FileDigit size={40} className="text-teal" />
                                <span className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-300">MARC21 Index</span>
                            </div>
                            <div className="h-56 bg-black/60 rounded-[3rem] flex flex-col items-center justify-center gap-4 border border-white/10 group-hover:bg-lime/10 transition-colors shadow-inset-deep">
                                <ScanFace size={40} className="text-lime" />
                                <span className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-300">Patron Auth</span>
                            </div>
                            <div className="col-span-2 h-48 bg-gradient-to-r from-[#05161a] to-black rounded-[3rem] flex flex-col items-center justify-center gap-4 border border-teal/30 group-hover:border-lime/30 group-hover:scale-105 transition-all">
                                <Database size={48} className="text-teal animate-pulse" />
                                <span className="text-sm font-black uppercase tracking-[0.5em] text-white">1M+ Records Cached</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 2: Enterprise CRUD */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 reveal-right bg-gradient-to-l from-black/50 to-transparent p-6 sm:p-10 md:p-10 rounded-[3rem] md:rounded-[5rem] border-r border-white/5" id="crud-systems">
                <div className="flex flex-col lg:flex-row-reverse gap-24 items-center">
                    <div className="lg:w-1/2 flex flex-col gap-12">
                        <div className="flex items-center gap-6">
                            <div className="p-8 bg-black/40 border border-white/10 rounded-[2.5rem] shadow-2xl">
                                <Layers size={48} className="text-lime animate-spin-slow" style={{ animationDuration: "10s" }} />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Enterprise <span className="text-lime underline decoration-white/10 underline-offset-8">Core</span></h2>
                        </div>
                        <p className="text-xl text-gray-400 font-bold leading-relaxed tracking-wider">
                            We engineer bespoke CRUD applications and ERP systems that map to workflows.
                            Custom dashboards and impenetrable RBAC logic.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { title: "Custom CRM", desc: "Track conversions & pipelines." },
                                { title: "HR & Payroll", desc: "Automated attendance generation." },
                                { title: "Inventory Logic", desc: "Real-time stock architecture." },
                                { title: "Project Admin", desc: "Internal task allocation core." }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-5 group items-start p-4 hover:bg-white/5 rounded-3xl transition-colors cursor-crosshair">
                                    <Workflow size={28} className="text-lime shrink-0 group-hover:rotate-180 transition-transform duration-500" />
                                    <div>
                                        <h4 className="text-base font-black uppercase tracking-widest text-white">{feature.title}</h4>
                                        <p className="text-[10px] text-gray-500 font-black tracking-widest uppercase mt-2">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setShowAllCrud(!showAllCrud)}
                            className="mt-6 flex items-center gap-4 bg-lime/10 text-lime font-black uppercase tracking-[0.3em] text-[10px] w-fit px-8 py-4 rounded-full border border-lime/20 hover:bg-lime hover:text-black transition-all group"
                        >
                            {showAllCrud ? "Collapse Arsenal" : "View Full Capability Matrix"}
                            <ChevronDown size={20} className={`transition-transform duration-500 ${showAllCrud ? "rotate-180" : ""}`} />
                        </button>

                        <AnimatePresence>
                            {showAllCrud && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 mt-6 border-t border-white/10">
                                        {crudServices.map((service, idx) => (
                                            <div key={idx} className="flex items-center gap-3 bg-black/40 p-3 rounded-2xl border border-white/5 hover:border-lime/30 group transition-colors">
                                                <CheckCircle2 size={16} className="text-lime/50 group-hover:text-lime transition-colors" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-white transition-colors">{service}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="lg:w-1/2 w-full p-8 sm:p-12 md:p-16 premium-glass rounded-[3rem] md:rounded-[5rem] border border-lime/20 relative overflow-hidden group hover-pulse-border">
                        <div className="absolute inset-0 bg-gradient-to-tr from-lime/20 via-transparent to-transparent opacity-60 group-hover:scale-125 transition-transform duration-1000" />
                        <div className="relative z-10 flex flex-col gap-8">
                            <div className="p-10 bg-[#05161a] rounded-[3rem] border border-white/10 flex items-center justify-between group-hover:bg-lime/5 transition-colors">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-lime animate-pulse">Live Dashboard Feed</span>
                                    <span className="text-4xl font-black text-white italic tracking-tighter">Analytics UI</span>
                                </div>
                                <Zap size={48} className="text-lime" />
                            </div>
                            <div className="flex gap-8">
                                <div className="w-1/2 h-56 bg-black/80 rounded-[3rem] border border-white/10 flex flex-col items-center justify-center p-8 text-center shadow-inset-deep">
                                    <span className="text-6xl font-black text-white italic tracking-tighter">0ms</span>
                                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500 mt-4">Latency Hit</span>
                                </div>
                                <div className="w-1/2 h-56 bg-black/80 rounded-[3rem] border border-white/10 flex flex-col items-center justify-center p-8 text-center shadow-inset-deep">
                                    <span className="text-6xl font-black text-lime italic tracking-tighter">100%</span>
                                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500 mt-4">Data Integrity</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 3: IT Infrastructure */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 reveal-rotate" id="it-support">
                <div className="flex flex-col lg:flex-row gap-24 items-center">
                    <div className="lg:w-1/2 flex flex-col gap-12">
                        <div className="flex items-center gap-6">
                            <div className="p-8 bg-black/40 border border-white/10 rounded-[2.5rem] shadow-2xl">
                                <Settings size={48} className="text-teal animate-spin" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Infra & <span className="gradient-text underline decoration-white/10 underline-offset-8">Ops</span></h2>
                        </div>
                        <p className="text-xl text-gray-400 font-bold leading-relaxed tracking-wider">
                            We provide hardened cloud deployments, mirror configs, and impenetrable firewall setups.
                            We don&apos;t just host; we armor your institutional data against vulnerabilities.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { title: "Cloud Hosting", desc: "Dedicated high-density VPS." },
                                { title: "Mirror Logic", desc: "Local redundancy scaling." },
                                { title: "SSL Security", desc: "End-to-end encryption." },
                                { title: "24/7 Intel", desc: "Priority technical response." }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-5 group items-start p-4 hover:bg-white/5 rounded-3xl transition-colors cursor-crosshair">
                                    <Server size={28} className="text-teal shrink-0 group-hover:-translate-y-2 transition-transform" />
                                    <div>
                                        <h4 className="text-base font-black uppercase tracking-widest text-white">{feature.title}</h4>
                                        <p className="text-[10px] text-gray-500 font-black tracking-widest uppercase mt-2">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full p-8 sm:p-12 md:p-16 premium-glass rounded-[3rem] md:rounded-[5rem] border-teal/20 relative overflow-hidden flex flex-col items-center justify-center hover-pulse-border group">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal/30 via-transparent to-black opacity-50 group-hover:scale-125 transition-transform duration-1000" />
                        <Lock size={120} className="text-teal mb-10 relative z-10 group-hover:scale-110 transition-transform" />
                        <div className="relative z-10 text-center flex flex-col gap-6 w-full">
                            <div className="p-6 bg-black/70 border border-white/10 rounded-3xl flex justify-between items-center w-full shadow-inset-deep">
                                <span className="text-sm font-black uppercase tracking-[0.4em] text-gray-400">Firewall Engine</span>
                                <span className="text-sm font-black uppercase tracking-[0.4em] text-lime">Engaged</span>
                            </div>
                            <div className="p-6 bg-black/70 border border-white/10 rounded-3xl flex justify-between items-center w-full shadow-inset-deep">
                                <span className="text-sm font-black uppercase tracking-[0.4em] text-gray-400">Cypher Block</span>
                                <span className="text-sm font-black uppercase tracking-[0.4em] text-teal">AES-256</span>
                            </div>
                            <div className="p-6 bg-black/70 border border-white/10 rounded-3xl flex justify-between items-center w-full shadow-inset-deep">
                                <span className="text-sm font-black uppercase tracking-[0.4em] text-gray-400">Node Array</span>
                                <span className="text-sm font-black uppercase tracking-[0.4em] text-lime">Secured</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Marquee */}
            <section className="w-full relative py-16 md:py-32 overflow-hidden bg-black/50 border-y border-white/5 reveal-blur">
                <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                    <h3 className="text-4xl font-black uppercase italic tracking-[0.3em] text-gray-500 drop-shadow-lg">The Execution Stack</h3>
                </div>
                <div className="flex w-[200%] gap-20 py-10 items-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-105" style={{ animation: "marquee 40s linear infinite" }}>
                    {["Next.js", "React", "PostgreSQL", "Linux", "Apache", "Nginx", "Koha", "DSpace", "PHP", "Node.js", "Ruby", "Docker", "AWS", "Security"].map((tech, idx) => (
                        <div key={idx} className="flex items-center gap-5 text-4xl md:text-5xl font-black uppercase tracking-tighter italic">
                            <Code size={40} className="text-teal" /> <span className="gradient-text">{tech}</span>
                        </div>
                    ))}
                    {["Next.js", "React", "PostgreSQL", "Linux", "Apache", "Nginx", "Koha", "DSpace", "PHP", "Node.js", "Ruby", "Docker", "AWS", "Security"].map((tech, idx) => (
                        <div key={`dup-${idx}`} className="flex items-center gap-5 text-4xl md:text-5xl font-black uppercase tracking-tighter italic">
                            <Code size={40} className="text-teal" /> <span className="gradient-text">{tech}</span>
                        </div>
                    ))}
                </div>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                `}} />
            </section>

            {/* CTA */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 md:pt-32 relative z-10 reveal-up">
                <div className="relative p-8 sm:p-14 md:p-24 premium-glass rounded-[3rem] md:rounded-[6rem] text-center overflow-hidden group border-teal/20 flex flex-col items-center hover-pulse-border cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal/20 via-transparent to-lime/10 opacity-50 pointer-events-none group-hover:scale-125 transition-transform duration-1000" />
                    <h2 className="relative z-10 text-3xl sm:text-5xl md:text-7xl font-black uppercase italic leading-[0.85] tracking-tighter mb-6 md:mb-10 pointer-events-none drop-shadow-2xl">
                        Deploy <br /><span className="gradient-text underline decoration-white/10 underline-offset-8">Infrastructure?</span>
                    </h2>
                    <p className="relative z-10 text-sm sm:text-xl md:text-3xl text-gray-300 mb-8 md:mb-14 max-w-2xl mx-auto font-black uppercase tracking-wider pointer-events-none">
                        Architect your institution&apos;s digital backbone today.
                    </p>
                    <Link href="/contact" className="relative z-10 px-10 py-6 md:px-16 md:py-8 bg-teal text-black rounded-full font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-sm md:text-lg hover:scale-110 hover:bg-lime active:scale-95 transition-all shadow-[0_0_50px_rgba(0,154,157,0.5)] inline-block cursor-pointer">
                        Consult Engineers
                    </Link>
                </div>
            </section>
        </div>
    );
}
