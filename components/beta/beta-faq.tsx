"use client"

import { Plus } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { BETA_FAQ, pick } from "@/lib/beta"

/** Acordeón 100% nativo: <details name> abre uno a la vez, sin JavaScript. */
export function BetaFaq() {
  const { language } = useLanguage()
  return (
    <div className="faq divide-y divide-white/10 border-y border-white/10">
      {BETA_FAQ.map((item, i) => (
        <details key={i} name="beta-faq" open={i === 0}>
          <summary className="flex items-center justify-between gap-6 py-5 text-left font-serif text-lg text-white transition-colors hover:text-blood-bright">
            {pick(item.q, language)}
            <Plus className="chev size-5 shrink-0 text-blood-bright" aria-hidden />
          </summary>
          <p className="pb-6 pr-10 leading-relaxed text-gray-400">{pick(item.a, language)}</p>
        </details>
      ))}
    </div>
  )
}
