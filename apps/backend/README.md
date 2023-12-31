# backend

## Getting Started

開発サーバーを起動するには以下のコマンドを実行します。

```bash
$ pnpm dev
```

## Apollo Graphql Explorer

Apollo Graphql Explorer は、サーバーを起動したあとに以下の URL にアクセスすることで利用できます。

```bash
http://localhost:60000/graphql
http://0.0.0.0:60000/graphql
```

## Generate schema.graphql file

`graphql/generated/schema.graphql` を更新するには、以下のコマンドを実行します。

```bash
$ pnpm generate
```

## Prisma

`prisma/schema.prisma` で DB を更新するには以下のコマンドを実行します。

```bash
$ pnpm prisma:push
```

Prisma Studio は、以下のコマンドを実行することで利用できます。

```bash
$ pnpm prisma:studio
```
