"use client"

import { motion } from "framer-motion"

const clients = [
  { name: "STARTUP", width: "w-24" },
  { name: "BRAND", width: "w-20" },
  { name: "AGENCY", width: "w-24" },
  { name: "STUDIO", width: "w-22" },
  { name: "CORP", width: "w-16" },
  { name: "COMPANY", width: "w-28" },
]

export function Clients() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Trusted by Leading Brands
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div 
            className="flex gap-16 items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-2xl md:text-3xl font-bold text-muted-foreground/30 hover:text-primary/60 transition-colors duration-300 cursor-default whitespace-nowrap"
                style={{ fontFamily: 'var(--font-cabinet)' }}
              >
                {client.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
