"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/project", label: t("nav.project") },
    { href: "/status", label: t("nav.status") },
    { href: "/philosophy", label: t("nav.philosophy") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    // CAMBIO: bg-black/90 para asegurar fondo negro con ligera transparencia
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            // CAMBIO: text-white y hover rojo
            className="text-xl font-bold tracking-wider text-white hover:text-red-500 transition-colors font-serif"
          >
            VESTIGIOS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                // CAMBIO: Texto blanco/gris con hover blanco brillante
                className="text-sm uppercase tracking-wide text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Button
                // Lógica para botones: Rojo si está activo, Gris si no
                variant="ghost"
                size="sm"
                onClick={() => setLanguage("en")}
                className={`text-xs uppercase tracking-wider ${language === "en" ? "bg-red-900/50 text-white hover:bg-red-900" : "text-gray-500 hover:text-white hover:bg-white/10"}`}
              >
                EN
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage("es")}
                className={`text-xs uppercase tracking-wider ${language === "es" ? "bg-red-900/50 text-white hover:bg-red-900" : "text-gray-500 hover:text-white hover:bg-white/10"}`}
              >
                ES
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-red-500 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-black">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-sm uppercase tracking-wide text-gray-400 hover:text-white hover:bg-white/5 px-4 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}