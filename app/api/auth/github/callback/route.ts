import { type NextRequest, NextResponse } from "next/server"
import { encryptSession } from "@/lib/session"

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID!
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET!

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get("code")
  const state = searchParams.get("state")
  const storedState = request.cookies.get("github_oauth_state")?.value

  // Verify state to prevent CSRF
  if (!state || state !== storedState) {
    return NextResponse.redirect(new URL("/?error=invalid_state", request.url))
  }

  if (!code) {
    return NextResponse.redirect(new URL("/?error=no_code", request.url))
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code,
      }),
    })

    const tokenData = await tokenResponse.json()

    if (tokenData.error) {
      console.error("OAuth error:", tokenData.error_description)
      return NextResponse.redirect(new URL(`/?error=${tokenData.error}`, request.url))
    }

    const accessToken = tokenData.access_token

    // Fetch user info to get the username
    const userResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github.v3+json",
      },
    })

    const userData = await userResponse.json()

    if (!userResponse.ok) {
      return NextResponse.redirect(new URL("/?error=user_fetch_failed", request.url))
    }

    // Create response and set session cookie
    const response = NextResponse.redirect(new URL("/", request.url))

    // Encrypt session data (includes access token securely)
    const encryptedSession = encryptSession({
      accessToken,
      username: userData.login,
      avatarUrl: userData.avatar_url,
      name: userData.name,
    })

    response.cookies.set("github_session", encryptedSession, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    })

    // Clear the OAuth state cookie
    response.cookies.delete("github_oauth_state")

    return response
  } catch (error) {
    console.error("OAuth callback error:", error)
    return NextResponse.redirect(new URL("/?error=callback_failed", request.url))
  }
}

