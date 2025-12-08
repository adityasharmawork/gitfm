import crypto from "crypto"

// Use a secret key from environment variable (must be 32 bytes for AES-256)
const getSecretKey = (): Buffer => {
    const secret = process.env.SESSION_SECRET
    if (!secret) {
        throw new Error("SESSION_SECRET environment variable is required")
    }
    // Create a consistent 32-byte key from the secret
    return crypto.createHash("sha256").update(secret).digest()
}

const ALGORITHM = "aes-256-gcm"
const IV_LENGTH = 16
const AUTH_TAG_LENGTH = 16

export function encryptSession(data: object): string {
    const key = getSecretKey()
    const iv = crypto.randomBytes(IV_LENGTH)
    const cipher = crypto.createCipheriv(ALGORITHM, key, iv)

    const jsonData = JSON.stringify(data)
    const encrypted = Buffer.concat([cipher.update(jsonData, "utf8"), cipher.final()])
    const authTag = cipher.getAuthTag()

    // Combine IV + AuthTag + Encrypted data, then base64 encode
    const combined = Buffer.concat([iv, authTag, encrypted])
    return combined.toString("base64")
}

export function decryptSession<T = unknown>(encryptedData: string): T | null {
    try {
        const key = getSecretKey()
        const combined = Buffer.from(encryptedData, "base64")

        // Extract IV, AuthTag, and encrypted data
        const iv = combined.subarray(0, IV_LENGTH)
        const authTag = combined.subarray(IV_LENGTH, IV_LENGTH + AUTH_TAG_LENGTH)
        const encrypted = combined.subarray(IV_LENGTH + AUTH_TAG_LENGTH)

        const decipher = crypto.createDecipheriv(ALGORITHM, key, iv)
        decipher.setAuthTag(authTag)

        const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()])
        return JSON.parse(decrypted.toString("utf8")) as T
    } catch (error) {
        console.error("Session decryption failed:", error)
        return null
    }
}
