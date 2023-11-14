import colors from '@/components/colors.module.css'
import { Avatar } from '@mui/material'
import { IconFaceIdError } from '@tabler/icons-react'

interface Props {
  width?: number
  height?: number
  nameid: string
}

export default function CoinImage({ width = 35, height = 35, nameid }: Props) {
  return (
    <Avatar
      sx={{ width, height, backgroundColor: '#fff' }}
      alt={nameid}
      src={`https://c1.coinlore.com/img/50x50/${nameid}.png`}
    >
      <IconFaceIdError size={width} color={colors.faint} />
    </Avatar>
  )
}
