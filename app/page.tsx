"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { LandingPage } from "@/components/landing-page"

interface SessionUser {
  username: string
  avatarUrl: string
  name: string | null
}

export default function Home() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [sessionUser, setSessionUser] = useState<SessionUser | null>(null)
  const [isCheckingSession, setIsCheckingSession] = useState(true)

  // Check for existing session on mount
  useEffect(() => {
    checkSession()
  }, [])

  const checkSession = async () => {
    try {
      const response = await fetch("/api/auth/session")
      const data = await response.json()

      if (data.authenticated) {
        setSessionUser(data.user)
      }
    } catch (err) {
      console.error("Session check failed:", err)
    } finally {
      setIsCheckingSession(false)
    }
  }

  const handleGenerate = (username: string, mode: "hype" | "roast", useOAuth: boolean) => {
    setError(null)
    // Navigate to the user's page with mode and oauth params
    const params = new URLSearchParams()
    params.set("mode", mode)
    if (useOAuth) {
      params.set("oauth", "true")
    }
    router.push(`/${encodeURIComponent(username)}?${params.toString()}`)
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      setSessionUser(null)
    } catch (err) {
      console.error("Logout failed:", err)
    }
  }

  if (isCheckingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-[#ff00ff]">Loading...</div>
      </div>
    )
  }

  return <LandingPage sessionUser={sessionUser} onGenerate={handleGenerate} onLogout={handleLogout} error={error} />
}
