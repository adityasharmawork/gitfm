"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Sparkles, Flame, Github, Zap, Music, Building2, LogOut, User, Trophy } from "lucide-react"
import Image from "next/image"

interface SessionUser {
  username: string
  avatarUrl: string
  name: string | null
}

interface LandingPageProps {
  sessionUser: SessionUser | null
  onGenerate: (username: string, mode: "hype" | "roast", useOAuth: boolean) => void
  onLogout: () => void
  error: string | null
}

export function LandingPage({ sessionUser, onGenerate, onLogout, error }: LandingPageProps) {
  const [vibeMode, setVibeMode] = useState<"hype" | "roast">("hype")
  const [username, setUsername] = useState("")

  const handleSignIn = () => {
    window.location.href = "/api/auth/github"
  }

  const handleQuickGenerate = () => {
    if (!username.trim()) return
    onGenerate(username.trim(), vibeMode, false)
  }

  const handleOAuthGenerate = () => {
    if (!sessionUser) return
    onGenerate(sessionUser.username, vibeMode, true)
  }

  return (
    <div className="min-h-screen relative overflow-hidden grid-bg">
      {/* CRT Overlay */}
      <div className="crt-scanlines fixed inset-0 pointer-events-none z-50" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff00ff]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00ffff]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8800ff]/5 rounded-full blur-3xl" />
      </div>

      {/* Challenge Banner */}
      <Link href="/challenge" className="relative z-20 block">
        <div className="bg-gradient-to-r from-[#ffd700]/20 via-[#ff00ff]/20 to-[#ffd700]/20 border-b border-[#ffd700]/30 py-2 px-4 text-center hover:from-[#ffd700]/30 hover:via-[#ff00ff]/30 hover:to-[#ffd700]/30 transition-all cursor-pointer">
          <div className="flex items-center justify-center gap-2">
            <Trophy className="w-4 h-4 text-[#ffd700]" />
            <span className="text-sm font-medium text-[#ffd700]">
              🎉 GitFM 2025 Challenge is LIVE! Share & win prizes →
            </span>
            <Trophy className="w-4 h-4 text-[#ffd700]" />
          </div>
        </div>
      </Link>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff00ff]/30 bg-[#ff00ff]/10 mb-4">
            <Zap className="w-4 h-4 text-[#ff00ff]" />
            <span className="text-sm text-[#ff00ff]">2025 Edition</span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight glitch-text neon-pink"
            data-text="GitFM 2025"
          >
            GitFM 2025
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            <span className="text-[#00ffff]">Hear Your Code.</span>{" "}
            <span className="text-[#ff00ff]">See Your Legend.</span>
          </p>

          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Transform your GitHub history into a multisensory experience with audio synthesis, RPG tarot cards, and a 3D
            cyberpunk city.
          </p>
        </div>

        {/* Feature Icons */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-12 h-12 rounded-lg bg-[#ff00ff]/20 flex items-center justify-center neon-border-pink">
              <Music className="w-6 h-6 text-[#ff00ff]" />
            </div>
            <span className="text-xs text-muted-foreground">Audio Synth</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-12 h-12 rounded-lg bg-[#8800ff]/20 flex items-center justify-center neon-border-purple">
              <Sparkles className="w-6 h-6 text-[#8800ff]" />
            </div>
            <span className="text-xs text-muted-foreground">Tarot Card</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-12 h-12 rounded-lg bg-[#00ff88]/20 flex items-center justify-center neon-border-green">
              <Building2 className="w-6 h-6 text-[#00ff88]" />
            </div>
            <span className="text-xs text-muted-foreground">3D City</span>
          </div>
        </div>

        {/* Auth Section */}
        <div className="w-full max-w-md space-y-6">
          {/* Shared Vibe Mode Toggle */}
          <div
            className={`p-4 rounded-lg border transition-all duration-300 ${vibeMode === "hype"
              ? "border-[#ffd700]/50 bg-[#ffd700]/10"
              : "border-[#ff0000]/50 bg-[#ff0000]/10"
              }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {vibeMode === "hype" ? (
                  <div className="w-10 h-10 rounded-full bg-[#ffd700]/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#ffd700]" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#ff0000]/20 flex items-center justify-center">
                    <Flame className="w-5 h-5 text-[#ff0000]" />
                  </div>
                )}
                <div>
                  <h2 className={`font-bold ${vibeMode === "hype" ? "text-[#ffd700]" : "text-[#ff0000]"}`}>
                    {vibeMode === "hype" ? "Hype Me Up" : "Destroy Me"}
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {vibeMode === "hype" ? "Get praised for your work" : "Get roasted mercilessly"}
                  </p>
                </div>
              </div>
              <Switch
                checked={vibeMode === "roast"}
                onCheckedChange={(checked) => setVibeMode(checked ? "roast" : "hype")}
                className="data-[state=checked]:bg-[#ff0000] data-[state=unchecked]:bg-[#ffd700]"
              />
            </div>
          </div>

          <div className="p-6 rounded-lg border border-[#00ffff]/30 bg-card/50 backdrop-blur-sm neon-border-cyan space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#00ffff]/20 flex items-center justify-center">
                <User className="w-5 h-5 text-[#00ffff]" />
              </div>
              <div>
                <h2 className="font-bold text-foreground">Quick Access</h2>
                <p className="text-xs text-muted-foreground">Just enter your GitHub username</p>
              </div>
            </div>

            <div className="space-y-3">
              <Input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleQuickGenerate()}
                className="h-11 bg-background/50 border-[#00ffff]/30 focus:border-[#00ffff] focus:ring-[#00ffff]/20 placeholder:text-muted-foreground"
              />

              <Button
                onClick={handleQuickGenerate}
                disabled={!username.trim()}
                className="w-full h-11 font-bold bg-gradient-to-r from-[#00ffff] to-[#00ff88] hover:from-[#33ffff] hover:to-[#33ff99] text-black disabled:opacity-50"
              >
                <Zap className="w-4 h-4 mr-2" />
                Generate My Synth
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              Uses public API with limited requests. Sign in below for unlimited access.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#ff00ff]/50 to-transparent" />
            <span className="text-xs text-muted-foreground">or</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#ff00ff]/50 to-transparent" />
          </div>

          <div className="p-6 rounded-lg border border-[#ff00ff]/30 bg-card/50 backdrop-blur-sm neon-border-pink space-y-4">
            {sessionUser ? (
              <>
                {/* Logged In State */}
                <div className="flex items-center gap-4 p-3 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/30">
                  <Image
                    src={sessionUser.avatarUrl || "/placeholder.svg"}
                    alt={sessionUser.username}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-[#00ff88]"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[#00ff88] truncate">{sessionUser.name || sessionUser.username}</p>
                    <p className="text-xs text-muted-foreground">@{sessionUser.username}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onLogout}
                    className="text-muted-foreground hover:text-destructive shrink-0"
                  >
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-3 rounded-lg border border-destructive/50 bg-destructive/10 text-destructive text-sm glitch">
                    {error}
                  </div>
                )}

                {/* Generate Button */}
                <Button
                  onClick={handleOAuthGenerate}
                  className={`w-full h-11 font-bold transition-all duration-300 ${vibeMode === "hype"
                    ? "bg-gradient-to-r from-[#ffd700] to-[#ff8c00] hover:from-[#ffed4a] hover:to-[#ffa500] text-black"
                    : "bg-gradient-to-r from-[#ff0000] to-[#8800ff] hover:from-[#ff3333] hover:to-[#aa00ff] text-white"
                    }`}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Generate without any Rate Limit
                </Button>
              </>
            ) : (
              <>
                {/* Logged Out State */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ff00ff]/20 flex items-center justify-center">
                    <Github className="w-5 h-5 text-[#ff00ff]" />
                  </div>
                  <div>
                    <h2 className="font-bold text-foreground">Sign in with GitHub</h2>
                    <p className="text-xs text-muted-foreground">Unlimited requests, full data access</p>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-3 rounded-lg border border-destructive/50 bg-destructive/10 text-destructive text-sm glitch">
                    {error}
                  </div>
                )}

                {/* Sign In Button */}
                <Button
                  onClick={handleSignIn}
                  className="w-full h-11 font-bold bg-gradient-to-r from-[#ff00ff] to-[#8800ff] hover:from-[#ff33ff] hover:to-[#aa00ff] text-white"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Sign in with GitHub
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  We only request read access to your public profile and repositories.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Challenge Promotion Section */}
        <section className="w-full max-w-2xl mt-16 space-y-6">
          <div className="p-6 rounded-xl border border-[#ffd700]/30 bg-gradient-to-br from-[#ffd700]/10 via-[#ff00ff]/10 to-[#ffd700]/10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffd700]/20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#ff00ff]/20 rounded-full blur-2xl" />

            <div className="relative z-10 text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffd700]/20 border border-[#ffd700]/30">
                <Trophy className="w-4 h-4 text-[#ffd700]" />
                <span className="text-xs font-bold text-[#ffd700]">WIN PRIZES</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold">
                <span className="text-[#ffd700]">GitFM 2025</span>{" "}
                <span className="text-[#ff00ff]">Challenge</span>
              </h3>

              <p className="text-muted-foreground max-w-md mx-auto">
                Share your GitFM profile on social media and enter to win!
                <span className="text-[#00ff88] font-medium"> 3 lucky winners</span> will be chosen at random.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white/80">🐦 X (Twitter)</span>
                <span className="px-3 py-1 rounded-full bg-[#0A66C2]/20 text-[#0A66C2]">💼 LinkedIn</span>
                <span className="px-3 py-1 rounded-full bg-[#E4405F]/20 text-[#E4405F]">📸 Instagram</span>
              </div>

              <Link href="/challenge">
                <Button className="mt-4 bg-gradient-to-r from-[#ffd700] to-[#ff8c00] hover:from-[#ffed4a] hover:to-[#ffa500] text-black font-bold px-8">
                  <Trophy className="w-4 h-4 mr-2" />
                  Join the Challenge
                </Button>
              </Link>

              <p className="text-xs text-muted-foreground mt-4">
                Submissions close December 31st • Winners announced January 31st
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-xs text-muted-foreground">
          <p>Your data stays private. No information is stored.</p>
        </footer>
      </main>
    </div>
  )
}
