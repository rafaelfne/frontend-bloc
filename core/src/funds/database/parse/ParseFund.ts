import { formatDate, formatNumber } from "common/formatters";
import { IFund, IFundStatistics } from "../../domain";
import { parseStatistics } from "./ParseStatistics";

export const parseFund = (fund: IFund, statistics?: IFundStatistics): IFund => {
  return {
    id: fund.id,
    name: fund.name,
    legalName: fund.legalName,
    document: fund.document,
    formattedDocument: fund.document.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5'),
    status: fund.status,
    identifier: fund.identifier,
    quoteValue: fund.quoteValue,
    quoteValueFormatted: formatNumber(fund.quoteValue),
    initialDate: formatDate(fund.initialDate),
    netTotalValue: fund.netTotalValue,
    netTotalValueFormatted: formatNumber(fund.netTotalValue),
    statitiscs: parseStatistics(fund.statitiscs || statistics)
  };
};