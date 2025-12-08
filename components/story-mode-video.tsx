// // "use client"

// // import { useRef, useState, useEffect, useCallback } from "react"
// // import { Button } from "@/components/ui/button"
// // import { Download, Play, Loader2, Sparkles, Rocket } from "lucide-react"
// // import type { GitHubData } from "@/lib/types"

// // interface VideoProps {
// //     data: GitHubData
// // }

// // // Types for our engine
// // interface Star {
// //     x: number; y: number; z: number; size: number; color: string
// // }
// // interface Particle {
// //     x: number; y: number; vx: number; vy: number; life: number; color: string; size: number; type: "spark" | "smoke" | "glitch"
// // }
// // interface Planet {
// //     x: number; y: number; radius: number; color: string; type: "wireframe" | "gas" | "sun"; rotation: number
// // }

// // export function StoryModeVideo({ data }: VideoProps) {
// //     const canvasRef = useRef<HTMLCanvasElement>(null)
// //     const [status, setStatus] = useState<"idle" | "playing" | "generating" | "done">("idle")
// //     const [progress, setProgress] = useState(0)
// //     const [videoUrl, setVideoUrl] = useState<string | null>(null)
    
// //     // Engine Refs
// //     const animationRef = useRef<number>(0)
// //     const chunksRef = useRef<Blob[]>([])
// //     const starsRef = useRef<Star[]>([])
// //     const particlesRef = useRef<Particle[]>([])
    
// //     // Constants
// //     const WIDTH = 1080
// //     const HEIGHT = 1920
// //     const FPS = 30
// //     const DURATION = 20 // Short & punchy for TikTok
    
// //     // Initialize Universe
// //     useEffect(() => {
// //         starsRef.current = Array.from({ length: 800 }, () => ({
// //             x: (Math.random() - 0.5) * WIDTH * 3,
// //             y: (Math.random() - 0.5) * HEIGHT * 3,
// //             z: Math.random() * 2000,
// //             size: Math.random() * 2,
// //             color: Math.random() > 0.9 ? "#00ffff" : "#ffffff"
// //         }))
// //     }, [])

// //     const addExplosion = (x: number, y: number, color: string, count = 20) => {
// //         for(let i=0; i<count; i++) {
// //             const angle = Math.random() * Math.PI * 2
// //             const speed = Math.random() * 15
// //             particlesRef.current.push({
// //                 x, y,
// //                 vx: Math.cos(angle) * speed,
// //                 vy: Math.sin(angle) * speed,
// //                 life: 1.0,
// //                 color,
// //                 size: Math.random() * 5 + 2,
// //                 type: "spark"
// //             })
// //         }
// //     }

// //     // The Main Render Function
// //     const drawFrame = useCallback((ctx: CanvasRenderingContext2D, frame: number) => {
// //         const t = frame / (DURATION * FPS) // Normalized time 0 -> 1
        
// //         // --- 1. Background & Camera ---
// //         const warpFactor = (t > 0.1 && t < 0.2) || (t > 0.4 && t < 0.5) || (t > 0.7 && t < 0.8) ? 50 : 2
        
// //         // Shake effect during warp
// //         const shakeX = warpFactor > 10 ? (Math.random() - 0.5) * 10 : 0
// //         const shakeY = warpFactor > 10 ? (Math.random() - 0.5) * 10 : 0
        
// //         ctx.save()
// //         ctx.translate(shakeX, shakeY)

// //         // Deep Space
// //         ctx.fillStyle = "#050510"
// //         ctx.fillRect(-50, -50, WIDTH + 100, HEIGHT + 100)

// //         // 3D Stars
// //         const centerX = WIDTH / 2
// //         const centerY = HEIGHT / 2
        
// //         starsRef.current.forEach(star => {
// //             star.z -= 10 * warpFactor
// //             if (star.z <= 0) {
// //                 star.z = 2000
// //                 star.x = (Math.random() - 0.5) * WIDTH * 3
// //                 star.y = (Math.random() - 0.5) * HEIGHT * 3
// //             }
            
// //             const perspective = 400 / star.z
// //             const sx = centerX + star.x * perspective
// //             const sy = centerY + star.y * perspective
            
// //             if (sx > 0 && sx < WIDTH && sy > 0 && sy < HEIGHT) {
// //                 const size = star.size * perspective * (warpFactor > 10 ? 0.5 : 1)
                
// //                 // Warp trails
// //                 if (warpFactor > 10) {
// //                     ctx.beginPath()
// //                     ctx.moveTo(sx, sy)
// //                     ctx.lineTo(centerX + (sx - centerX) * 0.9, centerY + (sy - centerY) * 0.9)
// //                     ctx.strokeStyle = `rgba(200, 255, 255, ${0.2 * perspective})`
// //                     ctx.lineWidth = size
// //                     ctx.stroke()
// //                 } else {
// //                     ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, perspective)})`
// //                     ctx.beginPath()
// //                     ctx.arc(sx, sy, size, 0, Math.PI*2)
// //                     ctx.fill()
// //                 }
// //             }
// //         })

// //         // --- 2. Narrative Scenes ---
        
// //         // SCENE 1: SYSTEM BOOT (0% - 15%)
// //         if (t < 0.15) {
// //             const opacity = Math.min(1, t * 10)
// //             ctx.globalAlpha = opacity
            
// //             // Cyberpunk Grid
// //             ctx.strokeStyle = "rgba(0, 255, 255, 0.2)"
// //             ctx.lineWidth = 2
// //             const gridY = HEIGHT / 2 + 200
// //             ctx.beginPath()
// //             for(let i=-10; i<=10; i++) {
// //                 ctx.moveTo(WIDTH/2 + i*100 * t*2, gridY)
// //                 ctx.lineTo(WIDTH/2 + i*200, HEIGHT)
// //             }
// //             ctx.stroke()

// //             // Text
// //             ctx.textAlign = "center"
// //             ctx.font = "bold 80px 'Courier New'"
// //             ctx.fillStyle = "#00ffff"
// //             ctx.shadowColor = "#00ffff"
// //             ctx.shadowBlur = 20
// //             ctx.fillText("SYSTEM INITIALIZED", WIDTH/2, HEIGHT/2 - 100)
            
// //             ctx.font = "40px 'Courier New'"
// //             ctx.fillStyle = "#ffffff"
// //             ctx.shadowBlur = 0
// //             ctx.fillText(`PILOT: @${data.user.login.toUpperCase()}`, WIDTH/2, HEIGHT/2 + 50)
            
// //             // Loading Bar
// //             const barW = 600
// //             ctx.fillStyle = "#333"
// //             ctx.fillRect(WIDTH/2 - barW/2, HEIGHT/2 + 150, barW, 20)
// //             ctx.fillStyle = "#00ff00"
// //             ctx.fillRect(WIDTH/2 - barW/2, HEIGHT/2 + 150, barW * (t/0.15), 20)
// //         }

// //         // SCENE 2: PLANET COMMITS (15% - 40%)
// //         else if (t >= 0.15 && t < 0.40) {
// //             const localT = (t - 0.15) / 0.25
            
// //             // Draw Wireframe Planet
// //             const planetX = WIDTH/2
// //             const planetY = HEIGHT/2 + 100
// //             const radius = 300
            
// //             ctx.save()
// //             ctx.translate(planetX, planetY)
// //             ctx.rotate(frame * 0.01)
            
// //             ctx.strokeStyle = "#00ff88"
// //             ctx.lineWidth = 2
// //             ctx.beginPath()
// //             ctx.arc(0, 0, radius, 0, Math.PI*2)
// //             ctx.stroke()
            
// //             // Latitude lines
// //             for(let i=0; i<5; i++) {
// //                 ctx.beginPath()
// //                 ctx.ellipse(0, 0, radius, radius * (0.2 + i*0.15), 0, 0, Math.PI*2)
// //                 ctx.stroke()
// //             }
// //             ctx.restore()

