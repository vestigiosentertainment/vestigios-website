"use client"

import { Check, Loader, Lock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { BETA_PHASES, pick, type PhaseState } from "@/lib/beta"

const stateStyles: Record<PhaseState, { dot: string; badge: string; icon: typeof Check }> = {
  done: { dot: "bg-blood border-blood text-white", badge: "text-blood-bright border-blood/50 bg-blood/10", icon: Check },
  active: { dot: "bg-black border-gold text-gold", badge: "text-gold border-gold/50 bg-gold/10", icon: Loader },
  upcoming: { dot: "bg-black border-white/25 text-gray-500", badge: "text-gray-400 border-white/15 bg-white/5", icon: Lock },
}

export function BetaRoadmap() {
  const { language } = useLanguage()
  const stateLabel: Record<PhaseState, string> = {
    done: language === "es" ? "Completado" : "Done",
    active: language === "es" ? "En curso" : "In progress",
    upcoming: language === "es" ? "Próximo" : "Upcoming",
  }

  return (
    <ol className="relative grid gap-6 md:grid-cols-4 md:gap-4">
      {/* Línea de progreso (horizontal en desktop, vertical en móvil) */}
      <span aria-hidden className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-blood via-gold/60 to-white/10 md:inset-x-5 md:bottom-auto md:h-px md:w-auto md:bg-gradient-to-r" />
      {BETA_PHASES.map((phase) => {
        const s = stateStyles[phase.state]
        const Icon = s.icon
        return (
          <li key={phase.id} className="relative grid grid-cols-[2.5rem_1fr] gap-4 md:grid-cols-1">
            <span className={`relative z-10 grid size-10 place-items-center rounded-full border-2 ${s.dot}`}>
              <Icon className={`size-4 ${phase.state === "active" ? "animate-spin [animation-duration:3s]" : ""}`} aria-hidden />
            </span>
            <div className="rounded-sm border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className={`rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${s.badge}`}>
                  {stateLabel[phase.state]}
                </span>
                {pick(phase.when, language) !== stateLabel[phase.state] && (
                  <span className="font-mono text-xs text-gray-500">{pick(phase.when, language)}</span>
                )}
              </div>
              <h3 className="mb-2 font-serif text-lg font-bold text-white">{pick(phase.title, language)}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{pick(phase.description, language)}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
