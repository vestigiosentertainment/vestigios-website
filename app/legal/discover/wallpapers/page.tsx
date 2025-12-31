"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import Image from "next/image"
import { Download, ArrowLeft, Image as ImageIcon } from "lucide-react"

export default function WallpapersPage() {
  const { t, language } = useLanguage()

  // NOMBRES EXACTOS
  const wallpapers = [
    { 
      src: "/0.jpg", 
      title: language === "es" ? "La Reina Vampiro" : "The Vampire Queen" 
    },
    { 
      src: "/03.jpg", 
      title: language === "es" ? "Cazador de la Noche" : "Night Hunter" 
    },
    { 
      src: "/ancient-book-open-with-mystical-light-dark-library.jpg", 
      title: language === "es" ? "Los Secretos de Morgana" : "Morgana's Secrets" 
    },
    { 
      src: "/chess-pieces-on-board-strategic-thinking-dark-goth.jpg", 
      title: language === "es" ? "Estrategia Licántropa" : "Lycanthrope Strategy" 
    },
    { 
      src: "/02.jpg", 
      title: language === "es" ? "Bruja de Sangre" : "Blood Witch" 
    },
    { 
      src: "/01.jpg", 
      title: language === "es" ? "La Dama de la Bruma" : "Lady of the Mist" 
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4 selection:bg-red-900 selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-16">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 font-mono uppercase tracking-widest">
            <Link href="/legal/discover" className="hover:text-red-500 transition-colors flex items-center gap-2">
               <ArrowLeft className="w-4 h-4" /> {t("footer.discover")}
            </Link>
            <span>/</span>
            <span className="text-red-600">{t("footer.wallpapers")}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-white tracking-tight">
            {t("footer.wallpapers")}
          </h1>
          <p className="text-gray-400 text-lg font-light max-w-2xl">
            {language === "es" 
             ? "Piezas de arte en alta resolución para tus dispositivos. Captura la esencia de Vestigios." 
             : "High-resolution art pieces for your devices. Capture the essence of Vestigios."}
          </p>
        </div>

        {/* --- GRID DE WALLPAPERS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wallpapers.map((wp, i) => (
            <div key={i} className="group relative aspect-video overflow-hidden rounded-sm border border-white/10 bg-zinc-900 shadow-xl">
              
              {/* Placeholder de fondo */}
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 text-zinc-700">
                <ImageIcon size={40} />
              </div>

              {/* IMAGEN PRINCIPAL (Corregida con object-top) */}
              <Image 
                src={wp.src} 
                alt={wp.title} 
                fill 
                // AQUI ESTA EL CAMBIO: 'object-top' alinea la imagen arriba
                className="object-cover object-top transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 relative z-10" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay Hover */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-6 p-4 backdrop-blur-sm z-20">
                
                <h3 className="font-serif text-2xl font-bold text-center text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {wp.title}
                </h3>
                
                <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  <a href={wp.src} download className="flex items-center gap-2 bg-white text-black px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors cursor-pointer">
                    <Download size={14} /> PC (4K)
                  </a>
                  
                  <a href={wp.src} download className="flex items-center gap-2 border border-white text-white px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer">
                    <Download size={14} /> Mobile
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}