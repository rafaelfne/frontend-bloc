import { Either } from "../../common";
import { IUnexpectedError } from "../../common/domain/DataError";
import { IFund } from "../domain/entity";
import { GetFundParams, IFundsRepository } from "../domain/repository";
export declare class FundsRepository implements IFundsRepository {
    private httpProvider;
    getFundByName(params: GetFundParams): Promise<Either<IUnexpectedError, IFund>>;
}
