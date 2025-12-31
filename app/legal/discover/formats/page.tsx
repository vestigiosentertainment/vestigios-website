"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import Image from "next/image"
import { Swords, Box, Users, Clock, Layers, ShieldAlert, ArrowRight, Scroll } from "lucide-react"

export default function FormatsPage() {
  const { t, language } = useLanguage()

  // Datos de los formatos (Actualizados según PDF)
  const formats = [
    {
      id: "constructed",
      icon: <Swords className="w-8 h-8 text-red-500" />,
      title: language === "es" ? "Construido Estándar" : "Standard Constructed",
      subtitle: language === "es" ? "El formato competitivo oficial" : "The official competitive format",
      description: language === "es" 
        ? "El corazón de Vestigios. Trae tu mejor mazo preparado y enfréntate en un duelo de estrategia pura. Aquí es donde nacen las leyendas."
        : "The heart of Vestigios. Bring your best prepared deck and face off in a duel of pure strategy. This is where legends are born.",
      // REGLAS CORREGIDAS SEGÚN PDF:
      rules: language === "es" 
        ? [
            "Mazo Principal: 60 cartas exactas",
            "Líder: 1 Carta + 2 Evoluciones (Nivel 2 y 3)",
            "Sideboard: Hasta 10 cartas",
            "Límite: Máximo 3 copias por carta"
          ]
        : [
            "Main Deck: Exactly 60 cards",
            "Leader: 1 Card + 2 Evolutions (Level 2 & 3)",
            "Sideboard: Up to 10 cards",
            "Limit: Max 3 copies per card"
          ],
      image: "/chess-pieces-on-board-strategic-thinking-dark-goth.jpg", 
      isFeatured: true
    },
    {
      id: "sealed",
      icon: <Box className="w-8 h-8 text-amber-500" />,
      title: language === "es" ? "Pacto Sellado" : "Sealed Pact",
      subtitle: language === "es" ? "Improvisación y caos" : "Improvisation and chaos",
      description: language === "es"
        ? "Abre 6 sobres y construye un mazo con lo que encuentres. Una prueba de adaptabilidad donde tu colección no importa, solo tu ingenio."
        : "Open 6 packs and build a deck with what you find. A test of adaptability where your collection doesn't matter, only your wit.",
      rules: language === "es"
        ? ["Mazo de 30 cartas mínimo", "Sin límite de copias", "Partida única (BO1)", "Líder a elección (o del pool)"]
        : ["Minimum 30 card deck", "No copy limit", "Best of 1 (BO1)", "Leader of choice (or from pool)"],
      image: "/ancient-book-open-with-mystical-light-dark-library.jpg", 
      isFeatured: false
    },
    {
      id: "multiplayer",
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: language === "es" ? "Guerra de Casas" : "House War",
      subtitle: language === "es" ? "Formato Multijugador (2vs2)" : "Multiplayer Format (2vs2)",
      description: language === "es"
        ? "Forma una alianza frágil. Comparte recursos vitales con tu aliado para derrocar a los líderes enemigos."
        : "Form a fragile alliance. Share vital resources with your ally to overthrow the enemy leaders.",
      rules: language === "es"
        ? ["2 Equipos de 2 Jugadores", "Vidas de Líder compartidas", "Mazos construidos estándar"]
        : ["2 Teams of 2 Players", "Shared Leader Health", "Standard Constructed Decks"],
      image: "/respectful-handshake-dark-atmosphere-gothic.jpg", 
      isFeatured: false
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-16 border-b border-white/10 pb-10">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 font-mono uppercase tracking-widest">
            <Link href="/legal/discover" className="hover:text-red-500 transition-colors">
              {t("footer.discover")}
            </Link>
            <span>/</span>
            <span className="text-red-600">{t("footer.formats")}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-tight text-white mb-6">
            {language === "es" ? "Formatos de Juego" : "Game Formats"}
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            {language === "es" 
              ? "Desde la precisión quirúrgica del competitivo construido hasta el caos impredecible del sellado. Elige tu campo de batalla."
              : "From the surgical precision of competitive constructed to the unpredictable chaos of sealed. Choose your battlefield."}
          </p>
        </div>

        {/* --- FORMATO PRINCIPAL (DESTACADO) --- */}
        {formats.filter(f => f.isFeatured).map(format => (
          <div key={format.id} className="relative rounded-sm overflow-hidden border border-red-900/30 mb-20 group bg-black">
            {/* Background Image con Overlay */}
            <div className="absolute inset-0 z-0">
               <Image 
                 src={format.image} 
                 alt={format.title} 
                 fill 
                 className="object-cover opacity-30 group-hover:opacity-20 group-hover:scale-105 transition-all duration-1000" 
               />
               <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
            </div>

            {/* Contenido */}
            <div className="relative z-10 p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center">
              <div>
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-900/20 rounded-full border border-red-900/50 text-red-500">
                        {format.icon}
                    </div>
                    <span className="text-red-500 font-bold tracking-widest uppercase text-xs border-l border-red-500 pl-3">
                        {language === "es" ? "Formato Oficial" : "Official Format"}
                    </span>
                 </div>
                 
                 <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6 leading-tight">
                    {format.title}
                 </h2>
                 <p className="text-lg text-gray-300 font-light mb-8 leading-relaxed">
                    {format.description}
                 </p>

                 {/* Detalles Rápidos */}
                 <div className="flex gap-8 mb-10 text-sm font-mono text-gray-400 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-600" />
                        <span>15-20 min</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-red-600" />
                        <span>1 vs 1</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Scroll className="w-4 h-4 text-red-600" />
                        <span>Best of 3</span>
                    </div>
                 </div>

                 <Link href="/legal/discover/rules" className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors text-sm">
                    {language === "es" ? "Ver Reglas Completas" : "View Full Rules"}
                    <ArrowRight className="w-4 h-4" />
                 </Link>
              </div>

              {/* Lista de Reglas (Visual - Estilo Tarjeta Técnica) */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm hover:border-red-900/50 transition-colors">
                 <h3 className="text-white font-bold mb-6 font-serif text-lg flex items-center gap-3 pb-4 border-b border-white/10">
                    <ShieldAlert className="w-5 h-5 text-red-500" />
                    {language === "es" ? "Requisitos de Torneo" : "Tournament Requirements"}
                 </h3>
                 <ul className="space-y-4">
                    {format.rules.map((rule, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300 font-light text-sm">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                            {rule}
                        </li>
                    ))}
                 </ul>
              </div>
            </div>
          </div>
        ))}

        {/* --- GRID DE OTROS FORMATOS --- */}
        <h3 className="text-2xl font-bold text-white mb-10 font-serif border-l-4 border-red-900 pl-4">
            {language === "es" ? "Formatos Alternativos" : "Alternative Formats"}
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
            {formats.filter(f => !f.isFeatured).map(format => (
                <div key={format.id} className="group relative bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:border-red-900/30 transition-all duration-300 flex flex-col h-full">
                    {/* Imagen Header */}
                    <div className="relative h-56 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/40 transition-colors" />
                        <Image 
                            src={format.image} 
                            alt={format.title} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                        <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                            <div className="p-2.5 bg-black/90 rounded-full border border-white/20 text-white">
                                {format.icon}
                            </div>
                            <h4 className="text-2xl font-bold font-serif text-white">{format.title}</h4>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="p-8 flex-1 flex flex-col">
                        <p className="text-gray-400 mb-8 font-light leading-relaxed flex-1">
                            {format.description}
                        </p>
                        
                        <div className="bg-black/40 p-5 rounded border border-white/5">
                            <h5 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                                {language === "es" ? "Configuración" : "Setup"}
                            </h5>
                            <ul className="space-y-2">
                                {format.rules.slice(0, 3).map((rule, idx) => (
                                    <li key={idx} className="text-xs text-gray-400 font-mono flex items-center gap-2">
                                        <Layers className="w-3 h-3 text-red-900" />
                                        {rule}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  )
}