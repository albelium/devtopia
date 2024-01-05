import { Posts } from '../../dummy-data.js'
import { builder } from '../builder.js'
import { Post } from '../object/post.js'

builder.queryFields((t) => ({
  post: t.field({
    type: Post,
    nullable: true,
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: (root, arguments_) => Posts.get(String(arguments_.id)),
  }),
  posts: t.field({
    type: [Post],
    nullable: true,
    args: {
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (root, arguments_) => {
      const DEFAULT_PAGE_SIZE = 10
      return [...Posts.values()].slice(arguments_.skip ?? 0, arguments_.take ?? DEFAULT_PAGE_SIZE)
    },
  }),
}))
