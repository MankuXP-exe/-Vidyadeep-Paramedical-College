"use client"

import * as React from "react"
import { Save, Shield, Globe, Bell, Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GlassCard } from "@/components/ui/custom-sections"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
    return (
        <div className="space-y-8 pb-20">
            <div>
                <h1 className="text-3xl font-outfit font-bold text-primary">System Settings</h1>
                <p className="text-muted-foreground mt-1">Configure your website's global settings and security preferences.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <GlassCard className="p-8 border-none bg-white shadow-xl">
                        <h3 className="text-xl font-outfit font-bold text-primary mb-6 flex items-center gap-2">
                            <Globe className="h-5 w-5 text-secondary" /> General Configuration
                        </h3>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="site-name">Website Title</Label>
                                    <Input id="site-name" defaultValue="Vidyadeep Paramedical College" className="h-11 rounded-xl" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="contact-email">Primary Contact Email</Label>
                                    <Input id="contact-email" defaultValue="info@vidyadeepcollege.com" className="h-11 rounded-xl" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="meta-desc">Global SEO Description</Label>
                                <Input id="meta-desc" defaultValue="Build Your Medical Career with Vidyadeep Paramedical College..." className="h-11 rounded-xl" />
                            </div>
                        </div>
                        <Separator className="my-8" />
                        <Button className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold h-11 px-8">
                            <Save className="mr-2 h-4 w-4" /> Save Changes
                        </Button>
                    </GlassCard>

                    <GlassCard className="p-8 border-none bg-white shadow-xl">
                        <h3 className="text-xl font-outfit font-bold text-primary mb-6 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-secondary" /> Security & Authentication
                        </h3>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="curr-pass">Current Password</Label>
                                <Input id="curr-pass" type="password" placeholder="••••••••" className="h-11 rounded-xl" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="new-pass">New Password</Label>
                                    <Input id="new-pass" type="password" placeholder="Minimum 8 characters" className="h-11 rounded-xl" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="conf-pass">Confirm Password</Label>
                                    <Input id="conf-pass" type="password" placeholder="Re-enter to confirm" className="h-11 rounded-xl" />
                                </div>
                            </div>
                        </div>
                        <Separator className="my-8" />
                        <Button variant="secondary" className="rounded-xl bg-secondary hover:bg-secondary/90 text-white font-bold h-11 px-8">
                            Update Password
                        </Button>
                    </GlassCard>
                </div>

                <div className="space-y-6">
                    <GlassCard className="p-8 border-none bg-white shadow-xl">
                        <h3 className="text-lg font-outfit font-bold text-primary mb-4 flex items-center gap-2">
                            <Bell className="h-5 w-5 text-secondary" /> Notification Center
                        </h3>
                        <div className="space-y-4">
                            {[
                                { label: "New Application Alerts", active: true },
                                { label: "Message Center Sync", active: true },
                                { label: "Daily Activity Summary", active: false },
                                { label: "System Update Alerts", active: true }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
                                    <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                                    <div className={cn("w-10 h-5 rounded-full relative transition-colors", item.active ? "bg-green-500" : "bg-gray-200")}>
                                        <div className={cn("absolute top-1 w-3 h-3 bg-white rounded-full transition-all", item.active ? "right-1" : "left-1")} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>

                    <div className="bg-primary/5 p-8 rounded-[32px] border border-dashed border-primary/20">
                        <h4 className="font-bold text-primary flex items-center gap-2 mb-2">
                            <Lock className="h-4 w-4" /> Pro Guard
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed italic">
                            "Your admin panel is protected by role-based authentication and CSRF filters. Ensure your password is rotated every 3 months for peak security."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ")
}
