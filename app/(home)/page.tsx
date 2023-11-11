'use client'

import styles from './page.module.css'
import { useState } from 'react'
import { useGetCoinsQuery } from '@/redux/features/api/coinSlice'

export default function Home() {
  const limit = 50
  const [start, setStart] = useState(0)
  const { data, isLoading, isSuccess, error } = useGetCoinsQuery({
    limit,
    start,
  })

  const onNext = () => setStart((s) => s + limit)
  const onPrev = () => setStart((s) => s - limit)

  return (
    <>
      <button onClick={onPrev} disabled={!start}>
        prev
      </button>
      <button onClick={onNext}>next</button>
      {data?.map((coin) => (
        <p key={coin.id}>{coin.name}</p>
      ))}
    </>
  )
}
