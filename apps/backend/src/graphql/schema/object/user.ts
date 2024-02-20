import { builder } from '../builder.js'

interface IUser {
  id: string
  firstName: string
  lastName: string
}

export const Users = new Map<string, IUser>()

export const User = builder.objectRef<IUser>('User')

User.implement({
  fields: (t) => ({
    id: t.exposeID('id', { description: 'ユーザーID' }),
    firstName: t.exposeString('firstName', { description: '名前' }),
    lastName: t.exposeString('lastName', { description: '名字' }),
    fullName: t.string({
      resolve: (user) => `${user.firstName} ${user.lastName}`,
    }),
  }),
})
