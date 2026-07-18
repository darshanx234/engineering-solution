"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, ZoomIn, Expand } from "lucide-react"

interface ImageGalleryProps {
    images: string[]
    projectTitle: string
}

const masonryConfig = [
    "col-span-2 row-span-2", // large
    "col-span-1 row-span-1", // small
    "col-span-1 row-span-1", // small
    "col-span-1 row-span-2", // tall
    "col-span-1 row-span-1", // small
    "col-span-2 row-span-1", // wide
]

export function ImageGallery({ images, projectTitle }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)
    const [isZoomed, setIsZoomed] = useState(false)

    const openLightbox = (index: number) => {
        setSelectedImage(index)
        setIsZoomed(false)
    }

    const closeLightbox = () => {
        setSelectedImage(null)
        setIsZoomed(false)
    }

    const nextImage = useCallback(() => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % images.length)
            setIsZoomed(false)
        }
    }, [selectedImage, images.length])

    const prevImage = useCallback(() => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + images.length) % images.length)
            setIsZoomed(false)
        }
    }, [selectedImage, images.length])

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (selectedImage === null) return
            if (e.key === "ArrowRight") nextImage()
            if (e.key === "ArrowLeft") prevImage()
            if (e.key === "Escape") closeLightbox()
        }
        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [selectedImage, nextImage, prevImage])

    // Aspect ratios to create visual variety
    const aspectRatios = [
        "aspect-[16/10]",
        "aspect-[4/3]",
        "aspect-[3/4]",
        "aspect-[1/1]",
        "aspect-[4/3]",
        "aspect-[16/9]",
    ]

    return (
        <>
            {/* Masonry-style Gallery Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="group relative cursor-pointer overflow-hidden break-inside-avoid mb-4 rounded-sm"
                        onClick={() => openLightbox(index)}
                    >
                        {/* Image wrapper — full natural display */}
                        <div className="relative w-full overflow-hidden bg-stone-100">
                            <Image
                                src={image}
                                alt={`${projectTitle} — View ${index + 1}`}
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                quality={75}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end justify-between p-4">
                                <span className="text-white/90 text-[10px] uppercase tracking-[0.25em] font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {projectTitle}
                                </span>
                                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    <Expand className="h-3.5 w-3.5 text-white" />
                                </div>
                            </div>
                            {/* Image index */}
                            <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-[9px] font-mono text-white/60 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                                    {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] flex flex-col bg-black/98 backdrop-blur-md"
                        onClick={closeLightbox}
                    >
                        {/* Top bar */}
                        <div
                            className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="space-y-0.5">
                                <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">Project Gallery</p>
                                <p className="text-xs font-light text-white/80 tracking-wide">{projectTitle}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-mono text-white/30">
                                    {String(selectedImage + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                                </span>
                                <button
                                    onClick={closeLightbox}
                                    className="flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-[9px] uppercase tracking-wider text-white/60 hover:text-white transition-all duration-200"
                                >
                                    <X className="h-3 w-3" />
                                    Close
                                </button>
                            </div>
                        </div>

                        {/* Main image area */}
                        <div
                            className="flex-1 flex items-center justify-center relative px-16 py-6 min-h-0"
                            onClick={closeLightbox}
                        >
                            {/* Prev button */}
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage() }}
                                className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 hover:bg-white/15 text-white transition-all duration-200 hover:border-white/30"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>

                            {/* Image */}
                            <motion.div
                                key={selectedImage}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="relative max-h-full max-w-full flex items-center justify-center"
                                onClick={(e) => e.stopPropagation()}
                                style={{ maxHeight: "calc(100vh - 200px)" }}
                            >
                                <img
                                    src={images[selectedImage]}
                                    alt={`${projectTitle} — View ${selectedImage + 1}`}
                                    className="max-h-full max-w-full object-contain"
                                    style={{ maxHeight: "calc(100vh - 200px)" }}
                                />
                            </motion.div>

                            {/* Next button */}
                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage() }}
                                className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 hover:bg-white/15 text-white transition-all duration-200 hover:border-white/30"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Thumbnail strip */}
                        <div
                            className="flex-shrink-0 border-t border-white/10 px-6 py-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex gap-2 justify-center overflow-x-auto scrollbar-hide">
                                {images.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => { setSelectedImage(i); setIsZoomed(false) }}
                                        className={`relative flex-shrink-0 h-14 w-20 overflow-hidden transition-all duration-200 ${
                                            i === selectedImage
                                                ? "ring-1 ring-white/70 opacity-100"
                                                : "opacity-40 hover:opacity-70 ring-1 ring-white/10"
                                        }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Thumbnail ${i + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="80px"
                                            quality={40}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
