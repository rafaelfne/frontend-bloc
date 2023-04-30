import { inject, injectable } from "inversify";
import { Either, IHttpProvider } from "../../common";
import { IUnexpectedError } from "../../common/domain/DataError";
import { IFund, IFundStatistics } from "../domain/entity";
import { GetFundParams, IFundsRepository } from "../domain/repository";
import { parseFund } from "./parse/ParseFund";

@injectable()
export class FundsRepository implements IFundsRepository {
  constructor(@inject("IHttpProvider") private httpProvider: IHttpProvider) {}
  getFundByName(params: GetFundParams): Promise<Either<IUnexpectedError,IFund>> {
    return new Promise((resolve) => {
      this.httpProvider.get<IFund>(`/v1/funds/${params.name}`)
      .then(async (response) => {
        const { data } = await this.httpProvider.get<IFundStatistics>(`/v1/funds/${params.name}/statistics`);
        resolve(Either.right(parseFund(response.data, data)));
      })
      .catch((error) => {
        resolve(Either.left({ kind: "UnexpectedError", error }));
      });
    });
  }
}
