import { useState } from 'react'
import type { StorySlide } from '../../types/story'

type HistorySectionProps = {
  sectionId: string
  title: string
  body: string
  slides: StorySlide[]
}

const VISIBLE = 2

export function HistorySection({
  sectionId,
  title,
  body,
  slides,
}: HistorySectionProps) {
  const [start, setStart] = useState(0)
  const maxStart = Math.max(0, slides.length - VISIBLE)

  const showPrev = start > 0
  const showNext = start < maxStart

  return (
    <section id={sectionId} className="history-section" aria-labelledby="history-heading">
      <div className="history-section__copy">
        <h2 id="history-heading">{title}</h2>
        <p>{body}</p>
      </div>
      <div className="history-section__carousel">
        <div className="history-section__slides">
          {slides.slice(start, start + VISIBLE).map((slide) => (
            <article key={slide.id} className="history-card">
              {slide.imageSrc ? (
                <div className="history-card__visual history-card__visual--photo">
                  <img
                    src={slide.imageSrc}
                    alt={slide.imageAlt ?? slide.title}
                    width={320}
                    height={200}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="history-card__visual placeholder-tile" aria-hidden />
              )}
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </article>
          ))}
        </div>
        <div className="history-section__controls">
          <button
            type="button"
            className="history-section__arrow"
            aria-label="Anterior"
            disabled={!showPrev}
            onClick={() => setStart((s) => Math.max(0, s - 1))}
          >
            ‹
          </button>
          <button
            type="button"
            className="history-section__arrow"
            aria-label="Siguiente"
            disabled={!showNext}
            onClick={() => setStart((s) => Math.min(maxStart, s + 1))}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
