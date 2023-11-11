'use client'

import styles from './page.module.css'
import { useState } from 'react'
import { Pagination } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useCoinsQuery } from '@/lib/redux/features/coinSlice'
import { RESULTS_LIMIT, ROUTES } from '@/lib/constants'
import CoinList from '@/components/coin-list/coin-list'
import SearchBar from '@/components/search-bar/search-bar'
import Loading from '@/components/loading/loading'
import ErrorMessage from '@/components/error-message/error-message'
import { Coin } from '@/lib/types'

export default function Home() {
  const router = useRouter()
  const [page, setPage] = useState(1)
  const { data, isLoading, isSuccess, error } = useCoinsQuery({
    start: (page - 1) * RESULTS_LIMIT,
    limit: RESULTS_LIMIT,
  })

  const getPageCount = (total: number) => Math.ceil(total / RESULTS_LIMIT)
  const onPageChange = (e: any, page: number) => setPage(page)
  const onCoinClick = (coin: Coin) => router.push(`${ROUTES.COIN}/${coin.id}`)

  if (error) return <ErrorMessage />
  if (isLoading) return <Loading />
  if (isSuccess)
    return (
      <div className={styles.home}>
        <SearchBar />
        <CoinList coins={data.coins} onClick={onCoinClick} />
        <Pagination
          page={page}
          count={getPageCount(data.total)}
          onChange={onPageChange}
        />
      </div>
    )
}
