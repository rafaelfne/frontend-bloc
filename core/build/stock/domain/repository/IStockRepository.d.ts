import { DataError, Either } from "../../../common/domain";
import { IStock } from "../entity";
export type GetStockParams = {
    symbol: string;
    interval?: "1m" | "2m" | "5m" | "15m" | "30m" | "60m" | "1d" | "1wk" | "1mo";
    range?: "1d" | "5d" | "1mo" | "3mo" | "6mo" | "1y" | "2y" | "5y" | "10y" | "ytd" | "max";
    region?: "US" | "BR" | "AU" | "CA" | "FR" | "DE" | "HK" | "IN" | "IT" | "ES" | "GB" | "SG";
    inclidePrePost?: boolean;
    useYfid?: boolean;
    includeAdjustedClose?: boolean;
    events?: string;
};
export interface IStockRepository {
    getStock(params: GetStockParams): Promise<Either<DataError, IStock>>;
}
