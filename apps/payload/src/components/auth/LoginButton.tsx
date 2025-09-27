'use client'

import { DEFAULT_SCOPES } from '@payload/auth/authData'
import { getEnv } from '@payload/env'
import { getCookie } from 'cookies-next'
import { setCookie } from 'cookies-next/client'
import pkceChallenge from 'pkce-challenge'
import React, { useEffect, useState } from 'react'

async function getLoginUrl(): Promise<string> {
  const env = getEnv()

  const searchParams = new URLSearchParams()
  let codeChallenge = await getCookie('code_challenge')
  const codeVerifier = await getCookie('code_verifier')

  if (codeChallenge == null || codeVerifier == null) {
    const codes = await pkceChallenge()

    setCookie('code_challenge', codes.code_challenge)
    setCookie('code_verifier', codes.code_verifier)

    codeChallenge = codes.code_challenge
  }

  const scopes = DEFAULT_SCOPES

  searchParams.append('client_id', `290541882453367555@template`)
  searchParams.append('redirect_uri', `${env.CMS_BASE_URL}/auth/callback`)
  searchParams.append('response_type', 'code')
  searchParams.append('prompt', 'login')
  searchParams.append('scope', scopes.join(' '))
  searchParams.append('code_challenge', codeChallenge)
  searchParams.append('code_challenge_method', 'S256')

  return `${env.AUTH_BASE_URL}/oauth/v2/authorize?${searchParams.toString()}`
}

function LoginButton() {
  const [
    url,
    setUrl,
  ] = useState<string | null>(null)

  // 3. Create out useEffect function
  useEffect(() => {
    getLoginUrl().then((value) => {
      setUrl(value)
    })
  }, [])

  return (
    <div>
      <a
        className={`
          btn btn--style-primary btn--icon-style-without-border btn--size-medium
        `}
        style={{
          display: 'block',
          textAlign: 'center',
          width: '100%',
        }}
        href={url ?? ''}
      >

        Sign in
      </a>
    </div>

  )
}

export default LoginButton
