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
    <section className="relative py-24 md:py-32 overflow-hidden bg-primary text-primary-foreground">
      {/* Kinetic Background Pattern */}
      {/* Kinetic Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
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

      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-white/20 blur-[150px] rounded-full pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 drop-shadow-sm"
            style={{ fontFamily: 'var(--font-cabinet)' }}
          >
            {t('title')} <span className="text-white inline-block hover:scale-105 transition-transform duration-300">{t('titleHighlight')}</span><br />
            {t('titleSuffix')}
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Button 
              size="lg" 
              className="h-16 px-10 rounded-full bg-black text-white hover:bg-black/80 hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10 text-lg font-bold"
              asChild
            >
              <Link href="/contact">
                {t('buttons.quote')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-16 px-10 rounded-full border-2 border-black/10 bg-transparent text-black hover:bg-black/5 hover:border-black/30 text-lg font-bold transition-all duration-300"
              asChild
            >
              <a href={`tel:${siteConfig.contact.phoneTel}`} className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                {t('buttons.call')}
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-black/80 font-semibold text-sm md:text-base bg-white/10 px-4 py-2 rounded-full border border-black/5">
                <CheckCircle className="h-5 w-5" />
                <span>{t(`benefits.${benefit}`)}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
