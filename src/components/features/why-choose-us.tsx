"use client"

import Image from "next/image"
import { Award, Clock, Lightbulb, Users, ShieldCheck, Sparkles } from "lucide-react"
import { ScrollReveal, StaggerContainer } from "@/components/ui/scroll-reveal"

import { useTranslations } from "next-intl"

// ... imports

// Update features array to use keys instead of hardcoded text
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
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <ScrollReveal variant="fade-right" className="relative group">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
                alt="Our printing facility"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              
              {/* Floating stat card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover-glow transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-extrabold text-[#FFD700]" style={{ fontFamily: 'var(--font-cabinet)' }}>
                      10+
                    </div>
                    <div className="text-white font-medium">{t('yearsExcellence')}</div>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <Award className="w-8 h-8 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div>
            <ScrollReveal className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {t('pill')}
              </div>
              <h2 
                className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
                style={{ fontFamily: 'var(--font-cabinet)' }}
              >
                {t('title')} <span className="text-highlight-yellow">{t('titleHighlight')}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('description')}
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6" stagger={0.05}>
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <ScrollReveal key={feature.key} variant="fade-left" className="group">
                    <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-primary/20 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_-3px_var(--primary)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-cabinet)' }}>
                          {t(`items.${feature.key}.title`)}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
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
