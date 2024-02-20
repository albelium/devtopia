import { assertIsNonNullable } from './type-check'

describe('type-check', () => {
  test('与えられた値がnullの場合、エラーを投げるか', () => {
    expect(() => {
      // eslint-disable-next-line unicorn/no-null
      assertIsNonNullable(null)
    }).toThrow()
  })

  test('与えられた値がundefinedの場合、エラーを投げるか', () => {
    expect(() => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      assertIsNonNullable(undefined)
    }).toThrow()
  })

  test('与えられた値がnullでもundefinedでもない場合、何もしないか', () => {
    expect(() => {
      assertIsNonNullable(1)
    }).not.toThrow()
  })
})
