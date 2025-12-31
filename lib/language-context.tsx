"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.project": "The Project",
    "nav.status": "Development Status",
    "nav.philosophy": "Philosophy",
    "nav.contact": "Contact",
    "nav.legal": "Legal",

    // Home
    "home.hero.title": "Vestigios Entertainment",
    "home.hero.subtitle": "Where darkness breathes and stories linger.",
    "home.intro.text": "We are an independent creative studio dedicated to crafting narrative-driven experiences...",

    // Project General
    "project.title": "Vestigios of Blood",
    "project.subtitle": "A world forged in shadow and strategy",
    "project.description": "Vestigios of Blood is our flagship project...",
    
    // Features
    "project.features.narrative.title": "Narrative Depth",
    "project.features.narrative.desc": "Every card, every character, every battle is woven into a larger story. The world lives beyond the mechanics.",
    "project.features.strategic.title": "Strategic Gameplay",
    "project.features.strategic.desc": "Victory comes from careful planning and tactical execution, not luck. Your decisions shape the outcome.",
    "project.features.gothic.title": "Gothic Atmosphere",
    "project.features.gothic.desc": "Immerse yourself in a world of shadows, blood, and timeless beauty. Darkness has never been so inviting.",

    // --- LORE ---
    "project.lore.title": "The Chronicle of Blood",
    "project.lore.subtitle": "From the origin to the world we inhabit",
    
    // ERA 1: Creation
    "project.lore.era1.title": "The Primordial Fracture",
    "project.lore.era1.desc": "Before time, the Primordial Vestige—a heart of crystal and magma—shattered in a violent desire to transcend. Its shards flew across the void, creating the cores of new worlds and seeding life in the darkness.",
    "project.lore.era1.date": "Genesis",

    // ERA 2: Current World
    "project.lore.era2.title": "The Current World",
    "project.lore.era2.desc": "We find ourselves in a decaying 1880. A gothic Victorian nightmare where Vampires rule from high towers and Werewolves serve in chains. While Hunters prowl the fog and Witches trade in treachery, a false religion consumes the desperate, turning them into hollow husks for the Lady of the Mist. It is a world unaware that it is dying.",
    "project.lore.era2.date": "Circa 1880",

    // --- FACTIONS ---
    "project.factions.title": "The Hierarchy of Night",
    "project.factions.subtitle": "Predators, prey, and those who profit from the chaos.",
    "project.factions.vampire.title": "The Vampires",
    "project.factions.vampire.role": "The Lords of Blood",
    "project.factions.vampire.desc": "Aristocrats of pale skin who cheated death. They built empires on the blood of the earth, hoarding time, wealth, and secrets in their high towers.",
    "project.factions.werewolf.title": "The Werewolves",
    "project.factions.werewolf.role": "The Broken Chains",
    "project.factions.werewolf.desc": "Once proud children of the moon, now reduced to heavy labor. Their wild nature is shackled by silver, serving as beasts of burden for the progress of their masters.",
    "project.factions.hunter.title": "The Hunters",
    "project.factions.hunter.role": "The Adrenaline Addicts",
    "project.factions.hunter.desc": "Humans enhanced by Vestiges who stared too long into the abyss. They control the black market and are addicted to the hunt, losing their humanity with every kill.",
    "project.factions.witch.title": "The Witches",
    "project.factions.witch.role": "The Merchants of Secrets",
    "project.factions.witch.desc": "Sold to the highest bidder. They trade in spells, dark favors, and betrayals. You never know where their loyalty lies, only that their whims come first.",
    "project.factions.zombie.title": "The Mist-Walkers",
    "project.factions.zombie.role": "The Hollow Faith",
    "project.factions.zombie.desc": "Lost souls seeking salvation in a false goddess, the Lady of the Mist. Their bodies remain as empty husks, while their torn souls wander the ether in chaos.",
    
    // Philosophy
    "philosophy.title": "Studio Philosophy",
    "philosophy.subtitle": "These principles guide every decision we make. They are not marketing slogans—they are commitments.",
    "philosophy.respect.title": "Respect for Players",
    "philosophy.respect.description": "We design for those who value their time and intelligence. No predatory mechanics, no empty promises. Only experiences worth your attention.",
    "philosophy.narrative.title": "Narrative Over Trends",
    "philosophy.narrative.description": "We do not chase market trends. We build worlds that endure, stories that resonate, and mechanics that serve the vision.",
    "philosophy.consequence.title": "Design with Consequence",
    "philosophy.consequence.description": "Every element exists with intention. Every choice carries weight. We craft experiences where meaning emerges from careful design, not artificial scarcity.",
    "philosophy.closing": "We do not compromise on these principles. If that limits our reach, so be it. We create for those who understand.",
    
    // Contact
    "contact.title": "Contact",
    "contact.description": "For inquiries, partnerships, or professional communication.",
    "contact.email": "Email",
    "contact.inquiries.title": "Professional Inquiries",
    "contact.inquiries.partnership": "Partnership and collaboration opportunities",
    "contact.inquiries.press": "Press and media requests",
    "contact.inquiries.business": "Business development discussions",
    "contact.inquiries.licensing": "Licensing and intellectual property matters",
    "contact.disclaimer": "We review all correspondence carefully but may not respond to unsolicited pitches, feature requests, or general feedback. For customer support, please refer to our support page.",

    // Footer
    "footer.legal": "Legal Information",
    "footer.terms": "Terms of Use",
    "footer.conduct": "Code of Conduct",
    "footer.privacy": "Privacy Policy",
    "footer.support": "Customer Support",
    "footer.fan": "Fan Content Policy",
    "footer.ip": "Intellectual Property",
    "footer.copyright": "© 2025 Vestigios Entertainment SpA. All rights reserved.",
    "footer.discover": "Discover",
    "footer.follow": "Follow Us",
    "footer.articles": "Articles",
    "footer.formats": "Formats",
    "footer.rules": "Rules",
    "footer.podcasts": "Podcasts",
    "footer.wallpapers": "Wallpapers",
    "footer.about": "About Us",
    "footer.press": "Press Kit",
    "footer.tester": "Beta Tester",

    // Legal Page
    "legal.lastUpdated": "Last Updated",
    "legal.backToHome": "Back to Home",
    
    // Status
    "status.title": "Development Status",
    "status.subtitle": "Transparency above all else.",
    "status.pve.title": "PVE Mode",
    "status.pve.status": "Complete & Functional",
    "status.pve.description": "The player-versus-environment experience is fully operational, offering a complete narrative-driven campaign.",
    "status.pvp.title": "PVP Mode",
    "status.pvp.status": "In Development",
    "status.pvp.description": "Our player-versus-player system is currently in active development, designed to bring strategic depth to competitive play.",
    "status.disclaimer": "We do not provide release dates or marketing timelines. Development is complete when quality meets our standards, not when pressure demands it.",
    
    // Status - Future Universes (UPDATED)
    "status.future.title": "Expanding Universes",
    "status.mmo.title": "Vestigios: The Rift (MMORPG)",
    "status.mmo.status": "Concept Phase",
    "status.mmo.description": "A universe-spanning project. Ancient portals open new worlds to explore. Every TCG expansion is linked, unlocking new eras in the RPG.",
    "status.secret.title": "Vestigios: Tales (New IP)",
    "status.secret.status": "Research & Development",
    "status.secret.description": "Stories from the world of Vestigios. Deep narrative experiences that explore the forgotten corners and characters of our main lore.",
  },

  es: {
    // Navegación
    "nav.home": "Inicio",
    "nav.project": "El Proyecto",
    "nav.status": "Estado de Desarrollo",
    "nav.philosophy": "Filosofía",
    "nav.contact": "Contacto",
    "nav.legal": "Legal",

    // Home
    "home.hero.title": "Vestigios Entertainment",
    "home.hero.subtitle": "Donde la oscuridad respira y las historias perduran.",
    "home.intro.text": "Somos un estudio creativo independiente dedicado a crear experiencias narrativas...",

    // Project General
    "project.title": "Vestigios de Sangre",
    "project.subtitle": "Un mundo forjado en sombra y estrategia",
    "project.description": "Vestigios de Sangre es nuestro proyecto insignia...",

    // Features
    "project.features.narrative.title": "Profundidad Narrativa",
    "project.features.narrative.desc": "Cada carta, cada personaje, cada batalla está entretejida en una historia mayor. El mundo vive más allá de las mecánicas.",
    "project.features.strategic.title": "Jugabilidad Estratégica",
    "project.features.strategic.desc": "La victoria proviene de una planificación cuidadosa y ejecución táctica, no de la suerte. Tus decisiones moldean el resultado.",
    "project.features.gothic.title": "Atmósfera Gótica",
    "project.features.gothic.desc": "Sumérgete en un mundo de sombras, sangre y belleza atemporal. La oscuridad nunca ha sido tan atractiva.",

    // --- LORE ---
    "project.lore.title": "La Crónica de Sangre",
    "project.lore.subtitle": "Del origen al mundo que habitamos",

    // ERA 1: Creación
    "project.lore.era1.title": "La Fractura Primordial",
    "project.lore.era1.desc": "Antes del tiempo, el Vestigio Primordial —un corazón de cristal y magma— estalló en un violento deseo de trascender. Sus esquirlas volaron por el vacío, creando los núcleos de nuevos mundos y sembrando la vida en la oscuridad.",
    "project.lore.era1.date": "Génesis",

    // ERA 2: Mundo Actual
    "project.lore.era2.title": "El Mundo Actual",
    "project.lore.era2.desc": "Nos encontramos en un 1880 en decadencia. Una pesadilla gótica victoriana donde los Vampiros gobiernan desde altas torres y los Licántropos sirven encadenados. Mientras los Cazadores acechan en la niebla y las Brujas comercian con traiciones, una falsa religión consume a los desesperados, convirtiéndolos en cascarones vacíos para la Dama de la Bruma. Es un mundo que ignora su propia muerte.",
    "project.lore.era2.date": "Circa 1880",

    // --- FACCIONES ---
    "project.factions.title": "La Jerarquía de la Noche",
    "project.factions.subtitle": "Depredadores, presas y aquellos que lucran del caos.",
    "project.factions.vampire.title": "Los Vampiros",
    "project.factions.vampire.role": "Los Señores de la Sangre",
    "project.factions.vampire.desc": "Aristócratas de piel pálida que han burlado a la muerte. Construyeron imperios sobre la sangre de la tierra, acumulando tiempo, riqueza y secretos en sus altas torres.",
    "project.factions.werewolf.title": "Los Licántropos",
    "project.factions.werewolf.role": "Las Cadenas Rotas",
    "project.factions.werewolf.desc": "Hijos de la luna reducidos a mano de obra pesada. Su naturaleza salvaje ha sido encadenada con plata, sirviendo como bestias de carga para el progreso de sus amos.",
    "project.factions.hunter.title": "Los Cazadores",
    "project.factions.hunter.role": "Adictos a la Cacería",
    "project.factions.hunter.desc": "Humanos mejorados por Vestigios que miraron demasiado al abismo. Controlan el mercado negro y son adictos a matar, perdiendo su humanidad con cada presa.",
    "project.factions.witch.title": "Las Brujas",
    "project.factions.witch.role": "Mercaderes de Secretos",
    "project.factions.witch.desc": "Vendidas al mejor postor. Comercian con hechizos, favores oscuros y traiciones. Nunca sabrás dónde reside su lealtad, solo que sus caprichos van primero.",
    "project.factions.zombie.title": "Los Caminantes de la Bruma",
    "project.factions.zombie.role": "La Fe Hueca",
    "project.factions.zombie.desc": "Almas perdidas buscando salvación en una diosa falsa, la Dama de la Bruma. Sus cuerpos quedan como cascarones vacíos, mientras sus almas arrancadas vagan por el éter en caos.",

    // Filosofía
    "philosophy.title": "Filosofía del Estudio",
    "philosophy.subtitle": "Estos principios guían cada decisión que tomamos. No son eslóganes de marketing, son compromisos.",
    "philosophy.respect.title": "Respeto por los Jugadores",
    "philosophy.respect.description": "Diseñamos para quienes valoran su tiempo e inteligencia. Sin mecánicas depredadoras, sin promesas vacías. Solo experiencias que merecen tu atención.",
    "philosophy.narrative.title": "Narrativa Sobre Tendencias",
    "philosophy.narrative.description": "No perseguimos tendencias de mercado. Construimos mundos que perduran, historias que resuenan y mecánicas que sirven a la visión.",
    "philosophy.consequence.title": "Diseño con Consecuencia",
    "philosophy.consequence.description": "Cada elemento existe con intención. Cada elección tiene peso. Creamos experiencias donde el significado emerge del diseño cuidadoso, no de la escasez artificial.",
    "philosophy.closing": "No comprometemos estos principios. Si eso limita nuestro alcance, que así sea. Creamos para aquellos que entienden.",
    
    // Contacto
    "contact.title": "Contacto",
    "contact.description": "Para consultas, asociaciones o comunicación profesional.",
    "contact.email": "Correo Electrónico",
    "contact.inquiries.title": "Consultas Profesionales",
    "contact.inquiries.partnership": "Oportunidades de asociación y colaboración",
    "contact.inquiries.press": "Solicitudes de prensa y medios",
    "contact.inquiries.business": "Discusiones sobre desarrollo de negocios",
    "contact.inquiries.licensing": "Asuntos de licencias y propiedad intelectual",
    "contact.disclaimer": "Revisamos toda la correspondencia cuidadosamente, pero es posible que no respondamos a propuestas no solicitadas, solicitudes de funciones o comentarios generales. Para soporte al cliente, consulta nuestra página de soporte.",

    // Footer
    "footer.legal": "Información Legal",
    "footer.terms": "Términos de Uso",
    "footer.conduct": "Código de Conducta",
    "footer.privacy": "Política de Privacidad",
    "footer.support": "Soporte al Cliente",
    "footer.fan": "Política de Contenido de Fans",
    "footer.ip": "Propiedad Intelectual",
    "footer.copyright": "© 2025 Vestigios Entertainment SpA. Todos los derechos reservados.",
    "footer.discover": "Descubrir",
    "footer.follow": "Síguenos",
    "footer.articles": "Artículos",
    "footer.formats": "Formatos",
    "footer.rules": "Reglas",
    "footer.podcasts": "Podcasts",
    "footer.wallpapers": "Fondos de Pantalla",
    "footer.about": "Nosotros",
    "footer.press": "Kit de Prensa",
    "footer.tester": "Beta Tester",

    // Legal Page
    "legal.lastUpdated": "Última Actualización",
    "legal.backToHome": "Volver al Inicio",
    
    // Status
    "status.title": "Estado de Desarrollo",
    "status.subtitle": "Transparencia ante todo.",
    "status.pve.title": "Modo JcE",
    "status.pve.status": "Completo y Funcional",
    "status.pve.description": "La experiencia jugador contra entorno está completamente operativa, ofreciendo una campaña narrativa completa.",
    "status.pvp.title": "Modo JcJ",
    "status.pvp.status": "En Desarrollo",
    "status.pvp.description": "Nuestro sistema jugador contra jugador está actualmente en desarrollo activo, diseñado para aportar profundidad estratégica al juego competitivo.",
    "status.disclaimer": "No damos fechas de lanzamiento ni plazos de marketing. El desarrollo termina cuando la calidad cumple nuestros estándares, no cuando la presión lo exige.",
    
    // Status - Future Universes (ACTUALIZADO)
    "status.future.title": "Universos en Desarrollo",
    "status.mmo.title": "Vestigios: La Grieta (MMORPG)",
    "status.mmo.status": "Fase Conceptual",
    "status.mmo.description": "Un proyecto que recorre universos. Se abren portales que revelan nuevos mundos por explorar. Cada expansión del TCG está conectada al RPG, desbloqueando nuevas fronteras.",
    "status.secret.title": "Vestigios: Historias (Nueva IP)",
    "status.secret.status": "Investigación y Desarrollo",
    "status.secret.description": "Historias del mundo de Vestigios. Narrativas profundas y experiencias jugables que exploran los rincones y personajes que forjaron la fractura.",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved === "en" || saved === "es") {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}