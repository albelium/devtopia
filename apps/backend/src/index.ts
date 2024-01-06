import fastifyApollo from '@as-integrations/fastify'
import compress from '@fastify/compress'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import rateLimit from '@fastify/rate-limit'
import Fastify from 'fastify'

import { createContext } from './graphql/context.js'
import { createApolloServer } from './graphql/server.js'

const graphqlPath = process.env.GRAPHQL_PATH

const app = Fastify()

const apollo = createApolloServer({ app })

await apollo.start()

await app.register(helmet, {
  contentSecurityPolicy: process.env.NODE_ENV === 'production',
})
await app.register(cors)
await app.register(rateLimit)
await app.register(compress)
await app.register(fastifyApollo(apollo), {
  path: graphqlPath,
  context: createContext,
})

app.get('/', () => 'This is tomoni-admin backend!')

try {
  const port = process.env.PORT
  console.log('🏗 Starting server...')
  console.log(`✨ Listening on port ${port}`)
  console.log(`🚀 GraphQL server at http://localhost:${port}${graphqlPath}`)
  await app.listen({ host: '0.0.0.0', port })
} catch (error) {
  app.log.error(error)
  process.exit(1)
}
