import { IFundStatistics } from "funds/domain";
import { formatPercentage } from "common/formatters";


export const parseStatistics = (statistics: IFundStatistics): IFundStatistics => {
  return {
    monthlyReturn: statistics.monthlyReturn,
    monthlyReturnFormatted: formatPercentage(statistics.monthlyReturn),
    annualReturn: statistics.annualReturn,
    inceptionReturn: statistics.inceptionReturn,
    past12MonthsReturn: statistics.past12MonthsReturn,
    past12MonthsVolatility: statistics.past12MonthsVolatility,
    sharpeRatio: statistics.sharpeRatio,
    past12MonthsAverageNetTotalValue: statistics.past12MonthsAverageNetTotalValue,
    annualReturnFormatted: formatPercentage(statistics.annualReturn),
    inceptionReturnFormatted: formatPercentage(statistics.inceptionReturn),
    past12MonthsReturnFormatted: formatPercentage(statistics.past12MonthsReturn),
    past12MonthsVolatilityFormatted: formatPercentage(statistics.past12MonthsVolatility),
    sharpeRatioFormatted: formatPercentage(statistics.sharpeRatio),
    past12MonthsAverageNetTotalValueFormatted: formatPercentage(statistics.past12MonthsAverageNetTotalValue)
  };
};