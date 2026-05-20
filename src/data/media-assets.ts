import { publicMediaPath } from "@/lib/public-media"

const p = publicMediaPath

/** Homepage services preview — one real photo per service category */
export const servicePreviewImages = {
  digital: p("proudcuts", "bag-1.png"),
  largeFormat: p("proudcuts", "Shop Sign 1.jpeg"),
  branding: p("proudcuts", "Shop sigin 2.jpeg"),
  design: p("proudcuts", "Bag_3.png"),
} as const

/** Full services page — image per service card (matches translation keys) */
export const servicePageImages = {
  digital: p("proudcuts", "bag-1.png"),
  largeFormat: p("proudcuts", "Shop Sign 1.jpeg"),
  branding: p("proudcuts", "Shop sigin 2.jpeg"),
  offset: p("proudcuts", "Bag_3.png"),
  web: p("printo.png"),
  packaging: p("proudcuts", "Bag 1.jpeg"),
} as const

export const productMedia = {
  bagPhoto1: p("proudcuts", "Bag 1.jpeg"),
  bagPng1: p("proudcuts", "bag-1.png"),
  bagPng3: p("proudcuts", "Bag_3.png"),
  bagPng4: p("proudcuts", "bag-4.png"),
  bagPng5: p("proudcuts", "bag-5.png"),
  box: p("proudcuts", "box.png"),
  box2: p("proudcuts", "box2.png"),
  flower: p("proudcuts", "flower.png"),
  shopSign1: p("proudcuts", "Shop Sign 1.jpeg"),
  shopSign2: p("proudcuts", "Shop sigin 2.jpeg"),
  printo: p("printo.jpeg"),
  video: {
    boxes: p("proudcuts", "Boxes.mp4"),
    flyer: p("proudcuts", "flyer.mp4"),
    cup: p("proudcuts", "cup video.mp4"),
    bag1: p("proudcuts", "bag video1.mp4"),
    bag2: p("proudcuts", "bag video2.mp4"),
    bag3: p("proudcuts", "bag video3.mp4"),
    bag4: p("proudcuts", "bag video 4.mp4"),
    whatsapp1: p("proudcuts", "WhatsApp Video 2026-04-07 at 6.28.06 PM (1).mp4"),
    whatsapp4: p("proudcuts", "WhatsApp Video 2026-04-07 at 6.28.06 PM (4).mp4"),
    karankho1: p("Karankho_1.mp4"),
    karankho2: p("Karankho_2.mp4"),
    karankho3: p("Karankho_3.mp4"),
  },
} as const
