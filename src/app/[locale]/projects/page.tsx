"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import {
  getVisibleProjects,
  PROJECT_CATEGORIES,
  type Project,
  type ProjectCategory,
} from "@/data/projects"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function ProjectsPage() {
  const t = useTranslations("ProjectsPage")
  const tCategories = useTranslations("ProjectsPage.categories")
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all")

  const visibleProjects = getVisibleProjects()

  const filteredProjects =
    activeCategory === "all"
      ? visibleProjects
      : visibleProjects.filter((p) => p.category === activeCategory)

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 pattern-dots opacity-30" />
      </div>

      <div className="container mx-auto py-16 md:py-24 px-4">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            {t("pill")}
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "var(--font-cabinet)" }}
          >
            {t("title")} <span className="text-gradient">{t("titleHighlight")}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            {t("description")}
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-3 min-h-11 rounded-full text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border/50 hover:border-primary/30 text-foreground"
              }`}
            >
              {t("filterAll")}
            </button>
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 min-h-11 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border/50 hover:border-primary/30 text-foreground"
                }`}
              >
                {tCategories(cat)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} tCategories={tCategories} />
            ))
          ) : (
            <motion.p
              variants={item}
              className="col-span-full text-center text-muted-foreground py-16"
            >
              {t("noProjects")}
            </motion.p>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
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
              <Link href="/contact" className="flex items-center gap-2">
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

function ProjectCard({
  project,
  tCategories,
}: {
  project: Project
  tCategories: (key: string) => string
}) {
  return (
    <motion.div variants={item}>
      <Link
        href={`/projects/${project.slug}`}
        className={`group block relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${
          project.size === "large"
            ? "aspect-[4/5]"
            : project.size === "medium"
              ? "aspect-[4/3]"
              : "aspect-square"
        }`}
      >
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
        </div>

        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <span className="text-primary text-sm font-bold uppercase tracking-wider mb-2 block">
            {tCategories(project.category)}
          </span>
          <div className="flex items-end justify-between gap-4">
            <h3
              className="text-xl lg:text-2xl font-bold text-white group-hover:text-primary transition-colors"
              style={{ fontFamily: "var(--font-cabinet)" }}
            >
              {project.title}
            </h3>
            <div className="w-10 h-10 shrink-0 rounded-full bg-primary flex items-center justify-center text-primary-foreground transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
          <p className="text-sm text-white/70 mt-2 line-clamp-2">
            {project.shortDescription}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
