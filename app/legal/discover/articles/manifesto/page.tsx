"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Quote, Check, X } from "lucide-react"

export default function ManifestoArticlePage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-gray-300 selection:bg-red-900 selection:text-white pb-24">
      
      {/* --- HERO IMAGE DE CABECERA --- */}
      <div className="relative h-[60vh] w-full">
        <Image
            // Intenta usar la misma imagen que usaste en el Home si esa ya funciona
            src="/dark-gothic-castle-shrouded-in-mist-and-fog-atmosp.jpg" 
            alt="Vestigios Manifesto"
            fill
            className="object-cover opacity-50"
            priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {/* Título sobre la imagen */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-5xl mx-auto">
            <Link href="/legal/discover/articles" className="inline-flex items-center gap-2 text-red-500 hover:text-white transition-colors mb-6 text-sm font-bold tracking-widest uppercase">
                <ArrowLeft className="w-4 h-4" /> 
                {language === "es" ? "Volver a Artículos" : "Back to Articles"}
            </Link>
            <h1 className="text-4xl md:text-7xl font-bold font-serif text-white leading-tight mb-4">
                {language === "es" ? "Vestigios de Sangre no es un Gacha" : "Vestigios of Blood is Not a Gacha"}
            </h1>
            <p className="text-xl md:text-2xl text-red-100 font-light italic">
                {language === "es" ? "Es un juego de estrategia con alma." : "It is a strategy game with a soul."}
            </p>
        </div>
      </div>

      {/* --- CONTENIDO DEL ARTÍCULO --- */}
      <article className="max-w-3xl mx-auto px-6 py-12 md:text-lg leading-relaxed space-y-12">
        
        {/* INTRODUCCIÓN */}
        <section>
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-red-600 first-letter:mr-1 first-letter:float-left mb-6">
                {language === "es" 
                 ? "Durante años, los juegos de cartas digitales han seguido el mismo camino: mecánicas brillantes, efectos espectaculares… y sistemas de monetización que convierten al jugador en una billetera ambulante." 
                 : "For years, digital card games have followed the same path: brilliant mechanics, spectacular effects... and monetization systems that turn the player into a walking wallet."}
            </p>
            <p className="mb-6 text-gray-400 font-light italic border-l-2 border-white/10 pl-4">
                Lootboxes. Pases de batalla. Cartas bloqueadas detrás de pagos. Metas rotos cada expansión.
            </p>
            <p>
                {language === "es"
                 ? "Muchos juegos dicen ser “free-to-play”, pero en la práctica solo son pay-to-compete. Vestigios de Sangre nace para romper esa lógica."
                 : "Many games claim to be “free-to-play”, but in practice they are just pay-to-compete. Vestigios of Blood is born to break that logic."}
            </p>
        </section>

        {/* BLOQUE: NO QUEREMOS QUE GANES POR PAGAR */}
        <section className="bg-white/5 p-8 rounded-sm border-l-4 border-red-600">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-6">
                {language === "es" ? "No queremos que ganes porque pagaste" : "We don't want you to win because you paid"}
            </h2>
            <p className="mb-6 font-bold text-red-400 uppercase tracking-widest text-sm">
                {language === "es" ? "Queremos que ganes porque jugaste mejor." : "We want you to win because you played better."}
            </p>
            <p className="mb-4">
                {language === "es" ? "En Vestigios, tu victoria no depende de cuánto gastaste. Depende de:" : "In Vestigios, your victory does not depend on how much you spent. It depends on:"}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 marker:text-red-600">
                <li>{language === "es" ? "Cómo construyes tu mazo" : "How you build your deck"}</li>
                <li>{language === "es" ? "Cómo lees al rival" : "How you read your opponent"}</li>
                <li>{language === "es" ? "Qué decisiones tomas bajo presión" : "What decisions you make under pressure"}</li>
            </ul>
        </section>

        {/* SECCIÓN: QUÉ PAGAS Y QUÉ NO */}
        <section className="grid md:grid-cols-2 gap-8">
            {/* PAGAS POR */}
            <div className="bg-green-950/10 border border-green-900/30 p-6 rounded-sm">
                <h3 className="text-xl font-serif font-bold text-green-500 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5" /> {language === "es" ? "Pagas por:" : "You pay for:"}
                </h3>
                <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2"><span className="text-green-700">●</span> {language === "es" ? "Coleccionar" : "Collecting"}</li>
                    <li className="flex items-start gap-2"><span className="text-green-700">●</span> {language === "es" ? "Estética" : "Aesthetics"}</li>
                    <li className="flex items-start gap-2"><span className="text-green-700">●</span> {language === "es" ? "Apoyar el mundo que amas" : "Supporting the world you love"}</li>
                </ul>
            </div>

            {/* NO PAGAS POR */}
            <div className="bg-red-950/10 border border-red-900/30 p-6 rounded-sm">
                <h3 className="text-xl font-serif font-bold text-red-500 mb-4 flex items-center gap-2">
                    <X className="w-5 h-5" /> {language === "es" ? "No pagas por:" : "You don't pay for:"}
                </h3>
                <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2"><span className="text-red-900">●</span> {language === "es" ? "Ventaja" : "Advantage"}</li>
                    <li className="flex items-start gap-2"><span className="text-red-900">●</span> {language === "es" ? "Acceso a cartas rotas" : "Access to broken cards"}</li>
                    <li className="flex items-start gap-2"><span className="text-red-900">●</span> {language === "es" ? "Poder artificial" : "Artificial power"}</li>
                </ul>
            </div>
        </section>

        {/* SECCIÓN: INTERCAMBIO */}
        <section>
            <h2 className="text-3xl font-bold text-white font-serif mb-6">
                {language === "es" ? "Un sistema de intercambio diseñado contra el abuso" : "A trading system designed against abuse"}
            </h2>
            <p className="mb-6">
                {language === "es" 
                 ? "Vestigios permite intercambiar cartas, pero de forma controlada y justa: Solo cartas duplicadas. Intercambios 1 a 1 de la misma rareza. Sin mercados externos. Sin bots. Sin especulación." 
                 : "Vestigios allows trading cards, but in a controlled and fair way: Duplicate cards only. 1 to 1 trades of the same rarity. No external markets. No bots. No speculation."}
            </p>
            <p className="text-red-400 font-medium">
                {language === "es" ? "Queremos que el comercio sea humano, no una bolsa de valores dominada por granjas." : "We want trade to be human, not a stock market dominated by farms."}
            </p>
        </section>

        {/* CIERRE EPICO */}
        <section className="py-12 text-center">
            <Quote className="w-12 h-12 text-white/20 mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-white font-serif italic mb-8">
                {language === "es" 
                 ? "Queremos que dentro de años, cuando mires atrás, puedas decir: “Ese fue un juego que me respetó.”" 
                 : "We want that years from now, when you look back, you can say: “That was a game that respected me.”"}
            </p>
            <p className="text-red-500 font-bold uppercase tracking-widest text-sm">
                {language === "es" ? "Y esa es la carta más rara de todas." : "And that is the rarest card of all."}
            </p>
        </section>

        {/* FIRMA */}
        <div className="border-t border-white/10 pt-8 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full" /> {/* Placeholder para foto de avatar */}
            <div>
                <p className="text-white font-bold font-serif">Vestigios Team</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Santiago, Chile</p>
            </div>
        </div>

      </article>
    </div>
  )
}