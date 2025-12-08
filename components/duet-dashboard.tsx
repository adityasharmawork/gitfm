// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { ArrowLeft, Share2, Check, Swords, Sparkles, Github, GitCommit, Star, GitPullRequest, AlertCircle, Flame, Code2, Copy } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
// } from "@/components/ui/dialog"
// import type { GitHubData } from "@/lib/types"

// interface DuetDashboardProps {
//     user1Data: GitHubData
//     user2Data: GitHubData
// }

// interface StatComparisonProps {
//     label: string
//     icon: React.ReactNode
//     value1: number | string
//     value2: number | string
//     color1?: string
//     color2?: string
// }

// function StatComparison({ label, icon, value1, value2, color1 = "#ff00ff", color2 = "#00ffff" }: StatComparisonProps) {
//     const num1 = typeof value1 === "number" ? value1 : 0
//     const num2 = typeof value2 === "number" ? value2 : 0
//     const total = num1 + num2 || 1
//     const percent1 = (num1 / total) * 100
//     const percent2 = (num2 / total) * 100

//     return (
//         <div className="bg-black/30 rounded-xl p-4 border border-border/50">
//             <div className="flex items-center justify-center gap-2 mb-3">
//                 {icon}
//                 <span className="font-bold text-white">{label}</span>
//             </div>

//             <div className="flex items-center gap-4">
//                 {/* Player 1 Value */}
//                 <div className="flex-1 text-right">
//                     <span className="text-2xl font-bold" style={{ color: color1 }}>
//                         {typeof value1 === "number" ? value1.toLocaleString() : value1}
//                     </span>
//                 </div>

//                 {/* VS Bar */}
//                 <div className="w-32 h-3 bg-gray-800 rounded-full overflow-hidden flex">
//                     <div
//                         className="h-full transition-all duration-1000"
//                         style={{ width: `${percent1}%`, backgroundColor: color1 }}
//                     />
//                     <div
//                         className="h-full transition-all duration-1000"
//                         style={{ width: `${percent2}%`, backgroundColor: color2 }}
//                     />
//                 </div>

//                 {/* Player 2 Value */}
//                 <div className="flex-1 text-left">
//                     <span className="text-2xl font-bold" style={{ color: color2 }}>
//                         {typeof value2 === "number" ? value2.toLocaleString() : value2}
//                     </span>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export function DuetDashboard({ user1Data, user2Data }: DuetDashboardProps) {
//     const router = useRouter()
//     const [copied, setCopied] = useState(false)
//     const [showShareDialog, setShowShareDialog] = useState(false)
//     const [shareUrl, setShareUrl] = useState("")

//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             setShareUrl(`${window.location.origin}/duet/${user1Data.user.login}/${user2Data.user.login}`)
//         }
//     }, [user1Data.user.login, user2Data.user.login])

//     const handleShare = () => {
//         setShowShareDialog(true)
//     }

//     const copyToClipboard = async () => {
//         try {
//             await navigator.clipboard.writeText(shareUrl)
//             setCopied(true)
//             setTimeout(() => setCopied(false), 2000)
//         } catch (err) {
//             console.error("Failed to copy:", err)
//         }
//     }

//     return (
//         <div className="min-h-screen bg-background relative overflow-hidden">
//             {/* CRT Effect */}
//             <div className="crt-scanlines fixed inset-0 pointer-events-none z-50" />

//             {/* Background */}
//             <div className="fixed inset-0 grid-bg opacity-30" />
//             <div className="fixed inset-0">
//                 <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#ff00ff]/10 to-transparent" />
//                 <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00ffff]/10 to-transparent" />
//             </div>

//             {/* Content */}
//             <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
//                 {/* Header */}
//                 <div className="flex items-center justify-between mb-8">
//                     <Button
//                         variant="ghost"
//                         onClick={() => router.push("/duet")}
//                         className="text-muted-foreground hover:text-white"
//                     >
//                         <ArrowLeft className="w-4 h-4 mr-2" />
//                         New Battle
//                     </Button>

//                     <div className="flex items-center gap-2">
//                         <Swords className="w-6 h-6 text-[#ffd700]" />
//                         <span className="text-xl font-bold text-white">DUET BATTLE</span>
//                         <Swords className="w-6 h-6 text-[#ffd700]" />
//                     </div>

//                     <Button
//                         onClick={handleShare}
//                         variant="outline"
//                         className="border-[#ffd700]/50 text-[#ffd700] hover:bg-[#ffd700]/10"
//                     >
//                         <Share2 className="w-4 h-4 mr-2" />
//                         Share
//                     </Button>
//                 </div>

//                 <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
//                     <DialogContent className="bg-black/90 border-[#ffd700]/20 text-white sm:max-w-md">
//                         <DialogHeader>
//                             <DialogTitle className="text-2xl font-bold text-center neon-gold">
//                                 Share the Battle!
//                             </DialogTitle>
//                             <DialogDescription className="text-center text-gray-400">
//                                 Challenge your friends to beat these stats!
//                             </DialogDescription>
//                         </DialogHeader>

