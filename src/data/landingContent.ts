import heroImg from '../assets/hero.png'
import avatar1 from '../assets/landing/avatar-1.jpg'
import avatar2 from '../assets/landing/avatar-2.jpg'
import avatar3 from '../assets/landing/avatar-3.jpg'
import avatar4 from '../assets/landing/avatar-4.jpg'
import categoryCat from '../assets/landing/category-cat.jpg'
import categoryDog from '../assets/landing/category-dog.jpg'
import categorySnacks from '../assets/landing/category-snacks.jpg'
import productCatFood from '../assets/landing/product-cat-food.jpg'
import productDogFood from '../assets/landing/product-dog-food.jpg'
import productSnacks from '../assets/landing/product-snacks.jpg'
import storyDelivery from '../assets/landing/story-delivery.jpg'
import storyLocal from '../assets/landing/story-local.jpg'
import storyVet from '../assets/landing/story-vet.jpg'
import { testimonialsFromApi } from '../lib/testimonialFromApi'
import type { CategoryItem } from '../types/category'
import type { NavLink } from '../types/navigation'
import type { Product } from '../types/product'
import type { StorySlide } from '../types/story'
import type { Testimonial, TestimonialApiRecord } from '../types/testimonial'

/** Fotos en `src/assets/landing/` — Unsplash (uso permitido con atribución). */

/** Base del backend (sin slash final). Variable `VITE_API_BASE_URL` en `.env`. */
const API_BASE_URL =
  typeof import.meta.env.VITE_API_BASE_URL === 'string'
    ? import.meta.env.VITE_API_BASE_URL.trim().replace(/\/$/, '')
    : ''

/** Contenido estático de la landing (luego se puede reemplazar por API o CMS). */
export const siteBrand = 'Patitas & Copos'

/** SEO: títulos y descripciones; opcional `VITE_SITE_URL` en `.env` para canonical y `og:url`. */
export const siteSeo = {
  siteUrl:
    typeof import.meta.env.VITE_SITE_URL === 'string'
      ? import.meta.env.VITE_SITE_URL.replace(/\/$/, '')
      : '',
  home: {
    title: `${siteBrand} — Nutrición para perros y gatos`,
    description:
      'Nutrición de calidad para perros y gatos: alimento balanceado, snacks y asesoramiento. Marcas seleccionadas para cada etapa de tu compañero.',
  },
  products: {
    title: `Productos — ${siteBrand}`,
    description:
      'Catálogo de alimentos y snacks para mascotas. Nutrición premium, snacks y asesoramiento en Patitas & Copos.',
  },
} as const

export const navLinks: NavLink[] = [
  { label: 'Productos', href: '/productos' },
  { label: 'Nosotros', href: '/#historia' },
  { label: 'Contacto', href: '/#contacto' },
]

export const heroContent = {
  title: 'La vida de nuestras mascotas',
  description:
    'Nutrición de calidad para perros y gatos: alimento balanceado, snacks y asesoramiento. Elegimos las mejores marcas para acompañar cada etapa de tu compañero.',
  primaryCta: { label: 'Ver productos', href: '/productos' },
  secondaryCta: { label: 'Conocenos', href: '/#historia' },
  imageSrc: heroImg,
  imageAlt: 'Mascotas felices',
}

export const categoryItems: CategoryItem[] = [
  {
    id: 'c1',
    label: 'Perros',
    imageSrc: categoryDog,
    imageAlt: 'Perro juguetón',
  },
  {
    id: 'c2',
    label: 'Gatos',
    imageSrc: categoryCat,
    imageAlt: 'Gato mirando a cámara',
  },
  {
    id: 'c3',
    label: 'Snacks',
    imageSrc: categorySnacks,
    imageAlt: 'Premios y snacks para mascotas',
  },
]

export const premiumSection = {
  title: 'Nutrición Premium',
  subtitle:
    'Selección de alimentos y snacks pensados para una nutrición completa y sabrosa.',
  catalogLabel: 'Ver catálogo completo',
  catalogHref: '/productos',
}

/** Productos alineados al wireframe; preparado para volverse dinámico. */
export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Can Food Premium adulto',
    description: 'Receta completa para adultos. Alto valor proteico.',
    isNew: true,
    imageSrc: productDogFood,
  },
  {
    id: '2',
    name: 'Gourmet Cat Salmon',
    description: 'Salmón y nutrientes para pelo y piel.',
    isNew: true,
    imageSrc: productCatFood,
  },
  {
    id: '3',
    name: 'Snacks naturales de carne',
    description: 'Sin colorantes artificiales. Premios saludables.',
    isNew: true,
    imageSrc: productSnacks,
  },
]

