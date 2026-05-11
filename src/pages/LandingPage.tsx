import { useEffect, useState } from 'react'
import { SeoHead } from '../components/SeoHead'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import { CategoryIconsSection } from '../components/sections/CategoryIconsSection'
import { FeaturedProductsSection } from '../components/sections/FeaturedProductsSection'
import { HeroSection } from '../components/sections/HeroSection'
import { HistorySection } from '../components/sections/HistorySection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import type { Testimonial } from '../types/testimonial'
import {
  categoryItems,
  fallbackTestimonials,
  featuredProducts,
  fetchTestimonials,
  footerContent,
  heroContent,
  historySection,
  historySlides,
  navLinks,
  premiumSection,
  siteBrand,
  siteSeo,
  testimonialsSection,
} from '../data/landingContent'

export function LandingPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials)

  useEffect(() => {
    let cancelled = false
    fetchTestimonials().then((items) => {
      if (!cancelled && items.length > 0) setTestimonials(items)
    })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="landing">
      <SeoHead
        title={siteSeo.home.title}
        description={siteSeo.home.description}
        path="/"
      />
      <SiteHeader brandName={siteBrand} navLinks={navLinks} />

      <main>
        <HeroSection
          title={heroContent.title}
          description={heroContent.description}
          primaryCta={heroContent.primaryCta}
          secondaryCta={heroContent.secondaryCta}
          imageSrc={heroContent.imageSrc}
          imageAlt={heroContent.imageAlt}
        />

        <CategoryIconsSection items={categoryItems} />

        <FeaturedProductsSection
          title={premiumSection.title}
          subtitle={premiumSection.subtitle}
          products={featuredProducts}
          catalogLabel={premiumSection.catalogLabel}
          catalogHref={premiumSection.catalogHref}
        />

        <TestimonialsSection title={testimonialsSection.title} items={testimonials} />

        <HistorySection
          sectionId={historySection.id}
          title={historySection.title}
          body={historySection.body}
          slides={historySlides}
        />
      </main>

      <SiteFooter
        brandName={siteBrand}
        columns={footerContent.columns}
        newsletterPlaceholder={footerContent.newsletterPlaceholder}
        newsletterCta={footerContent.newsletterCta}
        address={footerContent.address}
        email={footerContent.email}
        phoneDisplay={footerContent.phoneDisplay}
      />
    </div>
  )
}
