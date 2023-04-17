import { DataError, Either } from "../../../common";
import { IFund } from "../entity";

export type GetFundParams = {
  name: string;
}

export interface IFundsRepository {
  getFundByName(params: GetFundParams): Promise<Either<DataError, IFund>>;
}