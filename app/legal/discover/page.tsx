"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { BookOpen, Scroll, Scale, Mic, Image as ImageIcon, ArrowRight } from "lucide-react"

type DiscoverItem = {
  key: "articles" | "formats" | "rules" | "podcasts" | "wallpapers"
  href: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const DISCOVER_ITEMS: DiscoverItem[] = [
  { key: "articles", href: "/legal/discover/articles", Icon: BookOpen },
  { key: "formats", href: "/legal/discover/formats", Icon: Scroll },
  { key: "rules", href: "/legal/discover/rules", Icon: Scale },
  { key: "podcasts", href: "/legal/discover/podcasts", Icon: Mic },
  { key: "wallpapers", href: "/legal/discover/wallpapers", Icon: ImageIcon },
]

export default function DiscoverPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white pt-28 md:pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <header className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.35em] uppercase text-white/60 mb-4">
            Vestigios Entertainment
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif tracking-tight">
            {t("footer.discover")}
          </h1>

          <div className="h-px w-24 bg-red-900/80 mx-auto mb-8" />

          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
            {t("discover.subtitle") ?? "Explora artículos, formatos, reglas y contenido oficial del universo Vestigios."}
          </p>
        </header>

        {/* GRID */}
        <section aria-label={t("footer.discover")} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {DISCOVER_ITEMS.map(({ key, href, Icon }) => (
            <Link
              key={key}
              href={href}
              aria-label={`${t("footer.discover")}: ${t(`footer.${key}`)}`}
              className={[
                "group relative overflow-hidden rounded-sm",
                "border border-white/10 bg-white/[0.035]",
                "hover:border-red-900/50 hover:bg-white/[0.06]",
                "transition-all duration-300",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-800 focus-visible:ring-offset-0",
                "min-h-[240px] p-8 flex flex-col justify-between",
              ].join(" ")}
            >
              {/* Fondo sutil tipo “tinta” */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/15 via-transparent to-transparent" />
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-red-900/10 blur-3xl" />
              </div>

              {/* Contenido */}
              <div className="relative">
                <div className="mb-6 inline-flex items-center justify-center p-4 rounded-full bg-black/40 border border-white/10 group-hover:border-red-900/30 transition-colors">
                  <Icon className="w-8 h-8 text-red-700 group-hover:text-red-500 transition-colors" />
                </div>

                <h2 className="text-2xl font-bold font-serif text-white group-hover:text-red-100 transition-colors">
                  {t(`footer.${key}`)}
                </h2>

                <div className="mt-4 h-px w-12 bg-white/20 group-hover:bg-red-900/80 transition-all duration-300" />

                <p className="mt-4 text-sm text-white/65 leading-relaxed">
                  {t(`discover.${key}.desc`) ??
                    "Accede al contenido oficial, actualizado y pensado para jugadores y coleccionistas."}
                </p>
              </div>

              {/* CTA */}
              <div className="relative flex items-center justify-end gap-2 text-white/60 group-hover:text-red-200 transition-colors">
                <span className="text-sm tracking-wide">{t("discover.go") ?? "Entrar"}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}
