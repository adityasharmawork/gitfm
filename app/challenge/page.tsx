"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    ArrowLeft,
    Trophy,
    Calendar,
    Gift,
    Share2,
    Check,
    Sparkles,
    ExternalLink,
    PartyPopper
} from "lucide-react"

type Platform = "x" | "linkedin" | "instagram"

interface SubmissionState {
    x: boolean
    linkedin: boolean
    instagram: boolean
}

const PLATFORM_CONFIG = {
    x: {
        name: "X (Twitter)",
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
        color: "#000000",
        bgColor: "bg-white",
        textColor: "text-black",
        borderColor: "border-white/50",
        apiEndpoint: "https://gitfm-server.onrender.com/api/save/x"
    },
    linkedin: {
        name: "LinkedIn",
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        color: "#0A66C2",
        bgColor: "bg-[#0A66C2]",
        textColor: "text-white",
        borderColor: "border-[#0A66C2]/50",
        apiEndpoint: "https://gitfm-server.onrender.com/api/save/linkedin"
    },
    instagram: {
        name: "Instagram",
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
        color: "#E4405F",
        bgColor: "bg-gradient-to-br from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
        textColor: "text-white",
        borderColor: "border-[#E4405F]/50",
        apiEndpoint: "https://gitfm-server.onrender.com/api/save/instagram"
    }
}

