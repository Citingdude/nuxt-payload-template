import React from 'react'

export function Logo() {
  return (
    <div style={{ maxWidth: '300px' }}>
      Payload Nuxt Monorepo Template
    </div>
  )
}

export function BigLogo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>

      <div style={{ fontSize: '32px', fontWeight: 'bold', lineHeight: '1.2', textAlign: 'center', textWrap: 'balance' }}>
        Payload Nuxt Monorepo Template
      </div>
    </div>

  )
}

export function Icon() {
  return (
    <div>
      T
    </div>
  )
}
