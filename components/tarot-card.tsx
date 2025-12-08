"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Sparkles, Flame, Skull, Star, Zap, Coffee, Bug, GitBranch, Users } from "lucide-react"
import type { GitHubData } from "@/lib/types"

interface TarotCardProps {
  data: GitHubData
  vibeMode: "hype" | "roast"
}

const classMap: Record<string, { name: string; icon: React.ReactNode; color: string }> = {
  JavaScript: { name: "Chaos Mage", icon: <Zap className="w-8 h-8" />, color: "#f7df1e" },
  TypeScript: { name: "Chaos Mage", icon: <Zap className="w-8 h-8" />, color: "#3178c6" },
  Python: { name: "Snake Charmer", icon: <Star className="w-8 h-8" />, color: "#3776ab" },
  Rust: { name: "The Ironclad", icon: <Skull className="w-8 h-8" />, color: "#dea584" },
  "C++": { name: "The Ironclad", icon: <Skull className="w-8 h-8" />, color: "#00599c" },
  C: { name: "The Ironclad", icon: <Skull className="w-8 h-8" />, color: "#555555" },
  Go: { name: "Backend Paladin", icon: <GitBranch className="w-8 h-8" />, color: "#00add8" },
  Java: { name: "Backend Paladin", icon: <GitBranch className="w-8 h-8" />, color: "#ed8b00" },
  HTML: { name: "Pixel Weaver", icon: <Sparkles className="w-8 h-8" />, color: "#e34f26" },
  CSS: { name: "Pixel Weaver", icon: <Sparkles className="w-8 h-8" />, color: "#264de4" },
  default: { name: "Code Ronin", icon: <Star className="w-8 h-8" />, color: "#ff00ff" },
}

