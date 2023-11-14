import { render, screen } from '@testing-library/react'
import CoinDetail from '@/components/coin-detail/coin-detail'
import { Coin } from '@/lib/types'
import { formatCurrency } from '@/lib/helper'

describe('CoinDetail', () => {
  const coin: Coin = {
    id: 1,
    symbol: 'test',
    name: 'test',
    nameid: 'test',
    rank: 1,
    price_usd: 1000,
    percent_change_24h: 2,
    percent_change_1h: -5,
    percent_change_7d: 7,
    price_btc: 0.0001,
    market_cap_usd: 100000,
    volume24a: 90000,
    volume24: 80000,
    csupply: 70000,
    tsupply: 50000,
    msupply: 40000,
  }

  it('should render the coin section', () => {
    // act
    render(<CoinDetail coin={coin} />)

    // assert
    expect(screen.getByText(new RegExp(coin.name, 'i'))).toBeInTheDocument()
    expect(screen.getByText(formatCurrency(coin.price_usd))).toBeInTheDocument()
    expect(screen.getByAltText(coin.nameid)).toBeInTheDocument()
  })

  it('should render the items', () => {
    // act
    render(<CoinDetail coin={coin} />)

    // assert
    const items = screen.getAllByTestId('detail-item')
    expect(items).toHaveLength(6)
  })
})
