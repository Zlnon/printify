import { productMedia } from "@/data/media-assets"

export type ProjectCategory = "branding" | "printDesign" | "largeFormat" | "packaging" | "localEvent"

export interface Project {
  id: number
  slug: string
  title: string
  category: ProjectCategory
  shortDescription: string
  fullDescription: string
  client?: string
  year?: string
  deliverables?: string[]
  image: string
  images: string[]
  videos?: string[]
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
    shortDescription: "Complete brand identity for a premium restaurant chain.",
    fullDescription:
      "We crafted a comprehensive brand identity for a luxury restaurant chain expanding across the Gulf. The project included logo design, color palette development, typography selection, and a full brand guidelines document. We also designed menus, signage, uniforms, and packaging that reflected the restaurant's sophisticated dining experience.",
    client: "Saffron & Gold",
    year: "2024",
    deliverables: ["Logo Design", "Brand Guidelines", "Menu Design", "Signage", "Packaging"],
    image: productMedia.shopSign1,
    images: [
      productMedia.shopSign1,
      productMedia.shopSign2,
      productMedia.printo,
      productMedia.bagPng3,
    ],
    videos: [productMedia.video.cup],
    size: "large",
  },
  {
    id: 2,
    slug: "corporate-stationery",
    title: "Corporate Stationery",
    category: "printDesign",
    shortDescription: "Business cards, letterheads, and branded stationery.",
    fullDescription:
      "A complete corporate stationery package for a leading law firm. We designed business cards with premium finishes, letterheads, envelopes, and compliment slips. The design maintained consistency with their existing brand while elevating the tactile quality through paper selection and printing techniques.",
    client: "Al-Hassan Legal",
    year: "2024",
    deliverables: ["Business Cards", "Letterheads", "Envelopes", "Compliment Slips"],
    image: productMedia.printo,
    images: [
      productMedia.printo,
      productMedia.bagPng1,
      productMedia.bagPng4,
    ],
    videos: [productMedia.video.flyer],
    size: "small",
  },
  {
    id: 3,
    slug: "product-packaging",
    title: "Product Packaging",
    category: "packaging",
    shortDescription: "Custom packaging design for retail products.",
    fullDescription:
      "Premium packaging design for a luxury skincare brand launching in the Middle East. We created box designs, labels, and tissue paper that conveyed elegance and sustainability. The packaging featured embossing, foil stamping, and eco-friendly materials.",
    client: "Oasis Beauty",
    year: "2023",
    deliverables: ["Box Design", "Labels", "Tissue Paper", "Gift Bags"],
    image: productMedia.bagPhoto1,
    images: [
      productMedia.bagPhoto1,
      productMedia.bagPng1,
      productMedia.bagPng3,
      productMedia.bagPng4,
      productMedia.bagPng5,
    ],
    videos: [productMedia.video.boxes, productMedia.video.bag1, productMedia.video.bag2],
    size: "large",
  },
  {
    id: 4,
    slug: "retail-signage",
    title: "Retail Signage",
    category: "largeFormat",
    shortDescription: "In-store signage and wayfinding system.",
    fullDescription:
      "Complete in-store signage and wayfinding system for a new retail concept. We designed hanging signs, shelf talkers, window graphics, and directional signage. The system was modular and scalable for future store openings.",
    client: "Urban Retail Co.",
    year: "2023",
    deliverables: ["Hanging Signs", "Shelf Talkers", "Window Graphics", "Wayfinding"],
    image: productMedia.shopSign1,
    images: [
      productMedia.shopSign1,
      productMedia.shopSign2,
      productMedia.bagPng3,
    ],
    videos: [productMedia.video.bag2, productMedia.video.bag3],
    size: "small",
  },
  {
    id: 5,
    slug: "garangaooh",
    title: "Garangaooh | قرنقعوه",
    category: "localEvent",
    shortDescription: "Full event production for the traditional Qatari Garangaooh celebration.",
    fullDescription:
      "Garangaooh (قرنقعوه) is a beloved Qatari and Gulf tradition celebrated on the 14th night of Ramadan. Children dress in traditional attire and go door-to-door singing the Garangaooh song, receiving sweets and nuts from neighbors. We provided complete event production for a large-scale Garangaooh celebration — from branded decorations, stage design, and backdrops to custom gift bags, signage, and promotional materials. Our team captured the festive spirit while honoring the cultural heritage of this cherished tradition.",
    client: "Community Event Organizer",
    year: "2024",
    deliverables: [
      "Event Branding",
      "Stage & Backdrop Design",
      "Large Format Banners",
      "Custom Gift Bags",
      "Promotional Materials",
      "Video Documentation",
    ],
    image: productMedia.bagPng4,
    images: [
      productMedia.bagPng4,
      productMedia.bagPng5,
      productMedia.bagPhoto1,
      productMedia.bagPng1,
      productMedia.bagPng3,
      productMedia.printo,
    ],
    videos: [
      productMedia.video.karankho2,
      productMedia.video.karankho1,
      productMedia.video.karankho3,
      productMedia.video.whatsapp1,
      productMedia.video.bag1,
    ],
    size: "large",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}
