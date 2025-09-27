import {
  describe,
  expect,
  expectTypeOf,
  it,
} from 'vitest'

import { toCapatilize } from './toCapitalize.util'

describe('toCapatilize', () => {
  it('should return the string with the first letter capitalized', () => {
    expect(toCapatilize('hello')).toBe('Hello')
    expect(toCapatilize('HELLO')).toBe('Hello')
    expect(toCapatilize('hello world')).toBe('Hello world')
    expect(toCapatilize('HEllO wOrld')).toBe('Hello world')
  })

  it('should give a type error if the input is not a string', () => {
    expectTypeOf(toCapatilize).parameter(0).toMatchTypeOf<string>()
  })
})
