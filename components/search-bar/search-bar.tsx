import styles from './search-bar.module.css'
import { IconListSearch } from '@tabler/icons-react'
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useCoinsQuery } from '@/lib/redux/features/coinSlice'
import { Coin } from '@/lib/types'
import { MAX_RESULTS_LIMIT } from '@/lib/constants'
import { filterCoinsByQuery } from '@/lib/helper'

interface Props {
  onSearch: (coins: Coin[] | undefined) => void
}

export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState('')
  const { data } = useCoinsQuery({ start: 0, limit: MAX_RESULTS_LIMIT })

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length === 0) {
        onSearch(undefined)
      } else {
        onSearch(filterCoinsByQuery(data?.coins, query))
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [data, query])

  return (
    <FormControl className={styles.searchBar} variant="outlined">
      <InputLabel htmlFor="search-bar">Search</InputLabel>
      <OutlinedInput
        id="search-bar"
        label="Search"
        autoComplete="off"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconListSearch />
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
