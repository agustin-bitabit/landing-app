type FooterColumn = {
  title: string
  links: { label: string; href: string }[]
}

import { RouterLink } from '../RouterLink'

type SiteFooterProps = {
  brandName: string
  columns: FooterColumn[]
  newsletterPlaceholder: string
  newsletterCta: string
  address: string
  email: string
  phoneDisplay: string
}

export function SiteFooter({
  brandName,
  columns,
  newsletterPlaceholder,
  newsletterCta,
  address,
  email,
  phoneDisplay,
}: SiteFooterProps) {
  return (
    <footer id="contacto" className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand-block">
          <p className="site-footer__logo-text">{brandName}</p>
          <div className="site-footer__social" aria-label="Redes sociales">
            <span className="social-dot" aria-hidden />
            <span className="social-dot" aria-hidden />
            <span className="social-dot" aria-hidden />
          </div>
        </div>

        <div className="site-footer__columns">
          {columns.map((col) => (
            <nav key={col.title} className="site-footer__col" aria-label={col.title}>
              <h3 className="site-footer__col-title">{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <RouterLink href={link.href}>{link.label}</RouterLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <form
          className="site-footer__newsletter"
          aria-label="Newsletter"
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="email" name="email" placeholder={newsletterPlaceholder} />
          <button type="submit">{newsletterCta}</button>
        </form>
      </div>

      <div className="site-footer__bottom">
        <p>
          <strong>Dirección:</strong> {address}
        </p>
        <p>
          <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          <strong>Teléfono:</strong> {phoneDisplay}
        </p>
      </div>
    </footer>
  )
}