export function TarotCard({ data, vibeMode }: TarotCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const rpgClass = useMemo(() => {
    const lang = data.topLanguage || "default"
    return classMap[lang] || classMap["default"]
  }, [data.topLanguage])

  const stats = useMemo(() => {
    const caffeineDependency = Math.min(100, Math.round((data.totalContributions / 365) * 10))
    const socialLife = Math.max(0, 100 - Math.round((data.totalContributions / 365) * 15))
    const codeQuality = Math.min(100, 50 + Math.round(data.totalPRsMerged / 10))
    const bugCreationRate =
      vibeMode === "roast" ? Math.round(Math.random() * 40 + 30) : Math.round(Math.random() * 20 + 10)
    const mainCommitter = data.totalCommits > 100

    return {
      caffeineDependency,
      socialLife,
      codeQuality,
      bugCreationRate,
      mainCommitter,
    }
  }, [data, vibeMode])

  const getText = (type: "title" | "subtitle" | "stat1" | "stat2" | "stat3" | "stat4" | "quote") => {
    if (vibeMode === "hype") {
      switch (type) {
        case "title":
          return rpgClass.name
        case "subtitle":
          return "Legendary Developer"
        case "stat1":
          return "Dedication"
        case "stat2":
          return "Work-Life Balance"
        case "stat3":
          return "Code Quality"
        case "stat4":
          return "Bug Resistance"
        case "quote":
          return data.longestStreak > 30
            ? `"A ${data.longestStreak}-day streak? Your dedication is legendary. ${data.totalContributions} contributions define a true master."`
            : `"Your architecture is pure art. ${data.totalContributions} contributions define a true master."`
      }
    } else {
      switch (type) {
        case "title":
          return rpgClass.name
        case "subtitle":
          return "Menace to Codebases"
        case "stat1":
          return "Caffeine Dependency"
        case "stat2":
          return "Social Life"
        case "stat3":
          return "Delusion Level"
        case "stat4":
          return "Bug Creation Rate"
        case "quote":
          if (data.currentStreak === 0) {
            return `"Your streak is dead. ${data.totalContributions} contributions and you couldn't keep it going?"`
          }
          return stats.mainCommitter
            ? `"${data.totalCommits}+ commits this year. Quantity over quality, I see."`
            : `"${data.totalContributions} contributions and your code still looks like this?"`
      }
    }
  }

  const isHype = vibeMode === "hype"

  return (
    <div className="perspective-1000 cursor-pointer w-80 h-[480px]" onClick={() => setIsFlipped(!isFlipped)}>
      <div
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* Front of Card */}
        <div
          className={`absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col items-center justify-between ${
            isHype
              ? "bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] border-2 border-[#ffd700] neon-border-gold"
              : "bg-gradient-to-br from-[#1a0a0a] via-[#2d0a0a] to-[#0a0a1a] border-2 border-[#ff0000] glitch"
          }`}
        >
          {/* Top Decoration */}
          <div className="w-full flex justify-between items-start">
            <div className={`text-xs ${isHype ? "text-[#ffd700]" : "text-[#ff0000]"}`}>
              {isHype ? <Sparkles className="w-4 h-4" /> : <Flame className="w-4 h-4" />}
            </div>
            <div className={`text-xs font-bold ${isHype ? "text-[#ffd700]" : "text-[#ff0000]"}`}>2025</div>
          </div>

          {/* Avatar */}
          <div className="relative">
            <div
              className={`absolute inset-0 rounded-full blur-xl ${isHype ? "bg-[#ffd700]/30" : "bg-[#ff0000]/30"}`}
            />
            <img
              src={data.user.avatarUrl || "/placeholder.svg"}
              alt={data.user.login}
              className={`w-28 h-28 rounded-full border-4 relative z-10 ${
                isHype ? "border-[#ffd700]" : "border-[#ff0000]"
              }`}
            />
          </div>

          {/* Class Icon */}
          <div className={`${isHype ? "text-[#ffd700]" : "text-[#ff0000]"}`}>{rpgClass.icon}</div>

          {/* Title */}
          <div className="text-center">
            <h3
              className={`text-2xl font-bold ${isHype ? "text-[#ffd700] neon-gold" : "text-[#ff0000] chromatic-aberration"}`}
              data-text={getText("title")}
            >
              {getText("title")}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{getText("subtitle")}</p>
          </div>

          {/* Primary Language */}
          <div
            className="px-4 py-1 rounded-full text-xs font-bold"
            style={{ backgroundColor: `${rpgClass.color}30`, color: rpgClass.color }}
          >
            {data.topLanguage || "Polyglot"}
          </div>

          {/* Tap to flip hint */}
          <p className="text-xs text-muted-foreground animate-pulse">Tap to reveal stats</p>
        </div>

        {/* Back of Card */}
        <div
          className={`absolute inset-0 backface-hidden rotate-y-180 rounded-2xl p-6 flex flex-col ${
            isHype
              ? "bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] border-2 border-[#ffd700] neon-border-gold"
              : "bg-gradient-to-br from-[#1a0a0a] via-[#2d0a0a] to-[#0a0a1a] border-2 border-[#ff0000]"
          }`}
        >
          <h4 className={`text-lg font-bold mb-4 text-center ${isHype ? "text-[#ffd700]" : "text-[#ff0000]"}`}>
            Stats
          </h4>

          {/* Stats */}
          <div className="space-y-4 flex-1">
            <StatBar
              label={getText("stat1")}
              value={stats.caffeineDependency}
              icon={<Coffee className="w-4 h-4" />}
              color={isHype ? "#ffd700" : "#ff0000"}
            />
            <StatBar
              label={getText("stat2")}
              value={stats.socialLife}
              icon={<Users className="w-4 h-4" />}
              color={isHype ? "#ffd700" : "#ff0000"}
            />
            <StatBar
              label={getText("stat3")}
              value={stats.codeQuality}
              icon={<Star className="w-4 h-4" />}
              color={isHype ? "#ffd700" : "#ff0000"}
            />
            <StatBar
              label={getText("stat4")}
              value={vibeMode === "hype" ? 100 - stats.bugCreationRate : stats.bugCreationRate}
              icon={<Bug className="w-4 h-4" />}
              color={isHype ? "#ffd700" : "#ff0000"}
            />
          </div>

          {/* Quote */}
          <div
            className={`mt-4 p-3 rounded-lg text-xs italic text-center ${
              isHype ? "bg-[#ffd700]/10 text-[#ffd700]" : "bg-[#ff0000]/10 text-[#ff0000]"
            }`}
          >
            {getText("quote")}
          </div>

          {/* Tap to flip back */}
          <p className="text-xs text-muted-foreground text-center mt-4 animate-pulse">Tap to flip back</p>
        </div>
      </div>
    </div>
  )
}

function StatBar({
  label,
  value,
  icon,
  color,
}: { label: string; value: number; icon: React.ReactNode; color: string }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2" style={{ color }}>
          {icon}
          <span>{label}</span>
        </div>
        <span style={{ color }}>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-black/50 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${value}%`,
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}`,
          }}
        />
      </div>
    </div>
  )
}
