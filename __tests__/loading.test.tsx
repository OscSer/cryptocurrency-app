import Loading from '@/components/loading/loading'
import { render, screen } from '@testing-library/react'

describe('Loading', () => {
  it('should render loading component', () => {
    // act
    render(<Loading />)

    // assert
    expect(screen.getByTestId('loading')).toBeInTheDocument()
  })
})