// //             // Hologram Stats
// //             ctx.textAlign = "center"
// //             const scale = Math.min(1, localT * 5)
            
// //             ctx.save()
// //             ctx.translate(WIDTH/2, 400)
// //             ctx.scale(scale, scale)
            
// //             ctx.font = "bold 120px 'Segoe UI'"
// //             ctx.fillStyle = "#ffffff"
// //             ctx.shadowColor = "#00ff88"
// //             ctx.shadowBlur = 30
// //             ctx.fillText(data.totalCommits.toLocaleString(), 0, 0)
            
// //             ctx.font = "40px 'Segoe UI'"
// //             ctx.fillStyle = "#00ff88"
// //             ctx.shadowBlur = 0
// //             ctx.fillText("COMMITS DEPLOYED", 0, 60)
// //             ctx.restore()

// //             // Particles
// //             if (frame % 5 === 0) {
// //                 addExplosion(WIDTH/2, HEIGHT/2, "#00ff88", 2)
// //             }
// //         }

// //         // SCENE 3: NEBULA OF LANGUAGES (40% - 65%)
// //         else if (t >= 0.40 && t < 0.65) {
// //             const localT = (t - 0.40) / 0.25
            
// //             // Draw Nebula Clouds (Gradient blobs)
// //             const gradient = ctx.createRadialGradient(WIDTH/2, HEIGHT/2, 50, WIDTH/2, HEIGHT/2, 600)
// //             gradient.addColorStop(0, "rgba(255, 0, 255, 0.2)")
// //             gradient.addColorStop(0.5, "rgba(0, 255, 255, 0.1)")
// //             gradient.addColorStop(1, "transparent")
// //             ctx.fillStyle = gradient
// //             ctx.fillRect(0, 0, WIDTH, HEIGHT)

// //             // Orbiting Languages
// //             const topLangs = data.languages.slice(0, 4)
// //             topLangs.forEach((lang, i) => {
// //                 const angle = (frame * 0.02) + (i * (Math.PI * 2 / topLangs.length))
// //                 const orbitR = 350
// //                 const lx = WIDTH/2 + Math.cos(angle) * orbitR
// //                 const ly = HEIGHT/2 + Math.sin(angle) * orbitR

// //                 // Connection line
// //                 ctx.beginPath()
// //                 ctx.moveTo(WIDTH/2, HEIGHT/2)
// //                 ctx.lineTo(lx, ly)
// //                 ctx.strokeStyle = "rgba(255,255,255,0.1)"
// //                 ctx.stroke()

// //                 // Planet/Node
// //                 ctx.beginPath()
// //                 ctx.arc(lx, ly, 40, 0, Math.PI*2)
// //                 ctx.fillStyle = lang.color || "#fff"
// //                 ctx.fill()
                
// //                 // Label
// //                 ctx.font = "bold 30px 'Segoe UI'"
// //                 ctx.fillStyle = "#fff"
// //                 ctx.fillText(lang.name, lx, ly + 60)
// //             })

// //             // Center Stat
// //             ctx.font = "bold 50px 'Segoe UI'"
// //             ctx.fillStyle = "#fff"
// //             ctx.fillText("TOP LANGUAGES", WIDTH/2, 200)
// //         }

// //         // SCENE 4: THE SOLAR STREAK (65% - 85%)
// //         else if (t >= 0.65 && t < 0.85) {
// //             const localT = (t - 0.65) / 0.2
            
// //             // Burning Sun
// //             const sunY = HEIGHT/2 + 100
// //             const glow = 100 + Math.sin(frame * 0.1) * 20
            
// //             const sunGrad = ctx.createRadialGradient(WIDTH/2, sunY, 100, WIDTH/2, sunY, 500)
// //             sunGrad.addColorStop(0, "#ffff00")
// //             sunGrad.addColorStop(0.4, "#ff8800")
// //             sunGrad.addColorStop(1, "transparent")
            
// //             ctx.fillStyle = sunGrad
// //             ctx.fillRect(0, 0, WIDTH, HEIGHT)
            
// //             ctx.fillStyle = "#fff"
// //             ctx.beginPath()
// //             ctx.arc(WIDTH/2, sunY, 150, 0, Math.PI*2)
// //             ctx.fill()

// //             // Fire Text
// //             ctx.font = "bold 180px 'Segoe UI'"
// //             ctx.fillStyle = "#000"
// //             ctx.fillText("🔥", WIDTH/2, sunY + 60)

// //             ctx.font = "bold 140px 'Segoe UI'"
// //             ctx.fillStyle = "#ffffff"
// //             ctx.shadowColor = "#ff0000"
// //             ctx.shadowBlur = 40
// //             ctx.fillText(`${data.longestStreak}`, WIDTH/2, 400)
// //             ctx.font = "50px 'Segoe UI'"
// //             ctx.fillText("DAY STREAK", WIDTH/2, 500)
// //             ctx.shadowBlur = 0
// //         }

// //         // SCENE 5: MISSION REPORT (85% - 100%)
// //         else {
// //             const localT = (t - 0.85) / 0.15
            
// //             // Card Slide In
// //             const cardY = HEIGHT/2 + (1-Math.min(1, localT*2)) * 500
            
// //             // Glassmorphism Card
// //             ctx.save()
// //             ctx.translate(WIDTH/2, cardY)
            
// //             ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
// //             ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
// //             ctx.lineWidth = 2
// //             ctx.beginPath()
// //             ctx.roundRect(-400, -300, 800, 600, 40)
// //             ctx.fill()
// //             ctx.stroke()
            
// //             // Content
// //             ctx.fillStyle = "#fff"
// //             ctx.font = "bold 60px 'Segoe UI'"
// //             ctx.fillText("MISSION COMPLETE", 0, -200)
            
// //             ctx.font = "40px 'Segoe UI'"
// //             ctx.fillStyle = "#aaa"
// //             ctx.fillText("Class: " + getRank(data.totalContributions), 0, -120)

// //             // Mini Stats
// //             const stats = [
// //                 { l: "Stars", v: data.totalStarsEarned },
// //                 { l: "PRs", v: data.totalPRsMerged },
// //                 { l: "Issues", v: data.totalIssuesOpened }
// //             ]
            
// //             stats.forEach((s, i) => {
// //                 const x = (i - 1) * 250
// //                 ctx.font = "bold 50px 'Segoe UI'"
// //                 ctx.fillStyle = "#00ffff"
// //                 ctx.fillText(s.v.toString(), x, 50)
// //                 ctx.font = "30px 'Segoe UI'"
// //                 ctx.fillStyle = "#fff"
// //                 ctx.fillText(s.l, x, 100)
// //             })

// //             // Footer
// //             ctx.font = "bold 50px 'Segoe UI'"
// //             ctx.fillStyle = "#ff00ff"
// //             ctx.fillText("gitfm.com", 0, 220)
            
// //             ctx.restore()
// //         }

// //         // --- 3. HUD Overlay (Always On) ---
// //         drawHUD(ctx, WIDTH, HEIGHT, frame, data)

// //         // Particles Update
// //         particlesRef.current = particlesRef.current.filter(p => p.life > 0)
// //         particlesRef.current.forEach(p => {
// //             p.x += p.vx
// //             p.y += p.vy
// //             p.life -= 0.02
// //             ctx.globalAlpha = p.life
// //             ctx.fillStyle = p.color
// //             ctx.beginPath()
// //             ctx.arc(p.x, p.y, p.size, 0, Math.PI*2)
// //             ctx.fill()
// //         })
// //         ctx.globalAlpha = 1
// //         ctx.restore() // Restore shake

// //     }, [data])

// //     const drawHUD = (ctx: CanvasRenderingContext2D, w: number, h: number, f: number, data: GitHubData) => {
// //         // Corners
// //         ctx.strokeStyle = "rgba(0, 255, 255, 0.5)"
// //         ctx.lineWidth = 4
// //         const m = 40
// //         const len = 60
        
