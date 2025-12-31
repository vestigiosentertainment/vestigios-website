"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Feather, Layers, Map, Shield } from "lucide-react"

export default function DesignArticlePage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-gray-300 selection:bg-red-900 selection:text-white pb-24">
      
      {/* --- HERO HEADER --- */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="/chess-pieces-on-board-strategic-thinking-dark-goth.jpg" // Imagen de Estrategia
          alt="Design Philosophy"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-5xl mx-auto">
            <Link href="/legal/discover/articles" className="inline-flex items-center gap-2 text-red-500 hover:text-white transition-colors mb-6 text-sm font-bold tracking-widest uppercase">
                <ArrowLeft className="w-4 h-4" /> 
                {language === "es" ? "Volver a Artículos" : "Back to Articles"}
            </Link>
            <h1 className="text-3xl md:text-6xl font-bold font-serif text-white leading-tight mb-4">
                {language === "es" ? "Cómo se construye un bloque en Vestigios" : "How a Block is Built in Vestigios"}
            </h1>
            <p className="text-xl text-gray-400 font-light italic border-l-4 border-red-600 pl-4">
                {language === "es" ? "Cuando la historia guía el juego." : "When the story guides the game."}
            </p>
        </div>
      </div>

      {/* --- CONTENIDO --- */}
      <article className="max-w-3xl mx-auto px-6 py-12 text-lg leading-relaxed space-y-16">
        
        {/* INTRO */}
        <section>
            <p className="text-xl md:text-2xl text-white font-light mb-8">
                {language === "es" 
                 ? "En muchos juegos de cartas, las expansiones existen para cambiar el meta. En Vestigios de Sangre, los bloques existen para hacer avanzar un mundo." 
                 : "In many card games, expansions exist to change the meta. In Vestigios de Sangre, blocks exist to advance a world."}
            </p>
            <p className="text-gray-400">
                {language === "es"
                 ? "Cada bloque no es solo un conjunto de cartas nuevas. Es una etapa histórica, una era, una herida nueva en el universo de Vestigios."
                 : "Each block is not just a set of new cards. It is a historical stage, an era, a new wound in the universe of Vestigios."}
            </p>
        </section>

        {/* 1. EL MUNDO PRIMERO */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-8 items-start border-t border-white/10 pt-12">
            <div className="text-red-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <Map className="w-5 h-5" />
                {language === "es" ? "El Mundo" : "The World"}
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "Un bloque es una parte del mundo" : "A block is a part of the world"}
                </h2>
                <p className="mb-4">
                    {language === "es" ? "Cuando diseñamos un bloque, no partimos preguntando: “¿Qué mecánica falta?”. Partimos preguntando:" : "When we design a block, we don't start by asking: 'What mechanic is missing?'. We start by asking:"}
                </p>
                <p className="text-white font-serif text-xl italic mb-6">
                    {language === "es" ? "“¿Qué está ocurriendo en el mundo ahora?”" : "“What is happening in the world right now?”"}
                </p>
                <p className="text-gray-400 text-sm">
                    {language === "es" 
                     ? "Cada edición representa un momento específico: una ciudad, una guerra, una idea, un conflicto, una transformación. El arte, las razas y las mecánicas nacen de ese contexto." 
                     : "Each edition represents a specific moment: a city, a war, an idea, a conflict, a transformation. Art, races, and mechanics are born from that context."}
                </p>
            </div>
        </section>

        {/* 2. RAZAS E IDENTIDAD */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-8 items-start border-t border-white/10 pt-12">
            <div className="text-amber-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <Shield className="w-5 h-5" />
                {language === "es" ? "Identidad" : "Identity"}
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "Las razas son identidades, no colores" : "Races are identities, not colors"}
                </h2>
                <p className="mb-6">
                    {language === "es" ? "En Vestigios, elegir una raza no es elegir un estilo de cartas. Es elegir una forma de existir." : "In Vestigios, choosing a race is not choosing a card style. It is choosing a way of existing."}
                </p>
                <ul className="space-y-2 mb-6 bg-white/5 p-6 rounded-sm border-l-2 border-amber-500">
                    <li className="text-white">{language === "es" ? "• Piensa distinto" : "• Thinks differently"}</li>
                    <li className="text-white">{language === "es" ? "• Se sacrifica de manera distinta" : "• Sacrifices differently"}</li>
                    <li className="text-white">{language === "es" ? "• Gana de forma distinta" : "• Wins differently"}</li>
                </ul>
                <p className="text-gray-400 text-sm">
                    {language === "es" ? "Eso hace que dos mazos nunca se sientan iguales, aunque compartan muchas cartas." : "That makes two decks never feel the same, even if they share many cards."}
                </p>
            </div>
        </section>

        {/* 3. MECÁNICAS Y LORE */}
        <section className="bg-gradient-to-br from-red-950/20 to-black border border-red-900/30 p-8 rounded-sm">
            <Feather className="w-8 h-8 text-red-500 mb-4" />
            <h2 className="text-2xl font-bold text-white font-serif mb-4">
                {language === "es" ? "El mundo explica las reglas" : "The world explains the rules"}
            </h2>
            <div className="space-y-4 text-gray-300">
                <p>
                    {language === "es" 
                     ? "Si una raza investiga, no es porque “robe cartas”, es porque vive de la información." 
                     : "If a race investigates, it's not because it 'draws cards', it's because it lives on information."}
                </p>
                <p>
                    {language === "es"
                     ? "Si otra recicla, no es porque “reutilice recursos”, es porque su manera de sobrevivir está ligada a lo que ya murió."
                     : "If another recycles, it's not because it 'reuses resources', it's because its survival is tied to what has already died."}
                </p>
            </div>
            <p className="mt-6 font-bold text-white uppercase tracking-wider text-sm border-t border-red-900/50 pt-4">
                {language === "es" ? "Las reglas del juego no explican el mundo. El mundo explica las reglas." : "The rules of the game do not explain the world. The world explains the rules."}
            </p>
        </section>

        {/* 4. MINI BLOQUES Y POWER CREEP */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-8 items-start border-t border-white/10 pt-12">
            <div className="text-purple-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <Layers className="w-5 h-5" />
                {language === "es" ? "Evolución" : "Evolution"}
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "Por qué Vestigios no sufre Power Creep" : "Why Vestigios avoids Power Creep"}
                </h2>
                <p className="mb-4">
                    {language === "es" ? "Nada entra al juego solo para ser “más fuerte”. Las cartas nuevas no invalidan las viejas. Las reinterpretan." : "Nothing enters the game just to be 'stronger'. New cards don't invalidate old ones. They reinterpret them."}
                </p>
                <p className="text-gray-400 mb-6">
                    {language === "es" 
                     ? "Un mazo que fue fuerte seguirá siéndolo… pero ahora tendrá nuevas decisiones que tomar. Entre grandes bloques, aparecen mini bloques. No añaden poder. Añaden tensión." 
                     : "A deck that was strong will remain so... but now it will have new decisions to make. Between big blocks, mini blocks appear. They don't add power. They add tension."}
                </p>
            </div>
        </section>

        {/* CIERRE */}
        <section className="py-12 text-center border-t border-white/10 mt-12">
            <p className="text-2xl text-white font-serif italic mb-4">
                {language === "es" ? "Vestigios es un mundo que se juega." : "Vestigios is a world that is played."}
            </p>
            <p className="text-gray-500 max-w-lg mx-auto">
                {language === "es" 
                 ? "No estás comprando expansiones. Estás explorando épocas. Y cada partida es una versión distinta de cómo ese mundo pudo haber sido." 
                 : "You are not buying expansions. You are exploring eras. And every game is a different version of how that world could have been."}
            </p>
        </section>

      </article>
    </div>
  )
}