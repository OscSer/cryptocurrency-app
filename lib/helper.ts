export function formatCurrency(value: number, currency: string = 'USD') {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  })

  return USDollar.format(value)
}
