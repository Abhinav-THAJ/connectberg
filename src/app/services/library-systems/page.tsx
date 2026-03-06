"use client";

import { motion } from "framer-motion";
import { Book, Database, Layers, Monitor, Shield, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LibrarySystems() {
    const libraryServices = [
        { title: "Koha Library Automation", description: "The world's most advanced open-source ILS used by libraries worldwide." },
        { title: "Digital Repositories (DSpace)", description: "Secure, scalable, and searchable digital archive implementation." },
        { title: "Greenstone & Omeka", description: "Specialized software for cultural heritage digital collections." },
        { title: "Moodle LMS", description: "E-learning platforms tailored for academic institutions." },
        { title: "Open Journal Systems (OJS)", description: "Complete publishing workflows for scholarly journals." }
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
                <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">LIBRARY & <span className="text-teal">COLLECTIONS</span></h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                    Automating libraries is our core strength. We provide end-to-end implementation,
                    customization, data migration, and comprehensive training for schools,
                    universities, and research institutions.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {libraryServices.map((service, idx) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 glass rounded-3xl border border-teal/10 hover:border-teal/30 flex gap-6 items-start"
                    >
                        <div className="p-3 bg-teal/10 rounded-xl">
                            <CheckCircle2 className="text-teal" size={24} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <section className="bg-navy p-12 rounded-[2rem] border border-teal/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h4 className="text-teal font-black uppercase text-xl mb-4 italic">Installation</h4>
                        <p className="text-sm text-gray-400">Expert setup of server environments on Linux (Ubuntu/Debian) and Windows Server for maximum performance.</p>
                    </div>
                    <div>
                        <h4 className="text-teal font-black uppercase text-xl mb-4 italic">Migration</h4>
                        <p className="text-sm text-gray-400">Seamlessly move data from legacy systems like Alice, LibSys, or spreadsheets to modern ILS platforms.</p>
                    </div>
                    <div>
                        <h4 className="text-teal font-black uppercase text-xl mb-4 italic">Training</h4>
                        <p className="text-sm text-gray-400">On-site and remote training modules covering Cataloging, Circulation, and Serials Management.</p>
                    </div>
                </div>
            </section>

            {/* Technical Power Section */}
            <section className="bg-white/5 p-12 rounded-[3.5rem] border border-white/5">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl font-black uppercase mb-4 leading-none text-teal">Technical <br /> Powerhouse</h2>
                        <div className="h-1 w-20 bg-yellow mb-6" />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We utilize the latest stable releases of Koha and DSpace, ensuring your repository stays
                            ahead of the digital curve. Our systems are optimized for web-scale discovery.
                        </p>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: "Z39.50/SRU", desc: "Global standards for metadata retrieval and information exchange." },
                            { title: "MARC21 Support", desc: "Full cataloging capabilities supporting international library standards." },
                            { title: "OAI-PMH", desc: "Interoperability for metadata harvesting across repository systems." },
                            { title: "RFID Ready", desc: "Pre-configured modules for RFID hardware and self-checkout kiosks." }
                        ].map((tech) => (
                            <div key={tech.title} className="p-6 glass rounded-2xl border border-white/10 hover:border-teal/30">
                                <h4 className="font-bold text-white mb-2">{tech.title}</h4>
                                <p className="text-xs text-gray-400 leading-relaxed">{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* RFID Hardware Integration Section */}
            <section className="max-w-7xl mx-auto w-full py-24 glass border border-white/10 rounded-[4rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(206,224,0,0.05)_0%,_transparent_60%)]" />
                <div className="relative z-10 px-12 flex flex-col items-center text-center">
                    <span className="text-sm font-black uppercase tracking-[0.4em] text-yellow mb-4 underline decoration-2 decoration-yellow underline-offset-8">Hardware Ecosystem</span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 italic leading-tight">Total <span className="text-teal">Automation</span> Control</h2>
                    <p className="max-w-3xl text-gray-400 mb-16 leading-relaxed">
                        We don't just provide software; we manage the entire physical integration phase. From custom RFID hardware procurement
                        to Kiosk configuration and self-checkout stations, we bring the physical library and digital system into one seamless workflow.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
                        {[
                            { name: "RFID Tags", desc: "Long-range high-frequency tags for book tracking." },
                            { name: "Desktop Readers", desc: "For staff stations to automate circulation desks." },
                            { name: "Security Gates", desc: "Anti-theft gates with real-time ILS synchronization." },
                            { name: "Self-Check Kiosks", desc: "24/7 autonomous borrowing and return stations." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 border border-white/5 rounded-3xl bg-black transition-all hover:bg-teal group">
                                <h4 className="text-lg font-black uppercase italic mb-2 tracking-tighter group-hover:text-black transition-colors">{item.name}</h4>
                                <p className="text-[10px] text-gray-500 group-hover:text-black/80 transition-colors uppercase font-bold tracking-widest">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-3xl mx-auto text-center py-12">
                <h3 className="text-2xl font-black uppercase italic mb-4">Interoperability Standards</h3>
                <p className="text-sm text-gray-400 leading-relaxed italic border-x border-teal px-8">
                    ConnectBerg implementations strictly adhere to NCIP v2.0, SIP2, and ISO 28560 protocols for
                    hardware-to-software communication, ensuring your library is future-proof.
                </p>
            </section>
        </div>
    );
}
