"use client"

import { useState, useEffect, use } from "react"
import { useSearchParams } from "next/navigation"
import { LoadingScreen } from "@/components/loading-screen"
import { ResultsDashboard } from "@/components/results-dashboard"
import type { GitHubData } from "@/lib/types"

interface UserPageProps {
    params: Promise<{ username: string }>
}

export default function UserPage({ params }: UserPageProps) {
    const { username } = use(params)
    const searchParams = useSearchParams()

    const [state, setState] = useState<"loading" | "results" | "error">("loading")
    const [githubData, setGithubData] = useState<GitHubData | null>(null)
    const [error, setError] = useState<string | null>(null)

    // Get vibe mode from URL params, default to "hype"
    const vibeMode = (searchParams.get("mode") as "hype" | "roast") || "hype"
    const useOAuth = searchParams.get("oauth") === "true"

    useEffect(() => {
        const fetchData = async () => {
            try {
                setState("loading")
                setError(null)

                // Start both the API call and a minimum delay timer
                const minimumLoadingTime = new Promise(resolve => setTimeout(resolve, 18000))

                const fetchPromise = fetch("/api/github", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username: decodeURIComponent(username), useOAuth }),
                })

                // Wait for both the API response AND the minimum delay
                const [response] = await Promise.all([fetchPromise, minimumLoadingTime])

                const data = await response.json()

                if (!response.ok) {
                    throw new Error(data.error || "Failed to fetch GitHub data")
                }

                setGithubData(data)
                setState("results")
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred")
                setState("error")
            }
        }

        fetchData()
    }, [username, useOAuth])

    const handleReset = () => {
        window.location.href = "/"
    }

    if (state === "loading") {
        return <LoadingScreen />
    }

    if (state === "error") {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background relative">
                {/* CRT Effect */}
                <div className="crt-scanlines fixed inset-0 pointer-events-none z-50" />

                {/* Background */}
                <div className="fixed inset-0 grid-bg opacity-30" />
                <div className="fixed inset-0">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ff00ff]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#00ff88]/10 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 text-center space-y-6 px-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-[#ff0000]/20 flex items-center justify-center border border-[#ff0000]/50">
                        <span className="text-4xl">⚠️</span>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold text-[#ff0000]">
                        Oops! Something went wrong
                    </h1>

                    <p className="text-muted-foreground max-w-md mx-auto">
                        {error}
                    </p>

                    <button
                        onClick={handleReset}
                        className="px-6 py-3 rounded-lg font-bold bg-gradient-to-r from-[#ff00ff] to-[#8800ff] hover:from-[#ff33ff] hover:to-[#aa00ff] text-white transition-all"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        )
    }

    if (state === "results" && githubData) {
        return <ResultsDashboard data={githubData} vibeMode={vibeMode} onReset={handleReset} username={username} />
    }

    return null
}
