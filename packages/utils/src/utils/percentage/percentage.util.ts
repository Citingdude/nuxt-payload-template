import type { Percentage } from '@repo/models'

export class PercentageUtil {
  static format(value: Percentage): string {
    return `${value}%`
  }

  static fromValue(value: number): Percentage {
    return value as Percentage
  }
}
