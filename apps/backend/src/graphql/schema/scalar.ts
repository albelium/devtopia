import {
  EmailAddressResolver,
  GraphQLDate,
  GraphQLDateTime,
  GraphQLTime,
  JWTResolver,
  URLResolver,
  UUIDResolver,
} from 'graphql-scalars'

import { builder } from './builder.js'

builder.addScalarType('UUID', UUIDResolver)
builder.addScalarType('Date', GraphQLDate)
builder.addScalarType('DateTime', GraphQLDateTime)
builder.addScalarType('Time', GraphQLTime)
builder.addScalarType('EmailAddress', EmailAddressResolver)
builder.addScalarType('URL', URLResolver)
builder.addScalarType('JWT', JWTResolver)

export type ScalarTypes = {
  UUID: {
    Input: string
    Output: string
  }
  Date: {
    Input: Date
    Output: Date
  }
  DateTime: {
    Input: Date
    Output: Date
  }
  Time: {
    Input: Date
    Output: Date
  }
  EmailAddress: {
    Input: string
    Output: string
  }
  URL: {
    Input: string
    Output: string
  }
  JWT: {
    Input: string
    Output: string
  }
}
