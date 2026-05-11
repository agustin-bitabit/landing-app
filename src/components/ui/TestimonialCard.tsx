import type { Testimonial } from '../../types/testimonial'

type TestimonialCardProps = {
  testimonial: Testimonial
}

function Stars({ rating }: { rating: number }) {
  const r = Math.min(5, Math.max(1, Math.round(rating)))
  const label = `Calificación ${r} de 5`
  return (
    <div className="testimonial-card__stars" aria-label={label}>
      {'★'.repeat(r)}
      {'☆'.repeat(5 - r)}
    </div>
  )
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, subtitle, quote, avatarUrl, rating } = testimonial
  const starsRating = rating != null && !Number.isNaN(rating) ? rating : 5

  return (
    <article className="testimonial-card">
      {avatarUrl ? (
        <img
          className="testimonial-card__avatar"
          src={avatarUrl}
          alt=""
          width={56}
          height={56}
        />
      ) : (
        <div className="testimonial-card__avatar placeholder-tile" aria-hidden />
      )}
      <Stars rating={starsRating} />
      {quote ? (
        <blockquote className="testimonial-card__quote">{quote}</blockquote>
      ) : null}
      <p className="testimonial-card__name">{name}</p>
      <p className="testimonial-card__subtitle">{subtitle}</p>
    </article>
  )
}
