"use client"

import * as React from "react"
import {
    Search,
    Filter,
    MoreVertical,
    Mail,
    Phone,
    Trash2,
    CheckCircle,
    Clock,
    ExternalLink
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GlassCard } from "@/components/ui/custom-sections"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const applications = [
    { id: "1", name: "Amit Kumar", email: "amit.k@example.com", phone: "+91 9876543210", course: "BSc Nursing", date: "2024-03-08", status: "Pending" },
    { id: "2", name: "Priya Singh", email: "priya.s@example.com", phone: "+91 8765432109", course: "DMLT", date: "2024-03-07", status: "Reviewed" },
    { id: "3", name: "Rohan Yadav", email: "rohan.y@example.com", phone: "+91 7654321098", course: "BPT", date: "2024-03-07", status: "Accepted" },
    { id: "4", name: "Sonia Sharma", email: "sonia.s@example.com", phone: "+91 6543210987", course: "ANM", date: "2024-03-06", status: "Pending" },
    { id: "5", name: "Vikas Verma", email: "vikas.v@example.com", phone: "+91 5432109876", course: "BMLT", date: "2024-03-05", status: "Rejected" },
]

export default function ApplicationsPage() {
    return (
        <div className="space-y-8 pb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-outfit font-bold text-primary">Admission Applications</h1>
                    <p className="text-muted-foreground mt-1">Manage and review student applications for the upcoming batch.</p>
                </div>
                <Button className="rounded-xl font-bold bg-primary hover:bg-primary/90 text-white h-12 shadow-lg">
                    Export to Excel
                </Button>
            </div>

            <GlassCard className="p-0 border-none bg-white shadow-xl overflow-visible">
                <div className="p-6 border-b flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search by name, email or course..." className="pl-11 h-11 rounded-xl bg-gray-50 border-none" />
                    </div>
                    <Button variant="outline" className="rounded-xl h-11 border-gray-200">
                        <Filter className="mr-2 h-4 w-4" /> Filter Status
                    </Button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50/50 text-left border-b">
                                <th className="px-8 py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Student Information</th>
                                <th className="px-8 py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Course Applied</th>
                                <th className="px-8 py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Date</th>
                                <th className="px-8 py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Status</th>
                                <th className="px-8 py-4 text-xs font-bold text-muted-foreground uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {applications.map((app) => (
                                <tr key={app.id} className="hover:bg-gray-50/80 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                                                {app.name[0]}
                                            </div>
                                            <div>
                                                <p className="font-bold text-primary">{app.name}</p>
                                                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                                                    <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> {app.email}</span>
                                                    <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> {app.phone}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-sm font-medium text-primary bg-secondary/5 px-3 py-1 rounded-lg">
                                            {app.course}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-sm text-muted-foreground">{app.date}</td>
                                    <td className="px-8 py-6">
                                        <span className={cn(
                                            "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 w-fit",
                                            app.status === "Pending" ? "bg-amber-100 text-amber-700" :
                                                app.status === "Accepted" ? "bg-green-100 text-green-700" :
                                                    app.status === "Rejected" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
                                        )}>
                                            {app.status === "Pending" && <Clock className="h-3 w-3" />}
                                            {app.status === "Accepted" && <CheckCircle className="h-3 w-3" />}
                                            {app.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100 p-2 cursor-pointer outline-none">
                                                <MoreVertical className="h-4 w-4 text-muted-foreground" />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className="w-48 rounded-xl p-2">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem className="rounded-lg gap-2 cursor-pointer">
                                                    <ExternalLink className="h-4 w-4" /> View Details
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="rounded-lg gap-2 cursor-pointer text-green-600">
                                                    <CheckCircle className="h-4 w-4" /> Accept
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="rounded-lg gap-2 cursor-pointer text-red-600">
                                                    <Trash2 className="h-4 w-4" /> Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </GlassCard>
        </div>
    )
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ")
}
