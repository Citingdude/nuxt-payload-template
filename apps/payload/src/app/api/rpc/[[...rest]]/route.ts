/* eslint-disable check-file/folder-naming-convention */

import { RPCHandler } from '@orpc/server/fetch'
import { orpcRouter } from '@payload/orpc/router/orpc.router'

const handler = new RPCHandler(orpcRouter)

async function handleRequest(request: Request) {
  const { response } = await handler.handle(request, {
    context: {
      'Accept-Language': request.headers.get('Accept-Language'),
      'Authorization': request.headers.get('Authorization'),
    },
    prefix: '/api/rpc',
  })

  return response ?? new Response('Not found', { status: 404 })
}

export const GET = handleRequest
export const POST = handleRequest
export const PUT = handleRequest
export const PATCH = handleRequest
export const DELETE = handleRequest
