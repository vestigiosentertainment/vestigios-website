"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowLeft, Quote, Sparkles, Scroll, Hammer, Flag } from "lucide-react"

export default function InterviewTorresPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-gray-300 selection:bg-red-900 selection:text-white pb-24">
      
      {/* HERO HEADER */}
      <div className="relative h-[60vh] w-full flex items-end">
        {/* Fondo con degradado más oscuro/rojizo para diferenciar al fundador */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-red-950/20 to-black/80" />
        
        <div className="relative w-full p-8 md:p-16 max-w-5xl mx-auto z-10">
            <Link href="/legal/discover/articles" className="inline-flex items-center gap-2 text-red-400 hover:text-white transition-colors mb-6 text-sm font-bold tracking-widest uppercase">
                <ArrowLeft className="w-4 h-4" /> 
                {language === "es" ? "Volver a Artículos" : "Back to Articles"}
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
                <span className="bg-red-900/50 text-red-200 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-red-500/30">
                    {language === "es" ? "El Manifiesto" : "The Manifesto"}
                </span>
                <span className="text-gray-500 text-xs font-mono">27 / 01 / 2026</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold font-serif text-white leading-tight mb-6">
                Jonathan Torres
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light border-l-4 border-red-600 pl-6 max-w-2xl">
                {language === "es" 
                 ? "Fundador & Director General. Sobre justicia, oscuridad y crear un legado." 
                 : "Founder & CEO. On justice, darkness, and building a legacy."}
            </p>
        </div>
      </div>

      {/* CONTENIDO */}
      <article className="max-w-3xl mx-auto px-6 py-12 text-lg leading-relaxed space-y-16">
        
        {/* INTRODUCCIÓN */}
        <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
            <p className="italic text-gray-400 text-center text-xl font-serif">
                {language === "es" 
                 ? "“Vestigios nace de una necesidad personal: crear un juego donde pensar valga más que pagar.”"
                 : "“Vestigios is born from a personal need: to create a game where thinking is worth more than paying.”"}
            </p>
        </section>

        {/* BLOQUE 1: EL ORIGEN */}
        <section className="space-y-8">
            <div>
                <h3 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> 
                    {language === "es" ? "El Origen" : "The Origin"}
                </h3>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "¿Por qué nace Vestigios?" : "Why was Vestigios born?"}
                </h2>
                <p className="text-gray-300">
                    {language === "es"
                      ? "Nace de una decepción profunda. Dejé de sentirme respetado como jugador. Invertía tiempo y esfuerzo, pero recibía sistemas diseñados para empujarme, no para desafiarme. Vestigios es mi respuesta a esa industria. Nace de la necesidad visceral de crear un juego donde la obra tenga alma, no solo métricas de retención. No fundé esto buscando un negocio; lo fundé buscando justicia para el jugador."
                      : "It is born from deep disappointment. I stopped feeling respected as a player. I invested time and effort, but received systems designed to push me, not challenge me. Vestigios is my answer to that industry. It is born from a visceral need to create a game with a soul, not just retention metrics. I didn't found this looking for a business; I founded it looking for justice for the player."}
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "¿Qué te faltaba en los TCG actuales?" : "What was missing in current TCGs?"}
                </h2>
                <p className="text-gray-300">
                    {language === "es"
                      ? "Respeto y dignidad. Veo un mercado que ha perdido el norte, convertido en maquinarias de marketing y monetización. Han reducido al jugador a una simple cifra en un Excel. A mí me faltaba un juego que le dijera al usuario: “Tú eres importante”. En Vestigios, tu valor no lo define tu dinero, sino tu intelecto. Queremos que el jugador recupere su protagonismo."
                      : "Respect and dignity. I see a market that has lost its way, turned into marketing and monetization machines. They have reduced the player to a simple figure in a spreadsheet. I was missing a game that told the user: “You are important”. In Vestigios, your value is not defined by your money, but by your intellect. We want the player to reclaim their leading role."}
                </p>
            </div>
        </section>

        {/* BLOQUE 2: FILOSOFÍA Y OSCURIDAD */}
        <section className="space-y-8">
             <h3 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                <Scroll className="w-4 h-4" /> 
                {language === "es" ? "La Filosofía" : "The Philosophy"}
            </h3>

            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "¿Qué es realmente Vestigios Entertainment?" : "What is Vestigios Entertainment really?"}
                </h2>
                <p className="text-gray-300">
                    {language === "es"
                      ? "Es un taller de mundos, no una fábrica de productos. Somos un estudio independiente que existe bajo una premisa: la narrativa no es un adorno, el arte no es solo decoración y las reglas deben tener una intención filosófica. Hoy comenzamos con un TCG, pero Vestigios Entertainment es la semilla de un universo. Estamos aquí para contar historias que importen."
                      : "It is a workshop of worlds, not a factory of products. We are an indie studio that exists under a premise: narrative is not an ornament, art is not just decoration, and rules must have a philosophical intention. Today we start with a TCG, but Vestigios Entertainment is the seed of a universe. We are here to tell stories that matter."}
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "¿Por qué eligieron una ambientación tan oscura?" : "Why choose such a dark setting?"}
                </h2>
                <p className="text-gray-300">
                    {language === "es"
                      ? "Porque respeto demasiado al jugador como para mentirle. La oscuridad no es estética; es conceptual. Queremos hablar de decisiones difíciles, sacrificios y consecuencias. La fantasía luminosa es cómoda, pero la oscuridad es honesta. La luz solo tiene valor real cuando eres consciente de lo que cuesta encenderla."
                      : "Because I respect the player too much to lie to them. Darkness is not aesthetic; it is conceptual. We want to talk about difficult decisions, sacrifices, and consequences. Bright fantasy is comfortable, but darkness is honest. Light only has real value when you are aware of what it costs to ignite it."}
                </p>
            </div>
        </section>

        {/* BLOQUE 3: EL ESTUDIO (Destacado) */}
        <section className="relative border-y border-white/10 py-12 my-12">
            <div className="absolute top-0 left-0 w-full h-full bg-red-950/10 -z-10" />
            <Hammer className="w-12 h-12 text-red-600 mb-6 mx-auto" />
            
            <h3 className="text-3xl md:text-4xl text-center font-serif font-bold text-white mb-12">
                {language === "es" ? "Construyendo Realidad" : "Building Reality"}
            </h3>

            <div className="space-y-10">
                <div>
                    <h4 className="text-xl font-bold text-red-400 mb-3">
                        {language === "es" ? "¿Cómo se construye un estudio indie 'de verdad'?" : "How do you build a 'real' indie studio?"}
                    </h4>
                    <p className="text-gray-300">
                         {language === "es"
                          ? "Con trabajo invisible. Se construye en silencio, sin aplausos y sin garantías. Un estudio real se forja en esas horas de madrugada donde diseñas, rompes y corriges cuando nadie te está mirando. La gente ve el lanzamiento, pero el estudio se hizo en la disciplina de seguir avanzando cuando no había ninguna razón lógica para hacerlo."
                          : "With invisible work. It is built in silence, without applause and without guarantees. A real studio is forged in those early morning hours where you design, break, and correct when no one is watching. People see the launch, but the studio was made in the discipline of moving forward when there was no logical reason to do so."}
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-bold text-red-400 mb-3">
                        {language === "es" ? "¿Qué significa para ti liderar este proyecto?" : "What does leading this project mean to you?"}
                    </h4>
                    <p className="text-gray-300 italic border-l-2 border-red-600/50 pl-4">
                        {language === "es"
                          ? "Significa ser el guardián de la visión. Liderar no es dar órdenes; es sostener la estructura para que los demás puedan crear. Es cargar con la responsabilidad de decir 'no' a buenas ideas que no encajan con el alma del juego. Es proteger la integridad de Vestigios."
                          : "It means being the guardian of the vision. Leading is not giving orders; it is holding the structure so others can create. It is bearing the responsibility of saying 'no' to good ideas that do not fit the soul of the game. It is protecting the integrity of Vestigios."}
                    </p>
                </div>
            </div>
        </section>

        {/* BLOQUE 4: EL FUTURO */}
        <section className="space-y-8">
            <h3 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                <Flag className="w-4 h-4" /> 
                {language === "es" ? "El Horizonte" : "The Horizon"}
            </h3>

            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "¿Qué sueñas para Vestigios en 5 años?" : "What do you dream for Vestigios in 5 years?"}
                </h2>
                <p className="text-gray-300">
                    {language === "es"
                      ? "Sueño con un ecosistema vivo. No me interesa ser el juego más grande, me interesa ser el que marcó a una generación. Sueño con varios juegos conectados por un mismo lore, con jugadores debatiendo teorías y artistas orgullosos. Sueño con trascendencia, no con viralidad."
                      : "I dream of a living ecosystem. I am not interested in being the biggest game, I am interested in being the one that marked a generation. I dream of several games connected by the same lore, with players debating theories and proud artists. I dream of transcendence, not virality."}
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-white font-serif mb-4">
                    {language === "es" ? "¿Por qué la gente debería creer en este proyecto?" : "Why should people believe in this project?"}
                </h2>
                <p className="text-gray-300">
                    {language === "es"
                      ? "Porque no vendo humo ni milagros. Prometo sistemas claros, trabajo honesto y respeto absoluto por tu inteligencia. Vestigios no se construye sobre el hype artificial, se construye sobre la coherencia. Y la calidad, tarde o temprano, habla por sí sola."
                      : "Because I don't sell smoke or miracles. I promise clear systems, honest work, and absolute respect for your intelligence. Vestigios is not built on artificial hype, it is built on coherence. And quality, sooner or later, speaks for itself."}
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
                 ? "“No estamos haciendo un juego para pasar el rato. Estamos creando un legado para los que se toman el juego en serio.”"
                 : "“We are not making a game to kill time. We are creating a legacy for those who take the game seriously.”"}
            </p>
        </section>

      </article>
    </div>
  )
}
