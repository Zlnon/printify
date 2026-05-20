"use client"

import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { ArrowRight, Phone, CheckCircle } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import DotGrid from "@/components/ui/dot-grid"

import { useTranslations } from "next-intl"
import { siteConfig } from "@/config/site"

export function CtaSection() {
  const t = useTranslations('CtaSection')
  const benefits = ["consultation", "turnaround", "quality"]

  return (
    <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-primary text-primary-foreground">
      {/* Kinetic Background Pattern - desktop only */}
      <div className="absolute inset-0 opacity-20 pointer-events-none hidden md:block">
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#271E37"
            activeColor="#caf104"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
            className="w-full h-full"
        />
      </div>

      <div className="absolute right-0 top-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-white/20 blur-[80px] md:blur-[150px] rounded-full pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-8 drop-shadow-sm"
            style={{ fontFamily: 'var(--font-cabinet)' }}
          >
            {t('title')} <span className="text-white inline-block hover:scale-105 transition-transform duration-300">{t('titleHighlight')}</span><br />
            {t('titleSuffix')}
          </h2>
          
          <p className="text-base md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto mb-6 md:mb-12 font-medium leading-relaxed">
            {t('description')}
          </p>

          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:justify-center sm:gap-6 mb-6 md:mb-12 px-2 max-w-md sm:max-w-none mx-auto">
            <Button 
              size="lg" 
              className="h-12 sm:h-16 px-4 sm:px-10 rounded-full bg-black text-white hover:bg-black/80 hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10 text-sm sm:text-lg font-bold col-span-1"
              asChild
            >
              <Link href="/contact">
                {t('buttons.quote')}
                <ArrowRight className="ms-1.5 sm:ms-2 h-4 w-4 sm:h-5 sm:w-5 hidden sm:inline" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-12 sm:h-16 px-4 sm:px-10 rounded-full border-2 border-black/10 bg-transparent text-black hover:bg-black/5 hover:border-black/30 text-sm sm:text-lg font-bold transition-all duration-300 col-span-1"
              asChild
            >
              <a href={`tel:${siteConfig.contact.phoneTel}`} className="flex items-center justify-center">
                <Phone className="me-1.5 sm:me-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="truncate">{t('buttons.call')}</span>
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-x-8 sm:gap-y-4 max-w-sm sm:max-w-none mx-auto">
            {benefits.map((benefit, i) => (
              <div
                key={benefit}
                className={`flex items-center gap-1.5 sm:gap-2 text-black/80 font-semibold text-xs sm:text-base bg-white/10 px-3 sm:px-4 py-2 rounded-full border border-black/5 ${i === 2 ? "col-span-2 sm:col-span-1 justify-center" : ""}`}
              >
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                <span className="truncate">{t(`benefits.${benefit}`)}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
