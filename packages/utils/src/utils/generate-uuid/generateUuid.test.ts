import {
  describe,
  expect,
  it,
} from 'vitest'

import { generateUuid } from './generateUuid.util'

describe('generateUuid', () => {
  it('should return a string in the correct format', () => {
    expect(generateUuid()).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
  })
})
