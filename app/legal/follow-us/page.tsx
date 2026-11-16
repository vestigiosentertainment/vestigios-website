"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowLeft, Download, Mail, Copy, Check, FileText, Image as ImageIcon, Palette } from "lucide-react"
import { useState } from "react"

export default function PressPage() {
  const { language } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("contacto@vestigiosentertainment.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const facts = [
    { label: language === "es" ? "Desarrollador" : "Developer", value: "Vestigios Entertainment SpA" },
    { label: language === "es" ? "Ubicación" : "Location", value: "Santiago, Chile" },
    { label: language === "es" ? "Género" : "Genre", value: "Gothic Strategy TCG" },
    { label: language === "es" ? "Plataformas" : "Platforms", value: "PC, Web (Mobile planned)" },
    { label: language === "es" ? "Lanzamiento" : "Release Date", value: "TBA 2026" },
    { label: "Website", value: "vestigiosentertainment.com" },
  ]

  const assets = [
    {
      title: "Logos Pack",
      desc: language === "es" ? "PNGs, SVGs, Blanco y Negro." : "PNGs, SVGs, Black & White.",
      size: "12 MB",
      icon: <FileText className="w-8 h-8 text-white" />,
      bg: "bg-blue-900/20",
      border: "border-blue-500/30"
    },
    {
      title: "Key Art Collection",
      desc: language === "es" ? "Ilustraciones en 4K y Wallpapers." : "4K Illustrations & Wallpapers.",
      size: "145 MB",
      icon: <ImageIcon className="w-8 h-8 text-white" />,
      bg: "bg-red-900/20",
      border: "border-red-500/30"
    },
    {
      title: "Screenshots",
      desc: language === "es" ? "Capturas de gameplay y UI." : "Gameplay & UI Screenshots.",
      size: "45 MB",
      icon: <Download className="w-8 h-8 text-white" />,
      bg: "bg-purple-900/20",
      border: "border-purple-500/30"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4 selection:bg-red-900 selection:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-b border-white/10 pb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-mono uppercase tracking-widest">
            <Link href="/legal/follow-us" className="hover:text-red-500 transition-colors flex items-center gap-2">
               <ArrowLeft className="w-4 h-4" /> {language === "es" ? "Comunidad" : "Community"}
            </Link>
            <span>/</span>
            <span className="text-red-600">{language === "es" ? "Press Kit" : "Press Kit"}</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div>
                  <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 text-white tracking-tight">
                    Press & Creators
                  </h1>
                  <p className="text-gray-400 text-xl font-light max-w-2xl">
                    {language === "es" 
                     ? "Todo lo que necesitas para contar nuestra historia. Recursos oficiales para medios, streamers y creadores." 
                     : "Everything you need to tell our story. Official resources for media, streamers, and creators."}
                  </p>
              </div>
              <button className="group bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-sm flex items-center gap-3">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  {language === "es" ? "Descargar Todo (.zip)" : "Download All (.zip)"}
              </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
            <div>
                <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-red-500" />
                    Fact Sheet
                </h3>
                <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-sm space-y-4">
                    {facts.map((fact, i) => (
                        <div key={i} className="flex flex-col border-b border-white/5 last:border-0 pb-3 last:pb-0">
                            <span className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">{fact.label}</span>
                            <span className="text-white font-mono text-sm">{fact.value}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <h3 className="text-xl font-serif font-bold text-white mb-4 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-red-500" />
                        {language === "es" ? "Contacto de Prensa" : "Press Contact"}
                    </h3>
                    <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-sm flex items-center justify-between gap-2 group hover:border-red-500/50 transition-colors">
                        <span className="text-sm text-gray-300 truncate">contacto@vestigiosentertainment.com</span>
                        <button onClick={copyEmail} className="text-gray-500 hover:text-white transition-colors p-2" aria-label="Copiar email">
                            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            </div>

            <div className="space-y-12">
                <section>
                    <h3 className="text-2xl font-serif font-bold text-white mb-6">
                        {language === "es" ? "Recursos de Marca" : "Brand Assets"}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {assets.map((asset, i) => (
                            <div key={i} className={`group border ${asset.border} ${asset.bg} p-6 rounded-sm hover:brightness-110 transition-all cursor-pointer relative overflow-hidden`}>
                                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                                    <Download className="w-5 h-5 text-white" />
                                </div>
                                <div className="mb-4">{asset.icon}</div>
                                <h4 className="text-xl font-bold text-white mb-1">{asset.title}</h4>
                                <p className="text-sm text-gray-400 mb-4">{asset.desc}</p>
                                <span className="text-xs font-mono bg-black/30 px-2 py-1 rounded text-gray-300">{asset.size}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                        <Palette className="w-6 h-6 text-gray-400" />
                        {language === "es" ? "Colores Corporativos" : "Brand Colors"}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                            <div className="h-24 bg-[#991b1b] rounded-sm border border-white/10 shadow-lg" />
                            <div>
                                <p className="text-white font-bold text-sm">Blood Red</p>
                                <p className="text-gray-500 text-xs font-mono">#991B1B</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 bg-[#000000] rounded-sm border border-white/20 shadow-lg" />
                            <div>
                                <p className="text-white font-bold text-sm">Void Black</p>
                                <p className="text-gray-500 text-xs font-mono">#000000</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-24 bg-[#d1d5db] rounded-sm border border-white/10 shadow-lg" />
                            <div>
                                <p className="text-white font-bold text-sm">Mist Gray</p>
                                <p className="text-gray-500 text-xs font-mono">#D1D5DB</p>
                            </div>
                        </div>
                         <div className="space-y-2">
                            <div className="h-24 bg-[#b45309] rounded-sm border border-white/10 shadow-lg" />
                            <div>
                                <p className="text-white font-bold text-sm">Relic Gold</p>
                                <p className="text-gray-500 text-xs font-mono">#B45309</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-t border-white/10 pt-12">
                    <h3 className="text-xl font-serif font-bold text-white mb-6">
                        {language === "es" ? "Uso Correcto del Logo" : "Logo Usage"}
                    </h3>
                    <div className="bg-zinc-900 border border-white/10 p-12 flex items-center justify-center rounded-sm">
                        <div className="text-center">
                            <h2 className="text-5xl font-serif font-bold text-white tracking-widest mb-2">VESTIGIOS</h2>
                            <p className="text-red-500 font-bold uppercase tracking-[0.5em] text-xs">Entertainment</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
      </div>
    </div>
  )
}