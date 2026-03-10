"use client"

import { motion } from "framer-motion";
import { User, Mail, GraduationCap, Award, Stethoscope } from "lucide-react";
import { Section, SectionTitle, GlassCard } from "@/components/ui/custom-sections";

const executiveFaculty = [
    { name: "Dr Sandeep Singh", role: "Chairman", qual: "MBBS, MD" },
    { name: "Dr Neeraj Khatri", role: "Principal", qual: "PhD, MSc (Nursing)" },
    { name: "Sir Maan Singh", role: "Vice Principal", qual: "MSc (Medical Tech)" }
];

const medicalFaculty = [
    { name: "Dr Yogesh Yadav", role: "Associate Professor", qual: "MD (General Medicine)" },
    { name: "Dr Bharat Singh", role: "Assistant Professor", qual: "MBBS, MD" },
    { name: "Dr Pop Singh", role: "Assistant Professor", qual: "MBBS, MD" },
    { name: "Dr Bhupender Yadav", role: "Senior Consultant", qual: "MD (Pathology)" },
    { name: "Dr Varnit Aggarwal", role: "Faculty", qual: "MBBS, MD" },
    { name: "Dr Amit Dahiya", role: "Faculty", qual: "MBBS, MS" },
    { name: "Dr Anshul Saini", role: "Faculty", qual: "MBBS, MS" }
];

const generalFaculty = [
    { name: "Pt Sudarshan Mishra", role: "HOD", qual: "MA, BEd" },
    { name: "Mr Mahesh Yadav", role: "Senior Lecturer", qual: "MSc (Microbiology)" },
    { name: "Mr Dhiraj Jha", role: "Lecturer", qual: "BMLT, MSc" },
    { name: "Mrs Roshni Yadav", role: "Assistant Professor", qual: "MSc (Nursing)" },
    { name: "Mrs Rohini", role: "Lecturer", qual: "MSc (Nursing)" },
    { name: "Mr Neeraj Yadav", role: "Tutor", qual: "BPT, MPT" }
];

export default function FacultyPage() {
    return (
        <div className="flex flex-col">
            {/* Page Header */}
            <section className="bg-[#4B2E83] py-24 text-white text-center">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-5xl font-outfit font-bold mb-4"
                    >
                        Meet Our Distinguished Faculty
                    </motion.h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Our educators are experienced medical professionals, doctors, and specialists dedicated to academic excellence.
                    </p>
                </div>
            </section>

            {/* Leadership */}
            <Section bg="white">
                <SectionTitle title="Leadership Committee" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {executiveFaculty.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                        >
                            <GlassCard className="p-8 text-center border-t-8 border-t-primary">
                                <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto flex items-center justify-center mb-6 border-4 border-white shadow-xl">
                                    <User className="h-16 w-16 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold font-outfit text-primary mb-1">{member.name}</h3>
                                <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-3">{member.role}</p>
                                <div className="bg-primary/5 py-2 px-4 rounded-full inline-block">
                                    <p className="text-xs text-primary font-bold flex items-center">
                                        <GraduationCap className="h-4 w-4 mr-2" /> {member.qual}
                                    </p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Medical Experts */}
            <Section bg="gray">
                <SectionTitle title="Medical Experts & Doctors" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {medicalFaculty.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-3xl shadow-lg flex items-center gap-6 border-l-4 border-l-secondary"
                        >
                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                                <Stethoscope className="text-secondary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary">{member.name}</h4>
                                <p className="text-xs text-muted-foreground">{member.role}</p>
                                <p className="text-[10px] font-bold text-secondary uppercase bg-secondary/5 px-2 py-1 rounded inline-block mt-2">
                                    {member.qual}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Teaching Faculty */}
            <Section bg="white">
                <SectionTitle title="Teaching & Clinical Faculty" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {generalFaculty.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-muted/30 p-8 rounded-3xl border hover:bg-white hover:shadow-2xl transition-all duration-300">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-white rounded-2xl group-hover:bg-primary transition-colors">
                                        <Award className="text-primary group-hover:text-white" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold font-outfit text-primary mb-2">{member.name}</h3>
                                <p className="text-secondary font-bold text-sm mb-4">{member.role}</p>
                                <p className="text-sm text-muted-foreground italic border-t pt-4">Qualified: {member.qual}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
