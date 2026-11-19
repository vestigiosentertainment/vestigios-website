import { ViewTransition } from "react"
import type React from "react"
import type { Metadata, Viewport } from "next"
import { cookies } from "next/headers"
import { Cinzel, EB_Garamond, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "./providers"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LANGUAGE_COOKIE, type Language } from "@/lib/i18n-config"
import "./globals.css"

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel", display: "swap" })
const garamond = EB_Garamond({ subsets: ["latin"], variable: "--font-garamond", display: "swap" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" })

const SITE_URL = "https://www.vestigiosentertainment.com"
const description =
  "Estudio independiente chileno de videojuegos y TCG gótico. Vestigios: Beta en 2027. Regístrate como tester."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vestigios — TCG gótico · Beta 2027",
    template: "%s · Vestigios Entertainment",
  },
  description,
  applicationName: "Vestigios Entertainment",
  keywords: ["Vestigios", "TCG", "trading card game", "juego de cartas", "gótico", "beta 2027", "Chile"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Vestigios Entertainment",
    url: SITE_URL,
    title: "Vestigios — Beta 2027",
    description,
    images: [{ url: "/portada-home.jpg", alt: "Vestigios" }],
    locale: "es_CL",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vestigiosent",
    title: "Vestigios — Beta 2027",
    description,
    images: ["/portada-home.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  colorScheme: "dark",
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const stored = (await cookies()).get(LANGUAGE_COOKIE)?.value
  const language: Language = stored === "en" ? "en" : "es"

  return (
    <html lang={language} className={`${cinzel.variable} ${garamond.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-background text-foreground font-sans">
        <a href="#contenido" className="skip-link">
          {language === "es" ? "Saltar al contenido" : "Skip to content"}
        </a>
        <Providers initialLanguage={language}>
          <Navigation />
          <main id="contenido" className="min-h-screen pt-20">
            <ViewTransition>{children}</ViewTransition>
          </main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
