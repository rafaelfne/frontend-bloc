import { ITick } from "./ITick";

export interface IStock {
  symbol: string;
  currency: string;
  instrumentType: string;
  exchangeName: string;
  exchangeTimezoneName: string;
  regularMarketPrice: number;
  chartPreviousClose: number;
  priceHint: number;
  dividends: ITick[];
}