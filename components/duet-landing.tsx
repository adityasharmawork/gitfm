"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Swords, Sparkles, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function DuetLanding() {
    const router = useRouter()
    const [user1, setUser1] = useState("")
    const [user2, setUser2] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleBattle = () => {
        if (!user1.trim() || !user2.trim()) return
        setIsLoading(true)
        router.push(`/duet/${encodeURIComponent(user1.trim())}/${encodeURIComponent(user2.trim())}`)
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden">
            {/* CRT Effect */}
            <div className="crt-scanlines fixed inset-0 pointer-events-none z-50" />

            {/* Background Effects */}
            <div className="fixed inset-0 grid-bg opacity-30" />
            <div className="fixed inset-0">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ff00ff]/15 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#00ffff]/15 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#ffd700]/10 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center space-y-8">
                {/* Logo */}
                <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3">
                        <Swords className="w-12 h-12 text-[#ff00ff] animate-bounce" />
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                            <span className="neon-pink">DUET</span>
                            <span className="text-white ml-3">BATTLE</span>
                        </h1>
                        <Swords className="w-12 h-12 text-[#00ffff] animate-bounce" style={{ animationDelay: "0.5s" }} />
                    </div>
                    <p className="text-xl text-muted-foreground">
                        Challenge your friend to an epic code comparison! ⚔️
                    </p>
                </div>

                {/* Input Section */}
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 space-y-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        {/* Player 1 */}
                        <div className="flex-1 w-full space-y-3">
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-[#ff00ff]/20 flex items-center justify-center border border-[#ff00ff]/50">
                                    <Users className="w-5 h-5 text-[#ff00ff]" />
                                </div>
                                <span className="font-bold text-[#ff00ff]">PLAYER 1</span>
                            </div>
                            <Input
                                placeholder="GitHub username"
                                value={user1}
                                onChange={(e) => setUser1(e.target.value)}
                                className="text-center text-lg h-14 bg-black/50 border-[#ff00ff]/30 focus:border-[#ff00ff] transition-all"
                                onKeyDown={(e) => e.key === "Enter" && handleBattle()}
                            />
                        </div>

                        {/* VS Badge */}
                        <div className="relative">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ff00ff] via-[#ffd700] to-[#00ffff] p-1 animate-spin-slow">
                                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                                    <span className="text-2xl font-black text-white">VS</span>
                                </div>
                            </div>
                            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-[#ffd700] animate-pulse" />
                            <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-[#ffd700] animate-pulse" />
                        </div>

                        {/* Player 2 */}
                        <div className="flex-1 w-full space-y-3">
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-[#00ffff]/20 flex items-center justify-center border border-[#00ffff]/50">
                                    <Users className="w-5 h-5 text-[#00ffff]" />
                                </div>
                                <span className="font-bold text-[#00ffff]">PLAYER 2</span>
                            </div>
                            <Input
                                placeholder="GitHub username"
                                value={user2}
                                onChange={(e) => setUser2(e.target.value)}
                                className="text-center text-lg h-14 bg-black/50 border-[#00ffff]/30 focus:border-[#00ffff] transition-all"
                                onKeyDown={(e) => e.key === "Enter" && handleBattle()}
                            />
                        </div>
                    </div>

                    {/* Battle Button */}
                    <Button
                        onClick={handleBattle}
                        disabled={!user1.trim() || !user2.trim() || isLoading}
                        className="w-full md:w-auto md:px-16 h-14 text-xl font-bold bg-gradient-to-r from-[#ff00ff] via-[#ffd700] to-[#00ffff] hover:opacity-90 transition-all disabled:opacity-50"
                    >
                        {isLoading ? (
                            <span className="animate-pulse">Loading...</span>
                        ) : (
                            <>
                                <Swords className="w-6 h-6 mr-2" />
                                START BATTLE
                                <ArrowRight className="w-6 h-6 ml-2" />
                            </>
                        )}
                    </Button>
                </div>

                {/* Fun Facts */}
                <div className="text-sm text-muted-foreground space-y-2">
                    <p>🎉 No winners, no losers - just two legends comparing their code journeys!</p>
                    <p>📲 Share the battle link with friends and challenge them!</p>
                </div>

                {/* Back Link */}
                <a
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
                >
                    ← Back to Home
                </a>
            </div>

            {/* CSS for slow spin animation */}
            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
        </div>
    )
}
