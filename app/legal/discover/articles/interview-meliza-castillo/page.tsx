"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User, Quote, Share2 } from "lucide-react"

export default function MelizaInterviewPage() {
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
      <article className="max-w-4xl mx-auto px-6 mt-12 md:mt-20">
        
        {/* Encabezado */}
        <header className="mb-12 text-center">
            <div className="inline-block px-3 py-1 border border-red-900/50 rounded-full bg-red-900/10 text-red-500 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                {language === "es" ? "Entrevista Exclusiva" : "Exclusive Interview"}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {language === "es" 
                 ? "La Arquitecta de la Fractura: Una conversación con Meliza Castillo"
                 : "The Architect of the Fracture: A conversation with Meliza Castillo"}
            </h1>
            
            <div className="flex justify-center items-center gap-6 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-red-700" /> 2026-01-10</span>
                <span className="flex items-center gap-2"><User className="w-4 h-4 text-red-700" /> Editorial Team</span>
            </div>
        </header>

        {/* Imagen Principal */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-sm overflow-hidden mb-16 border border-white/10 shadow-2xl">
            <Image 
                src="/ancient-book-open-with-mystical-light-dark-library.jpg" // Usamos la imagen de "libros/lore" como referencia a su trabajo
                alt="Meliza Castillo Lore"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        </div>

        {/* INTRODUCCIÓN */}
        <div className="prose prose-invert prose-lg mx-auto mb-16 border-l-4 border-red-900 pl-6">
            <p className="text-xl text-white italic font-serif opacity-90">
                {language === "es"
                 ? "Hablamos con la Directora de Lore y Narrativa de Vestigios para entender la oscuridad que sostiene este universo. Desde la influencia de Yoko Taro hasta la crítica a la fe ciega, Meliza nos abre las puertas del Génesis."
                 : "We spoke with the Director of Lore and Narrative of Vestigios to understand the darkness that sustains this universe. From the influence of Yoko Taro to the critique of blind faith, Meliza opens the doors of Genesis to us."}
            </p>
        </div>

        {/* PREGUNTAS Y RESPUESTAS */}
        <div className="space-y-16 max-w-3xl mx-auto">
            
            {/* P1 */}
            <div>
                <h3 className="text-red-500 font-bold font-mono text-sm uppercase tracking-widest mb-3">
                    {language === "es" ? "¿Qué son realmente los Vestigios?" : "What exactly are the Vestigios?"}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                    {language === "es"
                     ? "De momento no puedo decir mucho, pero como escribí en «La Gran Fractura»: los vestigios vienen de algo más grande y tienen la esencia, el origen de la vida misma. Por esa razón a mi mente viene la escena del inicio de la película de Alien: Prometheus y creo que es la explicación perfecta."
                     : "For now, I can't say much, but as I wrote in 'The Great Fracture': the vestiges come from something larger and hold the essence, the origin of life itself. For that reason, the opening scene of Alien: Prometheus comes to mind, and I think it's the perfect explanation."}
                </p>
            </div>

            {/* P2 */}
            <div>
                <h3 className="text-red-500 font-bold font-mono text-sm uppercase tracking-widest mb-3">
                     {language === "es" 
                      ? "¿Es posible que los fragmentos estén intentando reunirse? ¿Podría el fin del mundo ser el regreso al «Uno»?" 
                      : "Are the fragments trying to reunite? Could the end of the world be a return to the 'One'?"}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                    {language === "es"
                     ? "El cristal no se rompió por accidente, sino por la necesidad de enriquecer el universo en el que estaba; la necesidad de dejar de ser objeto para convertirse en un suceso. Su estado de unidad era una prisión que condenaba al universo a la esterilidad. Jamás querrá volver a lo que fue."
                     : "The crystal didn't break by accident, but out of the need to enrich the universe it was in; the need to stop being an object to become an event. Its state of unity was a prison that condemned the universe to sterility. It will never want to return to what it was."}
                </p>
                <blockquote className="border-l-2 border-red-500 pl-4 text-white font-serif italic">
                    {language === "es" ? "«La explosión fue un sacrificio; su sangre, un regalo»." : "«The explosion was a sacrifice; its blood, a gift»."}
                </blockquote>
            </div>

            {/* P3 */}
            <div>
                <h3 className="text-red-500 font-bold font-mono text-sm uppercase tracking-widest mb-3">
                    {language === "es" ? "¿Cómo nacieron las razas?" : "How were the races born?"}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                    {language === "es"
                     ? "Dejando el lore un poco de lado, el folclore de monstruos es bastante popular y gusta a muchos. Implementar estos seres en el juego junto a una historia propia, salir de esa estética de criaturas lindas y redondas (siguiendo la estela de lo que hizo el TCG chileno Mitos y Leyendas) es algo que inspira bastante. Si hablamos de las razas dentro del lore como tal, es un spoiler que aún no quiero mencionar; pero creo que muchos pueden tener una buena intuición sobre esto."
                     : "Leaving the lore aside a bit, monster folklore is quite popular. Implementing these beings into the game with their own story, moving away from that aesthetic of cute and round creatures (following the path of the Chilean TCG Mitos y Leyendas) is very inspiring. Speaking of races within the lore itself, it's a spoiler I don't want to mention yet; but I think many might have a good intuition about it."}
                </p>
            </div>

            {/* P4 */}
            <div>
                <h3 className="text-red-500 font-bold font-mono text-sm uppercase tracking-widest mb-3">
                    {language === "es" ? "¿Qué diferencia a los zombis de este universo?" : "What makes the zombies in this universe different?"}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                    {language === "es"
                     ? "Como describo en La Jerarquía de la Noche, realmente aquí los zombis son un tipo de religión; son una mera crítica a la misma. Aquí no son una plaga accidental, víctimas de un virus, sino un producto de la desesperación y el engaño, convertidos en una herramienta o recurso en donde la fe es el combustible."
                     : "As I describe in The Hierarchy of the Night, zombies here are really a type of religion; they are a mere critique of it. Here they are not an accidental plague, victims of a virus, but a product of desperation and deceit, turned into a tool or resource where faith is the fuel."}
                </p>
                <p className="text-gray-300 leading-relaxed">
                    {language === "es"
                     ? "Creo que, de todas las razas, el enfoque que le estamos dando a esta es un «buen giro de tuerca», porque todos ya sabemos de manual qué son y cómo se crean los zombis convencionales; traer más de lo mismo sería un poco agotador e insípido."
                     : "I think that, of all the races, the approach we are taking with this one is a 'good twist', because we all know by the book what conventional zombies are and how they are created; bringing more of the same would be a bit exhausting and insipid."}
                </p>
            </div>

            {/* P5 */}
            <div>
                <h3 className="text-red-500 font-bold font-mono text-sm uppercase tracking-widest mb-3">
                    {language === "es" ? "¿Por qué este mundo es tan cruel y trágico?" : "Why is this world so cruel and tragic?"}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                    {language === "es"
                     ? "Si bien es una era en donde el progreso avanzaba con rapidez, también es cierto que todo tiene un precio; y creo que todos sabemos que, muchas veces, el precio no es algo monetario. Aquí no hay lugar seguro: el sufrimiento no acaba con la muerte física, se traiciona la esperanza, el avance de la civilización requiere sacrificios y la magia no lo soluciona todo."
                     : "While it is an era where progress was advancing rapidly, it is also true that everything has a price; and I think we all know that, often, the price is not monetary. There is no safe place here: suffering does not end with physical death, hope is betrayed, the advancement of civilization requires sacrifices, and magic does not solve everything."}
                </p>
                <div className="bg-white/5 p-6 rounded-sm border border-white/10 relative">
                    <Quote className="absolute top-4 right-4 text-white/10 w-8 h-8" />
                    <p className="text-white font-serif italic text-lg">
                        {language === "es" 
                         ? "«Todo cuanto vive está diseñado para morir. Estamos atrapados a perpetuidad en una espiral infinita de vida y muerte. ¿Será una maldición o algún tipo de castigo?»"
                         : "«Everything that lives is designed to end. We are perpetually trapped in a never-ending spiral of life and death. Is this a curse? Or some kind of punishment?»"}
                    </p>
                    <span className="text-xs text-red-500 font-bold uppercase mt-4 block">— NieR: Automata</span>
                </div>
            </div>

            {/* P6 */}
            <div>
                <h3 className="text-red-500 font-bold font-mono text-sm uppercase tracking-widest mb-3">
                    {language === "es" ? "¿Qué hace que una historia sea oscura pero humana?" : "What makes a story dark yet human?"}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                    {language === "es"
                     ? "Cuando las cosas no son «porque sí», pese a toda la oscuridad y lo terrible que puede ser algo o alguien, la historia alcanza una profundidad trágica real. El lado humano está presente cuando podemos conectar con aquello que está sumergido en las tinieblas. Un claro ejemplo es cuando entendemos por qué el villano es un villano y todo lo que lo llevó a ese punto de quiebre."
                     : "When things aren't just 'because', despite all the darkness and how terrible something or someone can be, the story reaches real tragic depth. The human side is present when we can connect with what is submerged in the shadows. A clear example is when we understand why the villain is a villain and everything that led them to that breaking point."}
                </p>
            </div>

            {/* P7 */}
            <div>
                <h3 className="text-red-500 font-bold font-mono text-sm uppercase tracking-widest mb-3">
                    {language === "es" ? "¿Cuáles han sido tus fuentes de inspiración?" : "What have been your sources of inspiration?"}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                    {language === "es"
                     ? "Las sagas de NieR y Drakengard han sido un gran referente para mí. Me encanta el trabajo de Yoko Taro y la forma en que aborda la dualidad de un mismo conflicto; me parece espectacular porque te lleva a un punto en el que todo te cae como un balde de agua fría, haciéndote ver que, en realidad, no hay un bando correcto."
                     : "The NieR and Drakengard sagas have been a great reference for me. I love Yoko Taro's work and the way he approaches the duality of the same conflict; it seems spectacular to me because it brings you to a point where everything hits you like a bucket of cold water, making you see that, in reality, there is no right side."}
                </p>
                <p className="text-gray-300 leading-relaxed">
                    {language === "es"
                     ? "Por otro lado, Alien y The Witcher complementaron ideas que ya venía desarrollando en mi cabeza, y fueron buenos referentes para no perder el rumbo. Asimismo, la serie Supernatural también me ha inspirado mucho por su variedad de monstruos, lo que me ha ayudado a darle un giro a ciertos conceptos."
                     : "On the other hand, Alien and The Witcher complemented ideas I was already developing in my head, and were good references to keep on track. Likewise, the series Supernatural has also inspired me a lot due to its variety of monsters, which has helped me put a spin on certain concepts."}
                </p>
            </div>

            {/* P8 */}
            <div>
                <h3 className="text-red-500 font-bold font-mono text-sm uppercase tracking-widest mb-3">
                    {language === "es" ? "¿Qué nos espera en el futuro del lore?" : "What awaits us in the future of the lore?"}
                </h3>
                <p className="text-white text-lg font-serif italic">
                    {language === "es"
                     ? "Esto es solo una pequeña parte de un todo, donde el horror no es la muerte, sino aquello en lo que te conviertes. Y el mundo comenzará a lanzar gritos desesperados."
                     : "This is just a small part of a whole, where horror is not death, but what you become. And the world will begin to let out desperate screams."}
                </p>
            </div>

        </div>

        {/* Footer del Artículo */}
        <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
            <Link href="/lore/genesis" className="text-white font-bold uppercase tracking-widest text-xs border border-red-900 bg-red-900/20 px-6 py-3 hover:bg-red-900 transition-colors">
                 {language === "es" ? "Leer el Lore: Génesis" : "Read Lore: Genesis"}
            </Link>
            <button className="p-3 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                <Share2 className="w-5 h-5" />
            </button>
        </div>

      </article>
    </div>
  )
}
