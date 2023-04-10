import { GetStockParams, IStock } from "../domain";
export interface ICommonStockState {
    params?: GetStockParams;
}
export interface ILoadingStockState {
    kind: "LoadingStockState";
}
export interface IErrorStockState {
    kind: "ErrorStockState";
    error: string;
}
export interface ILoadedStockState {
    kind: "LoadedStockState";
    stock: IStock;
}
export type TStockState = ICommonStockState & (ILoadingStockState | IErrorStockState | ILoadedStockState);
export declare const stockInitialState: TStockState;
