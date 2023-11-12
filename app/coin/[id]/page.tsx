'use client'

import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useCoinByIdQuery } from '@/lib/redux/features/coinSlice'
import { ROUTES } from '@/lib/constants'
import Loading from '@/components/loading/loading'
import ErrorMessage from '@/components/error-message/error-message'
import { Button } from '@mui/material'
import { IconArrowBackUp } from '@tabler/icons-react'
import CoinDetail from '@/components/coin-detail/coin-detail'

interface Props {
  params: {
    id: string
  }
}

export default function CoinPage({ params }: Props) {
  const router = useRouter()
  const { data, isLoading, isSuccess, error } = useCoinByIdQuery({
    id: params.id,
  })

  const backToHome = () => router.push(ROUTES.HOME)

  if (isLoading) return <Loading />
  if (error || !data) return <ErrorMessage />
  if (isSuccess)
    return (
      <div className={styles.coinPage}>
        <Button size='large' startIcon={<IconArrowBackUp />} onClick={backToHome}>
          Home
        </Button>
        <CoinDetail coin={data} />
      </div>
    )
}
