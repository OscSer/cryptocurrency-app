export function formatCurrency(
  value: number,
  compact: boolean = false,
  currency: string = 'USD'
) {
  let options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency,
  }

  if (compact) {
    options = {
      ...options,
      notation: 'compact',
      compactDisplay: 'short',
      maximumFractionDigits: 1,
    }
  }

  const formatter = new Intl.NumberFormat('en-US', options)
  return isNaN(value) ? formatter.format(0) : formatter.format(value)
}
