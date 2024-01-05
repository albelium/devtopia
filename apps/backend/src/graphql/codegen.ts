import { printSchema } from 'graphql'

import { schema } from './schema'

import type { CodegenConfig } from '@graphql-codegen/cli'

// DOC: https://the-guild.dev/graphql/codegen/docs/config-reference/codegen-config

const config: CodegenConfig = {
  schema: printSchema(schema),
  generates: {
    '../../graphql/generated/schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
}

export default config
