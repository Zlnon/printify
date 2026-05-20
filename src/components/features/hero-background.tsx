"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Printer, ImageIcon, Package, PenTool } from "lucide-react"
import LightRays from "@/components/ui/light-rays"
import { cn } from "@/lib/utils"

const FLOATING_ICONS = [
  { Icon: Printer, className: "top-[18%] left-[8%]", delay: "0s" },
  { Icon: ImageIcon, className: "top-[28%] right-[10%]", delay: "1.2s" },
  { Icon: Package, className: "bottom-[32%] left-[12%]", delay: "2.4s" },
  { Icon: PenTool, className: "bottom-[24%] right-[8%]", delay: "0.8s" },
] as const

interface HeroBackgroundProps {
  isMobile: boolean
  mounted: boolean
  raysColor: string
}

export function HeroBackground({ isMobile, mounted, raysColor }: HeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const glowX = useSpring(mouseX, { damping: 30, stiffness: 180 })
  const glowY = useSpring(mouseY, { damping: 30, stiffness: 180 })

  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      mouseX.set(event.clientX - rect.left)
      mouseY.set(event.clientY - rect.top)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isMobile, mouseX, mouseY])

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Mobile: static gradient mesh + grain */}
      {isMobile && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.18),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,215,0,0.08),transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.35] mix-blend-multiply dark:mix-blend-soft-light bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.04%22/%3E%3C/svg%3E')]" />
        </>
      )}

      {/* Desktop: light rays + mouse glow */}
      {!isMobile && mounted && (
        <>
          <div className="absolute inset-0 mix-blend-normal dark:mix-blend-screen">
            <LightRays
              raysOrigin="top-center"
              raysColor={raysColor}
              raysSpeed={0.6}
              lightSpread={0.85}
              followMouse
              mouseInfluence={0.14}
              className="opacity-70 dark:opacity-50"
            />
          </div>

          <motion.div
            className="absolute w-[420px] h-[420px] rounded-full bg-primary/25 blur-[100px]"
            style={{ x: glowX, y: glowY, translateX: "-50%", translateY: "-50%" }}
          />
        </>
      )}

      {/* Shared ambient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[680px] md:h-[680px] bg-primary/15 md:bg-primary/20 rounded-full blur-[70px] md:blur-[120px] animate-pulse" />

      {/* Floating print icons */}
      {FLOATING_ICONS.map(({ Icon, className, delay }) => (
        <div
          key={className}
          className={cn(
            "absolute hidden sm:flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-2xl",
            "bg-primary/5 border border-primary/10 text-primary/25 md:text-primary/30",
            "animate-float-particle",
            className
          )}
          style={{ animationDelay: delay }}
        >
          <Icon className="w-4 h-4 md:w-5 md:h-5" />
        </div>
      ))}
    </div>
  )
}
