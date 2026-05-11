import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type RouterLinkProps = {
  href: string
  className?: string
  children: ReactNode
}

/** Rutas internas (`/…` o `/#…`) usan SPA; el resto sigue siendo `<a>`. */
export function RouterLink({ href, className, children }: RouterLinkProps) {
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
