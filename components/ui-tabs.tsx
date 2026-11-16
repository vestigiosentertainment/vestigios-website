"use client"

import { useId, useRef, type KeyboardEvent, type ReactNode } from "react"

/**
 * Pestañas accesibles (patrón WAI-ARIA): flechas ←/→ (o ↑/↓) mueven el foco,
 * Inicio/Fin saltan a los extremos. Sin dependencias.
 */
export function useTabs(count: number, active: number, setActive: (i: number) => void) {
  const base = useId()
  const refs = useRef<(HTMLButtonElement | null)[]>([])

  const onKeyDown = (e: KeyboardEvent) => {
    const keys: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowDown: active + 1,
      ArrowLeft: active - 1,
      ArrowUp: active - 1,
      Home: 0,
      End: count - 1,
    }
    if (!(e.key in keys)) return
    e.preventDefault()
    const next = (keys[e.key] + count) % count
    setActive(next)
    refs.current[next]?.focus()
  }

  const tab = (i: number) => ({
    ref: (el: HTMLButtonElement | null) => {
      refs.current[i] = el
    },
    id: `${base}-tab-${i}`,
    role: "tab" as const,
    type: "button" as const,
    "aria-selected": active === i,
    "aria-controls": `${base}-panel-${i}`,
    tabIndex: active === i ? 0 : -1,
    onClick: () => setActive(i),
    onKeyDown,
  })

  const panel = (i: number) => ({
    id: `${base}-panel-${i}`,
    role: "tabpanel" as const,
    "aria-labelledby": `${base}-tab-${i}`,
    tabIndex: 0,
  })

  return { tab, panel }
}

export function TabList({ label, children, className }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div role="tablist" aria-label={label} className={className}>
      {children}
    </div>
  )
}
