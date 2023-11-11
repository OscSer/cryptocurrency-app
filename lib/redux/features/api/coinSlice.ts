import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Coin {
  id: number
  symbol: string
  name: string
  nameid: string
  rank: number
  price_usd: number
  percent_change_24h: number
  percent_change_1h: number
  percent_change_7d: number
  price_btc: number
  market_cap_usd: number
  volume24: number
  volume24a: number
  csupply: number
  tsupply: number
  msupply: number
}

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
