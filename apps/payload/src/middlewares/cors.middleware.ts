/* eslint-disable node/prefer-global/process */
import type { CustomMiddleware } from '@payload/middlewares/helper.middleware'

export function withCorsMiddleware(customMiddleware: CustomMiddleware) {
  const {
    request,
    response,
  } = customMiddleware
  const responseHeaders = new Headers(response.headers)

  if (process.env.SITE_BASE_URL == null) {
    return {
      request,
      response,
    }
  }

  responseHeaders.set('Access-Control-Allow-Origin', process.env.SITE_BASE_URL)
  responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  return {
    request,
    response,
  }
}
