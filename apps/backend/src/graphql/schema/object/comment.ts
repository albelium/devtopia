import { Posts, Users } from '../../dummy-data.js'
import { builder } from '../builder.js'

import { Post } from './post.js'
import { User } from './user.js'

import type { IComment } from '../../dummy-data.js'

export const Comment = builder.objectRef<IComment>('Comment')

Comment.implement({
  fields: (t) => ({
    id: t.exposeID('id'),
    comment: t.exposeString('comment'),
    author: t.field({
      type: User,
      nullable: true,
      resolve: (comment) => Users.get(comment.id),
    }),
    post: t.field({
      type: Post,
      resolve: (comment) => Posts.get(comment.id)!,
    }),
  }),
})
