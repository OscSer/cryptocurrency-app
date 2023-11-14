import { act, render, screen } from '@testing-library/react'
import { Coin } from '@/lib/types'
import userEvent from '@testing-library/user-event'
import CoinList from '@/components/coin-list/coin-list'
import { ROUTES } from '@/lib/constants'
import { useRouter } from 'next/navigation'

describe('CoinItem', () => {
  const coins: Coin[] = []

  beforeAll(() => {
    for (let i = 0; i < 20; i++) {
      coins.push({
        id: i,
        symbol: `symbol-${i}`,
        name: `name-${i}`,
        nameid: `nameid-${i}`,
        rank: i,
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
      })
    }
  })

  it('should render the coin list', () => {
    // act
    render(<CoinList coins={coins} />)

    // assert
    const items = screen.getAllByText(new RegExp('symbol-', 'i'))
    expect(items).toHaveLength(coins.length)
  })

  it('should render "no results" message', () => {
    // act
    render(<CoinList coins={[]} />)

    // assert
    expect(screen.getByText('No results...')).toBeInTheDocument()
  })
})
