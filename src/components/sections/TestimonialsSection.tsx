import type { Testimonial } from '../../types/testimonial'
import { TestimonialCard } from '../ui/TestimonialCard'

export type TestimonialsSectionProps = {
  title: string
  items: Testimonial[]
}

export function TestimonialsSection({ title, items }: TestimonialsSectionProps) {
  return (
    <section
      id="testimonios"
      className="testimonials-section"
      aria-labelledby="testimonials-heading"
    >
      <h2 id="testimonials-heading" className="section-heading-center">
        {title}
      </h2>
      <ul className="testimonials-section__grid">
        {items.map((t) => (
          <li key={t.id}>
            <TestimonialCard testimonial={t} />
          </li>
        ))}
      </ul>
    </section>
  )
}
