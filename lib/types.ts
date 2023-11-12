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

export interface CoinsResponse {
  data: Coin[]
  info: {
    coins_num: number
    time: number
  }
}

export type CoinsData = {
  coins: Coin[]
  pageCount: number
}
