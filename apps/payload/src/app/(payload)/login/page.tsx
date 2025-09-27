import LoginButton from '@payload/components/auth/LoginButton'
import { BigLogo } from '@payload/components/logo/Logo'



export default async function Login() {

  return (
    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '2rem', height: '100vh', justifyContent: 'center' }}>
      <div>
        <BigLogo />
      </div>

      <div style={{ maxWidth: '12rem', width: '100%' }}>
        <LoginButton />
      </div>

    </div>
  )
}
