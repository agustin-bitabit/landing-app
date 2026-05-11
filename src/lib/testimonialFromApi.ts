import type { Testimonial, TestimonialApiRecord } from '../types/testimonial'

/** Convierte un registro del backend al modelo usado por los componentes. */
export function testimonialFromApi(row: TestimonialApiRecord): Testimonial {
  return {
    id: row.id,
    name: row.name,
    subtitle: row.subtitle,
    quote: row.quote ?? undefined,
    avatarUrl: row.avatar_url ?? undefined,
    rating: row.rating ?? undefined,
  }
}

export function testimonialsFromApi(rows: TestimonialApiRecord[]): Testimonial[] {
  return rows.map(testimonialFromApi)
}
