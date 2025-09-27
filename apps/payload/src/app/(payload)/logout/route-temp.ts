import { logout } from '@payload/auth/logout'
import { getEnv } from '@payload/env'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function GET(_request: NextRequest) {
  await logout()

  const env = getEnv()

  return NextResponse.redirect(
    `${env.CMS_BASE_URL}/login`,
    { status: 302 },
  )
}
