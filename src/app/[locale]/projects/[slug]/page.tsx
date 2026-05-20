"use client"

import { useParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Layers,
  ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import {
  getProjectBySlug,
  getAdjacentProjects,
  getRelatedProjects,
} from "@/data/projects"
import { notFound } from "next/navigation"
import { ProjectDetailGallery } from "@/components/features/project-detail-gallery"
import { ProjectDetailRelated } from "@/components/features/project-detail-related"

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const t = useTranslations("ProjectDetail")
  const tCategories = useTranslations("ProjectsPage.categories")

  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { prev, next } = getAdjacentProjects(slug)
  const relatedProjects = getRelatedProjects(slug, 3)

  const galleryImages = project.images
  const showGallery = galleryImages.length > 0

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-gradient-to-tl from-accent/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 pattern-dots opacity-20" />
      </div>

      <div className="container mx-auto py-20 md:py-24 px-4">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 md:mb-10"
        >
          <Button variant="ghost" asChild className="gap-2 -ms-2 h-11">
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4" />
              {t("backToProjects")}
            </Link>
          </Button>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden mb-8 md:mb-16 border border-border/50 shadow-xl shadow-black/5"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-12">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/90 text-primary-foreground text-[10px] md:text-sm font-bold uppercase tracking-wider mb-3 md:mb-4">
              {tCategories(project.category)}
            </span>
            <h1
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-cabinet)" }}
            >
              {project.title}
            </h1>
            <p className="mt-2 md:mt-3 text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl line-clamp-2 md:line-clamp-none">
              {project.shortDescription}
            </p>
          </div>
        </motion.div>

        {/* Mobile meta chips */}
        {project.year && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex flex-wrap gap-2 mb-8 lg:hidden"
          >
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-card border border-border/60 text-sm">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{t("year")}:</span>
              <span className="font-semibold">{project.year}</span>
            </span>
          </motion.div>
        )}

        {/* Overview + sidebar */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 mb-12 md:mb-20">
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1 lg:order-2"
          >
            <div className="lg:sticky lg:top-24 p-5 md:p-6 rounded-2xl bg-card border border-border/50 space-y-5 md:space-y-6 shadow-sm">
              {project.year && (
                <div className="hidden lg:flex items-start gap-4">
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
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-4 h-4 text-primary lg:hidden" />
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      {t("deliverables")}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="inline-flex px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium border border-primary/15"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <Button className="w-full h-11 md:h-12 rounded-xl glow-primary" asChild>
                <Link href="/contact">{t("cta.button")}</Link>
              </Button>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 lg:order-1"
          >
            <h2
              className="text-xl md:text-2xl font-bold mb-4 md:mb-6"
              style={{ fontFamily: "var(--font-cabinet)" }}
            >
              {t("overview")}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {project.fullDescription}
            </p>
          </motion.div>
        </div>

        {/* Gallery */}
        {showGallery && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 md:mb-20"
          >
            <ProjectDetailGallery
              images={galleryImages}
              title={project.title}
              galleryLabel={t("gallery")}
              closeLabel={t("closeLightbox")}
              previousLabel={t("previousImage")}
              nextLabel={t("nextImage")}
            />
          </motion.section>
        )}

        {/* Prev / Next navigation */}
        {(prev || next) && (
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="grid grid-cols-2 gap-3 md:gap-6 mb-12 md:mb-20"
            aria-label={t("projectNavigation")}
          >
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="group flex items-center gap-3 p-4 md:p-5 rounded-xl md:rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all"
              >
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </span>
                <div className="min-w-0 text-start">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                    {t("previousProject")}
                  </p>
                  <p className="font-semibold text-sm md:text-base truncate">{prev.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex items-center justify-end gap-3 p-4 md:p-5 rounded-xl md:rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all text-end"
              >
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                    {t("nextProject")}
                  </p>
                  <p className="font-semibold text-sm md:text-base truncate">{next.title}</p>
                </div>
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ) : (
              <div />
            )}
          </motion.nav>
        )}

        {/* Related projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 md:mb-20"
        >
          <ProjectDetailRelated
            projects={relatedProjects}
            title={t("relatedProjects")}
            categoryLabel={(category) => tCategories(category)}
          />
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto p-6 md:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border/50">
            <h2
              className="text-xl md:text-3xl font-bold mb-3 md:mb-4"
              style={{ fontFamily: "var(--font-cabinet)" }}
            >
              {t("cta.title")}
            </h2>
            <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
              {t("cta.description")}
            </p>
            <Button size="lg" className="h-12 md:h-14 px-8 rounded-xl glow-primary w-full sm:w-auto" asChild>
              <Link href="/contact" className="flex items-center justify-center gap-2">
                {t("cta.button")}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
