import { builder } from './builder'

/**
 * Scalar
 */
import './scalar'

/**
 * Query
 */
import './query/user'

/**
 * Mutation
 */

export const schema = builder.toSchema()
