import type { Currency } from './currency.model'
import { currencySchema } from './currency.model'

export class CurrencyTransformer {
  static toCurrency(number: number): Currency {
    return currencySchema.parse(number)
  }
}
