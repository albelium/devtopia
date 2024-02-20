import { AuthRepository } from '../repository'

import type { ApolloFastifyContextFunction } from '@as-integrations/fastify'

export interface Context {
  uid: string | undefined
}

export const createContext: ApolloFastifyContextFunction<Context> = async (request) => {
  const authorization = request.headers.authorization
  const accessToken = authorization?.replace('Bearer ', '') ?? ''

  const tokenResult = await AuthRepository.verifyToken(accessToken)

  const subject = tokenResult.isOk() ? tokenResult.value.sub : undefined

  return {
    uid: subject,
  }
}
