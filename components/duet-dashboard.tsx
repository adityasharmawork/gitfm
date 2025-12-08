"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Share2, Check, Swords, Sparkles, Github, GitCommit, Star, GitPullRequest, AlertCircle, Flame, Code2, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import type { GitHubData } from "@/lib/types"

interface DuetDashboardProps {
    user1Data: GitHubData
    user2Data: GitHubData
}

interface StatComparisonProps {
    label: string
    icon: React.ReactNode
    value1: number | string
    value2: number | string
    color1?: string
    color2?: string
}

function StatComparison({ label, icon, value1, value2, color1 = "#ff00ff", color2 = "#00ffff" }: StatComparisonProps) {
    const num1 = typeof value1 === "number" ? value1 : 0
    const num2 = typeof value2 === "number" ? value2 : 0
    const total = num1 + num2 || 1
    const percent1 = (num1 / total) * 100
    const percent2 = (num2 / total) * 100

    return (
        <div className="bg-black/30 rounded-xl p-4 border border-border/50">
            <div className="flex items-center justify-center gap-2 mb-3">
                {icon}
                <span className="font-bold text-white">{label}</span>
            </div>

            <div className="flex items-center gap-4">
                {/* Player 1 Value */}
                <div className="flex-1 text-right">
                    <span className="text-2xl font-bold" style={{ color: color1 }}>
                        {typeof value1 === "number" ? value1.toLocaleString() : value1}
                    </span>
                </div>

                {/* VS Bar */}
                <div className="w-32 h-3 bg-gray-800 rounded-full overflow-hidden flex">
                    <div
                        className="h-full transition-all duration-1000"
                        style={{ width: `${percent1}%`, backgroundColor: color1 }}
                    />
                    <div
                        className="h-full transition-all duration-1000"
                        style={{ width: `${percent2}%`, backgroundColor: color2 }}
                    />
                </div>

                {/* Player 2 Value */}
                <div className="flex-1 text-left">
                    <span className="text-2xl font-bold" style={{ color: color2 }}>
                        {typeof value2 === "number" ? value2.toLocaleString() : value2}
                    </span>
                </div>
            </div>
        </div>
    )
}

