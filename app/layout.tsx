import type React from "react"
import type { Metadata, Viewport } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "CodeSynth 2025 | Hear Your Code. See Your Legend.",
  description:
    "Transform your GitHub history into a multisensory experience with audio synthesis, RPG tarot cards, and a 3D cyberpunk city visualization.",
  generator: "v0.app",
  keywords: ["GitHub", "Unwrapped", "Developer", "Stats", "Visualization", "2025"],
  openGraph: {
    title: "CodeSynth 2025",
    description: "Hear Your Code. See Your Legend.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#ff00ff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} font-mono antialiased bg-background min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
