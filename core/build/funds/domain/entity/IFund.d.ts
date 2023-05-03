import { IFundStatistics } from "./IFundStatistics";
export interface IFund {
    id: string;
    name: string;
    legalName: string;
    document: string;
    formattedDocument: string;
    status: string;
    identifier: string;
    quoteValue: number;
    quoteValueFormatted: string;
    netTotalValue: number;
    netTotalValueFormatted: string;
    initialDate: string;
    initialDateFormatted: string;
    statistics: IFundStatistics;
    benchmark: string;
    shareholderQuantity: number;
}
