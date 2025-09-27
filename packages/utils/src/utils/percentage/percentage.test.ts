import type { Percentage } from '@repo/models'
import {
  describe,
  expect,
  expectTypeOf,
  it,
} from 'vitest'

import { PercentageUtil } from './percentage.util'

describe('percentageUtil', () => {
  it('should format a percentage value', () => {
    expect(PercentageUtil.format(10 as Percentage)).toBe('10%')
    expect(PercentageUtil.format(50 as Percentage)).toBe('50%')
    expect(PercentageUtil.format(75 as Percentage)).toBe('75%')
  })

  it('should return the input value if it is already a percentage value', () => {
    expect(PercentageUtil.fromValue(10)).toBe(10)
    expect(PercentageUtil.fromValue(50)).toBe(50)
    expect(PercentageUtil.fromValue(75)).toBe(75)
  })

  it('should give a type error if the input is not a number', () => {
    expectTypeOf(PercentageUtil.fromValue).parameter(0).toMatchTypeOf<number>()
  })
  it('should give a type error if the input is not a percentage value', () => {
    expectTypeOf(PercentageUtil.fromValue).parameter(0).toMatchTypeOf<number>()
  })
})
