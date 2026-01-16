"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"

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
  return (
    <section className="py-20 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
            style={{ fontFamily: 'var(--font-cabinet)' }}
          >
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground">
            Hear from the brands we've helped succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-foreground text-sm" style={{ fontFamily: 'var(--font-cabinet)' }}>
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
