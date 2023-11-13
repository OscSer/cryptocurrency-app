import styles from './coin-detail.module.css'
import { Paper } from '@mui/material'
import CoinImage from '../coin-image/coin-image'
import { Coin } from '@/lib/types'
import { formatCurrency } from '@/lib/helper'
import CoinDetailItem from './coin-detail-item'

interface Props {
  coin: Coin
}

export default function CoinDetail({ coin }: Props) {
  const {
    name,
    nameid,
    symbol,
    price_usd,
    volume24,
    rank,
    market_cap_usd,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d,
  } = coin

  return (
    <Paper className={styles.coinDetail} variant="outlined">
      <div className={styles.coinDetail__coin}>
        <CoinImage width={80} height={80} nameid={nameid} />
        <div>{`${name} (${symbol})`}</div>
        <div>{formatCurrency(price_usd)}</div>
      </div>

      <div className={styles.coinDetail__items}>
        <CoinDetailItem title="Rank" value={rank} type="rank" />

        <CoinDetailItem
          title="Market Cap"
          value={market_cap_usd}
          type="price"
        />

        <CoinDetailItem title="Volume (24h)" value={volume24} type="price" />

        <CoinDetailItem
          title="Change (1h)"
          value={percent_change_1h}
          type="percent"
        />

        <CoinDetailItem
          title="Change (24h)"
          value={percent_change_24h}
          type="percent"
        />

        <CoinDetailItem
          title="Change (7d)"
          value={percent_change_7d}
          type="percent"
        />
      </div>
    </Paper>
  )
}
