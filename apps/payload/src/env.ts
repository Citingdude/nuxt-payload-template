/* eslint-disable node/prefer-global/process */

export function getEnv() {
  return {
    AUTH_BASE_URL: process.env.NEXT_PUBLIC_AUTH_BASE_URL as string,
    AUTH_CLIENT_ID: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID as string,
    AUTH_ISSUER: process.env.NEXT_PUBLIC_AUTH_ISSUER as string,
    AUTH_JWKS_ENDPOINT: process.env.NEXT_PUBLIC_AUTH_JWKS_ENDPOINT as string,
    AUTH_ORGANIZATION_ID: process.env.NEXT_PUBLIC_AUTH_ORGANIZATION_ID as string,
    AUTH_PROJECT_ID: process.env.ANEXT_PUBLIC_UTH_PROJECT_ID as string,
    CMS_BASE_URL: process.env.NEXT_PUBLIC_CMS_BASE_URL as string,
    ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT as string,
    S3_ACCESS_KEY_ID: process.env.S3_ACCESS_KEY_ID as string,
    S3_BUCKET: process.env.S3_BUCKET as string,
    S3_ENDPOINT: process.env.S3_ENDPOINT as string,
    S3_REGION: process.env.S3_REGION as string,
    S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY as string,
    SITE_BASE_URL: process.env.NEXT_PUBLIC_SITE_BASE_URL as string,
  } as const
}
