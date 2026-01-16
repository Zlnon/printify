"use client"

import Image from "next/image"
import { Award, Clock, Lightbulb, Users, ShieldCheck, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  { 
    icon: Award, 
    title: "Premium Quality", 
    description: "We use only the finest materials and latest printing technology." 
  },
  { 
    icon: Clock, 
    title: "Fast Turnaround", 
    description: "Quick delivery without compromising on quality standards." 
  },
  { 
    icon: Lightbulb, 
    title: "Creative Design", 
    description: "Expert designers who bring your vision to life beautifully." 
  },
  { 
    icon: Users, 
    title: "Dedicated Support", 
    description: "Personal account managers for seamless communication." 
  },
  { 
    icon: Sparkles, 
    title: "Modern Technology", 
    description: "State-of-the-art equipment for superior print results." 
  },
  { 
    icon: ShieldCheck, 
    title: "Satisfaction Guaranteed", 
    description: "We stand behind every project with our quality guarantee." 
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
                alt="Our printing facility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div 
                      className="text-4xl font-bold text-white"
                      style={{ fontFamily: 'var(--font-cabinet)' }}
                    >
                      10+
                    </div>
                    <div className="text-white/70 text-sm">Years of Excellence</div>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              Why Printify
            </p>
            <h2 
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
              style={{ fontFamily: 'var(--font-cabinet)' }}
            >
              The Printify Difference
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              We combine creativity, technology, and dedication to deliver printing solutions that exceed expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 
                        className="font-semibold text-foreground mb-1"
                        style={{ fontFamily: 'var(--font-cabinet)' }}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
