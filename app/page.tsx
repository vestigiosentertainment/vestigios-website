"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Beaker, Layers, Download, Swords, Users, Bug, Feather, Crosshair, Moon, Monitor } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { BETA, pick } from "@/lib/beta"
import { BetaCountdown } from "@/components/beta/beta-countdown"
import { BetaRoadmap } from "@/components/beta/beta-roadmap"
import { BetaFaq } from "@/components/beta/beta-faq"
import { LiteYouTube } from "@/components/lite-youtube"
import { FactionShowcase } from "@/components/home/faction-showcase"
import { HowItWorks } from "@/components/home/how-it-works"

function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id?: string }) {
  return (
    <div className="mb-12 text-center">
      <span className="eyebrow mb-3 block">{eyebrow}</span>
      <h2 id={id} className="font-serif text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-blood-bright to-transparent" />
    </div>
  )
}

export default function HomePage() {
  const { t, language } = useLanguage()
  const es = language === "es"

  const latestNews = [
    {
      tag: es ? "Entrevista Fundador" : "Founder Interview",
      title: es
        ? "Jonathan Torres: «No estamos haciendo un juego, estamos creando un legado»"
        : "Jonathan Torres: «We are not making a game, we are creating a legacy»",
      date: "2026-07-26",
      image: "/dark-gothic-fantasy-world-blood-moon-castle-ruins-.jpg",
      href: "/legal/discover/articles/interview-jonathan-torres-CEO",
    },
    {
      tag: es ? "Diseño y Balance" : "Design & Balance",
      title: es
        ? "Ruki: «No creamos cartas para definir un meta, creamos un mundo»"
        : "Ruki: «We don't create cards to define a meta, we create a world»",
      date: "2026-03-03",
      image: "/dark-gothic-trading-card-game-cards-blood-and-shad.jpg",
      href: "/legal/discover/articles/interview-ruki",
    },
    {
      tag: es ? "Entrevista Narrativa" : "Narrative Interview",
      title: es
        ? "Meliza Castillo: «El horror no es la muerte, sino en lo que te conviertes»"
        : "Meliza Castillo: «Horror is not death, but what you become»",
      date: "2026-01-10",
      image: "/ancient-book-open-with-mystical-light-dark-library.jpg",
      href: "/legal/discover/articles/interview-meliza-castillo",
    },
  ]

  const pillars = [
    { icon: Feather, title: t("project.features.narrative.title"), text: t("project.features.narrative.desc"), stat: "5", statLabel: es ? "Facciones" : "Factions" },
    { icon: Crosshair, title: t("project.features.strategic.title"), text: t("project.features.strategic.desc"), stat: "230", statLabel: es ? "Cartas en el set base" : "Base set cards" },
    { icon: Moon, title: t("project.features.gothic.title"), text: t("project.features.gothic.desc"), stat: "1880", statLabel: es ? "Era victoriana gótica" : "Gothic Victorian era" },
  ]

  const betaPerks = [
    { icon: Swords, title: es ? "Juega antes que nadie" : "Play before anyone else", text: es ? "Acceso a la Beta cerrada y a las nuevas cartas antes del lanzamiento." : "Closed Beta access and new cards before launch." },
    { icon: Bug, title: es ? "Moldea el juego" : "Shape the game", text: es ? "Tus reportes y partidas definen el balance final del set base." : "Your reports and matches shape the final balance of the base set." },
    { icon: Users, title: es ? "Comunidad fundadora" : "Founding community", text: es ? "Contacto directo con el equipo de diseño y narrativa." : "Direct contact with the design and narrative team." },
  ]

  return (
    <div className="bg-black text-white">
      {/* --- HERO: BETA 2027 --- */}
      <section className="relative -mt-20 flex min-h-[100svh] items-center justify-center overflow-hidden">
        <Image src="/dark-gothic-castle-shrouded-in-mist-and-fog-atmosp.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,black_95%)]" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-28 text-center">
          <p className="mb-6 inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-blood/50 bg-blood/15 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-blood-bright backdrop-blur-sm">
            <span className="size-1.5 animate-pulse rounded-full bg-blood-bright" aria-hidden />
            {es ? `Beta cerrada · ${BETA.year}` : `Closed Beta · ${BETA.year}`}
          </p>

          <h1 className="mb-6 animate-fade-in-up font-serif text-5xl font-bold tracking-tight text-white drop-shadow-2xl [animation-delay:100ms] sm:text-7xl lg:text-8xl">
            {t("project.title")}
          </h1>

          <p className="mx-auto mb-10 max-w-2xl animate-fade-in-up text-xl text-gray-300 [animation-delay:200ms] md:text-2xl">
            {es
              ? "Un TCG de estrategia gótica. Cinco facciones, 230 cartas y una guerra por la sangre. Prepárate para la Beta."
              : "A gothic strategy TCG. Five factions, 230 cards and a war for blood. Get ready for the Beta."}
          </p>

          <div className="mb-12 flex animate-fade-in-up flex-col items-center justify-center gap-4 [animation-delay:300ms] sm:flex-row">
            <Link
              href="/join-tester"
              className="group inline-flex items-center gap-3 rounded-sm bg-blood px-10 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_30px_oklch(0.5_0.19_25/0.45)] transition hover:bg-blood-bright hover:shadow-[0_0_50px_oklch(0.62_0.21_25/0.6)]"
            >
              {es ? "Únete a la Beta" : "Join the Beta"}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
            <Link
              href="/legal/discover/rules"
              className="rounded-sm border border-white/30 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              {es ? "Aprender a jugar" : "Learn to Play"}
            </Link>
          </div>

          <div className="animate-fade-in-up [animation-delay:400ms]">
            <BetaCountdown />
          </div>
        </div>
      </section>

      {/* --- FACCIONES (pestañas) --- */}
      <FactionShowcase />

      {/* --- CÓMO FUNCIONA (modos de juego) --- */}
      <HowItWorks />

      {/* --- PILARES --- */}
      <section className="cv-auto border-t border-white/10 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={es ? "Por qué Vestigios" : "Why Vestigios"} title={es ? "Un TCG con alma" : "A TCG with a soul"} />
          <ul className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text, stat, statLabel }) => (
              <li key={title} className="reveal flex flex-col bg-black p-8 md:p-10">
                <Icon className="mb-6 size-8 text-blood-bright" aria-hidden />
                <h3 className="mb-3 font-serif text-2xl font-bold text-white">{title}</h3>
                <p className="mb-8 flex-1 leading-relaxed text-gray-400">{text}</p>
                <p className="border-t border-white/10 pt-6">
                  <span className="block font-serif text-4xl font-bold text-white">{stat}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-gray-500">{statLabel}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --- ROADMAP HACIA LA BETA --- */}
      <section className="border-t border-white/10 bg-zinc-950 px-4 py-24" aria-labelledby="roadmap-title">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow mb-3 block">{es ? "Camino a la Beta" : "Road to Beta"}</span>
              <h2 id="roadmap-title" className="font-serif text-4xl font-bold text-white md:text-5xl">
                {es ? `Hoja de ruta ${BETA.year}` : `${BETA.year} Roadmap`}
              </h2>
            </div>
            <Link href="/status" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 transition-colors hover:text-white">
              {es ? "Estado de desarrollo" : "Development status"} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <BetaRoadmap />
        </div>
      </section>

      {/* --- PROGRAMA BETA + FAQ --- */}
      <section className="relative overflow-hidden border-t border-white/10 px-4 py-28" aria-labelledby="beta-title">
        <div aria-hidden className="pointer-events-none absolute -right-40 top-0 size-[600px] rounded-full bg-blood/10 blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="eyebrow mb-3 block">{es ? "Programa de testers" : "Tester program"}</span>
            <h2 id="beta-title" className="mb-6 font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
              {es ? "La Beta se forja con su comunidad" : "The Beta is forged by its community"}
            </h2>
            <p className="mb-10 max-w-xl text-lg text-gray-400">
              {es
                ? "Estamos reclutando estrategas, cazadores de bugs y amantes del lore para la Beta cerrada. Las invitaciones se envían por oleadas."
                : "We are recruiting strategists, bug hunters and lore lovers for the Closed Beta. Invites are sent in waves."}
            </p>

            <ul className="mb-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {betaPerks.map(({ icon: Icon, title, text }) => (
                <li key={title} className="reveal">
                  <Icon className="mb-3 size-7 text-blood-bright" aria-hidden />
                  <h3 className="mb-1 font-serif font-bold text-white">{title}</h3>
                  <p className="text-sm text-gray-400">{text}</p>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/join-tester"
                className="inline-flex items-center gap-3 rounded-sm bg-blood px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-blood-bright"
              >
                <Beaker className="size-4" aria-hidden />
                {es ? "Postular como tester" : "Apply as a tester"}
              </Link>
              <a
                href={BETA.currentBuild.href}
                download
                className="inline-flex items-center gap-3 rounded-sm border border-white/20 px-6 py-4 text-sm font-bold uppercase tracking-widest text-gray-300 transition hover:border-white/40 hover:text-white"
              >
                <Download className="size-4" aria-hidden />
                <span>
                  {pick(BETA.currentBuild.label, language)}
                  <span className="ml-2 font-mono text-[10px] text-gray-500">{BETA.currentBuild.platform}</span>
                </span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-serif text-2xl font-bold text-white">{es ? "Preguntas frecuentes" : "FAQ"}</h3>
            <BetaFaq />
          </div>
        </div>
      </section>

      {/* --- TRAILER --- */}
      <section className="cv-auto relative overflow-hidden border-t border-white/10 bg-zinc-950/50 px-4 py-24">
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeading eyebrow={es ? "Universo Vestigios" : "Vestigios Universe"} title={es ? "Descubre la oscuridad" : "Discover the Darkness"} />
          <div className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-sm border border-white/10 shadow-[0_0_40px_oklch(0.5_0.19_25/0.15)]">
            <LiteYouTube id="77APjIIEGmc" title="Vestigios — Official Universe Introduction" playLabel={es ? "Reproducir" : "Play"} />
          </div>
        </div>
      </section>

      {/* --- GALERÍA DE CARTAS --- */}
      <section className="cv-auto relative overflow-hidden border-t border-white/10 bg-black py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <Layers className="mx-auto mb-4 size-6 text-blood-bright" aria-hidden />
          <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">{es ? "Galería de cartas" : "Card Gallery"}</h2>
          <p className="mx-auto mb-12 max-w-2xl text-gray-400">
            {es
              ? "Explora el spoiler visual completo. Estudia las sinergias, descubre el arte oscuro y prepara tu mazo para la Beta con las 230 cartas del set base."
              : "Explore the full visual spoiler. Study synergies, discover the dark art, and prepare your deck for the Beta with the 230 cards of the base set."}
          </p>

          <div className="mb-12 flex scale-75 items-center justify-center -space-x-12 md:scale-100 md:-space-x-8" aria-hidden>
            {[1, 2, 3, 4, 5].map((num, idx) => (
              <div
                key={num}
                className={`relative h-64 w-48 overflow-hidden rounded-lg border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:z-50 hover:-translate-y-6 md:h-80 md:w-56 ${idx === 2 ? "z-40 scale-110" : idx === 1 || idx === 3 ? "z-30 mt-8" : "z-20 mt-16 scale-90 opacity-70"}`}
              >
                <Image src={`/images/cards/ds-${String(num).padStart(3, "0")}.jpg`} alt="" fill sizes="224px" className="object-cover" />
              </div>
            ))}
          </div>

          <Link
            href="/cards"
            className="inline-flex items-center gap-3 border border-white/20 bg-white/5 px-12 py-5 text-sm font-bold uppercase tracking-widest text-white transition hover:border-blood-bright hover:bg-white/10"
          >
            {es ? "Ver las 230 cartas" : "View all 230 cards"}
          </Link>
        </div>
      </section>

      {/* --- NOTICIAS --- */}
      <section className="cv-auto border-t border-white/10 px-4 py-24" aria-labelledby="news-title">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 id="news-title" className="mb-2 font-serif text-4xl font-bold text-white">
                {es ? "Últimas noticias" : "Latest News"}
              </h2>
              <div className="h-1 w-20 bg-blood" />
            </div>
            <Link href="/legal/discover/articles" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 transition-colors hover:text-white">
              {es ? "Ver todo" : "View all"} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {latestNews.map((news) => (
              <Link
                key={news.href}
                href={news.href}
                className="reveal group block overflow-hidden rounded-sm border border-white/5 bg-zinc-900/50 transition-colors duration-300 hover:border-blood/60"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image src={news.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute left-4 top-4 border border-white/10 bg-black/80 px-3 py-1 font-mono text-xs uppercase tracking-wider text-white">
                    {news.tag}
                  </span>
                </div>
                <div className="p-6">
                  <time dateTime={news.date} className="mb-3 flex items-center gap-2 font-mono text-xs text-gray-500">
                    <Calendar className="size-3" aria-hidden />
                    {new Date(news.date + "T12:00:00").toLocaleDateString(es ? "es-CL" : "en-US", { dateStyle: "long" })}
                  </time>
                  <h3 className="font-serif text-xl font-bold leading-tight text-white transition-colors group-hover:text-blood-bright">{news.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="relative overflow-hidden border-t border-blood/40 px-4 py-28 text-center">
        <Image src="/dark-gothic-fantasy-world-blood-moon-castle-ruins-.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="mb-6 font-serif text-4xl font-bold text-white drop-shadow-[0_0_20px_oklch(0.5_0.19_25/0.6)] md:text-6xl">
            {es ? `El abismo se abrirá en ${BETA.year}` : `The abyss opens in ${BETA.year}`}
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-xl text-gray-300">
            {es
              ? "Reserva tu lugar en la Beta cerrada y sé de los primeros en pisar las sombras de Vestigios."
              : "Reserve your spot in the Closed Beta and be among the first to step into the shadows of Vestigios."}
          </p>
          <Link
            href="/join-tester"
            className="inline-flex items-center gap-3 rounded-sm bg-blood px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_40px_oklch(0.5_0.19_25/0.5)] transition hover:-translate-y-0.5 hover:bg-blood-bright"
          >
            <Beaker className="size-5" aria-hidden />
            {es ? "Únete a la Beta" : "Join the Beta"}
          </Link>
          <p className="mt-6 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-500">
            <Monitor className="size-4" aria-hidden /> Windows · {es ? "más plataformas por anunciar" : "more platforms TBA"}
          </p>
        </div>
      </section>
    </div>
  )
}
