import { render, screen } from '@testing-library/react'
import CoinItemSection from '@/components/coin-list/coin-item-section'

describe('CoinItemSection', () => {
  it('should render the children', () => {
    // arrange
    const children = 'children'

    // act
    render(<CoinItemSection>{children}</CoinItemSection>)

    // assert
    expect(screen.getByText(children)).toBeInTheDocument()
  })

  it('should render the title', () => {
    // arrange
    const title = 'title'
    const children = 'children'

    // act
    render(<CoinItemSection title={title}>{children}</CoinItemSection>)

    // assert
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})
