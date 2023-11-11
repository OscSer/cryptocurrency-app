import { Coin } from '@/lib/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const coinSlice = createApi({
  reducerPath: 'coinApi',
  refetchOnFocus: true,

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coinlore.net/api/',
  }),

  endpoints: (builder) => ({
    getCoins: builder.query<Coin[], { start: number; limit: number }>({
      query: ({ start, limit }) => `tickers/?start=${start}&limit=${limit}`,
      transformResponse: (response: any) => response.data,
    }),

    getCoinById: builder.query<Coin, { id: string }>({
      query: ({ id }) => `ticker/?id=${id}`,
      transformResponse: (response: any) => response[0],
    }),
  }),
})

export const { useGetCoinsQuery, useGetCoinByIdQuery } = coinSlice
