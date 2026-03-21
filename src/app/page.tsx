"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Book, Database, Layers, Shield, ZapIcon, Lock, Activity, Hexagon } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedCounter } from "../components/AnimatedCounter";

const HERO_WORDS = ["Sovereignty", "Intelligence", "Automation", "Excellence"];

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
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % HERO_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rotateGear = useTransform(scrollYProgress, [0, 1], [0, 360]);

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-16 md:gap-32 pb-16 md:pb-32 overflow-hidden bg-background">

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal to-lime origin-left z-[1000] shadow-[0_0_20px_rgba(0,154,157,0.8)]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-24 md:pt-10 pb-8">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-7xl w-full flex flex-col items-center text-center gap-5 md:gap-8 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: -50, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1.2 }}
            className="px-4 py-2 premium-glass rounded-full border border-white/10 shadow-2xl"
          >
            <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] gradient-text teal-glow">
              Institutional Excellence • v5.0
            </span>
          </motion.div>

          <motion.h1
            initial={{ scale: 0.5, opacity: 0, filter: "blur(20px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hero-text text-[clamp(2.8rem,10vw,6rem)] leading-[0.85] mb-2 flex flex-col items-center justify-center w-full"
          >
            <span>Digital</span>
            <div className="h-[1.2em] overflow-hidden relative w-full text-center mt-2 pt-1">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentWord}
                  initial={{ y: "150%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-150%", opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="gradient-text italic teal-glow w-full flex justify-center"
                >
                  {HERO_WORDS[currentWord]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-base sm:text-lg md:text-2xl text-gray-400 max-w-4xl leading-snug font-bold px-2"
          >
            ConnectBerg delivers <span className="text-teal font-black italic underline decoration-white/10 underline-offset-4">High-Throughput Intelligence</span> for
            global libraries and scaled enterprise management ecosystems.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-2 w-full px-4"
          >
            <Link
              href="/services"
              className="px-8 py-4 bg-teal text-black font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[11px] rounded-2xl shadow-xl flex items-center justify-center gap-3 hover:scale-105 transition-all hover-pulse-border"
            >
              The Arsenal <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 premium-glass border border-white/10 transition-all font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[11px] rounded-2xl hover:bg-white/10 hover:scale-105 text-center"
            >
              Initiate Project
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Core systems Grid - Heavy Rotate Reveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 reveal-rotate">
        <div className="mb-10 md:mb-24 flex flex-col items-center text-center gap-3">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black uppercase tracking-tighter">Core <span className="gradient-text italic">Engines</span></h2>
          <p className="text-teal font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-[11px]">Proprietary Automation Frameworks</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {services.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.7, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -15, scale: 1.02 }}
              key={service.title}
              className={`group p-6 sm:p-8 md:p-12 premium-glass rounded-[2rem] md:rounded-[3.5rem] relative overflow-hidden flex flex-col items-center text-center border border-white/5 hover-pulse-border transition-all duration-500 shadow-2xl`}
            >
              <div className="p-5 md:p-8 bg-black/40 rounded-[1.5rem] md:rounded-[2rem] w-fit mb-6 md:mb-10 group-hover:bg-teal/20 transition-all shadow-[0_0_40px_-10px_rgba(0,154,157,0.3)] duration-500 group-hover:scale-110 group-hover:rotate-6">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-4 uppercase tracking-tighter italic leading-none">{service.title}</h3>
              <p className="text-gray-400 mb-6 text-[13px] leading-relaxed font-bold">
                {service.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 border border-white/10 bg-black/50 rounded-full text-gray-500 group-hover:text-teal group-hover:border-teal/30 transition-all">{tag}</span>
                ))}
              </div>
              <div className="flex items-center justify-between w-full mt-auto pt-5 border-t border-white/5 group-hover:border-white/20 transition-all">
                <span className="text-white font-black uppercase text-[9px] tracking-[0.2em] sm:tracking-[0.3em] bg-white/5 px-4 py-2 rounded-full">{service.stats}</span>
                <Link href="/services" className="text-teal bg-teal/10 p-3 rounded-full hover:bg-teal hover:text-black transition-all transform hover:scale-110">
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Security Showcase - Slide Dual Direction */}
      <section className="w-full relative py-12 md:py-40 overflow-hidden bg-black/60 border-y border-white/5">
        <motion.div style={{ y: parallaxY }} className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
          <Hexagon size={800} className="text-teal animate-[spin_50s_linear_infinite]" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 md:gap-10"
          >
            <span className="text-lime font-black uppercase tracking-[0.4em] text-[10px] bg-lime/10 w-fit px-4 py-2 rounded-lg border border-lime/20 shadow-[0_0_20px_rgba(206,224,0,0.2)]">Security Protocols</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.85] tracking-tighter">
              Hardened <br /><span className="gradient-text italic">Fortress</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 font-bold leading-relaxed max-w-lg">
              Integrity is absolute. We implement military-grade encryption,
              redundant mirroring, and zero-trust logic for all repositories.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              {[
                { i: <Lock size={18} />, t: "AES-256 ENCRYPTION", d: "Standard on all database logic." },
                { i: <Shield size={18} />, t: "ZERO-FAIL UPTIME", d: "Geographically hardened mirrors." },
                { i: <Activity size={18} />, t: "PROACTIVE AUDIT", d: "Constant internal scanning." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group items-center p-3 sm:p-4 rounded-3xl hover:bg-white/5 transition-all cursor-crosshair">
                  <div className="shrink-0 p-3 sm:p-4 bg-teal/10 rounded-[1.5rem] group-hover:bg-teal group-hover:text-black text-teal transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                    {item.i}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-lg font-black italic uppercase tracking-tighter group-hover:text-teal transition-colors">{item.t}</h4>
                    <p className="text-gray-500 font-black text-[10px] uppercase tracking-widest mt-1 group-hover:text-gray-300">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring" }}
            whileHover={{ scale: 1.05, rotateZ: 2 }}
            className="relative p-6 sm:p-8 md:p-12 premium-glass rounded-[2.5rem] md:rounded-[4rem] group overflow-hidden shadow-2xl border-teal/20 hover-pulse-border cursor-pointer perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal/20 via-transparent to-lime/10 opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col gap-6 md:gap-10 items-center text-center">
              <div className="relative">
                <ZapIcon size={48} className="text-teal relative z-10 animate-bounce" />
                <div className="absolute inset-0 bg-teal blur-[30px] opacity-40 animate-pulse" />
              </div>
              <div className="w-full bg-black/80 rounded-[2rem] sm:rounded-[3rem] border border-white/10 p-6 sm:p-10 flex flex-col gap-5 justify-center shadow-inset-deep">
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
                <p className="text-gray-400 font-black italic uppercase tracking-[0.3em] text-[9px] sm:text-[10px]">Processing Records: 1,847,203...</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Method - Heavy Blur Reveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full space-y-10 md:space-y-24 pt-6 md:pt-20">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">THE <span className="gradient-text">METHOD</span></h2>
          <p className="text-gray-500 font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-[11px] border border-white/10 inline-block px-5 py-2 rounded-full bg-white/5">Deployment Workflow</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            { n: "01", t: "AUDIT", d: "Legacy evaluation & risk assessment." },
            { n: "02", t: "ENGINEER", d: "Bespoke logic & custom UI generation." },
            { n: "03", t: "MIGRATE", d: "Zero-loss data transfer protocol." },
            { n: "04", t: "OPERATE", d: "24/7 technical surveillance." }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, filter: "blur(20px)", scale: 0.8 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`flex flex-col gap-4 p-5 sm:p-8 md:p-10 premium-glass rounded-[1.5rem] md:rounded-[3rem] group hover:bg-teal/5 transition-all text-center hover-pulse-border cursor-pointer relative overflow-hidden`}
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal/10 rounded-full filter blur-2xl group-hover:bg-lime/20 transition-colors" />
              <span className="text-4xl sm:text-6xl font-black gradient-text opacity-20 group-hover:opacity-100 group-hover:scale-125 transition-all relative z-10">{step.n}</span>
              <div className="space-y-2 sm:space-y-4 relative z-10">
                <h4 className="text-lg sm:text-2xl font-black uppercase italic tracking-tighter text-white">{step.t}</h4>
                <p className="text-gray-400 font-bold text-[10px] sm:text-[11px] uppercase tracking-widest leading-relaxed">{step.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Infinite Marquee - Trusted By */}
      <section className="w-full py-10 md:py-20 border-y border-white/5 bg-black/40 overflow-hidden relative reveal-up">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
        <div className="mb-5 md:mb-10 text-center relative z-20">
          <p className="text-gray-500 font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-[11px] mb-2">Trusted By Global Institutions</p>
        </div>
        <div className="flex w-[400%] sm:w-[200%] md:w-[150%] animate-marquee">
          <div className="flex w-1/2 justify-around items-center px-4">
            {["University of Oxford", "Stanford D-School", "MIT Libraries", "CERN Repository", "Tokyo Tech", "Harvard Dataverse"].map((name, i) => (
              <span key={i} className="text-base sm:text-xl md:text-3xl font-black uppercase tracking-widest text-gray-500 whitespace-nowrap opacity-50 hover:opacity-100 hover:text-teal hover:scale-110 transition-all cursor-crosshair px-4 sm:px-6 md:px-8">
                {name}
              </span>
            ))}
          </div>
          <div className="flex w-1/2 justify-around items-center px-4">
            {["University of Oxford", "Stanford D-School", "MIT Libraries", "CERN Repository", "Tokyo Tech", "Harvard Dataverse"].map((name, i) => (
              <span key={`dup-${i}`} className="text-base sm:text-xl md:text-3xl font-black uppercase tracking-widest text-gray-500 whitespace-nowrap opacity-50 hover:opacity-100 hover:text-teal hover:scale-110 transition-all cursor-crosshair px-4 sm:px-6 md:px-8">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics - Scale on Scroll */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full text-center py-8 md:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-12 bg-black/40 p-6 sm:p-10 md:p-16 rounded-[1.5rem] sm:rounded-[2.5rem] md:rounded-[4rem] border border-white/5 shadow-2xl"
        >
          {[
            { v: 500, suf: "K+", l: "MIGRATED RECORDS", c: "text-teal" },
            { v: 100, suf: "%", l: "SYSTEM UPTIME", c: "text-lime" },
            { v: 24, suf: "/7", l: "EXPERT ASSISTANCE", c: "text-teal" },
            { v: 15, suf: "+", l: "COUNTRIES SERVED", c: "text-white" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2 md:gap-5 hover:scale-110 transition-transform duration-500 cursor-cell">
              <AnimatedCounter value={stat.v} suffix={stat.suf} className={`text-2xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter ${stat.c} italic drop-shadow-2xl`} />
              <div className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.4em] text-gray-500 leading-tight">{stat.l}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA - Slide Up Deep */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-20 relative z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-8 sm:p-12 md:p-24 bg-gradient-to-br from-black to-[#05161a] rounded-[2.5rem] md:rounded-[5rem] text-center overflow-hidden group border border-teal/30 hover-pulse-border flex flex-col items-center shadow-[0_0_80px_rgba(0,154,157,0.15)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal/20 via-transparent to-lime/10 opacity-50 pointer-events-none group-hover:scale-110 transition-transform duration-1000" />

          <div className="relative z-10 mb-5 p-4 bg-teal/10 rounded-full animate-bounce">
            <ZapIcon size={32} className="text-lime" />
          </div>

          <h2 className="relative z-10 text-3xl sm:text-4xl md:text-6xl font-black uppercase italic leading-[0.85] tracking-tighter mb-5 md:mb-10 pointer-events-none">
            Ready <br /><span className="gradient-text underline decoration-white/10 underline-offset-8">Operate?</span>
          </h2>
          <p className="relative z-10 text-sm md:text-2xl text-gray-300 mb-6 md:mb-12 max-w-2xl mx-auto font-black uppercase tracking-wider pointer-events-none">
            Initiate your digital transformation today. Stop waiting. Start building.
          </p>
          <Link href="/contact" className="relative z-10 px-8 py-5 md:px-16 md:py-8 bg-teal text-black rounded-[2rem] md:rounded-full font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[12px] md:text-[14px] hover:scale-[1.1] hover:bg-lime active:scale-95 transition-all shadow-[0_0_40px_rgba(0,154,157,0.6)] inline-block cursor-pointer">
            Get Mission Started
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
