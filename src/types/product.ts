export type Product = {
  id: string
  name: string
  description: string
  /** Texto de precio u otra info (opcional si el wireframe prioriza CTA) */
  priceLabel?: string
  imageSrc?: string
  isNew?: boolean
}
