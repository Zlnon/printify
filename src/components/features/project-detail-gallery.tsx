"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectDetailGalleryProps {
  images: string[]
  title: string
  galleryLabel: string
  closeLabel: string
  previousLabel: string
  nextLabel: string
}

export function ProjectDetailGallery({
  images,
  title,
  galleryLabel,
  closeLabel,
  previousLabel,
  nextLabel,
}: ProjectDetailGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setActiveIndex(null), [])

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length
    )
  }, [images.length])

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % images.length
    )
  }, [images.length])

  useEffect(() => {
    if (activeIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox()
      if (event.key === "ArrowLeft") showPrevious()
      if (event.key === "ArrowRight") showNext()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeIndex, closeLightbox, showNext, showPrevious])

  if (images.length === 0) return null

  return (
    <>
      <div>
        <h2
          className="text-xl md:text-2xl font-bold mb-4 md:mb-8"
          style={{ fontFamily: "var(--font-cabinet)" }}
        >
          {galleryLabel}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
          {images.map((img, index) => (
            <button
              key={`${img}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "group relative overflow-hidden rounded-xl md:rounded-2xl border border-border/50 bg-muted text-start",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                index === 0 && images.length % 2 !== 0
                  ? "col-span-2 aspect-[16/10] md:col-span-1 md:aspect-[4/3]"
                  : "aspect-square md:aspect-[4/3]"
              )}
              aria-label={`${title} - ${index + 1}`}
            >
              <Image
                src={img}
                alt={`${title} - ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              <span className="absolute bottom-3 end-3 w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm border border-border/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-foreground" />
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label={closeLabel}
              className="absolute top-4 end-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    showPrevious()
                  }}
                  aria-label={previousLabel}
                  className="absolute start-3 md:start-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    showNext()
                  }}
                  aria-label={nextLabel}
                  className="absolute end-3 md:end-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl aspect-[4/3] md:aspect-[16/10]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={images[activeIndex]}
                alt={`${title} - ${activeIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {activeIndex + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
