"use client"

import * as React from "react"
import Link from "next/link"
import NextImage from "next/image"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import {
    LayoutDashboard,
    Users,
    MessageSquare,
    Image as LucideImage,
    Settings,
    LogOut,
    Menu,
    X,
    FileText
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
    { icon: FileText, label: "Applications", href: "/admin/applications" },
    { icon: MessageSquare, label: "Messages", href: "/admin/messages" },
    { icon: LucideImage, label: "Gallery", href: "/admin/gallery" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
]

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar */}
            <aside
                className={cn(
                    "bg-white border-r w-64 flex flex-col transition-all duration-300 z-50",
                    !isSidebarOpen && "-translate-x-full lg:translate-x-0 lg:w-20"
                )}
            >
                <div className="h-16 flex items-center justify-between px-6 border-b">
                    <Link href="/admin" className="flex items-center gap-3">
                        <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                            <NextImage
                                src="/images/logo.png"
                                alt="Vidyadeep Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className={cn("font-outfit font-bold text-primary text-xl tracking-tight leading-none", !isSidebarOpen && "lg:hidden")}>
                            Admin Panel
                        </span>
                    </Link>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="hidden lg:flex"
                    >
                        {isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </Button>
                </div>

                <nav className="flex-1 py-6 space-y-1 px-3">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium text-sm group",
                                pathname === item.href
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "text-muted-foreground hover:bg-gray-100 hover:text-primary"
                            )}
                        >
                            <item.icon className="h-5 w-5 shrink-0" />
                            <span className={cn("transition-opacity", !isSidebarOpen && "lg:hidden")}>
                                {item.label}
                            </span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t">
                    <Button
                        variant="ghost"
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        className="w-full flex items-center justify-start gap-3 text-red-600 hover:bg-red-50 hover:text-red-700 px-3 py-2.5 rounded-xl transition-all font-medium text-sm"
                    >
                        <LogOut className="h-5 w-5 shrink-0" />
                        <span className={cn(!isSidebarOpen && "lg:hidden")}>Logout</span>
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-white border-b flex items-center justify-between px-8 shrink-0">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="lg:hidden"
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                    <div className="flex items-center gap-4 ml-auto">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-primary">Admin Panel</p>
                            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest leading-none">Vidyadeep College</p>
                        </div>
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary border-2 border-primary/20">
                            A
                        </div>
                    </div>
                </header>

                {/* Dynamic Content */}
                <div className="flex-1 overflow-y-auto p-8 bg-[#F8F9FB]">
                    {children}
                </div>
            </main>
        </div>
    )
}
