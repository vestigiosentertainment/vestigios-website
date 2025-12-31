import type React from "react"
import type { Metadata } from "next"
import { Cinzel } from "next/font/google"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "./providers"
import { LayoutClient } from "./layout-client"
import "./globals.css"

const cinzel = Cinzel({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vestigios Entertainment SpA",
  description: "A dark gothic video game and trading card game studio. Enter the world of Vestigios of Blood.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.className} antialiased bg-background text-foreground`}>
        <Providers>
          <LayoutClient>{children}</LayoutClient>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
