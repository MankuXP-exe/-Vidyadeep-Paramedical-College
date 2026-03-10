"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
    User,
    Phone,
    Mail,
    BookOpen,
    MessageSquare,
    Send,
    CheckCircle2,
    Clock,
    Calendar,
    ShieldCheck,
    AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { GlassCard, Section, SectionTitle } from "@/components/ui/custom-sections"

const courses = [
    "Diploma in Medical Laboratory Technology (DMLT)",
    "Diploma in Operation Theatre Technology (DOTT)",
    "Diploma in Dental Hygiene",
    "Diploma in Physiotherapy",
    "Diploma in Optometry",
    "Diploma in ANM",
    "Diploma in GNM",
    "BSc Nursing",
    "Bachelor in Physiotherapy (BPT)",
    "Bachelor in Medical Lab Technology (BMLT)"
]

export default function AdmissionsPage() {
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [isSubmitted, setIsSubmitted] = React.useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full text-center space-y-6"
                >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h2 className="text-3xl font-outfit font-bold text-primary">Application Received!</h2>
                    <p className="text-muted-foreground">
                        Thank you for applying to Vidyadeep Paramedical College. Our admissions team will contact you shortly on your provided phone number/email.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-white h-11 px-8 shadow-lg font-medium transition-colors"
                    >
                        Return to Home
                    </Link>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="flex flex-col">
            {/* Page Header */}
            <section className="bg-primary pt-32 pb-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 translate-x-1/2" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-outfit font-bold mb-6"
                    >
                        Apply Online
                    </motion.h1>
                    <p className="text-xl text-white/70 max-w-2xl">
                        Take the first step towards a rewarding career in healthcare. Fill out the form below to start your admission process.
                    </p>
                </div>
            </section>

            <Section bg="gray">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Form Side */}
                    <div className="lg:col-span-2">
                        <GlassCard className="p-8 md:p-12 shadow-2xl border-t-8 border-primary">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                                            <User className="h-4 w-4 text-secondary" /> Full Name
                                        </Label>
                                        <Input id="name" placeholder="Enter your full name" required className="h-12 rounded-xl" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                                            <Phone className="h-4 w-4 text-secondary" /> Phone Number
                                        </Label>
                                        <Input id="phone" type="tel" placeholder="Enter your mobile number" required className="h-12 rounded-xl" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                                            <Mail className="h-4 w-4 text-secondary" /> Email Address
                                        </Label>
                                        <Input id="email" type="email" placeholder="Enter your email" required className="h-12 rounded-xl" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="course" className="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                                            <BookOpen className="h-4 w-4 text-secondary" /> Course Selection
                                        </Label>
                                        <Select required>
                                            <SelectTrigger className="h-12 rounded-xl">
                                                <SelectValue placeholder="Select a course" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {courses.map((course) => (
                                                    <SelectItem key={course} value={course.toLowerCase().replace(/\s+/g, '-')}>
                                                        {course}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                                        <MessageSquare className="h-4 w-4 text-secondary" /> Special Message (Optional)
                                    </Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your background or any questions you have..."
                                        className="min-h-[150px] rounded-xl"
                                    />
                                </div>

                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-14 rounded-full text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl transition-all hover:scale-[1.02]"
                                    >
                                        {isSubmitting ? "Processing..." : "Submit Application"}
                                        {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                                    </Button>
                                    <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                                        <ShieldCheck className="h-3 w-3" /> All your information is securely processed and private.
                                    </p>
                                </div>
                            </form>
                        </GlassCard>
                    </div>

                    {/* Info Side */}
                    <div className="space-y-8">
                        <div className="bg-primary text-white p-8 rounded-3xl shadow-xl">
                            <h3 className="text-2xl font-outfit font-bold mb-6">Upcoming Batches</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-white/20 p-3 rounded-2xl shrink-0 h-fit">
                                        <Calendar className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">01 June</h4>
                                        <p className="text-sm text-white/70 italic">Summer Intake - Limited Seats Remaining</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-white/20 p-3 rounded-2xl shrink-0 h-fit">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">01 August</h4>
                                        <p className="text-sm text-white/70 italic">Monsoon Intake - Now Open</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-secondary/10 p-8 rounded-3xl border border-secondary/20">
                            <h3 className="text-xl font-outfit font-bold text-primary mb-4 flex items-center gap-2">
                                <AlertCircle className="text-secondary h-5 w-5" /> Admission Helpline
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Our counselors are available from 9 AM to 6 PM (IST) for any assistance.
                            </p>
                            <div className="space-y-2">
                                <p className="font-bold text-primary">+91 9992101666</p>
                                <p className="font-bold text-primary">+91 7988348872</p>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-white shadow-lg border">
                            <h3 className="text-lg font-outfit font-bold text-primary mb-4">Why Apply Now?</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" /> Early bird scholarship benefits
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" /> Preferred choice of clinical rotations
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" /> Guaranteed hostel accommodation
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}
