"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "@/i18n/routing"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/data/projects"
import { cn } from "@/lib/utils"

interface HeroShowcaseProps {
  projects: Project[]
  categoryLabel: (category: Project["category"]) => string
  featuredLabel: string
}

export function HeroShowcase({ projects, categoryLabel, featuredLabel }: HeroShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (projects.length <= 1) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length)
    }, 4000)

    return () => window.clearInterval(timer)
  }, [projects.length])

  if (projects.length === 0) return null

  return (
    <>
      {/* Mobile: horizontal swipe */}
      <div className="lg:hidden -mx-4 px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 text-center">
          {featuredLabel}
        </p>
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative shrink-0 w-[72vw] max-w-[280px] snap-center"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 bg-card shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-active:scale-105"
                  sizes="72vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-wider mb-1 block">
                    {categoryLabel(project.category)}
                  </span>
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      className="text-sm font-bold text-white line-clamp-2 leading-snug"
                      style={{ fontFamily: "var(--font-cabinet)" }}
                    >
                      {project.title}
                    </h3>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop: stacked card showcase */}
      <div className="hidden lg:block relative h-[520px]">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
          {featuredLabel}
        </p>

        <div className="relative h-[480px]">
          {projects.map((project, index) => {
            const offset = (index - activeIndex + projects.length) % projects.length
            const isActive = offset === 0

            return (
              <motion.div
                key={project.slug}
                className="absolute inset-0"
                animate={{
                  zIndex: projects.length - offset,
                  x: offset * 28,
                  y: offset * 18,
                  scale: 1 - offset * 0.045,
                  rotate: offset * 2.5,
                  opacity: offset > 2 ? 0 : 1 - offset * 0.12,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className={cn(
                    "group block relative h-full overflow-hidden rounded-3xl border bg-card shadow-2xl transition-shadow duration-500",
                    isActive ? "border-primary/30 shadow-primary/10" : "border-border/50"
                  )}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="540px"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key={project.slug}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-x-0 bottom-0 p-8"
                      >
                        <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">
                          {categoryLabel(project.category)}
                        </span>
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <h3
                              className="text-2xl font-bold text-white mb-2"
                              style={{ fontFamily: "var(--font-cabinet)" }}
                            >
                              {project.title}
                            </h3>
                            <p className="text-white/70 text-sm line-clamp-2 max-w-md">
                              {project.shortDescription}
                            </p>
                          </div>
                          <div className="shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                            <ArrowUpRight className="w-5 h-5" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="absolute -bottom-1 left-0 flex gap-2">
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              aria-label={`Show ${project.title}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === activeIndex ? "w-8 bg-primary" : "w-3 bg-foreground/20 hover:bg-foreground/35"
              )}
            />
          ))}
        </div>
      </div>
    </>
  )
}
