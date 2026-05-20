"use client"

import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

import { useTranslations } from "next-intl"
import { getVisibleProjects } from "@/data/projects"

export function PortfolioPreview() {
  const t = useTranslations('PortfolioPreview')

  const previewProjects = getVisibleProjects()

  return (
    <section className="py-12 md:py-24 bg-secondary/30 relative overflow-hidden">
        {/* Parallax Background Elements */}
        <div className="absolute top-1/3 left-10 w-48 h-48 md:w-64 md:h-64 bg-primary/20 rounded-full blur-[60px] md:blur-[100px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-64 h-64 md:w-96 md:h-96 bg-card rounded-full blur-[80px] md:blur-[120px] pointer-events-none opacity-50" />

       {/* Background Text Decoration */}
       <div className="absolute top-20 left-0 w-full overflow-hidden opacity-[0.03] select-none pointer-events-none hidden md:block">
        <div className="whitespace-nowrap font-bold text-[20vw] leading-none animate-marquee">
          {t('watermark')} {t('watermark')}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 md:mb-16 gap-4 md:gap-6">
          <ScrollReveal>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {t('pill')}
            </div>
            <h2 
              className="text-3xl md:text-6xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: 'var(--font-cabinet)' }}
            >
              {t('title')} <span className="text-stroke text-transparent">{t('titleHighlight')}</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal variant="fade-left">
            <Button variant="outline" className="rounded-full px-6 md:px-8 hover-glow group h-10 md:h-11 text-sm md:text-base" asChild>
              <Link href="/projects">
                {t('viewAll')}
                <ArrowRight className="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>

        {/* Mobile: compact 2-col grid | Desktop: masonry columns */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {previewProjects.map((project, i) => (
            <ScrollReveal key={project.id} variant="fade-up" delay={i * 0.05}>
              <Link 
                href={`/projects/${project.slug}`}
                className="group block relative overflow-hidden rounded-2xl bg-background aspect-square"
              >
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                
                <div className="absolute inset-x-0 bottom-0 p-2.5">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-wider mb-0.5 block line-clamp-1">
                    {t('categories.' + project.category)}
                  </span>
                  <h3 
                    className="text-xs font-bold text-white line-clamp-2 leading-tight"
                    style={{ fontFamily: 'var(--font-cabinet)' }}
                  >
                    {project.title}
                  </h3>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="hidden md:block columns-2 gap-8 space-y-8">
          {previewProjects.map((project, i) => (
            <ScrollReveal key={project.id} variant="fade-up" delay={i * 0.1} className="break-inside-avoid">
              <Link 
                href={`/projects/${project.slug}`}
                className={`group block relative overflow-hidden rounded-3xl bg-background hover-glow transition-all duration-500 ${
                  project.size === 'large' ? 'aspect-[4/5]' : 'aspect-square'
                }`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <span className="text-primary text-sm font-bold uppercase tracking-wider mb-2 block">
                      {t('categories.' + project.category)}
                    </span>
                    <div className="flex items-center justify-between">
                      <h3 
                        className="text-2xl font-bold text-white"
                        style={{ fontFamily: 'var(--font-cabinet)' }}
                      >
                        {project.title}
                      </h3>
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
