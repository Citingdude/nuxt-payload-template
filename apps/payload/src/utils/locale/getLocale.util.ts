import type { NextRequest } from 'next/server'

export function getLocale(request: NextRequest): string {
  const locale = request.nextUrl.searchParams.get('locale')

  return locale ?? 'en'
}
