import type {
  NextRequest,
  NextResponse,
} from 'next/server'

export interface CustomMiddleware {
  request: NextRequest
  response: NextResponse
}