export const testimonialsSection = {
  title: 'Lo que dicen las familias',
}

/** Si la API no responde o está vacía, la landing muestra estos testimonios con foto. */
export const fallbackTestimonials: Testimonial[] = [
  {
    id: 'fb-1',
    name: 'Lucía M.',
    subtitle: 'Dueña de Toby',
    quote: 'El cambio de alimento se notó en semanas: más energía y pelo brillante.',
    avatarUrl: avatar1,
    rating: 5,
  },
  {
    id: 'fb-2',
    name: 'Martín R.',
    subtitle: 'Adoptante reciente',
    quote: 'Nos asesoraron por etapa de vida y tamaño. Muy claros y sin presión.',
    avatarUrl: avatar2,
    rating: 5,
  },
  {
    id: 'fb-3',
    name: 'Carla V.',
    subtitle: 'Dos gatos en casa',
    quote: 'Snacks sin basura y entrega rápida. Repito siempre.',
    avatarUrl: avatar3,
    rating: 4,
  },
  {
    id: 'fb-4',
    name: 'Diego P.',
    subtitle: 'Perro grande',
    quote: 'Buena relación calidad-precio y atención post venta.',
    avatarUrl: avatar4,
    rating: 5,
  },
]

function isTestimonialApiRecord(value: unknown): value is TestimonialApiRecord {
  if (value === null || typeof value !== 'object') return false
  const r = value as Record<string, unknown>
  return (
    typeof r.id === 'string' &&
    typeof r.name === 'string' &&
    typeof r.subtitle === 'string'
  )
}

function parseTestimonialsPayload(json: unknown): TestimonialApiRecord[] {
  let raw: unknown[] | undefined
  if (Array.isArray(json)) {
    raw = json
  } else if (json !== null && typeof json === 'object') {
    const o = json as Record<string, unknown>
    const nested = o.testimonials ?? o.data
    if (Array.isArray(nested)) raw = nested
  }
  if (!raw) return []
  return raw.filter(isTestimonialApiRecord)
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  if (!API_BASE_URL) return []
  try {
    const url = `${API_BASE_URL}/testimonials`
    const res = await fetch(url)
    if (!res.ok) return []
    const json: unknown = await res.json()
    const rows = parseTestimonialsPayload(json)
    return testimonialsFromApi(rows)
  } catch {
    return []
  }
}

export const historySection = {
  id: 'historia' as const,
  title: 'Nuestra Historia',
  body:
    'Empezamos como un negocio familiar con la convicción de que una buena alimentación alarga y mejora la vida de las mascotas. Hoy seguimos cercanos al cliente y exigentes con lo que ponemos en el bowl.',
}

export const historySlides: StorySlide[] = [
  {
    id: 's1',
    title: 'Origen local',
    description: 'Stock permanente y marcas seleccionadas.',
    imageSrc: storyLocal,
    imageAlt: 'Mascota en casa con su comida',
  },
  {
    id: 's2',
    title: 'Equipo veterinario',
    description: 'Consultas nutricionales y seguimiento.',
    imageSrc: storyVet,
    imageAlt: 'Cuidado y bienestar animal',
  },
  {
    id: 's3',
    title: 'Envíos',
    description: 'Coordinamos entregas en zona y retiro en local.',
    imageSrc: storyDelivery,
    imageAlt: 'Entrega de pedido',
  },
]

export const footerContent = {
  newsletterPlaceholder: 'Tu email',
  newsletterCta: 'Suscribirme',
  columns: [
    {
      title: 'Tienda',
      links: [
        { label: 'Productos', href: '/productos' },
        { label: 'Nutrición Premium', href: '/productos' },
        { label: 'Snacks', href: '/#categorias' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Nuestra historia', href: '/#historia' },
        { label: 'Nosotros', href: '/#historia' },
      ],
    },
    {
      title: 'Ayuda',
      links: [
        { label: 'Contacto', href: '/#contacto' },
        { label: 'WhatsApp', href: 'https://wa.me/5491100000000' },
      ],
    },
  ],
  address: 'Av. Ejemplo 1234, Ciudad',
  email: 'hola@patitasycopos.com.ar',
  phoneDisplay: '+54 11 0000-0000',
}
