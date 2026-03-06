"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Book, Database, Layers, Shield, ZapIcon, Lock, Activity } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Library Automation",
    description: "End-to-end Koha ILS implementation, RFID integration, and secure patron frameworks.",
    icon: <Book className="text-teal" size={32} />,
    stats: "200+ Libraries",
    tags: ["Koha", "RFID", "OPAC Custom"]
  },
  {
    title: "Digital Repositories",
    description: "Industrial-grade DSpace & Eprints hosting with specialized data harvesting.",
    icon: <Database className="text-lime" size={32} />,
    stats: "1M+ Records",
    tags: ["DSpace", "OJS", "Metadata"]
  },
  {
    title: "Enterprise CRUD",
    description: "Custom management systems for HR, Inventory, and CRM needs. Scalable architecture.",
    icon: <Layers className="text-teal" size={32} />,
    stats: "50+ Systems",
    tags: ["Custom UI", "RBAC", "Cloud Core"]
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-32 pb-32 overflow-hidden bg-background">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-10">
        <div className="max-w-7xl w-full flex flex-col items-center text-center gap-8 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: -50, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1.2 }}
            className="px-6 py-2.5 premium-glass rounded-full border border-white/10 shadow-2xl"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.4em] gradient-text teal-glow">
              Institutional Excellence • v5.0
            </span>
          </motion.div>

          <motion.h1
            initial={{ scale: 0.5, opacity: 0, filter: "blur(20px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hero-text text-[clamp(3rem,6vw,6rem)] leading-[0.8] mb-4"
          >
            Digital <br />
            <span className="gradient-text italic teal-glow">Sovereignty</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg md:text-2xl text-gray-400 max-w-4xl leading-tight font-bold"
          >
            ConnectBerg delivers <span className="text-teal font-black italic underline decoration-white/10 underline-offset-4">High-Throughput Intelligence</span> for
            global libraries and scaled enterprise management ecosystems.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-5 mt-4"
          >
            <Link
              href="/services"
              className="px-10 py-5 bg-teal text-black font-black uppercase tracking-[0.3em] text-[11px] rounded-2xl shadow-xl flex items-center gap-3 hover:scale-110 transition-all hover-pulse-border"
            >
              The Arsenal <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 premium-glass border border-white/10 transition-all font-black uppercase tracking-[0.3em] text-[11px] rounded-2xl hover:bg-white/10 hover:scale-105"
            >
              Initiate Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Core systems Grid - Heavy Rotate Reveal */}
      <section className="max-w-7xl mx-auto px-6 w-full relative z-10 reveal-rotate">
        <div className="mb-24 flex flex-col items-center text-center gap-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Core <span className="gradient-text italic">Engines</span></h2>
          <p className="text-teal font-black uppercase tracking-[0.4em] text-[11px]">Proprietary Automation Frameworks</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`group p-12 premium-glass rounded-[3.5rem] relative overflow-hidden flex flex-col items-center text-center border border-white/5 hover-pulse-border transition-all duration-500`}
            >
              <div className="p-8 bg-black/40 rounded-[2rem] w-fit mb-10 group-hover:bg-teal/20 transition-all shadow-[0_0_40px_-10px_rgba(0,154,157,0.3)] duration-500 group-hover:scale-110 group-hover:rotate-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-5 uppercase tracking-tighter italic leading-none">{service.title}</h3>
              <p className="text-gray-400 mb-10 text-[13px] leading-relaxed font-bold">
                {service.description}
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 border border-white/10 bg-black/50 rounded-full text-gray-500 group-hover:text-teal group-hover:border-teal/30 transition-all">{tag}</span>
                ))}
              </div>
              <div className="flex items-center justify-between w-full mt-auto pt-6 border-t border-white/5 group-hover:border-white/20 transition-all">
                <span className="text-white font-black uppercase text-[9px] tracking-[0.3em] bg-white/5 px-5 py-2.5 rounded-full">{service.stats}</span>
                <Link href="/services" className="text-teal bg-teal/10 p-3 rounded-full hover:bg-teal hover:text-black transition-all transform hover:scale-110">
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security Showcase - Slide Dual Direction */}
      <section className="w-full relative py-40 overflow-hidden bg-black/60 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div className="flex flex-col gap-10 reveal-left">
            <span className="text-lime font-black uppercase tracking-[0.5em] text-[10px] bg-lime/10 w-fit px-4 py-2 rounded-lg border border-lime/20 shadow-[0_0_20px_rgba(206,224,0,0.2)]">Security Protocols</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.85] tracking-tighter">
              Hardened <br /><span className="gradient-text italic">Fortress</span>
            </h2>
            <p className="text-lg text-gray-400 font-bold leading-relaxed max-w-lg">
              Integrity is absolute. We implement military-grade encryption,
              redundant mirroring, and zero-trust logic for all repositories.
            </p>
            <div className="flex flex-col gap-6 mt-4">
              {[
                { i: <Lock size={20} />, t: "AES-256 ENCRYPTION", d: "Standard on all database logic." },
                { i: <Shield size={20} />, t: "ZERO-FAIL UPTIME", d: "Geographically hardened mirrors." },
                { i: <Activity size={20} />, t: "PROACTIVE AUDIT", d: "Constant internal scanning." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group items-center p-4 rounded-3xl hover:bg-white/5 transition-all cursor-crosshair">
                  <div className="shrink-0 p-4 bg-teal/10 rounded-[1.5rem] group-hover:bg-teal group-hover:text-black text-teal transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                    {item.i}
                  </div>
                  <div>
                    <h4 className="text-lg font-black italic uppercase tracking-tighter group-hover:text-teal transition-colors">{item.t}</h4>
                    <p className="text-gray-500 font-black text-[10px] uppercase tracking-widest mt-1 group-hover:text-gray-300">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative p-12 premium-glass rounded-[4rem] group overflow-hidden shadow-2xl border-teal/20 reveal-right hover-pulse-border cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/20 via-transparent to-lime/10 opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col gap-10 items-center text-center">
              <div className="relative">
                <ZapIcon size={56} className="text-teal relative z-10 animate-bounce" />
                <div className="absolute inset-0 bg-teal blur-[30px] opacity-40 animate-pulse" />
              </div>
              <div className="w-full bg-black/80 rounded-[3rem] border border-white/10 p-10 flex flex-col gap-6 justify-center shadow-inset-deep">
                <div className="flex justify-between items-center w-full">
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">Node Status</span>
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-lime animate-pulse">Online</span>
                </div>
                <div className="h-4 w-full bg-teal/10 rounded-full overflow-hidden p-0.5">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "92%" }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-teal to-lime rounded-full shadow-[0_0_20px_rgba(0,154,157,0.8)]"
                  />
                </div>
                <p className="text-gray-400 font-black italic uppercase tracking-[0.3em] text-[10px]">Processing Records: 1,847,203...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Method - Heavy Blur Reveal */}
      <section className="max-w-7xl mx-auto px-6 w-full space-y-24 reveal-blur pt-20">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">THE <span className="gradient-text">METHOD</span></h2>
          <p className="text-gray-500 font-black uppercase tracking-[0.4em] text-[11px] border border-white/10 inline-block px-6 py-2 rounded-full bg-white/5">Deployment Workflow</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: "01", t: "AUDIT", d: "Legacy evaluation & risk assessment." },
            { n: "02", t: "ENGINEER", d: "Bespoke logic & custom UI generation." },
            { n: "03", t: "MIGRATE", d: "Zero-loss data transfer protocol." },
            { n: "04", t: "OPERATE", d: "24/7 technical surveillance." }
          ].map((step, i) => (
            <div key={i} className={`flex flex-col gap-6 p-10 premium-glass rounded-[3rem] group hover:bg-teal/5 transition-all text-center hover-pulse-border cursor-pointer relative overflow-hidden`} style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal/10 rounded-full filter blur-2xl group-hover:bg-lime/20 transition-colors" />
              <span className="text-6xl font-black gradient-text opacity-20 group-hover:opacity-100 group-hover:scale-125 transition-all relative z-10">{step.n}</span>
              <div className="space-y-4 relative z-10">
                <h4 className="text-2xl font-black uppercase italic tracking-tighter text-white">{step.t}</h4>
                <p className="text-gray-400 font-bold text-[11px] uppercase tracking-widest leading-relaxed">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section >

      {/* Metrics - Scale on Scroll */}
      < section className="max-w-7xl mx-auto px-6 w-full text-center reveal-scale py-20" >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 bg-black/40 p-16 rounded-[4rem] border border-white/5 shadow-2xl">
          {[
            { v: "500K+", l: "MIGRATED RECORDS", c: "text-teal" },
            { v: "100%", l: "SYSTEM UPTIME", c: "text-lime" },
            { v: "24/7", l: "EXPERT ASSISTANCE", c: "text-teal" },
            { v: "15+", l: "COUNTRIES SERVED", c: "text-white" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-5 hover:scale-110 transition-transform duration-500 cursor-cell">
              <div className={`text-4xl md:text-6xl font-black uppercase tracking-tighter ${stat.c} italic drop-shadow-2xl`}>{stat.v}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">{stat.l}</div>
            </div>
          ))}
        </div>
      </section >

      {/* CTA - Slide Up Deep */}
      < section className="max-w-6xl mx-auto px-6 py-20 relative z-10 overflow-hidden" style={{ minHeight: "600px" }
      }>
        <div className="relative p-24 bg-gradient-to-br from-black to-[#05161a] rounded-[5rem] text-center overflow-hidden group border border-teal/30 reveal-up hover-pulse-border flex flex-col items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-teal/20 via-transparent to-lime/10 opacity-50 pointer-events-none group-hover:scale-110 transition-transform duration-1000" />

          <div className="relative z-10 mb-6 p-5 bg-teal/10 rounded-full animate-bounce">
            <ZapIcon size={40} className="text-lime" />
          </div>

          <h2 className="relative z-10 text-4xl md:text-6xl font-black uppercase italic leading-[0.8] tracking-tighter mb-10 pointer-events-none">
            Ready <br /><span className="gradient-text underline decoration-white/10 underline-offset-8">Operate?</span>
          </h2>
          <p className="relative z-10 text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-black uppercase tracking-wider pointer-events-none">
            Initiate your digital transformation today. Stop waiting. Start building.
          </p>
          <Link href="/contact" className="relative z-10 px-16 py-8 bg-teal text-black rounded-full font-black uppercase tracking-[0.4em] text-[14px] hover:scale-[1.15] hover:bg-lime active:scale-95 transition-all shadow-[0_0_40px_rgba(0,154,157,0.6)] inline-block cursor-pointer">
            Get Mission Started
          </Link>
        </div>
      </section >

    </div >
  );
}
