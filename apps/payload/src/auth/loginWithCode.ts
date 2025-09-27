import { setAuthCookie } from '@payload/auth/authData'
import { getEnv } from '@payload/env'

export async function loginWithCode(code: string, codeVerifier: string): Promise<{ success: boolean }> {
  if (codeVerifier == null) {
    throw new Error('Code verifier not found')
  }

  const env = getEnv()

  const response = await fetch(`${env.AUTH_BASE_URL}/oauth/v2/token`, {
    body: new URLSearchParams({
      client_id: env.AUTH_CLIENT_ID,
      code,
      code_verifier: codeVerifier,
      grant_type: 'authorization_code',
      redirect_uri: `${env.CMS_BASE_URL}/auth/callback`,
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
  })

  const body = await response.json()

  setAuthCookie(body)

  return {
    success: true,
  }
}
