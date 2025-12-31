"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export default function PrivacyPage() {
  const { language, t } = useLanguage()

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "December 18, 2025",
      intro:
        "Vestigios Entertainment SpA ('the Company') respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect information in accordance with Chilean data protection laws.",
      sections: [
        {
          title: "1. Information We Collect",
          content:
            "We may collect personal information including but not limited to: email addresses, usernames, gameplay data, device information, and communication records. Information is collected when you create an account, use our services, or contact us directly. We do not collect more information than necessary to provide our services.",
        },
        {
          title: "2. How We Use Your Information",
          content:
            "We use collected information to: provide and maintain our services, communicate with users, improve our products, ensure security and prevent fraud, comply with legal obligations, and respond to user inquiries. We do not sell your personal data to third parties.",
        },
        {
          title: "3. Data Storage and Security",
          content:
            "Your data is stored on secure servers and protected using industry-standard security measures. We implement technical and organizational safeguards to prevent unauthorized access, disclosure, or destruction of your information. However, no system is entirely secure, and we cannot guarantee absolute security.",
        },
        {
          title: "4. Data Sharing and Disclosure",
          content:
            "We do not share your personal information except in the following circumstances: when required by Chilean law or legal process, to protect our rights or the safety of users, with service providers who assist in operating our services (under strict confidentiality agreements), or with your explicit consent.",
        },
        {
          title: "5. User Rights",
          content:
            "Under Chilean law, you have the right to: access your personal data, correct inaccurate information, request deletion of your data (subject to legal obligations), object to certain processing activities, and withdraw consent where applicable. To exercise these rights, contact us at privacy@vestigios-entertainment.com.",
        },
        {
          title: "6. Cookies and Tracking",
          content:
            "We may use cookies and similar technologies to enhance user experience, analyze usage patterns, and maintain session information. You can control cookie settings through your browser, but disabling cookies may affect functionality.",
        },
        {
          title: "7. Children's Privacy",
          content:
            "Our services are not directed at children under 14 years of age. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal data, we will take steps to delete such information.",
        },
        {
          title: "8. Changes to This Policy",
          content:
            "We may update this Privacy Policy periodically. Users will be notified of significant changes through our official channels. Continued use of our services after changes constitutes acceptance of the updated policy.",
        },
        {
          title: "9. Contact Information",
          content:
            "For questions or concerns regarding this Privacy Policy or our data practices, contact us at privacy@vestigios-entertainment.com or through our official support channels.",
        },
      ],
    },
    es: {
      title: "Política de Privacidad",
      lastUpdated: "18 de diciembre de 2025",
      intro:
        "Vestigios Entertainment SpA ('la Empresa') respeta su privacidad y se compromete a proteger sus datos personales. Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos la información de acuerdo con las leyes chilenas de protección de datos.",
      sections: [
        {
          title: "1. Información que Recopilamos",
          content:
            "Podemos recopilar información personal que incluye, entre otros: direcciones de correo electrónico, nombres de usuario, datos de juego, información del dispositivo y registros de comunicación. La información se recopila cuando crea una cuenta, usa nuestros servicios o se comunica con nosotros directamente. No recopilamos más información de la necesaria para proporcionar nuestros servicios.",
        },
        {
          title: "2. Cómo Usamos Su Información",
          content:
            "Usamos la información recopilada para: proporcionar y mantener nuestros servicios, comunicarnos con los usuarios, mejorar nuestros productos, garantizar la seguridad y prevenir fraudes, cumplir con obligaciones legales y responder a consultas de usuarios. No vendemos sus datos personales a terceros.",
        },
        {
          title: "3. Almacenamiento y Seguridad de Datos",
          content:
            "Sus datos se almacenan en servidores seguros y están protegidos mediante medidas de seguridad estándar de la industria. Implementamos salvaguardas técnicas y organizativas para prevenir el acceso, divulgación o destrucción no autorizados de su información. Sin embargo, ningún sistema es completamente seguro y no podemos garantizar seguridad absoluta.",
        },
        {
          title: "4. Compartir y Divulgación de Datos",
          content:
            "No compartimos su información personal excepto en las siguientes circunstancias: cuando lo exija la ley chilena o un proceso legal, para proteger nuestros derechos o la seguridad de los usuarios, con proveedores de servicios que ayudan a operar nuestros servicios (bajo estrictos acuerdos de confidencialidad), o con su consentimiento explícito.",
        },
        {
          title: "5. Derechos del Usuario",
          content:
            "Según la ley chilena, usted tiene derecho a: acceder a sus datos personales, corregir información inexacta, solicitar la eliminación de sus datos (sujeto a obligaciones legales), objetar ciertas actividades de procesamiento y retirar el consentimiento cuando corresponda. Para ejercer estos derechos, contáctenos en privacy@vestigios-entertainment.com.",
        },
        {
          title: "6. Cookies y Seguimiento",
          content:
            "Podemos usar cookies y tecnologías similares para mejorar la experiencia del usuario, analizar patrones de uso y mantener información de sesión. Puede controlar la configuración de cookies a través de su navegador, pero desactivar las cookies puede afectar la funcionalidad.",
        },
        {
          title: "7. Privacidad de los Niños",
          content:
            "Nuestros servicios no están dirigidos a niños menores de 14 años. No recopilamos intencionalmente información personal de niños. Si nos enteramos de que un niño nos ha proporcionado datos personales, tomaremos medidas para eliminar dicha información.",
        },
        {
          title: "8. Cambios a Esta Política",
          content:
            "Podemos actualizar esta Política de Privacidad periódicamente. Los usuarios serán notificados de cambios significativos a través de nuestros canales oficiales. El uso continuado de nuestros servicios después de los cambios constituye la aceptación de la política actualizada.",
        },
        {
          title: "9. Información de Contacto",
          content:
            "Para preguntas o inquietudes sobre esta Política de Privacidad o nuestras prácticas de datos, contáctenos en privacy@vestigios-entertainment.com o a través de nuestros canales oficiales de soporte.",
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
            For privacy-related inquiries, please contact{" "}
            <a href="mailto:admin@vestigiosentertainment.com" className="text-accent hover:text-accent/80">
              admin@vestigiosentertainment.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
