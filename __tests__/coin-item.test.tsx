import { render, screen } from '@testing-library/react'
import { Coin } from '@/lib/types'
import { formatCurrency } from '@/lib/helper'
import CoinItem from '@/components/coin-list/coin-item'
import userEvent from '@testing-library/user-event'

describe('CoinItem', () => {
  const coin: Coin = {
    id: 1,
    symbol: 'symbol',
    name: 'name',
    nameid: 'nameid',
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

  it('should render the coin item', () => {
    // act
    render(<CoinItem coin={coin} onClick={() => ''} />)

    // assert
    expect(screen.getByText(new RegExp(coin.name, 'i'))).toBeInTheDocument()
    expect(screen.getByText(formatCurrency(coin.price_usd))).toBeInTheDocument()
  })

  it('should render the sections', () => {
    // act
    render(<CoinItem coin={coin} onClick={() => ''} />)

    // assert
    expect(screen.getAllByTestId('coin-item-section')).toHaveLength(5)
  })

  it('should work the callback', async () => {
    // arrange
    const onClick = jest.fn()

    // act
    render(<CoinItem coin={coin} onClick={onClick} />)
    await userEvent.click(screen.getByText(new RegExp(coin.name, 'i')))

    // assert
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
