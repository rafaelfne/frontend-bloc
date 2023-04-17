import { ViewLogic, IUsecase } from "../../common";
import { TFundState } from "./FundState";
import { GetFundParams } from "../domain";
export declare class FundViewLogic extends ViewLogic<TFundState> {
    private getFundUsecase;
    constructor(getFundUsecase: IUsecase);
    getFund(params: GetFundParams): Promise<void>;
    private handleError;
}
