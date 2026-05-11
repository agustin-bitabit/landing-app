/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL pública del sitio (sin slash final), p. ej. https://patitasycopos.com — para canonical y Open Graph. */
  readonly VITE_SITE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
