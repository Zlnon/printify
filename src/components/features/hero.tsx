"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { ArrowRight } from "lucide-react"
import LightRays from "@/components/ui/light-rays"
import { motion, useScroll, useTransform } from "framer-motion"

import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations('Hero')
  const { scrollYProgress } = useScroll()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)


  const cardY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Ray configuration based on theme
  const raysColor = mounted && resolvedTheme === 'dark' ? '#FFD700' : '#d4af37'

  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden pt-20 perspective-1000 bg-background transition-colors duration-500">
      
      {/* LAYER 1: Light Rays (Background) */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-normal dark:mix-blend-screen">
        {mounted && (
            <LightRays
                raysOrigin="top-center"
                raysColor={raysColor}
                raysSpeed={0.6} // Slightly slower for this calmer vibe
                lightSpread={0.8} // Wider spread
                className="opacity-70 dark:opacity-50"
             />
        )}
      </div>

       {/* LAYER 2: Animated Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-pulse pointer-events-none z-0" />


      {/* LAYER 3: Content */}
      <div className="container relative z-10 px-4 text-center">
        <motion.div
           style={{ y: cardY, scale: textScale }}
           className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {t('pill')}
            </div>
            
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground mb-6 drop-shadow-2xl"
              style={{ fontFamily: 'var(--font-cabinet)' }}
            >
              {t('title')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-primary animate-gradient-x underline decoration-wavy decoration-primary/30 decoration-4 underline-offset-8">
                {t('titleHighlight')}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              {t('description')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-14 px-8 rounded-full text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105" asChild>
                <Link href="/services">
                  {t('buttons.explore')} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-lg font-bold border-2 hover:bg-secondary/50 transition-all hover:scale-105" asChild>
                <Link href="/portfolio">
                  {t('buttons.work')}
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted-foreground/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  )
}
