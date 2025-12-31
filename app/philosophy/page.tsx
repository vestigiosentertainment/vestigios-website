"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export default function PhilosophyPage() {
  const { t } = useLanguage()

  const principles = [
    {
      title: t("philosophy.respect.title"),
      description: t("philosophy.respect.description"),
      image: "01.jpg",
    },
    {
      title: t("philosophy.narrative.title"),
      description: t("philosophy.narrative.description"),
      image: "02.jpg",
    },
    {
      title: t("philosophy.consequence.title"),
      description: t("philosophy.consequence.description"),
      image: "03.jpg",
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4 bg-black text-white selection:bg-red-900 selection:text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance tracking-tight">
            {t("philosophy.title")}
          </h1>
          {/* CORREGIDO: Subtítulo con traducción */}
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed text-balance font-light">
            {t("philosophy.subtitle")}
          </p>
        </div>

        {/* Principles */}
        <div className="space-y-24">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
            >
              {/* IMAGEN */}
              <div 
                className={`relative h-[350px] border border-white/10 rounded-sm bg-black overflow-hidden group ${
                  index % 2 === 1 ? "md:col-start-2" : ""
                }`}
              >
                <Image
                  src={principle.image || "/placeholder.svg"}
                  alt={principle.title}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              {/* TEXTO */}
              <div className={`${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                <div className="text-red-600 text-6xl font-bold mb-6 opacity-90 select-none">
                  0{index + 1}
                </div>
                <h2 className="text-3xl font-bold mb-4 text-balance text-white">
                  {principle.title}
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed text-pretty font-light">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-24 border border-white/10 bg-white/5 p-8 md:p-12 text-center rounded-sm backdrop-blur-sm">
          {/* CORREGIDO: Cierre con traducción */}
          <p className="text-xl md:text-2xl font-light leading-relaxed text-pretty text-gray-200">
            {t("philosophy.closing")}
          </p>
        </div>
      </div>
    </div>
  )
}