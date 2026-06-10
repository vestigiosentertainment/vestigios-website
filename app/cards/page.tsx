"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowLeft, 
  Search, 
  Sparkles, 
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  AlertTriangle // <-- Nuevo ícono importado
} from "lucide-react"

export default function CardsPage() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  
  // Estado para el Inspector de Cartas
  const [selectedCard, setSelectedCard] = useState<{ id: number; name: string; image: string } | null>(null)

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

  // Funciones para navegar dentro del Inspector
  const handlePrevCard = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation() // Evita que se cierre el modal
    if (!selectedCard) return
    const currentIdx = allCards.findIndex(c => c.id === selectedCard.id)
    const prevIdx = currentIdx === 0 ? allCards.length - 1 : currentIdx - 1
    setSelectedCard(allCards[prevIdx])
  }

  const handleNextCard = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation() // Evita que se cierre el modal
    if (!selectedCard) return
    const currentIdx = allCards.findIndex(c => c.id === selectedCard.id)
    const nextIdx = currentIdx === allCards.length - 1 ? 0 : currentIdx + 1
    setSelectedCard(allCards[nextIdx])
  }

  // Atajos de teclado para el Inspector (Flechas y Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedCard) return
      if (e.key === "Escape") setSelectedCard(null)
      if (e.key === "ArrowLeft") handlePrevCard()
      if (e.key === "ArrowRight") handleNextCard()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedCard])

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
          <p className="text-gray-400 max-w-2xl text-pretty font-light mb-6">
            {language === "es" 
              ? "Explora la colección completa de la primera edición de Vestigios. Examina cada una de las 230 cartas diseñadas para sumergirte en la estrategia y el horror victoriano." 
              : "Explore the complete collection of the first edition of Vestigios. Examine each of the 230 cards designed to immerse you in strategy and Victorian horror."}
          </p>

          {/* --- AVISO DE IMÁGENES DE REFERENCIA --- */}
          <div className="flex items-start gap-3 bg-red-950/20 border border-red-900/40 p-4 rounded-sm max-w-2xl backdrop-blur-sm">
            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <p className="text-sm text-red-200/80 font-mono leading-relaxed">
              {language === "es"
                ? "Nota importante: Las imágenes mostradas en esta galería son provisionales y sirven únicamente como referencia actual. El arte final está sujeto a cambios."
                : "Important note: The images shown in this gallery are placeholders and serve only as a current reference. Final artwork is subject to change."}
            </p>
          </div>
        </div>

        {/* --- BARRA DE FILTROS --- */}
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

        {/* --- CUADRÍCULA DE CARTAS (4 COLUMNAS) --- */}
        {filteredCards.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-12">
            {filteredCards.map((card) => (
              <div 
                key={card.id} 
                onClick={() => setSelectedCard(card)} // <-- Abre el inspector al hacer clic
                className="group relative bg-zinc-900/20 border border-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:border-red-900/40 hover:shadow-[0_0_30px_rgba(153,27,27,0.15)] flex flex-col cursor-pointer"
              >
                {/* Contenedor de la carta */}
                <div className="relative aspect-[1/1.4] w-full overflow-hidden bg-zinc-950">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* Capa de brillo sutil en hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-900/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Pie de la carta */}
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

      {/* --- INSPECTOR OVERLAY (MODAL INTERACTIVO) --- */}
      {selectedCard && (
        <div 
          onClick={() => setSelectedCard(null)} // Cierra al hacer clic en el fondo oscuro
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in animate-duration-200"
        >
          {/* Botón de cerrar X */}
          <button 
            onClick={() => setSelectedCard(null)}
            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors bg-zinc-900/50 rounded-full border border-white/10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Contenedor central del Inspector */}
          <div className="relative flex items-center justify-center max-w-4xl w-full">
            
            {/* Flecha Izquierda (Carta Anterior) */}
            <button 
              onClick={handlePrevCard}
              className="absolute left-2 md:-left-16 z-10 p-3 bg-zinc-900/80 border border-white/10 hover:border-red-800 text-white rounded-full hover:bg-red-950/30 transition-all shadow-2xl group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Visualizador de la Carta Ampliada */}
            <div 
              onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre al hacer clic sobre la carta misma
              className="relative w-[340px] h-[476px] sm:w-[420px] sm:h-[588px] md:w-[460px] md:h-[644px] bg-zinc-950 rounded-xl overflow-hidden border-2 border-red-900/50 shadow-[0_0_50px_rgba(220,38,38,0.25)] flex flex-col"
            >
              <div className="relative flex-1 w-full h-full">
                <Image
                  src={selectedCard.image}
                  alt={selectedCard.name}
                  fill
                  unoptimized
                  className="object-cover"
                  priority // Carga inmediata ya que es un elemento interactivo
                />
              </div>
              
              {/* Barra informativa inferior dentro del inspector */}
              <div className="bg-zinc-950 px-6 py-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-serif text-lg font-bold text-white tracking-wide">
                  {selectedCard.name}
                </span>
                <span className="font-mono text-xs text-red-500 tracking-widest bg-red-950/40 px-3 py-1 rounded-sm border border-red-900/30">
                  ID: {selectedCard.id.toString().padStart(3, '0')} / {totalCards}
                </span>
              </div>
            </div>

            {/* Flecha Derecha (Carta Siguiente) */}
            <button 
              onClick={handleNextCard}
              className="absolute right-2 md:-right-16 z-10 p-3 bg-zinc-900/80 border border-white/10 hover:border-red-800 text-white rounded-full hover:bg-red-950/30 transition-all shadow-2xl group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>

          </div>
        </div>
      )}

    </div>
  )
}