// //         // Top Left
// //         ctx.beginPath(); ctx.moveTo(m, m+len); ctx.lineTo(m, m); ctx.lineTo(m+len, m); ctx.stroke()
// //         // Top Right
// //         ctx.beginPath(); ctx.moveTo(w-m-len, m); ctx.lineTo(w-m, m); ctx.lineTo(w-m, m+len); ctx.stroke()
// //         // Bottom Left
// //         ctx.beginPath(); ctx.moveTo(m, h-m-len); ctx.lineTo(m, h-m); ctx.lineTo(m+len, h-m); ctx.stroke()
// //         // Bottom Right
// //         ctx.beginPath(); ctx.moveTo(w-m-len, h-m); ctx.lineTo(w-m, h-m); ctx.lineTo(w-m, h-m-len); ctx.stroke()

// //         // Scanning Line
// //         const scanY = (f % 200) / 200 * h
// //         ctx.fillStyle = "rgba(0, 255, 255, 0.05)"
// //         ctx.fillRect(0, scanY, w, 10)

// //         // Bottom Text
// //         ctx.font = "24px 'Courier New'"
// //         ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
// //         ctx.textAlign = "left"
// //         ctx.fillText(`ALT: ${(f * 123) % 99999} FT`, 60, h - 60)
// //         ctx.textAlign = "right"
// //         ctx.fillText(`V: ${Math.floor(299792 + Math.sin(f*0.1)*100)} km/s`, w - 60, h - 60)
// //         ctx.textAlign = "center"
// //     }

// //     const getRank = (contribs: number) => {
// //         if(contribs > 1000) return "GALACTIC LEGEND"
// //         if(contribs > 500) return "FLEET ADMIRAL"
// //         if(contribs > 100) return "SPACE COMMANDER"
// //         return "STAR CADET"
// //     }

// //     // Video Recording Logic
// //     const generate = async () => {
// //         setStatus("generating")
// //         const canvas = canvasRef.current
// //         if (!canvas) return
        
// //         const stream = canvas.captureStream(FPS)
// //         const recorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp9', videoBitsPerSecond: 8000000 })
        
// //         recorder.ondataavailable = e => { if (e.data.size > 0) chunksRef.current.push(e.data) }
// //         recorder.onstop = () => {
// //             const blob = new Blob(chunksRef.current, { type: 'video/webm' })
// //             setVideoUrl(URL.createObjectURL(blob))
// //             setStatus("done")
// //         }
        
// //         recorder.start()
// //         const ctx = canvas.getContext('2d')!
        
// //         for (let i = 0; i < DURATION * FPS; i++) {
// //             drawFrame(ctx, i)
// //             setProgress((i / (DURATION * FPS)) * 100)
// //             await new Promise(r => setTimeout(r, 0)) // No delay for fast generation
// //         }
// //         recorder.stop()
// //     }

// //     const preview = () => {
// //         setStatus("playing")
// //         let f = 0
// //         const loop = () => {
// //             if (canvasRef.current) drawFrame(canvasRef.current.getContext('2d')!, f++)
// //             if (f < DURATION * FPS && status !== 'idle') requestAnimationFrame(loop)
// //             else setStatus("idle")
// //         }
// //         loop()
// //     }

// //     return (
// //         <div className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto p-4">
// //              <div className="relative w-full aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.3)] border border-[#333]">
// //                 <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} className="w-full h-full object-cover" />
                
// //                 {status === 'generating' && (
// //                     <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
// //                         <Rocket className="w-12 h-12 text-[#ff00ff] animate-bounce mb-4" />
// //                         <div className="text-[#00ffff] font-mono text-xl mb-2">RENDERING UNIVERSE...</div>
// //                         <div className="w-64 h-2 bg-[#333] rounded-full overflow-hidden">
// //                             <div className="h-full bg-[#00ffff]" style={{width: `${progress}%`}} />
// //                         </div>
// //                     </div>
// //                 )}
// //             </div>

// //             <div className="flex gap-4 w-full">
// //                 {!videoUrl ? (
// //                     <>
// //                         <Button onClick={preview} variant="outline" className="flex-1 h-12 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10">
// //                             <Play className="w-4 h-4 mr-2" /> PREVIEW
// //                         </Button>
// //                         <Button onClick={generate} className="flex-1 h-12 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-black font-bold">
// //                             <Sparkles className="w-4 h-4 mr-2" /> GENERATE
// //                         </Button>
// //                     </>
// //                 ) : (
// //                     <Button onClick={() => {
// //                         const a = document.createElement('a')
// //                         a.href = videoUrl
// //                         a.download = `gitfm-story-${data.user.login}.webm`
// //                         a.click()
// //                     }} className="w-full h-12 bg-[#00ff88] text-black font-bold text-lg animate-pulse">
// //                         <Download className="w-5 h-5 mr-2" /> DOWNLOAD VIDEO
// //                     </Button>
// //                 )}
// //             </div>
// //         </div>
// //     )
// // }































// "use client"

// import { useRef, useState, useEffect, useCallback } from "react"
// import { Button } from "@/components/ui/button"
// import { Download, Play, Loader2, Sparkles, Rocket } from "lucide-react"
// import type { GitHubData } from "@/lib/types"

// interface VideoProps {
//     data: GitHubData
// }

// // Types for our engine
// interface Star {
//     x: number; y: number; z: number; size: number; color: string
// }
// interface Particle {
//     x: number; y: number; vx: number; vy: number; life: number; color: string; size: number; type: "spark" | "smoke" | "glitch"
// }

// export function StoryModeVideo({ data }: VideoProps) {
//     const canvasRef = useRef<HTMLCanvasElement>(null)
//     const [status, setStatus] = useState<"idle" | "playing" | "generating" | "done">("idle")
//     const [progress, setProgress] = useState(0)
//     const [videoUrl, setVideoUrl] = useState<string | null>(null)
    
//     // Engine Refs
//     const animationRef = useRef<number>(0)
//     const isPlayingRef = useRef(false) // Fix: Use ref to track playing state
//     const chunksRef = useRef<Blob[]>([])
//     const starsRef = useRef<Star[]>([])
//     const particlesRef = useRef<Particle[]>([])
    
//     // Constants
//     const WIDTH = 1080
//     const HEIGHT = 1920
//     const FPS = 30
//     const DURATION = 20 // Short & punchy for TikTok
    
//     // Initialize Universe
//     useEffect(() => {
//         starsRef.current = Array.from({ length: 800 }, () => ({
//             x: (Math.random() - 0.5) * WIDTH * 3,
//             y: (Math.random() - 0.5) * HEIGHT * 3,
//             z: Math.random() * 2000,
//             size: Math.random() * 2,
//             color: Math.random() > 0.9 ? "#00ffff" : "#ffffff"
//         }))
//     }, [])

//     const addExplosion = (x: number, y: number, color: string, count = 20) => {
//         for(let i=0; i<count; i++) {
//             const angle = Math.random() * Math.PI * 2
//             const speed = Math.random() * 15
//             particlesRef.current.push({
//                 x, y,
//                 vx: Math.cos(angle) * speed,
//                 vy: Math.sin(angle) * speed,
//                 life: 1.0,
//                 color,
//                 size: Math.random() * 5 + 2,
//                 type: "spark"
//             })
//         }
//     }

//     // The Main Render Function
//     const drawFrame = useCallback((ctx: CanvasRenderingContext2D, frame: number) => {
//         const t = frame / (DURATION * FPS) // Normalized time 0 -> 1
        
//         // --- 1. Background & Camera ---
//         const warpFactor = (t > 0.1 && t < 0.2) || (t > 0.4 && t < 0.5) || (t > 0.7 && t < 0.8) ? 50 : 2
        
//         // Shake effect during warp
//         const shakeX = warpFactor > 10 ? (Math.random() - 0.5) * 10 : 0
//         const shakeY = warpFactor > 10 ? (Math.random() - 0.5) * 10 : 0
        
//         ctx.save()
//         ctx.translate(shakeX, shakeY)

