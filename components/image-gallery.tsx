"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ImageGalleryProps {
    images: string[]
    projectTitle: string
}

export function ImageGallery({ images, projectTitle }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    const openLightbox = (index: number) => {
        setSelectedImage(index)
    }

    const closeLightbox = () => {
        setSelectedImage(null)
    }

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % images.length)
        }
    }

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + images.length) % images.length)
        }
    }

    return (
        <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg bg-muted"
                        onClick={() => openLightbox(index)}
                    >
                        <Image
                            src={image}
                            alt={`${projectTitle} - Image ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            quality={50}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
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
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                prevImage()
                            }}
                            className="absolute left-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                nextImage()
                            }}
                            className="absolute right-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>

                        <motion.div
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="relative h-[80vh] w-full max-w-6xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={images[selectedImage]}
                                alt={`${projectTitle} - Image ${selectedImage + 1}`}
                                fill
                                className="object-contain"
                            />
                        </motion.div>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                            {selectedImage + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
