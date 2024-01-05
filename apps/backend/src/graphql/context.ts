import { AuthRepository } from '../repository'

import type { ApolloFastifyContextFunction } from '@as-integrations/fastify'

export interface Context {
  uid: string | undefined
}

export const createContext: ApolloFastifyContextFunction<Context> = async (request) => {
  const authorization = request.headers.authorization
  const token = authorization?.replace('Bearer ', '') ?? ''

  const result = await AuthRepository.verifyIdToken(token)

  const uid = result.isOk() ? result.value : undefined

  return {
    uid,
  }
}
