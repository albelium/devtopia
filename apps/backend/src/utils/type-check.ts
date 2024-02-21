/**
 * 与えられた値が NULL または未定義でないことを保証する
 * @param value - 保証する値
 */
export function assertIsNonNullable<T>(value: T): asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error('Expected value to be defined, but received ' + value)
  }
}
