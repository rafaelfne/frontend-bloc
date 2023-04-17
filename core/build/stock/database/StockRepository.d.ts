import { DataError, Either } from "../../common";
import { GetStockParams, IStockRepository, IStock } from "..";
export declare class StockRepository implements IStockRepository {
    private httpProvider;
    getStock(params: GetStockParams): Promise<Either<DataError, IStock>>;
}
