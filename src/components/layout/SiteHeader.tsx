import type { NavLink } from '../../types/navigation'
import { RouterLink } from '../RouterLink'

type SiteHeaderProps = {
  brandName: string
  navLinks: NavLink[]
}

export function SiteHeader({ brandName, navLinks }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <RouterLink className="site-header__brand" href="/">
        <span className="site-header__logo-mark" aria-hidden />
        <span>{brandName}</span>
      </RouterLink>
      <nav className="site-header__nav" aria-label="Principal">
        <ul>
          {navLinks.map((link) => (
            <li key={`${link.href}-${link.label}`}>
              <RouterLink href={link.href}>{link.label}</RouterLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