export default function ChallengePage() {
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
    const [username, setUsername] = useState("")
    const [postLink, setPostLink] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submissions, setSubmissions] = useState<SubmissionState>({
        x: false,
        linkedin: false,
        instagram: false
    })
    const [showSuccess, setShowSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const handleSubmit = async (platform: Platform) => {
        if (!username.trim() || !postLink.trim()) return

        setIsSubmitting(true)
        setErrorMessage(null)

        try {
            const response = await fetch(PLATFORM_CONFIG[platform].apiEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: username.trim(),
                    link: postLink.trim()
                })
            })

            if (response.ok) {
                setSubmissions(prev => ({ ...prev, [platform]: true }))
                setShowSuccess(true)
                setSelectedPlatform(null)
                setUsername("")
                setPostLink("")
            } else {
                const errorData = await response.json().catch(() => ({}))
                setErrorMessage(errorData.message || "Submission failed. Please try again.")
            }
        } catch (error) {
            console.error("Submission failed:", error)
            setErrorMessage("Network error. Please check your connection and try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-background relative">
            {/* CRT Effect */}
            <div className="crt-scanlines fixed inset-0 pointer-events-none z-50" />

            {/* Background */}
            <div className="fixed inset-0 grid-bg opacity-30" />
            <div className="fixed inset-0">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ff00ff]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#00ff88]/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ffd700]/5 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <header className="relative z-10 border-b border-border/50 bg-background/80 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/">
                        <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>
                    <h1 className="text-xl font-bold neon-pink">GitFM 2025</h1>
                    <div className="w-[100px]" />
                </div>
            </header>

            <main className="relative z-10 container mx-auto px-4 py-12 space-y-16">
                {/* Hero Section */}
                <section className="text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ffd700]/30 bg-[#ffd700]/10">
                        <Trophy className="w-4 h-4 text-[#ffd700]" />
                        <span className="text-sm text-[#ffd700]">Win Amazing Prizes!</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold">
                        <span className="neon-pink">GitFM 2025</span>{" "}
                        <span className="text-[#ffd700]">Challenge</span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Share your GitFM profile on social media and enter to win!
                        Three lucky winners will be chosen at random.
                    </p>

                    {/* Deadline Banner */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ff00ff]/10 border border-[#ff00ff]/30">
                            <Calendar className="w-5 h-5 text-[#ff00ff]" />
                            <div className="text-left">
                                <p className="text-xs text-muted-foreground">Submit by</p>
                                <p className="text-sm font-bold text-[#ff00ff]">December 31st, 2025</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/30">
                            <Gift className="w-5 h-5 text-[#00ff88]" />
                            <div className="text-left">
                                <p className="text-xs text-muted-foreground">Winners announced</p>
                                <p className="text-sm font-bold text-[#00ff88]">January 31st, 2026</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8 neon-cyan">How It Works</h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { step: "1", title: "Generate", desc: "Create your GitFM profile" },
                            { step: "2", title: "Share", desc: "Post with #GitFM2025Challenge" },
                            { step: "3", title: "Submit", desc: "Enter your post link below" },
                            { step: "4", title: "Win!", desc: "Wait for the random draw" }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-4 rounded-lg border border-[#00ffff]/20 bg-black/30">
                                <div className="w-10 h-10 rounded-full bg-[#00ffff]/20 flex items-center justify-center mx-auto mb-3">
                                    <span className="text-[#00ffff] font-bold">{item.step}</span>
                                </div>
                                <h3 className="font-bold text-[#00ffff]">{item.title}</h3>
                                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Success Modal */}
                {showSuccess && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                        <div className="bg-card border border-[#00ff88]/50 rounded-2xl p-8 max-w-md mx-4 text-center space-y-6 animate-in zoom-in-95">
                            <div className="w-20 h-20 rounded-full bg-[#00ff88]/20 flex items-center justify-center mx-auto">
                                <PartyPopper className="w-10 h-10 text-[#00ff88]" />
                            </div>
                            <h2 className="text-2xl font-bold text-[#00ff88]">You're In The Draw!</h2>
                            <p className="text-muted-foreground">
                                Congratulations! Your entry has been submitted. Winners will be announced on January 31st, 2026.
                            </p>
                            <p className="text-sm text-[#ffd700]">
                                🎉 Share this challenge with your friends for more fun!
                            </p>
                            <Button
                                onClick={() => setShowSuccess(false)}
                                className="bg-gradient-to-r from-[#00ff88] to-[#00ffff] text-black font-bold"
                            >
                                Awesome!
                            </Button>
                        </div>
                    </div>
                )}

                {/* Error Modal */}
                {errorMessage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                        <div className="bg-card border border-[#ff4444]/50 rounded-2xl p-8 max-w-md mx-4 text-center space-y-6 animate-in zoom-in-95">
                            <div className="w-20 h-20 rounded-full bg-[#ff4444]/20 flex items-center justify-center mx-auto">
                                <span className="text-4xl">❌</span>
                            </div>
                            <h2 className="text-2xl font-bold text-[#ff4444]">Submission Failed</h2>
                            <p className="text-muted-foreground">
                                {errorMessage}
                            </p>
                            <Button
                                onClick={() => setErrorMessage(null)}
                                className="bg-gradient-to-r from-[#ff4444] to-[#ff00ff] text-white font-bold"
                            >
                                Try Again
                            </Button>
                        </div>
                    </div>
                )}

                {/* Platform Cards */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-center neon-purple">Choose Your Platform</h2>
                    <p className="text-center text-muted-foreground mb-8">
                        You can participate on all three platforms for more chances to win!
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {(Object.keys(PLATFORM_CONFIG) as Platform[]).map((platform) => {
                            const config = PLATFORM_CONFIG[platform]
                            const isSelected = selectedPlatform === platform
                            const isSubmitted = submissions[platform]

                            return (
                                <div
                                    key={platform}
                                    className={`relative rounded-xl border p-6 transition-all duration-300 ${isSubmitted
                                        ? "border-[#00ff88]/50 bg-[#00ff88]/10"
                                        : isSelected
                                            ? `${config.borderColor} bg-card`
                                            : "border-border/50 bg-card/50 hover:border-border"
                                        }`}
                                >
                                    {isSubmitted && (
                                        <div className="absolute top-3 right-3">
                                            <div className="w-6 h-6 rounded-full bg-[#00ff88] flex items-center justify-center">
                                                <Check className="w-4 h-4 text-black" />
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <div className={`w-16 h-16 rounded-xl ${config.bgColor} flex items-center justify-center ${config.textColor}`}>
                                            {config.icon}
                                        </div>
                                        <h3 className="text-xl font-bold">{config.name}</h3>

                                        {isSubmitted ? (
                                            <p className="text-sm text-[#00ff88]">✓ Entry submitted!</p>
                                        ) : isSelected ? (
                                            <div className="w-full space-y-3 mt-4">
                                                <Input
                                                    placeholder="Your GitHub username"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    className="bg-background/50"
                                                />
                                                <Input
                                                    placeholder="Your post URL"
                                                    value={postLink}
                                                    onChange={(e) => setPostLink(e.target.value)}
                                                    className="bg-background/50"
                                                />
                                                <div className="flex gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => setSelectedPlatform(null)}
                                                        className="flex-1"
                                                    >
                                                        Cancel
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        onClick={() => handleSubmit(platform)}
                                                        disabled={!username.trim() || !postLink.trim() || isSubmitting}
                                                        className={`flex-1 ${config.bgColor} ${config.textColor}`}
                                                    >
                                                        {isSubmitting ? "..." : "Submit"}
                                                    </Button>
                                                </div>
                                            </div>
                                        ) : (
                                            <Button
                                                onClick={() => setSelectedPlatform(platform)}
                                                variant="outline"
                                                className="w-full"
                                            >
                                                <Share2 className="w-4 h-4 mr-2" />
                                                Participate
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* Rules Section */}
                <section className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-6 neon-green">Rules</h2>
                    <div className="space-y-3 p-6 rounded-xl border border-[#00ff88]/30 bg-black/30">
                        {[
                            "Winners are chosen at random – follower count doesn't matter!",
                            "Your post must include #GitFM2025Challenge hashtag",
                            "Your post must include your GitFM profile link (gitfm.com/username)",
                            "One entry per platform per person",
                            "Submissions close December 31st, 2025 at 11:59 PM UTC"
                        ].map((rule, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <Sparkles className="w-4 h-4 text-[#00ff88] mt-0.5 shrink-0" />
                                <p className="text-sm text-muted-foreground">{rule}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Winners Section (Placeholder) */}
                <section className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-6 neon-purple">Winners</h2>
                    <div className="p-8 rounded-xl border border-[#8800ff]/30 bg-black/30">
                        <Trophy className="w-12 h-12 text-[#8800ff] mx-auto mb-4" />
                        <p className="text-muted-foreground">
                            Winners will be announced here on <span className="text-[#ffd700] font-bold">January 31st, 2026</span>
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                            Stay tuned for the results!
                        </p>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
                <p>GitFM 2025 Challenge • Good luck to all participants!</p>
            </footer>
        </div>
    )
}
