"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import Image from "next/image"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function ArticlesPage() {
  const { t, language } = useLanguage()

  // ARTÍCULO 1 (Destacado)
  const featuredArticle = {
    title: language === "es" ? "Vestigios de Sangre no es un Gacha" : "Vestigios of Blood is Not a Gacha",
    excerpt: language === "es" 
        ? "Durante años, los juegos de cartas han convertido al jugador en una billetera ambulante. Nosotros rompemos esa lógica. No queremos que ganes porque pagaste, queremos que ganes porque jugaste mejor. Descubre nuestro sistema de economía ética." 
        : "For years, card games have turned players into walking wallets. We break that logic. We don't want you to win because you paid; we want you to win because you played better. Discover our ethical economy system.",
    date: "2025-12-31",
    author: "Founder",
    image: "/portada-home.jpg",
    category: language === "es" ? "Manifiesto" : "Manifesto",
    href: "/legal/discover/articles/manifesto"
  }

  // LISTA DE ARTÍCULOS SECUNDARIOS (Ahora son 3)
  const articles = [
    {
      id: 2,
      // ARTÍCULO: DISEÑO
      title: language === "es" ? "Cómo se construye un bloque: Cuando la historia guía al juego" : "How a Block is Built: When Story Guides the Game",
      excerpt: language === "es"
        ? "¿Esto está bien pensado? En Vestigios, no diseñamos mecánicas arbitrarias. Cada expansión es una herida histórica. Descubre por qué aquí las reglas no explican el mundo, sino que el mundo explica las reglas."
        : "Is this well thought out? In Vestigios, we don't design arbitrary mechanics. Each expansion is a historical wound. Discover why here, the rules don't explain the world—the world explains the rules.",
      date: "2025-12-31",
      author: "Lead Designer",
      image: "/chess-pieces-on-board-strategic-thinking-dark-goth.jpg", 
      category: "Dev Diary",
      href: "/legal/discover/articles/design-philosophy"
    },
    {
      id: 3,
      // ARTÍCULO: ARTE
      title: language === "es" ? "El arte como narrativa: Por qué cada carta es una escena" : "Art as Narrative: Why Every Card is a Scene",
      excerpt: language === "es"
        ? "En muchos juegos, el arte es decoración. En Vestigios, es un segundo robado a una historia. Descubre por qué nuestras cartas no muestran poses, sino decisiones, y cómo cada ilustración narra lo que las palabras callan."
        : "In many games, art is decoration. In Vestigios, it is a second stolen from a story. Discover why our cards don't show poses, but decisions, and how each illustration tells what words keep silent.",
      date: "2025-12-31",
      author: "Art Director",
      image: "/ancient-book-open-with-mystical-light-dark-library.jpg", 
      category: "Art & Lore",
      href: "/legal/discover/articles/art-narrative"
    },
    {
      id: 4,
      // ARTÍCULO: ÉTICA (NUEVO)
      title: language === "es" ? "La ética de Vestigios Entertainment" : "The Ethics of Vestigios Entertainment",
      excerpt: language === "es"
        ? "¿Me van a exprimir? Vestigios no fue creado por un departamento de marketing, sino por jugadores. No diseñamos para explotar, diseñamos para durar. Conoce nuestra promesa de honestidad y responsabilidad indie."
        : "Will they squeeze me? Vestigios was not created by a marketing department, but by players. We don't design to exploit, we design to last. Learn about our promise of honesty and indie responsibility.",
      date: "2025-12-31",
      author: "Studio Head",
      image: "/respectful-handshake-dark-atmosphere-gothic.jpg", 
      category: "Studio Values",
      href: "/legal/discover/articles/studio-ethics"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-20">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 font-mono uppercase tracking-widest">
            <Link href="/legal/discover" className="hover:text-red-500 transition-colors">
              {t("footer.discover")}
            </Link>
            <span>/</span>
            <span className="text-red-600">{t("footer.articles")}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-tight text-white mb-6">
            {t("footer.articles")}
          </h1>
          <div className="h-0.5 w-full bg-gradient-to-r from-red-900 via-red-900/20 to-transparent opacity-50" />
        </div>

        {/* DESTACADO (MANIFIESTO) */}
        <div className="relative h-[450px] md:h-[550px] w-full rounded-sm overflow-hidden group mb-20 border border-white/10 shadow-2xl">
            <Image
                src={featuredArticle.image}
                alt="Featured Article"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-50 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
                <div className="flex items-center gap-4 mb-4">
                    <span className="inline-block px-3 py-1 bg-red-900/80 text-white text-xs font-bold uppercase tracking-wider border-l-2 border-red-500">
                        {featuredArticle.category}
                    </span>
                    <span className="text-gray-400 text-xs font-mono">{featuredArticle.date}</span>
                </div>
                <h2 className="text-3xl md:text-6xl font-bold font-serif mb-6 leading-tight group-hover:text-red-100 transition-colors text-balance">
                    {featuredArticle.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-200 mb-8 font-light max-w-2xl text-pretty leading-relaxed border-l-4 border-white/20 pl-6">
                    {featuredArticle.excerpt}
                </p>
                <Link 
                  href={featuredArticle.href}
                  className="inline-flex items-center gap-3 text-white font-bold tracking-widest uppercase text-sm border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition-all"
                >
                    {language === "es" ? "Leer Artículo" : "Read Article"} <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>

        {/* GRID SECUNDARIA (3 ARTÍCULOS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="group flex flex-col bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:border-red-900/50 transition-all duration-300 h-full"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/80 text-xs font-mono text-gray-300 border border-white/10 uppercase tracking-wider">
                    {article.category}
                </div>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-6 text-xs text-gray-500 mb-4 font-mono border-b border-white/5 pb-4">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3 text-red-700" />
                        <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <User className="w-3 h-3 text-red-700" />
                        <span>{article.author}</span>
                    </div>
                </div>
                <h3 className="text-xl font-bold font-serif mb-4 leading-snug group-hover:text-red-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1 font-light">
                  {article.excerpt}
                </p>
                <div className="flex justify-end">
                    <Link 
                      href={article.href}
                      className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors flex items-center gap-2 border-b border-transparent group-hover:border-red-500 pb-1"
                    >
                        {language === "es" ? "Leer completo" : "Read full"}
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  )
}