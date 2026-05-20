"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, Award, Users, Zap } from "lucide-react"
import { useTranslations } from "next-intl"

export default function AboutPage() {
  const t = useTranslations('AboutPage')
  
  const values = [
    {
      icon: Target,
      key: "quality"
    },
    {
      icon: Heart,
      key: "customer"
    },
    {
      icon: Zap,
      key: "innovation"
    },
    {
      icon: Users,
      key: "collaboration"
    }
  ]

  const stats = [
    { number: "2014", key: "founded" },
    { number: "500+", key: "projects" },
    { number: "50+", key: "team" },
    { number: "15+", key: "awards" }
  ]

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-accent/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 pattern-dots opacity-30" />
      </div>

      {/* Hero section */}
      <section className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            {t('hero.pill')}
          </span>
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-cabinet)' }}
          >
            {t('hero.title')} <span className="text-gradient">{t('hero.titleHighlight')}</span> {t('hero.titleSuffix')}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('hero.description')}
          </p>
        </motion.div>
      </section>

      {/* Stats section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative p-8 rounded-2xl bg-card border border-border/50 text-center overflow-hidden group hover:border-primary/30 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div 
                className="relative text-4xl lg:text-5xl font-bold text-primary mb-2"
                style={{ fontFamily: 'var(--font-cabinet)' }}
              >
                {stat.number}
              </div>
              <div className="relative text-sm text-muted-foreground">{t(`stats.${stat.key}`)}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Story section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 
              className="text-3xl lg:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-cabinet)' }}
            >
              {t('story.title')} <span className="text-gradient">{t('story.titleHighlight')}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t('story.p1')}</p>
              <p>{t('story.p2')}</p>
              <p>{t('story.p3')}</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 p-1">
              <div className="w-full h-full rounded-[calc(1.5rem-4px)] bg-card flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: 'var(--font-cabinet)' }}
                  >
                    {t('story.awardTitle')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('story.awardDesc')}
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Values section */}
      <section className="container mx-auto px-4 py-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-cabinet)' }}
          >
            {t('values.title')} <span className="text-gradient">{t('values.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('values.description')}
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: 'var(--font-cabinet)' }}
                >
                  {t(`values.items.${value.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`values.items.${value.key}.description`)}
                </p>
              </motion.div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
