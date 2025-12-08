"use client"

import { useState, useEffect, use } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { DuetDashboard } from "@/components/duet-dashboard"
import type { GitHubData } from "@/lib/types"

interface DuetResultsPageProps {
    params: Promise<{ user1: string; user2: string }>
}

export default function DuetResultsPage({ params }: DuetResultsPageProps) {
    const { user1, user2 } = use(params)

    const [state, setState] = useState<"loading" | "results" | "error">("loading")
    const [user1Data, setUser1Data] = useState<GitHubData | null>(null)
    const [user2Data, setUser2Data] = useState<GitHubData | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchBothUsers = async () => {
            try {
                setState("loading")
                setError(null)

                // Minimum loading time for dramatic effect
                const minimumLoadingTime = new Promise(resolve => setTimeout(resolve, 5000))

                // Fetch both users in parallel
                const [response1, response2] = await Promise.all([
                    fetch("/api/github", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ username: decodeURIComponent(user1) }),
                    }),
                    fetch("/api/github", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ username: decodeURIComponent(user2) }),
                    }),
                ])

                // Wait for minimum loading time
                await minimumLoadingTime

                const data1 = await response1.json()
                const data2 = await response2.json()

                if (!response1.ok) {
                    throw new Error(`Player 1: ${data1.error || "Failed to fetch data"}`)
                }
                if (!response2.ok) {
                    throw new Error(`Player 2: ${data2.error || "Failed to fetch data"}`)
                }

                setUser1Data(data1)
                setUser2Data(data2)
                setState("results")
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred")
                setState("error")
            }
        }

        fetchBothUsers()
    }, [user1, user2])

    const handleReset = () => {
        window.location.href = "/duet"
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
                        Battle Failed!
                    </h1>

                    <p className="text-muted-foreground max-w-md mx-auto">
                        {error}
                    </p>

                    <button
                        onClick={handleReset}
                        className="px-6 py-3 rounded-lg font-bold bg-gradient-to-r from-[#ff00ff] to-[#8800ff] hover:from-[#ff33ff] hover:to-[#aa00ff] text-white transition-all"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        )
    }

    if (state === "results" && user1Data && user2Data) {
        return <DuetDashboard user1Data={user1Data} user2Data={user2Data} />
    }

    return null
}
