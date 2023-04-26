import { DataError, Either, IHttpProvider } from "../../common";
import { GetStockParams, IStockRepository, IStock } from "..";
export declare class StockRepository implements IStockRepository {
    private httpProvider;
    constructor(httpProvider: IHttpProvider);
    getStock(params: GetStockParams): Promise<Either<DataError, IStock>>;
}
