"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { ScrollReveal, StaggerContainer } from "@/components/ui/scroll-reveal"
import { useTranslations } from "next-intl"

const testimonials = [
  {
    id: 1,
    quote: "Printify transformed our brand materials completely. The quality exceeded our expectations.",
    author: "Sarah Johnson",
    title: "Marketing Director",
    company: "Tech Solutions Inc.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    quote: "Working with Printify has been a game-changer. Their attention to detail is unmatched.",
    author: "Ahmed Hassan",
    title: "CEO",
    company: "Creative Agency",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "The packaging designs significantly boosted our product appeal. Highly recommended!",
    author: "Emily Chen",
    title: "Brand Manager",
    company: "Retail Corp",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  }
]

export function Testimonials() {
  const t = useTranslations('Testimonials')

  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-background">
      {/* Yellow Energy Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-primary/5 rounded-full blur-[60px] md:blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 pattern-grid opacity-[0.03]" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {t('pill')}
          </div>
          <h2 
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-3 md:mb-6"
            style={{ fontFamily: 'var(--font-cabinet)' }}
          >
            {t('title')} <span className="text-primary italic">{t('titleHighlight')}</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground hidden sm:block">
            {t('description')}
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6" stagger={0.1}>
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.id}
              variant="fade-up"
              className={`h-full ${index === 2 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <div
                className="h-full bg-card/50 backdrop-blur-sm p-3.5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-primary/10 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_var(--primary)] group relative overflow-hidden flex flex-col"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[50px] group-hover:bg-primary/30 transition-colors duration-500" />

                <Quote className="w-6 h-6 md:w-10 md:h-10 text-primary/40 mb-2 md:mb-6 relative z-10 hidden sm:block" />
                
                <div className="flex gap-0.5 md:gap-1 mb-2 md:mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-5 md:h-5 text-primary fill-primary drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]" />
                  ))}
                </div>

                <p className="text-foreground/90 mb-3 md:mb-8 text-xs sm:text-sm md:text-base leading-relaxed relative z-10 font-medium line-clamp-4 md:line-clamp-none flex-1">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex items-center gap-2 md:gap-4 pt-3 md:pt-6 border-t border-primary/10 relative z-10 mt-auto">
                  <div className="relative w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-foreground text-xs sm:text-sm md:text-base group-hover:text-primary transition-colors truncate" style={{ fontFamily: 'var(--font-cabinet)' }}>
                      {testimonial.author}
                    </div>
                    <div className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider line-clamp-1">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
