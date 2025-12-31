"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export default function IntellectualPropertyPage() {
  const { language, t } = useLanguage()

  const content = {
    en: {
      title: "Authorship and Intellectual Property Policy",
      lastUpdated: "December 18, 2025",
      intro:
        "This policy establishes the intellectual property rights framework for Vestigios Entertainment SpA, in accordance with Chilean Intellectual Property Law (Law No. 17,336) and international copyright treaties.",
      sections: [
        {
          title: "1. Ownership of Intellectual Property",
          content:
            "All intellectual property created by or commissioned by Vestigios Entertainment SpA, including but not limited to: game code, artwork, music, narrative content, character designs, game mechanics, logos, and trademarks, is owned exclusively by the Company. This ownership includes all economic and commercial rights.",
        },
        {
          title: "2. Commissioned Artwork and Content",
          content:
            "When the Company commissions work from independent artists, illustrators, composers, or other creators: Economic and commercial rights are transferred to Vestigios Entertainment SpA upon full payment. Artists retain moral rights as recognized under Chilean law, including the right to be credited as the creator. All commissioned work agreements are formalized in writing before work begins.",
        },
        {
          title: "3. Artist Credits and Moral Rights",
          content:
            "The Company respects and upholds the moral rights of all creators. All artists whose work appears in our products will receive appropriate credit. Artists retain the right to claim authorship of their work and to object to modifications that harm their reputation, as provided by Chilean Intellectual Property Law.",
        },
        {
          title: "4. Work-for-Hire Provisions",
          content:
            "All employees of Vestigios Entertainment SpA create work under work-for-hire provisions. Intellectual property created during employment, including but not limited to code, designs, and documentation, belongs to the Company. This includes work created using Company resources or related to Company projects.",
        },
        {
          title: "5. Third-Party Licenses",
          content:
            "Where the Company uses third-party intellectual property under license (such as software libraries, fonts, or stock assets), we maintain proper documentation of all licenses and comply with their terms. Users are bound by these third-party licenses when applicable.",
        },
        {
          title: "6. Protection of Rights",
          content:
            "The Company actively protects its intellectual property rights. Unauthorized use, reproduction, distribution, or creation of derivative works is prohibited and will result in legal action. This includes but is not limited to: piracy, unauthorized merchandise, plagiarism, and trademark infringement.",
        },
        {
          title: "7. Respect for Third-Party Rights",
          content:
            "Vestigios Entertainment SpA respects the intellectual property rights of others. If you believe your intellectual property rights have been infringed by our content, contact us at legal@vestigios-entertainment.com with documentation of your claim.",
        },
        {
          title: "8. Portfolio Use by Artists",
          content:
            "Artists who have created commissioned work for the Company may include such work in their professional portfolios and personal websites, provided they: clearly credit Vestigios Entertainment SpA as the rights holder, do not claim ownership of the intellectual property, and include appropriate context that the work was created for the Company.",
        },
        {
          title: "9. Registration and Documentation",
          content:
            "The Company maintains thorough documentation of all intellectual property ownership, including registration with relevant Chilean and international authorities where applicable. All commission agreements, transfer of rights documents, and licensing agreements are properly archived.",
        },
        {
          title: "10. International Protection",
          content:
            "Our intellectual property rights are protected under Chilean law and international treaties including the Berne Convention and WIPO Copyright Treaty. These protections apply globally regardless of where infringement occurs.",
        },
      ],
    },
    es: {
      title: "Política de Autoría y Propiedad Intelectual",
      lastUpdated: "18 de diciembre de 2025",
      intro:
        "Esta política establece el marco de derechos de propiedad intelectual para Vestigios Entertainment SpA, de acuerdo con la Ley de Propiedad Intelectual de Chile (Ley N° 17.336) y tratados internacionales de derechos de autor.",
      sections: [
        {
          title: "1. Propiedad de la Propiedad Intelectual",
          content:
            "Toda la propiedad intelectual creada por o encargada por Vestigios Entertainment SpA, incluyendo pero no limitado a: código de juego, arte, música, contenido narrativo, diseños de personajes, mecánicas de juego, logotipos y marcas comerciales, es propiedad exclusiva de la Empresa. Esta propiedad incluye todos los derechos económicos y comerciales.",
        },
        {
          title: "2. Arte y Contenido Encargado",
          content:
            "Cuando la Empresa encarga trabajo a artistas independientes, ilustradores, compositores u otros creadores: Los derechos económicos y comerciales se transfieren a Vestigios Entertainment SpA al momento del pago completo. Los artistas retienen los derechos morales reconocidos bajo la ley chilena, incluyendo el derecho a ser acreditados como creadores. Todos los acuerdos de trabajo encargado se formalizan por escrito antes de comenzar el trabajo.",
        },
        {
          title: "3. Créditos de Artistas y Derechos Morales",
          content:
            "La Empresa respeta y defiende los derechos morales de todos los creadores. Todos los artistas cuyo trabajo aparezca en nuestros productos recibirán el crédito apropiado. Los artistas retienen el derecho de reclamar la autoría de su trabajo y de objetar modificaciones que dañen su reputación, según lo provisto por la Ley de Propiedad Intelectual de Chile.",
        },
        {
          title: "4. Disposiciones de Trabajo por Encargo",
          content:
            "Todos los empleados de Vestigios Entertainment SpA crean trabajo bajo disposiciones de trabajo por encargo. La propiedad intelectual creada durante el empleo, incluyendo pero no limitado a código, diseños y documentación, pertenece a la Empresa. Esto incluye trabajo creado usando recursos de la Empresa o relacionado con proyectos de la Empresa.",
        },
        {
          title: "5. Licencias de Terceros",
          content:
            "Cuando la Empresa usa propiedad intelectual de terceros bajo licencia (como bibliotecas de software, fuentes o activos de stock), mantenemos documentación apropiada de todas las licencias y cumplimos con sus términos. Los usuarios están sujetos a estas licencias de terceros cuando corresponda.",
        },
        {
          title: "6. Protección de Derechos",
          content:
            "La Empresa protege activamente sus derechos de propiedad intelectual. El uso no autorizado, reproducción, distribución o creación de obras derivadas está prohibido y resultará en acción legal. Esto incluye pero no se limita a: piratería, mercancía no autorizada, plagio e infracción de marcas comerciales.",
        },
        {
          title: "7. Respeto por Derechos de Terceros",
          content:
            "Vestigios Entertainment SpA respeta los derechos de propiedad intelectual de otros. Si cree que nuestro contenido ha infringido sus derechos de propiedad intelectual, contáctenos en legal@vestigios-entertainment.com con documentación de su reclamo.",
        },
        {
          title: "8. Uso de Portafolio por Artistas",
          content:
            "Los artistas que han creado trabajo encargado para la Empresa pueden incluir dicho trabajo en sus portafolios profesionales y sitios web personales, siempre que: acrediten claramente a Vestigios Entertainment SpA como titular de los derechos, no reclamen propiedad de la propiedad intelectual e incluyan contexto apropiado de que el trabajo fue creado para la Empresa.",
        },
        {
          title: "9. Registro y Documentación",
          content:
            "La Empresa mantiene documentación exhaustiva de toda la propiedad de propiedad intelectual, incluyendo registro con las autoridades chilenas e internacionales relevantes cuando corresponda. Todos los acuerdos de encargo, documentos de transferencia de derechos y acuerdos de licencia están debidamente archivados.",
        },
        {
          title: "10. Protección Internacional",
          content:
            "Nuestros derechos de propiedad intelectual están protegidos bajo la ley chilena y tratados internacionales incluyendo la Convención de Berna y el Tratado de Derechos de Autor de la OMPI. Estas protecciones se aplican globalmente independientemente de dónde ocurra la infracción.",
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
          <h3 className="text-lg font-bold mb-3">Legal Contact</h3>
          <p className="text-sm text-muted-foreground text-pretty mb-2">
            For intellectual property matters, licensing inquiries, or legal concerns, contact{" "}
            <a href="mailto:admin@vestigiosentertainment.com" className="text-accent hover:text-accent/80">
              admin@vestigiosentertainment.com
            </a>
          </p>
          <p className="text-xs text-muted-foreground text-pretty">
            All communications regarding intellectual property rights should include detailed documentation of your
            claim or inquiry.
          </p>
        </div>
      </div>
    </div>
  )
}
