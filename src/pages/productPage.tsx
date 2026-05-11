import { SeoHead } from '../components/SeoHead'
import { SiteHeader } from '../components/layout/SiteHeader'
import { navLinks, siteBrand, siteSeo } from '../data/landingContent'

export function ProductsPage() {
  return (
    <div className="landing">
      <SeoHead
        title={siteSeo.products.title}
        description={siteSeo.products.description}
        path="/productos"
      />
      <SiteHeader brandName={siteBrand} navLinks={navLinks} />
      <main className="products-page">
        <h1 className="section-heading-center">Productos</h1>
        <p className="products-page__lead">
          Catálogo completo: próximamente vas a poder ver todos los artículos aquí.
        </p>
      </main>
    </div>
  )
}
