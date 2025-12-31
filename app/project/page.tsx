"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export default function ProjectPage() {
  const { t } = useLanguage()

  // ASIGNACIÓN DE IMÁGENES SEGÚN TU SOLICITUD
  const factions = [
    { 
      id: "vampire", 
      image: "/0.jpeg" // Vampiros
    }, 
    { 
      id: "werewolf", 
      image: "/chess-pieces-on-board-strategic-thinking-dark-goth.jpg" // Licántropos
    }, 
    { 
      id: "hunter", 
      image: "/dark-gothic-fantasy-world-blood-moon-castle-ruins-.jpg" // Cazadores
    }, 
    { 
      id: "witch", 
      image: "/ancient-book-open-with-mystical-light-dark-library.jpg" // Brujas
    }, 
    { 
      id: "zombie", 
      image: "/respectful-handshake-dark-atmosphere-gothic.jpg" // Zombies/Bruma
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
          {/* Usamos la imagen del cazador/ruinas como portada de ambiente gótico */}
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
             {/* ERA 1 */}
             <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                <div className="md:text-right md:pr-12">
                   <span className="text-red-600 font-mono text-sm tracking-widest uppercase block mb-2">{t("project.lore.era1.date")}</span>
                   <h3 className="text-3xl font-bold text-white mb-4 font-serif">{t("project.lore.era1.title")}</h3>
                   <p className="text-gray-400 leading-relaxed">{t("project.lore.era1.desc")}</p>
                </div>
                <div className="absolute -left-[5px] md:left-1/2 md:-ml-[5px] w-2.5 h-2.5 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.8)] mt-2 md:mt-0" />
             </div>

             {/* ERA 2 */}
             <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                <div className="hidden md:block"></div>
                <div className="md:pl-12">
                   <span className="text-red-600 font-mono text-sm tracking-widest uppercase block mb-2">{t("project.lore.era2.date")}</span>
                   <h3 className="text-3xl font-bold text-white mb-4 font-serif">{t("project.lore.era2.title")}</h3>
                   <p className="text-gray-400 leading-relaxed">{t("project.lore.era2.desc")}</p>
                </div>
                 <div className="absolute -left-[5px] md:left-1/2 md:-ml-[5px] w-2.5 h-2.5 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.8)] mt-2 md:mt-0" />
             </div>
          </div>
        </div>

        {/* --- SECCIÓN: FACCIONES (ESTILO ZIG-ZAG) --- */}
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
            {factions.map((faction, index) => {
              const isEven = index % 2 === 0
              
              return (
                <section 
                  key={faction.id} 
                  className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${!isEven ? "md:flex-row-reverse" : ""}`}
                >
                  
                  {/* [ IMAGEN ] */}
                  <div className="flex-1 w-full flex justify-center">
                    <div className="relative w-full max-w-md aspect-[3/4] md:max-w-lg group">
                      {/* Aura roja detrás */}
                      <div className="absolute inset-0 bg-red-900/20 blur-2xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <Image
                        src={faction.image}
                        alt={t(`project.factions.${faction.id}.title`)}
                        fill
                        className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)] rounded-lg group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>

                  {/* [ TEXTO ] */}
                  <div className="flex-1 w-full text-center md:text-left">
                    <div className="space-y-6 max-w-lg mx-auto md:mx-0">
                      <span className="inline-block py-1 px-3 border border-red-900/50 rounded text-red-500 font-mono text-xs uppercase tracking-[0.2em]">
                        {t(`project.factions.${faction.id}.role`)}
                      </span>

                      <h3 className="text-4xl md:text-5xl font-bold text-white font-serif leading-tight">
                        {t(`project.factions.${faction.id}.title`)}
                      </h3>

                      <p className="text-lg text-gray-400 leading-relaxed font-light text-pretty">
                        {t(`project.factions.${faction.id}.desc`)}
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