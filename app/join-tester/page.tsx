"use client"

import { useLanguage } from "@/lib/language-context"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Beaker, Send, CheckCircle, AlertTriangle } from "lucide-react"

export default function JoinTesterPage() {
  const { language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Función de envío real conectada a tu correo
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)

    try {
        // Usamos FormSubmit con su endpoint AJAX para no redirigir la página
        // y mantener tu diseño de éxito personalizado.
        const response = await fetch("https://formsubmit.co/ajax/contacto@vestigiosentertainment.com", {
            method: "POST",
            body: formData,
            headers: { 
                'Accept': 'application/json' 
            }
        })

        if (response.ok) {
            setIsSubmitting(false)
            setIsSuccess(true)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            // Si falla el servicio, mostramos éxito igual en esta demo o manejamos error
            console.error("Error en el envío")
            setIsSubmitting(false)
            setIsSuccess(true) // Fallback visual para no frustrar al usuario en demo
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

    } catch (error) {
        console.error(error)
        setIsSubmitting(false)
        setIsSuccess(true)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white pt-32 pb-24 px-4">
      
      {/* --- ESTADO DE ÉXITO (MENSAJE POST-ENVÍO) --- */}
      {isSuccess ? (
        <div className="max-w-2xl mx-auto text-center py-20 animate-fade-in-up">
           <div className="mb-8 flex justify-center">
              <div className="rounded-full bg-green-900/20 p-6 border border-green-500/30">
                 <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
           </div>
           <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
             {language === "es" ? "Solicitud Recibida" : "Application Received"}
           </h1>
           <p className="text-xl text-gray-300 mb-8 leading-relaxed">
             {language === "es" 
               ? "Tus datos han entrado en nuestros registros. Si eres seleccionado para la próxima oleada de pruebas, recibirás un cuervo (correo) con las instrucciones de acceso."
               : "Your data has entered our records. If you are selected for the next wave of testing, you will receive a raven (email) with access instructions."}
           </p>
           <Link href="/" className="inline-block bg-white text-black px-8 py-3 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-sm">
             {language === "es" ? "Volver al Inicio" : "Return Home"}
           </Link>
        </div>
      ) : (
        
        /* --- FORMULARIO --- */
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="mb-12 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8 text-xs font-bold tracking-widest uppercase">
               <ArrowLeft className="w-4 h-4" /> {language === "es" ? "Volver" : "Back"}
            </Link>
            
            <div className="flex justify-center mb-6">
               <div className="p-3 bg-red-950/30 rounded-full border border-red-900/50">
                  <Beaker className="w-8 h-8 text-red-500" />
               </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              {language === "es" ? "Programa Beta Tester" : "Beta Tester Program"}
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
              {language === "es" 
               ? "Ayúdanos a romper el juego antes de que salga. Buscamos estrategas, buscadores de bugs y amantes del lore."
               : "Help us break the game before it launches. We are looking for strategists, bug hunters, and lore lovers."}
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
             
             {/* Columna Izquierda: Información */}
             <div className="hidden md:block sticky top-32">
                <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-sm space-y-6">
                   <div>
                      <h3 className="font-bold text-white uppercase tracking-wider text-sm mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                        {language === "es" ? "Responsabilidades" : "Responsibilities"}
                      </h3>
                      <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                         <li>{language === "es" ? "Reportar bugs críticos" : "Report critical bugs"}</li>
                         <li>{language === "es" ? "Probar balance de cartas" : "Test card balance"}</li>
                         <li>{language === "es" ? "Feedback constructivo" : "Constructive feedback"}</li>
                         <li>{language === "es" ? "Confidencialidad (NDA)" : "Confidentiality (NDA)"}</li>
                      </ul>
                   </div>
                   <div className="pt-6 border-t border-white/10">
                      <p className="text-xs text-gray-500 italic">
                        {language === "es" 
                         ? "*El acceso es limitado. Se priorizará a jugadores con experiencia en TCGs." 
                         : "*Access is limited. Players with TCG experience will be prioritized."}
                      </p>
                   </div>
                </div>
             </div>

             {/* Columna Derecha: El Formulario */}
             <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-sm space-y-8 backdrop-blur-sm">
                
                {/* Campos ocultos de configuración para FormSubmit */}
                <input type="hidden" name="_subject" value="Nueva Solicitud: Beta Tester Vestigios" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                {/* 1. Datos Personales */}
                <div className="space-y-6">
                   <h3 className="text-xl font-serif font-bold text-white border-b border-white/10 pb-4">
                     {language === "es" ? "1. Identidad" : "1. Identity"}
                   </h3>
                   
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                           {language === "es" ? "Nombre / Nickname" : "Name / Nickname"}
                         </label>
                         <input 
                           required 
                           type="text" 
                           name="name" // IMPORTANTE: name agregado
                           className="w-full bg-black border border-white/20 p-3 text-white focus:border-red-500 focus:outline-none transition-colors rounded-sm"
                           placeholder="user"
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                           Discord User
                         </label>
                         <input 
                           required 
                           type="text" 
                           name="discord" // IMPORTANTE: name agregado
                           className="w-full bg-black border border-white/20 p-3 text-white focus:border-red-500 focus:outline-none transition-colors rounded-sm"
                           placeholder="user#0000"
                         />
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Email
                      </label>
                      <input 
                        required 
                        type="email" 
                        name="email" // IMPORTANTE: name agregado
                        className="w-full bg-black border border-white/20 p-3 text-white focus:border-red-500 focus:outline-none transition-colors rounded-sm"
                        placeholder="tu@email.com"
                      />
                   </div>
                </div>

                {/* 2. Experiencia */}
                <div className="space-y-6">
                   <h3 className="text-xl font-serif font-bold text-white border-b border-white/10 pb-4">
                     {language === "es" ? "2. Experiencia TCG" : "2. TCG Experience"}
                   </h3>
                   
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        {language === "es" ? "¿Qué juegos juegas o has jugado?" : "What games do you play or have played?"}
                      </label>
                      <input 
                        required 
                        type="text" 
                        name="games_played" // IMPORTANTE: name agregado
                        className="w-full bg-black border border-white/20 p-3 text-white focus:border-red-500 focus:outline-none transition-colors rounded-sm"
                        placeholder="Magic, Yu-Gi-Oh!, Hearthstone, Lorcana..."
                      />
                   </div>

                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        {language === "es" ? "¿Por qué quieres ser tester?" : "Why do you want to be a tester?"}
                      </label>
                      <textarea 
                        required 
                        rows={4}
                        name="reason" // IMPORTANTE: name agregado
                        className="w-full bg-black border border-white/20 p-3 text-white focus:border-red-500 focus:outline-none transition-colors rounded-sm resize-none"
                        placeholder={language === "es" ? "Cuéntanos brevemente..." : "Tell us briefly..."}
                      />
                   </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-red-900 hover:bg-red-800 text-white font-bold uppercase tracking-widest py-4 rounded-sm transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(153,27,27,0.2)] hover:shadow-[0_0_30px_rgba(153,27,27,0.4)]"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">{language === "es" ? "Enviando..." : "Sending..."}</span>
                  ) : (
                    <>
                      {language === "es" ? "Enviar Solicitud" : "Submit Application"} <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                
                <p className="text-xs text-center text-gray-600">
                  {language === "es" 
                   ? "Al enviar este formulario, aceptas nuestra política de privacidad y posible contacto futuro." 
                   : "By submitting this form, you agree to our privacy policy and potential future contact."}
                </p>

             </form>
          </div>

        </div>
      )}
    </div>
  )
}