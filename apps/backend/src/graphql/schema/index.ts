import { builder } from './builder.js'

/**
 * Scalar
 */
import './scalar.js'

/**
 * Query
 */
import './query/user.js'

/**
 * Mutation
 */

export const schema = builder.toSchema()
