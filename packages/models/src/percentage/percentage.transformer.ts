import type { Percentage } from './percentage.model'
import { percentageSchema } from './percentage.model'

export class PercentageTransformer {
  static toPercentage(number: number): Percentage {
    return percentageSchema.parse(number)
  }
}
