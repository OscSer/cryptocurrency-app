import styles from './coin-detail-item.module.css'
import { formatCurrency } from '@/lib/helper'
import { IconHash, IconPercentage } from '@tabler/icons-react'

interface Props {
  title: string
  value: number
  type: 'rank' | 'price' | 'percent'
}

export default function CoinDetailItem({ title, value, type }: Props) {
  const getValue = () => {
    if (type === 'rank')
      return (
        <div className={styles.coinDetailItem__value}>
          <IconHash size={20} />
          {value}
        </div>
      )

    if (type === 'percent') {
      const className =
        value >= 0
          ? styles['coinDetailItem__value--positive']
          : styles['coinDetailItem__value--negative']

      return (
        <div className={`${styles.coinDetailItem__value} ${className}`}>
          {value}
          <IconPercentage size={20} />
        </div>
      )
    }

    if (type === 'price')
      return (
        <div className={styles.coinDetailItem__value}>
          {formatCurrency(value, true)}
        </div>
      )
  }

  return (
    <div className={styles.coinDetailItem} data-testid="detail-item">
      <div className={styles.coinDetailItem__title}>{title}</div>
      {getValue()}
    </div>
  )
}