//         // Deep Space
//         ctx.fillStyle = "#050510"
//         ctx.fillRect(-50, -50, WIDTH + 100, HEIGHT + 100)

//         // 3D Stars
//         const centerX = WIDTH / 2
//         const centerY = HEIGHT / 2
        
//         starsRef.current.forEach(star => {
//             star.z -= 10 * warpFactor
//             if (star.z <= 0) {
//                 star.z = 2000
//                 star.x = (Math.random() - 0.5) * WIDTH * 3
//                 star.y = (Math.random() - 0.5) * HEIGHT * 3
//             }
            
//             const perspective = 400 / star.z
//             const sx = centerX + star.x * perspective
//             const sy = centerY + star.y * perspective
            
//             if (sx > 0 && sx < WIDTH && sy > 0 && sy < HEIGHT) {
//                 const size = star.size * perspective * (warpFactor > 10 ? 0.5 : 1)
                
//                 // Warp trails
//                 if (warpFactor > 10) {
//                     ctx.beginPath()
//                     ctx.moveTo(sx, sy)
//                     ctx.lineTo(centerX + (sx - centerX) * 0.9, centerY + (sy - centerY) * 0.9)
//                     ctx.strokeStyle = `rgba(200, 255, 255, ${0.2 * perspective})`
//                     ctx.lineWidth = size
//                     ctx.stroke()
//                 } else {
//                     ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, perspective)})`
//                     ctx.beginPath()
//                     ctx.arc(sx, sy, size, 0, Math.PI*2)
//                     ctx.fill()
//                 }
//             }
//         })

//         // --- 2. Narrative Scenes ---
        
//         // SCENE 1: SYSTEM BOOT (0% - 15%)
//         if (t < 0.15) {
//             const opacity = Math.min(1, t * 10)
//             ctx.globalAlpha = opacity
            
//             // Cyberpunk Grid
//             ctx.strokeStyle = "rgba(0, 255, 255, 0.2)"
//             ctx.lineWidth = 2
//             const gridY = HEIGHT / 2 + 200
//             ctx.beginPath()
//             for(let i=-10; i<=10; i++) {
//                 ctx.moveTo(WIDTH/2 + i*100 * t*2, gridY)
//                 ctx.lineTo(WIDTH/2 + i*200, HEIGHT)
//             }
//             ctx.stroke()

//             // Text
//             ctx.textAlign = "center"
//             ctx.font = "bold 80px 'Courier New'"
//             ctx.fillStyle = "#00ffff"
//             ctx.shadowColor = "#00ffff"
//             ctx.shadowBlur = 20
//             ctx.fillText("SYSTEM INITIALIZED", WIDTH/2, HEIGHT/2 - 100)
            
//             ctx.font = "40px 'Courier New'"
//             ctx.fillStyle = "#ffffff"
//             ctx.shadowBlur = 0
//             ctx.fillText(`PILOT: @${data.user.login.toUpperCase()}`, WIDTH/2, HEIGHT/2 + 50)
            
//             // Loading Bar
//             const barW = 600
//             ctx.fillStyle = "#333"
//             ctx.fillRect(WIDTH/2 - barW/2, HEIGHT/2 + 150, barW, 20)
//             ctx.fillStyle = "#00ff00"
//             ctx.fillRect(WIDTH/2 - barW/2, HEIGHT/2 + 150, barW * (t/0.15), 20)
//         }

//         // SCENE 2: PLANET COMMITS (15% - 40%)
//         else if (t >= 0.15 && t < 0.40) {
//             const localT = (t - 0.15) / 0.25
            
//             // Draw Wireframe Planet
//             const planetX = WIDTH/2
//             const planetY = HEIGHT/2 + 100
//             const radius = 300
            
//             ctx.save()
//             ctx.translate(planetX, planetY)
//             ctx.rotate(frame * 0.01)
            
//             ctx.strokeStyle = "#00ff88"
//             ctx.lineWidth = 2
//             ctx.beginPath()
//             ctx.arc(0, 0, radius, 0, Math.PI*2)
//             ctx.stroke()
            
//             // Latitude lines
//             for(let i=0; i<5; i++) {
//                 ctx.beginPath()
//                 ctx.ellipse(0, 0, radius, radius * (0.2 + i*0.15), 0, 0, Math.PI*2)
//                 ctx.stroke()
//             }
//             ctx.restore()

//             // Hologram Stats
//             ctx.textAlign = "center"
//             const scale = Math.min(1, localT * 5)
            
//             ctx.save()
//             ctx.translate(WIDTH/2, 400)
//             ctx.scale(scale, scale)
            
//             ctx.font = "bold 120px 'Segoe UI'"
//             ctx.fillStyle = "#ffffff"
//             ctx.shadowColor = "#00ff88"
//             ctx.shadowBlur = 30
//             ctx.fillText(data.totalCommits.toLocaleString(), 0, 0)
            
//             ctx.font = "40px 'Segoe UI'"
//             ctx.fillStyle = "#00ff88"
//             ctx.shadowBlur = 0
//             ctx.fillText("COMMITS DEPLOYED", 0, 60)
//             ctx.restore()

//             // Particles
//             if (frame % 5 === 0) {
//                 addExplosion(WIDTH/2, HEIGHT/2, "#00ff88", 2)
//             }
//         }

//         // SCENE 3: NEBULA OF LANGUAGES (40% - 65%)
//         else if (t >= 0.40 && t < 0.65) {
//             const localT = (t - 0.40) / 0.25
            
//             // Draw Nebula Clouds (Gradient blobs)
//             const gradient = ctx.createRadialGradient(WIDTH/2, HEIGHT/2, 50, WIDTH/2, HEIGHT/2, 600)
//             gradient.addColorStop(0, "rgba(255, 0, 255, 0.2)")
//             gradient.addColorStop(0.5, "rgba(0, 255, 255, 0.1)")
//             gradient.addColorStop(1, "transparent")
//             ctx.fillStyle = gradient
//             ctx.fillRect(0, 0, WIDTH, HEIGHT)

//             // Orbiting Languages
//             const topLangs = data.languages.slice(0, 4)
//             topLangs.forEach((lang, i) => {
//                 const angle = (frame * 0.02) + (i * (Math.PI * 2 / topLangs.length))
//                 const orbitR = 350
//                 const lx = WIDTH/2 + Math.cos(angle) * orbitR
//                 const ly = HEIGHT/2 + Math.sin(angle) * orbitR

//                 // Connection line
//                 ctx.beginPath()
//                 ctx.moveTo(WIDTH/2, HEIGHT/2)
//                 ctx.lineTo(lx, ly)
//                 ctx.strokeStyle = "rgba(255,255,255,0.1)"
//                 ctx.stroke()

//                 // Planet/Node
//                 ctx.beginPath()
//                 ctx.arc(lx, ly, 40, 0, Math.PI*2)
//                 ctx.fillStyle = lang.color || "#fff"
//                 ctx.fill()
                
//                 // Label
//                 ctx.font = "bold 30px 'Segoe UI'"
//                 ctx.fillStyle = "#fff"
//                 ctx.fillText(lang.name, lx, ly + 60)
//             })

//             // Center Stat
//             ctx.font = "bold 50px 'Segoe UI'"
//             ctx.fillStyle = "#fff"
//             ctx.fillText("TOP LANGUAGES", WIDTH/2, 200)
//         }

//         // SCENE 4: THE SOLAR STREAK (65% - 85%)
//         else if (t >= 0.65 && t < 0.85) {
//             const localT = (t - 0.65) / 0.2
            
//             // Burning Sun
//             const sunY = HEIGHT/2 + 100
            
//             const sunGrad = ctx.createRadialGradient(WIDTH/2, sunY, 100, WIDTH/2, sunY, 500)
//             sunGrad.addColorStop(0, "#ffff00")
//             sunGrad.addColorStop(0.4, "#ff8800")
//             sunGrad.addColorStop(1, "transparent")
            
//             ctx.fillStyle = sunGrad
//             ctx.fillRect(0, 0, WIDTH, HEIGHT)
            
