"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowLeft, Clock, Share2, Skull, Feather } from "lucide-react"

export default function GenesisLorePage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-gray-300 font-serif selection:bg-red-900 selection:text-white pb-20">
      
      {/* HEADER / NAV SIMPLIFICADA */}
      <nav className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-black/90 backdrop-blur-md z-50">
        <Link href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-widest font-sans font-bold">
            <ArrowLeft className="w-4 h-4" /> 
            {language === "es" ? "Volver al Inicio" : "Back to Home"}
        </Link>
        <span className="text-red-600 font-bold tracking-widest text-xs uppercase">Vestigios de Sangre Lore</span>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <article className="max-w-3xl mx-auto px-6 mt-16 md:mt-24">
        
        {/* Encabezado del Artículo */}
        <header className="mb-12 text-center">
            <div className="inline-block px-3 py-1 border border-red-900/50 rounded-full bg-red-900/10 text-red-500 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                Génesis
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {language === "es" ? "La Gran Fractura" : "The Great Fracture"}
            </h1>
            <div className="flex justify-center items-center gap-6 text-sm text-gray-500 font-sans">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 5 min read</span>
                <span className="w-1 h-1 bg-gray-700 rounded-full" />
                <span>{language === "es" ? "Historia Principal" : "Main Storyline"}</span>
            </div>
        </header>

        {/* Separador */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

        {/* Cuerpo del Texto */}
        <div className="prose prose-invert prose-lg mx-auto prose-p:leading-relaxed prose-strong:text-white">
            
            {/* --- SECCIÓN 1: EL ORIGEN --- */}
            {language === "es" ? (
              <>
                <p className="lead text-xl text-white italic opacity-90 mb-8 border-l-4 border-red-800 pl-6 py-2">
                  "Antes de todo lo que conocemos —incluso antes de que este mundo existiera, cuando todo era uno—, yacía en el estéril universo un cristal colosal, gélido y semitraslúcido, que albergaba un corazón ardiente y palpitante de oro y carmín: un corazón que fluía como el magma."
                </p>
                <p>
                  Era una prisión perfecta donde el secreto de la vida y la creación permanecía atrapado en silencio. Algunos lo llamaron <strong className="text-red-400">«Vestigio Primordial»</strong>, otros <strong className="text-red-400">«Vestigio Madre»</strong>.
                </p>
                <p>
                  Pero al corazón no le bastaba con existir; no había nacido para la quietud. Su deseo era claro: expansión, trascendencia.
                </p>
                <p>
                  La superficie del cristal se veteó de grietas que brillaban con una luz cegadora mientras, desde su núcleo, exudaban ríos furiosos de oro líquido. Y luego, una detonación tan violenta que el sonido llegó mucho después del impacto: un gemido titánico y sordo que habría hecho vibrar los dientes y los huesos de cualquier ser a sistemas solares de distancia.
                </p>
                <p>
                  El icor de su interior se expandió como una flor abriéndose en un parpadeo febril. El choque térmico entre el núcleo ardiente y el vacío creó relámpagos y esquirlas del tamaño de continentes que fueron disparadas hacia la negrura. Estos fueron los <strong className="text-white">«vestigios elementales»</strong>, núcleos de mundos por nacer. Tras ellos cayeron los <strong className="text-white">«vestigios menores»</strong> sembrándose en la tierra; algunos se rompieron al contacto con la superficie, sangrando sobre el suelo y haciendo florecer la vida.
                </p>
                <p className="text-red-100/80 border-t border-red-900/30 pt-4 mt-6">
                  Fue como ver a una estrella devorarse a sí misma: un estallido de azul ártico y oro infernal pintando el lienzo de la nada.
                </p>
              </>
            ) : (
              <>
                <p className="lead text-xl text-white italic opacity-90 mb-8 border-l-4 border-red-800 pl-6 py-2">
                  "Before everything we know—even before this world existed, when all was one—there lay in the sterile universe a colossal crystal, frigid and semi-translucent, housing a burning, beating heart of gold and carmine: a heart that flowed like magma."
                </p>
                <p>
                  It was a perfect prison where the secret of life and creation remained trapped in silence. Some called it the <strong className="text-red-400">"Primordial Vestige,"</strong> others the <strong className="text-red-400">"Mother Vestige."</strong>
                </p>
                <p>
                  But mere existence was not enough for the heart; it was not born for stillness. Its desire was clear: expansion, transcendence.
                </p>
                <p>
                  The crystal's surface became veined with cracks shining with blinding light while, from its core, furious rivers of liquid gold exuded. And then, a detonation so violent that the sound arrived long after the impact: a titanic, dull moan that would have rattled the teeth and bones of any being solar systems away.
                </p>
                <p>
                  The ichor within expanded like a flower opening in a feverish blink. The thermal shock between the burning core and the void created lightning and continent-sized shards that were shot into the blackness. These were the <strong className="text-white">"elemental vestiges,"</strong> cores of worlds yet to be born. Following them fell the <strong className="text-white">"minor vestiges,"</strong> seeding themselves into the earth; some broke upon contact with the surface, bleeding onto the ground and causing life to bloom.
                </p>
                <p className="text-red-100/80 border-t border-red-900/30 pt-4 mt-6">
                  It was like watching a star devour itself: a burst of arctic blue and infernal gold painting the canvas of nothingness.
                </p>
              </>
            )}

            {/* Separador interno decorativo */}
            <div className="flex justify-center my-12 opacity-50">
                <Skull className="w-6 h-6 text-red-900" />
            </div>

            {/* --- SECCIÓN 1.5: EL MUNDO ACTUAL (1880) --- */}
            {language === "es" ? (
                <div className="mb-12">
                    <p>
                        Nos encontramos en un 1880 en decadencia. Este mundo es esclavo de la industrialización masiva y de avances —tanto tecnológicos como científicos— que rozan, muchas veces, la herejía. Es un reino de adoquines húmedos y chimeneas humeantes que decoran el horizonte. Aquí, la sociedad no es un orden, sino una pirámide de depredadores.
                    </p>
                </div>
            ) : (
                <div className="mb-12">
                    <p>
                        We find ourselves in a decaying 1880. This world is a slave to massive industrialization and advancements—both technological and scientific—that often border on heresy. It is a realm of damp cobblestones and smoking chimneys decorating the horizon. Here, society is not an order, but a pyramid of predators.
                    </p>
                </div>
            )}


            {/* --- SECCIÓN 2: LA JERARQUÍA --- */}
            <h2 className="text-3xl text-white font-bold text-center mb-8">{language === "es" ? "La Jerarquía de la Noche" : "The Hierarchy of the Night"}</h2>

            {/* ========================================== */}
            {/* VAMPIROS (TEXTO EXTENDIDO) */}
            {/* ========================================== */}
            <h3 className="text-red-500 font-sans text-sm font-bold uppercase tracking-[0.2em] border-b border-red-900/30 pb-2 mt-12 mb-4">
                I. {language === "es" ? "Los Eternos (Vampiros)" : "The Eternals (Vampires)"}
            </h3>
            
            {language === "es" ? (
                <div className="space-y-4">
                    <p>
                        Poseen muchos nombres, pero entre los que más han resonado a lo largo de la densa historia están Los Eternos y Señores de la Sangre. Sin embargo, hay un solo nombre que últimamente se escupe de las bocas que destilan ginebra, de las bocas en donde sus alientos delatan lo podrido de sus dientes e, incluso de bocas refinadas que beben té y que fuman buen tabaco; aquel nombre despojado de nobleza, vulgar y que no esconde ser un insulto con sabor a hierro y desprecio: vampiro.
                    </p>
                    <p>
                        Son aristócratas de piel pálida y grisácea, donde la temperatura de sus cuerpos y la falta de pulso son la respuesta clara a que el soplo de la vida los ha abandonado ya hace quién sabe cuánto tiempo. Su burla a la muerte les ha hecho autoproclamarse herederos de un derecho divino, pero su corona es el peso de los siglos que han devorado su capacidad de asombro.
                    </p>
                    <p>
                        Sus juegos de poder y refinada crueldad son, en realidad un intento ahogado de despertar un corazón que dejó de latir hace eras y de estimular sus nervios marchitos. La erosión del tiempo se refleja en sus pupilas como un abismo vítreo que crece con cada década: un vacío que consume luz y humanidad con un hambre que nada puede saciar.
                    </p>
                    <p>
                        Gobiernan desde las sombras por una gélida y calculadora necesidad, moviendo los hilos de las naciones como si el mundo fuese su tablero de ajedrez. Han erigido sus imperios sobre la sangre de la tierra con la paciencia de quien no tiene la prisa por morir, cultivando y acumulando poder, riquezas y secretos. Saben muy bien que la paz no es más que un subproducto del terror que han sembrado en los cimientos del mundo.
                    </p>
                    <p className="italic text-gray-400 border-l-2 border-red-900/50 pl-4">
                        Dicen que el Primer Maldito fue uno de ellos: una raíz podrida, la primera mancha del mundo. Y aunque todo lo que se sabe de él se basa en leyendas fragmentadas que el tiempo ha devorado, no se debe olvidar que las leyendas no son cuentos de cuna; son ecos de una verdad que se niega a morir y que siguen susurrando su nombre.
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    <p>
                        They possess many names, but among those that have resonated most throughout dense history are The Eternals and Lords of Blood. However, there is only one name lately spat from mouths distilling gin, from mouths where breath betrays the rot of teeth, and even from refined mouths sipping tea and smoking fine tobacco; a name stripped of nobility, vulgar, hiding no insult, tasting of iron and contempt: vampire.
                    </p>
                    <p>
                        They are aristocrats of pale, grayish skin, where their body temperature and lack of pulse are the clear answer that the breath of life abandoned them who knows how long ago. Their mockery of death has made them self-proclaimed heirs to a divine right, but their crown is the weight of centuries that have devoured their capacity for wonder.
                    </p>
                    <p>
                        Their power games and refined cruelty are, in reality, a drowned attempt to awaken a heart that stopped beating eras ago and to stimulate withered nerves. The erosion of time is reflected in their pupils as a vitreous abyss growing with each decade: a void consuming light and humanity with a hunger nothing can sate.
                    </p>
                    <p>
                        They rule from the shadows out of frigid, calculating necessity, pulling the strings of nations as if the world were their chessboard. They have erected their empires upon the blood of the earth with the patience of those in no rush to die, cultivating and accumulating power, wealth, and secrets. They know well that peace is but a byproduct of the terror they have sown in the world's foundations.
                    </p>
                    <p className="italic text-gray-400 border-l-2 border-red-900/50 pl-4">
                        They say the First Cursed was one of them: a rotten root, the world's first stain. And although all that is known of him is based on fragmented legends devoured by time, one must not forget that legends are not lullabies; they are echoes of a truth refusing to die, still whispering his name.
                    </p>
                </div>
            )}

            {/* ========================================== */}
            {/* CAZADORES (TEXTO EXTENDIDO) */}
            {/* ========================================== */}
            <h3 className="text-red-500 font-sans text-sm font-bold uppercase tracking-[0.2em] border-b border-red-900/30 pb-2 mt-12 mb-4">
                II. {language === "es" ? "Los Cazadores" : "The Hunters"}
            </h3>

            {language === "es" ? (
                <div className="space-y-4">
                    <p>
                        Maestros del acero frío y la pólvora: hombres que miraron demasiado tiempo al abismo hasta que el abismo les devolvió la mirada echando raíces en sus propias venas. Vendieron su alma por la fuerza para matar, contrayendo una adicción febril: la cacería. Su sed de sangre rivaliza con la de los monstruos que persiguen.
                    </p>
                    <p>
                        La destreza que poseen no reside solamente en la fuerza bruta, ni su habilidad casi divina con todo tipo de armas, sino en una inteligencia fría y calculadora. Son eruditos de lo macabro, con un conocimiento enciclopédico de anatomía y necropsia de las criaturas que acechan este mundo; incluso de aquellas que el resto ni siquiera ha visto en sus pesadillas más oscuras. Si bien su saber de la botánica y alquimia no es tan vasto, saben perfectamente que, en las manos correctas, cada recurso tiene un potencial y es útil.
                    </p>
                    <p>
                        En combate, su visión táctica es sobrehumana. Se adaptan e improvisan con facilidad, por lo que tomarlos por sorpresa es sumamente difícil; guiados por un instinto que roza lo sobrenatural, cada paso que dan está milimétricamente evaluado. Asesinos a sueldo que no discriminan la naturaleza de su objetivo: mientras haya sangre que derramar y una buena paga, el contrato está sellado.
                    </p>
                    <p>
                        Nadie sabe de dónde brotan tales atributos. Cuando los ven pasar con pasos firmes y pesados, y una mirada endurecida, en las calles, solo existen los rumores y mitos que susurran sobre rituales prohibidos, drogas o experimentos viles.
                    </p>
                    <p>
                        Depredadores solitarios con una especialización obsesiva, poseen un ritual de ejecución que cada uno ha refinado como una extensión de su alma marchita: la elegancia de una garganta seccionada, o el horror de una bestia desgarrada sin control. Demasiado distintos, demasiado deformados.
                    </p>
                    <p className="text-red-200 border-t border-red-900/30 pt-4">
                        Sin embargo, hay un temor que une a su estirpe, un horror más profundo que la misma muerte: el llamado de la sangre. Cuando un Cazador no regresa de una cacería, los suyos no lloran su cadáver. Saben que la matanza es un parásito que se alberga en la médula; es como una vil garrapata que clava sin piedad su hipóstomo mientras sus garras abrazan fervientemente sus vértebras, exigiendo tributos cada vez más brutales y frecuentes. Así sucumbiendo y extinguiendo su humanidad por completo quedando solo el hambre.
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    <p>
                        Masters of cold steel and gunpowder: men who stared too long into the abyss until the abyss stared back, taking root in their very veins. They sold their souls for the strength to kill, contracting a feverish addiction: the hunt. Their bloodlust rivals that of the monsters they pursue.
                    </p>
                    <p>
                        The dexterity they possess lies not only in brute force, nor in their almost divine skill with all manner of weapons, but in a cold and calculating intelligence. They are scholars of the macabre, with an encyclopedic knowledge of the anatomy and necropsy of the creatures stalking this world; even those the rest have not seen in their darkest nightmares. While their knowledge of botany and alchemy is not as vast, they know perfectly well that, in the right hands, every resource has potential and utility.
                    </p>
                    <p>
                        In combat, their tactical vision is superhuman. They adapt and improvise with ease, making them extremely difficult to catch by surprise; guided by an instinct bordering on the supernatural, every step they take is calculated to the millimeter. Hired killers who do not discriminate regarding the nature of their target: as long as there is blood to spill and good pay, the contract is sealed.
                    </p>
                    <p>
                        No one knows where such attributes spring from. When they are seen passing through the streets with heavy, firm steps and hardened gazes, there are only rumors and myths whispering of forbidden rituals, drugs, or vile experiments.
                    </p>
                    <p>
                        Solitary predators with obsessive specialization, they possess an execution ritual that each has refined as an extension of their withered soul: the elegance of a severed throat, or the horror of a beast torn apart without control. Too distinct, too deformed.
                    </p>
                    <p className="text-red-200 border-t border-red-900/30 pt-4">
                        However, there is a fear that unites their lineage, a horror deeper than death itself: the call of the blood. When a Hunter does not return from a hunt, his kin do not mourn his corpse. They know the slaughter is a parasite harbored in the marrow; like a vile tick driving its hypostome without mercy while its claws fervently embrace their vertebrae, demanding ever more brutal and frequent tributes. Thus succumbing and extinguishing their humanity completely, leaving only the hunger.
                    </p>
                </div>
            )}

            {/* ========================================== */}
            {/* BRUJAS (TEXTO EXTENDIDO) */}
            {/* ========================================== */}
            <h3 className="text-red-500 font-sans text-sm font-bold uppercase tracking-[0.2em] border-b border-red-900/30 pb-2 mt-12 mb-4">
                III. {language === "es" ? "Las Brujas" : "The Witches"}
            </h3>
            
            {language === "es" ? (
                <div className="space-y-4">
                    <p>
                        Su poder no es un don, sino una mutilación consentida. El mito susurra pactos con demonios, pero la verdad es más cruda y visceral: cada bruja debe entregarse en un intercambio equivalente de agonía y esencia. No hay magia en sus manos que no haya sido comprada con un tributo de su propia carne. Por ello, sus servicios jamás se compran con fe.
                    </p>
                    <p>
                        Negociar con ellas es caminar descalzo sobre el filo de una navaja tan afilada que te desangra por el simple hecho de sostenerte en pie. El precio de su ayuda parece siempre devorar más de lo que el desgraciado pretendía ofrecer. No buscan justicia ni equilibrio; solo saciar una ambición rancia y caprichos que nacen de los rincones más infectados de su deseo. Su intelecto no es solo una biblioteca, sino también un compendio de secretos capaces de derribar imperios o condenar un alma antes de que el corazón deje de latir.
                    </p>
                    <p>
                        Si el origen de su poder es perturbador, la comunión con su familiar es una aberración biológica. No poseen mascotas, sino anclas de carne. En un acto de metamorfosis grotesca, el cuerpo de la bruja se deshace como cera bajo el fuego para recomponerse en la forma de su criatura vinculada. Es un espectáculo donde los huesos crujen y se observa cómo cada capa de tejido se forma hasta que la piel y pelaje lo cubren todo; una coreografía de horror donde la mujer se disuelve y, de sus restos, renace como bestia.
                    </p>
                    <p className="text-red-200 border-t border-red-900/30 pt-4">
                        Se mueven con la misma elegancia entre radiantes palacios y callejones donde la oscuridad tiene dientes. En los salones de la alta alcurnia, su presencia es una total hipocresía: son una blasfemia silenciosa, un secreto a voces que nadie se atreve a nombrar en voz alta mientras se ajustan el corsé y fuman en sus pipas caras. Ocultas bajo la apariencia de consejeras, sirven a reyes y príncipes, recordándoles que el destino no ha dejado de ser una moneda caprichosa.
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    <p>
                        Their power is not a gift, but a consented mutilation. Myth whispers of pacts with demons, but the truth is raw and visceral: each witch must surrender herself in an equivalent exchange of agony and essence. There is no magic in their hands that hasn't been bought with a tribute of their own flesh. Therefore, their services are never bought with faith.
                    </p>
                    <p>
                        Negotiating with them is like walking barefoot on the edge of a razor so sharp that it bleeds you just by standing. The price of their help always seems to devour more than the wretched soul intended to offer. They do not seek justice or balance; only to satiate a rancid ambition and whims born from the most infected corners of their desire. Their intellect is not just a library, but also a compendium of secrets capable of tearing down empires or condemning a soul before the heart stops beating.
                    </p>
                    <p>
                        If the origin of their power is disturbing, the communion with their familiar is a biological aberration. They do not possess pets, but anchors of flesh. In an act of grotesque metamorphosis, the witch's body melts like wax under fire to recompose itself into the shape of her linked creature. It is a spectacle where bones crack and one watches as each layer of tissue forms until skin and fur cover everything; a choreography of horror where the woman dissolves and, from her remains, is reborn as a beast.
                    </p>
                    <p className="text-red-200 border-t border-red-900/30 pt-4">
                        They move with the same elegance between radiant palaces and alleys where the darkness has teeth. In the halls of high society, their presence is sheer hypocrisy: they are a silent blasphemy, an open secret no one dares name aloud while adjusting their corsets and smoking expensive pipes. Hidden under the guise of advisors, they serve kings and princes, reminding them that destiny has never ceased to be a capricious coin.
                    </p>
                </div>
            )}

            {/* ========================================== */}
            {/* OTRAS FACCIONES (TEXTO BREVE ORIGINAL) */}
            {/* ========================================== */}

            {/* ZOMBIES */}
            <h3 className="text-red-500 font-sans text-sm font-bold uppercase tracking-[0.2em] border-b border-red-900/30 pb-2 mt-12 mb-4">
                IV. {language === "es" ? "Los Zombis (La Bruma)" : "The Zombies (The Mist)"}
            </h3>
            <p>
                {language === "es"
                 ? "Los perdidos y desesperados, en su búsqueda de consuelo, van como corderos al matadero ante una diosa autoproclamada, con la esperanza de salvación."
                 : "The lost and desperate, in their search for solace, go like lambs to the slaughter before a self-proclaimed goddess, hoping for salvation."}
            </p>
            <p>
                {language === "es"
                 ? "Son convertidos en peregrinos sin mente, fanáticos adoradores de una mentira, mientras sus almas, arrancadas y sin dueño, gritan invisibles sin saber en qué se convertirán."
                 : "They are converted into mindless pilgrims, fanatical worshippers of a lie, while their torn, ownerless souls scream unseen, not knowing what they will become."}
            </p>

            {/* LICANTROPOS */}
            <h3 className="text-red-500 font-sans text-sm font-bold uppercase tracking-[0.2em] border-b border-red-900/30 pb-2 mt-12 mb-4">
                V. {language === "es" ? "Los Licántropos" : "The Werewolves"}
            </h3>
            <p>
                {language === "es"
                 ? "Hijos de la luna reducidos a simples esclavos de voluntad rota, cuyo aullido ha sido silenciado. Su naturaleza salvaje ha sido encadenada con plata; son bestias de fuerza bruta, carne de yugo que carga con el precio del progreso y la codicia de sus amos."
                 : "Children of the moon reduced to simple slaves with broken wills, their howl silenced. Their wild nature has been chained with silver; they are beasts of brute force, beasts of burden bearing the price of progress and their masters' greed."}
            </p>

            {/* HUMANOS */}
            <h3 className="text-red-500 font-sans text-sm font-bold uppercase tracking-[0.2em] border-b border-red-900/30 pb-2 mt-12 mb-4">
                VI. {language === "es" ? "Los Humanos" : "The Humans"}
            </h3>
            <p>
                {language === "es"
                 ? "Ignorantes y ciegos ante una guerra que se libra desde las sombras, se envenenan lentamente con reliquias de un poder que no comprenden mientras las agujas del reloj marcan, implacables, su hora final."
                 : "Ignorant and blind to a war waged from the shadows, they slowly poison themselves with relics of a power they do not understand, while the clock hands tick, relentless, toward their final hour."}
            </p>

            {/* FIRMA DE LA DIRECTORA */}
            <div className="mt-24 mb-12 flex flex-col items-end">
                <div className="w-16 h-1 bg-red-900 mb-6"></div>
                <div className="text-right">
                    <p className="font-serif italic text-2xl text-white mb-2 flex items-center justify-end gap-3">
                        Meliza Castillo <Feather className="w-5 h-5 text-red-500 opacity-60" />
                    </p>
                    <p className="text-xs text-red-500 font-sans font-bold uppercase tracking-widest opacity-80">
                        {language === "es" ? "Directora Narrativa y Lore" : "Narrative & Lore Director"}
                    </p>
                    <p className="text-[10px] text-gray-600 font-sans uppercase tracking-widest mt-1">
                        Vestigios de Sangre
                    </p>
                </div>
            </div>

            {/* Fin del Registro */}
            <div className="pt-8 border-t border-dashed border-white/5 text-center">
                <p className="text-zinc-700 text-xs font-mono uppercase tracking-[0.3em]">
                    {language === "es" ? "Fin del Registro" : "End of Record"}
                </p>
            </div>

        </div>

        {/* Footer de Navegación */}
        <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
            <div className="text-sm text-gray-500">
                 <Link href="/project" className="hover:text-red-500 transition-colors">
                    {language === "es" ? "Ver Facciones" : "View Factions"}
                 </Link>
            </div>
            <button className="p-3 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                <Share2 className="w-5 h-5" />
            </button>
        </div>

      </article>
    </div>
  )
}
