/* eslint-disable check-file/folder-naming-convention */
import { getPayload } from '@payload/utils/payload/getPayload.util'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const legalConsetHubspot = {
  consent: {
    // Include this object when GDPR options are enabled
    // communications: [
    //   {
    //     subscriptionTypeId: 999,
    //     text: 'I agree to receive marketing communications from Example Company.',
    //     value: true,
    //   },
    // ],
    consentToProcess: true,
    text: 'I agree to allow Example Company to store and process my personal data.',
  },
}

function convertValue(value: any | any[]): any {
  if (Array.isArray(value)) {
    return value.join('; ')
  }

  return value
}

async function getHubspotForm(request: NextRequest, { params }: { params: Promise<{ form: string }> }) {
  const payload = await getPayload()
  const awaitedParams = await params

  const globalSettings = await payload.findGlobal({
    slug: 'settings',
  })

  const hubspotAccessToken = globalSettings.hubspot?.accessToken
  const hubspotPortalId = globalSettings.hubspot?.portalId

  if (hubspotAccessToken == null || hubspotPortalId == null) {
    return NextResponse.json({ error: 'No Hubspot access token or portal ID found' }, { status: 400 })
  }

  const formResponse = await fetch(`https://api.hubapi.com/marketing/v3/forms/${awaitedParams.form}`, {
    headers: {
      'Authorization': `Bearer ${hubspotAccessToken}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })

  const jsonResponse = await formResponse.json()

  return NextResponse.json(jsonResponse)
}

async function postHubspotForm(request: NextRequest, { params }: { params: Promise<{ form: string }> }) {
  const payload = await getPayload()
  const awaitedParams = await params
  const body = await request.json()

  const globalSettings = await payload.findGlobal({
    slug: 'settings',
  })

  const hubspotAccessToken = globalSettings.hubspot?.accessToken
  const hubspotPortalId = globalSettings.hubspot?.portalId

  if (hubspotAccessToken == null || hubspotPortalId == null) {
    return NextResponse.json({ error: 'No Hubspot access token or portal ID found' }, { status: 400 })
  }

  /**
   * Hubspot field example
   * {
   *   "objectTypeId": "0-1",
   *   "name": "email",
   *   "value": "test@test.com"
   * }
   */
  const hubspotFields = Object.entries(body).map(([
    key,
    value,
  ]) => ({
    objectTypeId: '0-1',
    name: key,
    value: convertValue(value),
  }))

  const hubspotBody = {
    portalId: hubspotPortalId,
    submittedAt: Date.now(),
    fields: hubspotFields,
    legalConsentOptions: legalConsetHubspot,
  }

  const formResponse = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${awaitedParams.form}`, {
    body: JSON.stringify(hubspotBody),
    headers: {
      'Authorization': `Bearer ${hubspotAccessToken}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  const jsonResponse = await formResponse.json()

  return NextResponse.json(jsonResponse)
}

export { getHubspotForm as GET, postHubspotForm as POST }
