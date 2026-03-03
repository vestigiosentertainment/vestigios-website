"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowLeft, Quote, Sparkles, Scroll, Target, Flag } from "lucide-react"

export default function InterviewRukiPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-gray-300 selection:bg-red-900 selection:text-white pb-24">
      
      {/* HERO HEADER */}
      <div className="relative h-[60vh] w-full flex items-end">
        {/* Fondo con degradado oscuro/rojizo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-red-950/20 to-black/80" />
        
        <div className="relative w-full p-8 md:p-16 max-w-5xl mx-auto z-10">
            <Link href="/legal/discover/articles" className="inline-flex items-center gap-2 text-red-400 hover:text-white transition-colors mb-6 text-sm font-bold tracking-widest uppercase">
                <ArrowLeft className="w-4 h-4" /> 
                {language === "es" ? "Volver a Artículos" : "Back to Articles"}
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
                <span className="bg-red-900/50 text-red-200 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-red-500/30">
                    {language === "es" ? "Diseño y Balance" : "Design and Balance"}
                </span>
                <span className="text-gray-500 text-xs font-mono">03 / 03 / 2026</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold font-serif text-white leading-tight mb-6">
                Ruki
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light border-l-4 border-red-600 pl-6 max-w-2xl">
                {language === "es" 
                 ? "Director de Diseño y Balance. Sobre el meta, probar límites y empoderar a la comunidad." 
                 : "Director of Design & Balance. On the meta, testing limits, and empowering the community."}
            </p>
        </div>
      </div>

      {/* CONTENIDO */}
      <article className="max-w-3xl mx-auto px-6 py-12 text-lg leading-relaxed space-y-16">
        
        {/* INTRODUCCIÓN */}
        <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
            <p className="italic text-gray-400 text-center text-xl font-serif">
                {language === "es" 
                 ? "“En Vestigios, la oscuridad corrompe, pero es la comunidad quien tiene el verdadero poder en sus manos.”"
                 : "“In Vestigios, darkness corrupts, but it is the community who holds the true power in their hands.”"}
            </p>
        </section>

        {/* BLOQUE 1: EL DISEÑO */}
        <section className="space-y-8">
            <div>
                <h3 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> 
                    {language === "es" ? "El Diseño" : "The Design"}
                </h3>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "¿Qué diferencia a Vestigios de otros TCG?" : "What differentiates Vestigios from other TCGs?"}
                </h2>
                <p className="text-gray-300">
                    {language === "es"
                      ? "Es un juego verdaderamente equilibrado y sin favoritismos. Está hecho por y para fans de los TCG. Nuestro objetivo principal es innovar y mantener un feedback constante y directo con nuestra comunidad."
                      : "It is a truly balanced game with no favoritism. It is made by and for TCG fans. Our main goal is to innovate and maintain constant and direct feedback with our community."}
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "¿Cómo se equilibra un juego con tanto poder y oscuridad?" : "How do you balance a game with so much power and darkness?"}
                </h2>
                <p className="text-gray-300">
                    {language === "es"
                      ? "A través de los mismos jugadores. Todo el ecosistema del juego existe por y para ellos; queremos darle a nuestra comunidad el máximo protagonismo en cómo se moldea y equilibra el juego."
                      : "Through the players themselves. The entire ecosystem of the game exists by and for them; we want to give our community the maximum leading role in how the game is shaped and balanced."}
                </p>
            </div>
        </section>

        {/* BLOQUE 2: EL META Y EL LORE */}
        <section className="space-y-8">
             <h3 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                <Scroll className="w-4 h-4" /> 
                {language === "es" ? "Meta & Lore" : "Meta & Lore"}
            </h3>

            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "¿Qué rol cumple cada raza en el meta?" : "What role does each race play in the meta?"}
                </h2>
                <p className="text-gray-300">
                    {language === "es"
                      ? "Ese rol irá variando y evolucionando de la mano con el lore del juego. No quiero hacer spoilers ahora mismo, así que solo les diré que se mantengan muy atentos a lo que se viene."
                      : "That role will vary and evolve hand in hand with the game's lore. I don't want to give any spoilers right now, so I'll just tell you to stay very tuned for what's coming."}
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "¿Por qué los Vestigios son recursos y también corrupción?" : "Why are Vestiges resources and also corruption?"}
                </h2>
                <p className="text-gray-300">
                    {language === "es"
                      ? "Es una mecánica que refleja la esencia de nuestro mundo. Todo gira en torno al universo de Vestigios, y es el propio lore el que irá dando más respuestas sobre esta dualidad con cada nueva expansión."
                      : "It is a mechanic that reflects the essence of our world. Everything revolves around the Vestigios universe, and it is the lore itself that will provide more answers about this duality with each new expansion."}
                </p>
            </div>
        </section>

        {/* BLOQUE 3: EL TESTEO (Destacado) */}
        <section className="relative border-y border-white/10 py-12 my-12">
            <div className="absolute top-0 left-0 w-full h-full bg-red-950/10 -z-10" />
            <Target className="w-12 h-12 text-red-600 mb-6 mx-auto" />
            
            <h3 className="text-3xl md:text-4xl text-center font-serif font-bold text-white mb-12">
                {language === "es" ? "Llevando el Juego al Límite" : "Pushing the Game to the Limit"}
            </h3>

            <div className="space-y-10">
                <div>
                    <h4 className="text-xl font-bold text-red-400 mb-3">
                        {language === "es" ? "¿Qué significa testear un TCG?" : "What does it mean to test a TCG?"}
                    </h4>
                    <p className="text-gray-300">
                         {language === "es"
                          ? "Significa llevar el diseño al límite. Es buscar todas las interacciones posibles, intentar 'romper' el juego y asegurar que cada carta ofrezca una experiencia justa, competitiva y, sobre todo, divertida antes de que llegue a las manos de la comunidad."
                          : "It means pushing the design to the limit. It's looking for all possible interactions, trying to 'break' the game and ensuring that each card offers a fair, competitive, and above all, fun experience before it reaches the hands of the community."}
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-bold text-red-400 mb-3">
                        {language === "es" ? "¿Qué buscas en un tester?" : "What do you look for in a tester?"}
                    </h4>
                    <p className="text-gray-300 italic border-l-2 border-red-600/50 pl-4">
                        {language === "es"
                          ? "Busco proactividad, un interés genuino por el juego, lealtad al proyecto y, por sobre todo, un compromiso inquebrantable."
                          : "I look for proactivity, a genuine interest in the game, loyalty to the project, and above all, unwavering commitment."}
                    </p>
                </div>
            </div>
        </section>

        {/* BLOQUE 4: EL COMPETITIVO */}
        <section className="space-y-8">
            <h3 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                <Flag className="w-4 h-4" /> 
                {language === "es" ? "El Competitivo" : "The Competitive Scene"}
            </h3>

            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "¿Cómo se decide si una carta es demasiado fuerte?" : "How do you decide if a card is too strong?"}
                </h2>
                <p className="text-gray-300">
                    {language === "es"
                      ? "Lo determinamos cuando vemos que una carta se convierte en una win condition absoluta por sí sola, o cuando sentimos que el meta empieza a girar exclusivamente en torno a ella y a sus sinergias, limitando la creatividad de los mazos."
                      : "We determine it when we see that a card becomes an absolute win condition on its own, or when we feel that the meta begins to revolve exclusively around it and its synergies, limiting deck creativity."}
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "¿Cómo imaginas el competitivo de Vestigios?" : "How do you imagine the competitive scene of Vestigios?"}
                </h2>
                <p className="text-gray-300">
                    {language === "es"
                      ? "Lo imagino dinámico e innovador. Queremos un circuito que esté en constante evolución, ofreciendo siempre nuevas dinámicas y sorpresas para mantener a los jugadores a prueba."
                      : "I imagine it dynamic and innovative. We want a circuit that is in constant evolution, always offering new dynamics and surprises to keep players tested."}
                </p>
            </div>
        </section>

        {/* CIERRE */}
        <section className="py-12 mt-12 border-t border-white/10 text-center">
            <Quote className="w-8 h-8 text-red-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white font-serif mb-4">
                {language === "es" ? "Una última reflexión" : "One last reflection"}
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto italic">
                {language === "es" 
                 ? "“No creamos cartas para definir un meta; creamos un mundo para que los jugadores lo conquisten.”"
                 : "“We don't create cards to define a meta; we create a world for players to conquer.”"}
            </p>
        </section>

      </article>
    </div>
  )
}
