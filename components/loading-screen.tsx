"use client"

import { useState, useEffect } from "react"

const loadingMessages = [
  "Accessing Mainframe...",
  "Bypassing Security Protocols...",
  "Downloading Commit History...",
  "Analyzing 1,000s of commits...",
  "Compiling Audio Vectors...",
  "Generating Tarot Archetypes...",
  "Rendering Code City...",
  "Synthesizing Developer Essence...",
  "Calibrating Neon Frequencies...",
  "Initializing Visual Cortex...",
]

export function LoadingScreen() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [logs, setLogs] = useState<string[]>([])

  useEffect(() => {
    const message = loadingMessages[currentMessage]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex <= message.length) {
        setDisplayedText(message.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setLogs((prev) => [...prev, `[OK] ${message}`])

        setTimeout(() => {
          if (currentMessage < loadingMessages.length - 1) {
            setCurrentMessage((prev) => prev + 1)
            setDisplayedText("")
          }
        }, 400)
      }
    }, 40)

    return () => clearInterval(typeInterval)
  }, [currentMessage])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* CRT Effect */}
      <div className="crt-scanlines fixed inset-0 pointer-events-none z-50" />

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff00ff]/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Terminal Window */}
        <div className="rounded-lg border border-[#00ff88]/50 bg-black/80 backdrop-blur-sm overflow-hidden neon-border-green">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-[#00ff88]/30 bg-[#00ff88]/10">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-xs text-[#00ff88]">gitfm@mainframe:~$</span>
          </div>

          {/* Terminal Body */}
          <div className="p-4 font-mono text-sm min-h-[300px]">
            {/* Previous Logs */}
            {logs.map((log, index) => (
              <div key={index} className="text-[#00ff88] mb-1">
                {log}
              </div>
            ))}

            {/* Current Line */}
            <div className="flex items-center text-[#00ff88]">
              <span className="text-[#ff00ff] mr-2">{"> "}</span>
              <span>{displayedText}</span>
              <span className="ml-1 animate-pulse">█</span>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>Synthesizing...</span>
            <span>{Math.round((currentMessage / loadingMessages.length) * 100)}%</span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#ff00ff] via-[#8800ff] to-[#00ff88] transition-all duration-500"
              style={{ width: `${(currentMessage / loadingMessages.length) * 100}%` }}
            />
          </div>
        </div>

        {/* ASCII Art */}
        <div className="mt-8 text-center">
          {/* <pre className="text-[#ff00ff] text-xs leading-tight inline-block">
            {`
   ______          __     _____             __  __  
  / ____/___  ____/ /__  / ___/__  ______  / /_/ /_ 
 / /   / __ \\/ __  / _ \\ \\__ \\/ / / / __ \\/ __/ __ \\
/ /___/ /_/ / /_/ /  __/___/ / /_/ / / / / /_/ / / /
\\____/\\____/\\__,_/\\___//____/\\__, /_/ /_/\\__/_/ /_/ 
                            /____/                  
`}
          </pre> */}
<pre className="text-[#ff00ff] text-xs leading-tight inline-block">
  {`
   ______   _ __      ________  ___ 
  / ____/(_) /_   / ____/  |/  / 
 / / __ / / __/  / /_  / /|_/ /  
/ /_/ // / /_   / __/ / /  / /   
\\____//_/\\__/  /_/   /_/  /_/    
`}
</pre>
        </div>
      </div>
    </div>
  )
}
