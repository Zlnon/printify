"use client"

import Image from "next/image"
import { Award, Clock, Lightbulb, Users, ShieldCheck, Sparkles } from "lucide-react"

const features = [
  { icon: Award, title: "Premium Quality", description: "Finest materials and latest technology." },
  { icon: Clock, title: "Fast Turnaround", description: "Quick delivery without compromise." },
  { icon: Lightbulb, title: "Creative Design", description: "Expert designers bring your vision to life." },
  { icon: Users, title: "Dedicated Support", description: "Personal account managers for you." },
  { icon: Sparkles, title: "Modern Technology", description: "State-of-the-art equipment." },
  { icon: ShieldCheck, title: "Satisfaction Guaranteed", description: "We stand behind every project." },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
                alt="Our printing facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating stat card */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#1a1a1a]/95 rounded-2xl p-5 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-cabinet)' }}>
                      10+
                    </div>
                    <div className="text-white/70 text-sm">Years of Excellence</div>
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                    <Award className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              Why Printify
            </p>
            <h2 
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6"
              style={{ fontFamily: 'var(--font-cabinet)' }}
            >
              The Printify Difference
            </h2>
            <p className="text-muted-foreground mb-8">
              We combine creativity, technology, and dedication to deliver printing solutions that exceed expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1" style={{ fontFamily: 'var(--font-cabinet)' }}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
