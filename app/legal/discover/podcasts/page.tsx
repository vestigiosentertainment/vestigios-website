"use client"

import { useLanguage } from "@/lib/language-context"
import { Mic, Radio } from "lucide-react"

export default function PodcastsPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4 flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* ICONO CENTRAL */}
        <div className="mb-10 flex justify-center relative">
            <div className="absolute inset-0 bg-red-900/20 blur-3xl rounded-full" />
            <div className="relative p-8 bg-black border border-white/10 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.1)]">
                <Mic className="w-16 h-16 text-red-600" />
            </div>
        </div>

        {/* TÍTULO */}
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 text-white tracking-tight">
          Vestigios Radio
        </h1>

        {/* ETIQUETA DE ESTADO */}
        <div className="mb-8">
            <span className="inline-block px-6 py-2 border border-red-900/50 bg-red-950/10 rounded-full text-red-500 font-mono uppercase tracking-[0.3em] text-sm">
                {language === "es" ? "Próximamente" : "Coming Soon"}
            </span>
        </div>

        {/* DESCRIPCIÓN */}
        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg mx-auto">
          {language === "es" 
            ? "Las voces de la oscuridad aún se están grabando. Pronto podrás escuchar historias, entrevistas con los desarrolladores y secretos del lore." 
            : "The voices of darkness are still being recorded. Soon you will be able to hear stories, developer interviews, and lore secrets."}
        </p>

        {/* DECORACIÓN INFERIOR */}
        <div className="mt-16 flex justify-center gap-2 opacity-30">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>

      </div>
    </div>
  )
}