//             ctx.fillStyle = "#fff"
//             ctx.beginPath()
//             ctx.arc(WIDTH/2, sunY, 150, 0, Math.PI*2)
//             ctx.fill()

//             // Fire Text
//             ctx.font = "bold 180px 'Segoe UI'"
//             ctx.fillStyle = "#000"
//             ctx.fillText("🔥", WIDTH/2, sunY + 60)

//             ctx.font = "bold 140px 'Segoe UI'"
//             ctx.fillStyle = "#ffffff"
//             ctx.shadowColor = "#ff0000"
//             ctx.shadowBlur = 40
//             ctx.fillText(`${data.longestStreak}`, WIDTH/2, 400)
//             ctx.font = "50px 'Segoe UI'"
//             ctx.fillText("DAY STREAK", WIDTH/2, 500)
//             ctx.shadowBlur = 0
//         }

//         // SCENE 5: MISSION REPORT (85% - 100%)
//         else {
//             const localT = (t - 0.85) / 0.15
            
//             // Card Slide In
//             const cardY = HEIGHT/2 + (1-Math.min(1, localT*2)) * 500
            
//             // Glassmorphism Card
//             ctx.save()
//             ctx.translate(WIDTH/2, cardY)
            
//             ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
//             ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
//             ctx.lineWidth = 2
//             ctx.beginPath()
//             ctx.roundRect(-400, -300, 800, 600, 40)
//             ctx.fill()
//             ctx.stroke()
            
//             // Content
//             ctx.fillStyle = "#fff"
//             ctx.font = "bold 60px 'Segoe UI'"
//             ctx.fillText("MISSION COMPLETE", 0, -200)
            
//             ctx.font = "40px 'Segoe UI'"
//             ctx.fillStyle = "#aaa"
//             ctx.fillText("Class: " + getRank(data.totalContributions), 0, -120)

//             // Mini Stats
//             const stats = [
//                 { l: "Stars", v: data.totalStarsEarned },
//                 { l: "PRs", v: data.totalPRsMerged },
//                 { l: "Issues", v: data.totalIssuesOpened }
//             ]
            
//             stats.forEach((s, i) => {
//                 const x = (i - 1) * 250
//                 ctx.font = "bold 50px 'Segoe UI'"
//                 ctx.fillStyle = "#00ffff"
//                 ctx.fillText(s.v.toString(), x, 50)
//                 ctx.font = "30px 'Segoe UI'"
//                 ctx.fillStyle = "#fff"
//                 ctx.fillText(s.l, x, 100)
//             })

//             // Footer
//             ctx.font = "bold 50px 'Segoe UI'"
//             ctx.fillStyle = "#ff00ff"
//             ctx.fillText("gitfm.com", 0, 220)
            
//             ctx.restore()
//         }

//         // --- 3. HUD Overlay (Always On) ---
//         drawHUD(ctx, WIDTH, HEIGHT, frame, data)

//         // Particles Update
//         particlesRef.current = particlesRef.current.filter(p => p.life > 0)
//         particlesRef.current.forEach(p => {
//             p.x += p.vx
//             p.y += p.vy
//             p.life -= 0.02
//             ctx.globalAlpha = p.life
//             ctx.fillStyle = p.color
//             ctx.beginPath()
//             ctx.arc(p.x, p.y, p.size, 0, Math.PI*2)
//             ctx.fill()
//         })
//         ctx.globalAlpha = 1
//         ctx.restore() // Restore shake

//     }, [data])

//     const drawHUD = (ctx: CanvasRenderingContext2D, w: number, h: number, f: number, data: GitHubData) => {
//         // Corners
//         ctx.strokeStyle = "rgba(0, 255, 255, 0.5)"
//         ctx.lineWidth = 4
//         const m = 40
//         const len = 60
        
//         // Top Left
//         ctx.beginPath(); ctx.moveTo(m, m+len); ctx.lineTo(m, m); ctx.lineTo(m+len, m); ctx.stroke()
//         // Top Right
//         ctx.beginPath(); ctx.moveTo(w-m-len, m); ctx.lineTo(w-m, m); ctx.lineTo(w-m, m+len); ctx.stroke()
//         // Bottom Left
//         ctx.beginPath(); ctx.moveTo(m, h-m-len); ctx.lineTo(m, h-m); ctx.lineTo(m+len, h-m); ctx.stroke()
//         // Bottom Right
//         ctx.beginPath(); ctx.moveTo(w-m-len, h-m); ctx.lineTo(w-m, h-m); ctx.lineTo(w-m, h-m-len); ctx.stroke()

//         // Scanning Line
//         const scanY = (f % 200) / 200 * h
//         ctx.fillStyle = "rgba(0, 255, 255, 0.05)"
//         ctx.fillRect(0, scanY, w, 10)

//         // Bottom Text
//         ctx.font = "24px 'Courier New'"
//         ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
//         ctx.textAlign = "left"
//         ctx.fillText(`ALT: ${(f * 123) % 99999} FT`, 60, h - 60)
//         ctx.textAlign = "right"
//         ctx.fillText(`V: ${Math.floor(299792 + Math.sin(f*0.1)*100)} km/s`, w - 60, h - 60)
//         ctx.textAlign = "center"
//     }

//     const getRank = (contribs: number) => {
//         if(contribs > 1000) return "GALACTIC LEGEND"
//         if(contribs > 500) return "FLEET ADMIRAL"
//         if(contribs > 100) return "SPACE COMMANDER"
//         return "STAR CADET"
//     }

//     // Video Recording Logic
//     const generate = async () => {
//         setStatus("generating")
//         const canvas = canvasRef.current
//         if (!canvas) return
        
//         const stream = canvas.captureStream(FPS)
//         const recorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp9', videoBitsPerSecond: 8000000 })
        
//         recorder.ondataavailable = e => { if (e.data.size > 0) chunksRef.current.push(e.data) }
//         recorder.onstop = () => {
//             const blob = new Blob(chunksRef.current, { type: 'video/webm' })
//             setVideoUrl(URL.createObjectURL(blob))
//             setStatus("done")
//         }
        
//         recorder.start()
//         const ctx = canvas.getContext('2d')!
        
//         for (let i = 0; i < DURATION * FPS; i++) {
//             drawFrame(ctx, i)
//             setProgress((i / (DURATION * FPS)) * 100)
//             await new Promise(r => setTimeout(r, 0)) // No delay for fast generation
//         }
//         recorder.stop()
//     }

//     // Fix: Updated preview function using Refs
//     const preview = useCallback(() => {
//         if (isPlayingRef.current) return // Prevent double click
        
//         setStatus("playing")
//         isPlayingRef.current = true
//         let f = 0
        
//         const loop = () => {
//             if (!canvasRef.current || !isPlayingRef.current) {
//                 setStatus("idle")
//                 isPlayingRef.current = false
//                 return
//             }

//             const ctx = canvasRef.current.getContext('2d')!
//             drawFrame(ctx, f)
//             f++

//             if (f < DURATION * FPS) {
//                 animationRef.current = requestAnimationFrame(loop)
//             } else {
//                 setStatus("idle")
//                 isPlayingRef.current = false
//             }
//         }
//         loop()
//     }, [DURATION, FPS, drawFrame])

//     // Clean up animation on unmount
//     useEffect(() => {
//         return () => {
//             if (animationRef.current) cancelAnimationFrame(animationRef.current)
//             isPlayingRef.current = false
//         }
//     }, [])

//     return (
//         <div className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto p-4">
//              <div className="relative w-full aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.3)] border border-[#333]">
//                 <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} className="w-full h-full object-cover" />
                
//                 {status === 'generating' && (
//                     <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
//                         <Rocket className="w-12 h-12 text-[#ff00ff] animate-bounce mb-4" />
//                         <div className="text-[#00ffff] font-mono text-xl mb-2">RENDERING UNIVERSE...</div>
//                         <div className="w-64 h-2 bg-[#333] rounded-full overflow-hidden">
//                             <div className="h-full bg-[#00ffff]" style={{width: `${progress}%`}} />
//                         </div>
//                     </div>
//                 )}
//             </div>

