import { Avatar } from '@mui/material'
import { IconFaceIdError } from '@tabler/icons-react'

interface Props {
  width?: number
  height?: number
  symbol: string
}

export default function CoinImage({ width = 40, height = 40, symbol }: Props) {
  return (
    <Avatar
      sx={{ width, height, backgroundColor: '#fff' }}
      alt={symbol}
      src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
    >
      <IconFaceIdError size={width} color="#5c5c5c" />
    </Avatar>
  )
}
