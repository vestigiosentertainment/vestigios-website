"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export default function FanContentPage() {
  const { language, t } = useLanguage()

  const content = {
    en: {
      title: "Fan Content Policy",
      lastUpdated: "December 18, 2025",
      intro:
        "Vestigios Entertainment SpA appreciates the creativity and passion of our community. This policy outlines what is permitted when creating fan content based on our intellectual property.",
      sections: [
        {
          title: "1. Permitted Fan Content",
          content:
            "You may create non-commercial fan content including: fan art, fan fiction, gameplay videos, reviews and commentary, community guides and tutorials, and cosplay. Such content must be clearly identified as fan-created and not official Company material.",
        },
        {
          title: "2. Attribution Requirements",
          content:
            "All fan content must include clear attribution stating that Vestigios of Blood and all related properties are owned by Vestigios Entertainment SpA. You must include a disclaimer that your work is unofficial and not endorsed by the Company.",
        },
        {
          title: "3. Non-Commercial Use",
          content:
            "Fan content must be non-commercial. You may not sell fan art, merchandise, or other content based on our intellectual property without explicit written permission. Ad-supported content (such as YouTube videos with ads) is permitted for reasonable revenue generation, but direct sales are prohibited.",
        },
        {
          title: "4. Quality and Respect Standards",
          content:
            "Fan content must respect the tone and integrity of our work. Content that is hateful, discriminatory, pornographic, or otherwise inappropriate will not be tolerated. We reserve the right to request removal of content that misrepresents our brand or violates our values.",
        },
        {
          title: "5. Content Streams and Videos",
          content:
            "You may stream, record, and share gameplay videos of our games. You may monetize such content through standard platform features (ads, subscriptions). You must not present our content as your own creation or claim ownership of game assets.",
        },
        {
          title: "6. Use of Official Assets",
          content:
            "Do not extract, modify, or redistribute official game assets (artwork, music, code, models) except as necessary for permitted fan content creation. Distributing game files, circumventing protections, or enabling piracy is strictly prohibited.",
        },
        {
          title: "7. Commercial Licensing",
          content:
            "If you wish to create commercial products based on our intellectual property, you must contact us at licensing@vestigios-entertainment.com to discuss a formal licensing agreement. Unauthorized commercial use will result in legal action.",
        },
        {
          title: "8. Right to Request Removal",
          content:
            "While we support fan creativity, we reserve the right to request removal of any fan content that violates this policy, infringes our intellectual property rights, or conflicts with our business interests. We will make reasonable efforts to contact creators before taking action.",
        },
        {
          title: "9. No Transfer of Rights",
          content:
            "This policy grants permission for limited non-commercial use only. It does not transfer any intellectual property rights to you. All rights remain with Vestigios Entertainment SpA.",
        },
      ],
    },
    es: {
      title: "Política de Contenido de Fans",
      lastUpdated: "18 de diciembre de 2025",
      intro:
        "Vestigios Entertainment SpA aprecia la creatividad y pasión de nuestra comunidad. Esta política describe lo que está permitido al crear contenido de fans basado en nuestra propiedad intelectual.",
      sections: [
        {
          title: "1. Contenido de Fans Permitido",
          content:
            "Puede crear contenido de fans no comercial que incluye: fan art, fan fiction, videos de juego, reseñas y comentarios, guías y tutoriales comunitarios y cosplay. Dicho contenido debe estar claramente identificado como creado por fans y no como material oficial de la Empresa.",
        },
        {
          title: "2. Requisitos de Atribución",
          content:
            "Todo el contenido de fans debe incluir atribución clara declarando que Vestigios de Sangre y todas las propiedades relacionadas son propiedad de Vestigios Entertainment SpA. Debe incluir un descargo de responsabilidad de que su trabajo no es oficial y no está respaldado por la Empresa.",
        },
        {
          title: "3. Uso No Comercial",
          content:
            "El contenido de fans debe ser no comercial. No puede vender fan art, mercancía u otro contenido basado en nuestra propiedad intelectual sin permiso explícito por escrito. El contenido con publicidad (como videos de YouTube con anuncios) está permitido para generación razonable de ingresos, pero las ventas directas están prohibidas.",
        },
        {
          title: "4. Estándares de Calidad y Respeto",
          content:
            "El contenido de fans debe respetar el tono y la integridad de nuestro trabajo. El contenido que sea odioso, discriminatorio, pornográfico o inapropiado de cualquier otra manera no será tolerado. Nos reservamos el derecho de solicitar la eliminación de contenido que tergiverse nuestra marca o viole nuestros valores.",
        },
        {
          title: "5. Transmisiones y Videos de Contenido",
          content:
            "Puede transmitir, grabar y compartir videos de juego de nuestros juegos. Puede monetizar dicho contenido a través de características estándar de la plataforma (anuncios, suscripciones). No debe presentar nuestro contenido como su propia creación ni reclamar propiedad de los activos del juego.",
        },
        {
          title: "6. Uso de Activos Oficiales",
          content:
            "No extraiga, modifique o redistribuya activos oficiales del juego (arte, música, código, modelos) excepto según sea necesario para la creación de contenido de fans permitida. Distribuir archivos del juego, eludir protecciones o habilitar la piratería está estrictamente prohibido.",
        },
        {
          title: "7. Licencias Comerciales",
          content:
            "Si desea crear productos comerciales basados en nuestra propiedad intelectual, debe contactarnos en licensing@vestigios-entertainment.com para discutir un acuerdo de licencia formal. El uso comercial no autorizado resultará en acción legal.",
        },
        {
          title: "8. Derecho a Solicitar Eliminación",
          content:
            "Si bien apoyamos la creatividad de los fans, nos reservamos el derecho de solicitar la eliminación de cualquier contenido de fans que viole esta política, infrinja nuestros derechos de propiedad intelectual o entre en conflicto con nuestros intereses comerciales. Haremos esfuerzos razonables para contactar a los creadores antes de tomar medidas.",
        },
        {
          title: "9. Sin Transferencia de Derechos",
          content:
            "Esta política otorga permiso solo para uso limitado no comercial. No transfiere ningún derecho de propiedad intelectual a usted. Todos los derechos permanecen con Vestigios Entertainment SpA.",
        },
      ],
    },
  }

  const pageContent = content[language]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-sm text-accent hover:text-accent/80 transition-colors">
            ← {t("legal.backToHome")}
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageContent.title}</h1>
          <p className="text-sm text-muted-foreground mb-6">
            {t("legal.lastUpdated")}: {pageContent.lastUpdated}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{pageContent.intro}</p>
        </div>

        <div className="prose prose-invert max-w-none">
          {pageContent.sections.map((section, index) => (
            <div key={index} className="mb-8 border-l-2 border-accent pl-6">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-card border border-border">
          <p className="text-sm text-muted-foreground text-pretty">
            For licensing inquiries or questions about this policy, contact{" "}
            <a href="mailto:admin@vestigiosentertainment.com" className="text-accent hover:text-accent/80">
              admin@vestigiosentertainment.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
