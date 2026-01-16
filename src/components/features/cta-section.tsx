"use client"

import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { ArrowRight, Phone, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const benefits = [
  "Free Consultation",
  "Quick Turnaround",
  "Quality Guaranteed"
]

export function CtaSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,black_25%,black_50%,transparent_50%,transparent_75%,black_75%)] bg-[size:60px_60px]" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground mb-6"
              style={{ fontFamily: 'var(--font-cabinet)' }}
            >
              Ready to Elevate<br />Your Brand?
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
          >
            Let's discuss your project and create something extraordinary together. 
            Get a free consultation and quote today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Button 
              size="lg" 
              className="h-14 px-8 text-base rounded-xl bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold group"
              asChild
            >
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-base rounded-xl border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
              asChild
            >
              <Link href="tel:+1234567890">
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3"
          >
            {benefits.map((benefit) => (
              <div 
                key={benefit}
                className="flex items-center gap-2 text-primary-foreground/80"
              >
                <CheckCircle className="h-5 w-5" />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
