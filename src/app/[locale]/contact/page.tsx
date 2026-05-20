"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useTranslations } from "next-intl"
import { siteConfig } from "@/config/site"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const t = useTranslations('ContactPage')
  const tCommon = useTranslations('Common')
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: t('info.email'),
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`
    },
    {
      icon: Phone,
      title: t('info.phone'),
      value: `${siteConfig.contact.phone} / ${siteConfig.contact.phoneSecondary}`,
      href: `tel:${siteConfig.contact.phoneTel}`
    },
    {
      icon: MapPin,
      title: t('info.address'),
      value: siteConfig.contact.address,
      href: siteConfig.contact.mapsUrl
    },
    {
      icon: Clock,
      title: t('info.hours'),
      value: "Mon - Fri: 9AM - 6PM",
      href: null
    }
  ]

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 pattern-dots opacity-30" />
      </div>

      <div className="container mx-auto py-24 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            {t('pill')}
          </span>
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-cabinet)' }}
          >
            {t('title')} <span className="text-gradient">{t('titleHighlight')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h2 
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-cabinet)' }}
              >
                {t('info.title')}
              </h2>
              <p className="text-muted-foreground">
                {t('info.description')}
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                const Content = (
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.title}</p>
                      <p className="font-medium" dir={info.href?.startsWith("tel:") || info.href?.startsWith("mailto:") ? "ltr" : undefined}>{info.value}</p>
                    </div>
                  </div>
                )
                
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    {info.href ? (
                      <a href={info.href} className="block">
                        {Content}
                      </a>
                    ) : (
                      Content
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl bg-card border border-border/50 p-8 lg:p-10 shadow-xl shadow-black/5">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: 'var(--font-cabinet)' }}
                  >
                    {t('form.successTitle')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('form.successDesc')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <label 
                      htmlFor="name" 
                      className="text-sm font-medium"
                    >
                      {t('form.name')}
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="h-12 rounded-xl border-2 focus:border-primary transition-colors"
                      {...register("name")} 
                    />
                    {errors.name && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-destructive"
                      >
                        {errors.name.message}
                      </motion.p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label 
                      htmlFor="email" 
                      className="text-sm font-medium"
                    >
                      {t('form.email')}
                    </label>
                    <Input 
                      id="email" 
                      placeholder="john@example.com"
                      className="h-12 rounded-xl border-2 focus:border-primary transition-colors"
                      {...register("email")} 
                    />
                    {errors.email && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-destructive"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label 
                      htmlFor="message" 
                      className="text-sm font-medium"
                    >
                      {t('form.message')}
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder={t('form.message')}
                      className="min-h-[160px] rounded-xl border-2 focus:border-primary transition-colors resize-none"
                      {...register("message")} 
                    />
                    {errors.message && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-destructive"
                      >
                        {errors.message.message}
                      </motion.p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 rounded-xl text-base glow-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        {tCommon('buttons.sending')}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        {tCommon('buttons.sendMessage')}
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
