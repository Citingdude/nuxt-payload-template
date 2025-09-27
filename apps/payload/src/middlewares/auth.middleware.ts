import { getAuthData } from '@payload/auth/authData'
import type { CustomMiddleware } from '@payload/middlewares/helper.middleware'
import { NextResponse } from 'next/server'

export async function withAuthMiddleware(customMiddleware: CustomMiddleware) {
  const { request, response } = customMiddleware

  if (request.nextUrl.pathname === '/login') {
    return customMiddleware
  }
  const authData = await getAuthData({ req: request, res: response })

  if (authData == null) {
    return customMiddleware
  }

  const requestHeaders = new Headers(request.headers)

  requestHeaders.set('Authorization', `Bearer ${authData.accessToken}`)

  const authResponse = NextResponse.next({
    headers: response.headers,
    request: {
      headers: requestHeaders,
    },
  })

  return {
    request,
    response: authResponse,
  }
}
