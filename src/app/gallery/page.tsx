"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from "lucide-react"
import { Section, SectionTitle } from "@/components/ui/custom-sections"
import { Button } from "@/components/ui/button"

const galleryItems = [
    { id: 1, title: "Modern Reception", category: "Campus", src: "/images/reception look.webp" },
    { id: 2, title: "High-Tech Lab", category: "Facilities", src: "https://images.unsplash.com/photo-1579154235602-282425b9bb7a?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Smart Classroom", category: "Campus", src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Library", category: "Facilities", src: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "Physiotherapy Lab", category: "Laboratories", src: "https://images.unsplash.com/photo-1576091160550-217359f4814c?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "Student Activities", category: "Events", src: "https://images.unsplash.com/photo-1523580494863-6f30312245d5?auto=format&fit=crop&q=80&w=800" },
    { id: 7, title: "OT Simulation", category: "Laboratories", src: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" },
    { id: 8, title: "Dental Lab", category: "Laboratories", src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" },
    { id: 9, title: "Campus Entrance", category: "Campus", src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800" }
]

const categories = ["All", "Campus", "Facilities", "Laboratories", "Events"]

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = React.useState("All")
    const [selectedImage, setSelectedImage] = React.useState<null | number>(null)

    const filteredItems = galleryItems.filter(item =>
        activeCategory === "All" || item.category === activeCategory
    )

    const handleNext = () => {
        setSelectedImage((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : prev))
    }

    const handlePrev = () => {
        setSelectedImage((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))
    }

    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-primary pt-32 pb-24 text-white text-center">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-outfit font-bold mb-6"
                    >
                        Campus & Facilities Gallery
                    </motion.h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Take a virtual tour of our state-of-the-art campus, high-tech laboratories, and modern classrooms.
                    </p>
                </div>
            </section>

            <Section bg="white">
                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={activeCategory === cat ? "default" : "outline"}
                            onClick={() => setActiveCategory(cat)}
                            className="rounded-full px-8 py-6 text-base shadow-sm transition-all border-primary/20"
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative h-[350px] rounded-3xl overflow-hidden cursor-pointer shadow-xl"
                                onClick={() => setSelectedImage(idx)}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-1">{item.category}</p>
                                    <h3 className="text-white text-xl font-bold font-outfit flex items-center justify-between">
                                        {item.title} <Maximize2 className="h-5 w-5 text-secondary" />
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </Section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-8 right-8 text-white hover:bg-white/10 rounded-full h-12 w-12"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="h-8 w-8" />
                        </Button>

                        <div className="relative w-full max-w-6xl aspect-video flex items-center justify-center">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute left-4 z-10 text-white hover:bg-white/10 rounded-full h-12 w-12 hidden md:flex"
                                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                                disabled={selectedImage === 0}
                            >
                                <ChevronLeft className="h-8 w-8" />
                            </Button>

                            <motion.div
                                key={selectedImage}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative w-full h-full rounded-2xl overflow-hidden"
                            >
                                <Image
                                    src={galleryItems[selectedImage].src}
                                    alt={galleryItems[selectedImage].title}
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-4 z-10 text-white hover:bg-white/10 rounded-full h-12 w-12 hidden md:flex"
                                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                                disabled={selectedImage === galleryItems.length - 1}
                            >
                                <ChevronRight className="h-8 w-8" />
                            </Button>
                        </div>

                        <div className="absolute bottom-8 text-center text-white">
                            <h4 className="text-2xl font-bold font-outfit">{galleryItems[selectedImage].title}</h4>
                            <p className="text-secondary font-bold">{galleryItems[selectedImage].category}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Admin Suggestion */}
            <Section bg="gray" className="text-center py-20">
                <div className="max-w-xl mx-auto space-y-6">
                    <Camera className="h-12 w-12 text-primary mx-auto opacity-30" />
                    <h2 className="text-3xl font-bold font-outfit text-primary">Capture Your Future</h2>
                    <p className="text-muted-foreground">
                        Join our campus and be part of the most vibrant medical community in Gurugram.
                    </p>
                    <Button asChild className="rounded-full shadow-lg">
                        <a href="/admissions">Join Our Next Batch</a>
                    </Button>
                </div>
            </Section>
        </div>
    )
}
