function formatDateTime(date: Date): string {
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
}

export const DateUtil = {
  formatDateTime,
}
