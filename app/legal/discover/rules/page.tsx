"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { Book, Shield, Swords, Hourglass, Skull, AlertTriangle, Scroll, CheckCircle, Flame, HeartPulse } from "lucide-react"

export default function RulesPage() {
  const { t, language } = useLanguage()

  // 1. CONCEPTOS BÁSICOS
  const basics = [
    {
      title: language === "es" ? "Condiciones de Victoria" : "Victory Conditions",
      icon: <Skull className="w-6 h-6 text-red-500" />,
      content: language === "es" 
        ? "1. Derrotar al Líder enemigo 3 veces (bajar su vida a 0 tres veces).\n2. Tu oponente se queda sin cartas en el mazo (Deck Out).\n3. Cumplir la condición de victoria de una carta específica."
        : "1. Defeat the enemy Leader 3 times (reduce their health to 0 three times).\n2. Your opponent runs out of cards in their deck (Deck Out).\n3. Fulfill the victory condition of a specific card."
    },
    {
      title: language === "es" ? "Construcción de Mazo" : "Deck Building",
      icon: <Book className="w-6 h-6 text-amber-500" />,
      content: language === "es"
        ? "Tu mazo principal debe tener exactamente 60 cartas. Además, necesitas 1 carta de Líder y sus 2 evoluciones (Nivel 2 y 3). Puedes tener un Banquillo (Sideboard) de 10 cartas. Máximo 3 copias de cada carta."
        : "Your main deck must have exactly 60 cards. Plus, you need 1 Leader card and its 2 evolutions (Level 2 and 3). You can have a Sideboard of 10 cards. Maximum 3 copies of each card."
    },
    {
      title: language === "es" ? "Zona de Retorno" : "Return Zone",
      icon: <HeartPulse className="w-6 h-6 text-purple-500" />,
      content: language === "es"
        ? "Al inicio del juego, colocas las 2 primeras cartas de tu mazo en la 'Zona de Retorno'. Cuando tu Líder muere, tomas una carta de esta zona a tu mano y tu Líder 'renace' evolucionando al siguiente nivel. ¡Es tu mecánica de regreso!"
        : "At the start of the game, place the top 2 cards of your deck in the 'Return Zone'. When your Leader dies, you take a card from this zone to your hand and your Leader 'rebirths' evolving to the next level. It's your comeback mechanic!"
    }
  ]

  // 2. FASES DEL TURNO
  const phases = [
    {
      step: "1",
      title: language === "es" ? "Fase de Robo" : "Draw Phase",
      desc: language === "es" 
        ? "Robas 1 carta del tope del mazo. (El primer jugador en el primer turno SALTA este paso)." 
        : "Draw 1 card from the top of your deck. (The starting player SKIPS this step on the first turn)."
    },
    {
      step: "2",
      title: language === "es" ? "Fase Principal" : "Main Phase",
      desc: language === "es"
        ? "Juega cartas de tu mano. Límite: Solo 1 criatura de Nivel 1 por turno (las evoluciones/despertares son ilimitados). Juega acciones, vestigios y campos libremente."
        : "Play cards from your hand. Limit: Only 1 Level 1 creature per turn (evolutions/awakenings are unlimited). Play actions, vestiges, and fields freely."
    },
    {
      step: "3",
      title: language === "es" ? "Fase de Combate" : "Combat Phase",
      desc: language === "es"
        ? "Declara ataques uno por uno. IMPORTANTE: No existe el 'Daño de Vuelta' al atacar (la criatura defensora no daña a la atacante, solo bloquea), a menos que sea un Duelo."
        : "Declare attacks one by one. IMPORTANT: There is 'No Return Damage' when attacking (the defending creature does not damage the attacker, only blocks), unless it is a Duel."
    },
    {
      step: "4",
      title: language === "es" ? "Fase Final" : "End Phase",
      desc: language === "es"
        ? "Se resuelven efectos de fin de turno (como el contador de Sangrado) y cedes el turno al oponente."
        : "End of turn effects resolve (like the Bleed counter) and you pass the turn to the opponent."
    }
  ]

  // 3. GLOSARIO DE CONTADORES
  const counters = [
    { 
        name: language === "es" ? "Maldición" : "Curse", 
        effect: language === "es" ? "Al juntar 3 contadores, la criatura muere instantáneamente." : "Upon collecting 3 counters, the creature dies instantly.",
        color: "text-purple-400"
    },
    { 
        name: language === "es" ? "Sangrado" : "Bleed", 
        effect: language === "es" ? "La criatura recibe 1 de daño al final del turno." : "The creature takes 1 damage at the end of the turn.",
        color: "text-red-500"
    },
    { 
        name: language === "es" ? "Tóxico" : "Toxic", 
        effect: language === "es" ? "La criatura recibe 1 de daño al inicio de la fase principal." : "The creature takes 1 damage at the start of the main phase.",
        color: "text-green-500"
    },
    { 
        name: language === "es" ? "Aturdido" : "Stunned", 
        effect: language === "es" ? "La criatura no puede atacar en su próximo turno." : "The creature cannot attack on its next turn.",
        color: "text-yellow-500"
    },
    { 
        name: language === "es" ? "Escudo" : "Shield", 
        effect: language === "es" ? "Previene el daño de la próxima batalla. Se retira tras usarse." : "Prevents damage from the next battle. Removed after use.",
        color: "text-blue-400"
    },
    { 
        name: language === "es" ? "Resistencia" : "Resistance", 
        effect: language === "es" ? "Si la criatura fuera a morir por daño, sobrevive con 1 de vida y se retira el contador." : "If the creature would die from damage, it survives with 1 health and the counter is removed.",
        color: "text-gray-400"
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white pt-32 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-20 border-b border-white/10 pb-10">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 font-mono uppercase tracking-widest">
            <Link href="/legal/discover" className="hover:text-red-500 transition-colors">{t("footer.discover")}</Link>
            <span>/</span>
            <span className="text-red-600">{t("footer.rules")}</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-4">
                {language === "es" ? "Reglamento de Juego" : "Game Rules"}
              </h1>
              <p className="text-xl text-gray-400 font-light max-w-2xl">
                {language === "es" 
                  ? "Domina las mecánicas de Vestigios. Aprende sobre el Despertar, la Zona de Retorno y el combate sin retorno." 
                  : "Master the mechanics of Vestigios. Learn about Awakening, the Return Zone, and no-return combat."}
              </p>
            </div>
            
            {/* BOTÓN DE DESCARGA PDF */}
            <a 
              href="/Reglas del juego.pdf" 
              download="Vestigios_Reglamento_Oficial.pdf"
              className="flex items-center gap-3 bg-red-950/30 border border-red-900/50 hover:bg-red-900/50 hover:text-white text-red-400 px-6 py-3 rounded-sm font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(153,27,27,0.1)]"
            >
              <Scroll size={20} />
              {language === "es" ? "Descargar PDF Oficial" : "Download Official PDF"}
            </a>
          </div>
        </div>

        {/* --- 1. PILARES DEL JUEGO --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {basics.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-red-900/30 transition-colors group">
              <div className="mb-6 p-3 bg-black rounded-full w-fit border border-white/10 group-hover:border-red-900/50">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold font-serif mb-4 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* --- 2. LA ESTRUCTURA DEL TURNO --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
              <Hourglass className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white font-serif">
                {language === "es" ? "Secuencia del Turno" : "Turn Sequence"}
              </h2>
          </div>
          
          <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 space-y-12">
            {phases.map((phase, i) => (
              <div key={i} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black border-2 border-red-900 rounded-full" />
                
                <div className="bg-black border border-white/10 p-6 rounded-sm hover:border-white/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                      <span className="text-red-600 font-mono text-xs uppercase tracking-widest font-bold">
                        {language === "es" ? `FASE 0${phase.step}` : `PHASE 0${phase.step}`}
                      </span>
                      <h3 className="text-xl font-bold text-white font-serif">{phase.title}</h3>
                  </div>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 3. GLOSARIO DE EFECTOS --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
              <AlertTriangle className="text-red-600 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white font-serif">
                {language === "es" ? "Contadores y Estados" : "Counters & Status Effects"}
              </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {counters.map((counter, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-sm border border-white/5 hover:bg-white/10 transition-colors">
                <div className={`font-bold font-serif text-lg mb-2 ${counter.color} flex items-center gap-2`}>
                   <div className={`w-2 h-2 rounded-full bg-current`} />
                   {counter.name}
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {counter.effect}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 4. MECÁNICAS ÚNICAS --- */}
        <section className="grid md:grid-cols-2 gap-8 mb-24">
           {/* Despertar */}
           <div className="border border-red-900/30 bg-gradient-to-br from-red-950/20 to-black p-8 rounded-sm">
              <h3 className="text-2xl font-bold text-white font-serif mb-4 flex items-center gap-3">
                  <Flame className="text-red-500" />
                  {language === "es" ? "Mecánica: Despertar" : "Mechanic: Awaken"}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                  {language === "es" 
                    ? "Puedes evolucionar tus criaturas jugando una carta de Nivel superior sobre una de Nivel inferior (Lv.1 -> Lv.2 -> Lv.3). Al despertar:"
                    : "You can evolve your creatures by playing a higher Level card on top of a lower Level one (Lv.1 -> Lv.2 -> Lv.3). Upon awakening:"}
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-red-500" /> {language === "es" ? "La criatura se cura completamente." : "The creature heals completely."}</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-red-500" /> {language === "es" ? "Hereda las habilidades de las cartas de abajo." : "Inherits abilities from cards underneath."}</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-red-500" /> {language === "es" ? "Puede atacar inmediatamente (sin mareo)." : "Can attack immediately (no summoning sickness)."}</li>
              </ul>
           </div>

           {/* Sin Daño de Vuelta */}
           <div className="border border-white/10 bg-black p-8 rounded-sm">
              <h3 className="text-2xl font-bold text-white font-serif mb-4 flex items-center gap-3">
                  <Swords className="text-gray-400" />
                  {language === "es" ? "Combate: Sin Retorno" : "Combat: No Return"}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                  {language === "es"
                    ? "En Vestigios, cuando una criatura ataca y es bloqueada, la criatura defensora NO hace daño a la atacante automáticamente."
                    : "In Vestigios, when a creature attacks and is blocked, the defending creature does NOT deal damage back to the attacker automatically."}
              </p>
              <p className="text-sm text-gray-500 italic">
                  {language === "es" 
                    ? "*Excepción: Cartas que inician 'Duelos' o batallas específicas fuera de la fase de combate."
                    : "*Exception: Cards that initiate 'Duels' or specific battles outside the combat phase."}
              </p>
           </div>
        </section>

      </div>
    </div>
  )
}