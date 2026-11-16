"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Swords, Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { TabList, useTabs } from "@/components/ui-tabs"

export function HowItWorks() {
  const { t, language } = useLanguage()
  const es = language === "es"
  const [active, setActive] = useState(0)

  const modes = [
    {
      icon: BookOpen,
      label: t("status.pve.title"),
      status: t("status.pve.status"),
      done: true,
      text: t("status.pve.description"),
      image: "/ancient-book-open-with-mystical-light-dark-library.jpg",
      href: "/lore/genesis",
      cta: es ? "Conoce la historia" : "Discover the story",
    },
    {
      icon: Swords,
      label: t("status.pvp.title"),
      status: t("status.pvp.status"),
      done: false,
      text: t("status.pvp.description"),
      image: "/chess-pieces-on-board-strategic-thinking-dark-goth.jpg",
      href: "/join-tester",
      cta: es ? "Pruébalo en la Beta" : "Try it in the Beta",
    },
    {
      icon: Shield,
      label: es ? "Formatos" : "Formats",
      status: es ? "Competitivo y Sellado" : "Competitive & Sealed",
      done: true,
      text: es
        ? "Construye tu mazo con las 230 cartas del set base para el formato competitivo, o abre sobres y arma tu mazo en el momento en Sellado."
        : "Build your deck from the 230-card base set for competitive play, or open packs and build on the spot in Sealed.",
      image: "/dark-gothic-trading-card-game-cards-blood-and-shad.jpg",
      href: "/legal/discover/formats",
      cta: es ? "Ver formatos" : "See formats",
    },
  ]
  const { tab, panel } = useTabs(modes.length, active, setActive)

  return (
    <section className="cv-auto border-t border-white/10 bg-zinc-950 px-4 py-24" aria-labelledby="how-title">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="eyebrow mb-3 block">{es ? "Cómo se juega" : "How it plays"}</span>
            <h2 id="how-title" className="font-serif text-4xl font-bold text-white md:text-5xl">
              {es ? "¿Cómo funciona Vestigios?" : "How does Vestigios work?"}
            </h2>
          </div>
          <p className="text-lg text-gray-400">
            {es
              ? "Un TCG estratégico donde cada carta pertenece a una historia: elige una facción, construye tu mazo y supera a tu rival con estrategia, no con suerte."
              : "A strategic TCG where every card belongs to a story: pick a faction, build your deck and outplay your rival with strategy, not luck."}{" "}
            <Link href="/legal/discover/rules" className="text-white underline decoration-blood-bright underline-offset-4 hover:text-blood-bright">
              {es ? "Leer las reglas" : "Read the rules"}
            </Link>
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
          <TabList label={es ? "Modos de juego" : "Game modes"} className="flex flex-wrap gap-2 lg:flex-col lg:flex-nowrap">
            {modes.map((m, i) => (
              <button
                key={m.label}
                {...tab(i)}
                className="flex shrink-0 items-center gap-3 rounded-sm border border-white/10 px-5 py-4 text-left text-gray-400 transition hover:border-white/25 hover:text-white aria-selected:border-blood aria-selected:bg-blood/15 aria-selected:text-white"
              >
                <m.icon className="size-5 shrink-0" aria-hidden />
                <span className="font-serif font-bold uppercase tracking-wider">{m.label}</span>
              </button>
            ))}
          </TabList>

          {modes.map((m, i) => (
            <div key={m.label} {...panel(i)} hidden={active !== i} className="grid overflow-hidden rounded-sm border border-white/10 bg-black outline-none md:grid-cols-2">
              <div className="relative min-h-64">
                <Image src={m.image} alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="animate-fade-in-up object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-black" />
              </div>
              <div className="animate-fade-in-up p-8 md:p-10">
                <span
                  className={`mb-4 inline-block rounded-sm border px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${m.done ? "border-blood/50 bg-blood/10 text-blood-bright" : "border-gold/50 bg-gold/10 text-gold"}`}
                >
                  {m.status}
                </span>
                <h3 className="mb-4 font-serif text-3xl font-bold text-white">{m.label}</h3>
                <p className="mb-8 leading-relaxed text-gray-400">{m.text}</p>
                <Link href={m.href} className="inline-flex items-center gap-2 border-b border-blood-bright pb-1 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-blood-bright">
                  {m.cta} <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