//                         <div className="flex flex-col items-center justify-center py-6 space-y-6">
//                             {/* VS Badge */}
//                             <div className="relative">
//                                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ff00ff] via-[#ffd700] to-[#00ffff] p-1 animate-spin-slow">
//                                     <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
//                                         <span className="text-2xl font-black text-white">VS</span>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="w-full space-y-2">
//                                 <p className="text-sm font-medium text-gray-300">Battle Link</p>
//                                 <div className="flex items-center gap-2">
//                                     <Input
//                                         readOnly
//                                         value={shareUrl}
//                                         className="bg-white/5 border-white/10 text-white font-mono text-sm h-10"
//                                     />
//                                     <Button
//                                         size="icon"
//                                         onClick={copyToClipboard}
//                                         className="bg-[#ffd700] hover:bg-[#ffd700]/90 text-black shrink-0 h-10 w-10"
//                                     >
//                                         {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
//                                     </Button>
//                                 </div>
//                             </div>

//                             {/* Success Message */}
//                             {copied && (
//                                 <div className="text-center animate-in fade-in slide-in-from-bottom-2">
//                                     <p className="text-[#00ff88] font-bold flex items-center gap-2">
//                                         <Check className="w-4 h-4" /> Link Copied!
//                                     </p>
//                                 </div>
//                             )}

//                             {/* Social Share Buttons */}
//                             <div className="flex gap-4 pt-2">
//                                 <Button
//                                     variant="outline"
//                                     className="border-[#1DA1F2]/50 text-[#1DA1F2] hover:bg-[#1DA1F2]/10"
//                                     onClick={() => window.open(`https://twitter.com/intent/tweet?text=Check out this epic GitHub battle! ⚔️ ${shareUrl}`, '_blank')}
//                                 >
//                                     Share on X
//                                 </Button>
//                                 <Button
//                                     variant="outline"
//                                     className="border-[#0A66C2]/50 text-[#0A66C2] hover:bg-[#0A66C2]/10"
//                                     onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')}
//                                 >
//                                     LinkedIn
//                                 </Button>
//                             </div>
//                         </div>
//                     </DialogContent>
//                 </Dialog>

//                 {/* Player Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                     {/* Player 1 Card */}
//                     <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#ff00ff]/50 shadow-lg shadow-[#ff00ff]/20">
//                         <div className="text-center space-y-4">
//                             <img
//                                 src={user1Data.user.avatarUrl}
//                                 alt={user1Data.user.login}
//                                 className="w-24 h-24 rounded-full mx-auto border-4 border-[#ff00ff]"
//                             />
//                             <div>
//                                 <h2 className="text-2xl font-bold text-[#ff00ff]">@{user1Data.user.login}</h2>
//                                 {user1Data.user.name && (
//                                     <p className="text-muted-foreground">{user1Data.user.name}</p>
//                                 )}
//                             </div>
//                             <div className="flex justify-center gap-4 text-sm">
//                                 <span><strong className="text-[#ff00ff]">{user1Data.user.followers}</strong> followers</span>
//                                 <span><strong className="text-[#ff00ff]">{user1Data.user.publicRepos}</strong> repos</span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* VS Badge */}
//                     <div className="flex items-center justify-center">
//                         <div className="relative">
//                             <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#ff00ff] via-[#ffd700] to-[#00ffff] p-1">
//                                 <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
//                                     <span className="text-4xl font-black text-white">VS</span>
//                                 </div>
//                             </div>
//                             <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-[#ffd700] animate-pulse" />
//                             <Sparkles className="absolute -bottom-2 -left-2 w-8 h-8 text-[#ffd700] animate-pulse" />
//                         </div>
//                     </div>

