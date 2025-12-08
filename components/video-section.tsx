"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Download, Play, Loader2, Sparkles } from "lucide-react"
import type { GitHubData } from "@/lib/types"

interface VideoSectionProps {
    data: GitHubData
    vibeMode: "hype" | "roast"
}

interface Star {
    x: number
    y: number
    z: number
    size: number
}

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    life: number
    color: string
    size: number
}

export function VideoSection({ data, vibeMode }: VideoSectionProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [isGenerating, setIsGenerating] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [videoUrl, setVideoUrl] = useState<string | null>(null)
    const [progress, setProgress] = useState(0)
    const animationRef = useRef<number | null>(null)
    const chunksRef = useRef<Blob[]>([])

    const WIDTH = 1080
    const HEIGHT = 1920
    const FPS = 30
    const DURATION = 25 // 25 seconds for full story

    const starsRef = useRef<Star[]>([])
    const particlesRef = useRef<Particle[]>([])

    // Initialize 3D stars for warp effect
    useEffect(() => {
        starsRef.current = Array.from({ length: 400 }, () => ({
            x: (Math.random() - 0.5) * WIDTH * 2,
            y: (Math.random() - 0.5) * HEIGHT * 2,
            z: Math.random() * 1000,
            size: Math.random() * 2 + 1,
        }))
    }, [])

    const addParticles = useCallback((x: number, y: number, count: number, color: string, spread = 10) => {
        for (let i = 0; i < count; i++) {
            particlesRef.current.push({
                x,
                y,
                vx: (Math.random() - 0.5) * spread,
                vy: (Math.random() - 0.5) * spread,
                life: 1,
                color,
                size: Math.random() * 5 + 2,
            })
        }
    }, [])

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
    const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2

    const drawFrame = useCallback((ctx: CanvasRenderingContext2D, frame: number) => {
        const totalFrames = DURATION * FPS
        const progress = frame / totalFrames

        // Speed changes during journey
        const warpSpeed = progress < 0.1 ? progress * 10 :
            progress > 0.9 ? (1 - progress) * 10 : 1

        // Deep space gradient background
        const bgGradient = ctx.createRadialGradient(WIDTH / 2, HEIGHT / 2, 0, WIDTH / 2, HEIGHT / 2, HEIGHT)
        bgGradient.addColorStop(0, "#0a0015")
        bgGradient.addColorStop(0.3, "#050010")
        bgGradient.addColorStop(1, "#000005")
        ctx.fillStyle = bgGradient
        ctx.fillRect(0, 0, WIDTH, HEIGHT)

        // Nebula clouds moving
        const nebulaOffset = frame * 0.5
        ctx.globalAlpha = 0.15
        for (let i = 0; i < 3; i++) {
            const nebula = ctx.createRadialGradient(
                WIDTH * (0.2 + i * 0.3) + Math.sin(nebulaOffset * 0.01 + i) * 100,
                HEIGHT * (0.3 + i * 0.2) + Math.cos(nebulaOffset * 0.01 + i) * 100,
                0,
                WIDTH * (0.2 + i * 0.3),
                HEIGHT * (0.3 + i * 0.2),
                300 + i * 100
            )
            const hue = (frame * 0.3 + i * 120) % 360
            nebula.addColorStop(0, `hsla(${hue}, 70%, 40%, 0.5)`)
            nebula.addColorStop(1, "transparent")
            ctx.fillStyle = nebula
            ctx.fillRect(0, 0, WIDTH, HEIGHT)
        }
        ctx.globalAlpha = 1

        // 3D Star warp effect
        const centerX = WIDTH / 2
        const centerY = HEIGHT / 2
        starsRef.current.forEach((star) => {
            star.z -= 8 * warpSpeed
            if (star.z <= 0) {
                star.z = 1000
                star.x = (Math.random() - 0.5) * WIDTH * 2
                star.y = (Math.random() - 0.5) * HEIGHT * 2
            }

            const perspective = 500 / star.z
            const screenX = centerX + star.x * perspective
            const screenY = centerY + star.y * perspective
            const starSize = star.size * perspective * (warpSpeed * 0.5 + 0.5)

            if (screenX > 0 && screenX < WIDTH && screenY > 0 && screenY < HEIGHT) {
                // Draw star with trail when warping
                if (warpSpeed > 0.5) {
                    const trailLength = starSize * 3 * warpSpeed
                    const gradient = ctx.createLinearGradient(
                        screenX, screenY,
                        screenX - (screenX - centerX) * 0.1, screenY - (screenY - centerY) * 0.1
                    )
                    gradient.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, perspective)})`)
                    gradient.addColorStop(1, "transparent")
                    ctx.strokeStyle = gradient
                    ctx.lineWidth = starSize
                    ctx.beginPath()
                    ctx.moveTo(screenX, screenY)
                    ctx.lineTo(
                        screenX - (screenX - centerX) * 0.05 * warpSpeed,
                        screenY - (screenY - centerY) * 0.05 * warpSpeed
                    )
                    ctx.stroke()
                }

                ctx.beginPath()
                ctx.arc(screenX, screenY, Math.max(0.5, starSize), 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, perspective * 2)})`
                ctx.fill()
            }
        })

        // Update particles
        particlesRef.current = particlesRef.current.filter(p => p.life > 0.01)
        particlesRef.current.forEach(p => {
            p.x += p.vx
            p.y += p.vy
            p.vx *= 0.96
            p.vy *= 0.96
            p.life -= 0.02
            const radius = Math.max(0.1, p.size * p.life)
            ctx.beginPath()
            ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
            ctx.fillStyle = p.color.replace("1)", `${p.life})`)
            ctx.fill()
        })

        // Astronaut position - floating animation
        const astronautX = WIDTH / 2 + Math.sin(frame * 0.05) * 30
        const astronautY = HEIGHT / 2 + 200 + Math.cos(frame * 0.03) * 20
        const astronautRotation = Math.sin(frame * 0.02) * 0.1

        // Draw astronaut with glow
        ctx.save()
        ctx.translate(astronautX, astronautY)
        ctx.rotate(astronautRotation)

        // Astronaut glow
        const astroGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, 150)
        astroGlow.addColorStop(0, "rgba(100, 200, 255, 0.3)")
        astroGlow.addColorStop(1, "transparent")
        ctx.fillStyle = astroGlow
        ctx.beginPath()
        ctx.arc(0, 0, 150, 0, Math.PI * 2)
        ctx.fill()

        // Astronaut emoji
        ctx.font = "150px 'Segoe UI', sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("👨‍🚀", 0, 0)

        // Jetpack particles
        if (frame % 3 === 0) {
            addParticles(astronautX, astronautY + 70, 3, "rgba(100, 200, 255, 1)", 8)
        }

        ctx.restore()

        // Text settings
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"

        // Story segments based on progress
        const storyPhase = Math.floor(progress * 10) // 10 phases

        // Phase 0-1: Launch & Introduction
        if (progress < 0.12) {
            const alpha = progress < 0.02 ? progress * 50 : progress > 0.10 ? (0.12 - progress) * 50 : 1
            ctx.globalAlpha = alpha

            // Mission start text
            ctx.font = "bold 72px 'Segoe UI', sans-serif"
            ctx.shadowColor = "#00ffff"
            ctx.shadowBlur = 30
            ctx.fillStyle = "#ffffff"
            ctx.fillText("MISSION INITIATED", WIDTH / 2, 400)
            ctx.shadowBlur = 0

            ctx.font = "48px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#00ffff"
            ctx.fillText(`Captain @${data.user.login}`, WIDTH / 2, 500)

            ctx.font = "32px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#888888"
            ctx.fillText("Launching into the code universe...", WIDTH / 2, 580)

            // GitFM badge
            ctx.font = "bold 100px 'Segoe UI', sans-serif"
            const logoGrad = ctx.createLinearGradient(WIDTH / 2 - 200, 250, WIDTH / 2 + 200, 250)
            logoGrad.addColorStop(0, "#ff00ff")
            logoGrad.addColorStop(1, "#00ffff")
            ctx.fillStyle = logoGrad
            ctx.fillText("GitFM", WIDTH / 2, 250)

            ctx.globalAlpha = 1
        }

        // Phase 2: Commits discovered
        else if (progress >= 0.12 && progress < 0.24) {
            const phaseProgress = (progress - 0.12) / 0.12
            const alpha = phaseProgress < 0.1 ? phaseProgress * 10 : phaseProgress > 0.9 ? (1 - phaseProgress) * 10 : 1
            ctx.globalAlpha = alpha

            // Floating commit crystals
            for (let i = 0; i < 5; i++) {
                const crystalX = WIDTH * 0.2 + i * WIDTH * 0.15
                const crystalY = 350 + Math.sin(frame * 0.1 + i) * 30
                ctx.font = "60px 'Segoe UI', sans-serif"
                ctx.fillText("💎", crystalX, crystalY)
            }

            ctx.font = "bold 48px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#ffd700"
            ctx.fillText("DISCOVERY: COMMIT CRYSTALS", WIDTH / 2, 500)

            // Big number with animation
            const displayCommits = Math.floor(data.totalCommits * easeOutCubic(phaseProgress))
            ctx.font = "bold 140px 'Segoe UI', sans-serif"
            ctx.shadowColor = "#00ff88"
            ctx.shadowBlur = 40
            ctx.fillStyle = "#00ff88"
            ctx.fillText(displayCommits.toLocaleString(), WIDTH / 2, 700)
            ctx.shadowBlur = 0

            ctx.font = "42px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#ffffff"
            ctx.fillText("COMMITS COLLECTED", WIDTH / 2, 800)

            ctx.globalAlpha = 1
        }

        // Phase 3: Contribution constellation
        else if (progress >= 0.24 && progress < 0.36) {
            const phaseProgress = (progress - 0.24) / 0.12
            const alpha = phaseProgress < 0.1 ? phaseProgress * 10 : phaseProgress > 0.9 ? (1 - phaseProgress) * 10 : 1
            ctx.globalAlpha = alpha

            // Draw constellation pattern
            const constellationPoints = [
                { x: 300, y: 300 }, { x: 500, y: 350 }, { x: 700, y: 280 },
                { x: 400, y: 450 }, { x: 600, y: 480 }, { x: 800, y: 400 }
            ]

            ctx.strokeStyle = "rgba(0, 255, 255, 0.5)"
            ctx.lineWidth = 2
            ctx.beginPath()
            constellationPoints.forEach((point, i) => {
                if (i === 0) ctx.moveTo(point.x, point.y)
                else ctx.lineTo(point.x, point.y)
            })
            ctx.stroke()

            constellationPoints.forEach((point, i) => {
                const delay = i * 0.1
                if (phaseProgress > delay) {
                    ctx.beginPath()
                    ctx.arc(point.x, point.y, 8 + Math.sin(frame * 0.1 + i) * 3, 0, Math.PI * 2)
                    ctx.fillStyle = "#00ffff"
                    ctx.fill()
                }
            })

            ctx.font = "bold 48px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#00ffff"
            ctx.fillText("CONTRIBUTION CONSTELLATION", WIDTH / 2, 600)

            const displayContribs = Math.floor(data.totalContributions * easeOutCubic(phaseProgress))
            ctx.font = "bold 120px 'Segoe UI', sans-serif"
            ctx.shadowColor = "#00ffff"
            ctx.shadowBlur = 30
            ctx.fillStyle = "#ffffff"
            ctx.fillText(displayContribs.toLocaleString(), WIDTH / 2, 750)
            ctx.shadowBlur = 0

            ctx.font = "36px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#888888"
            ctx.fillText("stars mapped in the code galaxy", WIDTH / 2, 850)

            ctx.globalAlpha = 1
        }

        // Phase 4: Achievement Badges (Stars, PRs, Issues)
        else if (progress >= 0.36 && progress < 0.50) {
            const phaseProgress = (progress - 0.36) / 0.14
            const alpha = phaseProgress < 0.1 ? phaseProgress * 10 : phaseProgress > 0.9 ? (1 - phaseProgress) * 10 : 1
            ctx.globalAlpha = alpha

            ctx.font = "bold 48px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#ffd700"
            ctx.fillText("🏆 ACHIEVEMENTS UNLOCKED", WIDTH / 2, 320)

            const badges = [
                { emoji: "⭐", value: data.totalStarsEarned, label: "Stars", color: "#ffd700", y: 480 },
                { emoji: "🔀", value: data.totalPRsMerged + data.totalPRsOpened, label: "Pull Requests", color: "#ff00ff", y: 650 },
                { emoji: "🐛", value: data.totalIssuesOpened, label: "Issues", color: "#00ffff", y: 820 },
                { emoji: "🍴", value: data.totalForksEarned, label: "Forks", color: "#ff6600", y: 990 },
            ]

            badges.forEach((badge, i) => {
                const delay = i * 0.15
                const badgeProgress = Math.max(0, (phaseProgress - delay) * 3)

                if (badgeProgress > 0) {
                    const scale = easeOutCubic(Math.min(1, badgeProgress))
                    ctx.save()
                    ctx.translate(WIDTH / 2, badge.y)
                    ctx.scale(scale, scale)

                    // Badge background
                    ctx.fillStyle = "rgba(20, 20, 40, 0.8)"
                    ctx.beginPath()
                    ctx.roundRect(-350, -60, 700, 120, 20)
                    ctx.fill()
                    ctx.strokeStyle = badge.color
                    ctx.lineWidth = 3
                    ctx.stroke()

                    // Emoji
                    ctx.font = "60px 'Segoe UI', sans-serif"
                    ctx.fillText(badge.emoji, -250, 10)

                    // Value
                    ctx.font = "bold 56px 'Segoe UI', sans-serif"
                    ctx.fillStyle = badge.color
                    ctx.textAlign = "left"
                    const displayVal = Math.floor(badge.value * easeOutCubic(Math.min(1, badgeProgress)))
                    ctx.fillText(displayVal.toLocaleString(), -180, 10)

                    // Label
                    ctx.font = "32px 'Segoe UI', sans-serif"
                    ctx.fillStyle = "#aaaaaa"
                    ctx.textAlign = "right"
                    ctx.fillText(badge.label, 320, 10)

                    ctx.textAlign = "center"
                    ctx.restore()
                }
            })

            ctx.globalAlpha = 1
        }

        // Phase 5: Tech Stack Planet
        else if (progress >= 0.50 && progress < 0.64) {
            const phaseProgress = (progress - 0.50) / 0.14
            const alpha = phaseProgress < 0.1 ? phaseProgress * 10 : phaseProgress > 0.9 ? (1 - phaseProgress) * 10 : 1
            ctx.globalAlpha = alpha

            ctx.font = "bold 48px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#00ffff"
            ctx.fillText("🌍 TECH PLANET DISCOVERED", WIDTH / 2, 350)

            const topLangs = data.languages.slice(0, 5)
            const totalSize = topLangs.reduce((sum, l) => sum + l.size, 0)

            topLangs.forEach((lang, i) => {
                const y = 480 + i * 110
                const percentage = totalSize > 0 ? (lang.size / totalSize) * 100 : 0
                const delay = i * 0.1
                const barProgress = Math.max(0, (phaseProgress - delay) * 2.5)
                const barWidth = (percentage / 100) * 650 * easeOutCubic(Math.min(1, barProgress))

                // Bar background
                ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
                ctx.beginPath()
                ctx.roundRect(WIDTH / 2 - 325, y, 650, 45, 10)
                ctx.fill()

                if (barWidth > 0) {
                    // Colored bar
                    const gradient = ctx.createLinearGradient(WIDTH / 2 - 325, 0, WIDTH / 2 - 325 + barWidth, 0)
                    gradient.addColorStop(0, lang.color || "#888")
                    gradient.addColorStop(1, `${lang.color}99` || "#88888899")
                    ctx.fillStyle = gradient
                    ctx.beginPath()
                    ctx.roundRect(WIDTH / 2 - 325, y, barWidth, 45, 10)
                    ctx.fill()
                }

                ctx.font = "bold 28px 'Segoe UI', sans-serif"
                ctx.fillStyle = "#ffffff"
                ctx.textAlign = "left"
                ctx.fillText(lang.name, WIDTH / 2 - 315, y - 15)

                ctx.textAlign = "right"
                ctx.fillStyle = lang.color || "#888"
                ctx.fillText(`${percentage.toFixed(1)}%`, WIDTH / 2 + 315, y + 30)
                ctx.textAlign = "center"
            })

            ctx.globalAlpha = 1
        }

        // Phase 6: Streak Fire Zone
        else if (progress >= 0.64 && progress < 0.76) {
            const phaseProgress = (progress - 0.64) / 0.12
            const alpha = phaseProgress < 0.1 ? phaseProgress * 10 : phaseProgress > 0.9 ? (1 - phaseProgress) * 10 : 1
            ctx.globalAlpha = alpha

            // Fire zone glow
            const fireGlow = ctx.createRadialGradient(WIDTH / 2, HEIGHT / 2, 0, WIDTH / 2, HEIGHT / 2, 400)
            fireGlow.addColorStop(0, `rgba(255, 100, 0, ${0.3 + Math.sin(frame * 0.2) * 0.1})`)
            fireGlow.addColorStop(1, "transparent")
            ctx.fillStyle = fireGlow
            ctx.fillRect(0, 0, WIDTH, HEIGHT)

            ctx.font = "bold 48px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#ff6600"
            ctx.fillText("🔥 ENTERING STREAK FIRE ZONE", WIDTH / 2, 380)

            // Big fire emoji with animation
            const fireY = 550 + Math.sin(frame * 0.15) * 15
            ctx.font = "180px 'Segoe UI', sans-serif"
            ctx.fillText("🔥", WIDTH / 2, fireY)

            // Streak number
            const displayStreak = Math.floor(data.longestStreak * easeOutCubic(phaseProgress))
            ctx.font = "bold 150px 'Segoe UI', sans-serif"
            ctx.shadowColor = "#ff6600"
            ctx.shadowBlur = 50
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${displayStreak}`, WIDTH / 2, 820)
            ctx.shadowBlur = 0

            ctx.font = "48px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#ffd700"
            ctx.fillText("DAY STREAK RECORD", WIDTH / 2, 920)

            ctx.font = "32px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#888888"
            ctx.fillText(`Current streak: ${data.currentStreak} days`, WIDTH / 2, 1000)

            // Fire particles
            if (frame % 2 === 0) {
                addParticles(WIDTH / 2 + (Math.random() - 0.5) * 100, fireY + 80, 4, "rgba(255, 136, 0, 1)", 15)
            }

            ctx.globalAlpha = 1
        }

        // Phase 7: Commander Profile
        else if (progress >= 0.76 && progress < 0.88) {
            const phaseProgress = (progress - 0.76) / 0.12
            const alpha = phaseProgress < 0.1 ? phaseProgress * 10 : phaseProgress > 0.9 ? (1 - phaseProgress) * 10 : 1
            ctx.globalAlpha = alpha

            // Profile card
            const cardScale = 0.8 + easeOutCubic(phaseProgress) * 0.2
            ctx.save()
            ctx.translate(WIDTH / 2, HEIGHT / 2 - 50)
            ctx.scale(cardScale, cardScale)

            // Card background
            ctx.fillStyle = "rgba(15, 15, 30, 0.95)"
            ctx.beginPath()
            ctx.roundRect(-380, -320, 760, 640, 30)
            ctx.fill()
            ctx.strokeStyle = "#ff00ff"
            ctx.lineWidth = 4
            ctx.shadowColor = "#ff00ff"
            ctx.shadowBlur = 20
            ctx.stroke()
            ctx.shadowBlur = 0

            // Commander badge
            ctx.font = "bold 36px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#ff00ff"
            ctx.fillText("⚡ SPACE COMMANDER ⚡", 0, -250)

            // Avatar
            ctx.font = "100px 'Segoe UI', sans-serif"
            ctx.fillText("👨‍🚀", 0, -130)

            // Name
            ctx.font = "bold 52px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(data.user.name || data.user.login, 0, -20)

            // Rank based on contributions
            const ranks = ["Cadet", "Lieutenant", "Captain", "Commander", "Admiral", "Legend"]
            const rankIndex = Math.min(Math.floor(data.totalContributions / 150), ranks.length - 1)
            ctx.font = "bold 42px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#ffd700"
            ctx.fillText(`★ ${ranks[rankIndex]} ★`, 0, 50)

            // Stats row
            const profileStats = [
                { label: "Repos", value: data.user.publicRepos },
                { label: "Followers", value: data.user.followers },
                { label: "Following", value: data.user.following },
            ]

            profileStats.forEach((stat, i) => {
                const x = -200 + i * 200
                ctx.font = "bold 48px 'Segoe UI', sans-serif"
                ctx.fillStyle = "#00ffff"
                ctx.fillText(stat.value.toString(), x, 150)
                ctx.font = "24px 'Segoe UI', sans-serif"
                ctx.fillStyle = "#888888"
                ctx.fillText(stat.label, x, 190)
            })

            // Top repo badge
            if (data.mostActiveRepo) {
                ctx.font = "28px 'Segoe UI', sans-serif"
                ctx.fillStyle = "#00ff88"
                ctx.fillText(`🏆 Top Repo: ${data.mostActiveRepo}`, 0, 270)
            }

            ctx.restore()
            ctx.globalAlpha = 1
        }

        // Phase 8-9: Mission Complete & CTA
        else if (progress >= 0.88) {
            const phaseProgress = (progress - 0.88) / 0.12
            const alpha = phaseProgress < 0.1 ? phaseProgress * 10 : 1
            ctx.globalAlpha = alpha

            // Victory burst
            if (phaseProgress < 0.3 && frame % 3 === 0) {
                for (let i = 0; i < 6; i++) {
                    const angle = (i / 6) * Math.PI * 2
                    addParticles(
                        WIDTH / 2 + Math.cos(angle) * 150,
                        HEIGHT / 2 - 100 + Math.sin(angle) * 150,
                        8, "rgba(255, 215, 0, 1)", 20
                    )
                }
            }

            ctx.font = "bold 64px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#ffd700"
            ctx.fillText("🎉 MISSION COMPLETE 🎉", WIDTH / 2, 400)

            // GitFM CTA
            const pulseScale = 1 + Math.sin(frame * 0.1) * 0.03
            ctx.save()
            ctx.translate(WIDTH / 2, HEIGHT / 2)
            ctx.scale(pulseScale, pulseScale)

            ctx.font = "bold 56px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#ffffff"
            ctx.fillText("Start Your Journey", 0, -50)

            const ctaGradient = ctx.createLinearGradient(-250, 0, 250, 0)
            ctaGradient.addColorStop(0, "#ff00ff")
            ctaGradient.addColorStop(0.5, "#ffffff")
            ctaGradient.addColorStop(1, "#00ffff")
            ctx.fillStyle = ctaGradient
            ctx.shadowColor = "#ff00ff"
            ctx.shadowBlur = 40
            ctx.font = "bold 100px 'Segoe UI', sans-serif"
            ctx.fillText("gitfm.vercel.app", 0, 60)
            ctx.shadowBlur = 0

            ctx.restore()

            ctx.font = "36px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#00ffff"
            ctx.fillText("Create & share your code story!", WIDTH / 2, HEIGHT / 2 + 180)

            ctx.globalAlpha = 1
        }

        // Always visible: GitFM watermark
        ctx.font = "24px 'Segoe UI', sans-serif"
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)"
        ctx.textAlign = "right"
        ctx.fillText("gitfm.vercel.app", WIDTH - 50, HEIGHT - 50)
        ctx.textAlign = "left"
        ctx.fillText(`@${data.user.login}`, 50, HEIGHT - 50)
        ctx.textAlign = "center"

        // Subtle scanlines
        ctx.fillStyle = "rgba(0, 0, 0, 0.015)"
        for (let y = 0; y < HEIGHT; y += 4) {
            ctx.fillRect(0, y, WIDTH, 2)
        }
    }, [data, addParticles, easeOutCubic])

    const generateVideo = useCallback(async () => {
        const canvas = canvasRef.current
        if (!canvas) return

        setIsGenerating(true)
        setProgress(0)
        chunksRef.current = []

        const ctx = canvas.getContext("2d")!
        const stream = canvas.captureStream(FPS)

        const mediaRecorder = new MediaRecorder(stream, {
            mimeType: "video/webm;codecs=vp9",
            videoBitsPerSecond: 12000000,
        })

        mediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) chunksRef.current.push(e.data)
        }

        mediaRecorder.onstop = () => {
            const blob = new Blob(chunksRef.current, { type: "video/webm" })
            setVideoUrl(URL.createObjectURL(blob))
            setIsGenerating(false)
        }

        mediaRecorder.start()

        const totalFrames = DURATION * FPS
        for (let frame = 0; frame <= totalFrames; frame++) {
            drawFrame(ctx, frame)
            setProgress((frame / totalFrames) * 100)
            await new Promise(r => setTimeout(r, 1000 / FPS / 3))
        }

        mediaRecorder.stop()
    }, [drawFrame])

    const playPreview = useCallback(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        setIsPlaying(true)
        const ctx = canvas.getContext("2d")!
        let frame = 0
        const totalFrames = DURATION * FPS
        let lastTime = performance.now()

        const animate = (currentTime: number) => {
            if (currentTime - lastTime >= 1000 / FPS) {
                drawFrame(ctx, frame)
                frame++
                lastTime = currentTime
            }
            if (frame <= totalFrames) {
                animationRef.current = requestAnimationFrame(animate)
            } else {
                setIsPlaying(false)
            }
        }

        animationRef.current = requestAnimationFrame(animate)
    }, [drawFrame])

    const downloadVideo = () => {
        if (!videoUrl) return
        const link = document.createElement("a")
        link.href = videoUrl
        link.download = `gitfm-${data.user.login}-2025.webm`
        link.click()
    }

    useEffect(() => {
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
            if (videoUrl) URL.revokeObjectURL(videoUrl)
        }
    }, [videoUrl])

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            const ctx = canvas.getContext("2d")!
            drawFrame(ctx, 0)
        }
    }, [drawFrame])

    return (
        <section className="space-y-6">
            <div className="text-center">
                <h3 className="text-2xl font-bold neon-purple flex items-center justify-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    Your Space Mission Video
                    <Sparkles className="w-6 h-6" />
                </h3>
                <p className="text-muted-foreground mt-2">
                    An astronaut's journey through your 2025 code universe!
                </p>
            </div>

            <div className="max-w-md mx-auto">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#ff00ff]/50 shadow-lg shadow-[#ff00ff]/20">
                    <canvas
                        ref={canvasRef}
                        width={WIDTH}
                        height={HEIGHT}
                        className="w-full"
                        style={{ maxHeight: "500px", objectFit: "cover" }}
                    />
                    {isGenerating && (
                        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
                            <Loader2 className="w-12 h-12 text-[#ff00ff] animate-spin mb-4" />
                            <p className="text-white font-bold text-lg">Generating Video...</p>
                            <div className="w-56 h-3 bg-gray-700 rounded-full mt-3">
                                <div
                                    className="h-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-full transition-all"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <p className="text-sm text-gray-400 mt-2">{Math.round(progress)}%</p>
                        </div>
                    )}
                </div>

                <div className="flex gap-3 mt-4">
                    {!videoUrl ? (
                        <>
                            <Button
                                onClick={playPreview}
                                disabled={isPlaying || isGenerating}
                                variant="outline"
                                className="flex-1 border-[#00ffff]/50 hover:bg-[#00ffff]/10"
                            >
                                <Play className="w-4 h-4 mr-2" />
                                {isPlaying ? "Playing..." : "Preview"}
                            </Button>
                            <Button
                                onClick={generateVideo}
                                disabled={isGenerating}
                                className="flex-1 bg-gradient-to-r from-[#ff00ff] to-[#8800ff] hover:opacity-90"
                            >
                                {isGenerating ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Creating...
                                    </>
                                ) : (
                                    "🚀 Generate Video"
                                )}
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                onClick={() => setVideoUrl(null)}
                                variant="outline"
                                className="flex-1 border-border/50"
                            >
                                Create New
                            </Button>
                            <Button
                                onClick={downloadVideo}
                                className="flex-1 bg-gradient-to-r from-[#00ff88] to-[#00ffff] text-black font-bold"
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Download
                            </Button>
                        </>
                    )}
                </div>

                {videoUrl && (
                    <p className="text-center text-sm text-[#00ff88] mt-3">
                        ✨ Video ready! Share your space mission!
                    </p>
                )}
            </div>
        </section>
    )
}
