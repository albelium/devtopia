import { builder } from './builder.js'

/**
 * Scalar
 */
import './scalar.js'

/**
 * Query
 */
import './query/post.js'
import './query/user.js'

/**
 * Mutation
 */

export const schema = builder.toSchema()
