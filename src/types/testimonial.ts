/**
 * Modelo de testimonio en la UI (camelCase).
 * Los datos pueden venir estáticos o mapearse desde el backend con `testimonialFromApi`.
 */
export type Testimonial = {
  id: string
  name: string
  subtitle: string
  /** Texto del comentario (opcional hasta que el backend lo envíe). */
  quote?: string | null
  /** URL del avatar; si falta, se muestra placeholder. */
  avatarUrl?: string | null
  /** 1–5; por defecto 5 en la UI. */
  rating?: number | null
}

/**
 * Forma habitual de un ítem en JSON REST (snake_case).
 * Ajustá los nombres si tu API usa otros keys.
 */
export type TestimonialApiRecord = {
  id: string
  name: string
  subtitle: string
  quote?: string | null
  avatar_url?: string | null
  rating?: number | null
}
