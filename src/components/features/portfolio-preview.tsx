"use client"

import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Restaurant Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Corporate Stationery",
    category: "Print Design",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Event Banners",
    category: "Large Format",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Product Packaging",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop",
  }
]

export function PortfolioPreview() {
  return (
    <section className="py-24 md:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              Our Work
            </p>
            <h2 
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: 'var(--font-cabinet)' }}
            >
              Recent Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how we've helped brands stand out with our creative solutions
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                href="#"
                className="group block relative overflow-hidden rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Arrow button */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 
                      className="text-xl font-semibold text-white mt-2 group-hover:text-primary transition-colors"
                      style={{ fontFamily: 'var(--font-cabinet)' }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="rounded-xl group" asChild>
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
