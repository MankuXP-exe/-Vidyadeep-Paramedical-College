"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/faculty", label: "Faculty" },
    { href: "/gallery", label: "Gallery" },
    { href: "/placements", label: "Placements" },
    { href: "/contact", label: "Contact" },
]

export function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12 overflow-hidden rounded-lg">
                        <Image
                            src="/images/logo.png"
                            alt="Vidyadeep Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="font-outfit font-bold text-lg sm:text-xl lg:text-2xl text-primary group-hover:text-secondary transition-colors">
                            Vidyadeep Paramedical
                        </span>
                        <span className="font-outfit font-medium text-[10px] sm:text-xs lg:text-sm text-secondary tracking-[0.2em] uppercase mt-0.5">
                            College
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={`transition-colors hover:text-primary relative py-2 ${pathname === route.href ? "text-primary" : "text-muted-foreground"
                                }`}
                        >
                            {route.label}
                            {pathname === route.href && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                    <Link
                        href="/admissions"
                        className="inline-flex items-center justify-center rounded-full px-6 h-9 bg-primary hover:bg-primary/90 text-white shadow-md text-sm font-medium transition-colors"
                    >
                        Apply Now
                    </Link>
                </nav>

                {/* Mobile Nav */}
                <div className="lg:hidden flex items-center">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <div className="inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-muted transition-colors cursor-pointer lg:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </div>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
                            <nav className="flex flex-col gap-4 mt-8">
                                {routes.map((route) => (
                                    <Link
                                        key={route.href}
                                        href={route.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-2 py-1 text-lg font-medium transition-colors hover:text-primary ${pathname === route.href ? "text-primary border-l-2 border-primary pl-4" : "text-muted-foreground"
                                            }`}
                                    >
                                        {route.label}
                                    </Link>
                                ))}
                                <div className="mt-4 pt-4 border-t">
                                    <Link
                                        href="/admissions"
                                        onClick={() => setIsOpen(false)}
                                        className="inline-flex items-center justify-center w-full rounded-full bg-primary hover:bg-primary/90 text-white h-10 font-bold transition-colors"
                                    >
                                        Apply Online
                                    </Link>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
