export function formatCurrency(value: number, currency: string = 'USD') {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  })
  return isNaN(value) ? formatter.format(0) : formatter.format(value)
}
