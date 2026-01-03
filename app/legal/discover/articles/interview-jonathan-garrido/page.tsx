"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowLeft, Mic, Quote, Gamepad2, Globe, Sparkles } from "lucide-react"

export default function InterviewGarridoPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-gray-300 selection:bg-red-900 selection:text-white pb-24">
      
      {/* HERO HEADER */}
      <div className="relative h-[60vh] w-full flex items-end">
        {/* Fondo con degradado místico/azulado */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-950/20 to-black/80" />
        
        <div className="relative w-full p-8 md:p-16 max-w-5xl mx-auto z-10">
            <Link href="/legal/discover/articles" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors mb-6 text-sm font-bold tracking-widest uppercase">
                <ArrowLeft className="w-4 h-4" /> 
                {language === "es" ? "Volver a Artículos" : "Back to Articles"}
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-900/50 text-blue-200 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-500/30">
                    {language === "es" ? "Entrevista Exclusiva" : "Exclusive Interview"}
                </span>
                <span className="text-gray-500 text-xs font-mono">02 / 01 / 2026</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold font-serif text-white leading-tight mb-6">
                Jonathan Garrido
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light border-l-4 border-blue-500 pl-6 max-w-2xl">
                {language === "es" 
                 ? "Director de Juego (TCG & MMO). Sobre cómo convertir cartas en un mundo vivo." 
                 : "Game Director (TCG & MMO). On turning cards into a living world."}
            </p>
        </div>
      </div>

      {/* CONTENIDO */}
      <article className="max-w-3xl mx-auto px-6 py-12 text-lg leading-relaxed space-y-16">
        
        {/* INTRODUCCIÓN */}
        <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
            <p className="italic text-gray-400 text-center text-xl font-serif">
                {language === "es" 
                 ? "“Vestigios no es un juego que se juega… es un mundo al que se entra.”"
                 : "“Vestigios is not a game you play… it is a world you enter.”"}
            </p>
        </section>

        {/* BLOQUE 1: EL ORIGEN */}
        <section className="space-y-8">
            <div>
                <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> 
                    {language === "es" ? "La Visión" : "The Vision"}
                </h3>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "¿Qué fue lo que te interesó de Vestigios para decidir unirte al proyecto?" : "What interested you about Vestigios to join the project?"}
                </h2>
                <p className="text-gray-300">
                    {language === "es"
                     ? "Lo que me atrapó de Vestigios fue que no era solo un juego, sino un mundo completo. No es común encontrar un proyecto que nazca desde la narrativa, el sistema de juego y la visión a largo plazo al mismo tiempo. Cuando vi que el TCG ya estaba pensado como la base de algo mucho más grande, supe que ahí había algo especial que valía la pena construir."
                     : "What hooked me about Vestigios was that it wasn't just a game, but a complete world. It's rare to find a project born from narrative, gameplay systems, and long-term vision simultaneously. When I saw the TCG was already designed as the foundation for something much bigger, I knew there was something special worth building."}
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "¿Qué esperas que pase cuando los jugadores empiecen a jugar el TCG?" : "What do you expect when players start playing the TCG?"}
                </h2>
                <p className="text-gray-300">
                    {language === "es"
                     ? "Espero que sientan que no están jugando un TCG más, sino que están entrando a un universo vivo. Quiero que cada carta se sienta como una pieza de historia, que los jugadores empiecen a crear teorías, a identificarse con razas, líderes y estrategias, y que empiecen a formar una comunidad alrededor de ese mundo."
                     : "I hope they feel they aren't just playing another TCG, but entering a living universe. I want every card to feel like a piece of history, for players to start creating theories, identifying with races, leaders, and strategies, and forming a community around that world."}
                </p>
            </div>
        </section>

        {/* BLOQUE 2: EL FUTURO MMO (Destacado) */}
        <section className="relative border-y border-white/10 py-12 my-12">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-900/5 -z-10" />
            <Globe className="w-12 h-12 text-blue-500 mb-6 mx-auto" />
            
            <h3 className="text-3xl md:text-4xl text-center font-serif font-bold text-white mb-12">
                {language === "es" ? "Del Tablero al Mundo Abierto" : "From Tabletop to Open World"}
            </h3>

            <div className="space-y-10">
                <div>
                    <h4 className="text-xl font-bold text-blue-300 mb-3">
                        {language === "es" ? "¿Qué es lo que más te emociona de llevar Vestigios a un MMORPG?" : "What excites you most about bringing Vestigios to an MMORPG?"}
                    </h4>
                    <p className="text-gray-300">
                        {language === "es"
                         ? "La posibilidad de que los jugadores puedan caminar dentro del mundo que hoy conocen por cartas. Ver una ciudad, un templo o una criatura que antes solo existía en una ilustración y poder recorrerla, explorarla y combatir ahí… eso es algo que muy pocos proyectos se atreven a hacer desde cero."
                         : "The possibility for players to walk inside the world they know today through cards. Seeing a city, a temple, or a creature that only existed in an illustration and being able to traverse it, explore it, and fight there… that is something very few projects dare to do from scratch."}
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-bold text-blue-300 mb-3">
                        {language === "es" ? "¿Cómo imaginas que se sentirá caminar dentro de este mundo?" : "How do you imagine walking inside this world will feel?"}
                    </h4>
                    <p className="text-gray-300 italic border-l-2 border-blue-500/50 pl-4">
                        {language === "es"
                         ? "Oscuro, peligroso, hermoso y misterioso. No es un mundo seguro, es un mundo donde cada rincón cuenta una historia, donde siempre sientes que algo te observa. Queremos que el jugador tenga esa sensación constante de estar dentro de un universo que no fue hecho para él, sino que existe por sí mismo."
                         : "Dark, dangerous, beautiful, and mysterious. It is not a safe world; it is a world where every corner tells a story, where you always feel something watching you. We want the player to have that constant feeling of being inside a universe that wasn't made for them, but exists for itself."}
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-bold text-blue-300 mb-3">
                        {language === "es" ? "¿Qué tipo de MMO quieres construir?" : "What kind of MMO do you want to build?"}
                    </h4>
                    <p className="text-gray-300">
                         {language === "es"
                          ? "Un MMO donde las decisiones importen. Donde las razas, los vestigios y la corrupción no sean solo estética, sino parte real del gameplay. Un mundo persistente que evolucione con los jugadores, con guerras, facciones y consecuencias reales."
                          : "An MMO where decisions matter. Where races, vestiges, and corruption aren't just aesthetics, but a real part of gameplay. A persistent world that evolves with the players, with wars, factions, and real consequences."}
                    </p>
                </div>
            </div>
        </section>

        {/* BLOQUE 3: LA COMUNIDAD */}
        <section className="space-y-8">
            <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                <Gamepad2 className="w-4 h-4" /> 
                {language === "es" ? "El Jugador" : "The Player"}
            </h3>

            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "¿Qué tipo de jugador conectará mejor con Vestigios?" : "What type of player will connect best with Vestigios?"}
                </h2>
                <p className="text-gray-300">
                    {language === "es"
                     ? "Jugadores que buscan algo más que números. Personas que aman el lore, la estrategia, la atmósfera oscura y los mundos profundos. Vestigios es para quienes disfrutan perderse en universos complejos y no solo en partidas rápidas."
                     : "Players looking for more than just numbers. People who love lore, strategy, dark atmosphere, and deep worlds. Vestigios is for those who enjoy getting lost in complex universes, not just quick matches."}
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "¿Qué tan grande imaginas el mundo a largo plazo?" : "How big do you imagine the world in the long term?"}
                </h2>
                <p className="text-gray-300">
                    {language === "es"
                     ? "Muy grande. No solo en tamaño físico, sino en profundidad. Vestigios está pensado para expandirse durante años, con nuevos continentes, razas, historias, cartas y mecánicas que sigan creciendo junto a la comunidad."
                     : "Very big. Not just in physical size, but in depth. Vestigios is designed to expand for years, with new continents, races, stories, cards, and mechanics that keep growing alongside the community."}
                </p>
            </div>
        </section>

        {/* CIERRE */}
        <section className="py-12 mt-12 border-t border-white/10 text-center">
            <Quote className="w-8 h-8 text-blue-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white font-serif mb-4">
                {language === "es" ? "¿Qué es lo más ambicioso de todo este proyecto para ti?" : "What is the most ambitious part of this project for you?"}
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto italic">
                {language === "es"
                 ? "“Construir un universo que pueda vivir en distintos formatos: cartas, videojuegos, historias, comunidades. No es solo crear un juego, es crear un mundo que la gente recuerde y quiera habitar.”"
                 : "“Building a universe that can live in different formats: cards, video games, stories, communities. It's not just creating a game, it's creating a world that people remember and want to inhabit.”"}
            </p>
        </section>

      </article>
    </div>
  )
}