//             <div className="flex gap-4 w-full">
//                 {!videoUrl ? (
//                     <>
//                         <Button 
//                             onClick={preview} 
//                             disabled={status !== 'idle'} // Disable when playing/generating
//                             variant="outline" 
//                             className="flex-1 h-12 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10 disabled:opacity-50"
//                         >
//                             <Play className="w-4 h-4 mr-2" /> 
//                             {status === 'playing' ? "PLAYING..." : "PREVIEW"}
//                         </Button>
//                         <Button 
//                             onClick={generate} 
//                             disabled={status !== 'idle'} // Disable when playing/generating
//                             className="flex-1 h-12 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-black font-bold disabled:opacity-50"
//                         >
//                             <Sparkles className="w-4 h-4 mr-2" /> GENERATE
//                         </Button>
//                     </>
//                 ) : (
//                     <Button onClick={() => {
//                         const a = document.createElement('a')
//                         a.href = videoUrl
//                         a.download = `gitfm-story-${data.user.login}.webm`
//                         a.click()
//                     }} className="w-full h-12 bg-[#00ff88] text-black font-bold text-lg animate-pulse">
//                         <Download className="w-5 h-5 mr-2" /> DOWNLOAD VIDEO
//                     </Button>
//                 )}
//             </div>
//         </div>
//     )
// }


























"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Download, Play, Rocket, Sparkles } from "lucide-react"
import type { GitHubData } from "@/lib/types"

interface VideoProps {
    data: GitHubData
}

// --- Engine Types ---
interface Star {
    x: number; y: number; z: number; size: number; color: string
}
interface Particle {
    x: number; y: number; vx: number; vy: number; life: number; color: string; size: number; type: "spark" | "glitch" | "data-bit" | "coin"
}
interface FloatingText {
    x: number; y: number; text: string; color: string; life: number; size: number; velocity: number
}

