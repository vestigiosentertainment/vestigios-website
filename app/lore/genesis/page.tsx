// UBICACIÓN: app/lore/genesis/page.tsx

"use client"

import { useLanguage } from "@/lib/language-context" // Asumo que tienes esto disponible
import Link from "next/link"
import { ArrowLeft, Clock, Share2 } from "lucide-react"

export default function GenesisLorePage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-gray-300 font-serif selection:bg-red-900 selection:text-white pb-20">
      
      {/* HEADER / NAV SIMPLIFICADA */}
      <nav className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-black/90 backdrop-blur-md z-50">
        <Link href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-widest font-sans font-bold">
            <ArrowLeft className="w-4 h-4" /> 
            {language === "es" ? "Volver al Inicio" : "Back to Home"}
        </Link>
        <span className="text-red-600 font-bold tracking-widest text-xs uppercase">Vestigios de Sangre Lore</span>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <article className="max-w-3xl mx-auto px-6 mt-16 md:mt-24">
        
        {/* Encabezado del Artículo */}
        <header className="mb-12 text-center">
            <div className="inline-block px-3 py-1 border border-red-900/50 rounded-full bg-red-900/10 text-red-500 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                Génesis
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {language === "es" ? "La Gran Fractura" : "The Great Fracture"}
            </h1>
            <div className="flex justify-center items-center gap-6 text-sm text-gray-500 font-sans">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 3 min read</span>
                <span className="w-1 h-1 bg-gray-700 rounded-full" />
                <span>{language === "es" ? "Historia Principal" : "Main Storyline"}</span>
            </div>
        </header>

        {/* Separador */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

        {/* Cuerpo del Texto - Aquí tu Directora de Lore escribirá */}
        <div className="prose prose-invert prose-lg mx-auto prose-p:leading-relaxed prose-headings:font-serif prose-headings:text-red-500 prose-strong:text-white">
            
            <p className="lead text-2xl text-white italic opacity-90 mb-10 border-l-4 border-red-800 pl-6 py-2">
               {language === "es" 
                ? '"Antes de todo lo que conocemos, cuando todo era uno, el anhelo de un corazón por trascender hizo que este explotara y diera forma a los mundos con fragmentos de sí mismo."'
                : '"Before everything we know, when all was one, the yearning of a heart to transcend caused it to explode and shape the worlds with fragments of itself."'}
            </p>

            <p>
                {language === "es" 
                 ? "En el vacío primordial, no existía el tiempo ni la materia, solo la unidad absoluta. Sin embargo, la perfección estática engendra un deseo: el deseo de ser más."
                 : "In the primordial void, neither time nor matter existed, only absolute unity. However, static perfection begets a desire: the desire to be more."}
            </p>

            <h3>{language === "es" ? "El Icor Divino" : "The Divine Ichor"}</h3>

            <p>
                {language === "es" 
                 ? <>Gracias a su <strong className="text-red-400">icor</strong>, derramado sobre la superficie, la vida fue posible: una existencia nutrida por vestigios aún más pequeños y limitados, codiciados por aquellos que conocen el secreto de la vida.</>
                 : <>Thanks to its <strong className="text-red-400">ichor</strong>, spilled upon the surface, life was made possible: an existence nourished by even smaller and limited vestiges, coveted by those who know the secret of life.</>}
            </p>

            <p>
               {language === "es" 
                ? "Estos fragmentos no son meros restos; son llaves. Llaves que abren puertas que quizás debieron permanecer cerradas eternamente. Las facciones ahora luchan no por territorio, sino por la esencia misma de la creación."
                : "These fragments are not mere remnants; they are keys. Keys that unlock doors that perhaps should have remained eternally closed. The factions now fight not for territory, but for the very essence of creation."}
            </p>

            {/* Espacio para más contenido futuro */}
            <div className="my-12 p-8 bg-zinc-900/50 border border-dashed border-zinc-700 text-center rounded-lg">
                <p className="text-zinc-500 italic text-sm">
                    {language === "es" ? "[Imagen o Ilustración Antigua Aquí]" : "[Ancient Image or Illustration Here]"}
                </p>
            </div>

        </div>

        {/* Footer del Lore */}
        <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
            <div className="text-sm text-gray-500">
                Next Chapter: <span className="text-white ml-2 hover:underline cursor-pointer">The First Awakening</span>
            </div>
            <button className="p-3 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                <Share2 className="w-5 h-5" />
            </button>
        </div>

      </article>
    </div>
  )
}
