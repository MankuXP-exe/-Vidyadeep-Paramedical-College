"use client"

import * as React from "react"
import {
    Mail,
    Search,
    Trash2,
    CheckCircle2,
    Clock,
    Reply,
    Archive,
    Star as StarIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GlassCard } from "@/components/ui/custom-sections"

const messages = [
    { id: "1", from: "Rajesh Kumar", email: "rajesh@example.com", subject: "Inquiry about DMLT Batch", text: "I want to know the fee structure for DMLT course starting in June.", date: "2 Hours ago", isRead: false },
    { id: "2", from: "Sneha Gupta", email: "sneha.g@example.com", subject: "BSc Nursing Eligibility", text: "Can you confirm if 12th PCM students are eligible for BSc Nursing?", date: "5 Hours ago", isRead: true },
    { id: "3", from: "Vikram Singh", email: "vikram.s@example.com", subject: "Hostel Facilities", text: "Do you have separate hostel facilities for boys and girls?", date: "1 Day ago", isRead: true },
]

export default function MessagesPage() {
    return (
        <div className="space-y-8 pb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-outfit font-bold text-primary">Inquiry Messages</h1>
                    <p className="text-muted-foreground mt-1">General questions and inquiries from website visitors.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-250px)]">
                {/* List Side */}
                <div className="lg:col-span-1 space-y-4 overflow-y-auto pr-2">
                    <div className="relative mb-6">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search messages..." className="pl-11 h-12 rounded-2xl bg-white border-none shadow-sm" />
                    </div>

                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={cn(
                                "p-6 rounded-2xl border cursor-pointer transition-all hover:shadow-lg",
                                !msg.isRead ? "bg-white border-l-4 border-l-primary shadow-md" : "bg-gray-50 border-transparent opacity-80"
                            )}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-primary text-sm truncate pr-4">{msg.from}</h4>
                                <span className="text-[10px] font-bold text-muted-foreground uppercase">{msg.date}</span>
                            </div>
                            <p className="font-bold text-xs text-secondary truncate mb-2">{msg.subject}</p>
                            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{msg.text}</p>
                        </div>
                    ))}
                </div>

                {/* Selected Message Preview Side */}
                <div className="lg:col-span-2">
                    <GlassCard className="h-full border-none bg-white shadow-xl flex flex-col">
                        <div className="p-8 border-b flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-outfit font-bold text-primary">Rajesh Kumar</h3>
                                    <p className="text-sm text-muted-foreground">rajesh@example.com</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" className="rounded-xl"><Archive className="h-4 w-4" /></Button>
                                <Button variant="outline" size="icon" className="rounded-xl text-red-600"><Trash2 className="h-4 w-4" /></Button>
                                <Button className="rounded-xl bg-primary text-white font-bold px-6">Reply <Reply className="ml-2 h-4 w-4" /></Button>
                            </div>
                        </div>

                        <div className="flex-1 p-10 overflow-y-auto space-y-8">
                            <div className="flex justify-between items-center bg-gray-50 p-6 rounded-2xl border border-dashed">
                                <div>
                                    <h4 className="font-bold text-primary">Subject: Inquiry about DMLT Batch</h4>
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">Received: Today, 10:32 AM</p>
                                </div>
                                <StarIcon className="h-5 w-5 text-amber-400 fill-amber-400" />
                            </div>

                            <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed text-base">
                                <p>Dear Admissions Office,</p>
                                <p>I am Rajesh Kumar, and I am interested in enrolling for the Diploma in Medical Laboratory Technology (DMLT) course at Vidyadeep Paramedical College. I noticed that the summer batch starts in June.</p>
                                <p>Could you please provide me with more details regarding the fee structure, installment options, and whether there are any scholarships available for students from Gurugram area?</p>
                                <p>I would also like to visit the campus next Friday for a tour. Please let me know if I need to book an appointment.</p>
                                <p>Thank you,<br />Rajesh Kumar<br />+91 9876543210</p>
                            </div>
                        </div>

                        <div className="p-6 border-t bg-gray-50/50">
                            <div className="flex items-center gap-2 text-xs font-bold text-primary">
                                <Clock className="h-4 w-4" /> Message assigned to: Admissions Desk
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    )
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ")
}
