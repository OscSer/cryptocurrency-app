import { Avatar } from '@mui/material'

interface Props {
  symbol: string
}

export default function CoinImage({ symbol }: Props) {
  return (
    <Avatar
      alt={symbol}
      src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
    />
  )
}