export function DuetDashboard({ user1Data, user2Data }: DuetDashboardProps) {
    const router = useRouter()
    const [copied, setCopied] = useState(false)
    const [showShareDialog, setShowShareDialog] = useState(false)
    const [shareUrl, setShareUrl] = useState("")

    useEffect(() => {
        if (typeof window !== "undefined") {
            setShareUrl(`${window.location.origin}/duet/${user1Data.user.login}/${user2Data.user.login}`)
        }
    }, [user1Data.user.login, user2Data.user.login])

    const handleShare = () => {
        setShowShareDialog(true)
    }

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error("Failed to copy:", err)
        }
    }

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* CRT Effect */}
            <div className="crt-scanlines fixed inset-0 pointer-events-none z-50" />

            {/* Background */}
            <div className="fixed inset-0 grid-bg opacity-30" />
            <div className="fixed inset-0">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#ff00ff]/10 to-transparent" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00ffff]/10 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <Button
                        variant="ghost"
                        onClick={() => router.push("/duet")}
                        className="text-muted-foreground hover:text-white"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        New Battle
                    </Button>

                    <div className="flex items-center gap-2">
                        <Swords className="w-6 h-6 text-[#ffd700]" />
                        <span className="text-xl font-bold text-white">DUET BATTLE</span>
                        <Swords className="w-6 h-6 text-[#ffd700]" />
                    </div>

                    <Button
                        onClick={handleShare}
                        variant="outline"
                        className="border-[#ffd700]/50 text-[#ffd700] hover:bg-[#ffd700]/10"
                    >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                    </Button>
                </div>

                <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
                    <DialogContent className="bg-black/90 border-[#ffd700]/20 text-white sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-center neon-gold">
                                Share the Battle!
                            </DialogTitle>
                            <DialogDescription className="text-center text-gray-400">
                                Challenge your friends to beat these stats!
                            </DialogDescription>
                        </DialogHeader>

                        <div className="flex flex-col items-center justify-center py-6 space-y-6">
                            {/* VS Badge */}
                            <div className="relative">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ff00ff] via-[#ffd700] to-[#00ffff] p-1 animate-spin-slow">
                                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                        <span className="text-2xl font-black text-white">VS</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full space-y-2">
                                <p className="text-sm font-medium text-gray-300">Battle Link</p>
                                <div className="flex items-center gap-2">
                                    <Input
                                        readOnly
                                        value={shareUrl}
                                        className="bg-white/5 border-white/10 text-white font-mono text-sm h-10"
                                    />
                                    <Button
                                        size="icon"
                                        onClick={copyToClipboard}
                                        className="bg-[#ffd700] hover:bg-[#ffd700]/90 text-black shrink-0 h-10 w-10"
                                    >
                                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                    </Button>
                                </div>
                            </div>

                            {/* Success Message */}
                            {copied && (
                                <div className="text-center animate-in fade-in slide-in-from-bottom-2">
                                    <p className="text-[#00ff88] font-bold flex items-center gap-2">
                                        <Check className="w-4 h-4" /> Link Copied!
                                    </p>
                                </div>
                            )}

                            {/* Social Share Buttons */}
                            <div className="flex gap-4 pt-2">
                                <Button
                                    variant="outline"
                                    className="border-[#1DA1F2]/50 text-[#1DA1F2] hover:bg-[#1DA1F2]/10"
                                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=Check out this epic GitHub battle! ⚔️ ${shareUrl}`, '_blank')}
                                >
                                    Share on X
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-[#0A66C2]/50 text-[#0A66C2] hover:bg-[#0A66C2]/10"
                                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')}
                                >
                                    LinkedIn
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>

                {/* Player Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Player 1 Card */}
                    <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#ff00ff]/50 shadow-lg shadow-[#ff00ff]/20">
                        <div className="text-center space-y-4">
                            <img
                                src={user1Data.user.avatarUrl}
                                alt={user1Data.user.login}
                                className="w-24 h-24 rounded-full mx-auto border-4 border-[#ff00ff]"
                            />
                            <div>
                                <h2 className="text-2xl font-bold text-[#ff00ff]">@{user1Data.user.login}</h2>
                                {user1Data.user.name && (
                                    <p className="text-muted-foreground">{user1Data.user.name}</p>
                                )}
                            </div>
                            <div className="flex justify-center gap-4 text-sm">
                                <span><strong className="text-[#ff00ff]">{user1Data.user.followers}</strong> followers</span>
                                <span><strong className="text-[#ff00ff]">{user1Data.user.publicRepos}</strong> repos</span>
                            </div>
                        </div>
                    </div>

                    {/* VS Badge */}
                    <div className="flex items-center justify-center">
                        <div className="relative">
                            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#ff00ff] via-[#ffd700] to-[#00ffff] p-1">
                                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                                    <span className="text-4xl font-black text-white">VS</span>
                                </div>
                            </div>
                            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-[#ffd700] animate-pulse" />
                            <Sparkles className="absolute -bottom-2 -left-2 w-8 h-8 text-[#ffd700] animate-pulse" />
                        </div>
                    </div>

                    {/* Player 2 Card */}
                    <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#00ffff]/50 shadow-lg shadow-[#00ffff]/20">
                        <div className="text-center space-y-4">
                            <img
                                src={user2Data.user.avatarUrl}
                                alt={user2Data.user.login}
                                className="w-24 h-24 rounded-full mx-auto border-4 border-[#00ffff]"
                            />
                            <div>
                                <h2 className="text-2xl font-bold text-[#00ffff]">@{user2Data.user.login}</h2>
                                {user2Data.user.name && (
                                    <p className="text-muted-foreground">{user2Data.user.name}</p>
                                )}
                            </div>
                            <div className="flex justify-center gap-4 text-sm">
                                <span><strong className="text-[#00ffff]">{user2Data.user.followers}</strong> followers</span>
                                <span><strong className="text-[#00ffff]">{user2Data.user.publicRepos}</strong> repos</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <StatComparison
                        label="Total Commits"
                        icon={<GitCommit className="w-5 h-5 text-[#00ff88]" />}
                        value1={user1Data.totalCommits}
                        value2={user2Data.totalCommits}
                    />
                    <StatComparison
                        label="Contributions"
                        icon={<Github className="w-5 h-5 text-white" />}
                        value1={user1Data.totalContributions}
                        value2={user2Data.totalContributions}
                    />
                    <StatComparison
                        label="Stars Earned"
                        icon={<Star className="w-5 h-5 text-[#ffd700]" />}
                        value1={user1Data.totalStarsEarned}
                        value2={user2Data.totalStarsEarned}
                    />
                    <StatComparison
                        label="Pull Requests"
                        icon={<GitPullRequest className="w-5 h-5 text-[#ff00ff]" />}
                        value1={user1Data.totalPRsMerged}
                        value2={user2Data.totalPRsMerged}
                    />
                    <StatComparison
                        label="Issues Opened"
                        icon={<AlertCircle className="w-5 h-5 text-[#ff6600]" />}
                        value1={user1Data.totalIssuesOpened}
                        value2={user2Data.totalIssuesOpened}
                    />
                    <StatComparison
                        label="Longest Streak"
                        icon={<Flame className="w-5 h-5 text-[#ff4500]" />}
                        value1={user1Data.longestStreak}
                        value2={user2Data.longestStreak}
                    />
                </div>

                {/* Top Languages */}
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 mb-8">
                    <h3 className="text-xl font-bold text-center mb-6 flex items-center justify-center gap-2">
                        <Code2 className="w-5 h-5 text-[#00ffff]" />
                        Top Languages
                    </h3>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <p className="text-center font-bold text-[#ff00ff] mb-3">@{user1Data.user.login}</p>
                            {user1Data.languages.slice(0, 5).map((lang, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                                    <span className="text-sm text-white">{lang.name}</span>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-2">
                            <p className="text-center font-bold text-[#00ffff] mb-3">@{user2Data.user.login}</p>
                            {user2Data.languages.slice(0, 5).map((lang, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                                    <span className="text-sm text-white">{lang.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Celebration Banner */}
                <div className="bg-gradient-to-r from-[#ff00ff]/20 via-[#ffd700]/20 to-[#00ffff]/20 rounded-2xl p-8 border border-[#ffd700]/30 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Sparkles className="w-8 h-8 text-[#ffd700] animate-pulse" />
                        <h2 className="text-3xl font-black text-white">🎉 CODE LEGENDS! 🎉</h2>
                        <Sparkles className="w-8 h-8 text-[#ffd700] animate-pulse" />
                    </div>
                    <p className="text-muted-foreground mb-6">
                        Two amazing developers, one epic comparison! Both are crushing it in their code journey.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            onClick={handleShare}
                            className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] hover:opacity-90"
                        >
                            <Share2 className="w-4 h-4 mr-2" />
                            Challenge Another Friend
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => router.push("/")}
                            className="border-border/50"
                        >
                            View Individual Stats
                        </Button>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-8 text-center text-sm text-muted-foreground">
                    <p>GitFM 2025 • Duet Battle Mode</p>
                </footer>
            </div>
        </div>
    )
}
