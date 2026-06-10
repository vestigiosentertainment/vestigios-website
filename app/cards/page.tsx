"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowLeft, 
  Search, 
  SlidersHorizontal, 
  Sparkles, 
  Eye 
} from "lucide-react"

export default function CardsPage() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")

  // Generamos el array del set base del 1 al 230 (.jpg en minúscula)
  const totalCards = 230
  const allCards = Array.from({ length: totalCards }, (_, i) => ({
    id: i + 1,
    name: language === "es" ? `Carta #${i + 1}` : `Card #${i + 1}`,
    image: `/images/cards/${i + 1}.jpg`
  }))

  // Filtro funcional por número de carta
  const filteredCards = allCards.filter(card => {
    if (!searchQuery) return true
    return card.id.toString().includes(searchQuery)
  })

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white pt-28 pb-24">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-red-950/10 via-transparent to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* --- BOTÓN VOLVER --- */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-400 transition-colors uppercase tracking-wider font-mono mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          {language === "es" ? "Volver al Inicio" : "Back to Home"}
        </Link>

        {/* --- CABECERA DE LA PÁGINA --- */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <div className="flex items-center gap-2 text-red-500 mb-3">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest font-mono">Set Alpha</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            {language === "es" ? "Spoiler Visual Base" : "Base Visual Spoiler"}
          </h1>
          <p className="text-gray-400 max-w-2xl text-pretty font-light">
            {language === "es" 
              ? "Explora la colección completa de la primera edición de Vestigios. Examina cada una de las 230 cartas diseñadas para sumergirte en la estrategia y el horror victoriano." 
              : "Explore the complete collection of the first edition of Vestigios. Examine each of the 230 cards designed to immerse you in strategy and Victorian horror."}
          </p>
        </div>

        {/* --- BARRA DE FILTROS (ESTILO MAGIC DIGITAL) --- */}
        <div className="bg-zinc-950 border border-white/5 p-4 rounded-sm mb-12 flex flex-col md:flex-row gap-4 items-center justify-between shadow-2xl">
          {/* Buscador */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text"
              placeholder={language === "es" ? "Buscar por número (ej: 42)..." : "Search by number (e.g., 42)..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black border border-white/10 rounded-sm py-2.5 pl-10 pr-4 text-sm font-mono text-white focus:outline-none focus:border-red-700 transition-colors placeholder:text-gray-600"
            />
          </div>

          {/* Contador de resultados */}
          <div className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-red-500" />
              <span>
                {language === "es" ? "Mostrando:" : "Showing:"} <strong className="text-white">{filteredCards.length}</strong> / {totalCards}
              </span>
            </div>
          </div>
        </div>

        {/* --- CUADRÍCULA DE CARTAS (RESPONSIVE GRID) --- */}
        {filteredCards.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {filteredCards.map((card) => (
              <div 
                key={card.id} 
                className="group relative bg-zinc-900/20 border border-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:border-red-900/40 hover:shadow-[0_0_30px_rgba(153,27,27,0.15)] flex flex-col"
              >
                {/* Contenedor de la carta con relación de aspecto TCG estándar (approx 2.5 x 3.5 o 1:1.4) */}
                <div className="relative aspect-[1/1.4] w-full overflow-hidden bg-zinc-950">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    unoptimized // Desactiva el procesado pesado del servidor
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* Capa de brillo sutil en hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-900/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Pie de la carta (ID y número de coleccionista) */}
                <div className="p-3 bg-zinc-950 border-t border-white/5 flex items-center justify-between mt-auto">
                  <span className="text-xs font-serif font-medium text-gray-300 group-hover:text-red-400 transition-colors">
                    {card.name}
                  </span>
                  <span className="text-[10px] font-mono text-gray-500 tracking-wider">
                    {card.id.toString().padStart(3, '0')}/{totalCards}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* --- ESTADO SIN RESULTADOS --- */
          <div className="text-center py-24 border border-dashed border-white/10 rounded-sm">
            <p className="text-gray-500 font-mono text-sm mb-2">
              {language === "es" ? "No se encontraron fragmentos de sangre con ese número." : "No blood shards found with that number."}
            </p>
            <button 
              onClick={() => setSearchQuery("")}
              className="text-xs text-red-500 underline font-mono hover:text-red-400"
            >
              {language === "es" ? "Limpiar filtro" : "Clear filter"}
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
