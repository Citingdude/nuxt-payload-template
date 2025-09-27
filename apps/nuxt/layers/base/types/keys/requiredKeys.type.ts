export type RequiredKeys<TEnum extends string, TValue> = {
  [K in TEnum]: TValue
}
