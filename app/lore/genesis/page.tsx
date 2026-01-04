"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowLeft, Clock, Share2, Skull, Feather } from "lucide-react"

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
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 5 min read</span>
                <span className="w-1 h-1 bg-gray-700 rounded-full" />
                <span>{language === "es" ? "Historia Principal" : "Main Storyline"}</span>
            </div>
        </header>

        {/* Separador */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

        {/* Cuerpo del Texto */}
        {/* Nota: 'prose' maneja los párrafos, pero hemos estilizado los H3 manualmente abajo para diferenciarlos */}
        <div className="prose prose-invert prose-lg mx-auto prose-p:leading-relaxed prose-strong:text-white">
            
            {/* --- SECCIÓN 1: EL ORIGEN --- */}
            <p className="lead text-2xl text-white italic opacity-90 mb-10 border-l-4 border-red-800 pl-6 py-2">
               {language === "es" 
                ? '"Antes de todo lo que conocemos, cuando todo era uno, el anhelo de un corazón por trascender hizo que este explotara y diera forma a los mundos con fragmentos de sí mismo."'
                : '"Before everything we know, when all was one, the yearning of a heart to transcend caused it to explode and shape the worlds with fragments of itself."'}
            </p>

            <p>
                {language === "es" 
                 ? <>Gracias a su <strong className="text-red-400">icor</strong>, derramado sobre la superficie, la vida fue posible: una existencia nutrida por vestigios aún más pequeños y limitados, codiciados por aquellos que conocen el secreto de la vida.</>
                 : <>Thanks to its <strong className="text-red-400">ichor</strong>, spilled upon the surface, life was made possible: an existence nourished by even smaller and limited vestiges, coveted by those who know the secret of life.</>}
            </p>

            {/* Separador interno decorativo */}
            <div className="flex justify-center my-12 opacity-50">
                <Skull className="w-6 h-6 text-red-900" />
            </div>

            {/* --- SECCIÓN 2: LA JERARQUÍA --- */}
            <h2 className="text-3xl text-white font-bold text-center mb-8">{language === "es" ? "La Jerarquía de la Noche" : "The Hierarchy of the Night"}</h2>

            {/* ESTILO DE MINI-TÍTULOS PERSONALIZADO */}
            {/* Usamos font-sans y tracking amplio para diferenciarlos drásticamente del cuerpo del texto serif */}
            
            {/* VAMPIROS */}
            <h3 className="text-red-500 font-sans text-sm font-bold uppercase tracking-[0.2em] border-b border-red-900/30 pb-2 mt-12 mb-4">
                I. {language === "es" ? "Los Eternos (Vampiros)" : "The Eternals (Vampires)"}
            </h3>
            <p>
                {language === "es"
                 ? "Señores de la Sangre o «vampiros», como son vulgarmente llamados. Son aristócratas de piel pálida que han burlado la muerte y gobiernan desde las sombras como si el mundo fuese su tablero de ajedrez. Construyeron sus imperios sobre la sangre de la tierra, acumulando tiempo, poder, riquezas y secretos."
                 : "Lords of Blood, or 'vampires' as they are vulgarly called. They are pale-skinned aristocrats who have cheated death and rule from the shadows as if the world were their chessboard. They built their empires on the blood of the earth, accumulating time, power, wealth, and secrets."}
            </p>

            {/* CAZADORES */}
            <h3 className="text-red-500 font-sans text-sm font-bold uppercase tracking-[0.2em] border-b border-red-900/30 pb-2 mt-12 mb-4">
                II. {language === "es" ? "Los Cazadores" : "The Hunters"}
            </h3>
            <p>
                {language === "es"
                 ? "Maestros del acero y la pólvora. Fueron hombres que miraron demasiado tiempo al abismo hasta que este les devolvió la mirada. Vendieron su alma por la fuerza para matar y se volvieron adictos a la cacería, perdiendo su humanidad con cada presa que cae bajo sus manos. Su sed de sangre rivaliza con la de los monstruos que persiguen."
                 : "Masters of steel and gunpowder. They were men who stared too long into the abyss until the abyss stared back. They sold their souls for the strength to kill and became addicted to the hunt, losing their humanity with every prey that falls beneath their hands. Their bloodlust rivals that of the monsters they pursue."}
            </p>

            {/* BRUJAS */}
            <h3 className="text-red-500 font-sans text-sm font-bold uppercase tracking-[0.2em] border-b border-red-900/30 pb-2 mt-12 mb-4">
                III. {language === "es" ? "Las Brujas" : "The Witches"}
            </h3>
            <p>
                {language === "es"
                 ? "Comerciantes de hechizos, favores oscuros y traiciones. Sus servicios son comprados por el mejor postor; susurran secretos que pueden derribar imperios mortales o condenar almas, dispuestas a vender la cordura de otros por una gota de influencia, poder o mero goce personal."
                 : "Merchants of spells, dark favors, and betrayal. Their services are bought by the highest bidder; they whisper secrets that can topple mortal empires or damn souls, willing to sell the sanity of others for a drop of influence, power, or mere personal pleasure."}
            </p>
            <blockquote className="border-l-red-900 text-gray-400 italic bg-white/5 p-4 my-6 rounded-r-lg">
                {language === "es"
                 ? "Nunca sabrás de qué lado está su lealtad, pero de lo que sí puedes estar seguro es de que sus caprichos siempre tendrán prioridad."
                 : "You will never know where their loyalty lies, but of one thing you can be certain: their whims will always take priority."}
            </blockquote>

            {/* ZOMBIES */}
            <h3 className="text-red-500 font-sans text-sm font-bold uppercase tracking-[0.2em] border-b border-red-900/30 pb-2 mt-12 mb-4">
                IV. {language === "es" ? "Los Zombis (La Bruma)" : "The Zombies (The Mist)"}
            </h3>
            <p>
                {language === "es"
                 ? "Aquellos perdidos y desesperados que buscan consuelo sin saber que incluso la fe es una mentira. Como corderos al matadero, con la esperanza de salvación o de llenar el vacío de sus corazones, se dirigen a la Dama de la Bruma: una diosa autoproclamada que, en el horror más silencioso, convertirá sus cuerpos en cascarones huecos y obedientes."
                 : "Those lost and desperate souls seeking solace, unaware that even faith is a lie. Like lambs to the slaughter, hoping for salvation or to fill the void in their hearts, they flock to the Lady of the Mist: a self-proclaimed goddess who, in the quietest horror, turns their bodies into hollow, obedient shells."}
            </p>
            <p>
                {language === "es"
                 ? "Son convertidos en peregrinos sin mente, fanáticos adoradores de una mentira, mientras sus almas, arrancadas y sin dueño, gritan invisibles en el oscuro éter sin saber en qué se convertirán."
                 : "They are converted into mindless pilgrims, fanatical worshippers of a lie, while their torn, ownerless souls scream unseen in the dark ether, not knowing what they will become."}
            </p>

            {/* LICANTROPOS */}
            <h3 className="text-red-500 font-sans text-sm font-bold uppercase tracking-[0.2em] border-b border-red-900/30 pb-2 mt-12 mb-4">
                V. {language === "es" ? "Los Licántropos" : "The Werewolves"}
            </h3>
            <p>
                {language === "es"
                 ? "Hijos de la luna reducidos a simples esclavos de voluntad rota, cuyo aullido ha sido silenciado. Su naturaleza salvaje ha sido encadenada con plata; son bestias de fuerza bruta, carne de yugo que carga con el precio del progreso y la codicia de sus amos."
                 : "Children of the moon reduced to simple slaves with broken wills, their howl silenced. Their wild nature has been chained with silver; they are beasts of brute force, beasts of burden bearing the price of progress and their masters' greed."}
            </p>

            {/* HUMANOS */}
            <h3 className="text-red-500 font-sans text-sm font-bold uppercase tracking-[0.2em] border-b border-red-900/30 pb-2 mt-12 mb-4">
                VI. {language === "es" ? "Los Humanos" : "The Humans"}
            </h3>
            <p>
                {language === "es"
                 ? "Ignorantes y ciegos ante una guerra que se libra desde las sombras, se envenenan lentamente con reliquias de un poder que no comprenden mientras las agujas del reloj marcan, implacables, su hora final."
                 : "Ignorant and blind to a war waged from the shadows, they slowly poison themselves with relics of a power they do not understand, while the clock hands tick, relentless, toward their final hour."}
            </p>

            {/* FIRMA DE LA DIRECTORA */}
            <div className="mt-24 mb-12 flex flex-col items-end">
                <div className="w-16 h-1 bg-red-900 mb-6"></div>
                <div className="text-right">
                    <p className="font-serif italic text-2xl text-white mb-2 flex items-center justify-end gap-3">
                        Meliza Castillo <Feather className="w-5 h-5 text-red-500 opacity-60" />
                    </p>
                    <p className="text-xs text-red-500 font-sans font-bold uppercase tracking-widest opacity-80">
                        {language === "es" ? "Directora Narrativa y Lore" : "Narrative & Lore Director"}
                    </p>
                    <p className="text-[10px] text-gray-600 font-sans uppercase tracking-widest mt-1">
                        Vestigios de Sangre
                    </p>
                </div>
            </div>

            {/* Fin del Registro (Visualmente más sutil ahora que está la firma) */}
            <div className="pt-8 border-t border-dashed border-white/5 text-center">
                <p className="text-zinc-700 text-xs font-mono uppercase tracking-[0.3em]">
                    {language === "es" ? "Fin del Registro" : "End of Record"}
                </p>
            </div>

        </div>

        {/* Footer de Navegación */}
        <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
            <div className="text-sm text-gray-500">
                 <Link href="/project" className="hover:text-red-500 transition-colors">
                    {language === "es" ? "Ver Facciones" : "View Factions"}
                 </Link>
            </div>
            <button className="p-3 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                <Share2 className="w-5 h-5" />
            </button>
        </div>

      </article>
    </div>
  )
}
