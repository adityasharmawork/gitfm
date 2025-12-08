import type React from "react"
import type { Metadata, Viewport } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { BuyMeACoffeeWidget } from "../components/BuyMeACoffeeWidget" // <-- adjust path if needed

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = { /* ...as you already have... */ }

export const viewport: Viewport = { /* ...as you already have... */ }

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} font-mono antialiased bg-background min-h-screen`}>
        {children}
        <Analytics />
        <BuyMeACoffeeWidget /> {/* 👈 this loads the widget on the client */}
      </body>
    </html>
  )
}
