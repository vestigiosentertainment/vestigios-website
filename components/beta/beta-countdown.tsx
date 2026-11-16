"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { BETA } from "@/lib/beta"

function diff(target: number) {
  const ms = Math.max(0, target - Date.now())
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  }
}

/**
 * Muestra la cuenta regresiva si `BETA.launchDate` está definida;
 * si no, muestra el año objetivo. Se renderiza en servidor sin números
 * para evitar desajustes de hidratación.
 */
export function BetaCountdown() {
  const { language } = useLanguage()
  const target = BETA.launchDate ? new Date(BETA.launchDate).getTime() : null
  const [left, setLeft] = useState<ReturnType<typeof diff> | null>(null)

  useEffect(() => {
    if (!target) return
    setLeft(diff(target))
    const id = setInterval(() => setLeft(diff(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  if (!target) {
    return (
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-gray-400">
        {language === "es" ? "Beta prevista para" : "Beta targeted for"}{" "}
        <span className="text-white">{BETA.year}</span>
      </p>
    )
  }

  const units = [
    ["days", language === "es" ? "días" : "days"],
    ["hours", language === "es" ? "horas" : "hours"],
    ["minutes", "min"],
    ["seconds", "seg"],
  ] as const

  return (
    <div role="timer" aria-label={language === "es" ? "Tiempo para la Beta" : "Time until the Beta"} className="flex justify-center gap-3 sm:gap-5">
      {units.map(([key, label]) => (
        <div key={key} className="min-w-16 rounded-sm border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-sm">
          <div className="font-mono text-2xl tabular-nums text-white sm:text-3xl">
            {left ? String(left[key]).padStart(2, "0") : "--"}
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500">{label}</div>
        </div>
      ))}
    </div>
  )
}
