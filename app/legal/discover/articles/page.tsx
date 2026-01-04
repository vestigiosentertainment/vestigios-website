"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import Image from "next/image"
import { Calendar, User, ArrowRight, Feather } from "lucide-react"

export default function ArticlesPage() {
  const { t, language } = useLanguage()

  // ARTÍCULO 1 (NUEVO DESTACADO - LORE DE MELIZA CASTILLO)
  const featuredArticle = {
    title: language === "es" 
        ? "El despertar de la historia: Meliza Castillo presenta el Lore Oficial" 
        : "Awakening History: Meliza Castillo Presents the Official Lore",
    excerpt: language === "es" 
        ? "El silencio se ha roto. Hoy debuta el registro oficial del universo de Vestigios. Nuestra Directora Narrativa abre los archivos prohibidos sobre el Génesis. Entra y descubre el origen." 
        : "The silence has been broken. Today marks the debut of the official record of the Vestigios universe. Our Narrative Director opens the forbidden archives regarding Genesis. Enter and discover the origin.",
    date: "2026-01-04", 
    author: "Meliza Castillo",
    image: "/ancient-book-open-with-mystical-light-dark-library.jpg", 
    category: language === "es" ? "Lanzamiento de Lore" : "Lore Debut",
    href: "/legal/discover/articles/lore-debut" 
  }

  // LISTA DE ARTÍCULOS SECUNDARIOS
  const articles = [
    {
      id: 0,
      // ARTÍCULO: JONATHAN GARRIDO
      title: language === "es" ? "Diseñando el Abismo: Entrevista con Jonathan Garrido" : "Designing the Abyss: Interview with Jonathan Garrido",
      excerpt: language === "es" 
          ? "Nuestro Director de Juego habla sobre el combate sin retorno, el balance del meta y la ambiciosa transición hacia el MMO." 
          : "Our Game Director talks about no-return combat, meta balance, and the ambitious transition to MMO.",
      date: "2026-01-02",
      author: "Editorial",
      image: "/respectful-handshake-dark-atmosphere-gothic.jpg", 
      category: language === "es" ? "Entrevista" : "Interview",
      href: "/legal/discover/articles/interview-jonathan-garrido"
    },
    {
        id: 1,
        // ARTÍCULO: MANIFIESTO
        title: language === "es" ? "Vestigios de Sangre no es un Gacha" : "Vestigios of Blood is Not a Gacha",
        excerpt: language === "es" 
            ? "No queremos que ganes porque pagaste, queremos que ganes porque jugaste mejor. Descubre nuestro sistema de economía ética." 
            : "We don't want you to win because you paid; we want you to win because you played better. Discover our ethical economy system.",
        date: "2025-12-31",
        author: "Founder",
        image: "/portada-home.jpg",
        category: language === "es" ? "Manifiesto" : "Manifesto",
        href: "/legal/discover/articles/manifesto"
    },
    {
      id: 2,
      // ARTÍCULO: DISEÑO
      title: language === "es" ? "Cómo se construye un bloque: La historia guía al juego" : "How a Block is Built: Story Guides the Game",
      excerpt: language === "es"
        ? "En Vestigios, no diseñamos mecánicas arbitrarias. Cada expansión es una herida histórica."
        : "In Vestigios, we don't design arbitrary mechanics. Each expansion is a historical wound.",
      date: "2025-12-30",
      author: "Lead Designer",
      image: "/chess-pieces-on-board-strategic-thinking-dark-goth.jpg", 
      category: "Dev Diary",
      href: "/legal/discover/articles/design-philosophy"
    },
    {
      id: 3,
      // ARTÍCULO: ARTE
      title: language === "es" ? "El arte como narrativa: Cada carta es una escena" : "Art as Narrative: Every Card is a Scene",
      excerpt: language === "es"
        ? "En muchos juegos, el arte es decoración. En Vestigios, es un segundo robado a una historia."
        : "In many games, art is decoration. In Vestigios, it is a second stolen from a story.",
      date: "2025-12-28",
      author: "Art Director",
      image: "/03.jpg", // Imagen actualizada
      category: "Art & Lore",
      href: "/legal/discover/articles/art-narrative" 
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-16">
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

        {/* DESTACADO (LORE MELIZA CASTILLO) - TAMAÑO AJUSTADO */}
        {/* Se redujo la altura de h-[500px]/600px a h-[400px]/500px */}
        <div className="relative h-[400px] md:h-[500px] w-full rounded-sm overflow-hidden group mb-20 border border-red-900/30 shadow-[0_0_50px_rgba(127,29,29,0.2)]">
            <Image
                src={featuredArticle.image}
                alt="Featured Article"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            {/* Etiqueta Especial "NUEVO" */}
            <div className="absolute top-8 left-8">
                 <span className="animate-pulse px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-lg shadow-red-900/50">
                    {language === "es" ? "Nuevo Lanzamiento" : "New Release"}
                 </span>
            </div>

            <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full md:max-w-4xl">
                <div className="flex items-center gap-4 mb-4">
                    <span className="inline-block px-3 py-1 bg-red-900/80 text-red-100 text-xs font-bold uppercase tracking-wider border-l-2 border-red-500">
                        {featuredArticle.category}
                    </span>
                    <span className="text-gray-400 text-xs font-mono flex items-center gap-2">
                        {featuredArticle.date} <span className="text-red-500">•</span> {featuredArticle.author}
                    </span>
                </div>
                
                <h2 className="text-2xl md:text-4xl font-bold font-serif mb-4 leading-tight group-hover:text-red-100 transition-colors text-balance">
                    {featuredArticle.title}
                </h2>
                
                <p className="text-base text-gray-200 mb-8 font-light max-w-2xl text-pretty leading-relaxed border-l-4 border-red-900/50 pl-4 hidden md:block">
                    {featuredArticle.excerpt}
                </p>

                <Link 
                  href={featuredArticle.href}
                  className="inline-flex items-center gap-3 text-white font-bold tracking-widest uppercase text-xs md:text-sm border border-red-500/50 bg-red-900/20 px-6 py-3 hover:bg-red-900 hover:border-red-500 transition-all shadow-lg"
                >
                    {language === "es" ? "Leer Noticia" : "Read News"} <Feather className="w-4 h-4" />
                </Link>
            </div>
        </div>

        {/* GRID SECUNDARIA (ARTÍCULOS ANTERIORES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="group flex flex-col bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:border-white/30 transition-all duration-300 h-full"
            >
              {/* TAMAÑO AJUSTADO: Se redujo de h-56 a h-48 */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/80 text-xs font-mono text-gray-300 border border-white/10 uppercase tracking-wider">
                    {article.category}
                </div>
                <div className="w-full h-full bg-zinc-900">
                    <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                </div>
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
                <h3 className="text-lg font-bold font-serif mb-4 leading-snug group-hover:text-red-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6 flex-1 font-light line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex justify-end">
                    <Link 
                      href={article.href}
                      className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors flex items-center gap-2 border-b border-transparent group-hover:border-red-500 pb-1"
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
