import { Stack } from '@mui/material'
import CoinItem from './coin-item'
import { Coin } from '@/lib/types'

interface Props {
  coins: Coin[]
}

export default function CoinList({ coins = [] }: Props) {
  return (
    <Stack spacing={1.5}>
      {coins.map((coin) => (
        <CoinItem key={coin.id} coin={coin} />
      ))}
    </Stack>
  )
}
