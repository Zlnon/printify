"use client"

import Image from "next/image"
import { Link } from "@/i18n/routing"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectDetailRelatedProps {
  projects: Project[]
  title: string
  categoryLabel: (category: Project["category"]) => string
}

export function ProjectDetailRelated({
  projects,
  title,
  categoryLabel,
}: ProjectDetailRelatedProps) {
  if (projects.length === 0) return null

  return (
    <section>
      <h2
        className="text-xl md:text-2xl font-bold mb-4 md:mb-8"
        style={{ fontFamily: "var(--font-cabinet)" }}
      >
        {title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-border/50 bg-card aspect-[4/5] md:aspect-[4/5]"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3 md:p-5">
              <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 block line-clamp-1">
                {categoryLabel(project.category)}
              </span>
              <div className="flex items-start justify-between gap-2">
                <h3
                  className="text-xs md:text-base font-bold text-white line-clamp-2 leading-snug"
                  style={{ fontFamily: "var(--font-cabinet)" }}
                >
                  {project.title}
                </h3>
                <span className="shrink-0 w-7 h-7 md:w-9 md:h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
