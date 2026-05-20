"use client"

import Image from "next/image"
import { Award, Clock, Lightbulb, Users, ShieldCheck, Sparkles } from "lucide-react"
import { ScrollReveal, StaggerContainer } from "@/components/ui/scroll-reveal"

import { useTranslations } from "next-intl"
import { productMedia } from "@/data/media-assets"

const features = [
  { icon: Award, key: "quality" },
  { icon: Clock, key: "turnaround" },
  { icon: Lightbulb, key: "design" },
  { icon: Users, key: "support" },
  { icon: Sparkles, key: "technology" },
  { icon: ShieldCheck, key: "satisfaction" },
]

export function WhyChooseUs() {
  const t = useTranslations('WhyChooseUs')

  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Image */}
          <ScrollReveal variant="fade-right" className="relative group">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={productMedia.printo}
                alt="Printify Qatar print work"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              
              {/* Floating stat card */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-6 border border-white/20 hover-glow transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl md:text-4xl font-extrabold text-[#FFD700]" style={{ fontFamily: 'var(--font-cabinet)' }}>
                      10+
                    </div>
                    <div className="text-white text-sm md:text-base font-medium">{t('yearsExcellence')}</div>
                  </div>
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <Award className="w-5 h-5 md:w-8 md:h-8 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div>
            <ScrollReveal className="mb-6 md:mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {t('pill')}
              </div>
              <h2 
                className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-3 md:mb-6"
                style={{ fontFamily: 'var(--font-cabinet)' }}
              >
                {t('title')} <span className="text-highlight-yellow">{t('titleHighlight')}</span>
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed hidden sm:block">
                {t('description')}
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-2 gap-2.5 md:gap-6" stagger={0.05}>
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <ScrollReveal key={feature.key} variant="fade-left" className="group">
                    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-5 p-3 sm:p-4 rounded-xl md:rounded-2xl hover:bg-white/5 border border-border/50 sm:border-transparent hover:border-primary/20 transition-all duration-300 h-full">
                      <div className="flex-shrink-0 w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-sm">
                        <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-lg font-bold text-foreground mb-0.5 sm:mb-1 group-hover:text-primary transition-colors line-clamp-2 leading-snug" style={{ fontFamily: 'var(--font-cabinet)' }}>
                          {t(`items.${feature.key}.title`)}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-none group-hover:text-foreground/80 transition-colors">
                          {t(`items.${feature.key}.desc`)}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
