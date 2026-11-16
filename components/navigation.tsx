"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import { BETA } from "@/lib/beta"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  // Cierra el menú móvil al navegar.
  useEffect(() => {
    const menu = menuRef.current
    if (menu?.matches?.(":popover-open")) menu.hidePopover()
  }, [pathname])

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/project", label: t("nav.project") },
    { href: "/cards", label: language === "es" ? "Cartas" : "Cards" },
    { href: "/status", label: language === "es" ? "Roadmap" : "Roadmap" },
    { href: "/philosophy", label: t("nav.philosophy") },
    { href: "/contact", label: t("nav.contact") },
  ]

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href))
  const betaLabel = language === "es" ? `Beta ${BETA.year}` : `${BETA.year} Beta`

  const LangSwitch = () => (
    <div role="group" aria-label={language === "es" ? "Idioma" : "Language"} className="flex rounded-sm border border-white/15 p-0.5">
      {(["es", "en"] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          lang={lang}
          className="px-2.5 py-1 text-xs font-mono uppercase tracking-wider text-gray-400 transition-colors hover:text-white aria-pressed:bg-blood aria-pressed:text-white"
        >
          {lang}
        </button>
      ))}
    </div>
  )

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md supports-[backdrop-filter]:bg-black/60">
      <nav aria-label={language === "es" ? "Principal" : "Main"} className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-serif text-xl font-bold tracking-wider text-white transition-colors hover:text-blood-bright">
          VESTIGIOS
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="relative py-2 text-sm uppercase tracking-wide text-gray-400 transition-colors hover:text-white aria-[current=page]:text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-blood-bright after:transition-transform aria-[current=page]:after:scale-x-100"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LangSwitch />
          </div>
          <Link
            href="/join-tester"
            className="hidden items-center gap-2 rounded-sm bg-blood px-4 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_20px_oklch(0.5_0.19_25/0.35)] transition hover:bg-blood-bright md:inline-flex"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-white" aria-hidden />
            {betaLabel}
          </Link>

          <button
            type="button"
            popoverTarget="mobile-menu"
            className="grid size-11 place-items-center text-white transition-colors hover:text-blood-bright lg:hidden"
            aria-label={language === "es" ? "Abrir menú" : "Open menu"}
          >
            <Menu size={24} aria-hidden />
          </button>
        </div>
      </nav>

      <div id="mobile-menu" ref={menuRef} popover="auto" className="nav-popover lg:hidden">
        <div className="mb-4 flex items-center justify-between">
          <LangSwitch />
          <button
            type="button"
            popoverTarget="mobile-menu"
            popoverTargetAction="hide"
            className="grid size-11 place-items-center text-white"
            aria-label={language === "es" ? "Cerrar menú" : "Close menu"}
          >
            <X size={24} aria-hidden />
          </button>
        </div>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="block border-l-2 border-transparent px-4 py-3 text-sm uppercase tracking-wide text-gray-300 transition-colors hover:bg-white/5 hover:text-white aria-[current=page]:border-blood-bright aria-[current=page]:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/join-tester"
          className="mt-4 block rounded-sm bg-blood px-4 py-3 text-center text-sm font-bold uppercase tracking-widest text-white"
        >
          {language === "es" ? `Únete a la Beta ${BETA.year}` : `Join the ${BETA.year} Beta`}
        </Link>
      </div>
    </header>
  )
}
