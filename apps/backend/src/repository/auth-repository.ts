import { ok, ResultAsync } from 'neverthrow'

export namespace AuthRepository {
  /**
   * 認証アカウントを作成する
   */
  export const createAccount = ({
    email,
    password,
  }: {
    email: string
    password: string
  }): ResultAsync<string, Error> => {
    return ResultAsync.fromPromise(
      Promise.resolve(''),
      (error) => new Error('アカウント作成に失敗しました')
    )
  }

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
  }): ResultAsync<string, Error> => {
    return ResultAsync.fromPromise(
      Promise.resolve(''),
      (error) => new Error('アカウント更新に失敗しました')
    )
  }

  /**
   * トークンを検証する
   */
  export const verifyIdToken = (token: string): ResultAsync<string, Error> => {
    return ResultAsync.fromPromise(
      Promise.resolve(''),
      (error) => new Error('トークンが無効です')
    ).andThen((decodedToken) => ok(decodedToken))
  }
}
