"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react"
import type { GitHubData } from "@/lib/types"
import * as Tone from "tone"

interface AudioSymphonyProps {
  data: GitHubData
}

export function AudioSymphony({ data }: AudioSymphonyProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isInitialized, setIsInitialized] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const synthRef = useRef<Tone.PolySynth | null>(null)
  const analyserRef = useRef<Tone.Analyser | null>(null)
  const animationRef = useRef<number | null>(null)
  const sequenceRef = useRef<Tone.Sequence | null>(null)

  const initAudio = useCallback(async () => {
    if (isInitialized) return

    await Tone.start()

    // Create analyzer for visualization
    analyserRef.current = new Tone.Analyser("fft", 64)

    // Create synth with effects
    const reverb = new Tone.Reverb({ decay: 2, wet: 0.3 }).toDestination()
    const delay = new Tone.FeedbackDelay("8n", 0.2).connect(reverb)

    synthRef.current = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: "sine" },
      envelope: { attack: 0.02, decay: 0.1, sustain: 0.3, release: 0.5 },
    })
      .connect(analyserRef.current)
      .connect(delay)

    setIsInitialized(true)
  }, [isInitialized])

  const generateMelody = useCallback(() => {
    if (!data.contributionCalendar) return []

    const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5"]
    const melody: (string | null)[] = []

    // Flatten all contribution days
    const allDays = data.contributionCalendar.weeks.flatMap((week) => week.contributionDays)

    // Sample every 7th day for a reasonable melody length
    for (let i = 0; i < allDays.length; i += 7) {
      const day = allDays[i]
      if (day && day.contributionCount > 0) {
        // Map contribution count to note index
        const noteIndex = Math.min(day.contributionCount, notes.length - 1)
        melody.push(notes[noteIndex])
      } else {
        melody.push(null) // Rest
      }
    }

    return melody
  }, [data.contributionCalendar])

  const playMelody = useCallback(async () => {
    await initAudio()

    if (!synthRef.current) return

    const melody = generateMelody()
    if (melody.length === 0) return

    // Stop any existing sequence
    if (sequenceRef.current) {
      sequenceRef.current.stop()
      sequenceRef.current.dispose()
    }

    // Calculate BPM based on average contributions
    const avgContributions = data.totalContributions / 365
    const bpm = Math.min(180, Math.max(80, 100 + avgContributions * 2))
    Tone.getTransport().bpm.value = bpm

    let noteIndex = 0

    sequenceRef.current = new Tone.Sequence(
      (time, note) => {
        if (note && synthRef.current) {
          synthRef.current.triggerAttackRelease(note, "8n", time)
        }
        noteIndex++
        setProgress((noteIndex / melody.length) * 100)

        if (noteIndex >= melody.length) {
          setTimeout(() => {
            setIsPlaying(false)
            setProgress(0)
            Tone.getTransport().stop()
          }, 500)
        }
      },
      melody,
      "8n",
    )

    sequenceRef.current.start(0)
    Tone.getTransport().start()
    setIsPlaying(true)
  }, [initAudio, generateMelody, data.totalContributions])

  const stopMelody = useCallback(() => {
    if (sequenceRef.current) {
      sequenceRef.current.stop()
    }
    Tone.getTransport().stop()
    setIsPlaying(false)
    setProgress(0)
  }, [])

  const toggleMute = useCallback(() => {
    if (synthRef.current) {
      synthRef.current.volume.value = isMuted ? 0 : -100
    }
    setIsMuted(!isMuted)
  }, [isMuted])

  // Visualization
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const draw = () => {
      const width = canvas.width
      const height = canvas.height

      ctx.fillStyle = "rgba(0, 0, 0, 0.2)"
      ctx.fillRect(0, 0, width, height)

      if (analyserRef.current && isPlaying) {
        const values = analyserRef.current.getValue() as Float32Array
        const barWidth = width / values.length

        values.forEach((value, i) => {
          const normalizedValue = (value + 140) / 140 // Normalize dB values
          const barHeight = normalizedValue * height * 0.8

          // Create gradient colors
          const hue = (i / values.length) * 60 + 280 // Purple to pink
          ctx.fillStyle = `hsla(${hue}, 100%, 60%, 0.8)`

          const x = i * barWidth
          const y = height - barHeight

          ctx.fillRect(x, y, barWidth - 2, barHeight)

          // Add glow effect
          ctx.shadowColor = `hsla(${hue}, 100%, 60%, 1)`
          ctx.shadowBlur = 10
        })
      } else {
        // Idle animation
        const time = Date.now() / 1000
        for (let i = 0; i < 32; i++) {
          const barHeight = (Math.sin(time * 2 + i * 0.3) + 1) * 20 + 10
          const hue = (i / 32) * 60 + 280
          ctx.fillStyle = `hsla(${hue}, 100%, 60%, 0.3)`
          ctx.fillRect(i * (width / 32), height - barHeight, width / 32 - 2, barHeight)
        }
      }

      ctx.shadowBlur = 0
      animationRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (sequenceRef.current) {
        sequenceRef.current.dispose()
      }
      if (synthRef.current) {
        synthRef.current.dispose()
      }
      if (analyserRef.current) {
        analyserRef.current.dispose()
      }
      Tone.getTransport().stop()
    }
  }, [])

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="rounded-lg border border-[#00ffff]/30 bg-card/50 backdrop-blur-sm overflow-hidden neon-border-purple">
        {/* Visualizer */}
        <div className="relative h-48 bg-black">
          <canvas ref={canvasRef} width={600} height={192} className="w-full h-full" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Controls */}
        <div className="p-4 space-y-4">
          <div className="text-center">
            <p className="text-sm text-[#00ffff]">Now Playing: Your 2025 Commit History</p>
            <p className="text-xs text-muted-foreground mt-1">
              {data.totalContributions} contributions transformed into sound
            </p>
          </div>

          {/* Progress Bar */}
          <div className="h-1 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={stopMelody}
              disabled={!isPlaying}
              className="border-[#00ffff]/50 hover:bg-[#00ffff]/10 disabled:opacity-30 bg-transparent"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>

            <Button
              size="lg"
              onClick={isPlaying ? stopMelody : playMelody}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] hover:from-[#ff33ff] hover:to-[#33ffff] text-white"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={toggleMute}
              className="border-[#00ffff]/50 hover:bg-[#00ffff]/10 bg-transparent"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
