"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User, BookOpen, Quote, ArrowRight } from "lucide-react"

export default function LoreDebutNewsPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-red-900 selection:text-white pb-20">
      
      {/* HEADER / NAV */}
      <nav className="p-6 border-b border-white/10 flex items-center sticky top-0 bg-black/90 backdrop-blur-md z-50">
        <Link href="/legal/discover/articles" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-widest font-bold">
            <ArrowLeft className="w-4 h-4" /> 
            {language === "es" ? "Volver a Artículos" : "Back to Articles"}
        </Link>
      </nav>

      {/* CONTENIDO DEL ARTÍCULO */}
      <article className="max-w-3xl mx-auto px-6 mt-12 md:mt-20">
        
        {/* Imagen de Cabecera */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-sm overflow-hidden mb-10 border border-white/10 shadow-2xl group">
            <Image 
                src="/ancient-book-open-with-mystical-light-dark-library.jpg"
                alt="Lore Book Opening"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
            
            {/* Etiqueta flotante */}
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-red-900/90 text-white text-xs font-bold uppercase tracking-widest border border-red-500/30">
                {language === "es" ? "Anuncio Oficial" : "Official Announcement"}
            </div>
        </div>

        {/* Metadatos */}
        <div className="flex items-center gap-6 text-xs font-mono text-gray-500 uppercase tracking-widest mb-6 border-b border-white/10 pb-6">
            <span className="flex items-center gap-2 text-red-500 font-bold"><Calendar className="w-3 h-3" /> 2026-01-04</span>
            <span className="flex items-center gap-2"><User className="w-3 h-3" /> Vestigios Team</span>
            <span className="hidden md:flex items-center gap-2"><BookOpen className="w-3 h-3" /> Lore Update</span>
        </div>

        {/* Título Principal */}
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
            {language === "es" 
             ? "El Despertar de la Historia: Meliza Castillo abre los archivos prohibidos"
             : "Awakening History: Meliza Castillo opens the forbidden archives"}
        </h1>

        {/* Cuerpo del Texto */}
        <div className="prose prose-invert prose-lg mx-auto text-gray-300 leading-relaxed font-light">
            
            <p className="font-serif text-xl text-white italic opacity-90 mb-8 border-l-4 border-red-900 pl-6">
                {language === "es"
                 ? "El silencio sobre los orígenes de nuestro mundo ha terminado. Hoy, la primera pieza del rompecabezas ha sido revelada."
                 : "The silence regarding the origins of our world has ended. Today, the first piece of the puzzle has been revealed."}
            </p>

            <p>
                {language === "es"
                 ? "Durante meses, la comunidad ha especulado sobre la naturaleza de la «Gran Fractura» y las verdaderas motivaciones de las facciones que luchan por el control de Vestigios. Hoy, nos enorgullece anunciar que nuestra Directora Narrativa y de Lore, Meliza Castillo, ha firmado la liberación del primer documento fundacional."
                 : "For months, the community has speculated about the nature of the 'Great Fracture' and the true motivations of the factions fighting for control of Vestigios. Today, we are proud to announce that our Narrative & Lore Director, Meliza Castillo, has signed off on the release of the first foundational document."}
            </p>

            {/* Cita de la Directora */}
            <div className="my-12 p-8 bg-zinc-900/50 border border-white/5 rounded-sm relative overflow-hidden">
                <Quote className="absolute top-4 right-4 w-10 h-10 text-white/5" />
                <p className="text-sm font-mono text-red-500 mb-4 uppercase tracking-wider font-bold">
                    {language === "es" ? "Mensaje de la Directora" : "Director's Message"}
                </p>
                <p className="italic text-white font-serif text-xl leading-relaxed mb-4">
                    {language === "es"
                     ? "«Para entender la guerra, primero deben entender la herida que la causó. No diseñamos historias para rellenar huecos; diseñamos un mundo que respira, sangra y recuerda. Bienvenidos al Génesis.»"
                     : "«To understand the war, you must first understand the wound that caused it. We don't design stories to fill gaps; we design a world that breathes, bleeds, and remembers. Welcome to Genesis.»"}
                </p>
                <footer className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-2">
                    — Meliza Castillo
                </footer>
            </div>

            <p>
                {language === "es"
                 ? "Este texto no es simplemente una historia de fondo; es la estructura ósea sobre la que se construye cada mecánica de juego. Desde la arrogancia de los Vampiros hasta la desesperación de la Bruma, todo nace de un mismo evento cataclísmico explicado en este registro."
                 : "This text is not merely background story; it is the bone structure upon which every game mechanic is built. From the arrogance of the Vampires to the desperation of the Mist, everything is born from the same cataclysmic event explained in this record."}
            </p>

            <p>
                {language === "es"
                 ? "El documento, titulado «Génesis: La Gran Fractura», ya está disponible para lectura pública en nuestra sección de Lore. Advertimos a los lectores: el conocimiento en Vestigios tiene un precio."
                 : "The document, titled 'Genesis: The Great Fracture', is now available for public reading in our Lore section. We warn readers: knowledge in Vestigios comes at a price."}
            </p>
        </div>

        {/* CALL TO ACTION (Botón Gigante al Lore) */}
        <div className="mt-16 mb-20">
            <Link 
                href="/legal/discover/lore/genesis" 
                className="group relative block w-full p-8 md:p-12 bg-gradient-to-r from-red-950/40 to-black border border-red-900/30 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300"
            >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl font-bold text-white font-serif mb-2 flex items-center gap-3 justify-center md:justify-start">
                            <BookOpen className="w-6 h-6 text-red-500" />
                            {language === "es" ? "Leer el Archivo: Génesis" : "Read Archive: Genesis"}
                        </h3>
                        <p className="text-gray-400 text-sm max-w-md">
                            {language === "es" ? "Accede al documento completo escrito por Meliza Castillo." : "Access the full document written by Meliza Castillo."}
                        </p>
                    </div>
                    
                    <span className="inline-flex items-center gap-2 bg-red-900 text-white font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-sm group-hover:bg-red-800 transition-colors shadow-lg">
                        {language === "es" ? "Abrir Registro" : "Open Record"}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </Link>
        </div>

      </article>
    </div>
  )
}
