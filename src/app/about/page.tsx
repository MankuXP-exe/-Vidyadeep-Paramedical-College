"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, BookOpen, Target, Microscope, School, Users, CheckCircle } from "lucide-react";
import { Section, SectionTitle, GlassCard } from "@/components/ui/custom-sections";

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Page Header */}
            <section className="relative py-24 bg-primary text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/reception look.webp"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-outfit font-bold mb-4"
                    >
                        About Our College
                    </motion.h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
                        Dedicated to excellence in paramedical education and healthcare training since inception.
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <Section bg="white">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-outfit font-bold text-primary">A Legacy of Quality Education</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Vidyadeep Paramedical College is a premier institution located in Farrukhnagar, Gurugram. We are committed to providing the highest standards of education in the field of paramedical sciences. Our goal is to empower students with the skills and knowledge required to excel in the rapidly evolving healthcare industry.
                    </p>
                    <div className="inline-block p-6 bg-secondary/10 rounded-2xl border border-secondary/20">
                        <p className="text-primary font-bold flex items-center justify-center gap-2">
                            <Award className="text-secondary" /> Affiliated to: Asian International University (UGC Approved)
                        </p>
                    </div>
                </div>
            </Section>

            {/* Vision & Mission */}
            <Section bg="gray">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <GlassCard className="p-10 border-l-8 border-l-primary">
                        <Target className="h-12 w-12 text-primary mb-6" />
                        <h3 className="text-2xl font-bold font-outfit mb-4 text-primary">Our Vision</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            To be a global leader in paramedical education, recognized for clinical excellence, innovative research, and student-centric learning that transforms lives and communities through better healthcare.
                        </p>
                    </GlassCard>
                    <GlassCard className="p-10 border-l-8 border-l-secondary">
                        <BookOpen className="h-12 w-12 text-secondary mb-6" />
                        <h3 className="text-2xl font-bold font-outfit mb-4 text-secondary">Our Mission</h3>
                        <ul className="space-y-4 text-muted-foreground">
                            <li className="flex items-start gap-2 italic">
                                <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-1" />
                                <span>To provide industry-aligned curriculum and hands-on training using state-of-the-art medical equipment.</span>
                            </li>
                            <li className="flex items-start gap-2 italic">
                                <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-1" />
                                <span>To foster a culture of ethical medical practice and compassionate patient care.</span>
                            </li>
                            <li className="flex items-start gap-2 italic">
                                <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-1" />
                                <span>To ensure every student achieves their professional potential through dedicated placement and mentoring help.</span>
                            </li>
                        </ul>
                    </GlassCard>
                </div>
            </Section>

            {/* Infrastructure Section */}
            <Section bg="white">
                <SectionTitle
                    title="World-Class Infrastructure"
                    subtitle="Our campus is designed to provide an optimal learning environment with modern amenities."
                    centered={true}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: <School />, title: "Fully AC Campus", text: "Centrally air-conditioned classrooms and labs for student comfort." },
                        { icon: <Microscope />, title: "Smart Labs", text: "Equipped with latest medical instruments for practical training." },
                        { icon: <BookOpen />, title: "Modern Library", text: "Vast collection of medical journals, books, and digital resources." },
                        { icon: <Users />, title: "Smart Classrooms", text: "Interactive learning with audio-visual aids and fiber-optic Wi-Fi." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-secondary/5 border border-secondary/10 text-center flex flex-col items-center"
                        >
                            <div className="p-4 bg-white rounded-2xl shadow-sm text-secondary mb-4">
                                {item.icon}
                            </div>
                            <h4 className="font-bold font-outfit text-primary mb-2">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
