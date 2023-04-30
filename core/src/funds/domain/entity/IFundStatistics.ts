export interface IFundStatistics {
  monthlyReturn: number;
  annualReturn: number;
  inceptionReturn: number;
  past12MonthsReturn: number;
  past12MonthsVolatility: number;
  sharpeRatio: number;
  past12MonthsAverageNetTotalValue: number;
  monthlyReturnFormatted: string;
  annualReturnFormatted: string;
  inceptionReturnFormatted: string;
  past12MonthsReturnFormatted: string;
  past12MonthsVolatilityFormatted: string;
  sharpeRatioFormatted: string;
  past12MonthsAverageNetTotalValueFormatted: string;
}