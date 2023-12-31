import { CoinsResponse, CoinsData, Coin } from '@/lib/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const coinSlice = createApi({
  reducerPath: 'coinApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coinlore.net/api/',
  }),

  endpoints: (builder) => ({
    coins: builder.query<CoinsData, { start: number; limit: number }>({
      query: ({ start, limit }) => `tickers/?start=${start}&limit=${limit}`,
      transformResponse: (response: CoinsResponse, meta, arg) => ({
        coins: response.data,
        pageCount: Math.ceil(response.info.coins_num / arg.limit),
      }),
    }),
    coinById: builder.query<Coin, { id: string }>({
      query: ({ id }) => `ticker/?id=${id}`,
      transformResponse: (response: Coin[]) => response[0],
    }),
  }),
})

export const { useCoinsQuery, useCoinByIdQuery } = coinSlice
