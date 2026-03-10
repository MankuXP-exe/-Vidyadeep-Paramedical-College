"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Youtube,
    Instagram,
    Facebook,
    Send,
    MessageSquare,
    HelpCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { GlassCard, Section, SectionTitle } from "@/components/ui/custom-sections"

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = React.useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        alert("Message sent successfully!")
    }

    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-primary pt-32 pb-24 text-white">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-6xl font-outfit font-bold mb-6"
                    >
                        Connect With Us
                    </motion.h1>
                    <p className="text-xl text-white/70 max-w-2xl">
                        Have questions about admissions, courses, or our campus? We're here to help you.
                    </p>
                </div>
            </section>

            <Section bg="white">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Details */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-outfit font-bold text-primary">Get in Touch</h2>
                            <p className="text-muted-foreground">
                                Visit our campus or reach out to us through any of the following channels.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <GlassCard className="p-6 flex items-start gap-4 border-l-4 border-l-secondary">
                                <div className="p-3 bg-secondary/10 rounded-2xl text-secondary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">Our Address</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Near Civil Hospital, Opp Nayara Petrol Pump, Haily Mandi Road, Farrukhnagar, Gurugram, Haryana India
                                    </p>
                                </div>
                            </GlassCard>

                            <GlassCard className="p-6 flex items-start gap-4 border-l-4 border-l-primary">
                                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">Phone Numbers</h4>
                                    <p className="text-sm text-muted-foreground">+91 9992101666</p>
                                    <p className="text-sm text-muted-foreground">+91 7988348872</p>
                                    <p className="text-sm text-muted-foreground">07056098341</p>
                                </div>
                            </GlassCard>

                            <GlassCard className="p-6 flex items-start gap-4 border-l-4 border-l-secondary">
                                <div className="p-3 bg-secondary/10 rounded-2xl text-secondary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">Email Support</h4>
                                    <p className="text-sm text-muted-foreground">info@vidyadeepcollege.com</p>
                                    <p className="text-sm text-muted-foreground">admissions@vidyadeepcollege.com</p>
                                </div>
                            </GlassCard>

                            <GlassCard className="p-6 flex items-start gap-4 border-l-4 border-l-primary">
                                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">Working Hours</h4>
                                    <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                    <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                                </div>
                            </GlassCard>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/vidyadeepparamedicalinstitute/" target="_blank" className="bg-secondary/10 p-4 rounded-2xl hover:bg-secondary hover:text-white transition-all">
                                <Instagram />
                            </a>
                            <a href="https://youtube.com/@vidyadeepparamedicalcollege" target="_blank" className="bg-primary/10 p-4 rounded-2xl hover:bg-primary hover:text-white transition-all">
                                <Youtube />
                            </a>
                            <a href="#" className="bg-secondary/10 p-4 rounded-2xl hover:bg-secondary hover:text-white transition-all">
                                <Facebook />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <GlassCard className="p-8 md:p-12 shadow-2xl border-t-8 border-secondary">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-sm font-bold text-primary uppercase">Full Name</Label>
                                        <Input id="name" placeholder="John Doe" required className="h-12 rounded-xl" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-bold text-primary uppercase">Email</Label>
                                        <Input id="email" type="email" placeholder="john@example.com" required className="h-12 rounded-xl" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject" className="text-sm font-bold text-primary uppercase">Subject</Label>
                                    <Input id="subject" placeholder="Admission Inquiry" required className="h-12 rounded-xl" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-sm font-bold text-primary uppercase">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Type your message here..."
                                        className="min-h-[200px] rounded-xl"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-14 rounded-full text-lg font-bold bg-secondary hover:bg-secondary/90 shadow-xl"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    <Send className="ml-2 h-5 w-5" />
                                </Button>
                            </form>
                        </GlassCard>
                    </div>
                </div>
            </Section>

            {/* Campus Location Map */}
            <section className="h-[500px] w-full relative grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3511.2343248881335!2d76.814234!3d28.445353999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI2JzQzLjMiTiA3Niw0OCc1MS4yIkU!5e0!3m2!1sen!2sin!4v1715424853245!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                ></iframe>
                <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-96 bg-white p-6 rounded-3xl shadow-2xl border border-primary/10">
                    <h4 className="font-outfit font-bold text-primary mb-2 flex items-center gap-2">
                        <MapPin className="text-secondary h-4 w-4" /> Find Us on Campus
                    </h4>
                    <p className="text-sm text-muted-foreground">
                        Our campus is easily accessible via Haily Mandi Road, located right opposite the Nayara Petrol Pump.
                    </p>
                </div>
            </section>

            {/* FAQ Link */}
            <Section bg="gray" className="py-20 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                    <HelpCircle className="h-12 w-12 text-secondary mx-auto" />
                    <h2 className="text-3xl font-bold font-outfit text-primary">Still Have Questions?</h2>
                    <p className="text-muted-foreground">
                        Check out our help center or call our admission help desk directly. We are happy to assist you in choosing the right path for your medical career.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button variant="outline" className="rounded-full shadow-sm">Visit Help Desk</Button>
                        <Button className="rounded-full shadow-md">Call Now</Button>
                    </div>
                </div>
            </Section>
        </div>
    )
}
