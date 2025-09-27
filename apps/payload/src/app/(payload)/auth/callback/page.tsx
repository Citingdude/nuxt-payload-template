'use client'
import { loginWithCode } from '@payload/auth/loginWithCode'
import { LoadingOverlay, } from '@payloadcms/ui'
import { getCookie } from 'cookies-next'
import { redirect, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
export default function Callback() {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  if (code == null) {
    redirect('/login')
  }

  const codeVerifier = getCookie('code_verifier') as string

  useEffect(() => {
    loginWithCode(code, codeVerifier)
      .then(({ success }) => {
        if (success) {
          redirect('/')
        }
      })
  }, [
    codeVerifier,
  ])

  return (
    <div style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      height: '100vh',
      justifyContent: 'center',
    }}
    >
      <LoadingOverlay />
    </div>
  )
}
