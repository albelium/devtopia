import fastifyApollo from '@as-integrations/fastify'
import compress from '@fastify/compress'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import rateLimit from '@fastify/rate-limit'
import Fastify from 'fastify'

import { createContext } from './graphql/context'
import { createApolloServer } from './graphql/server'
import getEnvVar from './lib/env-var'

const { nodeEnv, port, graphqlPath } = getEnvVar()

const app = Fastify()

const apollo = createApolloServer({ app })

await apollo.start()

await app.register(helmet, {
  contentSecurityPolicy: nodeEnv === 'production',
})
await app.register(cors)
await app.register(rateLimit)
await app.register(compress)
await app.register(fastifyApollo(apollo), {
  path: graphqlPath,
  context: createContext,
})

app.get('/', () => 'This is tomoni-admin backend!')
app.get('/health', () => ({ status: 'ok' }))

try {
  console.log('🏗 Starting server...')
  console.log(`✨ Listening on port ${port}`)
  console.log(`🚀 GraphQL server at http://localhost:${port}${graphqlPath}`)
  await app.listen({ host: '0.0.0.0', port })
} catch (error) {
  app.log.error(error)
  process.exit(1)
}
