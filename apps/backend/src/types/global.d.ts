/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'staging' | 'production'
    readonly PORT: number
    readonly GRAPHQL_PATH: string
    readonly DATABASE_URL: string

    // Auth0
    readonly AUTH0_DOMAIN: string
    readonly AUTH0_CLIENT_ID: string
    readonly AUTH0_CLIENT_SECRET: string
    readonly AUTH0_JWKS_URL: string
    readonly AUTH0_AUDIENCE: string
    readonly AUTH0_ISSUER: string
  }
}
