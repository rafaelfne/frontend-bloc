import { ViewLogic, IUsecase } from "../../common";
import { TStockState } from "./StockState";
import { GetStockParams } from "../domain";
export declare class StockViewLogic extends ViewLogic<TStockState> {
    private getStockUsecase;
    constructor(getStockUsecase: IUsecase);
    getStock(params: GetStockParams): Promise<void>;
    private handleError;
}
