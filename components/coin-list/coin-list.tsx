import { Stack } from '@mui/material'
import CoinItem from './coin-item'
import { Coin } from '@/lib/types'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/lib/constants'

interface Props {
  coins: Coin[]
}

export default function CoinList({ coins = [] }: Props) {
  const router = useRouter()

  const onClick = ({ id }: Coin) => router.push(`${ROUTES.COIN}/${id}`)

  return (
    <Stack spacing={1}>
      {coins.map((coin) => (
        <CoinItem key={coin.id} coin={coin} onClick={() => onClick(coin)} />
      ))}
    </Stack>
  )
}
