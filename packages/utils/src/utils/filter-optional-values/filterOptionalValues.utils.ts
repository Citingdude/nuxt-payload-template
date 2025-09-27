export function filterOptionalValues<T extends Record<string, unknown>>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([
      _key,
      value,
    ]) => value !== undefined),
  ) as T
}
