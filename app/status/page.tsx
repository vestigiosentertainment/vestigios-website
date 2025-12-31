"use client"

import { useLanguage } from "@/lib/language-context"
// CAMBIO: Usamos BookOpen para las historias y Globe para el multiverso
import { CheckCircle2, Clock, Globe, BookOpen } from "lucide-react"

export default function StatusPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-12 px-4 bg-black text-white selection:bg-red-900 selection:text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance tracking-tight font-serif">
            {t("status.title")}
          </h1>
          <p className="text-lg text-gray-400 text-balance font-light tracking-wide max-w-2xl mx-auto">
            {t("status.subtitle")}
          </p>
        </div>

        {/* --- SECCIÓN 1: PROYECTO PRINCIPAL (TCG) --- */}
        <div className="space-y-8 mb-20">
          
          {/* PVE Status */}
          <div className="border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm rounded-sm">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-12 h-12 text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white font-serif">
                  {t("status.pve.title")}
                </h2>
                <div className="inline-block px-4 py-2 bg-red-950/30 text-red-400 border border-red-900/50 mb-4 text-xs font-bold uppercase tracking-widest rounded-sm">
                  {t("status.pve.status")}
                </div>
                <p className="text-lg text-gray-400 leading-relaxed text-pretty font-light">
                  {t("status.pve.description")}
                </p>
              </div>
            </div>
          </div>

          {/* PVP Status */}
          <div className="border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm rounded-sm">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Clock className="w-12 h-12 text-amber-600 drop-shadow-[0_0_15px_rgba(217,119,6,0.5)]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white font-serif">
                  {t("status.pvp.title")}
                </h2>
                <div className="inline-block px-4 py-2 bg-amber-950/30 text-amber-500 border border-amber-900/50 mb-4 text-xs font-bold uppercase tracking-widest rounded-sm">
                  {t("status.pvp.status")}
                </div>
                <p className="text-lg text-gray-400 leading-relaxed text-pretty font-light">
                  {t("status.pvp.description")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECCIÓN 2: EXPANSIÓN DEL UNIVERSO --- */}
        <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold text-white mb-8 border-l-4 border-indigo-500 pl-4 flex items-center gap-3">
                {t("status.future.title")}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. MMORPG (Portales/Universos) */}
                <div className="group border border-white/10 bg-gradient-to-br from-white/5 to-indigo-950/20 p-8 rounded-sm hover:border-indigo-500/30 transition-all duration-500">
                    <div className="mb-6 p-3 bg-black/50 w-fit rounded-full border border-white/10 group-hover:border-indigo-500/50 transition-colors">
                        <Globe className="w-8 h-8 text-indigo-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 font-serif">
                        {t("status.mmo.title")}
                    </h4>
                    <div className="inline-block px-3 py-1 bg-indigo-950/40 text-indigo-300 border border-indigo-900/50 mb-4 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                        {t("status.mmo.status")}
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        {t("status.mmo.description")}
                    </p>
                </div>

                {/* 2. HISTORIAS (Lore/Libros) */}
                <div className="group border border-white/10 bg-gradient-to-br from-white/5 to-fuchsia-950/20 p-8 rounded-sm hover:border-fuchsia-500/30 transition-all duration-500">
                    <div className="mb-6 p-3 bg-black/50 w-fit rounded-full border border-white/10 group-hover:border-fuchsia-500/50 transition-colors">
                        <BookOpen className="w-8 h-8 text-fuchsia-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 font-serif">
                        {t("status.secret.title")}
                    </h4>
                    <div className="inline-block px-3 py-1 bg-fuchsia-950/40 text-fuchsia-300 border border-fuchsia-900/50 mb-4 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                        {t("status.secret.status")}
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        {t("status.secret.description")}
                    </p>
                </div>

            </div>
        </div>

        {/* Footer disclaimer */}
        <div className="mt-16 p-6 border-l-2 border-white/20 bg-white/5 rounded-r-sm">
          <p className="text-xs text-gray-500 leading-relaxed text-pretty font-mono uppercase tracking-wide">
            {t("status.disclaimer")}
          </p>
        </div>
      </div>
    </div>
  )
}