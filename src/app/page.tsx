"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Microscope,
  Stethoscope,
  Search,
  HeartPulse,
  Syringe,
  Activity,
  Trophy,
  ShieldCheck,
  Globe,
  Users,
  School
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard, Section, SectionTitle } from "@/components/ui/custom-sections";

const courses = [
  {
    title: "Diploma in Medical Lab Technology (DMLT)",
    icon: <Microscope className="h-8 w-8 text-primary" />,
    duration: "2 Years",
    desc: "Comprehensive study of clinical laboratory tests to diagnose and treat diseases."
  },
  {
    title: "Diploma in Operation Theatre Technology (DOTT)",
    icon: <Activity className="h-8 w-8 text-secondary" />,
    duration: "2 Years",
    desc: "Training to manage the operation theatre and assist surgeons during surgery."
  },
  {
    title: "Diploma in Physiotherapy",
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    duration: "2 Years",
    desc: "Restoring movement and function to students through exercise and therapy."
  },
  {
    title: "Diploma in ANM",
    icon: <Stethoscope className="h-8 w-8 text-secondary" />,
    duration: "2 Years",
    desc: "Auxiliary Nurse Midwifery training for basic health care services."
  },
  {
    title: "BSc Nursing",
    icon: <Syringe className="h-8 w-8 text-primary" />,
    duration: "4 Years",
    desc: "A degree program focused on providing high-quality patient care and nursing ethics."
  },
  {
    title: "Bachelor in Physiotherapy (BPT)",
    icon: <Users className="h-8 w-8 text-secondary" />,
    duration: "4.5 Years",
    desc: "Advanced training in physiotherapy, biomechanics, and rehabilitation."
  }
];

const highlights = [
  { icon: <Trophy className="h-6 w-6 text-primary" />, text: "100% Job Placement Assistance" },
  { icon: <Users className="h-6 w-6 text-secondary" />, text: "Highly Experienced Faculty (Mainly Doctors)" },
  { icon: <School className="h-6 w-6 text-primary" />, text: "Smart Classrooms & Fully AC Campus" },
  { icon: <Globe className="h-6 w-6 text-secondary" />, text: "Foreign Internship Program (Japan)" },
  { icon: <ShieldCheck className="h-6 w-6 text-primary" />, text: "Government Job Preparation" },
  { icon: <CheckCircle2 className="h-6 w-6 text-secondary" />, text: "English Speaking Training" }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/reception look.webp"
            alt="Vidyadeep Paramedical College Campus"
            fill
            className="object-cover brightness-[0.5]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30 text-primary-foreground text-sm font-medium">
              <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-red-400"></span>
              Admissions Open 2024-25
            </div>
            <h1 className="text-4xl md:text-7xl font-outfit font-bold text-white leading-tight">
              Build Your <span className="text-secondary">Medical Career</span> With Excellence
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Vidyadeep Paramedical College offers high-end medical education with modern facilities, expert doctors, and global placement opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg font-bold shadow-lg transition-all"
              >
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary px-8 h-14 text-lg font-bold transition-all shadow-md"
              >
                View Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <Section bg="white" className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/logo.png"
              alt="Vidyadeep College"
              fill
              className="object-contain p-12 bg-[#F8F9FB]"
            />
          </motion.div>
          <div className="space-y-6">
            <h4 className="text-secondary font-bold tracking-widest uppercase text-sm">About Our College</h4>
            <h2 className="text-3xl md:text-5xl font-outfit font-bold text-primary leading-tight">
              A Premier Institution for Paramedical Sciences
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vidyadeep Paramedical College is a premier institution dedicated to providing top-tier medical and paramedical education. Affiliated to Asian International University (UGC Approved), we focus on bridging the gap between academic knowledge and clinical excellence.
            </p>
            <div className="grid grid-cols-2 gap-6 py-4">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">100%</h3>
                <p className="text-sm text-muted-foreground">Placement Assistance</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">15+</h3>
                <p className="text-sm text-muted-foreground">Expert Doctors</p>
              </div>
            </div>
            <Link href="/about" className="inline-flex items-center px-0 text-primary font-bold text-lg hover:underline transition-all">
              Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Courses Section */}
      <Section bg="gray">
        <SectionTitle
          title="Our Popular Programs"
          subtitle="We offer a wide range of industry-recognized diploma and degree programs designed for the modern healthcare sector."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full p-8 flex flex-col items-start border-t-4 border-t-primary">
                <div className="bg-primary/10 p-4 rounded-2xl mb-6">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold font-outfit mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1 italic">
                  "{course.desc}"
                </p>
                <div className="flex items-center justify-between w-full pt-4 border-t">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">{course.duration}</span>
                  <Link href={`/courses#${course.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary hover:underline text-sm font-semibold flex items-center">
                    Details <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/courses" className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-white px-10 h-12 text-sm font-bold shadow-lg transition-all">
            View All Courses
          </Link>
        </div>
      </Section>

      {/* Features Section */}
      <Section bg="gradient">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 py-10">
            <h2 className="text-3xl md:text-5xl font-outfit font-bold text-primary mb-6">
              Why Choose <span className="text-secondary">Vidyadeep?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We provide more than just a degree. We provide a path to a successful global career in healthcare.
            </p>
            <div className="p-8 bg-primary rounded-3xl text-white">
              <h4 className="font-bold text-2xl mb-4 italic">"Transforming Students into Competent Medics"</h4>
              <p className="opacity-80 text-sm">- Student Placement Cell</p>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl flex items-center shadow-lg border border-white/40"
              >
                <div className="mr-6 shrink-0">
                  {item.icon}
                </div>
                <p className="text-lg font-outfit font-bold text-primary">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Banner */}
      <Section bg="white" className="bg-[#1a1a1a] text-white">
        <div className="text-center space-y-8">
          <SectionTitle
            title="Batch Starting Soon"
            subtitle="Secure your seat today in Haryana's premier paramedical college. Join the batch starting in June or August."
            centered
          />
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-4xl mx-auto py-10">
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20 w-full">
              <h3 className="text-4xl font-bold font-outfit mb-2">01 June</h3>
              <p className="text-secondary font-bold tracking-widest uppercase text-sm">Summer Batch</p>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20 w-full">
              <h3 className="text-4xl font-bold font-outfit mb-2">01 August</h3>
              <p className="text-secondary font-bold tracking-widest uppercase text-sm">Monsoon Batch</p>
            </div>
          </div>
          <Link
            href="/admissions"
            className="inline-flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/90 text-white px-12 h-16 text-xl font-bold shadow-2xl transition-all"
          >
            Apply Now for Admission
          </Link>
        </div>
      </Section>
    </div>
  );
}
