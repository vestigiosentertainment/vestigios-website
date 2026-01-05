
"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export default function ProjectPage() {
  const { t, language } = useLanguage()

  // 1. DATOS DE LORE (HISTORIA) ACTUALIZADOS
  const loreData = [
    {
      date: language === "es" ? "Génesis" : "Genesis",
      title: language === "es" ? "La Gran Fractura" : "The Great Fracture",
      desc: language === "es"
        ? "Antes de todo lo que conocemos, cuando todo era uno, el anhelo de un corazón por trascender hizo que este explotara y diera forma a los mundos con fragmentos de sí mismo."
        : "Before everything we know, when all was one, the yearning of a heart to transcend caused it to explode and shape the worlds with fragments of itself."
    },
    {
      date: "1880",
      title: language === "es" ? "El Mundo Actual" : "The Current World",
      desc: language === "es"
        ? "Nos encontramos en un 1880 en decadencia. Este mundo es esclavo de la industrialización masiva y de avances —tanto tecnológicos como científicos— que rozan, muchas veces, la herejía. Es un reino de adoquines húmedos y chimeneas humeantes que decoran el horizonte. Aquí, la sociedad no es un orden, sino una pirámide de depredadores."
        : "We find ourselves in a decaying 1880. This world is a slave to massive industrialization and advancements—both technological and scientific—that often border on heresy. It is a realm of damp cobblestones and smoking chimneys decorating the horizon. Here, society is not an order, but a pyramid of predators."
    }
  ]

  // 2. DATOS DE FACCIONES (Actualizados y Corregidos)
  const factionsData = [
    { 
      id: "vampire", 
      role: language === "es" ? "Los Eternos" : "The Eternal",
      title: language === "es" ? "Vampiros" : "Vampires",
      desc: language === "es" 
        ? "Pálidos aristócratas que han burlado la muerte y gobiernan desde las sombras, como si el mundo fuese su tablero de ajedrez. Construyeron sus imperios sobre la sangre de la tierra, acumulando tiempo, poder, riquezas y secretos."
        : "Pale aristocrats who have cheated death and rule from the shadows, as if the world were their chessboard. They built their empires on the blood of the earth, accumulating time, power, wealth, and secrets.",
      image: "/0.jpeg" 
    }, 
    { 
      id: "werewolf", 
      role: language === "es" ? "Hijos de la Luna" : "Moon Children",
      title: language === "es" ? "Licántropos" : "Werewolves",
      desc: language === "es"
        ? "Hijos de la luna reducidos a simples esclavos de voluntad rota, cuyo aullido ha sido silenciado. Su naturaleza salvaje ha sido encadenada con plata; son bestias de fuerza bruta, carne de yugo que carga con el precio del progreso y la codicia de sus amos."
        : "Children of the moon reduced to simple slaves with broken wills, their howl silenced. Their wild nature has been chained with silver; they are beasts of brute force, beasts of burden bearing the price of progress and their masters' greed.",
      image: "/chess-pieces-on-board-strategic-thinking-dark-goth.jpg" 
    }, 
    { 
      id: "hunter", 
      role: language === "es" ? "Maestros del Acero" : "Masters of Steel",
      title: language === "es" ? "Cazadores" : "Hunters",
      desc: language === "es"
        ? "Maestros del acero y la pólvora. Fueron hombres que vendieron su alma por la fuerza de matar y se volvieron adictos a la cacería, perdiendo algo valioso con cada presa que cae bajo sus manos. Su sed de sangre rivaliza con la de los monstruos que persiguen."
        : "Masters of steel and gunpowder. They were men who sold their souls for the strength to kill and became addicted to the hunt, losing something valuable with every prey that falls beneath their hands. Their bloodlust rivals that of the monsters they pursue.",
      image: "/dark-gothic-fantasy-world-blood-moon-castle-ruins-.jpg" 
    }, 
    { 
      id: "witch", 
      role: language === "es" ? "Comerciantes de Hechizos" : "Spell Merchants",
      title: language === "es" ? "Brujas" : "Witches",
      desc: language === "es"
        ? "Comerciantes de hechizos, favores oscuros y traiciones. Sus servicios son comprados por el mejor postor. Nunca sabrás de qué lado está su lealtad, pero de lo que sí puedes estar seguro es de que sus caprichos siempre tendrán prioridad."
        : "Merchants of spells, dark favors, and betrayal. Their services are bought by the highest bidder. You will never know where their loyalty lies, but of one thing you can be certain: their whims will always take priority.",
      image: "/ancient-book-open-with-mystical-light-dark-library.jpg" 
    }, 
    { 
      id: "zombie", 
      role: language === "es" ? "Los Perdidos" : "The Lost",
      title: language === "es" ? "Zombis" : "Zombies",
      desc: language === "es"
        ? "Los perdidos y desesperados, en su búsqueda de consuelo, van como corderos al matadero ante una diosa autoproclamada, con la esperanza de salvación. Son convertidos en peregrinos sin mente, fanáticos adoradores de una mentira, mientras sus almas, arrancadas y sin dueño, gritan invisibles sin saber en qué se convertirán."
        : "The lost and desperate, in their search for solace, go like lambs to the slaughter before a self-proclaimed goddess, hoping for salvation. They are converted into mindless pilgrims, fanatical worshippers of a lie, while their torn, ownerless souls scream unseen, not knowing what they will become.",
      image: "/respectful-handshake-dark-atmosphere-gothic.jpg" 
    }, 
  ]

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white pb-24">
      {/* Container principal */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* --- HEADER --- */}
        <div className="pt-24 pb-16 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance tracking-tight font-serif">
            {t("project.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide text-balance">
            {t("project.subtitle")}
          </p>
        </div>

        {/* --- HERO IMAGE (Ambiente General) --- */}
        <div className="relative h-[50vh] md:h-[70vh] mb-24 rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black">
          <Image 
            src="/dark-gothic-fantasy-world-blood-moon-castle-ruins-.jpg" 
            alt="Vestigios of Blood Universe" 
            fill 
            className="object-contain"
            priority
          />
        </div>

        {/* --- DESCRIPTION --- */}
        <div className="max-w-3xl mx-auto mb-32 text-center">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-200 text-pretty font-light border-l-4 border-red-900 pl-6 text-left">
              {t("project.description")}
            </p>
        </div>

        {/* --- KEY FEATURES --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-40 border-t border-white/10 pt-16">
          {["narrative", "strategic", "gothic"].map((feature, i) => (
             <div key={feature} className="p-6">
                <div className="text-red-700 text-5xl font-bold mb-4 font-serif opacity-50">0{i+1}</div>
                <h3 className="text-xl font-bold mb-3 text-white font-serif uppercase tracking-wider">
                    {t(`project.features.${feature}.title`)}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {t(`project.features.${feature}.desc`)}
                </p>
             </div>
          ))}
        </div>

        {/* --- LORE / HISTORIA (TIMELINE) --- */}
        <div className="mb-40">
           <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white font-serif">{t("project.lore.title")}</h2>
            <div className="h-0.5 w-24 bg-red-900 mx-auto mb-6" />
            <p className="text-gray-400">{t("project.lore.subtitle")}</p>
          </div>

          <div className="space-y-24 relative border-l border-white/10 ml-4 md:ml-1/2 pl-8 md:pl-0">
              
              {/* ERA 1: LA GRAN FRACTURA */}
              <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                <div className="md:text-right md:pr-12">
                   <span className="text-red-600 font-mono text-sm tracking-widest uppercase block mb-2">
                     {loreData[0].date}
                   </span>
                   <h3 className="text-3xl font-bold text-white mb-4 font-serif">
                     {loreData[0].title}
                   </h3>
                   <p className="text-gray-400 leading-relaxed">
                     {loreData[0].desc}
                   </p>
                </div>
                <div className="absolute -left-[5px] md:left-1/2 md:-ml-[5px] w-2.5 h-2.5 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.8)] mt-2 md:mt-0" />
              </div>

              {/* ERA 2: EL MUNDO ACTUAL */}
              <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                <div className="hidden md:block"></div>
                <div className="md:pl-12">
                   <span className="text-red-600 font-mono text-sm tracking-widest uppercase block mb-2">
                     {loreData[1].date}
                   </span>
                   <h3 className="text-3xl font-bold text-white mb-4 font-serif">
                     {loreData[1].title}
                   </h3>
                   <p className="text-gray-400 leading-relaxed">
                     {loreData[1].desc}
                   </p>
                </div>
                 <div className="absolute -left-[5px] md:left-1/2 md:-ml-[5px] w-2.5 h-2.5 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.8)] mt-2 md:mt-0" />
              </div>

          </div>
        </div>

        {/* --- SECCIÓN: FACCIONES --- */}
        <div className="mb-24">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight font-serif">
              {t("project.factions.title")}
            </h2>
            <div className="h-0.5 w-32 bg-red-900 mx-auto mb-8" />
            <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto">
              {t("project.factions.subtitle")}
            </p>
          </div>

          <div className="space-y-32">
            {factionsData.map((faction, index) => {
              const isEven = index % 2 === 0
              
              return (
                <section 
                  key={faction.id} 
                  className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${!isEven ? "md:flex-row-reverse" : ""}`}
                >
                  
                  {/* [ IMAGEN ] */}
                  <div className="flex-1 w-full flex justify-center">
                    <div className="relative w-full max-w-md aspect-[3/4] md:max-w-lg group">
                      <div className="absolute inset-0 bg-red-900/20 blur-2xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <Image
                        src={faction.image}
                        alt={faction.title}
                        fill
                        className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)] rounded-lg group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>

                  {/* [ TEXTO ] */}
                  <div className="flex-1 w-full text-center md:text-left">
                    <div className="space-y-6 max-w-lg mx-auto md:mx-0">
                      <span className="inline-block py-1 px-3 border border-red-900/50 rounded text-red-500 font-mono text-xs uppercase tracking-[0.2em]">
                        {faction.role}
                      </span>

                      <h3 className="text-4xl md:text-5xl font-bold text-white font-serif leading-tight">
                        {faction.title}
                      </h3>

                      <p className="text-lg text-gray-400 leading-relaxed font-light text-pretty">
                        {faction.desc}
                      </p>

                      <div className={`pt-4 flex ${!isEven && "md:justify-end"} md:justify-start justify-center`}>
                        <div className="h-[1px] w-16 bg-white/20" />
                      </div>
                    </div>
                  </div>

                </section>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
