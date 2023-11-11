import styles from './coin-item.module.css'
import { formatCurrency } from '@/lib/helper'
import { Coin } from '@/lib/types'

interface Props {
  coin: Coin
  onClick: () => void
}

export default function CoinItem({ coin, onClick }: Props) {
  const { name, symbol, price_usd, market_cap_usd, volume24 } = coin

  return (
    <div className={styles.coinItem} onClick={onClick}>
      <div className={styles.coinItem__section}>
        <div className={styles.coinItem__section__title}>{name}</div>
        <div className={styles.coinItem__section__desc}>{symbol}</div>
      </div>

      <div className={styles.coinItem__section}>
        <div className={styles.coinItem__section__title}>Price (USD)</div>
        <div className={styles.coinItem__section__desc}>
          {formatCurrency(price_usd)}
        </div>
      </div>

      <div className={styles.coinItem__section}>
        <div className={styles.coinItem__section__title}>Volume (24h)</div>
        <div className={styles.coinItem__section__desc}>
          {formatCurrency(volume24)}
        </div>
      </div>

      <div className={styles.coinItem__section}>
        <div className={styles.coinItem__section__title}>Market Cap</div>
        <div className={styles.coinItem__section__desc}>
          {formatCurrency(market_cap_usd)}
        </div>
      </div>
    </div>
  )
}
