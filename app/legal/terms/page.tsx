"use client"

import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export default function TermsPage() {
  const { language, t } = useLanguage()

  const content = {
    en: {
      title: "Terms of Use",
      lastUpdated: "December 18, 2025",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            "By accessing or using any products, services, or content provided by Vestigios Entertainment SpA (hereinafter 'the Company'), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree to these terms, you must immediately cease all use of our products and services.",
        },
        {
          title: "2. Scope of Service",
          content:
            "The Company provides video games, trading card games, digital content, and related services. All products and services are provided 'as is' and are subject to availability. The Company reserves the right to modify, suspend, or discontinue any aspect of its services at any time without prior notice.",
        },
        {
          title: "3. User Obligations",
          content:
            "Users agree to use all products and services in accordance with applicable laws and regulations of the Republic of Chile. Users must not engage in activities that violate intellectual property rights, harass other users, exploit vulnerabilities, or otherwise interfere with the intended operation of our services. Any violation may result in immediate termination of access.",
        },
        {
          title: "4. Intellectual Property",
          content:
            "All content, designs, code, artwork, music, narrative elements, and other materials created by or commissioned by the Company are protected under Chilean Intellectual Property Law (Law No. 17,336) and international copyright treaties. Unauthorized reproduction, distribution, or derivative use is strictly prohibited.",
        },
        {
          title: "5. Limitation of Liability",
          content:
            "The Company shall not be liable for any indirect, incidental, consequential, or punitive damages arising from the use or inability to use our products and services. Our total liability shall not exceed the amount paid by the user, if any, for the specific product or service in question.",
        },
        {
          title: "6. Governing Law",
          content:
            "These Terms of Use are governed by and construed in accordance with the laws of the Republic of Chile. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Chile.",
        },
        {
          title: "7. Modifications",
          content:
            "The Company reserves the right to modify these Terms of Use at any time. Users will be notified of significant changes through our official channels. Continued use of our services after such modifications constitutes acceptance of the revised terms.",
        },
      ],
    },
    es: {
      title: "Términos de Uso",
      lastUpdated: "18 de diciembre de 2025",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content:
            "Al acceder o utilizar cualquier producto, servicio o contenido proporcionado por Vestigios Entertainment SpA (en adelante 'la Empresa'), usted reconoce que ha leído, comprendido y acepta estar sujeto a estos Términos de Uso. Si no está de acuerdo con estos términos, debe cesar inmediatamente todo uso de nuestros productos y servicios.",
        },
        {
          title: "2. Alcance del Servicio",
          content:
            "La Empresa proporciona videojuegos, juegos de cartas coleccionables, contenido digital y servicios relacionados. Todos los productos y servicios se proporcionan 'tal cual' y están sujetos a disponibilidad. La Empresa se reserva el derecho de modificar, suspender o discontinuar cualquier aspecto de sus servicios en cualquier momento sin previo aviso.",
        },
        {
          title: "3. Obligaciones del Usuario",
          content:
            "Los usuarios aceptan utilizar todos los productos y servicios de acuerdo con las leyes y regulaciones aplicables de la República de Chile. Los usuarios no deben participar en actividades que violen los derechos de propiedad intelectual, acosen a otros usuarios, exploten vulnerabilidades o interfieran con el funcionamiento previsto de nuestros servicios. Cualquier violación puede resultar en la terminación inmediata del acceso.",
        },
        {
          title: "4. Propiedad Intelectual",
          content:
            "Todo el contenido, diseños, código, arte, música, elementos narrativos y otros materiales creados por o encargados por la Empresa están protegidos bajo la Ley de Propiedad Intelectual de Chile (Ley Nº 17.336) y tratados internacionales de derechos de autor. La reproducción, distribución o uso derivado no autorizado está estrictamente prohibido.",
        },
        {
          title: "5. Limitación de Responsabilidad",
          content:
            "La Empresa no será responsable de ningún daño indirecto, incidental, consecuente o punitivo que surja del uso o la imposibilidad de usar nuestros productos y servicios. Nuestra responsabilidad total no excederá el monto pagado por el usuario, si corresponde, por el producto o servicio específico en cuestión.",
        },
        {
          title: "6. Ley Aplicable",
          content:
            "Estos Términos de Uso se rigen e interpretan de acuerdo con las leyes de la República de Chile. Cualquier disputa que surja de estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Chile.",
        },
        {
          title: "7. Modificaciones",
          content:
            "La Empresa se reserva el derecho de modificar estos Términos de Uso en cualquier momento. Los usuarios serán notificados de cambios significativos a través de nuestros canales oficiales. El uso continuado de nuestros servicios después de tales modificaciones constituye la aceptación de los términos revisados.",
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
          <p className="text-sm text-muted-foreground">
            {t("legal.lastUpdated")}: {pageContent.lastUpdated}
          </p>
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
            For questions regarding these Terms of Use, please contact us at{" "}
            <a href="mailto: admin@vestigiosentertainment.com" className="text-accent hover:text-accent/80">
              admin@vestigiosentertainment.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
