import type { CategoryItem } from '../../types/category'

type CategoryIconsSectionProps = {
  items: CategoryItem[]
}

export function CategoryIconsSection({ items }: CategoryIconsSectionProps) {
  return (
    <section
      id="categorias"
      className="category-icons-section"
      aria-label="Categorías principales"
    >
      <ul className="category-icons-section__row">
        {items.map((item) => (
          <li key={item.id} className="category-icons-section__item">
            {item.imageSrc ? (
              <div className="category-icons-section__thumb">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt ?? item.label}
                  width={76}
                  height={76}
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="placeholder-tile" aria-hidden />
            )}
            <span className="category-icons-section__label">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
