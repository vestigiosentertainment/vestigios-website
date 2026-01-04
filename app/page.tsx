"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowRight, 
  Calendar, 
  Sparkles, 
  Shield, 
  Scroll, 
  Image as ImageIcon, 
  Beaker
} from "lucide-react"

export default function HomePage() {
  const { t, language } = useLanguage()

  // NOTICIAS ACTUALIZADAS
  // Se ha agregado el debut del Lore como noticia principal
  const latestNews = [
    {
      id: 1,
      tag: language === "es" ? "Lanzamiento de Lore" : "Lore Debut",
      title: language === "es" ? "El despertar de la historia: Meliza Castillo presenta el Lore Oficial" : "Awakening History: Meliza Castillo Presents the Official Lore",
      date: "2026-01-04",
      image: "/ancient-book-open-with-mystical-light-dark-library.jpg",
      href: "/legal/discover/lore/genesis" // Enlace actualizado
    },
    {
      id: 2,
      tag: language === "es" ? "Entrevista Exclusiva" : "Exclusive Interview",
      title: language === "es" ? "Diseñando el Abismo: Entrevista con J. Garrido" : "Designing the Abyss: Interview with J. Garrido",
      date: "2026-01-02",
      image: "/respectful-handshake-dark-atmosphere-gothic.jpg",
      href: "/legal/discover/articles/interview-jonathan-garrido"
    },
    {
      id: 3,
      tag: language === "es" ? "Manifiesto" : "Manifesto",
      title: language === "es" ? "Vestigios de Sangre no es un Gacha" : "Vestigios of Blood is Not a Gacha",
      date: "2025-12-31",
      image: "/portada-home.jpg",
      href: "/legal/discover/articles/manifesto"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dark-gothic-castle-shrouded-in-mist-and-fog-atmosp.jpg" 
            alt="Vestigios Universe Atmosphere"
            fill
            className="object-cover opacity-60 animate-pulse-slow" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mt-20">
          <p className="text-red-500 font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base animate-fade-in-up">
            {language === "es" ? "Estrategia Gótica TCG" : "Gothic Strategy TCG"}
          </p>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 text-white font-serif drop-shadow-2xl">
            {t("home.hero.title")}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto mb-10 text-pretty">
            {t("home.hero.subtitle")}
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
             <Link 
               href="/project"
               className="px-10 py-4 bg-red-800 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
             >
               {t("nav.project")}
             </Link>
             <Link 
               href="/legal/discover/rules"
               className="px-10 py-4 border border-white/30 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-sm transition-all backdrop-blur-sm"
             >
               {language === "es" ? "Aprender a Jugar" : "Learn to Play"}
             </Link>
          </div>
        </div>
      </section>

      {/* --- 2. LATEST NEWS --- */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10">
         <div className="flex items-end justify-between mb-12">
            <div>
                <h2 className="text-4xl font-serif font-bold text-white mb-2">
                    {language === "es" ? "Últimas Noticias" : "Latest News"}
                </h2>
                <div className="h-1 w-20 bg-red-800" />
            </div>
            <Link href="/legal/discover/articles" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm uppercase font-bold tracking-wider">
                {language === "es" ? "Ver todo" : "View All"} <ArrowRight className="w-4 h-4" />
            </Link>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
                <Link key={news.id} href={news.href} className="group block bg-zinc-900/50 border border-white/5 hover:border-red-900/50 transition-all duration-300 rounded-sm overflow-hidden">
                    <div className="relative h-56 w-full overflow-hidden">
                        <Image 
                            src={news.image} 
                            alt={news.title} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs font-mono text-white border border-white/10 uppercase tracking-wider">
                            {news.tag}
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-mono">
                            <Calendar className="w-3 h-3" /> {news.date}
                        </div>
                        <h3 className="text-xl font-bold font-serif text-white group-hover:text-red-400 transition-colors leading-tight">
                            {news.title}
                        </h3>
                    </div>
                </Link>
            ))}
         </div>
         
         <div className="mt-8 text-center md:hidden">
            <Link href="/legal/discover/articles" className="text-sm text-gray-400 underline decoration-red-900 underline-offset-4">
                {language === "es" ? "Ver todos los artículos" : "View all articles"}
            </Link>
         </div>
      </section>

      {/* --- 3. SECCIÓN: LORE / GÉNESIS (MINIMALISTA) --- */}
      <section className="relative py-32 px-4 border-t border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black">
        {/* Fondo decorativo sutil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* Títulos */}
            <div className="mb-12">
                <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
                    Lore
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                    {language === "es" ? "Génesis: La Fractura Primordial" : "Genesis: The Primordial Fracture"}
                </h2>
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-red-800 to-transparent mx-auto" />
            </div>

            {/* Solo el Botón - Apuntando a la nueva ruta */}
            <div className="flex justify-center">
                <Link 
                    href="/legal/discover/lore/genesis" 
                    className="group inline-flex items-center gap-3 text-white bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-900/10 px-10 py-5 rounded-sm uppercase tracking-widest text-xs font-bold transition-all duration-300"
                >
                    {language === "es" ? "Leer Historia Completa" : "Read Full Story"}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-red-500" />
                </Link>
            </div>
        </div>
      </section>

      {/* --- 4. PROJECT SHOWCASE --- */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 md:order-1">
                <div className="flex items-center gap-2 text-red-500 mb-4">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-widest">{t("nav.project")}</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6 leading-none">
                    {t("project.title")}
                </h2>
                <p className="text-lg text-gray-400 mb-8 font-light leading-relaxed">
                    {t("home.intro.text")}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-10 border-t border-white/10 pt-8">
                    <div>
                        <p className="text-3xl font-bold text-white">5</p>
                        <p className="text-xs text-gray-500 uppercase tracking-widest">{language === "es" ? "Facciones" : "Factions"}</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-white">200+</p>
                        <p className="text-xs text-gray-500 uppercase tracking-widest">{language === "es" ? "Cartas Base" : "Base Cards"}</p>
                    </div>
                </div>

                <Link 
                   href="/project"
                   className="inline-flex items-center gap-3 text-white border-b border-red-600 pb-1 hover:text-red-500 transition-colors font-bold uppercase text-sm tracking-widest"
                >
                    {language === "es" ? "Explorar el Universo" : "Explore the Universe"} <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="order-1 md:order-2 flex justify-center relative group">
                 <div className="absolute inset-0 bg-red-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 <Image
                    src="/dark-gothic-trading-card-game-cards-blood-and-shad.jpg"
                    alt="Card Preview"
                    width={400}
                    height={600}
                    className="object-contain relative z-10 drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1"
                 />
            </div>

        </div>
      </section>

      {/* --- 5. QUICK LINKS --- */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
                {language === "es" ? "Comienza tu Viaje" : "Start Your Journey"}
            </h2>
            <p className="text-gray-400">
                {language === "es" ? "Todo lo que necesitas para dominar la oscuridad." : "Everything you need to master the darkness."}
            </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <Link href="/legal/discover/formats" className="group bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 hover:border-red-500/30 transition-all text-center">
                <Shield className="w-10 h-10 text-gray-400 group-hover:text-red-500 mx-auto mb-4 transition-colors" />
                <h3 className="text-xl font-bold text-white font-serif mb-2">{language === "es" ? "Formatos" : "Formats"}</h3>
                <p className="text-sm text-gray-500">{language === "es" ? "Competitivo y Sellado" : "Competitive & Sealed"}</p>
            </Link>
            
            <Link href="/legal/discover/rules" className="group bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 hover:border-red-500/30 transition-all text-center">
                <Scroll className="w-10 h-10 text-gray-400 group-hover:text-amber-500 mx-auto mb-4 transition-colors" />
                <h3 className="text-xl font-bold text-white font-serif mb-2">{language === "es" ? "Reglas" : "Rules"}</h3>
                <p className="text-sm text-gray-500">{language === "es" ? "Aprende lo básico" : "Learn the basics"}</p>
            </Link>

            <Link href="/legal/discover/wallpapers" className="group bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 hover:border-red-500/30 transition-all text-center">
                <ImageIcon className="w-10 h-10 text-gray-400 group-hover:text-purple-500 mx-auto mb-4 transition-colors" />
                <h3 className="text-xl font-bold text-white font-serif mb-2">{language === "es" ? "Galería" : "Gallery"}</h3>
                <p className="text-sm text-gray-500">{language === "es" ? "Arte y Wallpapers" : "Art & Wallpapers"} </p>
            </Link>

            <Link href="/join-tester" className="group bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 hover:border-red-500/30 transition-all text-center">
                <Beaker className="w-10 h-10 text-gray-400 group-hover:text-green-500 mx-auto mb-4 transition-colors" />
                <h3 className="text-xl font-bold text-white font-serif mb-2">{language === "es" ? "Beta Tester" : "Beta Tester"}</h3>
                <p className="text-sm text-gray-500">{language === "es" ? "Solicitar acceso" : "Request access"} </p>
            </Link>

        </div>
      </section>

    </div>
  )
}
