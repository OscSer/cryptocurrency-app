import { render, screen } from '@testing-library/react'
import CoinImage from '@/components/coin-image/coin-image'

describe('CoinImage', () => {
  it('should render the coin image', () => {
    // arrange
    const nameid = 'bitcoin'

    // act
    render(<CoinImage nameid={nameid} />)

    // assert
    expect(screen.getByAltText(nameid)).toBeInTheDocument()
    expect(screen.queryByTestId('image-fallback')).not.toBeInTheDocument()
  })

  it('should render the coin image with custom size', () => {
    // arrange
    const nameid = 'bitcoin'

    // act
    render(<CoinImage nameid={nameid} width={100} height={100} />)

    // assert
    expect(screen.getByAltText(nameid)).toBeInTheDocument()
    expect(screen.queryByTestId('image-fallback')).not.toBeInTheDocument()
  })
})
