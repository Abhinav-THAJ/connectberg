"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 w-full max-w-[1500px] z-[100] transition-all px-4 md:px-8">
      <div className="premium-glass px-6 py-4 md:px-12 md:py-7 rounded-[2rem] md:rounded-full flex items-center justify-between border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal/10 via-transparent to-lime/10 opacity-30 pointer-events-none" />

        <Link href="/" className="flex items-center gap-4 relative z-10 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center font-black text-2xl shadow-xl overflow-hidden"
          >
            <Image src="/logo.png" alt="ConnectBerg Logo" width={40} height={40} className="object-cover" />
          </motion.div>
          <span className="text-2xl font-black tracking-tighter uppercase italic group-hover:text-teal transition-colors">
            CONNECT<span className="text-teal">BERG</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 relative z-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-black uppercase tracking-[0.3em] transition-all relative group ${isActive ? "text-teal" : "text-gray-400 hover:text-white"}`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-teal transition-all ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white relative z-10 p-3 hover:bg-white/5 rounded-2xl transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden premium-glass mt-6 p-10 rounded-[3rem] flex flex-col gap-8 border border-white/10 shadow-3xl relative z-[101]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black uppercase italic hover:text-teal transition-all"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
