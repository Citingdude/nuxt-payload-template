export function getEnv() {
  const config = useRuntimeConfig()

  return {
    AUTH_BASE_URL: config.public.authBaseUrl,
    AUTH_CLIENT_ID: config.public.authClientId,
    AUTH_ISSUER: config.public.authIssuer,
    AUTH_JWKS_ENDPOINT: config.public.authJwksEndpoint,
    AUTH_ORGANIZATION_ID: config.public.authOrganizationId,
    AUTH_PROJECT_ID: config.public.authProjectId,
    CMS_BASE_URL: config.public.cmsBaseUrl,
    ENVIRONMENT: config.public.environment,
    SITE_BASE_URL: config.public.siteBaseUrl,
  } as const
}
