"use client"

import { useParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, Calendar, User, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { getProjectBySlug } from "@/data/projects"
import { notFound } from "next/navigation"

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const t = useTranslations("ProjectDetail")
  const tCategories = useTranslations("ProjectsPage.categories")

  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-accent/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 pattern-dots opacity-20" />
      </div>

      <div className="container mx-auto py-24 px-4">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Button variant="ghost" asChild className="gap-2 -ml-2">
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4" />
              {t("backToProjects")}
            </Link>
          </Button>
        </motion.div>

        {/* Hero - video or image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-border/50"
        >
          {project.videos && project.videos.length > 0 ? (
            <video
              src={project.videos[0]}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/90 text-primary-foreground text-sm font-bold uppercase tracking-wider mb-4">
              {tCategories(project.category)}
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
              style={{ fontFamily: "var(--font-cabinet)" }}
            >
              {project.title}
            </h1>
          </div>
        </motion.div>

        {/* Project info & description */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="p-6 rounded-2xl bg-card border border-border/50 space-y-6">
              {project.client && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("client")}</p>
                    <p className="font-semibold">{project.client}</p>
                  </div>
                </div>
              )}
              {project.year && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t("year")}</p>
                    <p className="font-semibold">{project.year}</p>
                  </div>
                </div>
              )}
              {project.deliverables && project.deliverables.length > 0 && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{t("deliverables")}</p>
                    <ul className="space-y-1">
                      {project.deliverables.map((d) => (
                        <li key={d} className="font-medium">
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h2
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "var(--font-cabinet)" }}
            >
              {t("overview")}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.fullDescription}
            </p>
          </motion.div>
        </div>

        {/* Videos - if project has videos */}
        {project.videos && project.videos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-20"
          >
            <h2
              className="text-2xl font-bold mb-8"
              style={{ fontFamily: "var(--font-cabinet)" }}
            >
              {t("videos")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.videos.map((video, i) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 bg-muted"
                >
                  <video
                    src={video}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Gallery */}
        {project.images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2
              className="text-2xl font-bold mb-8"
              style={{ fontFamily: "var(--font-cabinet)" }}
            >
              {t("gallery")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.slice(1).map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50"
                >
                  <Image
                    src={img}
                    alt={`${project.title} - ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="max-w-2xl mx-auto p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border/50">
            <h2
              className="text-2xl lg:text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-cabinet)" }}
            >
              {t("cta.title")}
            </h2>
            <p className="text-muted-foreground mb-8">{t("cta.description")}</p>
            <Button size="lg" className="h-14 px-8 rounded-xl glow-primary" asChild>
              <Link href="/contact">{t("cta.button")}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
