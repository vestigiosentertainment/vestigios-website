"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Scale, Heart, Users, ShieldCheck, Quote } from "lucide-react"

export default function EthicsArticlePage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-gray-300 selection:bg-red-900 selection:text-white pb-24">
      
      {/* --- HERO HEADER --- */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="/respectful-handshake-dark-atmosphere-gothic.jpg" // Imagen de comunidad/respeto
          alt="Studio Ethics"
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
                {language === "es" ? "La ética de Vestigios Entertainment" : "The Ethics of Vestigios Entertainment"}
            </h1>
            <p className="text-xl text-gray-400 font-light italic border-l-4 border-gray-600 pl-4">
                {language === "es" ? "Por qué el respeto al jugador es parte del diseño." : "Why player respect is part of the design."}
            </p>
        </div>
      </div>

      {/* --- CONTENIDO --- */}
      <article className="max-w-3xl mx-auto px-6 py-12 text-lg leading-relaxed space-y-16">
        
        {/* INTRO: NO MARKETING */}
        <section>
            <p className="text-xl md:text-3xl text-white font-serif mb-8 leading-snug">
                {language === "es" 
                 ? "Vestigios de Sangre no fue creado por un departamento de marketing. Fue creado por jugadores." 
                 : "Vestigios of Blood was not created by a marketing department. It was created by players."}
            </p>
            <p className="text-gray-400 mb-6">
                {language === "es"
                 ? "Por personas que ganaron, perdieron, compitieron, construyeron mazos y vivieron torneos reales. Y que aprendieron algo fundamental:"
                 : "By people who won, lost, competed, built decks, and lived through real tournaments. And who learned something fundamental:"}
            </p>
            <div className="bg-white/5 p-6 rounded-sm border-l-2 border-red-500 italic text-white">
                {language === "es" 
                 ? "Un juego solo vive si sus jugadores confían en él." 
                 : "A game only lives if its players trust it."}
            </div>
        </section>

        {/* 1. EXPLOTAR VS DURAR */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-8 items-start border-t border-white/10 pt-12">
            <div className="text-red-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <Scale className="w-5 h-5" />
                {language === "es" ? "Filosofía" : "Philosophy"}
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "No diseñamos para explotar. Diseñamos para durar." : "We don't design to exploit. We design to last."}
                </h2>
                <p className="mb-4 text-gray-400">
                    {language === "es" ? "Muchos juegos modernos maximizan ingresos a corto plazo con metas rotos y pases que generan ansiedad. Eso crea picos de dinero... y comunidades que se rompen." : "Many modern games maximize short-term revenue with broken metas and anxiety-inducing passes. That creates money spikes... and broken communities."}
                </p>
                <p className="text-white font-medium">
                    {language === "es" 
                     ? "Preferimos una comunidad pequeña, leal y apasionada antes que millones de usuarios que se sienten usados." 
                     : "We prefer a small, loyal, and passionate community over millions of users who feel used."}
                </p>
            </div>
        </section>

        {/* 2. TRANSPARENCIA */}
        <section className="bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 rounded-sm">
            <ShieldCheck className="w-8 h-8 text-white mb-4" />
            <h2 className="text-2xl font-bold text-white font-serif mb-6">
                {language === "es" ? "Transparencia por sobre manipulación" : "Transparency over manipulation"}
            </h2>
            <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-3 text-gray-300">
                    <span className="text-red-500">✕</span> {language === "es" ? "Sin cajas sorpresa engañosas" : "No deceptive loot boxes"}
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                    <span className="text-red-500">✕</span> {language === "es" ? "Sin ventajas ocultas" : "No hidden advantages"}
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                    <span className="text-red-500">✕</span> {language === "es" ? "Sin mecánicas para confundir" : "No mechanics designed to confuse"}
                </li>
            </ul>
            <p className="font-serif italic text-white border-t border-white/10 pt-4">
                {language === "es" ? "Si algo existe, el jugador puede entenderlo. Eso no es una debilidad. Es respeto." : "If something exists, the player can understand it. That is not a weakness. It is respect."}
            </p>
        </section>

        {/* 3. RESPONSABILIDAD INDIE */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-8 items-start border-t border-white/10 pt-12">
            <div className="text-amber-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <Users className="w-5 h-5" />
                {language === "es" ? "Compromiso" : "Commitment"}
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "Un estudio independiente, una responsabilidad mayor" : "An independent studio, a greater responsibility"}
                </h2>
                <p className="mb-4">
                    {language === "es" ? "No tenemos una corporación detrás. Eso nos da libertad. Y también nos da una obligación: Hacer las cosas bien." : "We don't have a corporation behind us. That gives us freedom. And it also gives us an obligation: To do things right."}
                </p>
                <p className="text-gray-400">
                    {language === "es" 
                     ? "Cada decisión, desde una carta hasta una política de intercambio, es pensada como si el jugador estuviera frente a nosotros. Porque lo está." 
                     : "Every decision, from a card to a trading policy, is thought out as if the player were standing in front of us. Because they are."}
                </p>
            </div>
        </section>

        {/* CIERRE */}
        <section className="py-12 text-center border-t border-white/10 mt-12">
            <Heart className="w-10 h-10 text-red-600 mx-auto mb-6" />
            <p className="text-2xl text-white font-serif italic mb-6">
                {language === "es" ? "Vestigios no promete perfección. Promete honestidad." : "Vestigios does not promise perfection. It promises honesty."}
            </p>
            <p className="text-gray-500 uppercase tracking-widest text-sm">
                {language === "es" ? "Y en esta industria, eso es raro." : "And in this industry, that is rare."}
            </p>
        </section>

      </article>
    </div>
  )
}