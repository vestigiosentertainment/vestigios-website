"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export default function SupportPage() {
  const { language, t } = useLanguage()

  const content = {
    en: {
      title: "Customer Support",
      lastUpdated: "December 18, 2025",
      intro:
        "Vestigios Entertainment SpA is committed to providing professional support to our users. This page outlines our support policies and how to access assistance.",
      sections: [
        {
          title: "1. Scope of Support",
          content:
            "We provide support for technical issues, account access problems, payment inquiries, and questions about our products and services. Support is provided in English and Spanish during standard business hours (Chilean time zone).",
        },
        {
          title: "2. How to Contact Support",
          content:
            "For support inquiries, contact us at support@vestigios-entertainment.com. Please include a detailed description of your issue, relevant account information, and any error messages or screenshots. We aim to respond to all inquiries within 48-72 business hours.",
        },
        {
          title: "3. Account Issues",
          content:
            "For account access problems, password resets, or account security concerns, contact support with the email address associated with your account. We may require identity verification before making account changes to ensure security.",
        },
        {
          title: "4. Technical Problems",
          content:
            "When reporting technical issues, include information about your device, operating system, game version, and steps to reproduce the problem. The more detail you provide, the better we can assist you.",
        },
        {
          title: "5. Refund Policy",
          content:
            "Refund requests are evaluated on a case-by-case basis in accordance with Chilean consumer protection laws. To request a refund, contact support within 14 days of purchase with your order details and reason for the request. Digital content that has been accessed or used may not be eligible for refund.",
        },
        {
          title: "6. Bug Reports and Feedback",
          content:
            "We welcome bug reports and constructive feedback. Report bugs through our support channel with detailed information. While we appreciate feedback, we cannot guarantee implementation of all suggestions.",
        },
        {
          title: "7. Response Time Expectations",
          content:
            "Standard inquiries: 48-72 business hours. Account security issues: 24-48 hours priority response. Payment problems: 24-48 hours priority response. General feedback: We read all feedback but may not respond individually.",
        },
        {
          title: "8. Limitations",
          content:
            "Support is provided for legitimate issues and inquiries. We do not provide support for: unauthorized modifications, third-party software, issues resulting from violations of our Terms of Use, or requests for features or content not yet released.",
        },
      ],
    },
    es: {
      title: "Soporte al Cliente",
      lastUpdated: "18 de diciembre de 2025",
      intro:
        "Vestigios Entertainment SpA se compromete a proporcionar soporte profesional a nuestros usuarios. Esta página describe nuestras políticas de soporte y cómo acceder a la asistencia.",
      sections: [
        {
          title: "1. Alcance del Soporte",
          content:
            "Proporcionamos soporte para problemas técnicos, problemas de acceso a cuentas, consultas de pago y preguntas sobre nuestros productos y servicios. El soporte se proporciona en inglés y español durante el horario comercial estándar (zona horaria de Chile).",
        },
        {
          title: "2. Cómo Contactar al Soporte",
          content:
            "Para consultas de soporte, contáctenos en support@vestigios-entertainment.com. Incluya una descripción detallada de su problema, información relevante de la cuenta y cualquier mensaje de error o captura de pantalla. Nuestro objetivo es responder a todas las consultas dentro de 48-72 horas hábiles.",
        },
        {
          title: "3. Problemas de Cuenta",
          content:
            "Para problemas de acceso a la cuenta, restablecimiento de contraseña o preocupaciones de seguridad de la cuenta, contacte al soporte con la dirección de correo electrónico asociada a su cuenta. Podemos requerir verificación de identidad antes de realizar cambios en la cuenta para garantizar la seguridad.",
        },
        {
          title: "4. Problemas Técnicos",
          content:
            "Al reportar problemas técnicos, incluya información sobre su dispositivo, sistema operativo, versión del juego y pasos para reproducir el problema. Cuanto más detalle proporcione, mejor podremos ayudarlo.",
        },
        {
          title: "5. Política de Reembolso",
          content:
            "Las solicitudes de reembolso se evalúan caso por caso de acuerdo con las leyes chilenas de protección al consumidor. Para solicitar un reembolso, contacte al soporte dentro de los 14 días posteriores a la compra con los detalles de su pedido y el motivo de la solicitud. El contenido digital que ha sido accedido o usado puede no ser elegible para reembolso.",
        },
        {
          title: "6. Reportes de Errores y Retroalimentación",
          content:
            "Damos la bienvenida a reportes de errores y retroalimentación constructiva. Reporte errores a través de nuestro canal de soporte con información detallada. Si bien apreciamos la retroalimentación, no podemos garantizar la implementación de todas las sugerencias.",
        },
        {
          title: "7. Expectativas de Tiempo de Respuesta",
          content:
            "Consultas estándar: 48-72 horas hábiles. Problemas de seguridad de cuenta: respuesta prioritaria de 24-48 horas. Problemas de pago: respuesta prioritaria de 24-48 horas. Retroalimentación general: Leemos toda la retroalimentación pero puede que no respondamos individualmente.",
        },
        {
          title: "8. Limitaciones",
          content:
            "El soporte se proporciona para problemas e consultas legítimas. No proporcionamos soporte para: modificaciones no autorizadas, software de terceros, problemas resultantes de violaciones de nuestros Términos de Uso, o solicitudes de características o contenido aún no lanzado.",
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
            For support inquiries, contact{" "}
            <a href="mailto:admin@vestigiosentertainment.com" className="text-accent hover:text-accent/80">
              admin@vestigiosentertainment.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
