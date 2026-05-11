export type CategoryItem = {
  id: string
  label: string
  /** Ruta importada con Vite (ej. `import x from '...jpg'`) o URL pública. */
  imageSrc?: string
  imageAlt?: string
}
