"use client"

import { useTheme } from "next-themes"
import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { Link } from "@/i18n/routing"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

import { useTranslations } from "next-intl"
import { getVisibleProjects } from "@/data/projects"
import { HeroBackground } from "@/components/features/hero-background"
import { HeroShowcase } from "@/components/features/hero-showcase"

const MOBILE_QUERY = "(max-width: 768px)"
const SHOWCASE_SLUGS = [
  "product-packaging",
  "garangaooh",
  "retail-signage",
] as const

export function Hero() {
  const t = useTranslations("Hero")
  const tPortfolio = useTranslations("PortfolioPreview.categories")
  const { scrollYProgress } = useScroll()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const cardY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  const showcaseProjects = useMemo(
    () =>
      SHOWCASE_SLUGS.map((slug) => getVisibleProjects().find((project) => project.slug === slug)).filter(
        (project): project is NonNullable<typeof project> => project !== undefined
      ),
    []
  )

  useEffect(() => {
    setMounted(true)

    const mediaQuery = window.matchMedia(MOBILE_QUERY)
    const updateMobile = () => setIsMobile(mediaQuery.matches)

    updateMobile()
    mediaQuery.addEventListener("change", updateMobile)
    return () => mediaQuery.removeEventListener("change", updateMobile)
  }, [])

  const raysColor = mounted && resolvedTheme === "dark" ? "#FFD700" : "#d4af37"

  return (
    <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center overflow-hidden pt-24 pb-10 md:pb-16 bg-background transition-colors duration-500">
      <HeroBackground isMobile={isMobile} mounted={mounted} raysColor={raysColor} />

      <div className="container relative z-10 px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <motion.div
            style={{ y: isMobile ? 0 : cardY, scale: isMobile ? 1 : textScale }}
            className="relative z-10 text-center lg:text-start"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-5 md:mb-6 border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {t("pill")}
              </div>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter text-foreground mb-5 md:mb-6 drop-shadow-2xl"
                style={{ fontFamily: "var(--font-cabinet)" }}
              >
                {t("title")} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-primary animate-gradient-x underline decoration-wavy decoration-primary/30 decoration-4 underline-offset-8">
                  {t("titleHighlight")}
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-7 md:mb-8 leading-relaxed font-medium">
                {t("description")}
              </p>

              <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0 sm:max-w-none sm:flex sm:flex-row sm:items-center sm:gap-4">
                <Button
                  size="lg"
                  className="h-12 sm:h-14 px-4 sm:px-8 rounded-full text-sm sm:text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105"
                  asChild
                >
                  <Link href="/services">
                    {t("buttons.explore")}
                    <ArrowRight className="ms-1.5 sm:ms-2 h-4 w-4 sm:h-5 sm:w-5 hidden sm:inline" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 sm:h-14 px-4 sm:px-8 rounded-full text-sm sm:text-lg font-bold border-2 hover:bg-secondary/50 transition-all hover:scale-105"
                  asChild
                >
                  <Link href="/projects">{t("buttons.work")}</Link>
                </Button>
              </div>

              {/* Printo guide */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="mt-6 md:mt-8 flex items-end justify-center lg:justify-start gap-3"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-14 h-14 md:w-16 md:h-16 shrink-0"
                >
                  <Image
                    src="/printo.png"
                    alt="Printo"
                    fill
                    className="object-contain drop-shadow-lg"
                    sizes="64px"
                  />
                </motion.div>

                <Link
                  href="/contact"
                  className="group relative max-w-[240px] sm:max-w-xs rounded-2xl rounded-bl-md px-4 py-3 bg-background/80 backdrop-blur-sm border border-border shadow-md hover:border-yellow-400/50 transition-colors text-start"
                >
                  <p className="text-sm font-medium text-foreground leading-snug">
                    {t("printoBubble")}
                  </p>
                  <span className="absolute -bottom-2 start-5 w-4 h-4 rotate-45 bg-background border-b border-s border-border group-hover:border-yellow-400/50 transition-colors" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Project showcase */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <HeroShowcase
              projects={showcaseProjects}
              categoryLabel={(category) => tPortfolio(category)}
              featuredLabel={t("showcaseLabel")}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2 text-muted-foreground/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-medium uppercase tracking-widest">{t("scroll")}</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  )
}
