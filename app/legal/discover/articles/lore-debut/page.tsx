"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User, BookOpen, Feather, ArrowRight } from "lucide-react"

export default function LoreDebutArticlePage() {
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
        <div className="relative w-full h-[300px] md:h-[400px] rounded-sm overflow-hidden mb-10 border border-white/10 shadow-2xl">
            <Image 
                src="/ancient-book-open-with-mystical-light-dark-library.jpg"
                alt="Lore Book"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        </div>

        {/* Metadatos */}
        <div className="flex items-center gap-6 text-xs font-mono text-red-500 uppercase tracking-widest mb-6">
            <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> 2026-01-04</span>
            <span className="flex items-center gap-2"><User className="w-3 h-3" /> Editorial</span>
        </div>

        {/* Título */}
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
            {language === "es" 
             ? "El Despertar de la Historia: Meliza Castillo presenta el Lore Oficial"
             : "Awakening History: Meliza Castillo Presents the Official Lore"}
        </h1>

        {/* Separador */}
        <div className="h-px w-20 bg-red-900 mb-10" />

        {/* Cuerpo del Texto */}
        <div className="prose prose-invert prose-lg mx-auto text-gray-300 leading-relaxed">
            <p className="font-serif text-xl text-white italic opacity-90 mb-8">
                {language === "es"
                 ? "El silencio sobre los orígenes de nuestro mundo ha terminado. Hoy, los archivos prohibidos se abren."
                 : "The silence regarding the origins of our world has ended. Today, the forbidden archives are opened."}
            </p>

            <p>
                {language === "es"
                 ? "Durante meses, la comunidad ha especulado sobre la naturaleza de la «Gran Fractura» y las verdaderas motivaciones de las facciones que luchan por el control de Vestigios. Hoy, nos enorgullece anunciar que nuestra Directora Narrativa y de Lore, Meliza Castillo, ha firmado la liberación del primer documento fundacional."
                 : "For months, the community has speculated about the nature of the 'Great Fracture' and the true motivations of the factions fighting for control of Vestigios. Today, we are proud to announce that our Narrative & Lore Director, Meliza Castillo, has signed off on the release of the first foundational document."}
            </p>

            <p>
                {language === "es"
                 ? "Este texto no es simplemente una historia de fondo; es la estructura ósea sobre la que se construye cada mecánica de juego. Desde los vampiros aristócratas hasta los cazadores adictos a la pólvora, todo nace de un mismo evento cataclísmico."
                 : "This text is not merely background story; it is the bone structure upon which every game mechanic is built. From the aristocratic vampires to the gunpowder-addicted hunters, everything is born from the same cataclysmic event."}
            </p>

            <div className="my-10 p-6 bg-white/5 border-l-2 border-red-500 rounded-r-lg">
                <p className="text-sm font-mono text-gray-400 mb-2 uppercase tracking-wider">
                    {language === "es" ? "Cita de la Directora" : "Director's Quote"}
                </p>
                <p className="italic text-white font-serif text-lg">
                    {language === "es"
                     ? "«Para entender la guerra, primero deben entender la herida que la causó. Bienvenidos al Génesis.» — Meliza Castillo."
                     : "«To understand the war, you must first understand the wound that caused it. Welcome to Genesis.» — Meliza Castillo."}
                </p>
            </div>

            <p>
                {language === "es"
                 ? "El documento, titulado «Génesis: La Gran Fractura», ya está disponible para lectura pública en nuestra sección de descubrimientos. Advertimos a los lectores: el conocimiento en Vestigios tiene un precio."
                 : "The document, titled 'Genesis: The Great Fracture', is now available for public reading in our discovery section. We warn readers: knowledge in Vestigios comes at a price."}
            </p>
        </div>

        {/* CALL TO ACTION (Botón al Lore) */}
        <div className="mt-16 mb-20 p-8 md:p-12 bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 rounded-lg text-center relative overflow-hidden group">
            {/* Efecto de fondo */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />
            
            <BookOpen className="w-12 h-12 text-red-500 mx-auto mb-6 opacity-80" />
            
            <h3 className="text-2xl font-bold text-white font-serif mb-4">
                {language === "es" ? "Lee el Registro Completo" : "Read the Full Record"}
            </h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
                {language === "es" ? "Accede al archivo Génesis y descubre el origen de las facciones." : "Access the Genesis archive and discover the origin of the factions."}
            </p>
            
            <Link 
                href="/legal/discover/lore/genesis" 
                className="inline-flex items-center gap-3 bg-red-900 hover:bg-red-800 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-sm transition-all shadow-lg hover:shadow-red-900/40 transform hover:-translate-y-1"
            >
                {language === "es" ? "Entrar al Lore" : "Enter the Lore"}
                <ArrowRight className="w-4 h-4" />
            </Link>
        </div>

      </article>
    </div>
  )
}
