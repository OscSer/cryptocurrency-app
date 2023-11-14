import SearchBar from '@/components/search-bar/search-bar'
import { useCoinsQuery } from '@/lib/redux/features/coinSlice'
import { CoinsData } from '@/lib/types'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

jest.mock('../lib/redux/features/coinSlice', () => {
  return {
    useCoinsQuery: jest.fn(),
  }
})

describe('Loading', () => {
  const coinsData: CoinsData = { coins: [], pageCount: 5 }

  beforeAll(() => {
    for (let i = 0; i < 20; i++) {
      coinsData.coins.push({
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

  it('should render the search bar', () => {
    // arrange
    ;(useCoinsQuery as jest.Mock).mockReturnValue({ data: coinsData })

    // act
    render(<SearchBar onSearch={() => ''} />)

    // assert
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('should filter coins', async () => {
    // arrange
    ;(useCoinsQuery as jest.Mock).mockReturnValue({ data: coinsData })
    const onSearch = jest.fn()

    // act
    render(<SearchBar onSearch={onSearch} />)
    await userEvent.type(screen.getByTestId('search-bar'), 'symbol-1')

    // assert
    setTimeout(() => {
      expect(onSearch).toHaveBeenCalledTimes(1)
    }, 1000)
  })
})
