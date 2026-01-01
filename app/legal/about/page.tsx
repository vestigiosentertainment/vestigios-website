"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowLeft, Crown, Palette, Gamepad2, Feather, Scale } from "lucide-react"

export default function AboutPage() {
  const { language } = useLanguage()

  // DATOS REALES DEL EQUIPO DIRECTIVO
  const team = [
    {
      name: "Jonathan Torres",
      role: language === "es" ? "Fundador y Director General" : "Founder & CEO / Creative Director",
      desc: language === "es" 
        ? "Responsable de la visión global del universo Vestigios, dirección creativa, estrategia del estudio y supervisión de todos los proyectos." 
        : "Leads the global vision of the Vestigios universe, studio strategy, creative direction and oversees all projects.",
      icon: <Crown className="w-6 h-6 text-amber-500" />
    },
    {
      name: "Cristian Vega",
      role: language === "es" ? "Director de Arte" : "Art Director",
      desc: language === "es" 
        ? "Responsable de la identidad visual de Vestigios Entertainment, dirección de ilustración, estilo artístico, diseño de cartas, escenarios y estética general del universo." 
        : "Leads the visual identity of Vestigios Entertainment, including illustration, card design, environments and overall artistic style.",
      icon: <Palette className="w-6 h-6 text-purple-500" />
    },
    {
      name: "Jonathan Garrido",
      role: language === "es" ? "Director de Juego" : "Game Director",
      desc: language === "es" 
        ? "Encargado del diseño de mecánicas, reglas, sistemas de juego y dirección general de la jugabilidad en todos los títulos del universo Vestigios." 
        : "Responsible for game systems, mechanics, rules, and overall gameplay direction across all Vestigios titles.",
      icon: <Gamepad2 className="w-6 h-6 text-blue-500" />
    },
    {
      name: "Meliza Castillo",
      role: language === "es" ? "Directora Narrativa y Lore" : "Narrative & Lore Director",
      desc: language === "es" 
        ? "Responsable de la historia, construcción del mundo, guiones, trasfondo de personajes y coherencia narrativa del universo Vestigios." 
        : "Leads worldbuilding, story, characters, writing and narrative consistency of the Vestigios universe.",
      icon: <Feather className="w-6 h-6 text-red-500" />
    },
    {
      // AQUÍ ESTABA EL ERROR: Usamos comillas simples afuera para poder usar comillas dobles adentro
      name: 'Claudio "Ruki"', 
      role: language === "es" ? "Director de Diseño y Balance" : "Design & Balance Director",
      desc: language === "es" 
        ? "Responsable del balance del juego, supervisión de testers, control de calidad, ajustes de cartas, metajuego y evolución del diseño en futuras expansiones y proyectos." 
        : "Oversees game balance, testing teams, card tuning, metagame evolution and the long-term health of all future Vestigios games.",
      icon: <Scale className="w-6 h-6 text-green-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4 selection:bg-red-900 selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-20 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8 text-xs font-bold tracking-widest uppercase">
               <ArrowLeft className="w-4 h-4" /> {language === "es" ? "Volver al Inicio" : "Back to Home"}
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-white">
                {language === "es" ? "Arquitectos del Abismo" : "Architects of the Abyss"}
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                {language === "es" 
                 ? "El equipo directivo detrás de la pesadilla. Unificando arte, narrativa y estrategia." 
                 : "The executive team behind the nightmare. Unifying art, narrative, and strategy."}
            </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {team.map((member, i) => (
                <div key={i} className="group bg-white/5 border border-white/10 p-8 rounded-sm hover:border-red-900/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                    
                    {/* Icono y Rol */}
                    <div className="mb-6 flex items-start justify-between">
                        <div className="p-4 bg-black rounded-full border border-white/10 group-hover:border-white/30 transition-colors">
                            {member.icon}
                        </div>
                    </div>
                    
                    {/* Nombre y Cargo */}
                    <div className="mb-4">
                        <h2 className="text-2xl font-serif font-bold text-white mb-1">
                            {member.name}
                        </h2>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-red-500">
                            {member.role}
                        </h3>
                    </div>

                    {/* Descripción */}
                    <p className="text-sm text-gray-400 leading-relaxed mt-auto">
                        {member.desc}
                    </p>
                </div>
            ))}
        </div>

        {/* MANIFIESTO CORTO */}
        <div className="mt-24 border-t border-white/10 pt-12 text-center">
            <p className="text-lg text-white font-serif italic mb-4">
                {language === "es" 
                 ? "“No creamos productos. Creamos mundos donde queremos vivir.”" 
                 : "“We don't create products. We create worlds where we want to live.”"}
            </p>
            <p className="text-xs text-gray-600 font-bold uppercase tracking-widest">
                Vestigios Entertainment SpA
            </p>
        </div>

      </div>
    </div>
  )
}
