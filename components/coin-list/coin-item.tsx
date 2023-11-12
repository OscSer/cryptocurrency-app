import styles from './coin-item.module.css'
import { formatCurrency } from '@/lib/helper'
import { Coin } from '@/lib/types'
import CoinImage from '../coin-image/coin-image'
import CoinItemSection from './coin-item-section'

interface Props {
  coin: Coin
  onClick: () => void
}

export default function CoinItem({ coin, onClick }: Props) {
  const { name, symbol, price_usd, market_cap_usd, volume24 } = coin

  return (
    <div className={styles.coinItem} onClick={onClick}>
      <CoinItemSection>
        <CoinImage symbol={symbol} />
      </CoinItemSection>

      <CoinItemSection title={name}>{symbol}</CoinItemSection>

      <CoinItemSection title="Price (USD)">
        {formatCurrency(price_usd)}
      </CoinItemSection>

      <CoinItemSection title="Market Cap">
        {formatCurrency(market_cap_usd, true)}
      </CoinItemSection>

      <CoinItemSection title="Volume (24h)">
        {formatCurrency(volume24, true)}
      </CoinItemSection>
    </div>
  )
}
