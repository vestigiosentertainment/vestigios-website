"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Quote, Calendar, Share2, Download, Sparkles } from "lucide-react"

export default function InterviewJonathanTorres() {
  const { language } = useLanguage()

  const articleDate = language === "es" ? "27 de Enero, 2026" : "January 27, 2026"

  // --- TRADUCCIÓN Y ESTRUCTURA DE LA ENTREVISTA ---
  const interviewData = [
    {
      q: {
        es: "Jonathan, primero que todo, felicidades. Después de tantos años de trabajo finalmente llega la Alpha de Vestigios de Sangre Online. ¿Qué significa este momento para ti?",
        en: "Jonathan, first of all, congratulations. After so many years of work, the Alpha of Vestigios de Sangre Online is finally here. What does this moment mean to you?"
      },
      a: {
        es: [
          "Significa muchísimo más que lanzar un juego.",
          "Hace varios años esto empezó como una libreta llena de ideas. Nunca pensé que terminaría convirtiéndose en una empresa, en un universo completo y en un juego que otras personas pudieran descargar y jugar.",
          "Hubo momentos donde no tenía dinero, donde trabajaba solo, donde pensé que el proyecto jamás iba a salir. Pero siempre había algo que me hacía volver: la ilusión de crear un mundo propio.",
          "Esta Alpha representa que ese sueño dejó de ser solo mío. Ahora empieza a ser de todos los que quieran vivirlo."
        ],
        en: [
          "It means so much more than launching a game.",
          "Several years ago, this started as a notebook full of ideas. I never thought it would end up becoming a company, a complete universe, and a game that other people could download and play.",
          "There were times when I had no money, when I worked alone, when I thought the project would never see the light of day. But there was always something pulling me back: the illusion of creating my own world.",
          "This Alpha represents that this dream is no longer just mine. Now it begins to belong to everyone who wants to experience it."
        ]
      }
    },
    {
      q: {
        es: "¿Cómo nació Vestigios de Sangre?",
        en: "How was Vestigios de Sangre born?"
      },
      a: {
        es: [
          "Siempre me apasionaron los mundos que se sienten vivos. Crecí admirando franquicias como Final Fantasy, Assassin's Creed, Metal Gear Solid o JoJo's Bizarre Adventure. Más que sus mecánicas, me fascinaba cómo construían universos donde cada personaje tenía un propósito.",
          "Con Vestigios quise hacer lo mismo.",
          "No quería crear solamente un juego de cartas. Quería crear un universo que pudiera convertirse en novelas, videojuegos, series, juegos de mesa... un mundo donde cada historia tuviera sentido.",
          "Vestigios de Sangre simplemente fue la primera puerta para entrar a ese universo."
        ],
        en: [
          "I have always been passionate about worlds that feel alive. I grew up admiring franchises like Final Fantasy, Assassin's Creed, Metal Gear Solid, or JoJo's Bizarre Adventure. More than their mechanics, I was fascinated by how they built universes where every character had a purpose.",
          "With Vestigios I wanted to do the same.",
          "I didn't want to just create a card game. I wanted to create a universe that could become novels, video games, series, board games... a world where every story made sense.",
          "Vestigios de Sangre was simply the first door to enter that universe."
        ]
      }
    },
    {
      q: {
        es: "¿Qué es exactamente Vestigios de Sangre?",
        en: "What exactly is Vestigios de Sangre?"
      },
      a: {
        es: [
          "Es un juego de cartas estratégico donde cada decisión importa.",
          "Aquí no ganas porque robaste la mejor carta. Ganas porque supiste administrar tus recursos, leer a tu rival y planificar varios turnos adelante.",
          "Pero también es una historia.",
          "Detrás de cada carta existe un personaje, una ciudad, una guerra, una tragedia y una razón por la cual existe.",
          "Queremos que cuando alguien abra una carta no vea solamente estadísticas. Queremos que vea una parte del mundo de Vestigios."
        ],
        en: [
          "It is a strategic card game where every decision matters.",
          "Here you don't win because you drew the best card. You win because you knew how to manage your resources, read your opponent, and plan several turns ahead.",
          "But it is also a story.",
          "Behind every card there is a character, a city, a war, a tragedy, and a reason why it exists.",
          "We want that when someone opens a card, they don't just see stats. We want them to see a piece of the Vestigios world."
        ]
      }
    },
    {
      q: {
        es: "¿Qué hace diferente a Vestigios de otros TCG?",
        en: "What makes Vestigios different from other TCGs?"
      },
      a: {
        es: [
          "No buscamos copiar a nadie.",
          "Tomamos inspiración de muchos juegos porque sería absurdo decir que no aprendimos de ellos, pero cada mecánica que existe en Vestigios está ahí porque aporta algo al juego.",
          "No tenemos un sistema tradicional de maná. Las partidas son mucho más dinámicas. Queremos reducir el factor suerte y aumentar la toma de decisiones.",
          "Nuestro objetivo siempre ha sido que si pierdes, sientas que fue porque tu rival jugó mejor, no porque robó mejor."
        ],
        en: [
          "We are not looking to copy anyone.",
          "We took inspiration from many games because it would be absurd to say we didn't learn from them, but every mechanic that exists in Vestigios is there because it adds something to the game.",
          "We don't have a traditional mana system. Matches are much more dynamic. We want to reduce the luck factor and increase decision-making.",
          "Our goal has always been that if you lose, you feel it was because your opponent played better, not because they drew better."
        ]
      }
    },
    {
      q: {
        es: "El universo parece muy importante para ustedes.",
        en: "The universe seems very important to you."
      },
      a: {
        es: [
          "Para mí es lo más importante.",
          "Si mañana desaparecieran todas las cartas, Vestigios seguiría existiendo. Porque primero construimos un mundo. Las cartas son solo una manera de explorarlo.",
          "Hay personajes que todavía nadie conoce. Historias que todavía nadie ha visto.",
          "Y este es apenas el comienzo."
        ],
        en: [
          "To me, it is the most important thing.",
          "If all the cards disappeared tomorrow, Vestigios would still exist. Because we built a world first. The cards are just one way to explore it.",
          "There are characters that no one knows yet. Stories that no one has seen yet.",
          "And this is just the beginning."
        ]
      }
    },
    {
      q: {
        es: "¿Por qué lanzar una Alpha?",
        en: "Why launch an Alpha?"
      },
      a: {
        es: [
          "Porque ningún desarrollador puede reemplazar a miles de jugadores.",
          "Nosotros podemos probar el juego cien veces. Pero la comunidad va a jugarlo de maneras que jamás imaginamos.",
          "Van a encontrar errores. Van a descubrir estrategias. Van a romper mecánicas. Y eso es exactamente lo que necesitamos.",
          "Queremos que cuando llegue la versión final sea porque pasó por las manos de quienes realmente la van a disfrutar."
        ],
        en: [
          "Because no developer can replace thousands of players.",
          "We can test the game a hundred times. But the community is going to play it in ways we never imagined.",
          "They will find bugs. They will discover strategies. They will break mechanics. And that is exactly what we need.",
          "We want the final version to arrive only after it has passed through the hands of those who will truly enjoy it."
        ]
      }
    },
    {
      q: {
        es: "¿Qué encontrarán los jugadores en esta Alpha?",
        en: "What will players find in this Alpha?"
      },
      a: {
        es: [
          "Encontrarán el corazón del juego.",
          "Van a poder jugar partidas completas, conocer las primeras cartas, aprender las mecánicas principales y descubrir el universo de Vestigios.",
          "Todavía faltan muchas cosas. Habrá errores. Habrá contenido incompleto.",
          "Pero lo importante ya está. Ya se puede jugar. Y eso para nosotros significa muchísimo."
        ],
        en: [
          "They will find the heart of the game.",
          "They will be able to play complete matches, meet the first cards, learn the core mechanics, and discover the universe of Vestigios.",
          "There are still many things missing. There will be bugs. There will be incomplete content.",
          "But the important part is already there. It is playable. And that means the world to us."
        ]
      }
    },
    {
      q: {
        es: "¿Qué esperan descubrir gracias a la comunidad?",
        en: "What do you hope to discover thanks to the community?"
      },
      a: {
        es: [
          "Todo.",
          "No solo bugs. Queremos saber qué cartas gustan más. Qué partidas se sienten divertidas. Qué mecánicas sobran. Cuáles faltan.",
          "Queremos escuchar tanto las críticas como los elogios.",
          "Porque al final este juego no va a vivir gracias a nosotros. Va a vivir gracias a su comunidad."
        ],
        en: [
          "Everything.",
          "Not just bugs. We want to know which cards people like the most. Which matches feel fun. Which mechanics are unnecessary. Which ones are missing.",
          "We want to hear both the criticism and the praise.",
          "Because ultimately, this game won't live thanks to us. It will live thanks to its community."
        ]
      }
    },
    {
      q: {
        es: "¿Qué le dirías a quienes encuentren errores?",
        en: "What would you say to those who find bugs?"
      },
      a: {
        es: [
          "Que nos los envíen todos. De verdad.",
          "No nos molesta. Al contrario. Cada error reportado significa un juego mejor.",
          "Esta Alpha existe justamente para eso. No buscamos aparentar que somos perfectos. Buscamos construir algo grande. Y eso requiere escuchar."
        ],
        en: [
          "Send them all to us. Really.",
          "It doesn't bother us. On the contrary. Every reported bug means a better game.",
          "This Alpha exists precisely for that. We are not trying to pretend we are perfect. We are trying to build something great. And that requires listening."
        ]
      }
    },
    {
      q: {
        es: "¿Quién debería jugar esta Alpha?",
        en: "Who should play this Alpha?"
      },
      a: {
        es: [
          "Todos.",
          "Si eres veterano de los juegos de cartas, queremos desafiarte. Si nunca has jugado uno, queremos demostrarte que este género puede ser divertido.",
          "No importa si vienes de Hearthstone, Yu-Gi-Oh!, Magic, Pokémon o si jamás tocaste un TCG.",
          "Queremos que pruebes Vestigios con la mente abierta."
        ],
        en: [
          "Everyone.",
          "If you are a veteran of card games, we want to challenge you. If you have never played one, we want to show you that this genre can be fun.",
          "It doesn't matter if you come from Hearthstone, Yu-Gi-Oh!, Magic, Pokémon, or if you've never touched a TCG.",
          "We want you to try Vestigios with an open mind."
        ]
      }
    },
    {
      q: {
        es: "¿Cómo puede ayudar la comunidad?",
        en: "How can the community help?"
      },
      a: {
        es: [
          "Jugando. Reportando errores. Compartiendo partidas. Invitando amigos.",
          "Dándonos su opinión, incluso cuando no estén de acuerdo con nosotros.",
          "Las mejores comunidades no se construyen diciendo que todo está perfecto. Se construyen conversando."
        ],
        en: [
          "By playing. Reporting bugs. Sharing matches. Inviting friends.",
          "Giving us their opinion, even when they disagree with us.",
          "The best communities are not built by saying everything is perfect. They are built by talking."
        ]
      }
    },
    {
      q: {
        es: "¿Qué viene después de la Alpha?",
        en: "What comes after the Alpha?"
      },
      a: {
        es: [
          "Muchísimo.",
          "Nuevas facciones. Más cartas. Modo espectador. Rankeds. Eventos. Historia. Cooperativo. Y muchas sorpresas que todavía no queremos revelar.",
          "Vestigios está pensado para crecer durante muchos años. La Alpha es apenas el primer paso."
        ],
        en: [
          "A lot.",
          "New factions. More cards. Spectator mode. Ranked matches. Events. Story mode. Co-op. And many surprises we don't want to reveal yet.",
          "Vestigios is designed to grow for many years. The Alpha is just the first step."
        ]
      }
    },
    {
      q: {
        es: "Desarrollar un juego independiente nunca es fácil. ¿Cómo ha sido este camino?",
        en: "Developing an independent game is never easy. How has this journey been?"
      },
      a: {
        es: [
          "Ha sido probablemente la experiencia más difícil de mi vida.",
          "Programar. Diseñar. Escribir. Buscar artistas. Buscar financiamiento. Aprender cosas que nunca imaginé aprender.",
          "Muchas veces trabajé completamente solo. Y otras veces personas increíbles decidieron creer en esta locura.",
          "A todas ellas les debo muchísimo."
        ],
        en: [
          "It has probably been the most difficult experience of my life.",
          "Programming. Designing. Writing. Looking for artists. Looking for funding. Learning things I never imagined learning.",
          "Many times I worked completely alone. And other times incredible people decided to believe in this madness.",
          "I owe all of them so much."
        ]
      }
    },
    {
      q: {
        es: "¿Pensaste alguna vez en abandonar?",
        en: "Did you ever think about quitting?"
      },
      a: {
        es: [
          "Sí. Más veces de las que me gustaría admitir.",
          "Pero siempre llegaba a la misma conclusión.",
          "Si abandono, este mundo desaparece conmigo. Y sentía que todavía tenía demasiadas historias por contar. Así que seguí."
        ],
        en: [
          "Yes. More times than I'd like to admit.",
          "But I always came to the same conclusion.",
          "If I quit, this world disappears with me. And I felt like I still had too many stories to tell. So I kept going."
        ]
      }
    },
    {
      q: {
        es: "¿Cuál es tu sueño con Vestigios?",
        en: "What is your dream for Vestigios?"
      },
      a: {
        es: [
          "No sueño con hacer solamente un juego exitoso. Sueño con crear una franquicia.",
          "Que dentro de veinte años alguien vea un personaje de Vestigios y lo reconozca igual como hoy reconocemos a Cloud, Ezio Auditore, Solid Snake o Jotaro Kujo.",
          "Sueño con que un niño juegue Vestigios por primera vez y años después diga: 'Este fue el juego que marcó mi infancia.'",
          "Si algún día logramos eso... Todo este esfuerzo habrá valido la pena."
        ],
        en: [
          "I don't dream of just making a successful game. I dream of creating a franchise.",
          "That in twenty years someone will see a character from Vestigios and recognize them just as we recognize Cloud, Ezio Auditore, Solid Snake, or Jotaro Kujo today.",
          "I dream of a child playing Vestigios for the first time and years later saying: 'This was the game that marked my childhood.'",
          "If we ever achieve that... All this effort will have been worth it."
        ]
      }
    },
    {
      q: {
        es: "Para terminar... ¿qué le dirías a todas las personas que están viendo esta entrevista?",
        en: "To finish... what would you say to everyone reading this interview?"
      },
      a: {
        es: [
          "Quiero invitarlos personalmente.",
          "Vestigios de Sangre entra oficialmente en su fase Alpha y, desde hoy, ustedes pueden ser parte de este proyecto.",
          "No queremos que simplemente descarguen un juego. Queremos que nos acompañen desde el principio, que descubran este mundo, que lo pongan a prueba y que nos ayuden a convertirlo en algo mucho más grande.",
          "Cada partida que jueguen, cada error que reporten, cada comentario que nos dejen, nos acerca un poco más a la versión que soñamos construir.",
          "Esta Alpha no es el final del desarrollo. Es el comienzo de una comunidad.",
          "Gracias a todos los que han esperado durante estos años, a quienes recién nos conocen y a quienes decidan darnos una oportunidad.",
          "Nos vemos muy pronto en el campo de batalla. Bienvenidos a Vestigios de Sangre."
        ],
        en: [
          "I want to invite you personally.",
          "Vestigios de Sangre officially enters its Alpha phase, and starting today, you can be part of this project.",
          "We don't want you to simply download a game. We want you to join us from the beginning, to discover this world, to test it, and to help us turn it into something much bigger.",
          "Every match you play, every bug you report, every comment you leave us, brings us a little closer to the version we dream of building.",
          "This Alpha is not the end of development. It is the beginning of a community.",
          "Thank you to everyone who has waited over these years, to those who are just getting to know us, and to those who decide to give us a chance.",
          "See you very soon on the battlefield. Welcome to Vestigios de Sangre."
        ]
      }
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white pt-24 pb-20">
      
      {/* HEADER / HERO DE LA ENTREVISTA */}
      <header className="relative w-full h-[60vh] md:h-[70vh] flex items-end justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dark-gothic-fantasy-world-blood-moon-castle-ruins-.jpg" 
            alt="Vestigios Atmosphere"
            fill
            className="object-cover opacity-40 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl w-full px-4 pb-12">
          <Link 
            href="/legal/discover/articles" 
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition-colors uppercase tracking-wider font-mono mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {language === "es" ? "Volver a Artículos" : "Back to Articles"}
          </Link>

          <div className="flex items-center gap-3 text-red-500 font-mono text-xs uppercase tracking-widest mb-4">
            <span className="bg-red-950/50 px-2 py-1 border border-red-900/50 rounded-sm">
              {language === "es" ? "Entrevista Fundador" : "Founder Interview"}
            </span>
            <span className="flex items-center gap-1.5 text-gray-400">
              <Calendar className="w-3 h-3" /> {articleDate}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight text-balance">
            {language === "es" 
              ? "Jonathan Torres: «No estamos haciendo un juego, estamos creando un legado»" 
              : "Jonathan Torres: «We are not making a game, we are creating a legacy»"}
          </h1>
        </div>
      </header>

      {/* CUERPO DEL ARTÍCULO */}
      <main className="max-w-3xl mx-auto px-4 relative">
        
        {/* Quote Destacada */}
        <div className="relative my-12 py-8 px-6 md:px-10 bg-zinc-900/30 border-l-4 border-red-800 rounded-r-lg">
          <Quote className="absolute top-4 left-4 w-12 h-12 text-red-900/20 rotate-180" />
          <p className="relative z-10 text-xl md:text-2xl font-serif font-light text-gray-200 italic leading-relaxed text-pretty">
            {language === "es" 
              ? "«No estamos lanzando un juego terminado. Estamos invitando a la comunidad a construir su historia junto a nosotros.»"
              : "«We are not launching a finished game. We are inviting the community to build their story alongside us.»"}
          </p>
        </div>

        {/* Entrevista Q&A */}
        <article className="space-y-12">
          {interviewData.map((item, index) => (
            <div key={index} className="space-y-4">
              {/* Pregunta del Entrevistador */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-serif font-bold text-gray-500">Q</span>
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 mb-1">
                    {language === "es" ? "Entrevistador" : "Interviewer"}
                  </h3>
                  <p className="text-lg md:text-xl font-bold text-white font-serif leading-relaxed">
                    {language === "es" ? item.q.es : item.q.en}
                  </p>
                </div>
              </div>

              {/* Respuesta de Jonathan */}
              <div className="flex gap-4 items-start pl-4 md:pl-8 border-l border-white/5 ml-5 md:ml-5 pt-2">
                <div className="w-10 h-10 rounded-full bg-red-950/40 border border-red-900/50 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-serif font-bold text-red-500">J</span>
                </div>
                <div className="space-y-4 w-full">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">
                    Jonathan Torres
                  </h3>
                  <div className="space-y-4">
                    {(language === "es" ? item.a.es : item.a.en).map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-base md:text-lg text-gray-300 font-light leading-relaxed text-pretty">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </article>

        {/* Separador Final */}
        <div className="my-16 flex items-center justify-center gap-4">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-red-900/50" />
          <Sparkles className="w-5 h-5 text-red-800" />
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-red-900/50" />
        </div>

        {/* Caja de Llamado a la Acción (Descarga) */}
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-8 md:p-12 text-center rounded-sm shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/dark-gothic-trading-card-game-cards-blood-and-shad.jpg')] bg-cover opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              {language === "es" ? "El Abismo se ha Abierto" : "The Abyss Has Opened"}
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto text-pretty">
              {language === "es" 
                ? "Únete a Jonathan y a miles de jugadores en la primera prueba oficial de Vestigios. El cliente ya está disponible para descargar."
                : "Join Jonathan and thousands of players in the first official test of Vestigios. The client is now available for download."}
            </p>
            <a 
              href="/Vestigios_de_Sangre.rar" 
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-800 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
            >
              <Download className="w-5 h-5" />
              {language === "es" ? "Descargar Alpha 1.0" : "Download Alpha 1.0"}
            </a>
          </div>
        </div>

      </main>
    </div>
  )
}
