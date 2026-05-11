import { Helmet } from 'react-helmet-async'
import { siteBrand, siteSeo } from '../data/landingContent'

type SeoHeadProps = {
  title: string
  description: string
  /** Ruta canónica, ej. `/` o `/productos` */
  path?: string
}

export function SeoHead({ title, description, path = '/' }: SeoHeadProps) {
  const base = siteSeo.siteUrl
  const pathname = path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`
  const canonical =
    base.length > 0 ? `${base}${pathname === '/' ? '' : pathname}` : undefined

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteBrand} />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
    </Helmet>
  )
}
