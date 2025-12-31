"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Eye, Camera, PenTool, Image as ImageIcon } from "lucide-react"

export default function ArtArticlePage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-gray-300 selection:bg-red-900 selection:text-white pb-24">
      
      {/* --- HERO HEADER --- */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="/ancient-book-open-with-mystical-light-dark-library.jpg" // Imagen de Arte/Libro
          alt="Art as Narrative"
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
                {language === "es" ? "El arte como narrativa" : "Art as Narrative"}
            </h1>
            <p className="text-xl text-gray-400 font-light italic border-l-4 border-amber-600 pl-4">
                {language === "es" ? "Por qué cada carta en Vestigios es una escena." : "Why every card in Vestigios is a scene."}
            </p>
        </div>
      </div>

      {/* --- CONTENIDO --- */}
      <article className="max-w-3xl mx-auto px-6 py-12 text-lg leading-relaxed space-y-16">
        
        {/* INTRO */}
        <section>
            <p className="text-xl md:text-2xl text-white font-light mb-8">
                {language === "es" 
                 ? "En muchos juegos de cartas, el arte existe para decorar. En Vestigios de Sangre, el arte existe para contar lo que las palabras no dicen." 
                 : "In many card games, art exists to decorate. In Vestigios de Sangre, art exists to tell what words do not say."}
            </p>
            <p className="text-gray-400 border-l-2 border-white/10 pl-6 italic">
                {language === "es"
                 ? "Cada ilustración no es una pose. Es un momento. Un segundo robado a una historia que sigue ocurriendo, incluso cuando la carta no está en mesa."
                 : "Each illustration is not a pose. It is a moment. A second stolen from a story that keeps happening, even when the card is not on the table."}
            </p>
        </section>

        {/* 1. DECISIONES NO HEROES */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-8 items-start border-t border-white/10 pt-12">
            <div className="text-red-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <Camera className="w-5 h-5" />
                {language === "es" ? "Enfoque" : "Focus"}
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "Las cartas no muestran héroes. Muestran decisiones." : "Cards don't show heroes. They show decisions."}
                </h2>
                <p className="mb-4">
                    {language === "es" ? "En Vestigios no verás personajes posando para la cámara. Verás:" : "In Vestigios you won't see characters posing for the camera. You will see:"}
                </p>
                <ul className="space-y-3 mb-6">
                    <li className="text-gray-300 flex items-center gap-3"><span className="w-1.5 h-1.5 bg-red-600 rounded-full"/> {language === "es" ? "Miradas antes de un disparo" : "Glances before a shot"}</li>
                    <li className="text-gray-300 flex items-center gap-3"><span className="w-1.5 h-1.5 bg-red-600 rounded-full"/> {language === "es" ? "Manos que dudan" : "Hands that hesitate"}</li>
                    <li className="text-gray-300 flex items-center gap-3"><span className="w-1.5 h-1.5 bg-red-600 rounded-full"/> {language === "es" ? "Sombras que observan" : "Shadows that watch"}</li>
                </ul>
                <p className="text-gray-400 text-sm">
                    {language === "es" ? "Queremos que cuando alguien mire una carta, sienta que llegó a mitad de algo." : "We want that when someone looks at a card, they feel like they arrived in the middle of something."}
                </p>
            </div>
        </section>

        {/* 2. NARRATIVA FRAGMENTADA */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-8 items-start border-t border-white/10 pt-12">
            <div className="text-amber-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <ImageIcon className="w-5 h-5" />
                {language === "es" ? "Perspectiva" : "Perspective"}
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "Una misma escena puede existir en varias cartas" : "The same scene can exist in multiple cards"}
                </h2>
                <p className="mb-6">
                    {language === "es" 
                     ? "En Vestigios, una situación importante no se resume en una sola imagen. Puede existir como una carta normal, una versión full art, un vestigio o una consecuencia." 
                     : "In Vestigios, an important situation is not summarized in a single image. It can exist as a normal card, a full art version, a vestige, or a consequence."}
                </p>
                <p className="text-white font-medium">
                    {language === "es" ? "Cada una muestra el mismo momento desde un ángulo distinto." : "Each one shows the same moment from a different angle."}
                </p>
            </div>
        </section>

        {/* 3. ARTE Y MECÁNICA */}
        <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
            <Eye className="w-8 h-8 text-red-500 mb-4" />
            <h2 className="text-2xl font-bold text-white font-serif mb-6">
                {language === "es" ? "El arte no contradice la mecánica" : "Art does not contradict mechanics"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="bg-black/50 p-4 border border-white/5">
                    <p className="text-gray-500 uppercase text-xs mb-2">Investigar</p>
                    <p className="text-white">No muestra acción. <br/><span className="text-red-400">Muestra observación.</span></p>
                </div>
                <div className="bg-black/50 p-4 border border-white/5">
                    <p className="text-gray-500 uppercase text-xs mb-2">Ejecutar</p>
                    <p className="text-white">No muestra gloria. <br/><span className="text-red-400">Muestra frialdad.</span></p>
                </div>
                <div className="bg-black/50 p-4 border border-white/5">
                    <p className="text-gray-500 uppercase text-xs mb-2">Sacrificar</p>
                    <p className="text-white">No muestra heroísmo. <br/><span className="text-red-400">Muestra pérdida.</span></p>
                </div>
            </div>
        </section>

        {/* 4. RESPETO AL ARTISTA */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-8 items-start border-t border-white/10 pt-12">
            <div className="text-purple-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <PenTool className="w-5 h-5" />
                {language === "es" ? "Autoria" : "Authorship"}
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "Por eso Vestigios respeta a sus artistas" : "That's why Vestigios respects its artists"}
                </h2>
                <p className="mb-4">
                    {language === "es" ? "Los artistas de Vestigios no ilustran pedidos. Interpretan escenas." : "Vestigios artists don't illustrate requests. They interpret scenes."}
                </p>
                <p className="text-gray-400 mb-6">
                    {language === "es" 
                     ? "Por eso cada obra tiene firma, reconocimiento y valor como pieza narrativa. No es arte descartable. Es parte del canon." 
                     : "That is why every work has a signature, recognition, and value as a narrative piece. It is not disposable art. It is part of the canon."}
                </p>
            </div>
        </section>

        {/* CIERRE */}
        <section className="py-12 text-center border-t border-white/10 mt-12">
            <p className="text-3xl text-white font-serif italic mb-6">
                {language === "es" ? "Una carta es un fotograma del mundo." : "A card is a frame of the world."}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 font-mono uppercase tracking-widest mb-8">
                <span>{language === "es" ? "Una lluvia" : "A rain"}</span> • 
                <span>{language === "es" ? "Una mirada" : "A glance"}</span> • 
                <span>{language === "es" ? "Una herida" : "A wound"}</span> • 
                <span>{language === "es" ? "Una sombra" : "A shadow"}</span>
            </div>
            <p className="text-red-500 font-bold uppercase tracking-widest text-sm">
                {language === "es" ? "Y entender que algo importante ocurrió ahí. Eso es Vestigios." : "And understanding that something important happened there. That is Vestigios."}
            </p>
        </section>

      </article>
    </div>
  )
}