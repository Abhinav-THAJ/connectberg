"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-black/40 backdrop-blur-xl border-t border-white/5 py-16 sm:py-24 md:py-32 relative overflow-hidden">
            <div className="orb w-96 h-96 bg-teal/5 -bottom-48 -right-48" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 relative z-10">
                <div className="flex flex-col gap-6 text-center sm:text-left items-center sm:items-start sm:col-span-2 md:col-span-1">
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center font-black text-2xl shadow-xl transition-transform group-hover:rotate-12 overflow-hidden">
                            <Image src="/logo.png" alt="ConnectBerg Logo" width={48} height={48} className="object-cover" />
                        </div>
                        <span className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase italic">
                            CONNECT<span className="text-teal">BERG</span>
                        </span>
                    </Link>
                    <p className="text-sm text-gray-400 leading-relaxed font-bold mt-2 opacity-100 max-w-sm">
                        Precision engineering for modern institutions. We bridge the gap between
                        legacy archives and the digital frontier.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <div className="p-3 bg-white/5 rounded-2xl hover:bg-teal/20 hover:text-white transition-all cursor-pointer shadow-lg">
                            <Linkedin size={18} />
                        </div>
                        <div className="p-3 bg-white/5 rounded-2xl hover:bg-teal/20 hover:text-white transition-all cursor-pointer shadow-lg">
                            <Facebook size={18} />
                        </div>
                        <div className="p-3 bg-white/5 rounded-2xl hover:bg-teal/20 hover:text-white transition-all cursor-pointer shadow-lg">
                            <Twitter size={18} />
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-black uppercase tracking-[0.4em] text-[10px] mb-8 opacity-50 underline decoration-teal/50 underline-offset-8">Navigation</h4>
                    <ul className="flex flex-col gap-5 text-sm font-black uppercase tracking-widest italic">
                        <li><Link href="/services" className="hover:text-teal transition-all hover:translate-x-2 inline-block">Digital Services</Link></li>
                        <li><Link href="/about" className="hover:text-teal transition-all hover:translate-x-2 inline-block">Institutional Profile</Link></li>
                        <li><Link href="/contact" className="hover:text-teal transition-all hover:translate-x-2 inline-block">Initiate Inquiry</Link></li>
                        <li><Link href="/privacy" className="hover:text-teal transition-all hover:translate-x-2 inline-block">Terms of Op</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-black uppercase tracking-[0.4em] text-[10px] mb-8 opacity-50 underline decoration-teal/50 underline-offset-8">Direct Access</h4>
                    <ul className="flex flex-col gap-6 text-sm font-bold">
                        <li className="flex gap-4 items-center group">
                            <Mail size={20} className="text-teal transition-transform group-hover:scale-125 shrink-0" />
                            <span className="text-white font-black tracking-tighter text-sm md:text-lg italic break-all">connectberg@gmail.com</span>
                        </li>
                        <li className="flex gap-4 items-start group">
                            <Phone size={20} className="text-teal mt-1 transition-transform group-hover:scale-125 shrink-0" />
                            <span className="text-white font-black tracking-tighter text-sm md:text-lg italic leading-tight">
                                +91 8891511635<br />
                                +91 8907223344
                            </span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-black uppercase tracking-[0.4em] text-[10px] mb-8 opacity-50 underline decoration-teal/50 underline-offset-8">Headquarters</h4>
                    <div className="flex gap-4 items-start text-sm leading-relaxed text-gray-400 font-bold">
                        <MapPin size={20} className="text-teal mt-1 shrink-0" />
                        <span className="tracking-tight italic">
                            Bldg. 29/184, Nedumangad P.O,<br />
                            Thiruvananthapuram, Kerala,<br />
                            India - 695541
                        </span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 md:mt-32 pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-5 relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-gray-600 text-center md:text-left">© 2026 Connect Berg Technologies Pvt. Ltd.</p>
                <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.5em] text-gray-600">
                    <span className="hover:text-teal cursor-pointer transition-colors">Legal</span>
                    <span className="hover:text-teal cursor-pointer transition-colors">System Status</span>
                </div>
            </div>
        </footer>
    );
}
