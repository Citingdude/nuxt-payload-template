import config from '@payload-config'
import { cookies } from 'next/headers'
import { getPayload as getPayloadWithConfig } from 'payload'

export async function getPayload() {
  // Tag page as dynamic for nextjs
  await cookies()

  const payload = await getPayloadWithConfig({ config })

  return payload
}
