"use client"

import { motion } from "framer-motion";
import {
    Microscope,
    Activity,
    Stethoscope,
    HeartPulse,
    Eye,
    Baby,
    Syringe,
    Users,
    PlusCircle,
    Clock,
    Briefcase,
    GraduationCap
} from "lucide-react";
import { Section, SectionTitle, GlassCard } from "@/components/ui/custom-sections";
import { Button } from "@/components/ui/button";

const courseCategories = [
    {
        category: "Diploma Programs",
        courses: [
            {
                title: "DMLT",
                fullTitle: "Diploma in Medical Laboratory Technology",
                icon: <Microscope />,
                duration: "2 Years",
                eligibility: "12th Science (PCB/PCM)",
                career: "Lab Technician, Research Assistant, Quality Control Officer"
            },
            {
                title: "DOTT",
                fullTitle: "Diploma in Operation Theatre Technology",
                icon: <Activity />,
                duration: "2 Years",
                eligibility: "12th Science",
                career: "OT Technician, Surgical Assistant, CSSD Incharge"
            },
            {
                title: "Diploma in Physiotherapy",
                fullTitle: "Diploma in Physiotherapy",
                icon: <HeartPulse />,
                duration: "2 Years",
                eligibility: "12th Science",
                career: "Physiotherapist Assistant, Sports Clinic Aide, Rehabilitation Centres"
            },
            {
                title: "Diploma in Dental Hygiene",
                fullTitle: "Diploma in Dental Hygiene",
                icon: <PlusCircle />,
                duration: "2 Years",
                eligibility: "12th Science",
                career: "Dental Hygienist, Oral Health Educator, Clinical Assistant"
            },
            {
                title: "Diploma in Optometry",
                fullTitle: "Diploma in Optometry",
                icon: <Eye />,
                duration: "2 Years",
                eligibility: "12th Science",
                career: "Optometrist Assistant, Vision Care Specialist, Optical Store Manager"
            },
            {
                title: "Diploma in ANM",
                fullTitle: "Auxiliary Nurse Midwifery",
                icon: <Baby />,
                duration: "2 Years",
                eligibility: "10th/12th Any Stream",
                career: "Community Health Worker, Rural Health Centre Nurse, Health Supervisor"
            },
            {
                title: "Diploma in GNM",
                fullTitle: "General Nursing and Midwifery",
                icon: <Stethoscope />,
                duration: "3 Years",
                eligibility: "12th Any Stream (Min 40%)",
                career: "Staff Nurse, Nursing Tutor, ICU Nurse, Home Care Nursing"
            }
        ]
    },
    {
        category: "Degree Programs",
        courses: [
            {
                title: "BSc Nursing",
                fullTitle: "Bachelor of Science in Nursing",
                icon: <Syringe />,
                duration: "4 Years",
                eligibility: "12th Science (PCB)",
                career: "Registered Nurse, Nursing Superintendent, Educator, Nurse Researcher"
            },
            {
                title: "BPT",
                fullTitle: "Bachelor of Physiotherapy",
                icon: <Users />,
                duration: "4.5 Years",
                eligibility: "12th Science (PCB)",
                career: "Physiotherapist, Sports Therapist, Consultant, Academician"
            },
            {
                title: "BMLT",
                fullTitle: "Bachelor of Medical Lab Technology",
                icon: <Microscope />,
                duration: "3 Years",
                eligibility: "12th Science (PCB)",
                career: "Chief Lab Technologist, Laboratory Manager, Research Scientist"
            }
        ]
    }
];

export default function CoursesPage() {
    return (
        <div className="flex flex-col bg-[#F8F9FB]">
            {/* Header */}
            <section className="bg-primary pt-32 pb-24 text-white text-center">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-6xl font-outfit font-bold mb-6"
                    >
                        Academic Programs
                    </motion.h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Vidyadeep Paramedical College offers a wide array of specialized diploma and degree programs designed to create future healthcare leaders.
                    </p>
                </div>
            </section>

            {/* Course List */}
            {courseCategories.map((group, groupIdx) => (
                <Section key={groupIdx} bg="gray">
                    <SectionTitle title={group.category} centered={false} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {group.courses.map((course, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <GlassCard className="p-8 hover:border-primary/30 transition-all">
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <div className="p-5 bg-primary/10 rounded-2xl text-primary shrink-0">
                                            {course.icon}
                                        </div>
                                        <div className="space-y-4 flex-1">
                                            <div>
                                                <h3 className="text-2xl font-bold font-outfit text-primary">{course.title}</h3>
                                                <p className="text-muted-foreground font-medium">{course.fullTitle}</p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 py-2 text-sm border-t border-b">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4 text-secondary" />
                                                    <span className="font-bold">Duration:</span> {course.duration}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <GraduationCap className="h-4 w-4 text-secondary" />
                                                    <span className="font-bold">Eligibility:</span> {course.eligibility}
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <h4 className="font-bold text-sm uppercase tracking-wider text-primary flex items-center gap-2">
                                                    <Briefcase className="h-4 w-4" /> Career Opportunities:
                                                </h4>
                                                <p className="text-muted-foreground text-sm leading-relaxed">
                                                    {course.career}
                                                </p>
                                            </div>

                                            <Button asChild variant="outline" className="rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white mt-2">
                                                <a href="/admissions">Apply Now</a>
                                            </Button>
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </Section>
            ))}

            {/* Advisory Section */}
            <Section bg="white" className="border-t">
                <div className="bg-secondary rounded-3xl p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
                    <div className="space-y-4 max-w-xl text-center md:text-left">
                        <h2 className="text-3xl font-bold font-outfit">Confused about which course to choose?</h2>
                        <p className="text-white/80">Our expert counselors are here to help you guide through your career options in the medical field.</p>
                    </div>
                    <Button size="lg" variant="secondary" className="bg-white text-secondary py-8 px-12 rounded-full font-bold text-lg hover:bg-gray-100">
                        Contact Counselor
                    </Button>
                </div>
            </Section>
        </div>
    );
}
