import { render, screen } from '@testing-library/react'
import CoinDetailItem from '@/components/coin-detail/coin-detail-item'

describe('CoinDetailItem', () => {
  it('should render the rank item', () => {
    // arrange
    const title = 'Rank'

    // act
    render(<CoinDetailItem title={title} value={3} type="rank" />)

    // assert
    expect(screen.getByText(title)).toBeInTheDocument()
  })

  it('should render the price item', () => {
    // arrange
    const title = 'Price'

    // act
    render(<CoinDetailItem title={title} value={1000} type="price" />)

    // assert
    expect(screen.getByText(title)).toBeInTheDocument()
  })

  it('should render the percent item', () => {
    // arrange
    const title = 'Percent'

    // act
    render(<CoinDetailItem title={title} value={3} type="percent" />)

    // assert
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
