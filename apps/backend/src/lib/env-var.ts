import { assertIsNonNullable } from '../utils/type-check'

interface EnvVar {
  readonly nodeEnv: 'development' | 'staging' | 'production'
  readonly port: number
  readonly graphqlPath: string

  readonly auth0Domain: string
  readonly auth0ClientId: string
  readonly auth0ClientSecret: string
  readonly auth0JwksUrl: string
  readonly auth0Audience: string
  readonly auth0Issuer: string
}

export default function getEnvVar(): EnvVar {
  assertIsNonNullable(process.env.NODE_ENV)
  assertIsNonNullable(process.env.PORT)
  assertIsNonNullable(process.env.GRAPHQL_PATH)

  assertIsNonNullable(process.env.AUTH0_DOMAIN)
  assertIsNonNullable(process.env.AUTH0_CLIENT_ID)
  assertIsNonNullable(process.env.AUTH0_CLIENT_SECRET)
  assertIsNonNullable(process.env.AUTH0_JWKS_URL)
  assertIsNonNullable(process.env.AUTH0_AUDIENCE)
  assertIsNonNullable(process.env.AUTH0_ISSUER)

  return {
    nodeEnv: process.env.NODE_ENV,
    port: Number(process.env.PORT),
    graphqlPath: process.env.GRAPHQL_PATH,

    auth0Domain: process.env.AUTH0_DOMAIN,
    auth0ClientId: process.env.AUTH0_CLIENT_ID,
    auth0ClientSecret: process.env.AUTH0_CLIENT_SECRET,
    auth0JwksUrl: process.env.AUTH0_JWKS_URL,
    auth0Audience: process.env.AUTH0_AUDIENCE,
    auth0Issuer: process.env.AUTH0_ISSUER,
  }
}
