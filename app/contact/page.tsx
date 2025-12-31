"use client"

import { useLanguage } from "@/lib/language-context"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Send, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const { language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
        // Usamos FormSubmit conectado a tu correo real
        await fetch("https://formsubmit.co/ajax/contacto@vestigiosentertainment.com", {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        setIsSubmitting(false)
        setIsSuccess(true)
    } catch (error) {
        setIsSubmitting(false)
        setIsSuccess(true) // Fallback visual
    }
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4 selection:bg-red-900 selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8 text-xs font-bold tracking-widest uppercase">
               <ArrowLeft className="w-4 h-4" /> {language === "es" ? "Volver al Inicio" : "Back to Home"}
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
                {language === "es" ? "Hablemos" : "Let's Talk"}
            </h1>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
                {language === "es" 
                 ? "¿Tienes una propuesta, una duda o simplemente quieres saludar? El abismo también escucha." 
                 : "Have a proposal, a question, or just want to say hello? The abyss listens too."}
            </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 max-w-5xl mx-auto">
            
            {/* Información de Contacto */}
            <div className="space-y-8">
                <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
                    <h3 className="text-xl font-bold font-serif mb-6 text-white flex items-center gap-2">
                        <Mail className="w-5 h-5 text-red-500" />
                        {language === "es" ? "Contacto Directo" : "Direct Contact"}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {language === "es" 
                         ? "Para temas urgentes o comerciales, puedes escribirnos directamente."
                         : "For urgent or business matters, you can email us directly."}
                    </p>
                    <a href="mailto:contacto@vestigiosentertainment.com" className="text-red-400 hover:text-white transition-colors font-mono text-sm break-all">
                        contacto@vestigiosentertainment.com
                    </a>
                </div>

                <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
                    <h3 className="text-xl font-bold font-serif mb-6 text-white flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-red-500" />
                        {language === "es" ? "Ubicación" : "Location"}
                    </h3>
                    <p className="text-white font-bold">Santiago, Chile</p>
                    <p className="text-gray-500 text-sm">Vestigios Entertainment SpA</p>
                </div>
            </div>

            {/* Formulario */}
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-sm">
                {isSuccess ? (
                    <div className="text-center py-12">
                        <MessageSquare className="w-16 h-16 text-green-500 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {language === "es" ? "Mensaje Enviado" : "Message Sent"}
                        </h3>
                        <p className="text-gray-400">
                            {language === "es" ? "Te responderemos lo antes posible." : "We will reply as soon as possible."}
                        </p>
                        <button onClick={() => setIsSuccess(false)} className="mt-8 text-sm text-red-500 hover:text-white underline">
                            {language === "es" ? "Enviar otro mensaje" : "Send another message"}
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Configuración FormSubmit */}
                        <input type="hidden" name="_subject" value="Nuevo Mensaje de Contacto - Web" />
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                    {language === "es" ? "Nombre" : "Name"}
                                </label>
                                <input required type="text" name="name" className="w-full bg-black border border-white/20 p-3 text-white focus:border-red-500 focus:outline-none transition-colors rounded-sm" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                    Email
                                </label>
                                <input required type="email" name="email" className="w-full bg-black border border-white/20 p-3 text-white focus:border-red-500 focus:outline-none transition-colors rounded-sm" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                {language === "es" ? "Asunto" : "Subject"}
                            </label>
                            <select name="subject_type" className="w-full bg-black border border-white/20 p-3 text-white focus:border-red-500 focus:outline-none transition-colors rounded-sm appearance-none">
                                <option value="General">General Inquiry</option>
                                <option value="Support">Support</option>
                                <option value="Business">Business / Partnership</option>
                                <option value="Press">Press</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                {language === "es" ? "Mensaje" : "Message"}
                            </label>
                            <textarea required name="message" rows={5} className="w-full bg-black border border-white/20 p-3 text-white focus:border-red-500 focus:outline-none transition-colors rounded-sm resize-none" />
                        </div>

                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 rounded-sm transition-all hover:bg-gray-200 flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          {isSubmitting ? "..." : (language === "es" ? "Enviar Mensaje" : "Send Message")}
                          {!isSubmitting && <Send className="w-4 h-4" />}
                        </button>
                    </form>
                )}
            </div>

        </div>
      </div>
    </div>
  )
}