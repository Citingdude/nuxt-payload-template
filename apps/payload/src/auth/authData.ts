import { getEnv } from '@payload/env'
import {
  deleteCookie,
  getCookie,
  setCookie,
} from 'cookies-next'
import type { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
// import { useCookies } from 'next-client-cookies'

export const tokensSchema = z.object({
  expires_at: z.number(),
  access_token: z.string(),
  refresh_token: z.string(),
  token_type: z.string(),
})

export interface AuthResponse {
  access_token: string
  expires_in: number
  id_token: string
  refresh_token: string
  token_type: string
}

export interface AuthData {
  expiresAt: number
  accessToken: string
  refreshToken: string
}

const env = getEnv()

export const DEFAULT_SCOPES: string[] = [
  'openid',
  'profile',
  'email',
  'offline_access',
  `urn:zitadel:iam:org:id:${env.AUTH_ORGANIZATION_ID}`,
]

export function setAuthCookie(authResponse: AuthResponse) {
  const now = Date.now()
  const expiresIn = authResponse.expires_in
  const expiresAt = now + expiresIn * 1000

  const tokens = {
    expires_at: expiresAt,
    access_token: authResponse.access_token,
    refresh_token: authResponse.refresh_token,
    token_type: authResponse.token_type,
  }

  setCookie('tokens', JSON.stringify(tokens))
}

export async function getAuthData({ req, res }: { req: NextRequest, res: NextResponse }): Promise<AuthData | null> {
  const tokensCookie = await getCookie('tokens', { req, res })

  if (tokensCookie == null) {
    return null
  }

  const tokens = tokensSchema.safeParse(JSON.parse(tokensCookie))

  if (tokens.success === false) {
    return null
  }

  return {
    expiresAt: Number(tokens.data.expires_at),
    accessToken: tokens.data.access_token,
    refreshToken: tokens.data.refresh_token,
  }
}

export function removeAuthCookie() {
  deleteCookie('tokens')
}
