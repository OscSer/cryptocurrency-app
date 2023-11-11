import { formatCurrency } from '@/lib/helper'
import styles from './coin-item.module.css'
import { Coin } from '@/lib/types'
import { Paper } from '@mui/material'

interface Props {
  coin: Coin
}

export default function CoinItem({ coin }: Props) {
  const { name, symbol, price_usd, market_cap_usd, volume24 } = coin

  return (
    <Paper className={styles.coinItem} variant="outlined">
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
    </Paper>
  )
}
