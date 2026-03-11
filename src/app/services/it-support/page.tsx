"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Cloud, Shield, Server, Monitor, HardDrive, Layout, Code, HelpCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ItSupport() {
    const supportServices = [
        { title: "Mirror Server Implementation", desc: "Redundancy and load balancing for high-traffic library systems.", icon: <Server size={24} className="text-teal" /> },
        { title: "Cloud Installation & Management", desc: "AWS, Azure, and Google Cloud hosting for web applications.", icon: <Cloud size={24} className="text-teal" /> },
        { title: "Domain Hosting & SSL Setup", desc: "Secure your brand identity with end-to-end security certificates.", icon: <Shield size={24} className="text-teal" /> },
        { title: "Cloud Backup & OneDrive Sync", desc: "Automated backups to Gmail Drive, OneDrive, and secure cloud buckets.", icon: <HardDrive size={24} className="text-teal" /> },
        { title: "Firewall Security (Ubuntu & OS)", desc: "Securing your data infrastructure with industry-standard firewall policies.", icon: <Lock size={24} className="text-teal" /> },
        { title: "SPSS Analysis", desc: "Data analysis and statistical support for research and projects.", icon: <Layout size={24} className="text-teal" /> },
        { title: "Brochure & UI/UX Design", desc: "Professional graphic and UI design for academic institutions.", icon: <PenTool size={24} className="text-teal" /> },
        { title: "Free Online Training", desc: "Empowering your staff with modern system operation training.", icon: <Monitor size={24} className="text-teal" /> }
    ];

    return (
        <div className="flex flex-col gap-24 pb-24 pt-4 px-6 max-w-7xl mx-auto">
            <Link href="/services" className="flex items-center gap-2 text-teal hover:gap-4 transition-all w-fit font-bold uppercase tracking-widest text-sm mb-8">
                <ArrowLeft size={18} /> Back to Services
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl"
            >
                <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">IT INFRASTRUCTURE & <span className="text-teal uppercase font-black tracking-tighter">SUPPORT</span></h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                    We go beyond software. We build and secure the foundation your operations depend on
                    with expert-level cloud engineering and system security.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {supportServices.map((service, idx) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: (idx % 10) * 0.1 }}
                        viewport={{ once: true }}
                        className="group p-8 glass rounded-[2rem] border border-white/5 hover:border-teal/50 transition-all flex flex-col gap-4"
                    >
                        <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-black tracking-tight mt-4 text-white uppercase italic">{service.title}</h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{service.desc}</p>
                    </motion.div>
                ))}
            </div>

            <section className="bg-navy p-12 rounded-[2rem] border border-teal/20 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-teal/5 blur-3xl rounded-full z-0 pointer-events-none" />
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-6 text-teal uppercase italic font-black">24/7 Elite Tech Support</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Our support desk is always active. Whether it&apos;s a server downtime or a data migration query,
                        our elite coders are just one call away. We provide dedicated virtual staff for institutional maintenance.
                    </p>
                </div>
            </section>

            {/* Security Standards Section */}
            <section className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl font-black uppercase mb-8 italic"><span className="text-teal">Security</span> Hardening</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        We don&apos;t just install software; we secure it. Our Ubuntu-based server environments are hardened with
                        advanced UFW policies, fail2ban for SSH security, and automated SSL certificate renewals.
                    </p>
                    <div className="flex flex-col gap-4">
                        {[
                            "Double Encrypted Backups",
                            "DDoS Protection Layers",
                            "Real-time Access Logs",
                            "Proactive Threat Monitoring"
                        ].map((item) => (
                            <div key={item} className="flex gap-4 items-center font-bold text-white tracking-tight italic">
                                <CheckCircle2 className="text-teal" size={20} /> {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="glass p-12 rounded-[3.5rem] border border-white/5 relative flex flex-col justify-center">
                    <h3 className="text-2xl font-black text-white italic mb-4">Infrastructure Strategy</h3>
                    <p className="text-sm text-gray-300 leading-relaxed italic border-l-2 border-yellow pl-6">
                        &quot;Connecting you to automated libraries means building a foundation that never fails.
                        We architect for redundancy, so your institutional knowledge is always reachable.&quot;
                    </p>
                    <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest font-black">— ConnectBerg Engineering</p>
                </div>
            </section>
        </div>
    );
}

function Lock({ size, className }: { size: number, className: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    )
}

function PenTool({ size, className }: { size: number, className: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="m12 19 7-7 3 3-7 7-3-3Z" /><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" /><path d="m2 2 5 5" /><path d="m8.5 8.5 1.5 1.5" />
        </svg>
    )
}
