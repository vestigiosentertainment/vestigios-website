import type { MetadataRoute } from "next"

const SITE_URL = "https://www.vestigiosentertainment.com"

// Rutas públicas del sitio. Agrega aquí las nuevas páginas.
const routes = [
  "/",
  "/cards",
  "/contact",
  "/join-tester",
  "/legal/about",
  "/legal/conduct",
  "/legal/discover",
  "/legal/discover/articles",
  "/legal/discover/articles/art-narrative",
  "/legal/discover/articles/art-narrative/studio-ethics",
  "/legal/discover/articles/design-philosophy",
  "/legal/discover/articles/interview-jonathan-garrido",
  "/legal/discover/articles/interview-jonathan-torres",
  "/legal/discover/articles/interview-jonathan-torres-CEO",
  "/legal/discover/articles/interview-meliza-castillo",
  "/legal/discover/articles/interview-ruki",
  "/legal/discover/articles/lore-debut",
  "/legal/discover/articles/manifesto",
  "/legal/discover/articles/studio-ethics",
  "/legal/discover/formats",
  "/legal/discover/podcasts",
  "/legal/discover/rules",
  "/legal/discover/wallpapers",
  "/legal/fan-content",
  "/legal/follow-us",
  "/legal/intellectual-property",
  "/legal/privacy",
  "/legal/support",
  "/legal/terms",
  "/lore/genesis",
  "/philosophy",
  "/project",
  "/status",
]

const priority: Record<string, number> = { "/": 1, "/join-tester": 0.9, "/status": 0.8, "/cards": 0.8, "/project": 0.8 }

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map((route) => ({
    url: `${SITE_URL}${encodeURI(route)}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: priority[route] ?? 0.5,
  }))
}
