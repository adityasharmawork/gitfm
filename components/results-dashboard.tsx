"use client"

import { useState, useRef } from "react"
import type React from "react"
import * as htmlToImage from "html-to-image"

import { TarotCard } from "@/components/tarot-card"
import { AudioSymphony } from "@/components/audio-symphony"
import { CodeCity } from "@/components/code-city"
import { VideoGenerator } from "@/components/video-generator"
import { VideoSection } from "@/components/video-section"
import { StoryModeVideo } from "@/components/story-mode-video"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Share2,
  GitPullRequest,
  GitCommit,
  Star,
  GitFork,
  Flame,
  Calendar,
  Users,
  BookOpen,
  CircleDot,
  Check,
  X,
  ExternalLink,
  Download,
  Video,
} from "lucide-react"
import type { GitHubData } from "@/lib/types"

interface ResultsDashboardProps {
  data: GitHubData
  vibeMode: "hype" | "roast"
  onReset: () => void
  username?: string
}

export function ResultsDashboard({ data, vibeMode, onReset, username }: ResultsDashboardProps) {
  const [showShareDialog, setShowShareDialog] = useState(false)
  const [showVideoGenerator, setShowVideoGenerator] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const dashboardRef = useRef<HTMLDivElement>(null)

  const handleShare = async () => {
    try {
      // Construct the shareable URL with the username path
      const shareableUsername = username || data.user.login
      const baseUrl = window.location.origin
      const shareUrl = `${baseUrl}/${encodeURIComponent(shareableUsername)}?mode=${vibeMode}`

      await navigator.clipboard.writeText(shareUrl)
      setShowShareDialog(true)
    } catch {
      alert("Failed to copy link")
    }
  }

  const handleDownload = async () => {
    if (!dashboardRef.current) return

    setIsDownloading(true)
    try {
      const dataUrl = await htmlToImage.toPng(dashboardRef.current, {
        backgroundColor: "#0a0a0a",
        pixelRatio: 2,
        skipFonts: true,
      })

      const link = document.createElement("a")
      link.download = `gitfm-${data.user.login}-${vibeMode}.png`
      link.href = dataUrl
      link.click()
    } catch (error) {
      console.error("Failed to download image:", error)
      alert("Failed to download image")
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* CRT Effect */}
      <div className="crt-scanlines fixed inset-0 pointer-events-none z-50" />

      {/* Share Dialog */}
      {showShareDialog && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-card border border-[#00ff88]/50 rounded-2xl p-6 max-w-md mx-4 relative animate-in zoom-in-95">
            <button
              onClick={() => setShowShareDialog(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Success Message */}
            <div className="text-center space-y-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#00ff88]/20 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-[#00ff88]" />
              </div>
              <h2 className="text-xl font-bold text-[#00ff88]">Link Copied!</h2>
              <p className="text-sm text-muted-foreground">
                Share your GitFM profile with friends and spread the word!
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#ff00ff]/50 to-transparent" />
              <span className="text-xs text-muted-foreground">Made with ❤️ by</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#ff00ff]/50 to-transparent" />
            </div>

            {/* Creator Section */}
            <div className="text-center space-y-4">
              <div>
                <h3 className="font-bold text-foreground">Aditya Sharma</h3>
                <p className="text-xs text-muted-foreground">Creator of GitFM</p>
              </div>

              <p className="text-sm text-muted-foreground">
                If you enjoyed GitFM, consider following me! 🙌
              </p>

              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://dub.sh/adityax"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-medium text-sm hover:bg-white/90 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X
                </a>
                <a
                  href="https://dub.sh/adityalinkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2] text-white font-medium text-sm hover:bg-[#0A66C2]/90 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://dub.sh/adityagithub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#24292e] text-white font-medium text-sm hover:bg-[#24292e]/90 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* Challenge Promo */}
            <div className="mt-6 p-4 rounded-lg border border-[#ffd700]/30 bg-gradient-to-r from-[#ffd700]/10 to-[#ff00ff]/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ffd700]/20 flex items-center justify-center shrink-0">
                  <span className="text-lg">🏆</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-[#ffd700] text-sm">Join the GitFM 2025 Challenge!</h4>
                  <p className="text-xs text-muted-foreground">Share on social media & win prizes</p>
                </div>
                <a
                  href="/challenge"
                  className="shrink-0 px-3 py-1.5 rounded-lg bg-[#ffd700] text-black font-bold text-xs hover:bg-[#ffd700]/90 transition-colors"
                >
                  Join →
                </a>
              </div>
            </div>

            <Button
              onClick={() => setShowShareDialog(false)}
              className="w-full mt-4 bg-gradient-to-r from-[#ff00ff] to-[#8800ff] hover:from-[#ff33ff] hover:to-[#aa00ff] text-white font-bold"
            >
              Done
            </Button>
          </div>
        </div>
      )}

      {/* Background */}
      <div className="fixed inset-0 grid-bg opacity-30" />
      <div className="fixed inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ff00ff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#00ff88]/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 sticky top-0 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={onReset} className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <h1 className="text-xl font-bold neon-pink">GitFM 2025</h1>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowVideoGenerator(true)}
              className="border-[#ffd700]/50 hover:bg-[#ffd700]/10 bg-transparent"
            >
              <Video className="w-4 h-4 mr-2" />
              Video
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              disabled={isDownloading}
              className="border-[#00ff88]/50 hover:bg-[#00ff88]/10 bg-transparent"
            >
              <Download className="w-4 h-4 mr-2" />
              {isDownloading ? "..." : "Download"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="border-[#ff00ff]/50 hover:bg-[#ff00ff]/10 bg-transparent"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </header>

      {/* Video Generator Modal */}
      {showVideoGenerator && (
        <VideoGenerator
          data={data}
          vibeMode={vibeMode}
          onClose={() => setShowVideoGenerator(false)}
        />
      )}

      {/* Main Content - Wrapped for screenshot capture */}
      <div ref={dashboardRef} className="bg-background">
        <main className="relative z-10 container mx-auto px-4 py-8 space-y-12">
          {/* User Info Header */}
          <section className="text-center space-y-4">
            <div className="inline-block">
              <img
                src={data.user.avatarUrl || "/placeholder.svg"}
                alt={data.user.name || data.user.login}
                className="w-24 h-24 rounded-full border-4 border-[#ff00ff] neon-border-pink mx-auto"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="neon-pink">{data.user.name || data.user.login}</span>
            </h2>
            <p className="text-muted-foreground">@{data.user.login}</p>
            {data.user.bio && <p className="text-sm text-muted-foreground max-w-md mx-auto">{data.user.bio}</p>}
            <div className="flex items-center justify-center gap-4 text-sm flex-wrap">
              <span className="flex items-center gap-1 text-muted-foreground">
                <Users className="w-4 h-4" />
                {data.user.followers} followers
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <BookOpen className="w-4 h-4" />
                {data.user.publicRepos} repos
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-[#ff00ff]">{data.topLanguage || "Unknown"} main</span>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-6 text-center neon-green">2025 Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard
                icon={<GitCommit className="w-5 h-5" />}
                value={data.totalContributions}
                label="Contributions"
                color="#00ff88"
              />
              <StatCard
                icon={<GitCommit className="w-5 h-5" />}
                value={data.totalCommits}
                label="Commits"
                color="#00ff88"
              />
              <StatCard
                icon={<GitPullRequest className="w-5 h-5" />}
                value={data.totalPRsOpened}
                label="PRs Opened"
                color="#ff00ff"
              />
              <StatCard
                icon={<GitPullRequest className="w-5 h-5" />}
                value={data.totalPRsMerged}
                label="PRs Merged"
                color="#ff00ff"
              />
              <StatCard
                icon={<CircleDot className="w-5 h-5" />}
                value={data.totalIssuesOpened}
                label="Issues Opened"
                color="#00ffff"
              />
              <StatCard
                icon={<CircleDot className="w-5 h-5" />}
                value={data.totalIssuesClosed}
                label="Issues Closed"
                color="#00ffff"
              />
              <StatCard
                icon={<Star className="w-5 h-5" />}
                value={data.totalStarsEarned}
                label="Stars Earned"
                color="#ffd700"
              />
              <StatCard
                icon={<Star className="w-5 h-5" />}
                value={data.totalStarsGiven}
                label="Stars Given"
                color="#ffd700"
              />
              <StatCard
                icon={<GitFork className="w-5 h-5" />}
                value={data.totalForksEarned}
                label="Forks Earned"
                color="#ff6b6b"
              />
              <StatCard
                icon={<Flame className="w-5 h-5" />}
                value={data.longestStreak}
                label="Longest Streak"
                color="#ff4500"
                suffix=" days"
              />
              <StatCard
                icon={<Flame className="w-5 h-5" />}
                value={data.currentStreak}
                label="Current Streak"
                color="#ff4500"
                suffix=" days"
              />
              <StatCard
                icon={<Calendar className="w-5 h-5" />}
                value={data.mostActiveDay || "N/A"}
                label="Most Active Day"
                color="#9b59b6"
                isText
              />
            </div>
            {data.mostActiveRepo && (
              <p className="text-center mt-4 text-sm text-muted-foreground">
                Most active repo: <span className="text-[#00ff88] font-mono">{data.mostActiveRepo}</span>
              </p>
            )}
          </section>

          {/* Language Breakdown */}
          <section>
            <h3 className="text-2xl font-bold mb-6 text-center neon-cyan">Language Breakdown</h3>
            <div className="max-w-2xl mx-auto space-y-3">
              {data.languages.slice(0, 6).map((lang, index) => {
                const total = data.languages.reduce((sum, l) => sum + l.size, 0)
                const percentage = Math.round((lang.size / total) * 100)
                return (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                        <span className="text-foreground">{lang.name}</span>
                      </div>
                      <span className="text-muted-foreground">{percentage}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-black/50 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: lang.color,
                          boxShadow: `0 0 10px ${lang.color}`,
                          animationDelay: `${index * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Tarot Card Section */}
          <section className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-6 text-center neon-purple">Your Developer Tarot</h3>
            <TarotCard data={data} vibeMode={vibeMode} />
          </section>

          {/* Audio Section */}
          <section>
            <h3 className="text-2xl font-bold mb-6 text-center neon-cyan">Symphony of Code</h3>
            <AudioSymphony data={data} />
          </section>

          {/* 3D City Section */}
          <section>
            <h3 className="text-2xl font-bold mb-6 text-center neon-green">Your Code City</h3>
            <CodeCity data={data} />
          </section>

          {/* Video Generation Section */}
          <section className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold neon-purple">🎬 Create Your Video</h3>
              <p className="text-muted-foreground mt-2">
                Generate a cinematic recap to share on TikTok, Reels, or Stories!
              </p>
            </div>
            <div className="max-w-lg mx-auto">
              <VideoGenerator data={data} vibeMode={vibeMode} onClose={() => { }} embedded={true} />
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
          <p>GitFM 2025 • Built with Next.js, Three.js, and Tone.js</p>
        </footer>
      </div>
    </div>
  )
}

function StatCard({
  icon,
  value,
  label,
  color,
  suffix = "",
  isText = false,
}: {
  icon: React.ReactNode
  value: number | string
  label: string
  color: string
  suffix?: string
  isText?: boolean
}) {
  return (
    <div
      className="relative p-4 rounded-xl border bg-black/30 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-transform"
      style={{ borderColor: `${color}40` }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `radial-gradient(circle at center, ${color}10, transparent)` }}
      />
      <div className="relative z-10 flex flex-col items-center text-center gap-2">
        <div style={{ color }}>{icon}</div>
        <div className="text-2xl md:text-3xl font-bold font-mono" style={{ color }}>
          {isText ? value : typeof value === "number" ? value.toLocaleString() : value}
          {suffix}
        </div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  )
}

