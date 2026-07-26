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
  Lock,
  Info,
  Layers
} from "lucide-react"

type CardVariant = "normal" | "fa" | "fd" | "fv"

interface CardData {
  id: number
  name: string
  isRevealed: boolean
  image: string | null
  variants: {
    normal: string
    fa: string
    fd: string
    fv: string
  } | null
}

export default function CardsPage() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  
  // Estados para el Inspector de Cartas
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null)
  const [activeVariant, setActiveVariant] = useState<CardVariant>("normal")

  // --- CONFIGURACIÓN DEL SET ---
  const totalCards = 318
  const revealedCards = 318 // Mantén esto en 318 para mostrar todas

  // Generamos el array de cartas con el nuevo formato de nombres (ds-XXX)
  const allCards: CardData[] = Array.from({ length: totalCards }, (_, i) => {
    const id = i + 1;
    const isRevealed = id <= revealedCards;
    
    // Asumiendo que el ID en el nombre del archivo no lleva ceros a la izquierda según tu ejemplo (ds-143.jpg)
    // Si llevara ceros (ej: ds-001.jpg), usaríamos: id.toString().padStart(3, '0')
    const fileId = id.toString(); 
    
    return {
      id,
      isRevealed,
      name: isRevealed 
        ? (language === "es" ? `Carta #${id}` : `Card #${id}`) 
        : (language === "es" ? "En espera..." : "Pending..."),
      image: isRevealed ? `/images/cards/ds-${fileId}.jpg` : null,
      variants: isRevealed ? {
        normal: `/images/cards/ds-${fileId}.jpg`,
        fa: `/images/cards/ds-${fileId}.fa.jpg`,
        fd: `/images/cards/ds-${fileId}.fd.jpg`,
        fv: `/images/cards/ds-${fileId}.fv.jpg`,
      } : null
    }
  })

  // Filtro funcional por número de carta
  const filteredCards = allCards.filter(card => {
    if (!searchQuery) return true
    return card.id.toString().includes(searchQuery)
  })

  // --- FUNCIONES DEL INSPECTOR ---
  const openInspector = (card: CardData) => {
    if (!card.isRevealed) return
    setSelectedCard(card)
    setActiveVariant("normal") // Siempre abrimos en la versión normal por defecto
  }

  const handlePrevCard = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (!selectedCard) return
    const revealedList = allCards.filter(c => c.isRevealed)
    if (revealedList.length === 0) return
    const currentIdx = revealedList.findIndex(c => c.id === selectedCard.id)
    const prevIdx = currentIdx === 0 ? revealedList.length - 1 : currentIdx - 1
    setSelectedCard(revealedList[prevIdx])
    setActiveVariant("normal")
  }

  const handleNextCard = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (!selectedCard) return
    const revealedList = allCards.filter(c => c.isRevealed)
    if (revealedList.length === 0) return
    const currentIdx = revealedList.findIndex(c => c.id === selectedCard.id)
    const nextIdx = currentIdx === revealedList.length - 1 ? 0 : currentIdx + 1
    setSelectedCard(revealedList[nextIdx])
    setActiveVariant("normal")
  }

  // Atajos de teclado
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

        {/* --- CABECERA --- */}
        <div className="mb-8 border-b border-white/10 pb-8">
          <div className="flex items-center gap-2 text-red-500 mb-3">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest font-mono">Set Alpha</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            {language === "es" ? "Spoiler Visual Base" : "Base Visual Spoiler"}
          </h1>
          <p className="text-gray-400 max-w-2xl text-pretty font-light">
            {language === "es" 
              ? `Explora las cartas reveladas hasta ahora de la primera edición de Vestigios. Mantente alerta para descubrir los espacios oscuros que aún aguardan.` 
              : `Explore the currently revealed cards from the first edition of Vestigios. Stay vigilant to uncover the dark spaces that still await.`}
          </p>
        </div>

        {/* --- AVISO DESARROLLO --- */}
        <div className="mb-12 p-5 md:p-6 bg-zinc-900/40 border border-white/10 rounded-sm flex items-start gap-4">
          <Info className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">
              {language === "es" ? "Aviso de Desarrollo" : "Development Notice"}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed text-pretty">
              {language === "es" 
                ? "Los nombres, textos y el arte de las cartas presentadas en esta galería están sujetos a cambios y balances continuos. Las ilustraciones actuales han sido generadas mediante IA para servir como referencia visual temporal en esta fase de pruebas. Nuestro objetivo y compromiso final es que cada pieza sea ilustrada por artistas humanos, dotando al universo de Vestigios del alma y el detalle genuino que merece." 
                : "The names, text, and artwork of the cards featured in this gallery are subject to ongoing changes and balancing. Current illustrations are AI-generated and serve strictly as temporary visual references during this testing phase. Our ultimate goal and commitment is for every piece to be illustrated by human artists, giving the Vestigios universe the genuine soul and detail it deserves."}
            </p>
          </div>
        </div>

        {/* --- BARRA DE FILTROS --- */}
        <div className="bg-zinc-950 border border-white/5 p-4 rounded-sm mb-12 flex flex-col md:flex-row gap-4 items-center justify-between shadow-2xl">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text"
              placeholder={language === "es" ? "Buscar por número (ej: 143)..." : "Search by number (e.g., 143)..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black border border-white/10 rounded-sm py-2.5 pl-10 pr-4 text-sm font-mono text-white focus:outline-none focus:border-red-700 transition-colors placeholder:text-gray-600"
            />
          </div>

          <div className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-red-500" />
              <span>
                {language === "es" ? "Total Cartas:" : "Total Cards:"} <strong className="text-white">{totalCards}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* --- CUADRÍCULA DE CARTAS --- */}
        {filteredCards.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-12">
            {filteredCards.map((card) => (
              <div 
                key={card.id} 
                onClick={() => openInspector(card)}
                className={`group relative bg-zinc-900/20 border border-white/5 rounded-lg overflow-hidden flex flex-col ${card.isRevealed ? 'cursor-pointer transition-all duration-300 hover:border-red-900/40 hover:shadow-[0_0_30px_rgba(153,27,27,0.15)]' : 'opacity-60'}`}
              >
                <div className="relative aspect-[1/1.4] w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
                  {card.isRevealed && card.image ? (
                    <>
                      <Image
                        src={card.image}
                        alt={card.name}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-red-900/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-zinc-900/50 flex flex-col items-center justify-center border border-dashed border-white/10 m-3 rounded-sm">
                      <Lock className="w-8 h-8 text-white/10 mb-3" />
                      <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest px-4 text-center">
                        {language === "es" ? "Próximamente" : "Coming Soon"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-3 bg-zinc-950 border-t border-white/5 flex items-center justify-between mt-auto">
                  <span className={`text-xs font-serif font-medium ${card.isRevealed ? 'text-gray-300 group-hover:text-red-400 transition-colors' : 'text-gray-600'}`}>
                    {card.name}
                  </span>
                  <span className={`text-[10px] font-mono tracking-wider ${card.isRevealed ? 'text-gray-500' : 'text-gray-700'}`}>
                    DS-{card.id.toString().padStart(3, '0')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
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

      {/* --- INSPECTOR OVERLAY CON SELECTOR DE VARIANTES --- */}
      {selectedCard && selectedCard.variants && (
        <div 
          onClick={() => setSelectedCard(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in animate-duration-200"
        >
          <button 
            onClick={() => setSelectedCard(null)}
            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors bg-zinc-900/50 rounded-full border border-white/10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative flex flex-col items-center justify-center max-w-4xl w-full">
            
            <div className="flex items-center justify-center w-full relative">
              <button 
                onClick={handlePrevCard}
                className="absolute left-0 md:-left-16 z-10 p-3 bg-zinc-900/80 border border-white/10 hover:border-red-800 text-white rounded-full hover:bg-red-950/30 transition-all shadow-2xl group"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              <div 
                onClick={(e) => e.stopPropagation()} 
                className="relative w-[340px] h-[476px] sm:w-[420px] sm:h-[588px] md:w-[460px] md:h-[644px] bg-zinc-950 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col transition-all duration-300"
                style={{
                  borderColor: 
                    activeVariant === 'fa' ? 'rgba(200,200,200,0.3)' : 
                    activeVariant === 'fd' ? 'rgba(234, 179, 8, 0.4)' : 
                    activeVariant === 'fv' ? 'rgba(168, 85, 247, 0.4)' : 
                    'rgba(220,38,38,0.25)',
                  borderWidth: '2px',
                  boxShadow: 
                    activeVariant === 'fd' ? '0 0 50px rgba(234, 179, 8, 0.15)' : 
                    activeVariant === 'fv' ? '0 0 50px rgba(168, 85, 247, 0.15)' : 
                    '0 0 50px rgba(220,38,38,0.25)'
                }}
              >
                <div className="relative flex-1 w-full h-full">
                  <Image
                    src={selectedCard.variants[activeVariant]}
                    alt={`${selectedCard.name} - ${activeVariant}`}
                    fill
                    unoptimized
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <button 
                onClick={handleNextCard}
                className="absolute right-0 md:-right-16 z-10 p-3 bg-zinc-900/80 border border-white/10 hover:border-red-800 text-white rounded-full hover:bg-red-950/30 transition-all shadow-2xl group"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Selector de Rarezas / Variantes */}
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="mt-8 flex items-center gap-3 bg-zinc-900/50 p-2 rounded-full border border-white/10 backdrop-blur-sm"
            >
              {[
                { id: "normal", label: language === "es" ? "Normal" : "Standard", color: "hover:text-red-400 hover:bg-red-950/30" },
                { id: "fa", label: "Full Art", color: "hover:text-gray-300 hover:bg-zinc-800" },
                { id: "fd", label: language === "es" ? "Dorada" : "Golden", color: "hover:text-yellow-400 hover:bg-yellow-950/30" },
                { id: "fv", label: language === "es" ? "Vitral" : "Stained Glass", color: "hover:text-purple-400 hover:bg-purple-950/30" }
              ].map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setActiveVariant(variant.id as CardVariant)}
                  className={`px-4 py-2 text-xs font-mono tracking-wider rounded-full transition-all duration-200 ${
                    activeVariant === variant.id 
                      ? 'bg-white text-black font-bold shadow-lg' 
                      : `text-gray-400 ${variant.color}`
                  }`}
                >
                  {variant.label}
                </button>
              ))}
            </div>

          </div>
        </div>
      )}
    </div>
  )
}
