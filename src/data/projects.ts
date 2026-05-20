import { productMedia } from "@/data/media-assets"

export type ProjectCategory = "branding" | "printDesign" | "largeFormat" | "packaging" | "localEvent"

export interface Project {
  id: number
  slug: string
  title: string
  category: ProjectCategory
  shortDescription: string
  fullDescription: string
  year?: string
  deliverables?: string[]
  image: string
  images: string[]
  /** Hidden projects are excluded from listings and direct access */
  hidden?: boolean
  size: "small" | "medium" | "large"
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "branding",
  "printDesign",
  "largeFormat",
  "packaging",
  "localEvent",
]

export const projects: Project[] = [
  {
    id: 1,
    slug: "restaurant-brand-identity",
    title: "Restaurant Brand Identity",
    category: "branding",
    shortDescription: "Complete brand identity for a premium dining experience.",
    fullDescription:
      "We crafted a comprehensive brand identity built for hospitality and growth across the Gulf. The project included logo design, color palette development, typography selection, and a full brand guidelines document. We also designed menus, signage, uniforms, and packaging that work together as one cohesive visual system.",
    year: "2024",
    deliverables: ["Logo Design", "Brand Guidelines", "Menu Design", "Signage", "Packaging"],
    image: productMedia.shopSign1,
    images: [
      productMedia.shopSign1,
      productMedia.shopSign2,
      productMedia.printo,
      productMedia.bagPng3,
    ],
    hidden: true,
    size: "large",
  },
  {
    id: 2,
    slug: "corporate-stationery",
    title: "Corporate Stationery",
    category: "printDesign",
    shortDescription: "Business cards, letterheads, and branded stationery.",
    fullDescription:
      "A complete corporate stationery package designed for professional everyday use. We produced business cards with premium finishes, letterheads, envelopes, and compliment slips. Every piece was aligned to the same brand standards, with careful paper selection and print techniques that elevate the final feel.",
    year: "2024",
    deliverables: ["Business Cards", "Letterheads", "Envelopes", "Compliment Slips"],
    image: productMedia.printo,
    images: [
      productMedia.printo,
      productMedia.bagPng1,
      productMedia.bagPng4,
    ],
    hidden: true,
    size: "small",
  },
  {
    id: 3,
    slug: "product-packaging",
    title: "Product Packaging",
    category: "packaging",
    shortDescription: "Custom packaging design for retail and gift products.",
    fullDescription:
      "Premium packaging design for retail and special-occasion products. We created box designs, labels, tissue paper, and gift bags that feel polished on shelf and in hand. Finishes included embossing, foil stamping, and material choices selected to match each product's look and purpose.",
    year: "2023",
    deliverables: ["Box Design", "Labels", "Tissue Paper", "Gift Bags"],
    image: productMedia.box2,
    images: [
      productMedia.box2,
      productMedia.box,
      productMedia.flower,
      productMedia.bagPhoto1,
      productMedia.bagPng1,
      productMedia.bagPng3,
      productMedia.bagPng4,
      productMedia.bagPng5,
    ],
    size: "large",
  },
  {
    id: 4,
    slug: "retail-signage",
    title: "Retail Signage",
    category: "largeFormat",
    shortDescription: "In-store signage and wayfinding system.",
    fullDescription:
      "A complete in-store signage and wayfinding system for a retail environment. We designed hanging signs, shelf talkers, window graphics, and directional signage. The system was modular and scalable, making it easy to roll out across new locations while keeping the brand consistent.",
    year: "2023",
    deliverables: ["Hanging Signs", "Shelf Talkers", "Window Graphics", "Wayfinding"],
    image: productMedia.shopSign1,
    images: [
      productMedia.shopSign1,
      productMedia.shopSign2,
    ],
    size: "small",
  },
  {
    id: 5,
    slug: "garangaooh",
    title: "Garangaooh | قرنقعوه",
    category: "localEvent",
    shortDescription: "Full event production for the traditional Qatari Garangaooh celebration.",
    fullDescription:
      "Garangaooh (قرنقعوه) is a beloved Qatari and Gulf tradition celebrated on the 14th night of Ramadan. Children dress in traditional attire and go door-to-door singing the Garangaooh song, receiving sweets and nuts from neighbors. We provided complete event production for a large-scale celebration — from branded decorations, stage design, and backdrops to custom gift bags, signage, and promotional materials that honored the cultural heritage of this cherished tradition.",
    year: "2024",
    deliverables: [
      "Event Branding",
      "Stage & Backdrop Design",
      "Large Format Banners",
      "Custom Gift Bags",
      "Promotional Materials",
      "Event Coverage",
    ],
    image: productMedia.bagPng4,
    images: [
      productMedia.bagPng4,
      productMedia.bagPng5,
      productMedia.bagPhoto1,
      productMedia.bagPng1,
      productMedia.bagPng3,
    ],
    size: "large",
  },
]

export function getVisibleProjects(): Project[] {
  return projects.filter((project) => !project.hidden)
}

export function getProjectBySlug(slug: string): Project | undefined {
  const project = projects.find((p) => p.slug === slug)
  if (!project || project.hidden) return undefined
  return project
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return getVisibleProjects().filter((p) => p.category === category)
}

export function getAllProjectSlugs(): string[] {
  return getVisibleProjects().map((p) => p.slug)
}

export function getAdjacentProjects(slug: string) {
  const visible = getVisibleProjects()
  const index = visible.findIndex((p) => p.slug === slug)
  if (index === -1) return { prev: null, next: null }

  return {
    prev: index > 0 ? visible[index - 1] : null,
    next: index < visible.length - 1 ? visible[index + 1] : null,
  }
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProjectBySlug(slug)
  if (!current) return []

  const visible = getVisibleProjects()
  const sameCategory = visible.filter(
    (p) => p.slug !== slug && p.category === current.category
  )
  const others = visible.filter(
    (p) => p.slug !== slug && p.category !== current.category
  )

  return [...sameCategory, ...others].slice(0, limit)
}
