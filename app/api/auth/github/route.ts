import { NextResponse } from "next/server"

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID!

export async function GET() {
  // Generate a random state for CSRF protection
  const state = crypto.randomUUID()

  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/auth/github/callback`,
    scope: "read:user repo",
    state,
  })

  const response = NextResponse.redirect(`https://github.com/login/oauth/authorize?${params}`)

  // Store state in cookie for verification
  response.cookies.set("github_oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 10, // 10 minutes
  })

  return response
}
