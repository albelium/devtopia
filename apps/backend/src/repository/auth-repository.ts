import jwt from 'jsonwebtoken'
import jwksClient from 'jwks-rsa'
import { errAsync, ok, ResultAsync } from 'neverthrow'

import getEnvVar from '../lib/env-var'

import type { JwtPayload } from 'jsonwebtoken'

interface UpdateAccountResult {
  uid: string
  email: string
}

export namespace AuthRepository {
  /**
   * 認証アカウントを更新する
   */
  export const updateAccount = ({
    uid,
    email,
    password,
  }: {
    uid: string
    email: string
    password: string
  }): ResultAsync<UpdateAccountResult, Error> => {
    // TODO: 更新ジック実装
    return ResultAsync.fromPromise(
      Promise.resolve({
        uid,
        email,
        password,
      }),
      (error) => new Error('アカウント更新に失敗しました', { cause: error })
    ).andThen((userRecord) =>
      ok({
        uid: userRecord.uid,
        email: userRecord.email!,
      })
    )
  }

  /**
   * JWT署名用の公開鍵を取得する
   */
  const _getPublicKey = (accessToken: string): ResultAsync<string, Error> => {
    const { auth0JwksUrl } = getEnvVar()

    // JWTをデコードして、公開鍵用のkidを取得
    const decoded = jwt.decode(accessToken, { complete: true })

    if (decoded === null) {
      return errAsync(new Error('JWTのデコードに失敗しました'))
    }

    // JWT署名用の公開鍵の取得
    const client = jwksClient({ jwksUri: auth0JwksUrl })

    return ResultAsync.fromPromise(
      client.getSigningKey(decoded.header.kid),
      () => new Error('サインインキーの取得に失敗しました')
    ).andThen((key) => ok(key.getPublicKey()))
  }

  /**
   * アクセストークンを検証する
   */
  export const verifyToken = (accessToken: string): ResultAsync<JwtPayload, Error> => {
    return _getPublicKey(accessToken).andThen((publicKey) => {
      const { auth0Audience, auth0Issuer } = getEnvVar()

      try {
        // 署名（取得した公開鍵で署名の確認）、検証（audienceとissuerを検証）
        const jwtPayload = jwt.verify(accessToken, publicKey, {
          audience: auth0Audience,
          issuer: auth0Issuer,
        }) as JwtPayload

        return ok(jwtPayload)
      } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
          return errAsync(new Error('不正なトークンです'))
        }

        if (error instanceof jwt.TokenExpiredError) {
          return errAsync(new Error('トークンの有効期限が切れています'))
        }

        return errAsync(error as Error)
      }
    })
  }
}
