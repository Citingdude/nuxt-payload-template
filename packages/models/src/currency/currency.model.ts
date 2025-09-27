import { z } from 'zod'

export const currencySchema = z.number().brand('Currency')

export type Currency = z.infer<typeof currencySchema>

export function toCurrency(number: number): Currency {
  return currencySchema.parse(number)
}