//                     {/* Player 2 Card */}
//                     <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#00ffff]/50 shadow-lg shadow-[#00ffff]/20">
//                         <div className="text-center space-y-4">
//                             <img
//                                 src={user2Data.user.avatarUrl}
//                                 alt={user2Data.user.login}
//                                 className="w-24 h-24 rounded-full mx-auto border-4 border-[#00ffff]"
//                             />
//                             <div>
//                                 <h2 className="text-2xl font-bold text-[#00ffff]">@{user2Data.user.login}</h2>
//                                 {user2Data.user.name && (
//                                     <p className="text-muted-foreground">{user2Data.user.name}</p>
//                                 )}
//                             </div>
//                             <div className="flex justify-center gap-4 text-sm">
//                                 <span><strong className="text-[#00ffff]">{user2Data.user.followers}</strong> followers</span>
//                                 <span><strong className="text-[#00ffff]">{user2Data.user.publicRepos}</strong> repos</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Stats Comparison Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//                     <StatComparison
//                         label="Total Commits"
//                         icon={<GitCommit className="w-5 h-5 text-[#00ff88]" />}
//                         value1={user1Data.totalCommits}
//                         value2={user2Data.totalCommits}
//                     />
//                     <StatComparison
//                         label="Contributions"
//                         icon={<Github className="w-5 h-5 text-white" />}
//                         value1={user1Data.totalContributions}
//                         value2={user2Data.totalContributions}
//                     />
//                     <StatComparison
//                         label="Stars Earned"
//                         icon={<Star className="w-5 h-5 text-[#ffd700]" />}
//                         value1={user1Data.totalStarsEarned}
//                         value2={user2Data.totalStarsEarned}
//                     />
//                     <StatComparison
//                         label="Pull Requests"
//                         icon={<GitPullRequest className="w-5 h-5 text-[#ff00ff]" />}
//                         value1={user1Data.totalPRsMerged}
//                         value2={user2Data.totalPRsMerged}
//                     />
//                     <StatComparison
//                         label="Issues Opened"
//                         icon={<AlertCircle className="w-5 h-5 text-[#ff6600]" />}
//                         value1={user1Data.totalIssuesOpened}
//                         value2={user2Data.totalIssuesOpened}
//                     />
//                     <StatComparison
//                         label="Longest Streak"
//                         icon={<Flame className="w-5 h-5 text-[#ff4500]" />}
//                         value1={user1Data.longestStreak}
//                         value2={user2Data.longestStreak}
//                     />
//                 </div>

//                 {/* Top Languages */}
//                 <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 mb-8">
//                     <h3 className="text-xl font-bold text-center mb-6 flex items-center justify-center gap-2">
//                         <Code2 className="w-5 h-5 text-[#00ffff]" />
//                         Top Languages
//                     </h3>
//                     <div className="grid grid-cols-2 gap-8">
//                         <div className="space-y-2">
//                             <p className="text-center font-bold text-[#ff00ff] mb-3">@{user1Data.user.login}</p>
//                             {user1Data.languages.slice(0, 5).map((lang, i) => (
//                                 <div key={i} className="flex items-center gap-2">
//                                     <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
//                                     <span className="text-sm text-white">{lang.name}</span>
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="space-y-2">
//                             <p className="text-center font-bold text-[#00ffff] mb-3">@{user2Data.user.login}</p>
//                             {user2Data.languages.slice(0, 5).map((lang, i) => (
//                                 <div key={i} className="flex items-center gap-2">
//                                     <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
//                                     <span className="text-sm text-white">{lang.name}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Celebration Banner */}
//                 <div className="bg-gradient-to-r from-[#ff00ff]/20 via-[#ffd700]/20 to-[#00ffff]/20 rounded-2xl p-8 border border-[#ffd700]/30 text-center">
//                     <div className="flex items-center justify-center gap-3 mb-4">
//                         <Sparkles className="w-8 h-8 text-[#ffd700] animate-pulse" />
//                         <h2 className="text-3xl font-black text-white">🎉 CODE LEGENDS! 🎉</h2>
//                         <Sparkles className="w-8 h-8 text-[#ffd700] animate-pulse" />
//                     </div>
//                     <p className="text-muted-foreground mb-6">
//                         Two amazing developers, one epic comparison! Both are crushing it in their code journey.
//                     </p>
//                     <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                         <Button
//                             onClick={handleShare}
//                             className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] hover:opacity-90"
//                         >
//                             <Share2 className="w-4 h-4 mr-2" />
//                             Challenge Another Friend
//                         </Button>
//                         <Button
//                             variant="outline"
//                             onClick={() => router.push("/")}
//                             className="border-border/50"
//                         >
//                             View Individual Stats
//                         </Button>
//                     </div>
//                 </div>

//                 {/* Footer */}
//                 <footer className="mt-8 text-center text-sm text-muted-foreground">
//                     <p>GitFM 2025 • Duet Battle Mode</p>
//                 </footer>
//             </div>
//         </div>
//     )
// }


















"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { 
    ArrowLeft, 
    Share2, 
    Check, 
    Swords, 
    Sparkles, 
    Github, 
    GitCommit, 
    Star, 
    GitPullRequest, 
    AlertCircle, 
    Flame, 
    Code2, 
    X 
} from "lucide-react"
import { Button } from "@/components/ui/button"
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
    const [showShareDialog, setShowShareDialog] = useState(false)
    const [shareUrl, setShareUrl] = useState("")

    useEffect(() => {
        if (typeof window !== "undefined") {
            setShareUrl(`${window.location.origin}/duet/${user1Data.user.login}/${user2Data.user.login}`)
        }
    }, [user1Data.user.login, user2Data.user.login])

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl)
            setShowShareDialog(true)
        } catch (err) {
            console.error("Failed to copy:", err)
            alert("Failed to copy link")
        }
    }

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
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
                                Share this epic battle with friends and spread the word!
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