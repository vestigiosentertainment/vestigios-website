/**
 * Configuración central del programa Beta.
 * Edita SOLO este archivo para actualizar fechas, fases y FAQ en todo el sitio
 * (home, estado de desarrollo y formulario de testers).
 */

export type PhaseState = "done" | "active" | "upcoming"

type Bilingual = { es: string; en: string }

export interface BetaPhase {
  id: string
  state: PhaseState
  when: Bilingual
  title: Bilingual
  description: Bilingual
}

export const BETA = {
  /** Año objetivo de la Beta. */
  year: 2027,
  /**
   * Fecha exacta de apertura (ISO 8601). Déjala en `null` hasta que esté confirmada:
   * con `null` el sitio muestra "2027" y oculta la cuenta regresiva.
   * Ejemplo: "2027-03-15T18:00:00-03:00"
   */
  launchDate: null as string | null,
  /** Build de prueba actual (descarga para Windows). */
  currentBuild: {
    label: { es: "Build de prueba actual", en: "Current test build" },
    platform: "Windows",
    href: "/Vestigios.rar",
  },
  discordUrl: null as string | null,
} as const

export const BETA_PHASES: BetaPhase[] = [
  {
    id: "pve",
    state: "done",
    when: { es: "2026", en: "2026" },
    title: { es: "Alpha cerrada · JcE", en: "Closed Alpha · PvE" },
    description: {
      es: "Campaña narrativa jugable de principio a fin y set base de 230 cartas.",
      en: "Narrative campaign playable end to end and a 230-card base set.",
    },
  },
  {
    id: "pvp",
    state: "active",
    when: { es: "En curso", en: "In progress" },
    title: { es: "Desarrollo JcJ y servidores", en: "PvP & server development" },
    description: {
      es: "Partidas en línea, cuentas de jugador, emparejamiento y balance competitivo.",
      en: "Online matches, player accounts, matchmaking and competitive balance.",
    },
  },
  {
    id: "closed-beta",
    state: "upcoming",
    when: { es: "2027", en: "2027" },
    title: { es: "Beta cerrada", en: "Closed Beta" },
    description: {
      es: "Acceso por invitación para testers registrados. Pruebas de carga, bugs y balance.",
      en: "Invite-only access for registered testers. Load testing, bugs and balance.",
    },
  },
  {
    id: "open-beta",
    state: "upcoming",
    when: { es: "Por anunciar", en: "To be announced" },
    title: { es: "Beta abierta", en: "Open Beta" },
    description: {
      es: "Abierta a toda la comunidad, con progreso que se conserva hasta el lanzamiento.",
      en: "Open to the whole community, with progress carried over to launch.",
    },
  },
]

export const BETA_FAQ: { q: Bilingual; a: Bilingual }[] = [
  {
    q: { es: "¿Cuándo empieza la Beta?", en: "When does the Beta start?" },
    a: {
      es: "Nuestro objetivo es 2027. Anunciaremos la fecha exacta primero a los testers registrados.",
      en: "We are targeting 2027. Registered testers will hear the exact date first.",
    },
  },
  {
    q: { es: "¿Cómo consigo acceso?", en: "How do I get access?" },
    a: {
      es: "Regístrate en el programa de testers. Enviamos invitaciones por oleadas y priorizamos a jugadores con experiencia en TCG.",
      en: "Sign up for the tester program. Invites go out in waves, prioritising players with TCG experience.",
    },
  },
  {
    q: { es: "¿En qué plataformas estará?", en: "Which platforms will it support?" },
    a: {
      es: "La build de prueba actual es para Windows. Anunciaremos otras plataformas junto con la fecha de la Beta.",
      en: "The current test build is for Windows. Other platforms will be announced alongside the Beta date.",
    },
  },
  {
    q: { es: "¿Qué se espera de un tester?", en: "What is expected from a tester?" },
    a: {
      es: "Reportar bugs, probar el balance de cartas, dar feedback constructivo y respetar la confidencialidad (NDA) durante la fase cerrada.",
      en: "Report bugs, test card balance, give constructive feedback and respect confidentiality (NDA) during the closed phase.",
    },
  },
]

export function pick(text: Bilingual, language: "es" | "en") {
  return text[language]
}
