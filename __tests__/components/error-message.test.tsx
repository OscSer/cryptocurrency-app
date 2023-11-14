import ErrorMessage from '@/components/error-message/error-message'
import { render, screen } from '@testing-library/react'

describe('ErrorMessage', () => {
  it('should render the message', () => {
    // act
    render(<ErrorMessage />)

    // assert
    expect(screen.getByText('Oops something went wrong!')).toBeInTheDocument()
  })
})
