"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
// Importamos los iconos
import { Youtube, Instagram, Twitter, Facebook } from "lucide-react"

export function Footer() {
  const { t, language } = useLanguage()

  // COLUMNA 1: LEGAL
  const legalLinks = [
    { href: "/legal/terms", label: t("footer.terms") },
    { href: "/legal/conduct", label: t("footer.conduct") },
    { href: "/legal/privacy", label: t("footer.privacy") },
    { href: "/legal/support", label: t("footer.support") },
    { href: "/legal/fan-content", label: t("footer.fan") },
    { href: "/legal/intellectual-property", label: t("footer.ip") },
  ]

  // COLUMNA 2: DESCUBRIR
  const discoverLinks = [
    { href: "/legal/discover/articles", label: t("footer.articles") },
    { href: "/legal/discover/formats", label: t("footer.formats") },
    { href: "/legal/discover/rules", label: t("footer.rules") },
    { href: "/legal/discover/podcasts", label: t("footer.podcasts") },
    { href: "/legal/discover/wallpapers", label: t("footer.wallpapers") },
    // Enlace destacado a Beta Tester
    { href: "/join-tester", label: language === "es" ? "Beta Tester" : "Beta Tester" },
  ]

  return (
    <footer className="border-t border-white/10 bg-black mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* GRID DE 4 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. BRAND */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-wider text-white font-serif">
              VESTIGIOS
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light border-l-2 border-red-900/50 pl-4">
              {t("home.hero.subtitle")}
            </p>
          </div>

          {/* 2. LEGAL */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-red-700 font-bold">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-red-400 transition-colors font-light block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. DESCUBRIR */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-red-700 font-bold">
              {t("footer.discover")}
            </h4>
            <ul className="space-y-3">
              {discoverLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors font-light block ${
                      link.href === "/join-tester" 
                        ? "text-red-400 font-bold hover:text-white"
                        : "text-gray-500 hover:text-red-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. SÍGUENOS */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-red-700 font-bold">
              {t("footer.follow")}
            </h4>
            
            <div className="flex gap-5 mb-8">
              <a 
                href="https://www.youtube.com/@VestigiosEntertainment" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>

              <a 
                href="https://www.instagram.com/vestigiosentertainment/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              <a 
                href="https://x.com/vestigiosent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-500 transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter size={20} />
              </a>

              <a 
                href="https://www.facebook.com/profile.php?id=61584866171763" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>

            {/* Enlaces extra */}
            <ul className="space-y-3">
                {/* Enlace a Nosotros */}
                <li>
                  <Link href="/legal/about" className="text-sm text-gray-500 hover:text-red-400 transition-colors font-light block">
                    {language === "es" ? "Nosotros" : "About Us"}
                  </Link>
                </li>
                {/* Contacto */}
                <li>
                  <Link href="/contact" className="text-sm text-gray-500 hover:text-red-400 transition-colors font-light block">
                    {t("nav.contact")}
                  </Link>
                </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 font-mono uppercase tracking-wide">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
