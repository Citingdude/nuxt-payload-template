import { RPCHandler } from '@orpc/server/fetch'
import { CORSPlugin } from '@orpc/server/plugins'
import { orpcRouter } from '@payload/orpc/router/orpc.router'

const handler = new RPCHandler(orpcRouter, {
  plugins: [
    new CORSPlugin({
      allowHeaders: [
        'Content-Type',
        'Authorization',
        'X-Requested-With',
      ],
      allowMethods: [
        'GET',
        'HEAD',
        'PUT',
        'POST',
        'DELETE',
        'PATCH',
        'OPTIONS',
      ],
      credentials: true,
      origin: [
        'http://localhost:3000',
        'http://localhost:4000',
        'http://localhost:5173',
      ],
    }),
  ],
})

async function handleRequest(request: Request) {
  const {
    response,
  } = await handler.handle(request, {
    context: {
      'Accept-Language': request.headers.get('Accept-Language'),
      'Authorization': request.headers.get('Authorization'),
    },
    prefix: '/api/rpc',
  })

  return response ?? new Response('Not found', {
    status: 404,
  })
}

export const GET = handleRequest
export const POST = handleRequest
export const PUT = handleRequest
export const PATCH = handleRequest
export const DELETE = handleRequest
export const OPTIONS = handleRequest