export function StoryModeVideo({ data }: VideoProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [status, setStatus] = useState<"idle" | "playing" | "generating" | "done">("idle")
    const [progress, setProgress] = useState(0)
    const [videoUrl, setVideoUrl] = useState<string | null>(null)
    
    // Engine Refs
    const animationRef = useRef<number>(0)
    const isPlayingRef = useRef(false)
    const chunksRef = useRef<Blob[]>([])
    
    // Entity Systems
    const starsRef = useRef<Star[]>([])
    const particlesRef = useRef<Particle[]>([])
    
    // Constants
    const WIDTH = 1080
    const HEIGHT = 1920
    const FPS = 30
    const DURATION = 30 // 30 Seconds Voyage
    
    // --- Initialization ---
    useEffect(() => {
        // Create a massive deep starfield
        starsRef.current = Array.from({ length: 1500 }, () => ({
            x: (Math.random() - 0.5) * WIDTH * 4,
            y: (Math.random() - 0.5) * HEIGHT * 4,
            z: Math.random() * 4000,
            size: Math.random() * 2.5,
            color: Math.random() > 0.9 ? "#00ffff" : (Math.random() > 0.6 ? "#ff00ff" : "#ffffff")
        }))
    }, [])

    // --- Particle System ---
    const spawnParticles = useCallback((x: number, y: number, color: string, count = 10, type: Particle['type'] = "spark") => {
        for(let i=0; i<count; i++) {
            const angle = Math.random() * Math.PI * 2
            const speed = Math.random() * (type === "glitch" ? 20 : 10) + 2
            particlesRef.current.push({
                x, y,
                vx: Math.cos(angle) * speed * (Math.random() - 0.5),
                vy: Math.sin(angle) * speed * (Math.random() - 0.5),
                life: 1.0,
                color,
                size: Math.random() * 6 + 2,
                type
            })
        }
    }, [])

    // --- Drawing Helpers ---
    const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string, lineWidth = 2, rotate = 0) => {
        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(rotate)
        ctx.beginPath()
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i
            const px = r * Math.cos(angle)
            const py = r * Math.sin(angle)
            if (i === 0) ctx.moveTo(px, py)
            else ctx.lineTo(px, py)
        }
        ctx.closePath()
        ctx.strokeStyle = color
        ctx.lineWidth = lineWidth
        ctx.shadowColor = color
        ctx.shadowBlur = 15
        ctx.stroke()
        ctx.fillStyle = color + "10" // Low opacity fill
        ctx.fill()
        ctx.restore()
    }

    const drawHoloCard = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string, title: string, value: string, sub: string) => {
        // Card BG
        ctx.save()
        ctx.fillStyle = "rgba(10, 10, 20, 0.8)"
        ctx.strokeStyle = color
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(x + 20, y)
        ctx.lineTo(x + w, y)
        ctx.lineTo(x + w, y + h - 20)
        ctx.lineTo(x + w - 20, y + h)
        ctx.lineTo(x, y + h)
        ctx.lineTo(x, y + 20)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()

        // Scanline
        ctx.fillStyle = color + "10"
        ctx.fillRect(x, y + (Date.now() % 1000 / 1000) * h, w, 5)

        // Text
        ctx.textAlign = "center"
        ctx.fillStyle = color
        ctx.font = "bold 32px 'Courier New'"
        ctx.fillText(title, x + w/2, y + 50)
        
        ctx.fillStyle = "#fff"
        ctx.shadowColor = color
        ctx.shadowBlur = 20
        ctx.font = "bold 80px 'Segoe UI'"
        ctx.fillText(value, x + w/2, y + 140)
        
        ctx.shadowBlur = 0
        ctx.fillStyle = "#aaa"
        ctx.font = "24px 'Segoe UI'"
        ctx.fillText(sub, x + w/2, y + 190)
        ctx.restore()
    }

    const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
        ctx.beginPath()
        ctx.strokeStyle = "rgba(255, 0, 255, 0.15)"
        ctx.lineWidth = 2
        // Perspective grid
        const horizon = height * 0.6
        // Vertical lines moving
        const offset = (time * 500) % 200
        for(let i = -10; i <= 10; i++) {
            const x = width/2 + i * 150
            ctx.moveTo(x, horizon)
            ctx.lineTo(width/2 + i * 400, height)
        }
        // Horizontal lines moving
        for(let i=0; i<10; i++) {
            const y = horizon + Math.pow(i/10, 2) * (height - horizon) + offset * (i/10)
            if(y < height) {
                ctx.moveTo(0, y)
                ctx.lineTo(width, y)
            }
        }
        ctx.stroke()
    }

    // --- The Main Render Loop ---
    const drawFrame = useCallback((ctx: CanvasRenderingContext2D, frame: number) => {
        const t = frame / (DURATION * FPS)
        const totalScenes = 7
        const sceneDuration = 1 / totalScenes
        const currentScene = Math.floor(t * totalScenes)
        const sceneTime = (t % sceneDuration) / sceneDuration // 0 to 1 for current scene
        
        // 1. CLEAR & BACKGROUND
        ctx.fillStyle = "#050510"
        ctx.fillRect(0, 0, WIDTH, HEIGHT)

        // 2. 3D STARFIELD CAMERA (Variable Speed)
        let warpSpeed = 5
        if (currentScene === 4) warpSpeed = 80 // Velocity sector
        else if (sceneTime < 0.1 || sceneTime > 0.9) warpSpeed = 40 // Transitions

        const centerX = WIDTH / 2
        const centerY = HEIGHT / 2

        // Draw stars
        starsRef.current.forEach(star => {
            star.z -= warpSpeed
            if (star.z <= 0) {
                star.z = 4000
                star.x = (Math.random() - 0.5) * WIDTH * 4
                star.y = (Math.random() - 0.5) * HEIGHT * 4
            }
            
            const perspective = 300 / star.z
            const sx = centerX + star.x * perspective
            const sy = centerY + star.y * perspective
            
            if (sx > 0 && sx < WIDTH && sy > 0 && sy < HEIGHT) {
                const size = star.size * perspective * (warpSpeed > 20 ? 0.5 : 1)
                
                if (warpSpeed > 20) {
                    // Warp lines
                    ctx.beginPath()
                    ctx.moveTo(sx, sy)
                    ctx.lineTo(centerX + (sx - centerX) * 0.9, centerY + (sy - centerY) * 0.9)
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 * perspective})`
                    ctx.lineWidth = size
                    ctx.stroke()
                } else {
                    ctx.fillStyle = star.color
                    ctx.globalAlpha = Math.min(1, perspective)
                    ctx.beginPath()
                    ctx.arc(sx, sy, size, 0, Math.PI*2)
                    ctx.fill()
                    ctx.globalAlpha = 1
                }
            }
        })

        // 3. SCENE RENDERER
        ctx.save()
        
        // --- SCENE 1: IDENTITY (0 - 14%) ---
        if (currentScene === 0) {
            const alpha = Math.min(1, sceneTime * 5)
            ctx.globalAlpha = alpha

            // Tech Ring
            const rot = frame * 0.01
            drawHexagon(ctx, WIDTH/2, 600, 200, "#00ffff", 5, rot)
            drawHexagon(ctx, WIDTH/2, 600, 230, "#ff00ff", 2, -rot)

            // Text Info
            ctx.textAlign = "center"
            ctx.fillStyle = "#fff"
            ctx.shadowColor = "#00ffff"
            ctx.shadowBlur = 20
            ctx.font = "bold 80px 'Segoe UI'"
            ctx.fillText(data.user.login.toUpperCase(), WIDTH/2, 950)
            
            ctx.shadowBlur = 0
            ctx.font = "30px 'Courier New'"
            ctx.fillStyle = "#aaa"
            ctx.fillText("/// IDENTITY CONFIRMED ///", WIDTH/2, 1020)

            // Stats Array
            const gridY = 1200
            const stats = [
                { l: "FOLLOWERS", v: data.user.followers, c: "#00ff88" },
                { l: "FOLLOWING", v: data.user.following, c: "#00ffff" },
                { l: "REPOS", v: data.user.publicRepos, c: "#ff00ff" }
            ]

            stats.forEach((s, i) => {
                const x = WIDTH/2 + (i - 1) * 300
                // Vertical Line
                ctx.strokeStyle = "rgba(255,255,255,0.2)"
                ctx.beginPath(); ctx.moveTo(x, 1100); ctx.lineTo(x, gridY + 100); ctx.stroke()
                
                // Value
                ctx.fillStyle = s.c
                ctx.font = "bold 60px 'Segoe UI'"
                ctx.fillText(s.v.toString(), x, gridY)
                // Label
                ctx.fillStyle = "#fff"
                ctx.font = "24px 'Courier New'"
                ctx.fillText(s.l, x, gridY + 50)
            })
        }

        // --- SCENE 2: CONTRIBUTION CORE (14% - 28%) ---
        else if (currentScene === 1) {
            // Pulsating Core
            const pulse = 1 + Math.sin(frame * 0.1) * 0.1
            const coreY = HEIGHT/2 - 200
            
            const grad = ctx.createRadialGradient(WIDTH/2, coreY, 50, WIDTH/2, coreY, 400 * pulse)
            grad.addColorStop(0, "#00ff88")
            grad.addColorStop(0.5, "rgba(0, 255, 136, 0.2)")
            grad.addColorStop(1, "transparent")
            ctx.fillStyle = grad
            ctx.fillRect(0, 0, WIDTH, HEIGHT)

            ctx.font = "bold 160px 'Segoe UI'"
            ctx.fillStyle = "#fff"
            ctx.textAlign = "center"
            ctx.shadowColor = "#00ff88"
            ctx.shadowBlur = 40
            ctx.fillText(data.totalContributions.toLocaleString(), WIDTH/2, coreY + 50)
            
            ctx.shadowBlur = 0
            ctx.font = "40px 'Courier New'"
            ctx.fillText("TOTAL CONTRIBUTIONS", WIDTH/2, coreY + 150)

            // Sub Stats
            drawHoloCard(ctx, 100, 1300, 400, 250, "#00ff88", "COMMITS", data.totalCommits.toLocaleString(), "Code Deployed")
            drawHoloCard(ctx, 580, 1300, 400, 250, "#00ff88", "ISSUES", data.totalIssuesOpened.toLocaleString(), "Problems Found")
        }

        // --- SCENE 3: THE CODE FACTORY (28% - 42%) ---
        else if (currentScene === 2) {
            drawGrid(ctx, WIDTH, HEIGHT, t)
            
            // Factory Conveyor Metaphor
            ctx.font = "bold 60px 'Courier New'"
            ctx.fillStyle = "#ff00ff"
            ctx.textAlign = "center"
            ctx.fillText("CODE FACTORY", WIDTH/2, 300)

            // PR Stats
            const mergedRate = data.totalPRsOpened > 0 
                ? Math.round((data.totalPRsMerged / data.totalPRsOpened) * 100) 
                : 0
            
            drawHoloCard(ctx, 100, 500, 880, 300, "#ff00ff", "PULL REQUESTS", `${data.totalPRsMerged}/${data.totalPRsOpened}`, `Merge Rate: ${mergedRate}%`)

            // Issue Resolution
            const issueRate = data.totalIssuesOpened > 0
                ? Math.round((data.totalIssuesClosed / data.totalIssuesOpened) * 100)
                : 0
            
            drawHoloCard(ctx, 100, 900, 880, 300, "#00ffff", "ISSUE TRACKING", `${data.totalIssuesClosed} Closed`, `Resolution Rate: ${issueRate}%`)

            // Particle sparks
            if(frame % 3 === 0) spawnParticles(Math.random() * WIDTH, HEIGHT, "#ff00ff", 2, "data-bit")
        }

        // --- SCENE 4: THE TREASURY (42% - 57%) ---
        else if (currentScene === 3) {
            // Golden Shower
            if(frame % 2 === 0) spawnParticles(Math.random() * WIDTH, -50, "#ffd700", 2, "coin")

            ctx.font = "bold 80px 'Segoe UI'"
            ctx.fillStyle = "#ffd700"
            ctx.textAlign = "center"
            ctx.shadowColor = "#ffd700"
            ctx.shadowBlur = 30
            ctx.fillText("THE TREASURY", WIDTH/2, 400)
            ctx.shadowBlur = 0

            // Big Star
            ctx.font = "200px 'Segoe UI'"
            ctx.fillText("⭐", WIDTH/2, 700)
            
            // Stats
            drawHoloCard(ctx, 80, 900, 420, 250, "#ffd700", "STARS EARNED", data.totalStarsEarned.toLocaleString(), "Community Love")
            drawHoloCard(ctx, 580, 900, 420, 250, "#ffd700", "STARS GIVEN", data.totalStarsGiven.toLocaleString(), "Appreciation")
            
            drawHoloCard(ctx, 330, 1250, 420, 250, "#ffffff", "FORKS", data.totalForksEarned.toLocaleString(), "Code Cloned")
        }

        // --- SCENE 5: VELOCITY SECTOR (57% - 71%) ---
        else if (currentScene === 4) {
            // Warp Effect is handled by global star system speed up
            
            // Shake effect
            const shake = (Math.random() - 0.5) * 10
            ctx.translate(shake, shake)

            ctx.font = "bold 100px 'Segoe UI'"
            ctx.fillStyle = "#ff4500" // Orange red
            ctx.textAlign = "center"
            ctx.fillText("MAX VELOCITY", WIDTH/2, 400)

            // Streak
            ctx.fillStyle = "#fff"
            ctx.font = "bold 180px 'Segoe UI'"
            ctx.shadowColor = "#ff4500"
            ctx.shadowBlur = 50
            ctx.fillText(data.longestStreak.toString(), WIDTH/2, 800)
            ctx.shadowBlur = 0
            ctx.font = "40px 'Courier New'"
            ctx.fillText("LONGEST DAY STREAK", WIDTH/2, 900)

            // Active Day
            ctx.fillStyle = "#ff8800"
            ctx.font = "60px 'Segoe UI'"
            ctx.fillText(`PEAK ACTIVITY: ${data.mostActiveDay}`, WIDTH/2, 1200)
            
            // Current Streak
            ctx.font = "40px 'Segoe UI'"
            ctx.fillStyle = "#aaa"
            ctx.fillText(`Current Momentum: ${data.currentStreak} days`, WIDTH/2, 1300)
        }

        // --- SCENE 6: POLYGLOT (71% - 85%) ---
        else if (currentScene === 5) {
            // Language Constellation
            const topLangs = data.languages.slice(0, 5)
            const centerX = WIDTH/2
            const centerY = HEIGHT/2
            const radius = 350

            topLangs.forEach((lang, i) => {
                const angle = (i / topLangs.length) * Math.PI * 2 - Math.PI/2 + (frame * 0.01)
                const x = centerX + Math.cos(angle) * radius
                const y = centerY + Math.sin(angle) * radius

                // Line to center
                ctx.beginPath()
                ctx.moveTo(centerX, centerY)
                ctx.lineTo(x, y)
                ctx.strokeStyle = "rgba(255,255,255,0.2)"
                ctx.stroke()

                // Planet
                ctx.beginPath()
                ctx.arc(x, y, 60, 0, Math.PI * 2)
                ctx.fillStyle = lang.color || "#fff"
                ctx.fill()
                
                // Text
                ctx.fillStyle = "#fff"
                ctx.font = "bold 30px 'Segoe UI'"
                ctx.fillText(lang.name, x, y + 100)
            })

            // Center Text
            ctx.fillStyle = "#fff"
            ctx.font = "bold 50px 'Segoe UI'"
            ctx.fillText("TECH STACK", centerX, centerY + 10)
            
            if(data.mostActiveRepo) {
                ctx.fillStyle = "#00ffff"
                ctx.font = "30px 'Courier New'"
                ctx.fillText(`Top Repo: ${data.mostActiveRepo}`, centerX, HEIGHT - 200)
            }
        }

        // --- SCENE 7: SUMMARY (85% - 100%) ---
        else {
            // Slide in Final Card
            const slideY = Math.max(HEIGHT/2, HEIGHT * 1.5 - (sceneTime * HEIGHT * 1.5))
            
            ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
            ctx.strokeStyle = "#fff"
            ctx.lineWidth = 10
            ctx.beginPath()
            ctx.roundRect(100, HEIGHT/2 - 400, WIDTH - 200, 800, 40)
            ctx.fill()
            ctx.stroke()

            ctx.textAlign = "center"
            ctx.fillStyle = "#fff"
            ctx.font = "bold 80px 'Segoe UI'"
            ctx.fillText("VOYAGE COMPLETE", WIDTH/2, HEIGHT/2 - 250)

            const rank = data.totalContributions > 1000 ? "S+" : (data.totalContributions > 500 ? "A" : "B")
            ctx.fillStyle = "#ffd700"
            ctx.font = "bold 200px 'Segoe UI'"
            ctx.fillText(`RANK: ${rank}`, WIDTH/2, HEIGHT/2 + 50)

            ctx.fillStyle = "#aaa"
            ctx.font = "40px 'Courier New'"
            ctx.fillText("gitfm.com 2025", WIDTH/2, HEIGHT/2 + 300)
        }

        ctx.restore()

        // 4. PARTICLE UPDATE
        particlesRef.current = particlesRef.current.filter(p => p.life > 0)
        particlesRef.current.forEach(p => {
            p.x += p.vx
            p.y += p.vy
            p.life -= 0.02
            
            ctx.globalAlpha = p.life
            ctx.fillStyle = p.color
            ctx.beginPath()
            if (p.type === "coin") {
                ctx.arc(p.x, p.y, p.size, 0, Math.PI*2)
            } else {
                ctx.rect(p.x, p.y, p.size, p.size)
            }
            ctx.fill()
        })
        ctx.globalAlpha = 1

    }, [data, spawnParticles])

    // Video Recording Logic
    const generate = async () => {
        if (status === 'generating') return
        setStatus("generating")
        const canvas = canvasRef.current
        if (!canvas) return
        
        const stream = canvas.captureStream(FPS)
        const recorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp9', videoBitsPerSecond: 12000000 })
        
        chunksRef.current = [] // Clear previous chunks
        
        recorder.ondataavailable = e => { if (e.data.size > 0) chunksRef.current.push(e.data) }
        recorder.onstop = () => {
            const blob = new Blob(chunksRef.current, { type: 'video/webm' })
            setVideoUrl(URL.createObjectURL(blob))
            setStatus("done")
        }
        
        recorder.start()
        const ctx = canvas.getContext('2d')!
        
        // Fast render loop for recording
        for (let i = 0; i < DURATION * FPS; i++) {
            drawFrame(ctx, i)
            setProgress(Math.round((i / (DURATION * FPS)) * 100))
            // Minimal delay to allow UI updates
            await new Promise(r => setTimeout(r, 0)) 
        }
        recorder.stop()
    }

    const preview = useCallback(() => {
        if (isPlayingRef.current) return
        
        setStatus("playing")
        isPlayingRef.current = true
        let f = 0
        
        const loop = () => {
            if (!canvasRef.current || !isPlayingRef.current) {
                if(status === 'playing') setStatus("idle") // Only reset if we were playing
                isPlayingRef.current = false
                return
            }

            const ctx = canvasRef.current.getContext('2d')!
            drawFrame(ctx, f)
            f++

            if (f < DURATION * FPS) {
                animationRef.current = requestAnimationFrame(loop)
            } else {
                setStatus("idle")
                isPlayingRef.current = false
            }
        }
        loop()
    }, [drawFrame, status])

    // Clean up animation on unmount or reset
    useEffect(() => {
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
            isPlayingRef.current = false
        }
    }, [])

    return (
        <div className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto p-4">
             <div className="relative w-full aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.3)] border border-[#333]">
                <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} className="w-full h-full object-cover" />
                
                {status === 'generating' && (
                    <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center z-50">
                        <Rocket className="w-12 h-12 text-[#ff00ff] animate-bounce mb-4" />
                        <div className="text-[#00ffff] font-mono text-xl mb-2">RENDERING {progress}%</div>
                        <div className="w-64 h-2 bg-[#333] rounded-full overflow-hidden">
                            <div className="h-full bg-[#00ffff]" style={{width: `${progress}%`}} />
                        </div>
                        <div className="text-xs text-gray-500 mt-2">Please wait, this may take a moment...</div>
                    </div>
                )}
            </div>

            <div className="flex gap-4 w-full">
                {!videoUrl ? (
                    <>
                        <Button 
                            onClick={preview} 
                            disabled={status !== 'idle'} 
                            variant="outline" 
                            className="flex-1 h-12 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10 disabled:opacity-50"
                        >
                            <Play className="w-4 h-4 mr-2" /> 
                            {status === 'playing' ? "PLAYING..." : "PREVIEW"}
                        </Button>
                        <Button 
                            onClick={generate} 
                            disabled={status !== 'idle'}
                            className="flex-1 h-12 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-black font-bold disabled:opacity-50"
                        >
                            <Sparkles className="w-4 h-4 mr-2" /> GENERATE VIDEO
                        </Button>
                    </>
                ) : (
                    <Button onClick={() => {
                        const a = document.createElement('a')
                        a.href = videoUrl
                        a.download = `gitfm-voyage-${data.user.login}.webm`
                        a.click()
                    }} className="w-full h-12 bg-[#00ff88] text-black font-bold text-lg animate-pulse hover:scale-105 transition-transform">
                        <Download className="w-5 h-5 mr-2" /> DOWNLOAD HD VIDEO
                    </Button>
                )}
            </div>
        </div>
    )
}