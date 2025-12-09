// app/layout.tsx
import type React from "react"
import type { Metadata, Viewport } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { BuyMeACoffeeWidget } from "../components/BuyMeACoffeeWidget"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://gitfm.vercel.app"),
  title: "GitFM – Your GitHub Recap, Reimagined",
  description: "Turn your GitHub year into a shareable, cinematic recap in seconds.",
  openGraph: {
    type: "website",
    url: "https://gitfm.vercel.app",
    title: "GitFM – Your GitHub Recap, Reimagined",
    description: "Turn your GitHub year into a shareable, cinematic recap in seconds.",
    siteName: "GitFM",
    images: [
      {
        // either use absolute URL here:
        // url: "https://gitfm.vercel.app/og-image.png",
        // or a path (metadataBase will prepend the domain)
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GitFM landing page preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GitFM – Your GitHub Recap, Reimagined",
    description: "Turn your GitHub year into a shareable, cinematic recap in seconds.",
    // same image path works
    images: ["/og-image.png"],
  },
}

export const viewport: Viewport = { /* ...as you already have... */ }

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} font-mono antialiased bg-background min-h-screen`}>
        {children}
        <Analytics />
        <BuyMeACoffeeWidget />
      </body>
    </html>
  )
}
