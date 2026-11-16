"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { TabList, useTabs } from "@/components/ui-tabs"

/** Cada facción con su líder del set base y dos cartas de apoyo. */
const FACTIONS = [
  { key: "vampire", accent: "oklch(0.55 0.2 20)", cards: ["057", "058", "059"] },
  { key: "werewolf", accent: "oklch(0.7 0.12 70)", cards: ["039", "038", "040"] },
  { key: "hunter", accent: "oklch(0.65 0.06 240)", cards: ["020", "021", "022"] },
  { key: "witch", accent: "oklch(0.6 0.15 300)", cards: ["001", "002", "003"] },
  { key: "zombie", accent: "oklch(0.7 0.08 170)", cards: ["075", "076", "077"] },
] as const

export function FactionShowcase() {
  const { t, language } = useLanguage()
  const es = language === "es"
  const [active, setActive] = useState(0)
  const { tab, panel } = useTabs(FACTIONS.length, active, setActive)

  return (
    <section className="relative overflow-hidden border-t border-white/10 py-24" aria-labelledby="factions-title">
      {/* Halo de color de la facción activa */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-[background] duration-700"
        style={{ background: `radial-gradient(60% 60% at 70% 50%, color-mix(in oklch, ${FACTIONS[active].accent} 22%, transparent), transparent 70%)` }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <span className="eyebrow mb-3 block">{es ? "Elige tu facción" : "Choose your faction"}</span>
          <h2 id="factions-title" className="font-serif text-4xl font-bold text-white md:text-5xl">
            {t("project.factions.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">{t("project.factions.subtitle")}</p>
        </div>

        <TabList
          label={es ? "Facciones" : "Factions"}
          className="mx-auto mb-12 flex max-w-4xl snap-x gap-2 overflow-x-auto pb-2 [scrollbar-width:none] md:justify-center"
        >
          {FACTIONS.map((f, i) => (
            <button
              key={f.key}
              {...tab(i)}
              style={{ "--accent": f.accent } as React.CSSProperties}
              className="shrink-0 snap-start rounded-sm border border-white/10 px-5 py-3 font-serif text-sm font-bold uppercase tracking-wider text-gray-400 transition hover:border-white/30 hover:text-white aria-selected:border-[var(--accent)] aria-selected:bg-[color-mix(in_oklch,var(--accent)_18%,transparent)] aria-selected:text-white"
            >
              {t(`project.factions.${f.key}.title`)}
            </button>
          ))}
        </TabList>

        {FACTIONS.map((f, i) => (
          <div key={f.key} {...panel(i)} hidden={active !== i} className="grid items-center gap-12 outline-none lg:grid-cols-[1.2fr_1fr]">
            {/* Abanico de cartas: líder al centro */}
            <div className="relative mx-auto flex h-[22rem] w-full max-w-xl items-center justify-center sm:h-[28rem]">
              {[1, 0, 2].map((ci) => {
                const pos = ci === 0 ? "z-20 scale-100" : ci === 1 ? "z-10 -translate-x-[55%] -rotate-[8deg] scale-90 opacity-80" : "z-10 translate-x-[55%] rotate-[8deg] scale-90 opacity-80"
                return (
                  <div
                    key={f.cards[ci]}
                    className={`absolute aspect-[5/7] w-44 overflow-hidden rounded-lg border border-white/20 shadow-[0_20px_60px_black] transition-transform duration-500 sm:w-56 ${pos} animate-fade-in-up`}
                    style={{ animationDelay: `${ci * 80}ms` }}
                  >
                    <Image src={`/images/cards/ds-${f.cards[ci]}.jpg`} alt="" fill sizes="224px" className="object-cover" />
                  </div>
                )
              })}
            </div>

            <div className="animate-fade-in-up text-center lg:text-left">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em]" style={{ color: f.accent }}>
                {t(`project.factions.${f.key}.role`)}
              </p>
              <h3 className="mb-5 font-serif text-4xl font-bold text-white md:text-5xl">{t(`project.factions.${f.key}.title`)}</h3>
              <p className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-gray-300 lg:mx-0">{t(`project.factions.${f.key}.desc`)}</p>
              <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
                <Link href="/cards" className="inline-flex items-center gap-2 border-b pb-1 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-blood-bright" style={{ borderColor: f.accent }}>
                  {es ? "Ver sus cartas" : "See its cards"} <ArrowRight className="size-4" aria-hidden />
                </Link>
                <Link href="/lore/genesis" className="inline-flex items-center gap-2 border-b border-white/30 pb-1 text-sm font-bold uppercase tracking-widest text-gray-300 transition-colors hover:text-white">
                  {es ? "Leer el lore" : "Read the lore"} <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
