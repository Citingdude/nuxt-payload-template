import { BigLogo } from '@payload/components/logo/Logo'
import { getEnv } from '@payload/env'

function getHomeUrl(): string {
  const env = getEnv()

  return env.CMS_BASE_URL
}

export function NotFoundPage() {
  const url = getHomeUrl()

  return (

    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '2rem', height: '100vh', justifyContent: 'center' }}>
      <div style={{ width: '12rem' }}>
        <BigLogo />
      </div>
      <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>

        <p>Sorry, we can't find the page you are looking for.</p>

        <div style={{ maxWidth: '12rem', width: '100%' }}>
          <a

            className={`
              btn btn--style-primary btn--icon-style-without-border
              btn--size-medium
            `}
            style={{
              display: 'block',
              textAlign: 'center',
              width: '100%',
            }}
            href={url}
          >
            Home
          </a>
        </div>
      </div>

    </div>
  )
}
