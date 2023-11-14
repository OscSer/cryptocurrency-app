import { formatCurrency } from '@/lib/helper'

describe('helper', () => {
  it('should return zero for NaN', () => {
    // act
    const result = formatCurrency(NaN)

    // assert
    expect(result).toBe('$0.00')
  })

  it('should format in dollar by default', () => {
    // act
    const result = formatCurrency(123.45)

    // assert
    expect(result).toBe('$123.45')
  })

  it('should format with custom currency', () => {
    // act
    const result = formatCurrency(123.45, false, 'EUR')

    // assert
    expect(result).toBe('€123.45')
  })

  it('should format in compact version', () => {
    // act
    const result1 = formatCurrency(12700, true)
    const result2 = formatCurrency(127000, true)
    const result3 = formatCurrency(1270000, true)
    const result4 = formatCurrency(12700000, true)
    const result5 = formatCurrency(127000000, true)
    const result6 = formatCurrency(1270000000, true)

    // assert
    expect(result1).toBe('$12.7K')
    expect(result2).toBe('$127.0K')
    expect(result3).toBe('$1.3M')
    expect(result4).toBe('$12.7M')
    expect(result5).toBe('$127.0M')
    expect(result6).toBe('$1.3B')
  })
})
