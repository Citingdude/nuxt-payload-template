import { withAuthMiddleware } from '@payload/middlewares/auth.middleware'
import { withCorsMiddleware } from '@payload/middlewares/cors.middleware'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export default async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const corsMiddleware = withCorsMiddleware({
    request,
    response,
  })

  const authMiddleware = await withAuthMiddleware({
    request: corsMiddleware.request,
    response: corsMiddleware.response,
  })

  return authMiddleware.response
}
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images).*)',
  ],
}
