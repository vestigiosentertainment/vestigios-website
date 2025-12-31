"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export default function ConductPage() {
  const { language, t } = useLanguage()

  const content = {
    en: {
      title: "Code of Conduct",
      lastUpdated: "December 18, 2025",
      intro:
        "Vestigios Entertainment SpA is committed to fostering a respectful, inclusive, and professional community. This Code of Conduct applies to all users, community members, and participants across all platforms and services.",
      sections: [
        {
          title: "1. Respect and Dignity",
          content:
            "Treat all community members with respect and dignity. Harassment, discrimination, hate speech, or personal attacks based on race, ethnicity, gender, sexual orientation, religion, disability, or any other protected characteristic will not be tolerated.",
        },
        {
          title: "2. Fair Play and Integrity",
          content:
            "Engage with our games and services honestly. Cheating, exploiting bugs, using unauthorized third-party software, or any form of manipulation undermines the experience for everyone and is strictly prohibited.",
        },
        {
          title: "3. Constructive Communication",
          content:
            "Engage in constructive dialogue. Criticism is welcome when presented respectfully and with the intent to improve. Trolling, spamming, or deliberately disruptive behavior serves no purpose and will be addressed.",
        },
        {
          title: "4. Protection of Minors",
          content:
            "If minors are present in our community, all members must ensure their interactions are appropriate and safe. Sharing inappropriate content with minors or attempting to exploit them in any way will result in immediate removal and reporting to authorities.",
        },
        {
          title: "5. Intellectual Property Respect",
          content:
            "Respect the intellectual property of the Company and other community members. Do not share, distribute, or claim ownership of content that does not belong to you without proper authorization.",
        },
        {
          title: "6. Privacy and Personal Information",
          content:
            "Do not share the personal information of others without their explicit consent. Respect the privacy of all community members.",
        },
        {
          title: "7. Reporting Violations",
          content:
            "If you witness behavior that violates this Code of Conduct, report it through our official support channels. We will investigate all reports seriously and take appropriate action.",
        },
        {
          title: "8. Consequences",
          content:
            "Violations of this Code of Conduct may result in warnings, temporary suspension, permanent bans, or legal action, depending on the severity of the offense. The Company reserves the right to determine appropriate consequences at its discretion.",
        },
      ],
    },
    es: {
      title: "Código de Conducta",
      lastUpdated: "18 de diciembre de 2025",
      intro:
        "Vestigios Entertainment SpA se compromete a fomentar una comunidad respetuosa, inclusiva y profesional. Este Código de Conducta se aplica a todos los usuarios, miembros de la comunidad y participantes en todas las plataformas y servicios.",
      sections: [
        {
          title: "1. Respeto y Dignidad",
          content:
            "Trate a todos los miembros de la comunidad con respeto y dignidad. El acoso, la discriminación, el discurso de odio o los ataques personales basados en raza, etnia, género, orientación sexual, religión, discapacidad o cualquier otra característica protegida no serán tolerados.",
        },
        {
          title: "2. Juego Limpio e Integridad",
          content:
            "Interactúe con nuestros juegos y servicios de manera honesta. Hacer trampa, explotar errores, usar software de terceros no autorizado o cualquier forma de manipulación socava la experiencia de todos y está estrictamente prohibido.",
        },
        {
          title: "3. Comunicación Constructiva",
          content:
            "Participe en un diálogo constructivo. Las críticas son bienvenidas cuando se presentan respetuosamente y con la intención de mejorar. El trolling, el spam o el comportamiento deliberadamente disruptivo no tiene propósito y será abordado.",
        },
        {
          title: "4. Protección de Menores",
          content:
            "Si hay menores presentes en nuestra comunidad, todos los miembros deben asegurarse de que sus interacciones sean apropiadas y seguras. Compartir contenido inapropiado con menores o intentar explotarlos de cualquier manera resultará en la eliminación inmediata y el reporte a las autoridades.",
        },
        {
          title: "5. Respeto a la Propiedad Intelectual",
          content:
            "Respete la propiedad intelectual de la Empresa y de otros miembros de la comunidad. No comparta, distribuya o reclame propiedad de contenido que no le pertenece sin la autorización adecuada.",
        },
        {
          title: "6. Privacidad e Información Personal",
          content:
            "No comparta la información personal de otros sin su consentimiento explícito. Respete la privacidad de todos los miembros de la comunidad.",
        },
        {
          title: "7. Reporte de Violaciones",
          content:
            "Si es testigo de un comportamiento que viola este Código de Conducta, repórtelo a través de nuestros canales oficiales de soporte. Investigaremos todos los reportes seriamente y tomaremos las medidas apropiadas.",
        },
        {
          title: "8. Consecuencias",
          content:
            "Las violaciones de este Código de Conducta pueden resultar en advertencias, suspensión temporal, prohibiciones permanentes o acciones legales, dependiendo de la gravedad de la ofensa. La Empresa se reserva el derecho de determinar las consecuencias apropiadas a su discreción.",
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
            To report violations of this Code of Conduct, please contact{" "}
            <a href="mailto:admin@vestigiosentertainment.com" className="text-accent hover:text-accent/80">
              admin@vestigiosentertainment.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
