'use client'
import { logout } from '@payload/auth/logout'
import { redirect } from 'next/navigation'

export default async function Login() {
  logout()
  redirect('/login')

  return (
    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '2rem', height: '100vh', justifyContent: 'center' }}>

    </div>
  )
}
