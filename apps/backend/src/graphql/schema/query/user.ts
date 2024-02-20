import { builder } from '../builder.js'
import { User } from '../object/user.js'

builder.queryField('user', (t) =>
  t.field({
    type: User,
    nullable: true,
    args: {
      id: t.arg.id({ required: true }),
    },
    authScopes: {
      loggedIn: true,
    },
    resolve: () => null,
  })
)
