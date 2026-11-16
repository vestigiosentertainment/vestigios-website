"use client"

import type React from "react"

import { LanguageProvider, type Language } from "@/lib/language-context"

export function Providers({ children, initialLanguage }: { children: React.ReactNode; initialLanguage: Language }) {
  return <LanguageProvider initialLanguage={initialLanguage}>{children}</LanguageProvider>
}
