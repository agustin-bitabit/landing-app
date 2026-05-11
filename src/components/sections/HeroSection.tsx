type Cta = {
  label: string
  href: string
}

import { RouterLink } from '../RouterLink'

type HeroSectionProps = {
  title: string
  description: string
  primaryCta: Cta
  secondaryCta: Cta
  imageSrc: string
  imageAlt: string
}

export function HeroSection({
  title,
  description,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-section__text">
        <h1 id="hero-title">{title}</h1>
        <p className="hero-section__lead">{description}</p>
        <div className="hero-section__actions">
          <RouterLink
            href={primaryCta.href}
            className="hero-section__cta hero-section__cta--primary"
          >
            {primaryCta.label}
          </RouterLink>
          <RouterLink
            href={secondaryCta.href}
            className="hero-section__cta hero-section__cta--secondary"
          >
            {secondaryCta.label}
          </RouterLink>
        </div>
      </div>
      <div className="hero-section__visual hero-section__visual--frame">
        <img src={imageSrc} alt={imageAlt} width={480} height={360} />
      </div>
    </section>
  )
}
