import { ApolloServer } from '@apollo/server'
import { fastifyApolloDrainPlugin } from '@as-integrations/fastify'

import { schema } from './schema'

import type { Context } from './context.js'
import type { FastifyInstance } from 'fastify'

export const createApolloServer = ({ app }: { app: FastifyInstance }) => {
  return new ApolloServer<Context>({
    schema,
    plugins: [fastifyApolloDrainPlugin(app)],
  })
}
