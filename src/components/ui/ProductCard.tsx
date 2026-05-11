import type { Product } from '../../types/product'
import { RouterLink } from '../RouterLink'

type ProductCardProps = {
  product: Product
  buyLabel?: string
  buyHref?: string
}

export function ProductCard({
  product,
  buyLabel = 'Comprar ahora',
  buyHref = '/#contacto',
}: ProductCardProps) {
  return (
    <article className="product-card">
      {product.isNew ? (
        <span className="product-card__badge">Nuevo</span>
      ) : null}
      <div className="product-card__media">
        {product.imageSrc ? (
          <img src={product.imageSrc} alt={product.name} width={200} height={160} />
        ) : (
          <div className="placeholder-tile product-card__placeholder" aria-hidden />
        )}
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {product.priceLabel ? (
        <p className="product-card__meta">{product.priceLabel}</p>
      ) : null}
      <p className="product-card__buy">
        <RouterLink href={buyHref} className="product-card__buy-btn">
          {buyLabel}
        </RouterLink>
      </p>
    </article>
  )
}
