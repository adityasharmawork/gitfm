import { type NextRequest, NextResponse } from "next/server"
import { decryptSession } from "@/lib/session"

interface SessionData {
  accessToken: string
  username: string
  avatarUrl: string
  name: string | null
}

export async function GET(request: NextRequest) {
  const sessionCookie = request.cookies.get("github_session")?.value

  if (!sessionCookie) {
    return NextResponse.json({ authenticated: false })
  }

  try {
    const sessionData = decryptSession<SessionData>(sessionCookie)

    if (!sessionData) {
      return NextResponse.json({ authenticated: false })
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        username: sessionData.username,
        avatarUrl: sessionData.avatarUrl,
        name: sessionData.name,
      },
    })
  } catch {
    return NextResponse.json({ authenticated: false })
  }
}

