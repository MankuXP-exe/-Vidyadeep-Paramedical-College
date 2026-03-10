"use client"

import * as React from "react"
import { Plus, Trash2, LayoutGrid, List, Search, Filter, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GlassCard } from "@/components/ui/custom-sections"
import Image from "next/image"

const initialImages = [
    { id: 1, title: "Reception Area", category: "Campus", src: "/images/reception look.webp", date: "2024-03-01" },
    { id: 2, title: "Medical Lab", category: "Facilities", src: "https://images.unsplash.com/photo-1579154235602-282425b9bb7a?auto=format&fit=crop&q=80&w=400", date: "2024-03-02" },
    { id: 3, title: "Classroom 101", category: "Campus", src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400", date: "2024-03-03" },
    { id: 4, title: "Library Wing", category: "Facilities", src: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=400", date: "2024-03-04" }
]

export default function GalleryAdminPage() {
    return (
        <div className="space-y-8 pb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-outfit font-bold text-primary">Media Library</h1>
                    <p className="text-muted-foreground mt-1">Manage campus photos, facility images, and event posters.</p>
                </div>
                <Button className="rounded-xl font-bold bg-primary hover:bg-primary/90 text-white h-12 shadow-lg">
                    <Plus className="mr-2 h-5 w-5" /> Upload New Image
                </Button>
            </div>

            <GlassCard className="p-6 border-none bg-white shadow-xl flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search media..." className="pl-11 h-11 rounded-xl bg-gray-50 border-none" />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <Button variant="outline" size="icon" className="rounded-xl h-11 w-11"><LayoutGrid className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" className="rounded-xl h-11 w-11"><List className="h-4 w-4" /></Button>
                    <div className="h-11 w-[1px] bg-gray-200 mx-2" />
                    <Button variant="outline" className="rounded-xl h-11 flex-1 md:flex-none">
                        <Filter className="mr-2 h-4 w-4" /> All Categories
                    </Button>
                </div>
            </GlassCard>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {initialImages.map((img) => (
                    <div key={img.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-100">
                        <div className="aspect-square relative overflow-hidden">
                            <Image
                                src={img.src}
                                alt={img.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                <Button size="icon" variant="secondary" className="rounded-full bg-white text-primary hover:bg-white/90">
                                    <Camera className="h-4 w-4" />
                                </Button>
                                <Button size="icon" variant="destructive" className="rounded-full">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <div className="p-5">
                            <h4 className="font-bold text-primary text-sm truncate">{img.title}</h4>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-[10px] font-black uppercase tracking-widest text-secondary bg-secondary/5 px-2 py-1 rounded">
                                    {img.category}
                                </span>
                                <span className="text-[10px] font-bold text-muted-foreground">{img.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Upload Placeholder */}
                <div className="aspect-square rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-4 text-muted-foreground hover:bg-gray-50 cursor-pointer transition-colors group">
                    <div className="p-4 rounded-full bg-gray-100 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        <Plus className="h-8 w-8" />
                    </div>
                    <p className="text-sm font-bold uppercase tracking-widest">Add Image</p>
                </div>
            </div>
        </div>
    )
}
