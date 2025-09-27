import {
  describe,
  expect,
  expectTypeOf,
  it,
} from 'vitest'

import { convertLocale } from './convertLocale.util'

describe('convertLocale', () => {
  it('should return the input string if it is already in the correct format', () => {
    expect(convertLocale('en-US')).toBe('en-US')
    expect(convertLocale('nl-BE')).toBe('nl-BE')
    expect(convertLocale('fr-FR')).toBe('fr-FR')
  })

  it('should return the input string with the correct format if it is not in the correct format', () => {
    expect(convertLocale('en')).toBe('en-US')
    expect(convertLocale('nl')).toBe('nl-BE')
    expect(convertLocale('fr')).toBe('fr-FR')
  })

  it('should give a type error if the input is not a string', () => {
    expectTypeOf(convertLocale).parameter(0).toMatchTypeOf<string>()
  })
})
