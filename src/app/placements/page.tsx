"use client"

import { motion } from "framer-motion";
import {
    Trophy,
    Globe,
    Briefcase,
    TrendingUp,
    CheckCircle,
    Users,
    Star,
    Quote
} from "lucide-react";
import { Section, SectionTitle, GlassCard } from "@/components/ui/custom-sections";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const placementStats = [
    { label: "Placement Rate", value: "100%", icon: <Trophy /> },
    { label: "Global Partners", value: "5+", icon: <Globe /> },
    { label: "Annual Salary (Avg)", value: "₹4.5L", icon: <TrendingUp /> },
    { label: "Recruiting Hospitals", value: "50+", icon: <Briefcase /> }
];

const features = [
    "In-house Placement Cell for dedicated career support.",
    "Mock interviews and personality development sessions.",
    "Clinical rotations in top government and private hospitals.",
    "Special Japan Internship Program for selected students.",
    "Lifetime career guidance for alumni.",
    "Assistance in Government Job Preparation (State & Central)."
];

const testimonials = [
    {
        name: "Anjali Sharma",
        course: "BSc Nursing (Batch 2023)",
        text: "Vidyadeep Paramedical College provided me with the best clinical exposure. Today, I am working in a reputed hospital in Gurugram, thanks to the placement cell.",
        rating: 5
    },
    {
        name: "Rahul Verma",
        course: "DMLT (Batch 2022)",
        text: "The Japan Internship Program was a life-changing opportunity. The faculty support and Japan-specific training were exceptional.",
        rating: 5
    },
    {
        name: "Suman Yadav",
        course: "BPT (Batch 2023)",
        text: "The smart classrooms and experienced doctors acting as faculty make a huge difference in how we learn medical concepts.",
        rating: 5
    }
];

export default function PlacementsPage() {
    return (
        <div className="flex flex-col">
            {/* Page Header */}
            <section className="bg-primary pt-32 pb-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Image
                        src="https://images.unsplash.com/photo-1576091160621-2633005a3c20?auto=format&fit=crop&q=80&w=1200"
                        alt="Medical Professional"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-outfit font-bold mb-6"
                    >
                        Student Placements & Global Careers
                    </motion.h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Our mission is to ensure every student successfully transitions from the classroom to a professional healthcare environment.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <Section bg="white">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {placementStats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="text-center space-y-4"
                        >
                            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                                {stat.icon}
                            </div>
                            <h3 className="text-4xl font-bold font-outfit text-primary">{stat.value}</h3>
                            <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Placement Cell & Japan Program */}
            <Section bg="gray">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <SectionTitle title="100% Job Placement Assistance" centered={false} />
                        <p className="text-lg text-muted-foreground">
                            At Vidyadeep Paramedical College, we take pride in our robust industry connections. Our placement cell works tirelessly to bridge the gap between students and top healthcare providers.
                        </p>
                        <ul className="space-y-4">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="mt-1 bg-secondary/20 p-1 rounded-full text-secondary">
                                        <CheckCircle className="h-4 w-4" />
                                    </div>
                                    <span className="text-muted-foreground font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <GlassCard className="p-0 border-none shadow-2xl relative overflow-hidden group">
                        <div className="bg-primary p-12 text-white space-y-6 relative z-10">
                            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-4">
                                <Globe className="h-4 w-4 mr-2" /> International Opportunity
                            </div>
                            <h2 className="text-3xl md:text-5xl font-outfit font-bold leading-tight underline decoration-secondary decoration-4 underline-offset-8">
                                Foreign Internship Program (Japan)
                            </h2>
                            <p className="text-white/80 leading-relaxed italic">
                                "Selected students get the chance to undergo professional training and internships in prestigious medical centers in Japan, opening doors to global healthcare standards."
                            </p>
                            <div className="pt-6">
                                <Button variant="secondary" className="rounded-full bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-bold">
                                    Learn More About Japan Program
                                </Button>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0" />
                    </GlassCard>
                </div>
            </Section>

            {/* Testimonials */}
            <Section bg="white">
                <SectionTitle title="Student Success Stories" subtitle="Read what our students have to say about their journey at Vidyadeep Paramedical College." />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testi, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-muted/30 p-10 rounded-3xl relative overflow-hidden group"
                        >
                            <Quote className="absolute -top-4 -left-4 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(testi.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                                ))}
                            </div>
                            <p className="text-lg text-primary/80 italic mb-8 leading-relaxed">
                                "{testi.text}"
                            </p>
                            <div className="flex items-center gap-4 border-t pt-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                                    {testi.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">{testi.name}</h4>
                                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">{testi.course}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Call to Action */}
            <Section bg="gradient" className="text-center py-24">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-outfit font-bold text-primary capitalize">
                        Start Your Successful Medical Journey Today
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-xl mx-auto">
                        Seats are filling up fast for the new batch. Don't miss out on securing your professional future in healthcare.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="rounded-full px-12 h-16 text-xl shadow-2xl bg-primary hover:bg-primary/90">
                            Apply Online Now
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-12 h-16 text-xl border-primary/20 hover:bg-primary/5">
                            Download Brochure
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}
