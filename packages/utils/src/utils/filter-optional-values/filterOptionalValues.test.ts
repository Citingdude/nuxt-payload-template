import {
  describe,
  expect,
  it,
} from 'vitest'

import { filterOptionalValues } from './filterOptionalValues.utils'

const EXAMPLE_VALUES = {
  a: 1,
  b: undefined,
  c: 3,
  d: undefined,
  e: undefined,
  f: 6,
}

describe('filterOptionalValues', () => {
  it('should remove all optional values from an object', () => {
    expect(filterOptionalValues(EXAMPLE_VALUES)).toEqual({
      a: 1,
      c: 3,
      f: 6,
    })
  })
})
