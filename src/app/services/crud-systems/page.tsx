"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, LayoutDashboard, Briefcase, ShoppingCart, UserCheck, Package, ClipboardList, PenTool, Layers } from "lucide-react";
import Link from "next/link";

export default function CrudSystems() {
    const crudSystems = [
        { title: "Employee Management System", icon: <UserCheck className="text-teal" size={24} /> },
        { title: "User Management System", icon: <UserCheck className="text-teal" size={24} /> },
        { title: "CRM System", icon: <Briefcase className="text-teal" size={24} /> },
        { title: "Inventory Management System", icon: <Package className="text-teal" size={24} /> },
        { title: "Product Management System", icon: <Package className="text-teal" size={24} /> },
        { title: "Order Management System", icon: <ShoppingCart className="text-teal" size={24} /> },
        { title: "Student Management System", icon: <LayoutDashboard className="text-teal" size={24} /> },
        { title: "School / Course Management", icon: <LayoutDashboard className="text-teal" size={24} /> },
        { title: "Attendance Management", icon: <ClipboardList className="text-teal" size={24} /> },
        { title: "Payroll Management", icon: <ClipboardList className="text-teal" size={24} /> },
        { title: "Leave Management", icon: <ClipboardList className="text-teal" size={24} /> },
        { title: "Project Management System", icon: <Briefcase className="text-teal" size={24} /> },
        { title: "Task & Ticket Management", icon: <PenTool className="text-teal" size={24} /> },
        { title: "Asset Management System", icon: <Package className="text-teal" size={24} /> },
        { title: "Vendor / Supplier Management", icon: <Briefcase className="text-teal" size={24} /> },
        { title: "Role & Permission Management", icon: <Lock size={24} className="text-teal" /> },
        { title: "Content Management System (CMS)", icon: <PenTool className="text-teal" size={24} /> },
        { title: "Document Management System", icon: <ClipboardList className="text-teal" size={24} /> },
        { title: "Booking / Reservation Management", icon: <ShoppingCart className="text-teal" size={24} /> },
        { title: "Appointment Scheduling System", icon: <PenTool className="text-teal" size={24} /> },
        { title: "Billing & Invoice Management", icon: <ClipboardList className="text-teal" size={24} /> },
        { title: "Expense Tracking System", icon: <Package className="text-teal" size={24} /> },
        { title: "Subscription Management", icon: <Layers size={24} className="text-teal" /> },
        { title: "Complaint / Feedback System", icon: <PenTool className="text-teal" size={24} /> },
        { title: "Helpdesk / Support System", icon: <PenTool className="text-teal" size={24} /> },
        { title: "E-Commerce", icon: <ShoppingCart className="text-teal" size={24} /> }
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
                <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">ENTERPRISE <span className="text-teal uppercase font-black tracking-tighter">CRUD SYSTEMS</span></h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                    Scalable, robust, and client-facing CRUD web applications for modern institutional and SME operations.
                    We provide elite code standards for your internal tools and dashboard needs.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {crudSystems.map((system, idx) => (
                    <motion.div
                        key={system.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: (idx % 10) * 0.05 }}
                        viewport={{ once: true }}
                        className="group p-6 glass rounded-[1.5rem] border border-white/5 hover:border-teal/40 transition-all flex items-center gap-4"
                    >
                        <div className="p-3 bg-teal/10 rounded-xl group-hover:scale-110 transition-transform">
                            {system.icon}
                        </div>
                        <h3 className="text-md font-bold text-gray-200 group-hover:text-white transition-colors">{system.title}</h3>
                    </motion.div>
                ))}
            </div>

            <section className="bg-white/5 p-12 rounded-[3rem] border border-white/10 text-center">
                <h2 className="text-4xl font-bold mb-6 text-teal uppercase italic">Specialized Dashboard & Internal Tools</h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
                    We focus on creating systems that are instantly understandable to non-technical clients while
                    handling complex logic under the hood. High-quality builds for startups and legacy SME modernization.
                </p>
                <Link href="/contact" className="px-12 py-5 bg-teal text-black font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all w-fit mx-auto">
                    Discuss Your System
                </Link>
            </section>

            {/* System Benefits Section */}
            <section className="max-w-7xl mx-auto w-full">
                <h2 className="text-4xl font-bold mb-12 uppercase tracking-tighter text-center">Software <span className="text-teal">Architecture</span> Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Scalable Logic", desc: "Designed to grow with your user base without performance drops." },
                        { title: "Real-time Data", desc: "Live updates for dashboards ensuring accurate decision making." },
                        { title: "Secure Access", desc: "Role-based permissions ranging from Admin to Guest views." },
                        { title: "Exportable Reports", desc: "One-click CSV/PDF exports for all your management data." }
                    ].map((benefit) => (
                        <div key={benefit.title} className="p-8 glass rounded-3xl border border-white/5 hover:border-teal/20 transition-all flex flex-col gap-3">
                            <div className="w-1.5 h-1.5 bg-yellow rounded-full mb-2" />
                            <h4 className="text-lg font-black uppercase tracking-tight italic text-white">{benefit.title}</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tech Stack Horizontal Scroll */}
            <section className="w-full bg-navy py-12 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 opacity-40 hover:opacity-100 transition-opacity">
                    {["Next.js", "React", "PostgreSQL", "Node.js", "Tailwind CSS", "TypeScript", "AWS Cloud"].map((tech) => (
                        <span key={tech} className="text-xl font-black uppercase tracking-widest italic">{tech}</span>
                    ))}
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
