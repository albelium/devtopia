import { Comments, Users } from '../../dummy-data.js'
import { builder } from '../builder.js'

import { Comment } from './comment.js'
import { User } from './user.js'

import type { IPost } from '../../dummy-data.js'

export const Post = builder.objectRef<IPost>('Post')

Post.implement({
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    content: t.exposeString('content'),
    author: t.field({
      type: User,
      nullable: true,
      resolve: (post) => Users.get(post.id),
    }),
    comments: t.field({
      type: [Comment],
      resolve: (post) => [...Comments.values()].filter((comment) => comment.postId === post.id),
    }),
  }),
})
