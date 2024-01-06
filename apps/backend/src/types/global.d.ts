/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'testing' | 'production'
    readonly PORT: number
    readonly GRAPHQL_PATH: string
  }
}
