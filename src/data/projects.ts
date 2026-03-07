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
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
    ],
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
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop",
    ],
    size: "small",
  },
  {
    id: 3,
    slug: "event-banners",
    title: "Event Banners",
    category: "largeFormat",
    shortDescription: "Outdoor banners and signage for corporate events.",
    fullDescription:
      "Large format printing for a major tech conference in Doha. We produced outdoor banners, indoor signage, backdrops, and directional wayfinding. All materials were designed for high visibility and durability, with weather-resistant finishes for outdoor installations.",
    client: "Tech Summit Qatar",
    year: "2024",
    deliverables: ["Outdoor Banners", "Backdrops", "Directional Signage", "Booth Graphics"],
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
    ],
    size: "medium",
  },
  {
    id: 4,
    slug: "product-packaging",
    title: "Product Packaging",
    category: "packaging",
    shortDescription: "Custom packaging design for retail products.",
    fullDescription:
      "Premium packaging design for a luxury skincare brand launching in the Middle East. We created box designs, labels, and tissue paper that conveyed elegance and sustainability. The packaging featured embossing, foil stamping, and eco-friendly materials.",
    client: "Oasis Beauty",
    year: "2023",
    deliverables: ["Box Design", "Labels", "Tissue Paper", "Gift Bags"],
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602874801006-4e6c28ae879a?q=80&w=1200&auto=format&fit=crop",
    ],
    size: "large",
  },
  {
    id: 5,
    slug: "magazine-layout",
    title: "Magazine Layout",
    category: "printDesign",
    shortDescription: "Editorial design for lifestyle magazine.",
    fullDescription:
      "Full editorial design for a quarterly lifestyle magazine. We handled typography, layout, photo direction, and ad placement across 120+ pages. The design balanced readability with visual impact, creating a distinctive editorial voice.",
    client: "Doha Living",
    year: "2023",
    deliverables: ["Editorial Layout", "Cover Design", "Typography System", "Ad Templates"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?q=80&w=1200&auto=format&fit=crop",
    ],
    size: "medium",
  },
  {
    id: 6,
    slug: "retail-signage",
    title: "Retail Signage",
    category: "largeFormat",
    shortDescription: "In-store signage and wayfinding system.",
    fullDescription:
      "Complete in-store signage and wayfinding system for a new retail concept. We designed hanging signs, shelf talkers, window graphics, and directional signage. The system was modular and scalable for future store openings.",
    client: "Urban Retail Co.",
    year: "2023",
    deliverables: ["Hanging Signs", "Shelf Talkers", "Window Graphics", "Wayfinding"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    ],
    size: "small",
  },
  {
    id: 7,
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
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574672280600-4accfa362b71?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    ],
    videos: ["/Karankho_2.mp4", "/Karankho_1.mp4", "/Karankho_3.mp4"],
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
