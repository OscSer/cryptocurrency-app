'use client'

import styles from './page.module.css'
import { useState } from 'react'
import { Pagination } from '@mui/material'
import { useCoinsQuery } from '@/lib/redux/features/coinSlice'
import { RESULTS_LIMIT } from '@/lib/constants'
import CoinList from '@/components/coin-list/coin-list'
import SearchBar from '@/components/search-bar/search-bar'
import Loading from '@/components/loading/loading'
import ErrorMessage from '@/components/error-message/error-message'
import { Coin } from '@/lib/types'

export default function Home() {
  const [filteredCoins, setFilteredCoins] = useState<Coin[]>()
  const [page, setPage] = useState(1)
  const { data, isLoading, isSuccess, error } = useCoinsQuery({
    start: (page - 1) * RESULTS_LIMIT,
    limit: RESULTS_LIMIT,
  })

  const onSearch = (coins: Coin[] | undefined) => setFilteredCoins(coins)
  const onPageChange = (e: any, page: number) => setPage(page)

  if (isLoading) return <Loading />
  if (error) return <ErrorMessage />
  if (isSuccess) {
    const dataToDisplay = !!filteredCoins ? filteredCoins : data.coins

    return (
      <div className={styles.home}>
        <SearchBar onSearch={onSearch} />
        <CoinList coins={dataToDisplay} />
        <Pagination
          hidden={!!filteredCoins}
          page={page}
          count={data.pageCount}
          onChange={onPageChange}
        />
      </div>
    )
  }
}
