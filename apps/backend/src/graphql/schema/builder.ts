import SchemaBuilder from '@pothos/core'
import ScopeAuthPlugin from '@pothos/plugin-scope-auth'
import SimpleObjectsPlugin from '@pothos/plugin-simple-objects'

import type { ScalarTypes } from './scalar.js'
import type { Context } from '../context.js'

export const builder = new SchemaBuilder<{
  Scalars: ScalarTypes
  Context: Context
  AuthScopes: {
    loggedIn: boolean
  }
}>({
  plugins: [ScopeAuthPlugin, SimpleObjectsPlugin],
  authScopes: async (context) => ({
    loggedIn: Boolean(context.uid),
  }),
  scopeAuthOptions: {
    // Recommended when using subscriptions
    // when this is not set, auth checks are run when event is resolved rather than when the subscription is created
    authorizeOnSubscribe: false,
    unauthorizedError: (_parent, _context, _info, _result) => new Error(`Not authorized`),
  },
})

builder.queryType()
// builder.mutationType()
