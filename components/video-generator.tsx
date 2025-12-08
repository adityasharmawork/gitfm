"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { X, Download, Play, Loader2 } from "lucide-react"
import type { GitHubData } from "@/lib/types"

interface VideoGeneratorProps {
    data: GitHubData
    vibeMode: "hype" | "roast"
    onClose: () => void
    embedded?: boolean
}

interface Star {
    x: number
    y: number
    size: number
    speed: number
    opacity: number
}

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    life: number
    maxLife: number
    color: string
    size: number
}

export function VideoGenerator({ data, vibeMode, onClose, embedded = false }: VideoGeneratorProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [isGenerating, setIsGenerating] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [videoUrl, setVideoUrl] = useState<string | null>(null)
    const [progress, setProgress] = useState(0)
    const animationRef = useRef<number | null>(null)
    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const chunksRef = useRef<Blob[]>([])

    const WIDTH = 1080
    const HEIGHT = 1920
    const FPS = 30
    const DURATION = 15 // seconds

    const starsRef = useRef<Star[]>([])
    const particlesRef = useRef<Particle[]>([])

    // Initialize stars
    useEffect(() => {
        starsRef.current = Array.from({ length: 200 }, () => ({
            x: Math.random() * WIDTH,
            y: Math.random() * HEIGHT,
            size: Math.random() * 2 + 0.5,
            speed: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.8 + 0.2,
        }))
    }, [])

    const addParticles = useCallback((x: number, y: number, count: number, color: string) => {
        for (let i = 0; i < count; i++) {
            particlesRef.current.push({
                x,
                y,
                vx: (Math.random() - 0.5) * 10,
                vy: (Math.random() - 0.5) * 10,
                life: 1,
                maxLife: 1,
                color,
                size: Math.random() * 4 + 2,
            })
        }
    }, [])

    const drawFrame = useCallback((ctx: CanvasRenderingContext2D, frame: number) => {
        const totalFrames = DURATION * FPS
        const progress = frame / totalFrames
        const scene = Math.floor(progress * 6) // 6 scenes

        // Clear and draw space background
        const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT)
        gradient.addColorStop(0, "#0a0a0a")
        gradient.addColorStop(0.5, "#1a0a2e")
        gradient.addColorStop(1, "#0a0a0a")
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, WIDTH, HEIGHT)

        // Update and draw stars
        starsRef.current.forEach((star) => {
            star.y += star.speed
            if (star.y > HEIGHT) {
                star.y = 0
                star.x = Math.random() * WIDTH
            }
            ctx.beginPath()
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
            ctx.fill()
        })

        // Update and draw particles
        particlesRef.current = particlesRef.current.filter((p) => p.life > 0)
        particlesRef.current.forEach((p) => {
            p.x += p.vx
            p.y += p.vy
            p.life -= 0.02
            const radius = Math.max(0, p.size * p.life)
            if (radius > 0) {
                ctx.beginPath()
                ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
                ctx.fillStyle = p.color.replace("1)", `${Math.max(0, p.life)})`)
                ctx.fill()
            }
        })

        // Scene-specific content
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"

        const sceneProgress = (progress * 6) % 1

        if (scene === 0) {
            // Scene 1: Launch - Logo fade in
            const alpha = Math.min(sceneProgress * 2, 1)
            ctx.globalAlpha = alpha

            // GitFM Logo
            ctx.font = "bold 120px 'Segoe UI', sans-serif"
            const logoGradient = ctx.createLinearGradient(WIDTH / 2 - 200, HEIGHT / 2, WIDTH / 2 + 200, HEIGHT / 2)
            logoGradient.addColorStop(0, "#ff00ff")
            logoGradient.addColorStop(1, "#00ffff")
            ctx.fillStyle = logoGradient
            ctx.fillText("GitFM", WIDTH / 2, HEIGHT / 2 - 100)

            ctx.font = "48px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#ffd700"
            ctx.fillText("2025", WIDTH / 2, HEIGHT / 2)

            ctx.font = "36px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`Mission Report: @${data.user.login}`, WIDTH / 2, HEIGHT / 2 + 100)

            ctx.globalAlpha = 1

            if (sceneProgress > 0.7) {
                addParticles(WIDTH / 2, HEIGHT / 2, 5, "rgba(255, 0, 255, 1)")
            }
        } else if (scene === 1) {
            // Scene 2: Commits - Rocket launch
            const rocketY = HEIGHT - (sceneProgress * HEIGHT * 0.6)

            // Draw rocket
            ctx.font = "100px 'Segoe UI', sans-serif"
            ctx.fillText("🚀", WIDTH / 2, rocketY)

            // Exhaust particles
            if (frame % 2 === 0) {
                addParticles(WIDTH / 2, rocketY + 80, 3, "rgba(255, 136, 0, 1)")
            }

            // Stats
            ctx.font = "bold 72px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#00ff88"
            const displayCommits = Math.floor(data.totalCommits * sceneProgress)
            ctx.fillText(`${displayCommits.toLocaleString()}`, WIDTH / 2, HEIGHT / 2 - 50)

            ctx.font = "36px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#ffffff"
            ctx.fillText("COMMITS", WIDTH / 2, HEIGHT / 2 + 20)

            ctx.font = "28px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#888888"
            ctx.fillText("Altitude Reached", WIDTH / 2, HEIGHT / 2 + 70)
        } else if (scene === 2) {
            // Scene 3: PRs, Issues, Stars - Orbiting
            const centerX = WIDTH / 2
            const centerY = HEIGHT / 2
            const orbitRadius = 250

            // Draw satellite
            ctx.font = "80px 'Segoe UI', sans-serif"
            ctx.fillText("🛰️", centerX, centerY)

            // Orbiting stats
            const stats = [
                { emoji: "⭐", value: data.totalStarsEarned, label: "Stars", color: "#ffd700" },
                { emoji: "🔀", value: data.totalPRsMerged, label: "PRs", color: "#ff00ff" },
                { emoji: "🐛", value: data.totalIssuesOpened, label: "Issues", color: "#00ffff" },
            ]

            stats.forEach((stat, i) => {
                const angle = (sceneProgress * Math.PI * 4) + (i * (Math.PI * 2) / 3)
                const x = centerX + Math.cos(angle) * orbitRadius
                const y = centerY + Math.sin(angle) * orbitRadius * 0.5

                ctx.font = "50px 'Segoe UI', sans-serif"
                ctx.fillText(stat.emoji, x, y - 30)

                ctx.font = "bold 42px 'Segoe UI', sans-serif"
                ctx.fillStyle = stat.color
                ctx.fillText(stat.value.toLocaleString(), x, y + 30)

                ctx.font = "24px 'Segoe UI', sans-serif"
                ctx.fillStyle = "#ffffff"
                ctx.fillText(stat.label, x, y + 70)
            })
        } else if (scene === 3) {
            // Scene 4: Languages as constellations
            ctx.font = "bold 48px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#00ffff"
            ctx.fillText("TOP LANGUAGES", WIDTH / 2, 300)

            const topLangs = data.languages.slice(0, 5)
            const totalSize = topLangs.reduce((sum, l) => sum + l.size, 0)
            topLangs.forEach((lang, i) => {
                const y = 450 + i * 120
                const percentage = totalSize > 0 ? (lang.size / totalSize) * 100 : 0
                const barWidth = (percentage / 100) * 600 * Math.min(sceneProgress * 2, 1)

                // Language bar
                ctx.fillStyle = lang.color || "#888888"
                ctx.fillRect(WIDTH / 2 - 300, y, barWidth, 40)

                // Language name
                ctx.font = "bold 32px 'Segoe UI', sans-serif"
                ctx.fillStyle = "#ffffff"
                ctx.textAlign = "left"
                ctx.fillText(lang.name, WIDTH / 2 - 300, y - 20)

                // Percentage
                ctx.textAlign = "right"
                ctx.fillText(`${percentage.toFixed(1)}%`, WIDTH / 2 + 300, y + 30)

                ctx.textAlign = "center"
            })

            // Constellation effect
            if (frame % 10 === 0) {
                addParticles(Math.random() * WIDTH, Math.random() * HEIGHT, 2, "rgba(0, 255, 255, 1)")
            }
        } else if (scene === 4) {
            // Scene 5: Developer class reveal
            const classes = ["Code Voyager", "Binary Architect", "Quantum Coder", "Neural Navigator", "Cosmic Creator"]
            const classIndex = Math.min(Math.floor(data.totalContributions / 200), classes.length - 1)
            const developerClass = classes[classIndex]

            ctx.font = "bold 42px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#ffd700"
            ctx.fillText("DEVELOPER CLASS", WIDTH / 2, 400)

            // Class name with glow effect
            const glowIntensity = Math.sin(sceneProgress * Math.PI * 4) * 0.3 + 0.7
            ctx.shadowColor = "#ff00ff"
            ctx.shadowBlur = 30 * glowIntensity
            ctx.font = "bold 72px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#ff00ff"
            ctx.fillText(developerClass, WIDTH / 2, HEIGHT / 2)
            ctx.shadowBlur = 0

            // Streak stats
            ctx.font = "bold 48px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#00ff88"
            ctx.fillText(`🔥 ${data.longestStreak} Day Streak`, WIDTH / 2, HEIGHT / 2 + 150)

            ctx.font = "36px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#ffffff"
            ctx.fillText(`${data.totalContributions.toLocaleString()} Total Contributions`, WIDTH / 2, HEIGHT / 2 + 220)

            // Achievement particles
            if (sceneProgress > 0.5 && frame % 5 === 0) {
                addParticles(WIDTH / 2, HEIGHT / 2, 10, "rgba(255, 215, 0, 1)")
            }
        } else if (scene === 5) {
            // Scene 6: Finale - CTA
            const scale = 1 + Math.sin(sceneProgress * Math.PI * 2) * 0.05

            ctx.save()
            ctx.translate(WIDTH / 2, HEIGHT / 2 - 100)
            ctx.scale(scale, scale)

            ctx.font = "bold 64px 'Segoe UI', sans-serif"
            ctx.fillStyle = "#ffffff"
            ctx.fillText("Generate Yours", 0, -50)

            const ctaGradient = ctx.createLinearGradient(-200, 0, 200, 0)
            ctaGradient.addColorStop(0, "#ff00ff")
            ctaGradient.addColorStop(1, "#00ffff")
            ctx.fillStyle = ctaGradient
            ctx.font = "bold 96px 'Segoe UI', sans-serif"
            ctx.fillText("gitfm.com", 0, 50)

            ctx.restore()

            // Watermark
            ctx.font = "24px 'Segoe UI', sans-serif"
            ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
            ctx.fillText("gitfm.com", WIDTH / 2, HEIGHT - 100)

            // Explosion particles
            if (sceneProgress < 0.3 && frame % 2 === 0) {
                addParticles(WIDTH / 2, HEIGHT / 2, 20, "rgba(255, 0, 255, 1)")
                addParticles(WIDTH / 2, HEIGHT / 2, 20, "rgba(0, 255, 255, 1)")
            }
        }

        // Always show watermark
        ctx.font = "20px 'Segoe UI', sans-serif"
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
        ctx.textAlign = "right"
        ctx.fillText("gitfm.com", WIDTH - 40, HEIGHT - 40)
        ctx.textAlign = "center"

        // CRT scanlines effect
        ctx.fillStyle = "rgba(0, 0, 0, 0.03)"
        for (let y = 0; y < HEIGHT; y += 4) {
            ctx.fillRect(0, y, WIDTH, 2)
        }
    }, [data, addParticles])

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
            videoBitsPerSecond: 8000000,
        })
        mediaRecorderRef.current = mediaRecorder

        mediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) {
                chunksRef.current.push(e.data)
            }
        }

        mediaRecorder.onstop = () => {
            const blob = new Blob(chunksRef.current, { type: "video/webm" })
            const url = URL.createObjectURL(blob)
            setVideoUrl(url)
            setIsGenerating(false)
        }

        mediaRecorder.start()

        const totalFrames = DURATION * FPS
        for (let frame = 0; frame <= totalFrames; frame++) {
            drawFrame(ctx, frame)
            setProgress((frame / totalFrames) * 100)
            await new Promise((r) => setTimeout(r, 1000 / FPS / 2)) // Faster than realtime
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

        const animate = () => {
            drawFrame(ctx, frame)
            frame++
            if (frame <= totalFrames) {
                animationRef.current = requestAnimationFrame(animate)
            } else {
                setIsPlaying(false)
            }
        }

        animate()
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
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
            if (videoUrl) {
                URL.revokeObjectURL(videoUrl)
            }
        }
    }, [videoUrl])

    // Initial preview frame
    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            const ctx = canvas.getContext("2d")!
            drawFrame(ctx, 0)
        }
    }, [drawFrame])

    // Embedded mode - render inline without modal wrapper
    if (embedded) {
        return (
            <div className="bg-card border border-[#ff00ff]/50 rounded-2xl p-6">
                {/* Canvas Preview */}
                <div className="relative rounded-lg overflow-hidden border border-border/50 mb-4">
                    <canvas
                        ref={canvasRef}
                        width={WIDTH}
                        height={HEIGHT}
                        className="w-full"
                        style={{ maxHeight: "500px", objectFit: "contain" }}
                    />
                    {isGenerating && (
                        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center">
                            <Loader2 className="w-10 h-10 text-[#ff00ff] animate-spin mb-4" />
                            <p className="text-white font-bold">Generating Video...</p>
                            <div className="w-48 h-2 bg-gray-700 rounded-full mt-2">
                                <div
                                    className="h-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-full transition-all"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <p className="text-sm text-gray-400 mt-1">{Math.round(progress)}%</p>
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
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
                            {/* <Button
                                onClick={generateVideo}
                                disabled={isGenerating}
                                className="flex-1 bg-gradient-to-r from-[#ff00ff] to-[#8800ff] hover:opacity-90"
                            >
                                {isGenerating ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Generating...
                                    </>
                                ) : (
                                    "🚀 Generate Video"
                                )}
                            </Button> */}
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
                                Download HD Video
                            </Button>
                        </>
                    )}
                </div>

                {videoUrl && (
                    <p className="text-center text-sm text-[#00ff88] mt-3">
                        ✨ Video ready! Share it on TikTok, Reels, or Stories!
                    </p>
                )}
            </div>
        )
    }

    // Modal mode - original behavior
    return (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="bg-card border border-[#ff00ff]/50 rounded-2xl p-6 max-w-lg mx-4 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                >
                    <X className="w-5 h-5" />
                </button>

                <h2 className="text-2xl font-bold text-center mb-4 neon-pink">
                    🚀 Create Your Video
                </h2>

                <p className="text-center text-muted-foreground text-sm mb-4">
                    Generate a cinematic recap of your 2025 GitHub journey!
                </p>

                {/* Canvas Preview */}
                <div className="relative rounded-lg overflow-hidden border border-border/50 mb-4">
                    <canvas
                        ref={canvasRef}
                        width={WIDTH}
                        height={HEIGHT}
                        className="w-full"
                        style={{ maxHeight: "400px", objectFit: "contain" }}
                    />
                    {isGenerating && (
                        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center">
                            <Loader2 className="w-10 h-10 text-[#ff00ff] animate-spin mb-4" />
                            <p className="text-white font-bold">Generating Video...</p>
                            <div className="w-48 h-2 bg-gray-700 rounded-full mt-2">
                                <div
                                    className="h-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-full transition-all"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <p className="text-sm text-gray-400 mt-1">{Math.round(progress)}%</p>
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    {!videoUrl ? (
                        <>
                            <Button
                                onClick={playPreview}
                                disabled={isPlaying || isGenerating}
                                variant="outline"
                                className="flex-1 border-[#00ffff]/50"
                            >
                                <Play className="w-4 h-4 mr-2" />
                                Preview
                            </Button>
                            <Button
                                onClick={generateVideo}
                                disabled={isGenerating}
                                className="flex-1 bg-gradient-to-r from-[#ff00ff] to-[#8800ff] hover:opacity-90"
                            >
                                {isGenerating ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Generating...
                                    </>
                                ) : (
                                    "Generate Video"
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
                    <p className="text-center text-xs text-muted-foreground mt-3">
                        ✨ Video ready! Share it on TikTok, Reels, or Stories!
                    </p>
                )}
            </div>
        </div>
    )
}
