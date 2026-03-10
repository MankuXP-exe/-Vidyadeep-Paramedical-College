"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
    Users,
    MessageSquare,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    Clock,
    CheckCircle2,
    Calendar,
    ChevronRight
} from "lucide-react"
import { GlassCard } from "@/components/ui/custom-sections"
import { Button } from "@/components/ui/button"

const stats = [
    { label: "Admissions Applications", value: "24", change: "+12% from last week", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "New Messages", value: "8", change: "+2 from yesterday", icon: MessageSquare, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Gallery Photos", value: "116", change: "Updated 2h ago", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
]

const recentApplications = [
    { name: "Amit Kumar", course: "BSc Nursing", date: "2024-03-08", status: "Pending" },
    { name: "Priya Singh", course: "DMLT", date: "2024-03-07", status: "Reviewed" },
    { name: "Rohan Yadav", course: "BPT", date: "2024-03-07", status: "Accepted" },
    { name: "Sonia Sharma", course: "ANM", date: "2024-03-06", status: "Pending" },
]

export default function AdminDashboard() {
    return (
        <div className="space-y-10 pb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-outfit font-bold text-primary">Dashboard Overview</h1>
                    <p className="text-muted-foreground mt-1">Welcome back, Admin. Here is what is happening today.</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="rounded-xl font-bold bg-white h-12 shadow-sm">
                        <Calendar className="mr-2 h-4 w-4" /> Download Report
                    </Button>
                    <Button className="rounded-xl font-bold bg-primary hover:bg-primary/90 text-white h-12 shadow-lg">
                        Create New Post
                    </Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <GlassCard className="p-8 border-none bg-white shadow-xl shadow-gray-200/50">
                            <div className="flex justify-between items-start mb-6">
                                <div className={cn("p-4 rounded-2xl", stat.bg)}>
                                    <stat.icon className={cn("h-6 w-6", stat.color)} />
                                </div>
                                <div className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                    <ArrowUpRight className="h-3 w-3" />
                                    {stat.change.split(' ')[0]}
                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                            <h3 className="text-4xl font-bold font-outfit text-primary mt-2">{stat.value}</h3>
                            <p className="text-[10px] text-muted-foreground mt-4 font-bold uppercase tracking-wider">{stat.change.substring(stat.change.indexOf(' ') + 1)}</p>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Applications Table */}
                <div className="lg:col-span-2">
                    <GlassCard className="p-0 border-none bg-white shadow-xl">
                        <div className="p-8 border-b flex items-center justify-between">
                            <h3 className="text-xl font-outfit font-bold text-primary">Recent Applications</h3>
                            <Button variant="link" className="text-primary font-bold">View All <ChevronRight className="h-4 w-4 ml-1" /></Button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50/50 text-left border-b">
                                        <th className="px-8 py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Student Name</th>
                                        <th className="px-8 py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Course</th>
                                        <th className="px-8 py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Date</th>
                                        <th className="px-8 py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {recentApplications.map((app, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                                            <td className="px-8 py-6 font-bold text-primary">{app.name}</td>
                                            <td className="px-8 py-6 text-sm text-muted-foreground font-medium">{app.course}</td>
                                            <td className="px-8 py-6 text-sm text-muted-foreground">{app.date}</td>
                                            <td className="px-8 py-6">
                                                <span className={cn(
                                                    "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                                                    app.status === "Pending" ? "bg-amber-100 text-amber-700" :
                                                        app.status === "Accepted" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                                                )}>
                                                    {app.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </GlassCard>
                </div>

                {/* Quick Actions / Recent Activity */}
                <div className="space-y-8">
                    <GlassCard className="p-8 border-none bg-white shadow-xl">
                        <h3 className="text-xl font-outfit font-bold text-primary mb-6">Recent Activity</h3>
                        <div className="space-y-6">
                            {[
                                { icon: Clock, text: "A new inquiry received from S. Sharma", time: "2 min ago", color: "text-blue-500" },
                                { icon: CheckCircle2, text: "Gallery updated with 4 new photos", time: "1 hour ago", color: "text-green-500" },
                                { icon: Users, text: "Application status changed for Rahul Verma", time: "3 hours ago", color: "text-purple-500" },
                            ].map((activity, idx) => (
                                <div key={idx} className="flex gap-4 group cursor-default">
                                    <div className={cn("mt-1 p-2 bg-gray-50 rounded-xl group-hover:bg-primary/5 transition-colors", activity.color)}>
                                        <activity.icon className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-primary group-hover:text-primary transition-colors leading-snug">{activity.text}</p>
                                        <p className="text-[10px] text-muted-foreground font-medium uppercase mt-1 tracking-widest">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>

                    <div className="bg-primary p-8 rounded-[32px] text-white shadow-2xl relative overflow-hidden">
                        <h3 className="text-2xl font-outfit font-bold mb-4">College Update</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">You have 12 pending student applications that need review before the June batch start date.</p>
                        <Button className="w-full rounded-2xl bg-white text-primary hover:bg-gray-100 font-bold h-12">Review Apps</Button>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ")
}
