/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL base del backend REST (sin slash final), p. ej. https://api.ejemplo.com/api */
  readonly VITE_API_BASE_URL?: string
  /** URL pública del sitio (sin slash final), p. ej. https://patitasycopos.com — para canonical y Open Graph. */
  readonly VITE_SITE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
