import { IFundStatistics } from "../../domain";
import { formatNumber, formatPercentage } from "../../../common/formatters";


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
    sharpeRatioFormatted: formatNumber(statistics.sharpeRatio),
    past12MonthsAverageNetTotalValueFormatted: formatNumber(statistics.past12MonthsAverageNetTotalValue)
  };
};