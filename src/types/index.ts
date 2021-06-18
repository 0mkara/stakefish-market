export interface IExchange {
  id: string;
  name: string;
  year_established: number;
  country?: null;
  description: string;
  url: string;
  image: string;
  has_trading_incentive: boolean;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
}

export interface IExchangeInfo {
  name: string;
  year_established: number;
  country: string;
  description: string;
  url: string;
  image: string;
  facebook_url: string;
  reddit_url: string;
  telegram_url: string;
  slack_url: string;
  other_url_1: string;
  other_url_2: string;
  twitter_handle: string;
  has_trading_incentive: boolean;
  centralized: boolean;
  public_notice: string;
  alert_notice: string;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
  tickers?: (TickersEntity)[] | null;
  status_updates?: (StatusUpdatesEntity)[] | null;
}
export interface TickersEntity {
  base: string;
  target: string;
  market: Market;
  last: number;
  volume: number;
  converted_last: ConvertedLastOrConvertedVolume;
  converted_volume: ConvertedLastOrConvertedVolume;
  trust_score: string;
  bid_ask_spread_percentage: number;
  timestamp: string;
  last_traded_at: string;
  last_fetch_at: string;
  is_anomaly: boolean;
  is_stale: boolean;
  trade_url: string;
  token_info_url?: null;
  coin_id?: string | null;
  target_coin_id?: string | null;
}
export interface Market {
  name: string;
  identifier: string;
  has_trading_incentive: boolean;
}
export interface ConvertedLastOrConvertedVolume {
  btc: number;
  eth: number;
  usd: number;
}
export interface StatusUpdatesEntity {
  description: string;
  category: string;
  created_at: string;
  user: string;
  user_title: string;
  pin: boolean;
  project: Project;
}
export interface Project {
  type: string;
  id: string;
  name: string;
  image: Image;
}
export interface Image {
  thumb: string;
  small: string;
  large: string;
}
