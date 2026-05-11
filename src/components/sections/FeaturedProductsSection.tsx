import type { Product } from '../../types/product'
import { RouterLink } from '../RouterLink'
import { ProductCard } from '../ui/ProductCard'

type FeaturedProductsSectionProps = {
  title: string
  subtitle: string
  products: Product[]
  catalogLabel: string
  catalogHref: string
}

export function FeaturedProductsSection({
  title,
  subtitle,
  products,
  catalogLabel,
  catalogHref,
}: FeaturedProductsSectionProps) {
  return (
    <section
      id="productos"
      className="featured-products-section"
      aria-labelledby="products-heading"
    >
      <header className="featured-products-section__intro">
        <h2 id="products-heading" className="section-heading-center">
          {title}
        </h2>
        <p className="featured-products-section__subtitle">{subtitle}</p>
      </header>
      <ul className="featured-products-section__grid">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <p className="featured-products-section__catalog">
        <RouterLink href={catalogHref} className="btn-catalog">
          {catalogLabel}
        </RouterLink>
      </p>
    </section>
  )
}
