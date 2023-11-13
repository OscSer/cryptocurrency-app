import { RESULTS_LIMIT } from './constants'
import { Coin } from './types'

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

export function filterCoinsByQuery(
  coins: Coin[] | undefined,
  query: string,
  limit: number = RESULTS_LIMIT
) {
  if (!coins) return

  const regex = new RegExp(query, 'i')
  return coins
    .filter((coin) => regex.test(coin.name) || regex.test(coin.symbol))
    .slice(0, limit)
}
