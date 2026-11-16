"use client"

import { useState } from "react"
import { Play } from "lucide-react"

/**
 * Fachada ligera de YouTube: carga solo la miniatura y monta el iframe
 * (≈1 MB de JS de YouTube) cuando el usuario pulsa reproducir.
 */
export function LiteYouTube({ id, title, playLabel }: { id: string; title: string; playLabel: string }) {
  const [active, setActive] = useState(false)

  if (active) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 size-full"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className="group absolute inset-0 size-full cursor-pointer"
      aria-label={`${playLabel}: ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        width={480}
        height={360}
        className="absolute inset-0 size-full object-cover grayscale-[30%] transition duration-700 group-hover:grayscale-0"
      />
      <span className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/10" />
      <span className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-blood/90 text-white shadow-[0_0_40px_oklch(0.5_0.19_25/0.6)] transition-transform group-hover:scale-110">
        <Play className="ml-1 size-8 fill-current" aria-hidden />
      </span>
    </button>
  )
}
